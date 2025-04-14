import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import styles from '@/styles/stunning.module.scss';

const HeroSection = () => {
  const features = [
    { icon: '🏠', label: 'Increase Earnings' },
    { icon: '📈', label: 'Enhance Clinical Accuracy' },
    { icon: '🎯', label: 'Improve Patient Engagement' },
    { icon: '📊', label: 'Overcome Staffing Shortages' },
  ];

  return (
    <section className="witSp">
    <Box className={styles.herocontainer}>
      <Box className={styles.herocard}>
        <Typography variant="h3" className={styles.herotitle}>
          Unlock the Future of Healthcare with <span>S10.AI!</span>
        </Typography>

        <Typography className={styles.herosubtitle}>
          Experience the power of customizable ambient AI—designed to save you time, enhance patient care,
          and boost revenue effortlessly. Join the revolution where AI works for you, streamlining workflows
          and eliminating administrative burdens.
        </Typography>

        <Box className={styles.features}>
          {features.map((feature, index) => (
            <Box className={styles.feature} key={index}>
              <Box className={styles.icon}>{feature.icon}</Box>
              <Box className={styles.label}>{feature.label}</Box>
            </Box>
          ))}
        </Box>

        <Typography className={styles.ctatext}>
          Don’t just adapt to the future—<strong>lead it.</strong>
        </Typography>

        <Box className={styles.ctacontainer}>
          <Button variant="contained">
            Book A Demo
          </Button>
        </Box>
      </Box>
    </Box>
    </section>
  );
};

export default HeroSection;
