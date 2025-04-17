
import React from 'react';
import { BeamsBackground } from '@/components/ui/beams-background';
import { SecurityIconsBackground } from '@/components/crush-ai/SecurityIconsBackground';
import styles from '@/styles/RippleEffect.module.css';

export const EHRBeamsBackground = ({ 
  children, 
  showRipple = false,
  showIcons = true 
}: { 
  children: React.ReactNode, 
  showRipple?: boolean,
  showIcons?: boolean
}) => {
  return (
    <BeamsBackground intensity="medium">
      {showRipple && (
        <div className={styles.rippleBackground}>
          <div className={styles.ripple}></div>
          <div className={styles.ripple}></div>
          <div className={styles.ripple}></div>
        </div>
      )}
      {showIcons && <SecurityIconsBackground />}
      {children}
    </BeamsBackground>
  );
};
