
"use client";

import React, { useEffect, useRef } from 'react';

interface VoiceWavesProps {
  className?: string;
  colors?: string[];
}

const VoiceWaves: React.FC<VoiceWavesProps> = ({ 
  className = "",
  colors = ["#1EAEDB", "#D946EF", "#1EAEDB"]
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
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Reinitialize wave points when dimensions change
        initializeWavePoints();
      }
    };

    const initializeWavePoints = () => {
      const points = [];
      const numberOfWaves = 12;
      const canvasHeight = canvas.height;
      
      // For mobile devices, use different parameters
      const isMobile = window.innerWidth < 768;
      const baseAmplitude = isMobile ? 20 : 40;
      const minAmplitude = isMobile ? 10 : 15;
      
      for (let i = 0; i < numberOfWaves; i++) {
        // Create horizontal waves at different heights
        points.push({
          x: 0,
          y: canvasHeight * (0.2 + (i / numberOfWaves) * 0.6), // Distribute across middle 60% of canvas
          amplitude: Math.random() * baseAmplitude + minAmplitude, // Responsive amplitude
          speed: Math.random() * 0.03 + 0.01, // Random speed
          color: colors[i % colors.length], // Alternate colors
          phase: Math.random() * Math.PI * 2 // Random starting phase
        });
      }
      
      wavePointsRef.current = points;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Animation function
    const animateWaves = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with slight fade effect for trail
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width;
      
      wavePointsRef.current.forEach(wave => {
        // Update wave phase for animation
        wave.phase += wave.speed;
        
        // Draw the wave
        ctx.beginPath();
        
        // Define the gradient for each wave
        const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, wave.y + wave.amplitude);
        gradient.addColorStop(0, `${wave.color}80`); // 50% opacity at top (increased from 40%)
        gradient.addColorStop(0.5, wave.color); // Full color in middle
        gradient.addColorStop(1, `${wave.color}80`); // 50% opacity at bottom (increased from 40%)
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8; // Slightly thicker lines for better visibility
        
        // Start drawing from left edge
        ctx.moveTo(0, wave.y);
        
        // Draw the wave across the canvas width
        // Use smaller step size for higher resolution waves
        const stepSize = window.innerWidth < 768 ? 3 : 5;
        for (let x = 0; x < width; x += stepSize) {
          // Create a sine wave with varying frequency
          const frequency = 0.01; // Base frequency
          const y = wave.y + 
                    Math.sin(x * frequency + wave.phase) * wave.amplitude * 0.5 + 
                    Math.sin(x * frequency * 0.6 + wave.phase * 0.7) * wave.amplitude; 
          
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
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default VoiceWaves;
