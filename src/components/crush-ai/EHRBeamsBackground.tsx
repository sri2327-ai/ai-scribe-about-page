
import React from 'react';
import { BeamsBackground } from '@/components/ui/beams-background';
import { SecurityIconsBackground } from '@/components/crush-ai/SecurityIconsBackground';
import styles from '@/styles/RippleEffect.module.css';

export const EHRBeamsBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <BeamsBackground intensity="medium">
      <div className={styles.rippleBackground}>
        <div className={styles.ripple}></div>
        <div className={styles.ripple}></div>
        <div className={styles.ripple}></div>
      </div>
      <SecurityIconsBackground />
      {children}
    </BeamsBackground>
  );
};
