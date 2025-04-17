
import React from 'react';
import { BeamsBackground } from '@/components/ui/beams-background';
import { SecurityIconsBackground } from '@/components/crush-ai/SecurityIconsBackground';

export const EHRBeamsBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <BeamsBackground intensity="medium">
      <SecurityIconsBackground />
      {children}
    </BeamsBackground>
  );
};
