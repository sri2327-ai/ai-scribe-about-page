
import React from 'react';
import { motion } from 'framer-motion';

interface VoiceAnimationProps {
  size?: 'sm' | 'md' | 'lg';
}

export const VoiceAnimation: React.FC<VoiceAnimationProps> = ({ size = 'md' }) => {
  // Adjust the heights based on size
  const getHeight = (baseHeight: number) => {
    switch (size) {
      case 'sm':
        return baseHeight * 0.7;
      case 'lg':
        return baseHeight * 1.2;
      case 'md':
      default:
        return baseHeight;
    }
  };

  // Adjust the container size
  const containerClass = {
    sm: 'h-4 w-8',
    md: 'h-5 w-10',
    lg: 'h-6 w-12'
  }[size];

  return (
    <div className={`flex items-center justify-center gap-0.5 ${containerClass}`}>
      {[1, 2, 3, 4].map((_, i) => {
        const baseHeight = [4, 6, 8, 5][i]; // Different heights for each bar
        const height = getHeight(baseHeight);
        return (
          <motion.div
            key={i}
            className="bg-[#387E89] rounded-full w-1"
            initial={{ height: 2 }}
            animate={{ 
              height: [`${height}px`, `${height/2}px`, `${height}px`],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};
