
import React from 'react';
import { BeamsBackground } from '@/components/ui/beams-background';

export const EHRBeamsBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <BeamsBackground intensity="medium">
      {children}
    </BeamsBackground>
  );
};
