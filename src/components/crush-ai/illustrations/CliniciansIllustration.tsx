
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Heart, Check } from 'lucide-react';

export const CliniciansIllustration = () => {
  return (
    <motion.div
      className="absolute left-0 top-[32%] z-0 w-80"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-4 w-full"
        animate={{
          x: [0, 10, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <Database className="w-8 h-8 text-[#009CA6]" />
          <motion.div
            className="absolute -right-1 -top-1"
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Check className="w-4 h-4 text-green-500" />
          </motion.div>
        </div>
        <div>
          <motion.div
            className="text-sm bg-green-50 px-2 py-1 rounded text-green-600 mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            EHR Updated ✨
          </motion.div>
          <span className="text-xs text-gray-500">Patient notes synchronized successfully</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
