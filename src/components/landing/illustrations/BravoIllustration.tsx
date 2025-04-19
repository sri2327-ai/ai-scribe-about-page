
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, FileCheck, UserCheck } from 'lucide-react';

export const BravoIllustration = () => {
  const iconColor = "#143151";
  const connectingLineColor = "#387E89";

  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">
      <svg className="absolute w-full h-full">
        <motion.path
          d="M 100,150 C 150,150 150,100 200,100 L 300,100 C 350,100 350,150 400,150"
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
        <Calendar size={32} color={iconColor} />
        <p className="text-xs mt-2 text-gray-600">Scheduling</p>
      </motion.div>

      <motion.div 
        className="absolute left-[35%] top-[30%] bg-white p-4 rounded-lg shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MessageSquare size={32} color={iconColor} />
        <p className="text-xs mt-2 text-gray-600">Communication</p>
      </motion.div>

      <motion.div 
        className="absolute left-[60%] top-[30%] bg-white p-4 rounded-lg shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <FileCheck size={32} color={iconColor} />
        <p className="text-xs mt-2 text-gray-600">Verification</p>
      </motion.div>

      <motion.div 
        className="absolute left-[85%] bg-white p-4 rounded-lg shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <UserCheck size={32} color={iconColor} />
        <p className="text-xs mt-2 text-gray-600">Patient Care</p>
      </motion.div>
    </div>
  );
};
