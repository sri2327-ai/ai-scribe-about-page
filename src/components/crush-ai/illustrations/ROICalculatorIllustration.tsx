
import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export const ROICalculatorIllustration = () => {
  return (
    <motion.div
      className="w-80"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-4 w-full"
        animate={{ 
          x: [0, 10, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut"
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Calculator className="w-5 h-5 text-[#009CA6]" />
          <span className="text-sm font-medium text-gray-600">Monthly Savings</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <motion.div
              className="flex items-center gap-1"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <DollarSign className="w-4 h-4 text-green-500" />
              <motion.span
                className="text-lg font-bold text-green-500"
                animate={{ opacity: [0.7, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                1,800+
              </motion.span>
            </motion.div>
          </div>
          <span className="text-xs text-gray-500">per provider</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
