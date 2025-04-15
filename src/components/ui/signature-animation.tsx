
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Simplified path data for "Sridar" handwritten signature
const pathData = "M25,70 C35,40 45,30 60,40 C70,50 65,70 60,90 M70,60 C80,40 90,40 100,50 C110,60 105,80 95,90 M110,50 C120,40 130,40 140,50 C145,60 140,75 130,85 M155,40 C160,50 165,70 165,90 M175,40 C180,50 185,60 190,70 C195,80 180,85 175,75 M195,40 C200,60 200,80 200,90";

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
  height = 150,
  color = "#1EAEDB", // Teal blue
  strokeWidth = 2,
  speed = 1.5,
}: SignatureAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
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
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear any previous drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up canvas with device pixel ratio for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    
    // Configure stroke style
    ctx.strokeStyle = color;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Create a path from our path data
    const path = new Path2D(pathData);
    
    // Animation properties
    const length = 1600; // Adjusted length for the simpler path
    let progress = 0;
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };
    
    window.addEventListener('resize', handleResize);
    
    // Draw function for animation
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Use line dash to create drawing effect
      ctx.setLineDash([length]);
      ctx.lineDashOffset = length - (progress / 100) * length;
      
      // Add subtle shadow for depth
      ctx.shadowColor = 'rgba(30, 174, 219, 0.3)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      
      ctx.stroke(path);
      
      if (progress < 100) {
        progress += speed; // Control speed of animation
        requestAnimationFrame(draw);
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
          height: `${height}px`,
        }}
        className="overflow-visible"
      />
    </motion.div>
  );
};
