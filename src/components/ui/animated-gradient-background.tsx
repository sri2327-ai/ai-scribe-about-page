
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedGradientBackgroundProps {
  startingGap?: number;
  Breathing?: boolean;
  gradientColors?: string[];
  gradientStops?: number[];
  animationSpeed?: number;
  breathingRange?: number;
  position?: "top" | "bottom";
}

const AnimatedGradientBackground = ({
  startingGap = 300,
  Breathing = true,
  gradientColors = ["#000", "#1EAEDB", "#0FA0CE", "#000"],
  gradientStops = [0, 30, 60, 100],
  animationSpeed = 0.03,
  breathingRange = 20,
  position = "top", // Added position parameter
}: AnimatedGradientBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  const breathingRef = useRef(startingGap);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = (time: number) => {
      if (previousTimeRef.current === 0) {
        previousTimeRef.current = time;
      }
      const deltaTime = time - previousTimeRef.current;

      // Handle canvas resize
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      // Breathing effect
      if (Breathing) {
        breathingRef.current += Math.sin(time * 0.001) * animationSpeed;
        if (breathingRef.current > startingGap + breathingRange) {
          breathingRef.current = startingGap + breathingRange;
        } else if (breathingRef.current < startingGap - breathingRange) {
          breathingRef.current = startingGap - breathingRange;
        }
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create radial gradient - adjust the position based on the position prop
      const centerY = position === "top" ? 0 : canvas.height;
      
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 
        centerY, 
        breathingRef.current, 
        canvas.width / 2, 
        centerY, 
        canvas.width * 1.2
      );

      // Add colors to gradient (with adjusted order if position is bottom)
      if (position === "top") {
        gradientColors.forEach((color, index) => {
          gradient.addColorStop(gradientStops[index] / 100, color);
        });
      } else {
        // For bottom position, reverse the gradient
        const reversedColors = [...gradientColors].reverse();
        const reversedStops = gradientStops.map(stop => 100 - stop).sort((a, b) => a - b);
        reversedColors.forEach((color, index) => {
          gradient.addColorStop(reversedStops[index] / 100, color);
        });
      }

      // Draw gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = 0;
    };
  }, [startingGap, Breathing, gradientColors, gradientStops, animationSpeed, breathingRange, position]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default AnimatedGradientBackground;
