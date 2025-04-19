
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
      <div className="py-4 sm:py-8">
        <CABentoGrid />
      </div>
      <div className="py-4 sm:py-8">
        <CATransformWorkflow />
      </div>
      <div className="py-4 sm:py-8">
        <CAGettingStartedStepper />
      </div>
      <div className="py-4 sm:py-12">
        <CABeforeAfterCarousel />
      </div>
    </div>
  );
};

export default CustomAIAgent;
