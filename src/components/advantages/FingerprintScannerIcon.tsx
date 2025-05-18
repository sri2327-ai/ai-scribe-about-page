
import React from "react";
import { motion } from "framer-motion";

interface FingerprintScannerIconProps {
  className?: string;
  size?: string;
}

export const FingerprintScannerIcon: React.FC<FingerprintScannerIconProps> = ({ 
  className = "", 
  size = "text-xl" 
}) => {
  return (
    <svg viewBox="0 0 100 100" className={`inline-block fill-current overflow-visible ${size} ${className}`} width="1em" height="1em">
      <defs>
        <clipPath id="fingerprintClip">
          <rect x="10" y="10" width="80" height="80" rx="10" />
        </clipPath>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor="#0d9488" floodOpacity="0.6" result="glowColor" />
          <feComposite in="glowColor" in2="blur" operator="in" result="softGlow" />
          <feMerge>
            <feMergeNode in="softGlow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g clipPath="url(#fingerprintClip)" filter="url(#glow)">
        {/* Thumbprint core */}
        <motion.ellipse
          cx="50"
          cy="35"
          rx="18"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="2 1"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Outer whorls */}
        <motion.path
          d="M20 60 C 30 25, 70 25, 80 60"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        />
        
        {/* Middle whorls */}
        <motion.path
          d="M25 65 C 35 35, 65 35, 75 65"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.8, delay: 0.3, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        />
        
        {/* Inner whorls */}
        <motion.path
          d="M32 70 C 40 45, 60 45, 68 70"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.6, delay: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        />
        
        {/* Bottom arch */}
        <motion.path
          d="M35 75 C 42 60, 58 60, 65 75"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.4, delay: 0.9, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        />
        
        {/* Side ridges - left */}
        <motion.path
          d="M30 40 C 25 45, 22 55, 25 65"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.6 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.7 }}
        />
        
        {/* Side ridges - right */}
        <motion.path
          d="M70 40 C 75 45, 78 55, 75 65"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.6 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.7 }}
        />
      </g>
      
      {/* Enhanced scanning effect with better glow */}
      <motion.rect
        x="10"
        width="80"
        height="4"
        fill="#0d9488" 
        rx="2"
        animate={{ y: [15, 75, 15] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 0 8px #0d9488)" }} 
      />
      
      {/* Additional pulse effect around the fingerprint */}
      <motion.rect
        x="10" 
        y="10" 
        width="80" 
        height="80" 
        rx="10"
        fill="none"
        stroke="#0d9488"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
};
