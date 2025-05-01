
import React, { memo, useMemo } from 'react';
import { BeamsBackground } from '@/components/ui/beams-background';

export interface EHRBeamsBackgroundProps {
  children: React.ReactNode;
  intensity?: "medium" | "subtle" | "strong";
  className?: string;
  style?: React.CSSProperties;
}

export const EHRBeamsBackground = memo(({ 
  children, 
  intensity = "medium",
  className,
  style
}: EHRBeamsBackgroundProps) => {
  // Use useMemo to avoid recreating styles on each render
  const contentStyles = useMemo(() => ({
    willChange: "transform",
    backfaceVisibility: "hidden" as const, // Type assertion to fix the error
    transform: "translateZ(0)", // Enables hardware acceleration
    contain: "content",
    ...style
  }), [style]);
  
  return (
    <BeamsBackground 
      intensity={intensity}
      className={className}
    >
      <div style={contentStyles}>
        {children}
      </div>
    </BeamsBackground>
  );
});

EHRBeamsBackground.displayName = 'EHRBeamsBackground';
