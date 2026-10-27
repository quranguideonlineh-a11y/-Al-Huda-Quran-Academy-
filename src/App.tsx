import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CoursesSection } from './components/CoursesSection';
import { HowItWorks } from './components/HowItWorks';
import { TutorsSection } from './components/TutorsSection';
import { FeeStructure } from './components/FeeStructure';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(undefined);

  const handleOpenTrialModal = (courseId?: string, planId?: string) => {
    setSelectedCourseId(courseId);
    setSelectedPlanId(planId);
    setTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setTrialModalOpen(false);
    setSelectedCourseId(undefined);
    setSelectedPlanId(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDFB] text-slate-800 selection:bg-emerald-800 selection:text-amber-300">
      {/* Top Header & Sticky Navigation */}
      <Header onOpenTrialModal={handleOpenTrialModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenTrialModal={handleOpenTrialModal} />

        {/* Trust Metrics Bar */}
        <TrustStats />

        {/* About Al-Huda Quran Academy */}
        <AboutSection onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Why Choose Us */}
        <WhyChooseUs onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Courses Offered */}
        <CoursesSection onOpenTrialModal={handleOpenTrialModal} />

        {/* How It Works - 3 Easy Steps */}
        <HowItWorks onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Certified Male & Female Faculty */}
        <TutorsSection onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Fee Structure & Packages */}
        <FeeStructure onOpenTrialModal={handleOpenTrialModal} />

        {/* Parent & Student Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Location Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenTrialModal={handleOpenTrialModal} />

      {/* Interactive Free Trial Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={handleCloseTrialModal}
        initialCourseId={selectedCourseId}
        initialPlanId={selectedPlanId}
      />

      {/* Floating WhatsApp and Quick Trial Actions */}
      <FloatingActions onOpenTrialModal={() => handleOpenTrialModal()} />
    </div>
  );
}
