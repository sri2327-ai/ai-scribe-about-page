
"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
  imageUrl?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.1,
  direction = 'up',
  offset = 0,
  imageUrl,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Create different transform values based on direction
  const getTransformValue = () => {
    const baseAmount = 200;
    switch(direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [`translateY(${baseAmount}px)`, `translateY(-${baseAmount * speed}px)`]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [`translateY(-${baseAmount}px)`, `translateY(${baseAmount * speed}px)`]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [`translateX(${baseAmount}px)`, `translateX(-${baseAmount * speed}px)`]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [`translateX(-${baseAmount}px)`, `translateX(${baseAmount * speed}px)`]);
      default:
        return useTransform(scrollYProgress, [0, 1], [`translateY(${baseAmount}px)`, `translateY(-${baseAmount * speed}px)`]);
    }
  };
  
  const transformValue = getTransformValue();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {imageUrl && (
        <motion.div 
          className="absolute inset-0 w-full h-full -z-10"
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, offset * 100]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7])
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      )}
      
      <motion.div
        style={{ transform: transformValue, opacity }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
