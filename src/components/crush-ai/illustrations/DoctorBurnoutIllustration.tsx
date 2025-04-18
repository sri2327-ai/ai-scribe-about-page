
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Shield } from 'lucide-react';

export const DoctorBurnoutIllustration = () => {
  return (
    <motion.div
      className="absolute left-0 top-[86%] z-0 w-80"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-4 w-full"
        animate={{
          y: [0, -8, 0],
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
          <Shield className="w-5 h-5 text-[#009CA6]" />
          <span className="text-sm font-medium text-gray-600">Doctor Wellbeing</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 text-pink-500" fill="#ec4899" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1"
          >
            <Clock className="w-4 h-4 text-green-500" />
            <span className="text-green-500 font-semibold">+2hrs/day</span>
          </motion.div>
          <span className="text-xs text-gray-500">saved</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
