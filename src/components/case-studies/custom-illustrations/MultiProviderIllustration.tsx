
import React from "react";
import { motion } from "framer-motion";

export const MultiProviderIllustration = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="multiGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387E89" />
          <stop offset="100%" stopColor="#143151" />
        </linearGradient>
        <linearGradient id="multiGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </linearGradient>
        <radialGradient id="multiGrad3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#F5F7FA" />
          <stop offset="100%" stopColor="#E4E7EB" />
        </radialGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="#f7fafc" rx="20" ry="20" />
      
      {/* Central AI System */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <circle cx="200" cy="150" r="60" fill="url(#multiGrad1)" />
        <text x="200" y="145" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">S10.AI</text>
        <text x="200" y="165" fontSize="12" fill="white" textAnchor="middle">Medical Scribe</text>
      </motion.g>
      
      {/* Provider 1 */}
      <motion.g
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <circle cx="80" cy="90" r="30" fill="url(#multiGrad2)" />
        <circle cx="80" cy="75" r="12" fill="#FFFFFF" />
        <rect x="68" y="90" width="24" height="20" rx="10" ry="10" fill="#FFFFFF" />
        <text x="80" y="130" fontSize="12" fontWeight="bold" fill="#143151" textAnchor="middle">Provider 1</text>
      </motion.g>
      
      {/* Provider 2 */}
      <motion.g
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <circle cx="320" cy="90" r="30" fill="url(#multiGrad2)" />
        <circle cx="320" cy="75" r="12" fill="#FFFFFF" />
        <rect x="308" y="90" width="24" height="20" rx="10" ry="10" fill="#FFFFFF" />
        <text x="320" y="130" fontSize="12" fontWeight="bold" fill="#143151" textAnchor="middle">Provider 2</text>
      </motion.g>
      
      {/* Provider 3 */}
      <motion.g
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <circle cx="80" cy="210" r="30" fill="url(#multiGrad2)" />
        <circle cx="80" cy="195" r="12" fill="#FFFFFF" />
        <rect x="68" y="210" width="24" height="20" rx="10" ry="10" fill="#FFFFFF" />
        <text x="80" y="250" fontSize="12" fontWeight="bold" fill="#143151" textAnchor="middle">Provider 3</text>
      </motion.g>
      
      {/* Provider 4 */}
      <motion.g
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <circle cx="320" cy="210" r="30" fill="url(#multiGrad2)" />
        <circle cx="320" cy="195" r="12" fill="#FFFFFF" />
        <rect x="308" y="210" width="24" height="20" rx="10" ry="10" fill="#FFFFFF" />
        <text x="320" y="250" fontSize="12" fontWeight="bold" fill="#143151" textAnchor="middle">Provider 4</text>
      </motion.g>
      
      {/* Connection Lines */}
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <path d="M110 90 L 150 120" stroke="#143151" strokeWidth="2" fill="none" />
        <path d="M290 90 L 250 120" stroke="#143151" strokeWidth="2" fill="none" />
        <path d="M110 210 L 150 180" stroke="#143151" strokeWidth="2" fill="none" />
        <path d="M290 210 L 250 180" stroke="#143151" strokeWidth="2" fill="none" />
      </motion.g>
      
      {/* Time Saved Badges */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <circle cx="130" cy="70" r="15" fill="#4CD964" />
        <text x="130" y="74" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">2h</text>
        
        <circle cx="270" cy="70" r="15" fill="#4CD964" />
        <text x="270" y="74" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">2h</text>
        
        <circle cx="130" cy="230" r="15" fill="#4CD964" />
        <text x="130" y="234" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">2h</text>
        
        <circle cx="270" cy="230" r="15" fill="#4CD964" />
        <text x="270" y="234" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">2h</text>
      </motion.g>
      
      {/* Main Banner */}
      <motion.g
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <rect x="100" y="30" width="200" height="30" rx="15" ry="15" fill="url(#multiGrad1)" />
        <text x="200" y="50" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">2+ Hours Saved Per Provider</text>
      </motion.g>
    </svg>
  );
};

export default MultiProviderIllustration;
