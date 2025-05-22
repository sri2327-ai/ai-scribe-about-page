
import React from 'react';
import styles from "@/styles/specialties.module.scss";
import InteractiveSpecialties from './InteractiveSpecialties';
import { typography, withTypography } from '@/lib/typography';
import { motion } from 'framer-motion';

const SpecialtiesGrid = () => {
  return (
    <motion.section 
      className={`${typography.spacing.section} py-12 sm:py-16`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.specialties}>
        <motion.div 
          className="flex flex-col items-center space-y-6 mb-12 md:mb-16"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={withTypography(typography.h2, "text-center text-gray-900 max-w-4xl mx-auto")}>
            The S10.AI Advantage: Custom AI for Every Medical Specialty
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#143151] to-[#387E89]" />
          <p className={withTypography(typography.description, `${styles.subtext} max-w-3xl text-center px-4`)}>
            Our platform stands out by customizing AI models for each medical field, ensuring that documentation is both accurate and relevant, whether it's for a primary care physician, specialist, or allied health professional.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <InteractiveSpecialties />
          </motion.div>
          
          <div className="absolute inset-0 pointer-events-none -z-10 opacity-20">
            <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-blue-200 to-transparent" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SpecialtiesGrid;
