
import React from 'react';
import { CAHeroSection } from '@/components/custom-ai-agent/CAHeroSection';
import { CABentoGrid } from '@/components/custom-ai-agent/CABentoGrid';
import { CATransformWorkflow } from '@/components/custom-ai-agent/CATransformWorkflow';
import { CABeforeAfterCarousel } from '@/components/custom-ai-agent/CABeforeAfterCarousel';
import { CAGettingStartedStepper } from '@/components/custom-ai-agent/CAGettingStartedStepper';

const CustomAIAgent = () => {
  return (
    <div className="bg-white min-h-screen">
      <CAHeroSection />
      <CABentoGrid />
      <CATransformWorkflow />
      <CAGettingStartedStepper />
      <CABeforeAfterCarousel />
    </div>
  );
};

export default CustomAIAgent;
