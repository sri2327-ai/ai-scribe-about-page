
"use client";

import React, { useEffect, useRef } from 'react';

interface VoiceWavesProps {
  className?: string;
  colors?: string[];
  opacity?: number;
}

const VoiceWaves: React.FC<VoiceWavesProps> = ({ 
  className = "",
  colors = ["#2EB9DF", "#D946EF"], // Teal blue and pink
  opacity = 0.1 // Very subtle
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const wavePointsRef = useRef<Array<{
    x: number;
    y: number;
    amplitude: number;
    speed: number;
    color: string;
    phase: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (canvas) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        
        // Reinitialize wave points when dimensions change
        initializeWavePoints();
      }
    };

    const initializeWavePoints = () => {
      const points = [];
      const numberOfWaves = 3; // Reduced number of waves
      const canvasHeight = canvas.height;
      
      for (let i = 0; i < numberOfWaves; i++) {
        points.push({
          x: 0,
          y: canvasHeight * (0.4 + (i / numberOfWaves) * 0.2), // More constrained vertical distribution
          amplitude: Math.random() * 15 + 5, // Smaller amplitude
          speed: Math.random() * 0.02 + 0.01, // Slower speed
          color: colors[i % colors.length],
          phase: Math.random() * Math.PI * 2
        });
      }
      
      wavePointsRef.current = points;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Animation function
    const animateWaves = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with slight fade effect
      ctx.fillStyle = `rgba(255, 255, 255, ${1 - opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width;
      
      wavePointsRef.current.forEach(wave => {
        wave.phase += wave.speed;
        
        ctx.beginPath();
        
        // Soft gradient for each wave
        const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, wave.y + wave.amplitude);
        gradient.addColorStop(0, `${wave.color}20`); // Very transparent at top
        gradient.addColorStop(0.5, `${wave.color}40`); // Slightly more opaque in middle
        gradient.addColorStop(1, `${wave.color}20`); // Very transparent at bottom
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        
        ctx.moveTo(0, wave.y);
        
        for (let x = 0; x < width; x += 5) {
          const frequency = 0.01;
          const y = wave.y + 
                    Math.sin(x * frequency + wave.phase) * wave.amplitude * 0.5 + 
                    Math.sin(x * frequency * 0.6 + wave.phase * 0.7) * wave.amplitude * 0.3; 
          
          ctx.lineTo(x, y);
        }
        
        ctx.stroke();
      });
      
      animationRef.current = requestAnimationFrame(animateWaves);
    };

    // Initialize and start animation
    initializeWavePoints();
    animateWaves();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [colors, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0, opacity: 0.2 }}
    />
  );
};

export default VoiceWaves;
