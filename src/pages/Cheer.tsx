import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheerHeroSection } from '@/components/cheer/CheerHeroSection';
import { CheerFeaturesSection } from '@/components/cheer/CheerFeaturesSection';
import { CheerWhyChooseSection } from '@/components/cheer/CheerWhyChooseSection';
import { CheerTestimonialsSection } from '@/components/cheer/CheerTestimonialsSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cheer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Helmet>
        <title>CHEER Telemedicine | S10.AI</title>
        <meta name="description" content="CHEER - Telemedicine platform for modern clinicians. Deliver secure, seamless, and scalable virtual care across every setting." />
        <meta name="keywords" content="telemedicine, virtual care, telehealth, video consultation, healthcare, HIPAA compliant" />
      </Helmet>

      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <main>
        <CheerHeroSection />
        <CheerFeaturesSection />
        <CheerTestimonialsSection />
        <CheerWhyChooseSection />
      </main>

      <Footer />
    </div>
  );
};

export default Cheer;
