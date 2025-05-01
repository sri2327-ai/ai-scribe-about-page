
import React, { memo } from 'react';
import { BeamsBackground } from '@/components/ui/beams-background';
import { SecurityIconsBackground } from '@/components/crush-ai/SecurityIconsBackground';

export const EHRBeamsBackground = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <BeamsBackground intensity="medium">
      <SecurityIconsBackground />
      {children}
    </BeamsBackground>
  );
});

EHRBeamsBackground.displayName = 'EHRBeamsBackground';
