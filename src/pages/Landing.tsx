
import React from 'react';
import { FirstSection } from '@/components/landing/FirstSection';
import { SecondSection } from '@/components/landing/SecondSection';
import { ThirdSection } from '@/components/landing/ThirdSection';
import { FourthSection } from '@/components/landing/FourthSection';
import { FifthSection } from '@/components/landing/FifthSection';
import { SixthSection } from '@/components/landing/SixthSection';
import { SeventhSection } from '@/components/landing/SeventhSection';
import { EighthSection } from '@/components/landing/EighthSection';
import { NinthSection } from '@/components/landing/NinthSection';
import { TenthSection } from '@/components/landing/TenthSection';

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
      <EighthSection />
      <NinthSection />
      <TenthSection />
    </div>
  );
};

export default Landing;
