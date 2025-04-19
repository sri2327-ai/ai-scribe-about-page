
import React from 'react';
import { FirstSection } from '@/components/landing/FirstSection';
import { SecondSection } from '@/components/landing/SecondSection';
import { ThirdSection } from '@/components/landing/ThirdSection';
import { FourthSection } from '@/components/landing/FourthSection';
import { FifthSection } from '@/components/landing/FifthSection';
import { SixthSection } from '@/components/landing/SixthSection';
import { SeventhSection } from '@/components/landing/SeventhSection';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </div>
  );
};

export default Landing;
