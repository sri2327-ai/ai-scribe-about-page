
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const VoiceAnimation = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <AnimatePresence>
        {isActive && (
          <>
            {/* Central Icon */}
            <motion.img
              src="/lovable-uploads/8373b719-98a1-40b9-8d6b-b23bebf28d33.png"
              alt="Voice Assistant"
              className="w-14 h-14 object-contain relative z-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1, 0.8],
                opacity: 1 
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />

            {/* Inner Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{
                background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)',
              }}
            />

            {/* Middle Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0, 0.4, 0],
                scale: [0.8, 1.4, 0.8],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0.2,
              }}
              style={{
                background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, rgba(236,72,153,0) 70%)',
              }}
            />

            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [0.8, 1.6, 0.8],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0.4,
              }}
              style={{
                background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(236,72,153,0) 70%)',
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

