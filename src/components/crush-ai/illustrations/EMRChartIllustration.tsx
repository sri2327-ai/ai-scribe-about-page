
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Check } from 'lucide-react';

export const EMRChartIllustration = () => {
  return (
    <motion.div
      className="absolute left-[25%] top-[15%] z-0"  // Adjusted position to be visible but not overlapping
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative bg-white rounded-lg shadow-lg p-4 w-48"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-[#009CA6]" />
          <span className="text-xs font-medium text-gray-600">Patient Notes</span>
        </div>
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="h-2 bg-gray-100 rounded mb-2"
            initial={{ width: "20%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        ))}
        <motion.div
          className="absolute -right-2 -top-2 bg-green-100 rounded-full p-1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Check className="w-3 h-3 text-green-600" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
