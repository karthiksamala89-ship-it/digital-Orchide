import React from 'react';
import { PARTNERS } from '../data/content';

export const Partners = () => {
  return (
    <section className="w-full bg-surface-container-lowest py-6 border-y border-surface-container-high/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-on-surface-variant">
            Top Recruiters &amp; Delivery Hubs
          </span>
          <span className="w-2 h-2 rounded-full bg-primary" />
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3 text-secondary">
          {PARTNERS.map((partner, index) => (
            <span
              key={index}
              className="text-base md:text-lg font-extrabold tracking-tight opacity-75 hover:opacity-100 hover:text-primary transition-all cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
