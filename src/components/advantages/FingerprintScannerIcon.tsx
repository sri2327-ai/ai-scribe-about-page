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
  // Simple thumbprint icon with minimal animation
  return (
    <svg viewBox="0 0 100 100" className={`inline-block fill-none stroke-current overflow-visible ${size} ${className}`} width="1em" height="1em">
      <motion.path
        d="M50 10 C 30 10, 20 30, 20 50 C 20 65, 35 75, 35 90"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        d="M50 10 C 70 10, 80 30, 80 50 C 80 65, 65 75, 65 90"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        d="M50 20 C 35 20, 30 35, 30 50 C 30 60, 40 65, 40 80"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        d="M50 20 C 65 20, 70 35, 70 50 C 70 60, 60 65, 60 80"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        d="M50 30 C 42 30, 40 40, 40 50 C 40 55, 45 60, 45 70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        d="M50 30 C 58 30, 60 40, 60 50 C 60 55, 55 60, 55 70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.ellipse
        cx="50"
        cy="50"
        rx="5"
        ry="7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};
