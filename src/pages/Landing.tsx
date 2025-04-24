
import React from 'react';
import { FirstSection } from '@/components/landing/FirstSection';
import IntegrationSection from '@/components/landing/IntegrationSection';
import CaseStudyLink from '@/components/landing/CaseStudyLink';

const Landing = () => {
  return (
    <div className="overflow-hidden">
      <FirstSection />
      <IntegrationSection />
      <CaseStudyLink />
    </div>
  );
};

export default Landing;
