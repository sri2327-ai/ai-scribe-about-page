
import React from "react";
import { motion } from "framer-motion";

const AlaskaTherapyIllustration = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="alaskaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387E89" />
          <stop offset="100%" stopColor="#143151" />
        </linearGradient>
        <linearGradient id="alaskaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </linearGradient>
        <linearGradient id="alaskaGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F4F8" />
        </linearGradient>
        <linearGradient id="mountainGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#164E63" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>
        <linearGradient id="snowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9FAFB" />
          <stop offset="100%" stopColor="#E5E7EB" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="#F0F9FF" rx="20" ry="20" />
      
      {/* Mountains */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Back mountains */}
        <path d="M0 230 L100 130 L180 200 L240 120 L320 180 L400 100 L400 300 L0 300 Z" fill="url(#mountainGrad)" />
        
        {/* Snow caps */}
        <path d="M100 130 L115 150 L85 150 Z" fill="url(#snowGrad)" />
        <path d="M240 120 L255 140 L225 140 Z" fill="url(#snowGrad)" />
        <path d="M400 100 L385 125 L400 120 Z" fill="url(#snowGrad)" />
      </motion.g>
      
      {/* Hospital */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <rect x="130" y="150" width="140" height="80" rx="5" ry="5" fill="url(#alaskaGrad3)" stroke="#143151" strokeWidth="2" />
        <rect x="185" y="200" width="30" height="30" fill="#FFFFFF" stroke="#143151" strokeWidth="2" />
        <rect x="120" y="140" width="160" height="20" rx="5" ry="5" fill="url(#alaskaGrad1)" />
        <text x="200" y="155" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">WASILLA HOSPITAL</text>
        
        {/* Medical cross */}
        <rect x="190" y="110" width="20" height="40" rx="2" ry="2" fill="#FF4757" />
        <rect x="180" y="120" width="40" height="20" rx="2" ry="2" fill="#FF4757" />
      </motion.g>
      
      {/* AI Documentation System */}
      <motion.g
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <rect x="40" y="60" width="100" height="70" rx="5" ry="5" fill="white" stroke="#143151" strokeWidth="2" />
        <text x="90" y="85" fontSize="10" fontWeight="bold" fill="#143151" textAnchor="middle">S10.AI</text>
        <text x="90" y="100" fontSize="8" fill="#143151" textAnchor="middle">Medical Scribe</text>
        
        {/* Document lines */}
        <rect x="55" y="110" width="70" height="2" rx="1" ry="1" fill="#143151" />
        <rect x="55" y="115" width="70" height="2" rx="1" ry="1" fill="#143151" />
        <rect x="55" y="120" width="40" height="2" rx="1" ry="1" fill="#143151" />
      </motion.g>
      
      {/* Therapy Notes */}
      <motion.g
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <rect x="260" y="60" width="100" height="70" rx="5" ry="5" fill="white" stroke="#143151" strokeWidth="2" />
        <text x="310" y="85" fontSize="10" fontWeight="bold" fill="#143151" textAnchor="middle">Therapy Notes</text>
        <text x="310" y="100" fontSize="8" fill="#143151" textAnchor="middle">Documentation</text>
        
        {/* Document lines */}
        <rect x="275" y="110" width="70" height="2" rx="1" ry="1" fill="#143151" />
        <rect x="275" y="115" width="70" height="2" rx="1" ry="1" fill="#143151" />
        <rect x="275" y="120" width="40" height="2" rx="1" ry="1" fill="#143151" />
      </motion.g>
      
      {/* Connection arrows */}
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <path d="M140 95 C 170 95, 170 95, 200 150" stroke="#143151" strokeWidth="2" fill="none" />
        <path d="M260 95 C 230 95, 230 95, 200 150" stroke="#143151" strokeWidth="2" fill="none" />
        <polygon points="200,150 195,140 205,140" fill="#143151" />
      </motion.g>
      
      {/* Data packets */}
      <motion.g
        animate={{ 
          x: [0, 30, 0],
          y: [0, -25, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <circle cx="155" cy="95" r="5" fill="#4CD964" />
      </motion.g>
      
      <motion.g
        animate={{ 
          x: [0, -30, 0],
          y: [0, -25, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.7
        }}
      >
        <circle cx="245" cy="95" r="5" fill="#4CD964" />
      </motion.g>
      
      {/* Caption */}
      <motion.text 
        x="200" 
        y="260" 
        fontSize="14" 
        fontWeight="bold" 
        fill="#FFFFFF" 
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        Automated Therapy Documentation in Alaska
      </motion.text>
    </svg>
  );
};

export default AlaskaTherapyIllustration;
