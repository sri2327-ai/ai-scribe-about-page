
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

  // Manually change stage when clicked
  const handleStageClick = (index: number) => {
    setCurrentStage(index);
  };

  // Calculate current stage based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      // Calculate which stage we're in based on scroll progress
      const stageIndex = Math.min(
        Math.floor(value * stages.length),
        stages.length - 1
      );
      setCurrentStage(stageIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, stages.length]);

  return (
    <div ref={containerRef} className="relative bg-white">
      {/* Fixed position content that changes based on scroll */}
      <div className="sticky top-0 h-screen w-full">
        {/* 3D scene that appears under the content */}
        <div className="absolute inset-0 z-10">
          <DemoScene 
            currentStage={currentStage}
            scrollProgress={scrollYProgress}
            stages={stages} 
            onStageClick={handleStageClick}
          />
        </div>
        
        {/* Content overlay - Moved to appear at the bottom */}
        <div className="absolute bottom-12 right-8 left-8 z-20 pointer-events-none">
          <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            {stages.map((stage, index) => (
              <DemoStageContent 
                key={stage.id}
                stage={stage}
                isActive={currentStage === index}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Progress indicator */}
        <ProgressIndicator 
          currentStage={currentStage} 
          totalStages={stages.length} 
          onStageClick={handleStageClick}
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
