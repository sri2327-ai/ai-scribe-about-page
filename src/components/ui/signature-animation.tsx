
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Path data extracted from the provided signature image
// This represents the path data for "Sri" signature
const pathData = "M62,65 C79,24 92,22 92,53 C92,80 85,116 85,116 C85,116 111,54 135,54 C158,54 150,105 122,105 M150,54 C165,54 189,54 189,76 C189,97 165,116 146,105";

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
    const length = 1200; // Approximate path length
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
