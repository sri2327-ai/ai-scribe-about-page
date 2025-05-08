
import React from 'react';
import { Box as MuiBox } from "@mui/material";
import { EnhancedBox } from './ThirdSectionUtils';

const ThirdSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Technology Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EnhancedBox className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Medical Scribe</h3>
            <p>Our advanced AI solution automates clinical documentation with high accuracy.</p>
          </EnhancedBox>
          
          <EnhancedBox className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Patient Engagement</h3>
            <p>Intelligent communication tools that improve patient experience and reduce no-shows.</p>
          </EnhancedBox>
          
          <EnhancedBox className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">EHR Integration</h3>
            <p>Seamlessly integrates with over 100+ EHR systems for efficient workflow.</p>
          </EnhancedBox>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
