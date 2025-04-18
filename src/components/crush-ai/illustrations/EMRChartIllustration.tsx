
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, ArrowRight } from 'lucide-react';

export const EMRChartIllustration = () => {
  return (
    <motion.div
      className="absolute left-[10%] top-[15%] z-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative bg-white rounded-lg shadow-lg p-4 w-56"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-[#009CA6]" />
          <span className="text-sm font-medium text-gray-600">AI Assistant Writing</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="w-4 h-4 text-blue-500" />
          <motion.div
            className="h-2 bg-blue-100 rounded flex-1"
            initial={{ width: "20%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </div>
        {[1, 2].map((_, i) => (
          <motion.div
            key={i}
            className="h-2 bg-gray-100 rounded mb-2"
            initial={{ width: "20%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
        <motion.div
          className="absolute -right-3 top-1/2 text-[#009CA6]"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
