import React from 'react';
import { INSTITUTE_INFO } from '../data/content';

export const Footer = ({ onOpenPortal, onOpenAdmin }) => {
  return (
    <footer className="w-full bg-surface-container-low mt-16 pt-16 pb-12 border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & Overview */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="Digital Tech Orchid Logo" 
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-on-surface">
                  {INSTITUTE_INFO.name}
                </span>
                <span className="text-xs text-secondary">
                  {INSTITUTE_INFO.tagline}
                </span>
              </div>
            </div>
            
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Empowering aspiring tech and healthcare professionals through industry-certified vocational training, hands-on clinical simulations, and guaranteed enterprise placement coaching in Kukatpally &amp; Hyderabad.
            </p>

            <div className="flex items-center gap-2 text-primary text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Accredited Technical Academy • Kukatpally</span>
            </div>
          </div>

          {/* Column 2: Training Tracks */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">
              Training Tracks
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors">
                <a href="#programs">US Medical Billing &amp; Coding</a>
              </li>
              <li className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors">
                <a href="#programs">Revenue Cycle Management (RCM)</a>
              </li>
              <li className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors">
                <a href="#programs">Salesforce Admin &amp; Dev (LWC)</a>
              </li>
              <li className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors">
                <a href="#programs">Full-Stack React &amp; Node.js</a>
              </li>
              <li className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors">
                <a href="#programs">Cloud &amp; Relational Databases</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Career Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">
              Career Services
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors">
                <a href="#career-bridge">1-on-1 Placement Coaching</a>
              </li>
              <li className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors">
                <a href="#career-bridge">ATS Resume Optimization</a>
              </li>
              <li className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors">
                <a href="#career-bridge">Mock Technical &amp; HR Interviews</a>
              </li>
              <li className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors">
                <a href="#career-bridge">Career Gap &amp; BGC Documentation</a>
              </li>
              <li className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors">
                <a href="#enquiry-form">Corporate Hiring Referrals</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Institute Campus Location & Phone (User's details) */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">
              Institute Campus
            </h4>
            <div className="flex flex-col gap-2.5 text-xs md:text-sm text-on-surface-variant">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">location_on</span>
                <div>
                  <strong className="text-on-surface block">Hyderabad - Kukatpally Campus:</strong>
                  <span>{INSTITUTE_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0">call</span>
                <a 
                  href={INSTITUTE_INFO.phoneTel}
                  className="font-bold text-primary hover:underline"
                >
                  {INSTITUTE_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">chat</span>
                <a 
                  href={INSTITUTE_INFO.whatsappUrl}
                  target="_blank" 
                  rel="noreferrer"
                  className="text-on-surface hover:text-primary transition-colors"
                >
                  WhatsApp: +91 {INSTITUTE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">mail</span>
                <a href={`mailto:${INSTITUTE_INFO.email}`} className="text-on-surface hover:text-primary transition-colors">
                  {INSTITUTE_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">schedule</span>
                <span>{INSTITUTE_INFO.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="bg-surface-container-high/40 rounded-xl p-4 mb-8 border border-outline-variant/30">
          <p className="text-xs text-on-surface-variant leading-relaxed text-center">
            <strong className="text-on-surface">Academic &amp; Placement Disclaimer:</strong> Digital Tech Orchid is an authorized vocational training and career accelerator academy based in Kukatpally, Hyderabad. Certification exam preparation and corporate interview opportunities are subject to curriculum completion, attendance, and prerequisite fulfillment.
          </p>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary pt-4 border-t border-surface-container-high/60">
          <p>© 2026 {INSTITUTE_INFO.name} Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Enrollment</a>
            <button onClick={onOpenPortal} className="hover:text-primary transition-colors">
              Student Portal
            </button>
            <button onClick={onOpenAdmin} className="hover:text-primary transition-colors font-semibold">
              Admin Desk
            </button>
            <a href={`tel:${INSTITUTE_INFO.phone}`} className="hover:text-primary transition-colors">
              Direct Helpline: {INSTITUTE_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
