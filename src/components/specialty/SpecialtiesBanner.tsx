
import React from 'react';
import { Button } from "@/components/ui/button";
import MedicalSpecialtiesIllustration from './MedicalSpecialtiesIllustration';

const SpecialtiesBanner = () => {
  return (
    <section className="w-full bg-white pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Left side content */}
          <div className="w-full md:w-1/2 text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#143151] leading-tight">
              Transforming Healthcare,<br />
              One Specialty at a Time
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              The Leading Ambient AI Platform with AI Models Designed
              to Capture the Unique Details of Every Medical Field.
            </p>

            <Button 
              className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl h-auto"
            >
              See Demo
            </Button>
          </div>

          {/* Right side illustration */}
          <div className="w-full md:w-1/2">
            <MedicalSpecialtiesIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesBanner;
