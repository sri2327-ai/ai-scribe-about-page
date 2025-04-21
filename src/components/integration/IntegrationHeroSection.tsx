
import React from 'react';
import styles from "@/styles/integration.module.scss";
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";
import HeroPieChartIllustration from './HeroPieChartIllustration';

const IntegrationHeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.heroContainer}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <Typography 
          variant={isMobile ? "h4" : "h2"} 
          className={styles.title}
          sx={{ fontSize: isMobile ? '1.35rem' : '2.1rem', lineHeight: 1.2 }}
        >
          Seamlessly Connect S10.AI with Your Favourite Software
        </Typography>
        <p className={styles.subtitle}>
          Instant Setup, Zero Disruptions, Maximum Efficiency
        </p>
        <p className={styles.description}>
          S10.AI accelerates your workflow with lightning-fast, bidirectional integration across EHR, PMS, SIP, TeleHealth, Platform, Calendar, Cloud Storage, and Email Systems.
        </p>
        <button
          className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl transition-all font-semibold"
          style={{ width: 'fit-content', marginTop: '1rem' }}
        >
          Learn More
        </button>
      </div>
      {/* Right Section with Custom Pie Chart Illustration */}
      <div className={styles.rightSection}>
        <HeroPieChartIllustration />
      </div>
    </div>
  );
};

export default IntegrationHeroSection;
