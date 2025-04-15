
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Updated path data to match the provided signature image more closely
// This represents the path data for "Sridhar" signature based on the uploaded image
const pathData = "M20,60 C30,20 45,10 60,15 C70,18 75,40 75,60 C75,75 70,90 70,100 M70,60 C80,40 90,40 100,50 C110,60 105,80 95,85 M100,50 C115,50 125,60 125,75 C125,90 110,95 105,90 M130,60 C140,40 150,40 155,50 C155,60 150,70 140,75 M160,60 C165,50 170,45 175,50 C180,55 180,65 170,70 M185,40 C190,55 190,70 190,80";

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
    const length = 1500; // Increased length to match the longer path
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
