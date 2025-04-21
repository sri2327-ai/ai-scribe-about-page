
import React from 'react';
import { Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import AssessmentIcon from '@mui/icons-material/Assessment';
import styles from '@/styles/integration.module.scss';

const features = [
  {
    icon: <BuildIcon />,
    title: 'No Disruptions',
    description: 'Works with your existing tools—no rip-and-replace required.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Scalable & Future-Proof',
    description: 'Adapts effortlessly as your practice grows.',
  },
  {
    icon: <FlashOnIcon />,
    title: 'Lightning-Fast Charting',
    description: 'AI-driven notes, structured data, and auto-generated codes in minutes.',
  },
  {
    icon: <SecurityIcon />,
    title: 'Ironclad Security',
    description: 'HIPAA, PIPEDA & GDPR Compliant | ISO 27001 Certified | AES-256 Encrypted',
  },
  {
    icon: <StorageIcon />,
    title: 'Reliability at Scale',
    description: 'Fault-tolerant architecture with multiple availability zones.',
  },
  {
    icon: <AssessmentIcon />,
    title: 'Proven Results',
    description: '95% reduction in documentation time with 99.9% uptime reliability.',
  },
];

const WhyChooseS10 = () => {
  return (
    <div className={styles.whyChooseWrapper}>
      <Typography variant="h4" className={styles.title}>
        Why Choose S10.AI
      </Typography>
      <div className={styles.cardsGrid}>
        {features.map((item, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>{item.icon}</div>
            <Typography variant="subtitle1"><strong>{item.title}</strong></Typography>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseS10;
