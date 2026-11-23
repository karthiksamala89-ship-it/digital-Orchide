import React, { useState } from 'react';
import { TECH_SUBTRACKS } from '../data/content';

export const Programs = ({ onOpenHealthcareModal, onOpenTechModal, onEnquireClick }) => {
  const [activeTab, setActiveTab] = useState('sap');
  const currentSubtrack = TECH_SUBTRACKS[activeTab];

  return (
    <section className="w-full py-16 md:py-24 bg-surface" id="programs">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary">
              Industry-Vetted Career Tracks
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-on-surface tracking-tight">
              High-Paying MNC Accelerators (Zero Coding &amp; Cloud)
            </h2>
          </div>
          <p className="text-sm md:text-base text-on-surface-variant max-w-md">
            Choose a high-demand track with <strong>1 to 10 years experience support, ₹5-20 LPA packages</strong>, and complete documentation assistance in Kukatpally, Hyderabad.
          </p>
        </div>

        {/* Highlight Banner: SAP & Zero Coding Alert */}
        <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-tertiary-fixed via-primary-fixed to-surface-container-high border border-outline-variant/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0 shadow">
              <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm md:text-base font-extrabold text-on-surface">
                  NEW: SAP End User &amp; SAP SD Master Track
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-tertiary text-on-tertiary text-[11px] font-bold uppercase">
                  Zero Coding
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Targeting ₹5 LPA to ₹20 LPA in PAN India MNCs • 1 to 10 Years Experience Documentation Provided
              </p>
            </div>
          </div>
          <button
            onClick={() => onEnquireClick('SAP SD & SAP End User (Zero Coding • ₹5-20 LPA)')}
            className="px-6 py-2.5 rounded-full bg-on-surface text-surface text-xs md:text-sm font-bold shadow hover:bg-primary transition-all shrink-0"
          >
            Apply for SAP Batch →
          </button>
        </div>

        {/* Grid of Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Track 1: IT, Cloud & SAP Master Track (Span 7) */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-md border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  <span>100% MNC Aligned Track</span>
                </span>
                <span className="text-xs text-secondary flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[16px]">payments</span> ₹5 to 20 LPA
                </span>
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-bold text-on-surface">
                  SAP, Cloud &amp; Salesforce Enterprise Programs
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Specialized career tracks designed for graduates and working professionals. Includes complete real-time client scenarios, mock drills, and documentation assistance.
                </p>
              </div>

              {/* Interactive Sub-Tracks Tab Switcher */}
              <div className="flex flex-col gap-3 pt-1">
                <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-xl border border-outline-variant/30">
                  <button
                    onClick={() => setActiveTab('sap')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'sap'
                        ? 'bg-surface-container-lowest text-primary shadow-sm ring-1 ring-primary/20'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">stars</span>
                    <span>SAP SD &amp; End User</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('salesforce')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-bold transition-all ${
                      activeTab === 'salesforce'
                        ? 'bg-surface-container-lowest text-primary shadow-sm ring-1 ring-primary/20'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Salesforce CRM
                  </button>
                  <button
                    onClick={() => setActiveTab('healthcare')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-bold transition-all ${
                      activeTab === 'healthcare'
                        ? 'bg-surface-container-lowest text-primary shadow-sm ring-1 ring-primary/20'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Healthcare RCM
                  </button>
                </div>

                {/* Tab Content Box */}
                <div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container-low/80 border border-outline-variant/20 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-base md:text-lg font-bold text-on-surface">
                      {currentSubtrack.title}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-xs font-bold inline-block self-start sm:self-auto ${currentSubtrack.badgeColor}`}>
                      {currentSubtrack.badge}
                    </span>
                  </div>
                  
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {currentSubtrack.description}
                  </p>

                  {/* Highlights Grid */}
                  {currentSubtrack.highlights && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 border-y border-outline-variant/30 py-3">
                      <div className="flex flex-col">
                        <span className="text-[11px] text-secondary font-medium">Experience Level</span>
                        <span className="text-xs font-bold text-on-surface">{currentSubtrack.highlights.experience}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] text-secondary font-medium">Salary Package</span>
                        <span className="text-xs font-bold text-primary">{currentSubtrack.highlights.salary}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] text-secondary font-medium">Coding Needed?</span>
                        <span className="text-xs font-bold text-tertiary">{currentSubtrack.highlights.codingRequired}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] text-secondary font-medium">Placement Scope</span>
                        <span className="text-xs font-bold text-on-surface">{currentSubtrack.highlights.placement}</span>
                      </div>
                      <div className="flex flex-col sm:col-span-2">
                        <span className="text-[11px] text-secondary font-medium">Documentation Support</span>
                        <span className="text-xs font-bold text-on-surface">{currentSubtrack.highlights.documentation}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2 pt-1 text-xs md:text-sm text-on-surface">
                    {currentSubtrack.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights badge bar */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-semibold">
                  Zero Coding Curriculum
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-semibold">
                  PAN India MNC Referrals
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-semibold">
                  1-10 Yrs BGC Clearance Support
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 flex items-center gap-3 mt-6 border-t border-surface-container-high/60">
              <button
                onClick={() => onEnquireClick(activeTab === 'sap' ? 'SAP SD & SAP End User (Zero Coding • ₹5-20 LPA)' : activeTab === 'salesforce' ? 'Salesforce (Admin & Dev/LWC)' : 'US Healthcare & Medical Billing')}
                className="flex-1 text-center py-3 px-4 rounded-xl bg-primary text-on-primary text-sm font-bold hover:bg-primary-container transition-colors shadow-sm"
              >
                Apply for {activeTab === 'sap' ? 'SAP SD & End User' : activeTab === 'salesforce' ? 'Salesforce' : 'Healthcare'}
              </button>
              <button
                onClick={onOpenTechModal}
                className="py-3 px-4 rounded-xl bg-surface-container-high text-on-surface text-sm font-semibold hover:bg-surface-variant transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span>Syllabus PDF</span>
              </button>
            </div>
          </div>

          {/* Track 2: US Healthcare & Medical Billing (Span 5) */}
          <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-md border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <div className="flex flex-col gap-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">
                  Zero Coding Track
                </span>
                <span className="text-xs text-secondary flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[16px]">schedule</span> 10 Weeks
                </span>
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-on-surface">
                  US Healthcare &amp; Medical Billing
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Fast-track career transition for non-IT graduates into US healthcare MNCs. Hands-on Revenue Cycle Management (RCM), claim denial resolution, and live software sandbox.
                </p>
              </div>

              {/* Key Highlights table */}
              <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between text-xs text-on-surface">
                <div>
                  <span className="text-secondary block">Eligible Degrees:</span>
                  <strong>B.Com, B.Sc, BBA, BA, B.Tech</strong>
                </div>
                <div className="text-right">
                  <span className="text-secondary block">Starting Package:</span>
                  <strong className="text-primary">₹3.5 to ₹8.5 LPA</strong>
                </div>
              </div>

              {/* Key Competencies Checklist */}
              <div className="flex flex-col gap-2.5 pt-1">
                <span className="text-xs uppercase tracking-wider font-bold text-on-surface-variant">
                  Key Competencies:
                </span>
                
                <div className="flex items-start gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Zero Coding Required:</strong> Pure medical billing, insurance verification &amp; patient registration.</span>
                </div>

                <div className="flex items-start gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Coding Basics:</strong> ICD-10-CM diagnosis, CPT procedures &amp; superbills review.</span>
                </div>

                <div className="flex items-start gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span><strong>AR &amp; Denial Resolution:</strong> Clearinghouse scrubbers, ERA/EOB posting &amp; insurance appeals.</span>
                </div>

                <div className="flex items-start gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span><strong>1-5 Yrs Experience Support:</strong> Complete documentation assistance for background verification.</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-medium">
                  Live Billing Sandbox
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-medium">
                  Weekend / Weekday Batches
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-medium">
                  Kukatpally Campus &amp; Online
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 flex items-center gap-3 mt-6 border-t border-surface-container-high/60">
              <button
                onClick={() => onEnquireClick('US Healthcare & Medical Billing')}
                className="flex-1 text-center py-3 px-4 rounded-xl bg-primary text-on-primary text-sm font-bold hover:bg-primary-container transition-colors shadow-sm"
              >
                Enquire for Healthcare
              </button>
              <button
                onClick={onOpenHealthcareModal}
                className="py-3 px-4 rounded-xl bg-surface-container-high text-on-surface text-sm font-semibold hover:bg-surface-variant transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span>Syllabus PDF</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
