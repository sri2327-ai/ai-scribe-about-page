
import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';

export const ROICalculatorIllustration = () => {
  return (
    <motion.div
      className="absolute left-[10%] bottom-[20%] z-0"  // Moved further down
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-4"
        animate={{ 
          x: [0, 50, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Calculator className="w-5 h-5 text-[#009CA6]" />
          <span className="text-sm font-medium text-gray-600">Monthly Savings</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <motion.span
            className="text-lg font-bold text-green-500"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
          >
            $1,800+
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};
