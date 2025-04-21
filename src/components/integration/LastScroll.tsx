
import React from 'react';
import { Typography, Button } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import CloudIcon from '@mui/icons-material/Cloud';
import styles from "@/styles/integration.module.scss";
import { useIsMobile } from "@/hooks/use-mobile";

export default function LastScroll() {
  const isMobile = useIsMobile();
  
  return (
    <div className={styles.awsWrapper}>
      <div className={styles.awsHeader}>
        <Typography variant={isMobile ? "h5" : "h4"} className={styles.partnerTitle}>Technical Partner</Typography>
        <div className={styles.awsLogo}>
          <img src="/aws.png" alt="AWS" style={{ height: 40 }} />
        </div>
      </div>
      <div className={styles.awsFeatures}>
        <div className={styles.featureCard}>
          <SecurityIcon className={styles.featureIcon} />
          <Typography variant="subtitle1"><strong>Enterprise Security</strong></Typography>
          <p>Military-grade encryption and compliance standards.</p>
        </div>
        <div className={styles.featureCard}>
          <PublicIcon className={styles.featureIcon} />
          <Typography variant="subtitle1"><strong>Global Infrastructure</strong></Typography>
          <p>Worldwide network of data centers ensuring optimal performance.</p>
        </div>
        <div className={styles.featureCard}>
          <CloudIcon className={styles.featureIcon} />
          <Typography variant="subtitle1"><strong>Cloud Excellence</strong></Typography>
          <p>Leveraging AWS's industry-leading cloud capabilities.</p>
        </div>
      </div>
      <div className={styles.ctaSection}>
        <Typography variant={isMobile ? "h5" : "h4"} className={styles.ctaTitle}>Smart. Fast. Effortless.</Typography>
        <p>Elevate Healthcare Efficiency with S10.AI — Get Started Now!</p>
        <Button variant="contained">
          REQUEST A DEMO
        </Button>
      </div>
    </div>
  );
}
