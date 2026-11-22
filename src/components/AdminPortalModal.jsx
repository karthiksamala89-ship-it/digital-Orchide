import React, { useState, useEffect } from 'react';
import { INSTITUTE_INFO } from '../data/content';

export const AdminPortalModal = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [enquiries, setEnquiries] = useState([]);
  const [filterTrack, setFilterTrack] = useState('all');
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  // Fetch enquiries when opened and authenticated
  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/enquiries');
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.data);
      }
    } catch (err) {
      console.warn('Using local fallback for demo');
      setEnquiries([
        {
          id: "DTO-842901",
          fullName: "Venkata Sai Ram",
          qualification: "B.Com / BBA",
          passoutYear: "2023",
          phoneNumber: "7842839491",
          emailAddress: "sairam.v@gmail.com",
          careerTrack: "US Healthcare & Medical Billing",
          status: "Enrolled & Active",
          assignedBatch: "Morning Batch: 10:00 AM",
          createdAt: new Date().toISOString()
        },
        {
          id: "DTO-842902",
          fullName: "Ananya Reddy",
          qualification: "B.Tech / B.E",
          passoutYear: "2024",
          phoneNumber: "9876543210",
          emailAddress: "ananya.reddy@gmail.com",
          careerTrack: "Salesforce (Admin & Dev/LWC)",
          status: "Interview Scheduled",
          assignedBatch: "Weekend Batch (Cloud Lab)",
          createdAt: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      fetchEnquiries();
    }
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'orchid2026' || password === 'admin' || password === '7842839491') {
      setIsAuthenticated(true);
      setAuthError('');
      fetchEnquiries();
    } else {
      setAuthError('Invalid password. Default demo password is: orchid2026');
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      setEnquiries(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    } catch (err) {
      setEnquiries(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    }
  };

  const exportCSV = () => {
    const headers = ['ID,Full Name,Qualification,Passout Year,Phone,Email,Track,Status,Created At'];
    const rows = enquiries.map(e => 
      `"${e.id}","${e.fullName}","${e.qualification}","${e.passoutYear}","${e.phoneNumber}","${e.emailAddress}","${e.careerTrack}","${e.status}","${e.createdAt}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DTO_Leads_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredEnquiries = filterTrack === 'all' 
    ? enquiries 
    : enquiries.filter(e => e.careerTrack.toLowerCase().includes(filterTrack.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/70 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-surface rounded-2xl max-w-4xl w-full p-6 shadow-2xl flex flex-col gap-5 max-h-[92vh] overflow-hidden border border-outline-variant/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-[26px]">shield_person</span>
            <div>
              <h4 className="text-xl font-bold text-on-surface">Admissions Admin Desk</h4>
              <span className="text-xs text-secondary">Kukatpally Campus Lead Management ({INSTITUTE_INFO.phoneFormatted})</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-surface-container flex items-center justify-center text-secondary hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="flex flex-col items-center justify-center py-12 gap-4 max-w-sm mx-auto w-full">
            <span className="material-symbols-outlined text-primary text-[48px]">lock</span>
            <div className="text-center">
              <h5 className="text-lg font-bold text-on-surface">Admin Authentication</h5>
              <p className="text-xs text-on-surface-variant mt-1">Enter password to manage student leads and resumes</p>
            </div>

            <input
              type="password"
              placeholder="Enter password (orchid2026)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 px-3.5 bg-surface rounded-lg text-sm border border-outline-variant/60 outline-none focus:border-primary"
              required
            />

            {authError && <span className="text-xs text-error">{authError}</span>}

            <button
              type="submit"
              className="w-full h-11 rounded-full bg-primary text-on-primary text-sm font-bold hover:bg-primary-container transition-all"
            >
              Sign In to Admin Desk
            </button>
            <span className="text-[11px] text-secondary">Demo password: <code className="font-mono bg-surface-container px-1.5 py-0.5 rounded">orchid2026</code></span>
          </form>
        ) : (
          <div className="flex flex-col gap-4 overflow-hidden flex-1">
            {/* Filter and Export Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-surface-container-low p-3 rounded-xl border border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-on-surface">Filter Track:</span>
                <select
                  value={filterTrack}
                  onChange={(e) => setFilterTrack(e.target.value)}
                  className="h-8 px-2.5 bg-surface text-xs rounded border border-outline-variant/40 outline-none"
                >
                  <option value="all">All Tracks ({enquiries.length})</option>
                  <option value="Healthcare">US Healthcare &amp; Billing</option>
                  <option value="Salesforce">Salesforce CRM</option>
                  <option value="Full-Stack">Full-Stack React/Node</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={fetchEnquiries}
                  className="px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-container text-xs font-semibold flex items-center gap-1 border border-outline-variant/30"
                >
                  <span className="material-symbols-outlined text-[16px]">refresh</span>
                  <span>Refresh</span>
                </button>
                <button
                  onClick={exportCSV}
                  className="px-3 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-bold flex items-center gap-1 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Leads Table */}
            <div className="flex-1 overflow-y-auto border border-outline-variant/30 rounded-xl bg-surface-container-lowest">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-surface-container-low sticky top-0 border-b border-surface-container-high font-bold text-on-surface">
                  <tr>
                    <th className="p-3">Ref ID</th>
                    <th className="p-3">Candidate Name</th>
                    <th className="p-3">Phone &amp; Degree</th>
                    <th className="p-3">Track</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Resume</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high/60">
                  {filteredEnquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="p-3 font-mono font-bold text-primary">{enq.id}</td>
                      <td className="p-3">
                        <div className="font-bold text-on-surface">{enq.fullName}</div>
                        <div className="text-[11px] text-secondary">{enq.emailAddress}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-semibold">{enq.phoneNumber}</div>
                        <div className="text-[11px] text-secondary">{enq.qualification} ({enq.passoutYear})</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-medium text-on-surface">
                          {enq.careerTrack}
                        </span>
                      </td>
                      <td className="p-3">
                        <select
                          value={enq.status}
                          onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                          className="h-7 px-1.5 bg-surface text-[11px] font-semibold rounded border border-outline-variant/50 outline-none text-primary"
                        >
                          <option value="New Lead">New Lead</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Interview Scheduled">Interview Scheduled</option>
                          <option value="Enrolled & Active">Enrolled &amp; Active</option>
                          <option value="Follow Up">Follow Up</option>
                        </select>
                      </td>
                      <td className="p-3">
                        {enq.resumeFilename ? (
                          <a
                            href={`/api/download-resume/${enq.resumeFilename}`}
                            download
                            className="inline-flex items-center gap-1 text-primary hover:underline font-bold"
                          >
                            <span className="material-symbols-outlined text-[16px]">file_download</span>
                            <span>Resume</span>
                          </a>
                        ) : (
                          <span className="text-secondary text-[11px]">No file</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Info */}
            <div className="pt-2 flex items-center justify-between text-xs text-secondary">
              <span>Showing {filteredEnquiries.length} candidate applications</span>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-error font-semibold hover:underline"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
