
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Optimized path data for "Sridar" signature with better visibility
const pathData = "M25,50 C35,30 45,20 60,30 C70,40 65,60 60,80 M75,30 C85,20 95,20 105,30 C115,40 110,70 95,80 M115,30 C125,20 135,20 145,30 C150,40 145,65 135,75 M160,20 C165,40 165,60 165,80 M180,20 C190,40 195,50 190,60 C185,70 180,75 175,65 M200,20 C205,40 205,60 205,80";

interface SignatureAnimationProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  speed?: number;
}

export const SignatureAnimation = ({
  className = "",
  width = 300,
  height = undefined,
  color = "#1EAEDB",
  strokeWidth = 3, // Increased stroke width for better visibility
  speed = 0.8, // Slowed down animation for better visibility
}: SignatureAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  // Calculate height based on width to maintain aspect ratio
  const calculatedHeight = height || Math.floor(width * 0.5);
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      animateSignature();
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const animateSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set the canvas size with higher resolution for better rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = (width * dpr);
    canvas.height = (calculatedHeight * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${calculatedHeight}px`;
    
    // Scale for higher resolution
    ctx.scale(dpr, dpr);
    
    // Clear any previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Configure the drawing style
    ctx.strokeStyle = color;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Add shadow for better visibility
    ctx.shadowColor = 'rgba(30, 174, 219, 0.5)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    
    // Create path from the path data
    const path = new Path2D(pathData);
    
    // Animation properties
    const length = 1200; // Adjusted for the signature length
    let progress = 0;
    
    // Handle window resize
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = (width * dpr);
      canvas.height = (calculatedHeight * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${calculatedHeight}px`;
      ctx.scale(dpr, dpr);
      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    };
    
    window.addEventListener('resize', handleResize);
    
    // Draw function for animation
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set line dash for animation effect
      ctx.setLineDash([length, length]);
      ctx.lineDashOffset = length - (progress * length);
      
      // Apply shadow for better visibility
      ctx.shadowColor = 'rgba(30, 174, 219, 0.5)';
      ctx.shadowBlur = 5;
      
      // Draw the path
      ctx.stroke(path);
      
      // Continue animation until complete
      if (progress < 1) {
        progress += speed / 100;
        requestAnimationFrame(draw);
      } else {
        // Ensure the signature is fully visible at the end
        ctx.setLineDash([]);
        ctx.stroke(path);
      }
    };
    
    // Start animation
    draw();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 }
      }}
      transition={{ duration: 0.5 }}
      className={`flex justify-center items-center ${className}`}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: `${width}px`,
          height: `${calculatedHeight}px`,
          overflow: 'visible',
        }}
      />
    </motion.div>
  );
};
