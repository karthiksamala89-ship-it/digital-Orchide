import React, { useState } from 'react';
import { TECH_SUBTRACKS } from '../data/content';

export const Programs = ({ onOpenHealthcareModal, onOpenTechModal, onEnquireClick }) => {
  const [activeTab, setActiveTab] = useState('salesforce');
  const currentSubtrack = TECH_SUBTRACKS[activeTab];

  return (
    <section className="w-full py-16 md:py-24 bg-surface" id="programs">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary">
              High-Demand Career Tracks
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-on-surface tracking-tight">
              Two Industry-Vetted Accelerators Built for Guaranteed Hiring
            </h2>
          </div>
          <p className="text-sm md:text-base text-on-surface-variant max-w-md">
            Choose a focused, job-guaranteed track built around live industry projects, practical sandboxes, and dedicated mentors in Kukatpally &amp; Hyderabad.
          </p>
        </div>

        {/* Grid of Two Flagships */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Track 1: US Healthcare & Medical Billing (Span 5) */}
          <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-md border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <div className="flex flex-col gap-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">
                  High Demand Career Track
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
                  Hands-on training in Revenue Cycle Management (RCM), US insurance verification, medical coding (ICD-10/CPT), and live billing claim resolution.
                </p>
              </div>

              {/* Key Competencies Checklist */}
              <div className="flex flex-col gap-2.5 pt-2">
                <span className="text-xs uppercase tracking-wider font-bold text-on-surface-variant">
                  Key Competencies:
                </span>
                
                <div className="flex items-start gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Medical Billing &amp; RCM:</strong> Patient registration, copays, deductibles &amp; eligibility verification.</span>
                </div>

                <div className="flex items-start gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Coding Basics:</strong> ICD-10-CM diagnosis, CPT procedures &amp; superbills review.</span>
                </div>

                <div className="flex items-start gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Claims &amp; Denials:</strong> Clearinghouse scrubbers, ERA/EOB posting &amp; appeal workflows.</span>
                </div>

                <div className="flex items-start gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span><strong>HIPAA &amp; Portal Practice:</strong> Live US billing software simulator &amp; electronic claims dispatch.</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-medium">
                  Live Portal Practice
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-medium">
                  Weekend / Weekday Batches
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-medium">
                  Hyderabad Campus &amp; Online
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

          {/* Track 2: IT & Cloud Master Track (Span 7) */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-md border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold">
                  Industry Aligned Tech Stack
                </span>
                <span className="text-xs text-secondary flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[16px]">schedule</span> 12 to 16 Weeks
                </span>
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-on-surface">
                  IT Engineering &amp; Salesforce Cloud
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Master high-income cloud and web technologies with enterprise capstone projects, GitHub portfolios, and certification preparation.
                </p>
              </div>

              {/* Interactive Sub-Tracks Tab Switcher */}
              <div className="flex flex-col gap-3 pt-1">
                <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-xl border border-outline-variant/30">
                  <button
                    onClick={() => setActiveTab('salesforce')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-bold transition-all ${
                      activeTab === 'salesforce'
                        ? 'bg-surface-container-lowest text-primary shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Salesforce CRM
                  </button>
                  <button
                    onClick={() => setActiveTab('frontend')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-bold transition-all ${
                      activeTab === 'frontend'
                        ? 'bg-surface-container-lowest text-primary shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Frontend (React)
                  </button>
                  <button
                    onClick={() => setActiveTab('backend')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-bold transition-all ${
                      activeTab === 'backend'
                        ? 'bg-surface-container-lowest text-primary shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Backend &amp; SQL
                  </button>
                </div>

                {/* Tab Content Box */}
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-surface-container-low/80 border border-outline-variant/20 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-on-surface">
                      {currentSubtrack.title}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${currentSubtrack.badgeColor}`}>
                      {currentSubtrack.badge}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    {currentSubtrack.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 text-xs md:text-sm text-on-surface">
                    {currentSubtrack.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check
                        </span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Highlights strip */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-medium">
                  3 Real-Time Capstones
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-medium">
                  GitHub Architecture Review
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-xs font-medium">
                  100+ Live Coding Drills
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 flex items-center gap-3 mt-6 border-t border-surface-container-high/60">
              <button
                onClick={() => onEnquireClick(activeTab === 'salesforce' ? 'Salesforce (Admin & Dev/LWC)' : 'Full-Stack (React/Node/SQL)')}
                className="flex-1 text-center py-3 px-4 rounded-xl bg-primary text-on-primary text-sm font-bold hover:bg-primary-container transition-colors shadow-sm"
              >
                Enquire for IT &amp; Salesforce
              </button>
              <button
                onClick={onOpenTechModal}
                className="py-3 px-4 rounded-xl bg-surface-container-high text-on-surface text-sm font-semibold hover:bg-surface-variant transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span>Tech Syllabus PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
