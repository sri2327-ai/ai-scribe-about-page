
import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Database, Cloud, Link2, Network } from 'lucide-react';
import { crushAIColors } from '@/theme/crush-ai-theme';

export const EHRBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<Array<HTMLDivElement | null>>([]);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
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

      nodeRefs.current.forEach((node, index) => {
        if (node) {
          const movement = 8 + index * 4;
          node.style.transform = `translate(${offsetX * movement}px, ${offsetY * movement}px)`;
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

  // Generate neural network nodes (intersection points)
  const generateNetworkNodes = () => {
    const nodes = [];
    const nodeCount = 15; // Number of nodes
    
    for (let i = 0; i < nodeCount; i++) {
      const posX = 10 + Math.random() * 80; // 10-90% of container width
      const posY = 10 + Math.random() * 80; // 10-90% of container height
      
      nodes.push(
        <Box
          key={`node-${i}`}
          ref={(el) => {
            nodeRefs.current[i] = el as HTMLDivElement | null;
          }}
          sx={{
            position: 'absolute',
            top: `${posY}%`,
            left: `${posX}%`,
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
            zIndex: 2,
            transition: 'transform 0.2s ease-out',
            willChange: 'transform',
          }}
        />
      );
    }
    return nodes;
  };

  // Generate neural network connections (lines between nodes)
  const generateNetworkConnections = () => {
    const lines = [];
    const lineCount = 70; // More lines for better density
    
    for (let i = 0; i < lineCount; i++) {
      // Define line properties
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const length = 20 + Math.random() * 30; // Line length 20-50% of container
      const angle = Math.random() * 360; // Random angle in degrees
      const thickness = 1 + Math.random() * 1.5; // Line thickness 1-2.5px
      const opacity = 0.3 + Math.random() * 0.4; // Line opacity 0.3-0.7
      
      lines.push(
        <Box
          key={`line-${i}`}
          ref={(el) => {
            lineRefs.current[i] = el as HTMLDivElement | null;
          }}
          sx={{
            position: 'absolute',
            top: `${startY}%`,
            left: `${startX}%`,
            width: `${length}%`,
            height: `${thickness}px`,
            background: `rgba(255, 255, 255, ${opacity})`,
            boxShadow: `0 0 10px rgba(255, 255, 255, ${opacity})`,
            transform: `rotate(${angle}deg)`,
            transformOrigin: 'left center',
            transition: 'transform 0.2s ease-out',
            willChange: 'transform',
            zIndex: 1,
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
        background: 'rgba(20, 49, 81, 0.15)', // Slightly darker background to increase contrast
      }}
    >
      {/* Neural Network Connections (Lines) */}
      {generateNetworkConnections()}
      
      {/* Neural Network Nodes (Intersections) */}
      {generateNetworkNodes()}

      {/* Pulsing circles with icons */}
      {[
        { top: '30%', left: '20%', size: 24, icon: <Database size={14} color="white" /> },
        { top: '50%', left: '60%', size: 20, icon: <Cloud size={12} color="white" /> },
        { top: '70%', left: '40%', size: 28, icon: <Link2 size={16} color="white" /> },
        { top: '25%', left: '75%', size: 22, icon: <Network size={14} color="white" /> },
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
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            animation: 'pulse 6s ease-in-out infinite',
            transition: 'transform 0.2s ease-out',
            willChange: 'transform',
            zIndex: 3,
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
            '@keyframes pulse': {
              '0%, 100%': {
                transform: 'scale(1)',
                opacity: 0.6,
              },
              '50%': {
                transform: 'scale(1.5)',
                opacity: 0.9,
              },
            },
          }}
        >
          {circle.icon}
        </Box>
      ))}

      {/* Floating data packets */}
      {[1, 2, 3, 4, 5, 6].map((_, idx) => (
        <motion.div
          key={`packet-${idx}`}
          initial={{ 
            x: 20 + Math.random() * 60 + '%', 
            y: -20, 
            opacity: 0.9
          }}
          animate={{ 
            y: '120%',
            opacity: [0.9, 0.7, 0.9],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: idx * 1.5,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            borderRadius: '3px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            zIndex: 2,
          }}
        />
      ))}
    </Box>
  );
};
