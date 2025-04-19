
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
}

const AnimatedGradientBackground = ({
  startingGap = 300,
  Breathing = true,
  gradientColors = ["#26C6DA", "#F06292"], // Updated default colors
  gradientStops = [0, 100],
  animationSpeed = 0.03,
  breathingRange = 20,
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
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create diagonal gradient
      const gradient = ctx.createLinearGradient(
        0, 0,  // Start from top-left
        canvas.width, canvas.height  // End at bottom-right
      );

      // Add colors to gradient
      gradientColors.forEach((color, index) => {
        gradient.addColorStop(gradientStops[index] / 100, color);
      });

      // Apply soft blur effect
      ctx.filter = 'blur(60px)';

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
  }, [startingGap, Breathing, gradientColors, gradientStops, animationSpeed, breathingRange]);

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
