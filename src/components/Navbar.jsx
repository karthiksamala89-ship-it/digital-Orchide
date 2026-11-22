import React, { useState } from 'react';
import { INSTITUTE_INFO } from '../data/content';

export const Navbar = ({ onOpenPortal, onOpenAdmin, onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-surface/90 backdrop-blur-xl border-b border-surface-container-high/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group transition-transform hover:scale-[1.01]"
        >
          <img 
            src="/logo.svg" 
            alt="Digital Tech Orchid Logo" 
            className="h-9 w-auto object-contain transition-transform group-hover:rotate-2"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl text-on-surface tracking-tight leading-tight">
              {INSTITUTE_INFO.name}
            </span>
            <span className="text-xs text-secondary font-medium tracking-normal">
              {INSTITUTE_INFO.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-sm font-semibold text-primary hover:text-primary-container transition-colors">
            Home
          </a>
          <a href="#programs" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
            Healthcare &amp; Billing
          </a>
          <a href="#programs" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
            IT &amp; Salesforce
          </a>
          <a href="#career-bridge" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
            Career Support
          </a>
          <a href="#enquiry-form" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
            Student Enquiry
          </a>
          <a href="#faqs" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
            FAQs
          </a>
        </nav>

        {/* Action Buttons & Phone */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Phone pill */}
          <a 
            href={INSTITUTE_INFO.phoneTel}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container text-xs md:text-sm font-semibold transition-all border border-outline-variant/30 hover:border-primary/40"
            title="Call Admissions Desk"
          >
            <span className="material-symbols-outlined text-primary text-[18px]">call</span>
            <span>{INSTITUTE_INFO.phoneFormatted}</span>
          </a>

          {/* Apply Now CTA */}
          <button
            onClick={onApplyClick}
            className="inline-flex items-center justify-center gap-1.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs md:text-sm font-bold hover:bg-tertiary-fixed-dim shadow-sm hover:shadow transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[18px]">edit_document</span>
            <span>Apply Now</span>
          </button>

          {/* Student Portal Icon */}
          <button
            onClick={onOpenPortal}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/30"
            title="Student Portal (Track Application Status)"
          >
            <span className="material-symbols-outlined text-[22px]">account_circle</span>
          </button>

          {/* Admin Desk Button */}
          <button
            onClick={onOpenAdmin}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-colors"
            title="Admin Lead Management Desk"
          >
            <span className="material-symbols-outlined text-[16px]">shield_person</span>
            <span>Admin</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container-high px-6 py-5 shadow-xl animate-in slide-in-from-top">
          <nav className="flex flex-col gap-4">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-primary py-1"
            >
              Home
            </a>
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-on-surface-variant hover:text-primary py-1"
            >
              Healthcare &amp; Medical Billing
            </a>
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-on-surface-variant hover:text-primary py-1"
            >
              IT &amp; Salesforce Master Tracks
            </a>
            <a 
              href="#career-bridge" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-on-surface-variant hover:text-primary py-1"
            >
              4-Step Career Bridge
            </a>
            <a 
              href="#enquiry-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-on-surface-variant hover:text-primary py-1"
            >
              Student Enquiry
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-on-surface-variant hover:text-primary py-1"
            >
              Frequently Asked Questions
            </a>

            <div className="pt-3 border-t border-surface-container-high flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
                className="flex items-center gap-2 text-sm font-bold text-primary py-1 text-left"
              >
                <span className="material-symbols-outlined text-[20px]">shield_person</span>
                <span>Admin Lead Management Desk</span>
              </button>
              <a 
                href={INSTITUTE_INFO.phoneTel}
                className="flex items-center gap-3 text-sm font-semibold text-on-surface py-1"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                <span>{INSTITUTE_INFO.phoneFormatted}</span>
              </a>
              <a 
                href={INSTITUTE_INFO.whatsappUrl}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold text-[#128C7E] py-1"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>WhatsApp Admissions Desk</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
