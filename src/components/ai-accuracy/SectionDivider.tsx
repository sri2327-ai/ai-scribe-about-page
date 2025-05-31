
import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider: React.FC = () => {
  return (
    <div className="relative w-full bg-black py-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default SectionDivider;
