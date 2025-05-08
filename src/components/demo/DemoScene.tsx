
import React, { useEffect, useState, useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { DemoStage } from './S10Demo';
import {
  Settings,
  CalendarDays,
  ClipboardList,
  Mic,
  Stethoscope,
  Server
} from 'lucide-react';

interface DemoSceneProps {
  currentStage: number;
  scrollProgress: any;
  stages: DemoStage[];
}

export const DemoScene: React.FC<DemoSceneProps> = ({ 
  currentStage, 
  scrollProgress,
  stages 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  // Track which illustration is active
  const [activeIllustration, setActiveIllustration] = useState("patient-engagement");
  
  // Update active illustration when current stage changes
  useEffect(() => {
    if (stages && stages[currentStage]) {
      setActiveIllustration(stages[currentStage].id);
      console.log(`Active illustration: ${stages[currentStage].id}`);
    }
  }, [currentStage, stages]);
  
  // Mark component as loaded after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      console.log("DemoScene component loaded");
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-white">
      {/* 3D-like background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),rgba(255,255,255,0)_70%)]" />
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
      </div>
      
      {/* Scene decorations */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute left-[5%] top-[10%] w-20 h-20 rounded-full bg-blue-100/20" 
          style={{ filter: "blur(40px)" }} />
        <div className="absolute right-[10%] bottom-[15%] w-32 h-32 rounded-full bg-green-100/20" 
          style={{ filter: "blur(50px)" }} />
        <div className="absolute left-[20%] bottom-[10%] w-24 h-24 rounded-full bg-purple-100/20" 
          style={{ filter: "blur(40px)" }} />
      </motion.div>
      
      {/* Patient engagement illustration */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${activeIllustration === 'patient-engagement' ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src="/demo/patient-engagement.svg" 
          alt="Patient Engagement Illustration" 
          className="w-full max-w-3xl"
        />
      </div>
      
      {/* AI Medical Scribe illustration */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${activeIllustration === 'ai-scribe' ? 'opacity-100 z-10' : 'opacity-0'}`}>
        <img 
          src="/demo/ai-medical-scribe.svg" 
          alt="AI Medical Scribe Illustration" 
          className="w-full max-w-3xl"
          onLoad={() => console.log("AI Scribe illustration loaded")}
          onError={(e) => console.error("Error loading AI Scribe illustration:", e)}
        />
      </div>
      
      {/* Admin tasks illustration */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${activeIllustration === 'admin-tasks' ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src="/demo/admin-tasks.svg" 
          alt="Admin Tasks Illustration" 
          className="w-full max-w-3xl"
        />
      </div>
      
      {/* Post-visit illustration */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${activeIllustration === 'post-visit' ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src="/demo/post-visit.svg" 
          alt="Post Visit Illustration" 
          className="w-full max-w-3xl"
        />
      </div>
      
      {/* ROI illustration */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${activeIllustration === 'roi' ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src="/demo/roi-metrics.svg" 
          alt="ROI Metrics Illustration" 
          className="w-full max-w-3xl"
        />
      </div>
    </div>
  );
};
