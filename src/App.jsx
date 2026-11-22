import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Programs } from './components/Programs';
import { CareerBridge } from './components/CareerBridge';
import { EnquiryForm } from './components/EnquiryForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SyllabusModal } from './components/SyllabusModal';
import { StudentPortalModal } from './components/StudentPortalModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  const [healthcareModalOpen, setHealthcareModalOpen] = useState(false);
  const [techModalOpen, setTechModalOpen] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('US Healthcare & Medical Billing');

  const scrollToEnquiry = (track) => {
    if (track) {
      setSelectedTrack(track);
    }
    const elem = document.getElementById('enquiry-form');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans text-on-surface">
      {/* Top Fixed Header */}
      <Navbar 
        onOpenPortal={() => setPortalModalOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
        onApplyClick={() => scrollToEnquiry()}
      />

      {/* Main Content Body */}
      <main className="w-full pt-20 flex-1">
        {/* Hero Section */}
        <Hero 
          onEnquireClick={() => scrollToEnquiry()} 
        />

        {/* Hiring Partners Strip */}
        <Partners />

        {/* Core Career Tracks / Programs */}
        <Programs 
          onOpenHealthcareModal={() => setHealthcareModalOpen(true)}
          onOpenTechModal={() => setTechModalOpen(true)}
          onEnquireClick={scrollToEnquiry}
        />

        {/* 4-Step Career Bridge */}
        <CareerBridge 
          onConsultationClick={() => scrollToEnquiry('Career Counseling / Not Decided')} 
        />

        {/* Student Enquiry & Application Form */}
        <EnquiryForm 
          preselectedTrack={selectedTrack} 
        />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPortal={() => setPortalModalOpen(true)} 
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Floating Action Buttons */}
      <FloatingContact />

      {/* Syllabus Modals */}
      <SyllabusModal 
        type="healthcare" 
        isOpen={healthcareModalOpen} 
        onClose={() => setHealthcareModalOpen(false)} 
        onEnrollClick={scrollToEnquiry}
      />
      <SyllabusModal 
        type="tech" 
        isOpen={techModalOpen} 
        onClose={() => setTechModalOpen(false)} 
        onEnrollClick={scrollToEnquiry}
      />

      {/* Student Candidate Portal Modal */}
      <StudentPortalModal 
        isOpen={portalModalOpen} 
        onClose={() => setPortalModalOpen(false)} 
      />

      {/* Admin Leads Management Modal */}
      <AdminPortalModal 
        isOpen={adminModalOpen} 
        onClose={() => setAdminModalOpen(false)} 
      />
    </div>
  );
}
