import React from 'react';
import { CAREER_STEPS } from '../data/content';

export const CareerBridge = ({ onConsultationClick }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low" id="career-bridge">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary">
            Beyond Just Training
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-on-surface tracking-tight">
            The 4-Step Career Bridge to Enterprise Offer Letters
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            We don't leave you with just tutorial knowledge. Our corporate placement desk in Kukatpally, Hyderabad mentors you across every credential, interview round, and onboarding checkpoint.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col gap-4 hover:shadow-md hover:border-primary/40 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-xl shadow-sm ${step.bg}`}
                >
                  {step.step}
                </div>
                <span className="material-symbols-outlined text-secondary text-[26px]">
                  {step.icon}
                </span>
              </div>

              <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                {step.title}
              </h3>

              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>

              <div className="mt-auto pt-3 flex items-center gap-1.5 text-xs font-semibold text-primary border-t border-surface-container-high/60">
                <span>{step.tag}</span>
                <span className="material-symbols-outlined text-[16px]">{step.tagIcon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Trust Callout Banner */}
        <div className="bg-surface-container-highest/70 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-outline-variant/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[26px]">contact_support</span>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold text-on-surface">
                Have a 2+ Year Career Gap or Non-Technical Degree?
              </h4>
              <p className="text-xs md:text-sm text-on-surface-variant mt-0.5">
                Over 62% of our placed alumni transitioned successfully from B.Com, B.Sc, BBA, and Arts degrees.
              </p>
            </div>
          </div>

          <button
            onClick={onConsultationClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-lowest text-on-surface text-xs md:text-sm font-bold shadow-sm hover:bg-surface hover:text-primary transition-all shrink-0 border border-outline-variant/30"
          >
            <span>Book Gap Consultation</span>
            <span className="material-symbols-outlined text-[18px]">north_east</span>
          </button>
        </div>
      </div>
    </section>
  );
};
