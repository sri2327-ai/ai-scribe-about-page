
import React from "react";
import { motion } from "framer-motion";

export const IntakeQIllustration = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="intakeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387E89" />
          <stop offset="100%" stopColor="#143151" />
        </linearGradient>
        <linearGradient id="intakeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </linearGradient>
        <linearGradient id="intakeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F4F8" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="#f7fafc" rx="20" ry="20" />
      
      {/* Integration Illustration */}
      <motion.g 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* First System */}
        <rect x="60" y="80" width="120" height="140" rx="10" ry="10" fill="url(#intakeGrad1)" />
        <text x="120" y="130" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">INTAKE Q</text>
        <rect x="75" y="150" width="90" height="10" rx="5" ry="5" fill="white" opacity="0.7" />
        <rect x="75" y="170" width="90" height="10" rx="5" ry="5" fill="white" opacity="0.7" />
        <rect x="75" y="190" width="90" height="10" rx="5" ry="5" fill="white" opacity="0.7" />
        
        {/* Second System */}
        <rect x="220" y="80" width="120" height="140" rx="10" ry="10" fill="url(#intakeGrad2)" />
        <text x="280" y="130" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">S10.AI</text>
        <rect x="235" y="150" width="90" height="10" rx="5" ry="5" fill="white" opacity="0.7" />
        <rect x="235" y="170" width="90" height="10" rx="5" ry="5" fill="white" opacity="0.7" />
        <rect x="235" y="190" width="90" height="10" rx="5" ry="5" fill="white" opacity="0.7" />
      </motion.g>
      
      {/* Connection Lines */}
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <path d="M180 120 C 200 120, 200 120, 220 120" stroke="#143151" strokeWidth="3" fill="none" />
        <path d="M180 150 C 200 150, 200 150, 220 150" stroke="#143151" strokeWidth="3" fill="none" />
        <path d="M180 180 C 200 180, 200 180, 220 180" stroke="#143151" strokeWidth="3" fill="none" />
      </motion.g>
      
      {/* Data Packets */}
      <motion.g
        animate={{ 
          x: [0, 40, 0],
          y: [0, 0, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <circle cx="180" cy="120" r="5" fill="#4CD964" />
      </motion.g>
      
      <motion.g
        animate={{ 
          x: [0, 40, 0],
          y: [0, 0, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.7
        }}
      >
        <circle cx="180" cy="150" r="5" fill="#4CD964" />
      </motion.g>
      
      <motion.g
        animate={{ 
          x: [0, 40, 0],
          y: [0, 0, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          delay: 1.4
        }}
      >
        <circle cx="180" cy="180" r="5" fill="#4CD964" />
      </motion.g>
      
      {/* Title */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <rect x="75" y="40" width="250" height="30" rx="15" ry="15" fill="url(#intakeGrad1)" />
        <text x="200" y="60" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Dr. Strotman's Integrated Practice</text>
      </motion.g>
      
      {/* Caption */}
      <motion.text 
        x="200" 
        y="260" 
        fontSize="14" 
        fontWeight="bold" 
        fill="#143151" 
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        Seamless Integration for Efficient Documentation
      </motion.text>
    </svg>
  );
};

export default IntakeQIllustration;
