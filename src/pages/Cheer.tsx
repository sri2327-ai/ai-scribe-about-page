
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheerHeroSection } from '@/components/cheer/CheerHeroSection';
import { CheerFeaturesSection } from '@/components/cheer/CheerFeaturesSection';
import { CheerWhyChooseSection } from '@/components/cheer/CheerWhyChooseSection';
import { useIsMobile } from '@/hooks/use-mobile';

const Cheer = () => {
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
        <title>CHEER Telemedicine | S10.AI</title>
        <meta name="description" content="CHEER - Telemedicine platform for modern clinicians. Deliver secure, seamless, and scalable virtual care across every setting." />
        <meta name="keywords" content="telemedicine, virtual care, telehealth, video consultation, healthcare, HIPAA compliant" />
      </Helmet>

      <motion.div variants={sectionVariants}>
        <CheerHeroSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <CheerFeaturesSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <CheerWhyChooseSection />
      </motion.div>
    </motion.div>
  );
};

export default Cheer;
