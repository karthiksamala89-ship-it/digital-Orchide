import React, { useState } from 'react';
import { FAQS } from '../data/content';

export const FaqSection = () => {
  const [openId, setOpenId] = useState('faq-1');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-lowest border-t border-surface-container-high/60" id="faqs">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col gap-10">
        <div className="text-center flex flex-col gap-2">
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary">
            Clear Answers
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-on-surface tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
            Everything you need to know about batch schedules, eligibility criteria, career gaps, and interview placement support in Kukatpally &amp; Hyderabad.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-surface rounded-xl p-5 shadow-sm border border-outline-variant/30 transition-all hover:border-primary/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="text-base md:text-lg font-bold text-on-surface">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-primary text-[24px] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 mt-2 border-t border-surface-container-high/60 animate-in fade-in">
                    <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
