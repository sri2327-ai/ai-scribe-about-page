
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, ArrowRight, Bot } from 'lucide-react';

export const EMRChartIllustration = () => {
  return (
    <motion.div
      className="absolute left-[10%] top-[5%] z-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative bg-white rounded-lg shadow-lg p-4 w-80"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Bot className="w-5 h-5 text-[#009CA6]" />
          <span className="text-sm font-medium text-gray-600">AI Assistant Writing Notes</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="w-4 h-4 text-blue-500" />
          <motion.div
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            "Patient presents with..."
          </motion.div>
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              className="h-2 bg-blue-100 rounded"
              initial={{ width: "20%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </div>
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
