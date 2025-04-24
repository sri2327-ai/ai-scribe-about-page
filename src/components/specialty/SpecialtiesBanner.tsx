
import React from 'react';
import { Button } from "@/components/ui/button";
import MedicalSpecialtiesIllustration from './MedicalSpecialtiesIllustration';

const SpecialtiesBanner = () => {
  return (
    <section className="w-full bg-white pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
          {/* Content section - will appear first on mobile */}
          <div className="w-full md:w-1/2 text-left space-y-4 md:space-y-6 order-1 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#143151] leading-tight">
              Transforming Healthcare,<br />
              One Specialty at a Time
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-xl">
              The Leading Ambient AI Platform with AI Models Designed
              to Capture the Unique Details of Every Medical Field.
            </p>

            <Button 
              className="rounded-full px-6 md:px-8 py-5 md:py-6 text-base md:text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl h-auto"
            >
              See Demo
            </Button>
          </div>

          {/* Illustration section - will appear second on mobile */}
          <div className="w-full md:w-1/2 order-2 md:order-2 mt-8 md:mt-0">
            <MedicalSpecialtiesIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesBanner;
