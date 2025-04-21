
import React from 'react';
import SpecialtiesBanner from '@/components/specialty/SpecialtiesBanner';
import SpecialtiesGrid from '@/components/specialty/SpecialtiesGrid';
import TemplateBuilder from '@/components/specialty/TemplateBuilder';
import Testimonial from '@/components/specialty/Testimonial';
import ClosingSection from '@/components/specialty/ClosingSection';
import MacrosShortcutsSection from '@/components/specialty/MacrosShortcutsSection';
import StaticTextSection from '@/components/specialty/StaticTextSection';

const Specialty = () => {
  return (
    <div className="min-h-screen bg-white">
      <SpecialtiesBanner />
      <SpecialtiesGrid />
      <div className="max-w-7xl mx-auto px-4">
        <MacrosShortcutsSection />
        <StaticTextSection />
      </div>
      <TemplateBuilder />
      <Testimonial />
      <ClosingSection />
    </div>
  );
};

export default Specialty;
