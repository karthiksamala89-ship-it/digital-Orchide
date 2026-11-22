import React, { useState, useEffect } from 'react';
import { INSTITUTE_INFO } from '../data/content';

export const FloatingContact = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-surface-container-lowest text-on-surface shadow-lg hover:shadow-xl border border-outline-variant/40 flex items-center justify-center transition-all hover:scale-105"
          title="Back to Top"
        >
          <span className="material-symbols-outlined text-[22px]">arrow_upward</span>
        </button>
      )}

      {/* Floating WhatsApp CTA */}
      <a
        href={INSTITUTE_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:bg-[#20ba59] transition-all hover:scale-105 text-xs md:text-sm font-bold"
        title="WhatsApp Admissions Support"
      >
        <span className="material-symbols-outlined text-[20px]">chat</span>
        <span className="hidden sm:inline">WhatsApp Us: {INSTITUTE_INFO.phone}</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
};
