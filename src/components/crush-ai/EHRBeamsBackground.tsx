
import React, { memo } from 'react';
import { BeamsBackground } from '@/components/ui/beams-background';

export interface EHRBeamsBackgroundProps {
  children: React.ReactNode;
  intensity?: "medium" | "subtle" | "strong";
  className?: string;
}

export const EHRBeamsBackground = memo(({ 
  children, 
  intensity = "medium",
  className
}: EHRBeamsBackgroundProps) => {
  return (
    <BeamsBackground 
      intensity={intensity}
      className={className}
      style={{ willChange: "transform", backfaceVisibility: "hidden" }}
    >
      {children}
    </BeamsBackground>
  );
});

EHRBeamsBackground.displayName = 'EHRBeamsBackground';
