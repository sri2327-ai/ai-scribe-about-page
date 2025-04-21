
import React from 'react';
import SpecialtiesBanner from '@/components/specialty/SpecialtiesBanner';
import SpecialtiesGrid from '@/components/specialty/SpecialtiesGrid';
import Testimonial from '@/components/specialty/Testimonial';
import ClosingSection from '@/components/specialty/ClosingSection';

const Specialty = () => {
  return (
    <div className="min-h-screen bg-white">
      <SpecialtiesBanner />
      <SpecialtiesGrid />
      <Testimonial />
      <ClosingSection />
    </div>
  );
};

export default Specialty;
