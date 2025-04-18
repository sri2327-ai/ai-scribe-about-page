
import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Heart } from 'lucide-react';

export const CliniciansIllustration = () => {
  return (
    <motion.div
      className="absolute right-[5%] top-[30%] z-0"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-4"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <Laptop className="w-8 h-8 text-[#009CA6]" />
          <motion.div
            className="absolute -right-1 -top-1"
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-[#FF5CA2]" fill="#FF5CA2" />
          </motion.div>
        </div>
        <div className="text-xs text-gray-600">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            Note completed! ✨
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
