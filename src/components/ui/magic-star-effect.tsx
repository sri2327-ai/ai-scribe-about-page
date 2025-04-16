
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type StarType = {
  id: number;
  top: string;
  left: string;
  scale: number;
  delay: number;
};

interface MagicStarEffectProps {
  children: React.ReactNode;
  color?: string;
  count?: number;
  className?: string;
}

export const MagicStarEffect = ({
  children,
  color = 'white',
  count = 20,
  className = '',
}: MagicStarEffectProps) => {
  const [stars, setStars] = useState<StarType[]>([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        scale: Math.random() * 0.5 + 0.5,
        delay: Math.random() * 2,
      }));
    };

    setStars(generateStars());
    const interval = setInterval(() => {
      setStars(generateStars());
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* The actual content */}
      {children}

      {/* Star container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <AnimatePresence>
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute z-20"
              style={{
                top: star.top,
                left: star.left,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, star.scale, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: star.delay,
                ease: "easeInOut",
              }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0L9.32737 5.18237H14.6569L10.4148 8.38525L12.2421 13.5676L7.5 10.3647L2.75785 13.5676L4.58517 8.38525L0.343146 5.18237H5.67263L7.5 0Z"
                  fill={color}
                />
              </svg>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
