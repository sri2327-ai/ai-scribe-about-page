
import React from 'react';
import { FirstSection } from '@/components/landing/FirstSection';
import { SecondSection } from '@/components/landing/SecondSection';
import { ThirdSection } from '@/components/landing/ThirdSection';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Landing;
