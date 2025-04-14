import React from 'react';
import styles from "@/styles/integration.module.scss";
import { Typography, Box, Stack, Switch } from '@mui/material';

const IntegrationSection = () => {
  return (

   
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <Typography variant="h1" className={styles.title}>
          Seamlessly Connect S10.AI with Your Favourite Software
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          Instant Setup, Zero Disruptions, Maximum Efficiency
        </Typography>
        <div className={styles.staticToggleWrapper}>
        <div className={styles.staticToggleCircle}>
        </div>
        </div>

      </div>

      {/* Right Section with Gradient Circle */}
      <div className={styles.rightSection}>
        <div className={styles.gradientCircle}>
          <Typography variant="body1" className={styles.circleText}>
            S10.AI accelerates your workflow with lightning-fast, bidirectional
            integrations across EHRs, PMS, SIPs, Telehealth Platforms, Calendars,
            Cloud Storage, and Email Systems.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
