
import React, { useState, useEffect } from 'react';

const GradientBarsBackground: React.FC = () => {
  const [numBars] = useState(15);
  const [animationKey, setAnimationKey] = useState(0);

  // Trigger re-animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const calculateHeight = (index: number, total: number, time: number = 0) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;
    
    // Add wave-like animation based on time and position
    const waveEffect = Math.sin(time * 0.002 + position * Math.PI * 2) * 15;
    const baseHeight = minHeight + (maxHeight - minHeight) * (0.3 + Math.sin(position * Math.PI) * 0.7);
    
    return Math.max(minHeight, Math.min(maxHeight, baseHeight + waveEffect));
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <style>
        {`
          @keyframes pulseBar {
            0% { transform: scaleY(var(--start-scale)) scaleX(1); }
            50% { transform: scaleY(var(--mid-scale)) scaleX(1.02); }
            100% { transform: scaleY(var(--end-scale)) scaleX(1); }
          }
          
          @keyframes waveFlow {
            0% { transform: translateX(0) scaleY(var(--height-scale)); }
            25% { transform: translateX(2%) scaleY(calc(var(--height-scale) * 1.1)); }
            50% { transform: translateX(0) scaleY(calc(var(--height-scale) * 0.9)); }
            75% { transform: translateX(-2%) scaleY(calc(var(--height-scale) * 1.05)); }
            100% { transform: translateX(0) scaleY(var(--height-scale)); }
          }
        `}
      </style>
      <div 
        className="flex h-full"
        style={{
          width: '100%',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const baseHeight = calculateHeight(index, numBars);
          const heightScale = baseHeight / 100;
          const animationDelay = index * 0.15;
          
          return (
            <div
              key={`${index}-${animationKey}`}
              style={{
                flex: '1 0 calc(100% / 15)',
                maxWidth: 'calc(100% / 15)',
                height: '100%',
                background: 'linear-gradient(to top, rgb(56, 126, 137), rgba(56, 126, 137, 0.3), transparent)',
                transformOrigin: 'bottom',
                animation: `waveFlow 3s ease-in-out infinite, pulseBar 2.5s ease-in-out infinite alternate`,
                animationDelay: `${animationDelay}s, ${animationDelay * 0.8}s`,
                outline: '1px solid rgba(0, 0, 0, 0)',
                boxSizing: 'border-box',
                '--height-scale': heightScale,
                '--start-scale': heightScale * 0.8,
                '--mid-scale': heightScale * 1.2,
                '--end-scale': heightScale,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GradientBarsBackground;
