/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyProfileSection } from './components/CompanyProfileSection';
import { ServicesSection } from './components/ServicesSection';
import { TrackRecordSection } from './components/TrackRecordSection';
import { AccreditationsSection } from './components/AccreditationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RfqModal } from './components/RfqModal';

export default function App() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqInitialContext, setRfqInitialContext] = useState<string | undefined>(undefined);

  const handleOpenRfq = (context?: string) => {
    setRfqInitialContext(context);
    setRfqModalOpen(true);
  };

  const handleCloseRfq = () => {
    setRfqModalOpen(false);
    setRfqInitialContext(undefined);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('track-record');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Navbar onOpenRfq={() => handleOpenRfq()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenRfq={() => handleOpenRfq()}
          onExploreProjects={handleScrollToProjects}
        />

        {/* Company Profile & Management Leadership */}
        <CompanyProfileSection />

        {/* Engineering Services & Bento Capabilities */}
        <ServicesSection onOpenRfq={(serviceId) => handleOpenRfq(serviceId)} />

        {/* Unified Project Track Record & Deliverables */}
        <TrackRecordSection onOpenRfq={(context) => handleOpenRfq(context)} />

        {/* CIDB G3, MOF 30 Codes & Engineering Standards */}
        <AccreditationsSection />

        {/* Corporate Contact & Tender Submission */}
        <ContactSection onOpenRfq={() => handleOpenRfq()} />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenRfq={() => handleOpenRfq()} />

      {/* Interactive RFQ Modal */}
      <RfqModal
        isOpen={rfqModalOpen}
        onClose={handleCloseRfq}
        initialContext={rfqInitialContext}
      />
    </div>
  );
}
