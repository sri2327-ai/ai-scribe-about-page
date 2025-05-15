
import React from 'react';
import { motion } from 'framer-motion';

interface VoiceAnimationProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  color?: string;
  isAnimating?: boolean;
}

export const VoiceAnimation: React.FC<VoiceAnimationProps> = ({ 
  size = 'md', 
  className = '',
  color = '#387E89',
  isAnimating = true
}) => {
  // Adjust the heights based on size
  const getHeight = (baseHeight: number) => {
    switch (size) {
      case 'xs':
        return baseHeight * 0.5;
      case 'sm':
        return baseHeight * 0.7;
      case 'lg':
        return baseHeight * 1.2;
      case 'md':
      default:
        return baseHeight;
    }
  };

  // Adjust the container size and spacing
  const containerClass = {
    xs: 'h-3 w-6',
    sm: 'h-4 w-8',
    md: 'h-5 w-10',
    lg: 'h-6 w-12'
  }[size];
  
  const barSpacing = {
    xs: 'gap-[1px]',
    sm: 'gap-0.5',
    md: 'gap-0.5',
    lg: 'gap-1'
  }[size];

  return (
    <div className={`flex items-center justify-center ${barSpacing} ${containerClass} ${className}`}>
      {[1, 2, 3, 4].map((_, i) => {
        const baseHeight = [4, 6, 8, 5][i]; // Different heights for each bar
        const height = getHeight(baseHeight);
        return (
          <motion.div
            key={i}
            className="rounded-full"
            style={{ 
              backgroundColor: color,
              width: size === 'xs' ? 2 : 4 
            }}
            initial={{ height: 2 }}
            animate={isAnimating ? { 
              height: [`${height}px`, `${height/2}px`, `${height}px`],
              opacity: [0.7, 1, 0.7]
            } : { height: 2 }}
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
