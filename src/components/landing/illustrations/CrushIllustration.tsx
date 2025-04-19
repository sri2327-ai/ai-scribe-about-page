
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mic, Brain, CircleCheck } from 'lucide-react';

export const CrushIllustration = () => {
  const iconColor = "#143151";
  const connectingLineColor = "#387E89";

  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">
      <svg className="absolute w-full h-full">
        <motion.path
          d="M 100,150 L 200,150 L 300,150 L 400,150"
          stroke={connectingLineColor}
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      <motion.div 
        className="absolute left-[10%] bg-white p-4 rounded-lg shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Mic size={32} color={iconColor} />
        <p className="text-xs mt-2 text-gray-600">Voice Input</p>
      </motion.div>

      <motion.div 
        className="absolute left-[35%] bg-white p-4 rounded-lg shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Brain size={32} color={iconColor} />
        <p className="text-xs mt-2 text-gray-600">AI Processing</p>
      </motion.div>

      <motion.div 
        className="absolute left-[60%] bg-white p-4 rounded-lg shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <FileText size={32} color={iconColor} />
        <p className="text-xs mt-2 text-gray-600">Documentation</p>
      </motion.div>

      <motion.div 
        className="absolute left-[85%] bg-white p-4 rounded-lg shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <CircleCheck size={32} color={iconColor} />
        <p className="text-xs mt-2 text-gray-600">Verified</p>
      </motion.div>
    </div>
  );
};
