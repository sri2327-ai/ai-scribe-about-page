
import React from 'react';
import styles from "@/styles/specialties.module.scss";
import InteractiveSpecialties from './InteractiveSpecialties';
import { typography, withTypography } from '@/lib/typography';
import { motion } from 'framer-motion';
import { useWindowSize } from '@/hooks/use-window-size';
import { useIsMobile } from '@/hooks/use-mobile';

const SpecialtiesGrid = () => {
  const { width } = useWindowSize();
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className={`${typography.spacing.section} py-12 sm:py-16 lg:py-20 relative overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ minHeight: isMobile ? '600px' : '800px' }} // Reserve space to prevent layout shifts
    >
      <div className={`${styles.specialties} relative z-10`}>
        <motion.div 
          className="flex flex-col items-center space-y-6 mb-12 md:mb-16"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={withTypography(typography.h2, "text-center text-gray-900 max-w-4xl mx-auto px-4")}>
            The S10.AI Advantage: Custom AI for Every Medical Specialty
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#143151] to-[#387E89]" />
          <p className={withTypography(typography.description, `${styles.subtext} max-w-3xl text-center px-4 md:px-6`)}>
            Our platform stands out by customizing AI models for each medical field, ensuring that documentation is both accurate and relevant, whether it's for a primary care physician, specialist, or allied health professional.
          </p>
        </motion.div>

        <div className="relative px-2 sm:px-4" style={{ minHeight: '400px' }}> {/* Reserve space */}
          <motion.div
            className="max-w-[1400px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <InteractiveSpecialties />
          </motion.div>
          
          {/* Background effect with reduced motion and layout impact */}
          <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
              <div className="w-full h-full opacity-10 bg-gradient-radial from-blue-200 to-transparent" />
              <motion.div 
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.2, 0.22, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10,
                  ease: "easeInOut" 
                }}
              >
                <div className="w-full h-full bg-gradient-radial from-blue-300/10 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements with reduced motion */}
      {!isMobile && (
        <>
          <motion.div 
            className="absolute top-20 left-0 w-24 h-24 rounded-full bg-blue-100/20 blur-2xl -z-10"
            animate={{
              x: [0, 10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20,
              ease: "easeInOut" 
            }}
            aria-hidden="true"
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal-100/10 blur-2xl -z-10"
            animate={{
              x: [0, -15, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 24,
              ease: "easeInOut" 
            }}
            aria-hidden="true"
          />
        </>
      )}
    </motion.section>
  );
};

export default SpecialtiesGrid;
