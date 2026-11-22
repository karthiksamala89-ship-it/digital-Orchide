import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { db } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Setup upload folder for student resumes
const UPLOADS_DIR = path.join(__dirname, 'uploads', 'resumes');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, 'resume-' + uniqueSuffix + ext);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = ['.pdf', '.doc', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only .pdf, .doc, and .docx files are allowed!'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploads
app.use('/uploads/resumes', express.static(UPLOADS_DIR));

// --- API ROUTES ---

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    institute: 'Digital Tech Orchid',
    campus: 'Kukatpally, Hyderabad',
    phone: '7842839491',
    timestamp: new Date().toISOString()
  });
});

// 2. Submit student enquiry (with optional resume upload)
app.post('/api/enquiries', upload.single('resume'), (req, res) => {
  try {
    const { fullName, qualification, passoutYear, phoneNumber, emailAddress, careerTrack, notes } = req.body;

    if (!fullName || !qualification || !passoutYear || !phoneNumber || !emailAddress) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const enquiryData = {
      fullName,
      qualification,
      passoutYear,
      phoneNumber,
      emailAddress,
      careerTrack: careerTrack || 'US Healthcare & Medical Billing',
      notes: notes || 'Student online submission from Kukatpally portal.',
      resumeFilename: req.file ? req.file.filename : null,
      resumeOriginalName: req.file ? req.file.originalname : null
    };

    const newEnquiry = db.create(enquiryData);

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully!',
      data: newEnquiry
    });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    res.status(500).json({ error: 'Failed to process application' });
  }
});

// 3. Get all student enquiries (with search & filtering)
app.get('/api/enquiries', (req, res) => {
  try {
    const { track, status, search } = req.query;
    const records = db.getAll({ track, status, search });
    res.json({
      success: true,
      count: records.length,
      data: records
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch enquiries' });
  }
});

// 4. Get specific enquiry by ID
app.get('/api/enquiries/:id', (req, res) => {
  try {
    const record = db.getById(req.params.id);
    if (!record) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    res.json({ success: true, data: record });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch enquiry' });
  }
});

// 5. Update enquiry status / notes (For Admin / Counseling Desk)
app.patch('/api/enquiries/:id', (req, res) => {
  try {
    const { status, notes, assignedBatch } = req.body;
    const updated = db.updateStatus(req.params.id, status, notes, assignedBatch);
    if (!updated) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    res.json({
      success: true,
      message: 'Status updated successfully',
      data: updated
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update enquiry' });
  }
});

// 6. Delete enquiry
app.delete('/api/enquiries/:id', (req, res) => {
  try {
    const deleted = db.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    res.json({ success: true, message: 'Enquiry removed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete enquiry' });
  }
});

// 7. Student Portal Lookup (by Phone Number)
app.get('/api/portal/track/:phone', (req, res) => {
  try {
    const records = db.getByPhone(req.params.phone);
    if (!records || records.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'No enrollment records found for this phone number. Please submit an enquiry.' 
      });
    }
    res.json({
      success: true,
      count: records.length,
      data: records
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to lookup candidate status' });
  }
});

// 8. Overall Portal & Lead Statistics
app.get('/api/stats', (req, res) => {
  try {
    const stats = db.getStats();
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// 9. Download Resume
app.get('/api/download-resume/:filename', (req, res) => {
  const filePath = path.join(UPLOADS_DIR, req.params.filename);
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ error: 'Resume file not found' });
  }
});

// 10. Admin Authentication
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if ((username === 'admin' || username === '7842839491') && (password === 'orchid2026' || password === 'admin123')) {
    return res.json({
      success: true,
      token: 'jwt_mock_dto_' + Date.now(),
      user: {
        username: 'Admin Desk',
        campus: 'Kukatpally, Hyderabad',
        role: 'Admissions Officer'
      }
    });
  }
  return res.status(401).json({ success: false, message: 'Invalid credentials. Use admin / orchid2026' });
});

// Serve frontend in production if dist exists
const DIST_PATH = path.join(__dirname, '..', 'dist');
if (fs.existsSync(DIST_PATH)) {
  app.use(express.static(DIST_PATH));
  app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_PATH, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` Digital Tech Orchid Backend API Server Running!`);
  console.log(` Port: http://localhost:${PORT}`);
  console.log(` Campus: Kukatpally, Hyderabad`);
  console.log(` Contact: 7842839491`);
  console.log(`====================================================`);
});
