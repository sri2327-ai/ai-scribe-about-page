
import React from 'react';
import { Button } from "@/components/ui/button";
import MedicalSpecialtiesIllustration from './MedicalSpecialtiesIllustration';
import { motion } from 'framer-motion';

const SpecialtiesBanner = () => {
  return (
    <section className="w-full bg-white pt-4 md:pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-10">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <motion.div 
            className="w-full md:w-1/2 text-left space-y-3 md:space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#143151] leading-tight">
              Transforming Healthcare,<br className="hidden sm:block" />
              One Specialty at a Time
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
              The Leading Ambient AI Platform with AI Models Designed
              to Capture the Unique Details of Every Medical Field.
            </p>

            <Button 
              className="rounded-full px-4 sm:px-6 md:px-7 py-2 sm:py-3 md:py-4 text-sm sm:text-base bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg h-auto"
            >
              See Demo
            </Button>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MedicalSpecialtiesIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesBanner;
