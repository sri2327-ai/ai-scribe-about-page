
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { DemoStage } from './S10Demo';
import { SplineScene } from '@/components/ui/splite';

interface DemoSceneProps {
  currentStage: number;
  scrollProgress: any;
  stages: DemoStage[];
}

export const DemoScene: React.FC<DemoSceneProps> = ({ currentStage, scrollProgress, stages }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // We'll use Spline for the 3D scene rendering to simplify implementation
  // In a production environment, you could build this with Three.js directly
  
  // This would be the scene URL from Spline
  const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

  return (
    <div className="w-full h-full relative bg-gradient-to-b from-black via-[#0a1a2a] to-black">
      {/* Interactive 3D scene */}
      <div className="absolute inset-0">
        <SplineScene scene={sceneUrl} className="w-full h-full" />
      </div>
      
      {/* Animated UI elements that appear based on stage */}
      <div className="absolute inset-0 pointer-events-none">
        {currentStage === 1 && (
          <div className="absolute right-4 bottom-4 md:right-1/4 md:bottom-1/4 bg-black/70 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30 text-sm text-white max-w-xs">
            <div className="flex justify-between items-center mb-2">
              <span>Voice Recognition Active</span>
              <span className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                Recording
              </span>
            </div>
            <div className="font-mono text-xs text-blue-300 mb-2">
              "Patient reports headache that started three days ago..."
            </div>
            <div className="bg-blue-900/30 p-2 rounded border border-blue-700/30">
              <p className="text-xs text-blue-200">Generating SOAP Note...</p>
              <div className="h-1 w-full bg-blue-900/50 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        )}
        
        {currentStage === 2 && (
          <div className="absolute left-4 top-4 md:left-1/4 md:top-1/3 flex flex-col gap-2">
            {['Prescription', 'Lab Order', 'Referral', 'Visit Summary'].map((task, i) => (
              <div 
                key={task}
                className="bg-black/70 backdrop-blur-sm p-3 rounded-lg border border-teal-500/30 text-white flex items-center gap-3"
                style={{ 
                  opacity: i < 3 ? 1 : 0.7,
                  transform: `translateX(${i < 2 ? '0' : '-10px'})` 
                }}
              >
                <span className={`h-4 w-4 rounded-full ${i < 2 ? 'bg-green-500' : 'bg-blue-500 animate-pulse'} flex-shrink-0`}></span>
                <span>{task} {i < 2 ? 'Completed' : 'In Progress'}</span>
              </div>
            ))}
          </div>
        )}
        
        {currentStage === 4 && (
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-6 w-full max-w-4xl px-4">
            {[
              { metric: '95%', label: 'Reduced Documentation Time' },
              { metric: '40%', label: 'Increased Patient Throughput' },
              { metric: '2x', label: 'ROI Within Months' },
            ].map((stat, i) => (
              <div 
                key={i}
                className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30 text-center flex-1"
              >
                <div className="text-4xl md:text-5xl font-bold text-tealBlueBright mb-2">{stat.metric}</div>
                <div className="text-white text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
