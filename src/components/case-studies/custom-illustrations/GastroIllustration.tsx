
import React from "react";
import { motion } from "framer-motion";

export const GastroIllustration = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gastroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a90e2" />
          <stop offset="100%" stopColor="#1e5cb3" />
        </linearGradient>
        <linearGradient id="gastroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#73c3f9" />
          <stop offset="100%" stopColor="#387E89" />
        </linearGradient>
        <linearGradient id="gastroGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#143151" />
          <stop offset="100%" stopColor="#084c61" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="#f7fafc" rx="20" ry="20" />
      
      {/* Digital Clock - Time Saved */}
      <motion.g 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <rect x="50" y="30" width="300" height="80" rx="10" ry="10" fill="url(#gastroGrad3)" />
        <text x="200" y="65" fontSize="36" fontWeight="bold" fill="white" textAnchor="middle">2:00</text>
        <text x="200" y="95" fontSize="16" fill="white" textAnchor="middle">Hours Saved Daily</text>
      </motion.g>
      
      {/* Stomach/GI Tract Icon */}
      <motion.g 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ellipse cx="120" cy="175" rx="50" ry="60" fill="url(#gastroGrad1)" />
        <path d="M120 135 Q 180 155 170 185 Q 160 225 115 235 Q 70 225 70 185 Q 60 155 120 135" fill="url(#gastroGrad2)" stroke="#fff" strokeWidth="2" />
        <circle cx="140" cy="165" r="8" fill="white" opacity="0.6" />
      </motion.g>
      
      {/* Medical Chart with Clock */}
      <motion.g 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <rect x="200" y="130" width="150" height="120" rx="5" ry="5" fill="white" stroke="#143151" strokeWidth="2" />
        <line x1="220" y1="160" x2="330" y2="160" stroke="#143151" strokeWidth="2" />
        <line x1="220" y1="190" x2="330" y2="190" stroke="#143151" strokeWidth="2" />
        <line x1="220" y1="220" x2="330" y2="220" stroke="#143151" strokeWidth="2" />
        
        {/* Clock icon */}
        <circle cx="260" cy="250" r="15" fill="url(#gastroGrad1)" />
        <line x1="260" y1="250" x2="260" y2="240" stroke="white" strokeWidth="2" />
        <line x1="260" y1="250" x2="268" y2="254" stroke="white" strokeWidth="2" />
      </motion.g>
      
      {/* Caption */}
      <motion.text 
        x="200" 
        y="280" 
        fontSize="14" 
        fontWeight="bold" 
        fill="#143151" 
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        AI Efficiency for Gastroenterologists
      </motion.text>
    </svg>
  );
};

export default GastroIllustration;
