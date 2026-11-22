import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'enquiries.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial seed records
const INITIAL_RECORDS = [
  {
    id: "DTO-842901",
    fullName: "Venkata Sai Ram",
    qualification: "B.Com / BBA",
    passoutYear: "2023",
    phoneNumber: "7842839491",
    emailAddress: "sairam.v@gmail.com",
    careerTrack: "US Healthcare & Medical Billing",
    resumeFilename: null,
    resumeOriginalName: null,
    status: "Enrolled & Active",
    assignedBatch: "Morning Batch: 10:00 AM (Kukatpally Lab)",
    notes: "Career gap cleared with RCM project documentation. Doing well in AR denial calls.",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "DTO-842902",
    fullName: "Ananya Reddy",
    qualification: "B.Tech / B.E",
    passoutYear: "2024",
    phoneNumber: "9876543210",
    emailAddress: "ananya.reddy@gmail.com",
    careerTrack: "Salesforce (Admin & Dev/LWC)",
    resumeFilename: null,
    resumeOriginalName: null,
    status: "Interview Scheduled",
    assignedBatch: "Weekend Batch (Cloud Lab)",
    notes: "Completed Apex Trigger Frameworks & LWC Capstone. Referred to Persistent Tech.",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "DTO-842903",
    fullName: "Mohammed Imran",
    qualification: "B.Sc / BCA",
    passoutYear: "2022",
    phoneNumber: "9123456780",
    emailAddress: "imran.m@outlook.com",
    careerTrack: "Full-Stack (React/Node/SQL)",
    resumeFilename: null,
    resumeOriginalName: null,
    status: "New Lead",
    assignedBatch: "Counseling Scheduled",
    notes: "Transitioning from non-coding background. Wants 1-on-1 counseling.",
    createdAt: new Date().toISOString()
  }
];

// Helper to read DB
export function readDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_RECORDS, null, 2), 'utf8');
      return INITIAL_RECORDS;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading database file:', err);
    return [];
  }
}

// Helper to write DB
export function writeDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing to database file:', err);
    return false;
  }
}

// Database Methods
export const db = {
  getAll: (filters = {}) => {
    let records = readDB();
    if (filters.track) {
      records = records.filter(r => r.careerTrack.toLowerCase().includes(filters.track.toLowerCase()));
    }
    if (filters.status) {
      records = records.filter(r => r.status.toLowerCase() === filters.status.toLowerCase());
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      records = records.filter(r => 
        r.fullName?.toLowerCase().includes(q) ||
        r.phoneNumber?.includes(q) ||
        r.emailAddress?.toLowerCase().includes(q) ||
        r.id?.toLowerCase().includes(q)
      );
    }
    return records;
  },

  getById: (id) => {
    const records = readDB();
    return records.find(r => r.id === id) || null;
  },

  getByPhone: (phone) => {
    const records = readDB();
    const cleanPhone = phone.replace(/\D/g, '');
    return records.filter(r => {
      const rPhone = (r.phoneNumber || '').replace(/\D/g, '');
      return rPhone.includes(cleanPhone) || cleanPhone.includes(rPhone);
    });
  },

  create: (data) => {
    const records = readDB();
    const newId = 'DTO-' + Math.floor(100000 + Math.random() * 900000);
    const newRecord = {
      id: newId,
      fullName: data.fullName,
      qualification: data.qualification,
      passoutYear: data.passoutYear,
      phoneNumber: data.phoneNumber,
      emailAddress: data.emailAddress,
      careerTrack: data.careerTrack,
      resumeFilename: data.resumeFilename || null,
      resumeOriginalName: data.resumeOriginalName || null,
      status: "New Lead",
      assignedBatch: "Admissions Review In-Progress",
      notes: data.notes || "Online application received via training portal.",
      createdAt: new Date().toISOString()
    };
    records.unshift(newRecord);
    writeDB(records);
    return newRecord;
  },

  updateStatus: (id, status, notes, assignedBatch) => {
    const records = readDB();
    const index = records.findIndex(r => r.id === id);
    if (index === -1) return null;

    if (status) records[index].status = status;
    if (notes !== undefined) records[index].notes = notes;
    if (assignedBatch !== undefined) records[index].assignedBatch = assignedBatch;
    records[index].updatedAt = new Date().toISOString();

    writeDB(records);
    return records[index];
  },

  delete: (id) => {
    const records = readDB();
    const filtered = records.filter(r => r.id !== id);
    if (filtered.length === records.length) return false;
    writeDB(filtered);
    return true;
  },

  getStats: () => {
    const records = readDB();
    const totalEnquiries = records.length;
    const healthcareCount = records.filter(r => r.careerTrack.includes('Healthcare')).length;
    const salesforceCount = records.filter(r => r.careerTrack.includes('Salesforce')).length;
    const fullstackCount = records.filter(r => r.careerTrack.includes('Full-Stack')).length;
    const enrolledCount = records.filter(r => r.status.includes('Enrolled')).length;

    return {
      totalEnquiries,
      healthcareCount,
      salesforceCount,
      fullstackCount,
      enrolledCount,
      placementRate: "94%",
      alumniPlaced: "1,800+"
    };
  }
};
