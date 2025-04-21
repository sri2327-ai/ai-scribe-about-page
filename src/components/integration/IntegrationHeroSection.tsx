
import React from 'react';
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";
import HeroPieChartIllustration from './HeroPieChartIllustration';

const IntegrationHeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-left max-w-xl">
          <Typography 
            variant={isMobile ? "h4" : "h2"} 
            sx={{ 
              fontSize: isMobile ? '1.35rem' : '2.5rem',
              lineHeight: 1.2,
              color: '#143151',
              mb: 3
            }}
          >
            Seamlessly Connect S10.AI with Your Favourite Software
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              color: '#143151',
              mb: 3,
              fontWeight: 500
            }}
          >
            Instant Setup, Zero Disruptions, Maximum Efficiency
          </Typography>
          <Typography
            variant="body1"
            sx={{ 
              fontSize: isMobile ? '0.9rem' : '1rem',
              color: '#4a5568',
              mb: 4,
              lineHeight: 1.6
            }}
          >
            S10.AI accelerates your workflow with lightning-fast, bidirectional integration 
            across EHR, PMS, SIP, TeleHealth, Platform, Calendar, Cloud Storage, and Email Systems.
          </Typography>
          <button
            className="rounded-full px-8 py-4 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl transition-all font-semibold"
          >
            Learn More
          </button>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="max-w-[500px] w-full">
            <HeroPieChartIllustration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationHeroSection;
