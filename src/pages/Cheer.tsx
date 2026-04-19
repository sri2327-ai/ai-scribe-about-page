import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheerHeroSection } from '@/components/cheer/CheerHeroSection';
import { CheerAnywhereSection } from '@/components/cheer/CheerAnywhereSection';
import { CheerFeaturesSection } from '@/components/cheer/CheerFeaturesSection';
import { CheerWorkflowSection } from '@/components/cheer/CheerWorkflowSection';
import { CheerWhyChooseSection } from '@/components/cheer/CheerWhyChooseSection';
import { CheerTestimonialsSection } from '@/components/cheer/CheerTestimonialsSection';
import { CheerCallExperienceSection } from '@/components/cheer/CheerCallExperienceSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cheer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Helmet>
        <title>CHEER Telehealth | S10.AI</title>
        <meta name="description" content="CHEER - Telehealth platform for modern clinicians. Deliver secure, seamless, and scalable virtual care across every setting." />
        <meta name="keywords" content="telehealth, virtual care, video consultation, healthcare, HIPAA compliant" />
      </Helmet>

      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <main>
        <CheerHeroSection />
        <CheerAnywhereSection />
        <CheerFeaturesSection />
        <CheerWorkflowSection />
        <CheerTestimonialsSection />
        <CheerCallExperienceSection />
        <CheerWhyChooseSection />
      </main>

      <Footer />
    </div>
  );
};

export default Cheer;
