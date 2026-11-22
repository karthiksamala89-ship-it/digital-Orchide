# Digital Tech Orchid - Training Portal & Career Accelerator

A full-stack modern web portal for **Digital Tech Orchid Training Institute** specializing in US Healthcare & Medical Billing, Salesforce Cloud CRM, and Full-Stack Web Development.

## 📍 Institute Contact & Campus Details
- **Mobile Number:** +91 78428 39491 (`7842839491`)
- **Direct WhatsApp:** [Chat on WhatsApp](https://wa.me/917842839491)
- **Campus Address:** Kukatpally, Hyderabad, Telangana, India
- **Office Hours:** Monday to Saturday: 9:00 AM - 7:00 PM IST
- **Email:** admissions@digitaltechorchid.com

---

## 🏗️ Technology Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Canvas-Confetti, Google Material Symbols, Inter font
- **Backend:** Node.js, Express.js REST API
- **File Uploads:** Multer (supports resume upload in .pdf, .doc, .docx formats up to 5MB)
- **Database:** Persistent JSON file database with real-time CRUD operations
- **Admin Management:** Secure Admin Lead Management Desk with lead status workflow, resume downloads, and CSV export.

---

## 🚀 How to Run the Project

### Prerequisites
Make sure **Node.js** (v18+) is installed.

### 1. Open in VS Code
Open the project directory in VS Code:
```
File -> Open Folder -> C:\Users\karth\.gemini\antigravity\scratch\orchid-portal
```

### 2. Start Both Backend & Frontend Concurrently
In VS Code Terminal (`Ctrl + ~`), run:
```bash
npm run dev:all
```
*(If Windows PowerShell restricts scripts, run: `npm.cmd run dev:all` or `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`)*

- **Frontend App:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5000](http://localhost:5000)
- **Admin Desk Password:** `orchid2026`

---

## 🛠️ Individual Commands

- `npm run dev` : Starts frontend Vite server only (Port 3000)
- `npm run server` : Starts Express backend API server only (Port 5000)
- `npm run build` : Builds production-ready static assets in `dist/`
- `npm start` : Starts production server with static hosting
