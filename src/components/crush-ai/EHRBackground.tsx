
import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Database, Cloud, Link2 } from 'lucide-react';
import { crushAIColors } from '@/theme/crush-ai-theme';

export const EHRBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Fix: Specify the correct type for the array ref
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;

      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          const movement = 10 + index * 5; // Different depth for each
          circle.style.transform = `translate(${offsetX * movement}px, ${offsetY * movement}px) scale(1)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        opacity: 0.7,
      }}
    >
      {/* Animated lines */}
      {[10, 30, 50, 70, 90].map((position, idx) => (
        <Box
          key={`line-${idx}`}
          sx={{
            position: 'absolute',
            left: `${position}%`,
            width: '1px',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.05)',
            animation: `moveLine 10s linear infinite ${idx * 2}s`,
            '@keyframes moveLine': {
              '0%': {
                transform: 'translateY(-100%)',
              },
              '100%': {
                transform: 'translateY(100%)',
              },
            },
          }}
        />
      ))}

      {/* Pulsing circles */}
      {[
        { top: '30%', left: '20%', size: 20, icon: <Database size={12} /> },
        { top: '50%', left: '60%', size: 15, icon: <Cloud size={10} /> },
        { top: '70%', left: '40%', size: 25, icon: <Link2 size={14} /> },
      ].map((circle, idx) => (
        <Box
          key={`circle-${idx}`}
          ref={(el) => {
            // Fix: Properly set the ref in the array
            circleRefs.current[idx] = el;
          }}
          sx={{
            position: 'absolute',
            top: circle.top,
            left: circle.left,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            borderRadius: '50%',
            backgroundColor: `${crushAIColors.secondary}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: `${crushAIColors.secondary}90`,
            animation: 'pulse 6s ease-in-out infinite',
            transition: 'transform 0.2s ease-out',
            willChange: 'transform',
            '@keyframes pulse': {
              '0%, 100%': {
                transform: 'scale(1)',
                opacity: 0.2,
              },
              '50%': {
                transform: 'scale(1.5)',
                opacity: 0.4,
              },
            },
          }}
        >
          {circle.icon}
        </Box>
      ))}

      {/* Floating data packets */}
      {[1, 2, 3, 4].map((_, idx) => (
        <motion.div
          key={`packet-${idx}`}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: -20, 
            opacity: 0.8 
          }}
          animate={{ 
            y: '120%',
            opacity: [0.8, 0.4, 0.8],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: idx * 2,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '2px',
            backgroundColor: crushAIColors.secondary,
          }}
        />
      ))}
    </Box>
  );
};
