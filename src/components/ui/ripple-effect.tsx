
import React, { memo } from 'react';
import styles from '@/styles/RippleEffect.module.css';

interface RippleEffectProps {
  intensity?: 'low' | 'medium' | 'high';
}

export const RippleEffect = memo(({ intensity = 'medium' }: RippleEffectProps) => {
  // Scale the number of ripples based on intensity
  const rippleCount = intensity === 'low' ? 1 : intensity === 'medium' ? 2 : 3;
  
  return (
    <div className={styles.rippleBackground} style={{ willChange: 'transform' }}>
      {Array.from({ length: rippleCount }).map((_, index) => (
        <div 
          key={index} 
          className={styles.ripple}
          style={{ 
            animationDelay: `${index * 0.8}s`,
            transform: `translate(-50%, -50%) scale(${0.8 - index * 0.1})`,
          }} 
        />
      ))}
    </div>
  );
});

RippleEffect.displayName = 'RippleEffect';
