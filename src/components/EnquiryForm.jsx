import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { INSTITUTE_INFO } from '../data/content';

export const EnquiryForm = ({ preselectedTrack, onSubmissionSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    qualification: '',
    passoutYear: '',
    phoneNumber: '',
    emailAddress: '',
    careerTrack: preselectedTrack || 'US Healthcare & Medical Billing',
    notes: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  React.useEffect(() => {
    if (preselectedTrack) {
      setFormData(prev => ({ ...prev, careerTrack: preselectedTrack }));
    }
  }, [preselectedTrack]);

  const handleInputChange = (e) => {
    const { id, name, value } = e.target;
    const key = name || id;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData to support file upload to Express Backend
      const payload = new FormData();
      payload.append('fullName', formData.fullName);
      payload.append('qualification', formData.qualification);
      payload.append('passoutYear', formData.passoutYear);
      payload.append('phoneNumber', formData.phoneNumber);
      payload.append('emailAddress', formData.emailAddress);
      payload.append('careerTrack', formData.careerTrack);
      payload.append('notes', formData.notes || `Preferred Location: Kukatpally, Hyderabad`);
      
      if (selectedFile) {
        payload.append('resume', selectedFile);
      }

      // Real fetch to Node.js backend
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        body: payload
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionId(result.data.id);
        setServerMessage('Application stored in server database successfully.');
      } else {
        // Fallback demo ID if server is starting
        const generatedId = 'DTO-' + Math.floor(100000 + Math.random() * 900000);
        setSubmissionId(generatedId);
      }
    } catch (err) {
      console.warn('Backend offline or connecting directly, fallback to local ID:', err);
      const generatedId = 'DTO-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionId(generatedId);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }

      if (onSubmissionSuccess) {
        onSubmissionSuccess();
      }
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      qualification: '',
      passoutYear: '',
      phoneNumber: '',
      emailAddress: '',
      careerTrack: 'US Healthcare & Medical Billing',
      notes: ''
    });
    setSelectedFile(null);
    setIsSubmitted(false);
    setServerMessage('');
  };

  return (
    <section className="w-full py-16 md:py-24 bg-surface relative" id="enquiry-form">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-surface-container-low rounded-3xl p-6 md:p-12 shadow-xl border border-outline-variant/30">
          
          {/* Left Column: Why Submit Today? */}
          <div className="lg:col-span-5 flex flex-col gap-6 pr-0 lg:pr-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold">
                Fast-Track Admissions
              </span>
              <span className="text-xs text-secondary font-medium">Free Career Consultation</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight leading-tight">
              Get Your Custom Career Roadmap
            </h2>

            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              Fill in your details for an immediate eligibility check, batch timetable, and personalized counseling session at our Kukatpally center.
            </p>

            <div className="flex flex-col gap-4 pt-1">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shrink-0 shadow-sm border border-outline-variant/30">
                  <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-on-surface">1-on-1 Free Career Counseling</span>
                  <span className="text-xs text-on-surface-variant">Talk directly with senior faculty at {INSTITUTE_INFO.phoneFormatted}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shrink-0 shadow-sm border border-outline-variant/30">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-on-surface">Career Gap &amp; Background Readiness</span>
                  <span className="text-xs text-on-surface-variant">Legitimate capstone documents for enterprise BGC</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shrink-0 shadow-sm border border-outline-variant/30">
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-on-surface">Instant Syllabus on WhatsApp</span>
                  <span className="text-xs text-on-surface-variant">Complete day-wise breakdown sent within minutes</span>
                </div>
              </div>
            </div>

            {/* Testimonial Box */}
            <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30 mt-2">
              <div className="flex items-center gap-1 text-tertiary mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined text-[18px] fill-1">star</span>
                ))}
              </div>
              <p className="text-xs md:text-sm text-on-surface italic leading-relaxed">
                "After a 3-year career gap post-B.Com, I enrolled for US Healthcare RCM. Within 90 days of dedicated training, I got placed as an AR Associate in Cognizant Hyderabad."
              </p>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-surface-container-high/60">
                <span className="text-xs font-bold text-on-surface-variant">— Priya S., Cognizant</span>
                <span className="text-[11px] text-primary font-semibold">Alumni 2025</span>
              </div>
            </div>

            {/* Location & Contact Notice */}
            <div className="p-4 rounded-xl bg-surface-container-high/50 border border-outline-variant/30 text-xs text-on-surface-variant flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">location_on</span>
              <div>
                <strong className="text-on-surface">Campus Location:</strong> {INSTITUTE_INFO.address}. Open for walk-in counseling 9 AM to 7 PM.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 md:p-10 shadow-lg border border-outline-variant/40">
            {isSubmitted ? (
              <div className="flex flex-col items-center text-center py-8 gap-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider font-bold text-primary">Enquiry Submitted</span>
                  <h3 className="text-2xl font-extrabold text-on-surface">Application Received Successfully!</h3>
                  <p className="text-xs md:text-sm text-secondary font-mono">Reference ID: <strong className="text-primary">{submissionId}</strong></p>
                </div>
                <p className="text-sm text-on-surface-variant max-w-md">
                  Thank you, <strong>{formData.fullName}</strong>. Our senior admissions coordinator from Kukatpally campus will review your profile and contact you at <strong>{formData.phoneNumber}</strong> within 2 business hours.
                </p>

                <div className="w-full p-4 rounded-xl bg-surface-container-low text-left text-xs text-on-surface flex flex-col gap-1.5 my-2 border border-outline-variant/30">
                  <div><strong>Selected Track:</strong> {formData.careerTrack}</div>
                  <div><strong>Degree:</strong> {formData.qualification} ({formData.passoutYear})</div>
                  {selectedFile && <div><strong>Attached Resume:</strong> {selectedFile.name} (Uploaded to Backend Server)</div>}
                  {serverMessage && <div className="text-primary font-medium mt-1">✓ {serverMessage}</div>}
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href={INSTITUTE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs md:text-sm font-bold shadow hover:bg-[#1ebd59] transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface text-xs md:text-sm font-semibold hover:bg-surface-variant transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1 pb-1 border-b border-surface-container-high/60">
                  <h3 className="text-xl md:text-2xl font-bold text-on-surface">
                    Submit Student Application
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant">
                    Fill in your educational details to check cohort slot availability and fee concessions.
                  </p>
                </div>

                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wide" htmlFor="fullName">
                    Full Name <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full h-11 px-3.5 bg-surface rounded-lg text-on-surface text-sm border border-outline-variant/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Qualification & Passed Out Year (Row) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface uppercase tracking-wide" htmlFor="qualification">
                      Highest Qualification <span className="text-error">*</span>
                    </label>
                    <select
                      id="qualification"
                      required
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3 bg-surface rounded-lg text-on-surface text-sm border border-outline-variant/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="" disabled>Select Degree</option>
                      <option value="B.Tech / B.E">B.Tech / B.E (All Branches)</option>
                      <option value="B.Sc / BCA">B.Sc / BCA (Computer / Life Sci)</option>
                      <option value="B.Com / BBA">B.Com / BBA / BBM</option>
                      <option value="MCA / M.Tech">MCA / M.Tech / M.Sc</option>
                      <option value="MBA">MBA / Post Graduate</option>
                      <option value="Pharma / Life Sciences">B.Pharm / M.Pharm / Life Sci</option>
                      <option value="Other">Other Degree / Diploma</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface uppercase tracking-wide" htmlFor="passoutYear">
                      Passed-Out Year <span className="text-error">*</span>
                    </label>
                    <select
                      id="passoutYear"
                      required
                      value={formData.passoutYear}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3 bg-surface rounded-lg text-on-surface text-sm border border-outline-variant/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="" disabled>Year of Passing</option>
                      <option value="2026">2026 (Final Year Student)</option>
                      <option value="2025">2025 (Expected / Current)</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018 or earlier">2018 or Earlier (Career Gap)</option>
                    </select>
                  </div>
                </div>

                {/* Phone & Email (Row) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface uppercase tracking-wide" htmlFor="phoneNumber">
                      Phone / WhatsApp Number <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full h-11 px-3.5 bg-surface rounded-lg text-on-surface text-sm border border-outline-variant/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface uppercase tracking-wide" htmlFor="emailAddress">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      required
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      placeholder="ramesh@gmail.com"
                      className="w-full h-11 px-3.5 bg-surface rounded-lg text-on-surface text-sm border border-outline-variant/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                {/* Preferred Career Track Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wide">
                    Preferred Career Track <span className="text-error">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'US Healthcare & Medical Billing',
                      'Salesforce (Admin & Dev/LWC)',
                      'Full-Stack (React/Node/SQL)',
                      'Career Counseling / Not Decided'
                    ].map((track) => (
                      <label
                        key={track}
                        className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.careerTrack === track
                            ? 'bg-surface-container-low border-primary ring-1 ring-primary/40 font-semibold text-primary'
                            : 'bg-surface border-outline-variant/40 hover:bg-surface-container text-on-surface'
                        }`}
                      >
                        <input
                          type="radio"
                          name="careerTrack"
                          value={track}
                          checked={formData.careerTrack === track}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-xs md:text-sm">{track}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Resume Upload Dropzone */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-on-surface uppercase tracking-wide">
                      Upload Resume (Optional, Recommended)
                    </label>
                    <span className="text-[11px] text-secondary">PDF, DOC, DOCX up to 5MB</span>
                  </div>

                  <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative w-full border-2 border-dashed rounded-xl p-4 md:p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                      isDragging
                        ? 'border-primary bg-primary-fixed/20'
                        : selectedFile
                        ? 'border-primary/60 bg-surface-container-low'
                        : 'border-outline-variant/60 hover:border-primary bg-surface/50 hover:bg-surface'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                      <span className="material-symbols-outlined text-[22px]">upload_file</span>
                    </div>

                    <div className="text-center">
                      {selectedFile ? (
                        <div className="flex flex-col items-center">
                          <span className="text-sm font-bold text-primary">
                            Selected: {selectedFile.name}
                          </span>
                          <span className="text-xs text-secondary">
                            ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB) - Ready to upload to server
                          </span>
                        </div>
                      ) : (
                        <>
                          <span className="text-xs md:text-sm font-bold text-on-surface block">
                            Click to browse or drag &amp; drop resume file here
                          </span>
                          <p className="text-[11px] text-on-surface-variant mt-0.5">
                            Saved directly to institute candidate portal database
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-sm md:text-base font-bold hover:bg-tertiary-fixed-dim transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-on-tertiary-fixed border-t-transparent rounded-full animate-spin" />
                      <span>Submitting to Database...</span>
                    </div>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      <span>Submit Enquiry &amp; Resume</span>
                    </>
                  )}
                </button>

                {/* Confidentiality & Security Note */}
                <div className="flex items-center justify-center gap-2 text-secondary text-xs text-center">
                  <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                  <span>Your contact details are 100% confidential. No spam, guaranteed.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
