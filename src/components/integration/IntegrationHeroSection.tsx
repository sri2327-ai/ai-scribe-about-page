
import React from 'react';
import styles from "@/styles/integration.module.scss";
import { Typography, Button } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";

const IntegrationHeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <Typography variant={isMobile ? "h3" : "h1"} className={styles.title}>
          Seamlessly Connect S10.AI with Your Favourite Software
        </Typography>
        <p className={styles.subtitle}>
          Instant Setup, Zero Disruptions, Maximum Efficiency
        </p>
        <p>
          S10.AI accelerates your workflow with lightning-fast, bidirectional integration across EHR, PMS, SIP, TeleHealth, platform, Calendar, CloudStorage, and Email Systems.
        </p>
        <Button variant='contained' className={styles.button}>Learn More</Button>
      </div>
      {/* Right Section with Gradient Circle */}
      <div className={styles.rightSection}>
        {/* Update src as needed */}
        <img src="/img.png" alt="Integration" style={{ maxWidth: "100%", borderRadius: "12px" }} />
      </div>
    </div>
  );
};

export default IntegrationHeroSection;
