
import React from 'react';
import { motion } from 'framer-motion';

export const VoiceAnimation = () => {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Central Icon */}
      <motion.img
        src="/lovable-uploads/8373b719-98a1-40b9-8d6b-b23bebf28d33.png"
        alt="Voice Assistant"
        className="w-14 h-14 object-contain relative z-20"
        animate={{ 
          scale: [0.9, 1.05, 0.9],
          opacity: [0.9, 1, 0.9]
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Inner Ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ 
          opacity: [0.1, 0.5, 0.1],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(236,72,153,0) 70%)',
        }}
      />

      {/* Middle Ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ 
          opacity: [0.1, 0.4, 0.1],
          scale: [0.9, 1.4, 0.9],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)',
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.6, 1],
        }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.6,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, rgba(236,72,153,0) 70%)',
        }}
      />

      {/* Extra Outer Ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ 
          opacity: [0.05, 0.2, 0.05],
          scale: [1.1, 1.8, 1.1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.9,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(236,72,153,0) 70%)',
        }}
      />
    </div>
  );
};
