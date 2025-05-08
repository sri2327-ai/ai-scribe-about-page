
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { DemoScene } from './DemoScene';
import { DemoStageContent } from './DemoStageContent';
import { ProgressIndicator } from './ProgressIndicator';
import { useIsMobile } from '@/hooks/use-mobile';

export interface DemoStage {
  id: string;
  title: string;
  description: string;
  highlights?: string[];
  scenePosition: {
    desktop: { x: number; y: number; z: number };
    mobile: { x: number; y: number; z: number };
  };
}

export const S10Demo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState(0);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stages: DemoStage[] = [
    {
      id: "patient-engagement",
      title: "Patient Engagement Reimagined",
      description: "Meet your AI-powered front desk. Patients book appointments, describe symptoms, and receive reminders—all via intelligent virtual agents that operate 24/7 in multiple languages.",
      scenePosition: {
        desktop: { x: 0, y: 2, z: 7 },
        mobile: { x: 0, y: 2, z: 10 }
      }
    },
    {
      id: "ai-scribe",
      title: "Context-Aware AI Medical Scribe",
      description: "S10.AI listens during consultations, captures context in real time, and generates structured clinical notes—instantly tailored to your preferred template and synced with your EHR.",
      highlights: [
        "Pulls in prior visit data",
        "Captures SOAP or custom template",
        "Fully HIPAA compliant",
        "Pushes to your chosen EHR"
      ],
      scenePosition: {
        desktop: { x: 5, y: 0, z: 0 },
        mobile: { x: 2, y: 0, z: 5 }
      }
    },
    {
      id: "admin-tasks",
      title: "Automate Repetitive Administrative Tasks",
      description: "Reduce staff burden by streamlining prescription refills, referrals, lab orders, and documentation. AI handles the repetitive, so your team can focus on care.",
      highlights: [
        "Prescription Renewed",
        "Lab Order Placed",
        "Referral Sent",
        "Notes Completed",
        "Visit Summary Generated"
      ],
      scenePosition: {
        desktop: { x: -5, y: 0, z: -5 },
        mobile: { x: -2, y: 0, z: 0 }
      }
    },
    {
      id: "post-visit",
      title: "Post-Visit Patient Support",
      description: "S10.AI continues to support patients even after they leave. From follow-up reminders to report delivery, everything is handled—seamlessly.",
      scenePosition: {
        desktop: { x: 0, y: -2, z: -10 },
        mobile: { x: 0, y: -2, z: -5 }
      }
    },
    {
      id: "roi",
      title: "Return on Investment You Can See",
      description: "Experience significant improvements across your practice with measurable ROI.",
      highlights: [
        "95% reduction in documentation time",
        "40% increase in patient throughput",
        "70% fewer administrative bottlenecks",
        "2x ROI within months"
      ],
      scenePosition: {
        desktop: { x: 10, y: 2, z: -5 },
        mobile: { x: 5, y: 2, z: -2 }
      }
    }
  ];

  // Calculate current stage based on scroll position with debounce for smoother transitions
  useEffect(() => {
    let animationFrameId: number | null = null;
    let lastScrollValue = 0;
    
    const handleScroll = (value: number) => {
      // Only update if there's a significant change (reduces jitter)
      if (Math.abs(value - lastScrollValue) > 0.01 || value === 1 || value === 0) {
        lastScrollValue = value;
        
        // Calculate which stage we're in based on scroll progress
        const rawStageIndex = value * stages.length;
        const stageIndex = Math.min(
          Math.floor(rawStageIndex),
          stages.length - 1
        );
        
        // Update current stage if it's changed
        setCurrentStage(stageIndex);
        console.log(`Current stage updated to: ${stageIndex}, scroll progress: ${value.toFixed(2)}`);
      }
      
      animationFrameId = null;
    };
    
    const unsubscribe = scrollYProgress.onChange(value => {
      // Use requestAnimationFrame to throttle updates
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(() => handleScroll(value));
      }
    });
    
    return () => {
      unsubscribe();
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scrollYProgress, stages.length]);

  return (
    <div ref={containerRef} className="relative bg-white">
      {/* Fixed position 3D scene that changes based on scroll */}
      <div className="sticky top-0 h-screen w-full">
        <DemoScene 
          currentStage={currentStage}
          scrollProgress={scrollYProgress}
          stages={stages} 
        />
        
        {/* Content overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {stages.map((stage, index) => (
            <DemoStageContent 
              key={stage.id}
              stage={stage}
              isActive={currentStage === index}
              index={index}
            />
          ))}
        </div>
        
        {/* Progress indicator */}
        <ProgressIndicator 
          currentStage={currentStage} 
          totalStages={stages.length} 
        />
      </div>
      
      {/* Create scrollable height */}
      <div style={{ height: `${stages.length * 100}vh` }}></div>
      
      {/* Final CTA section */}
      <section className="bg-white min-h-screen flex flex-col items-center justify-center text-gray-800 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Ready to Automate Your Clinic?</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Start your journey with S10.AI—where every step of care is intelligent, efficient, and human-centered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-md">
              Request a Demo
            </button>
            <button className="border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
              Download ROI Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
