
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
          <rect x="15" y="15" width="70" height="70" rx="10" />
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
        {/* Outer ridges */}
        <motion.path
          d="M25 30 C 35 20, 65 20, 75 30 S 85 60, 75 70 S 35 80, 25 70 S 15 40, 25 30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
        />
        
        {/* Middle ridges */}
        <motion.path
          d="M35 35 C 42 30, 58 30, 65 35 S 70 55, 65 60 S 42 65, 35 60 S 28 40, 35 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
        />
        
        {/* Inner ridges */}
        <motion.path
          d="M45 40 C 48 38, 52 38, 55 40 S 58 48, 55 52 S 48 55, 45 52 S 42 44, 45 40"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
        />
        
        {/* Core */}
        <motion.circle
          cx="50"
          cy="45"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut", repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
        />
      </g>
      
      {/* Scanning effect */}
      <motion.rect
        x="15"
        width="70"
        height="3"
        fill="#0d9488" 
        rx="1.5"
        animate={{ y: [20, 65, 20] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 0 6px #0d9488)" }} 
      />
    </svg>
  );
};
