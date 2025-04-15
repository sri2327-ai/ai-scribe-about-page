
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Updated path data to more accurately match the provided signature image
// This represents a more precise path data for "Sridhar" signature based on the uploaded image
const pathData = "M25,70 C35,30 50,20 60,35 C65,45 70,60 70,80 C70,95 65,110 65,120 M70,70 C80,50 90,45 100,50 C110,60 110,75 95,90 M100,50 C115,50 125,55 130,70 C130,85 120,95 110,90 M130,70 C140,50 150,50 155,60 C160,70 155,80 145,90 M160,65 C170,50 175,45 180,55 C185,65 180,80 175,85 M185,45 C195,60 195,80 195,90 M205,45 C215,65 210,85 205,90";

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
    const length = 1800; // Increased length to match the longer path
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
