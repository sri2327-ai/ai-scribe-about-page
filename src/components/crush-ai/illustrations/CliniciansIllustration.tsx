
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const CliniciansIllustration = () => {
  return (
    <motion.div
      className="absolute right-[0%] top-[10%] z-0"  // Moved up from top-[15%]
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
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 text-[#009CA6]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
            <line x1="2" x2="22" y1="20" y2="20" />
          </svg>
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
