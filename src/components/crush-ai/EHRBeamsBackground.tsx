import React, { memo } from 'react';
import { BeamsBackground } from '@/components/ui/beams-background';

export interface EHRBeamsBackgroundProps {
  children: React.ReactNode;
  intensity?: "medium" | "subtle" | "strong";
  className?: string;
  style?: React.CSSProperties;  // Added style to props interface
}

export const EHRBeamsBackground = memo(({ 
  children, 
  intensity = "medium",
  className,
  style
}: EHRBeamsBackgroundProps) => {
  return (
    <BeamsBackground 
      intensity={intensity}
      className={className}
    >
      <div style={{ willChange: "transform", backfaceVisibility: "hidden", ...style }}>
        {children}
      </div>
    </BeamsBackground>
  );
});

EHRBeamsBackground.displayName = 'EHRBeamsBackground';
