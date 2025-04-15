"use client";

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  tailLength: number;
}

interface ShootingStarsProps {
  starCount?: number;
  className?: string;
  colors?: string[];
  interactive?: boolean;
}

const ShootingStars: React.FC<ShootingStarsProps> = ({ 
  starCount = 20,
  className = "",
  colors = ["#ffffff", "#1EAEDB"],
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const cursorRef = useRef({ x: 0, y: 0, active: false });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Create initial stars
    const createStars = () => {
      const stars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(createStar(canvas));
      }
      starsRef.current = stars;
    };

    // Create a single star
    const createStar = (canvas: HTMLCanvasElement): Star => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        tailLength: Math.random() * 80 + 40
      };
    };

    // Animation function
    const animateStars = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach((star, index) => {
        // Update star position
        star.x -= star.speed;
        
        // If star moves off screen, reset it
        if (star.x < -star.tailLength) {
          starsRef.current[index] = createStar(canvas);
          starsRef.current[index].x = canvas.width + 10;
        }
        
        // Add interactivity - stars change direction near cursor
        if (interactive && cursorRef.current.active) {
          const dx = star.x - cursorRef.current.x;
          const dy = star.y - cursorRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            star.x += Math.cos(angle) * 0.5;
            star.y += Math.sin(angle) * 0.5;
          }
        }
        
        // Draw star
        ctx.beginPath();
        
        // Create gradient for the tail
        const gradient = ctx.createLinearGradient(
          star.x, star.y, 
          star.x + star.tailLength, star.y
        );
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.size;
        ctx.lineCap = 'round';
        
        // Draw the tail
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.tailLength, star.y);
        ctx.stroke();
        
        // Draw the star head
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animateStars);
    };

    // Setup event listeners for interactivity
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
      cursorRef.current.active = true;
    };

    const handleClick = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
      
      // Create a few new stars at click position
      if (interactive) {
        for (let i = 0; i < 5; i++) {
          const star = createStar(canvas);
          star.x = e.clientX;
          star.y = e.clientY;
          starsRef.current.push(star);
          
          // Keep total stars at reasonable count
          if (starsRef.current.length > starCount + 20) {
            starsRef.current.shift();
          }
        }
      }
    };

    const handleMouseLeave = () => {
      cursorRef.current.active = false;
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('click', handleClick);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    // Initialize and start animation
    createStars();
    animateStars();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', setCanvasDimensions);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('click', handleClick);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [starCount, colors, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default ShootingStars;
