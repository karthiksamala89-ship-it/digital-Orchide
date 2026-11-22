import React from 'react';
import { STATS, HERO_MODULES } from '../data/content';

export const Hero = ({ onEnquireClick }) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-surface-container-low via-surface to-surface overflow-hidden py-10 md:py-16">
      {/* Ambient decorative background radial elements */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-primary-fixed/40 via-surface-container-high/30 to-tertiary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute right-[-10%] top-[25%] w-[420px] h-[420px] bg-primary/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-[18px] fill-1">
                rocket_launch
              </span>
              <span className="text-xs md:text-sm text-on-surface font-semibold tracking-wide">
                100% Placement Guidance &amp; Career Transition Support
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-on-surface tracking-tight leading-[1.1] text-balance">
              Launch Your Career in <span className="text-primary">US Healthcare</span> &amp;{' '}
              <span className="text-on-surface underline decoration-tertiary-fixed-dim decoration-wavy decoration-2">
                IT Technologies
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Industry-led masterclasses, live project sandbox, and 100% placement support for fresh graduates and career-gap professionals in Hyderabad &amp; Kukatpally.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center gap-2 text-sm md:text-base font-bold px-7 py-3.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Submit Student Enquiry</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 text-sm md:text-base font-semibold px-6 py-3.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm border border-outline-variant/30 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">school</span>
                <span>Explore Programs</span>
              </a>
            </div>

            {/* Trust Metrics Micro-Strip */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 mt-2">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm border border-outline-variant/30 flex flex-col hover:border-primary/30 transition-colors"
                >
                  <span
                    className={`text-xl md:text-2xl font-bold flex items-center gap-1 ${
                      stat.highlight ? 'text-primary' : 'text-on-surface'
                    }`}
                  >
                    {stat.value}
                    {stat.icon && (
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          stat.icon === 'star' ? 'text-tertiary fill-1' : 'text-primary'
                        }`}
                      >
                        {stat.icon}
                      </span>
                    )}
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Candidate Launchpad Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-fixed via-tertiary-fixed to-secondary-fixed opacity-70 blur-xl pointer-events-none" />

            <div className="relative bg-surface-container-lowest/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-outline-variant/40 flex flex-col gap-4">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-2 border-b border-surface-container-high">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                  </span>
                  <span className="text-lg font-bold text-on-surface">Candidate Launchpad</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold">
                  Active Cohort 2026
                </span>
              </div>

              {/* Visual Feature Modules */}
              <div className="flex flex-col gap-2.5">
                {HERO_MODULES.map((mod, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group cursor-default"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${mod.bg}`}
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          mod.fillIcon ? 'fill-1' : ''
                        }`}
                      >
                        {mod.icon}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                        {mod.title}
                      </span>
                      <span className="text-[11px] md:text-xs text-on-surface-variant line-clamp-1">
                        {mod.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Bottom Callout */}
              <div className="pt-2 flex items-center justify-between text-xs text-secondary border-t border-surface-container-high">
                <span className="flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                  Verified Curriculum 2026
                </span>
                <button
                  onClick={onEnquireClick}
                  className="font-bold text-primary hover:underline flex items-center gap-0.5"
                >
                  Apply for Next Batch →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
