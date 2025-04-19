
import React from 'react';
import { CAHeroSection } from '@/components/custom-ai-agent/CAHeroSection';
import { CABentoGrid } from '@/components/custom-ai-agent/CABentoGrid';
import { CATransformWorkflow } from '@/components/custom-ai-agent/CATransformWorkflow';
import { CABeforeAfterCarousel } from '@/components/custom-ai-agent/CABeforeAfterCarousel';
import { CAGettingStartedStepper } from '@/components/custom-ai-agent/CAGettingStartedStepper';
import { useIsMobile } from '@/hooks/use-mobile';

const CustomAIAgent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-white min-h-screen">
      <CAHeroSection />
      <div className={`py-6 ${isMobile ? 'pt-2' : 'py-8'}`}>
        <CABentoGrid />
      </div>
      <div className={`py-4 ${isMobile ? 'py-6' : 'py-8'}`}>
        <CATransformWorkflow />
      </div>
      <div className={`py-4 ${isMobile ? 'py-6' : 'py-8'}`}>
        <CAGettingStartedStepper />
      </div>
      <div className={`py-4 ${isMobile ? 'py-8' : 'py-12'}`}>
        <CABeforeAfterCarousel />
      </div>
    </div>
  );
};

export default CustomAIAgent;
