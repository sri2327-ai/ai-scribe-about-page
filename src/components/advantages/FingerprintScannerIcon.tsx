
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
          <rect x="20" y="20" width="60" height="60" rx="10" />
        </clipPath>
      </defs>
      <g clipPath="url(#fingerprintClip)">
        {[35, 45, 55, 65, 75].map((y, i) => (
          <motion.path
            key={`fp-line-${i}-top`}
            d={`M25 ${y-i*1.5} C 40 ${y - 10 - i*2}, 60 ${y - 10 - i*2}, 75 ${y-i*1.5}`}
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.7 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
          />
        ))}
        <motion.path
          d={`M50 25 C 40 30, 40 70, 50 75`}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        />
      </g>
      <motion.rect
        x="15"
        width="70"
        height="3"
        fill="#2DD4BF" 
        rx="1.5"
        animate={{ y: [25, 70, 25] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        style={{ boxShadow: "0 0 8px 2px #2DD4BF" }} 
      />
    </svg>
  );
};
