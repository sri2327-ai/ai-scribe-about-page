
import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Database, Cloud, Link2 } from 'lucide-react';
import { crushAIColors } from '@/theme/crush-ai-theme';

export const EHRBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);

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

      lineRefs.current.forEach((line, index) => {
        if (line) {
          const movement = 5 + index * 3;
          line.style.transform = `translate(${offsetX * movement}px, ${offsetY * movement}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate more complex neural network-like line connections
  const generateNeuralNetworkLines = () => {
    const lines = [];
    const lineCount = 50; // Increased number of lines
    for (let i = 0; i < lineCount; i++) {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;
      
      lines.push(
        <Box
          key={`neural-line-${i}`}
          ref={(el) => {
            lineRefs.current[i] = el as HTMLDivElement | null;
          }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1px',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)', // Thin white lines with low opacity
            transform: `translate(${startX}%, ${startY}%) rotate(${Math.random() * 360}deg)`,
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.3)', // Soft glow effect
            transition: 'transform 0.2s ease-out',
            willChange: 'transform',
          }}
        />
      );
    }
    return lines;
  };

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
        opacity: 0.9,
        background: 'rgba(20, 49, 81, 0.1)', // Slight background color to help lines stand out
      }}
    >
      {/* Neural Network Lines */}
      {generateNeuralNetworkLines()}

      {/* Pulsing circles */}
      {[
        { top: '30%', left: '20%', size: 20, icon: <Database size={12} color="white" /> },
        { top: '50%', left: '60%', size: 15, icon: <Cloud size={10} color="white" /> },
        { top: '70%', left: '40%', size: 25, icon: <Link2 size={14} color="white" /> },
      ].map((circle, idx) => (
        <Box
          key={`circle-${idx}`}
          ref={(el) => {
            circleRefs.current[idx] = el as HTMLDivElement | null;
          }}
          sx={{
            position: 'absolute',
            top: circle.top,
            left: circle.left,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            animation: 'pulse 6s ease-in-out infinite',
            transition: 'transform 0.2s ease-out',
            willChange: 'transform',
            '@keyframes pulse': {
              '0%, 100%': {
                transform: 'scale(1)',
                opacity: 0.5,
              },
              '50%': {
                transform: 'scale(1.5)',
                opacity: 0.8,
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
            opacity: 0.9
          }}
          animate={{ 
            y: '120%',
            opacity: [0.9, 0.6, 0.9],
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
            backgroundColor: 'white',
          }}
        />
      ))}
    </Box>
  );
};
