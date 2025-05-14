
import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";
import HeroPieChartIllustration from './HeroPieChartIllustration';
import { shadowStyles } from "@/lib/shadow-utils";
import { cn } from "@/lib/utils";

const IntegrationHeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <motion.div 
          className="order-1 md:order-1 text-left max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant={isMobile ? "h3" : "h2"} 
            sx={{ 
              fontSize: {
                xs: '1.5rem',
                sm: '1.75rem',
                md: '2.25rem'
              },
              lineHeight: 1.3,
              color: '#143151',
              mb: 2.5
            }}
          >
            Seamlessly Connect S10.AI with Your Favourite Software
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: {
                xs: '0.95rem',
                sm: '1.05rem', 
                md: '1.15rem'
              },
              color: '#143151',
              mb: 2.5,
              fontWeight: 500
            }}
          >
            Instant Setup, Zero Disruptions, Maximum Efficiency
          </Typography>
          <Typography
            variant="body1"
            sx={{ 
              fontSize: {
                xs: '0.85rem',
                sm: '0.9rem',
                md: '1rem'
              },
              color: '#4a5568',
              mb: 3.5,
              lineHeight: 1.6
            }}
          >
            S10.AI supercharges your productivity with lightning-fast, bidirectional integration
            across 7000+ apps, including EHR, PMS, SIP, TeleHealth, Platform, Calendar, Cloud Storage, and Email Systems.
          </Typography>
          
          <motion.button
            className={cn(
              "rounded-full px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm sm:text-base bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white transition-all font-semibold",
              shadowStyles.prominent
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </motion.div>
        
        <motion.div 
          className={`order-2 flex justify-center md:justify-end ${isMobile ? 'mt-6' : ''}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={cn("max-w-[320px] sm:max-w-[400px] w-full", shadowStyles.subtle)}>
            <HeroPieChartIllustration />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationHeroSection;
