
import React from 'react';
import { CAHeroSection } from '@/components/custom-ai-agent/CAHeroSection';
import { CABentoGrid } from '@/components/custom-ai-agent/CABentoGrid';
import { CATransformWorkflow } from '@/components/custom-ai-agent/CATransformWorkflow';
import { CABeforeAfterCarousel } from '@/components/custom-ai-agent/CABeforeAfterCarousel';
import { CAGettingStartedStepper } from '@/components/custom-ai-agent/CAGettingStartedStepper';
import { CAWorkflowReimagined } from '@/components/custom-ai-agent/CAWorkflowReimagined';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const CustomAIAgent = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <motion.div 
      className="bg-white min-h-screen overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Custom AI Agent | S10.AI</title>
        <meta name="description" content="Create your own custom AI agents for healthcare workflows with S10.AI's platform." />
      </Helmet>

      <motion.div variants={sectionVariants}>
        <CAHeroSection />
      </motion.div>

      <div className={`${isMobile ? 'space-y-6' : 'space-y-10'} max-w-7xl mx-auto px-4 sm:px-6 pb-12`}>
        <motion.div 
          className="py-4"
          variants={sectionVariants}
        >
          <CABentoGrid />
        </motion.div>

        <motion.div 
          className="py-4"
          variants={sectionVariants}
        >
          <CATransformWorkflow />
        </motion.div>

        <motion.div 
          className="py-4"
          variants={sectionVariants}
        >
          <CAGettingStartedStepper />
        </motion.div>

        <motion.div 
          className="py-4"
          variants={sectionVariants}
        >
          <CABeforeAfterCarousel />
        </motion.div>
        
        <motion.div 
          className="py-4"
          variants={sectionVariants}
        >
          <CAWorkflowReimagined />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CustomAIAgent;
