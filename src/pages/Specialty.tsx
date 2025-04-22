
import React from 'react';
import SpecialtiesBanner from '@/components/specialty/SpecialtiesBanner';
import SpecialtiesGrid from '@/components/specialty/SpecialtiesGrid';
import TemplateBuilder from '@/components/specialty/TemplateBuilder';
import Testimonial from '@/components/specialty/Testimonial';
import ClosingSection from '@/components/specialty/ClosingSection';
import InteractiveSpecialties from '@/components/specialty/InteractiveSpecialties';

const Specialty = () => {
  return (
    <div className="min-h-screen bg-white">
      <SpecialtiesBanner />
      <InteractiveSpecialties />
      <SpecialtiesGrid />
      <TemplateBuilder />
      <Testimonial />
      <ClosingSection />
    </div>
  );
};

export default Specialty;
