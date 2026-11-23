import React, { useEffect } from 'react';
import { HEALTHCARE_SYLLABUS, TECH_SYLLABUS, INSTITUTE_INFO } from '../data/content';

export const SyllabusModal = ({
  type,
  isOpen,
  onClose,
  onEnrollClick,
  techTrack = 'Salesforce (Admin & Dev/LWC)'
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-surface rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-hidden border border-outline-variant/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">
              {type === 'healthcare' ? 'medical_services' : 'cloud_done'}
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-on-surface">
              {type === 'healthcare' ? 'US Healthcare & Billing Curriculum' : 'IT & Full-Stack Syllabus Outline'}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-surface-container flex items-center justify-center text-secondary hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 flex flex-col gap-4 text-sm text-on-surface-variant">
          {type === 'healthcare' ? (
            <div className="flex flex-col gap-4">
              <div className="p-3.5 rounded-xl bg-surface-container-low text-xs text-on-surface flex items-center justify-between">
                <span><strong>Duration:</strong> 10 Weeks (Daily 2 Hours + Lab Sandbox)</span>
                <span className="text-primary font-bold">100% Placement Aligned</span>
              </div>

              {HEALTHCARE_SYLLABUS.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">{item.week}</span>
                    <span className="text-xs text-secondary font-medium">Hands-On Drills</span>
                  </div>
                  <h5 className="text-base font-bold text-on-surface">{item.topic}</h5>
                  <p className="text-xs md:text-sm text-on-surface-variant mt-1 leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="p-3.5 rounded-xl bg-surface-container-low text-xs text-on-surface flex items-center justify-between">
                <span><strong>Duration:</strong> 12 to 16 Weeks (Hands-On Capstone Driven)</span>
                <span className="text-primary font-bold">MNC Certified Standards</span>
              </div>

              {TECH_SYLLABUS.map((sec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-2.5">
                  <h5 className="text-base font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">bookmark</span>
                    <span>{sec.track}</span>
                  </h5>
                  <ul className="flex flex-col gap-1.5 pl-1">
                    {sec.modules.map((mod, mIdx) => (
                      <li key={mIdx} className="text-xs md:text-sm text-on-surface flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">check_circle</span>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-secondary">
            Admissions Contact: <strong className="text-on-surface">{INSTITUTE_INFO.phoneFormatted}</strong>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-outline-variant/50 text-xs font-bold text-on-surface hover:bg-surface-container"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnrollClick(type === 'healthcare' ? 'US Healthcare & Medical Billing' : techTrack);
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-primary text-on-primary text-xs font-bold hover:bg-primary-container shadow transition-all"
            >
              Enroll in Next Cohort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
