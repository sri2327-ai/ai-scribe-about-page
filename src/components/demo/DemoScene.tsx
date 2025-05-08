
import React from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './S10Demo';
import { useIsMobile } from '@/hooks/use-mobile';

interface DemoSceneProps {
  currentStage: number;
  scrollProgress: any;
  stages: DemoStage[];
}

export const DemoScene: React.FC<DemoSceneProps> = ({ currentStage, stages }) => {
  const isMobile = useIsMobile();
  
  // Array of illustration SVGs for each stage
  const stageIllustrations = [
    "/demo/patient-engagement.svg",
    "/demo/ai-scribe.svg",
    "/demo/admin-tasks.svg",
    "/demo/post-visit.svg",
    "/demo/roi-metrics.svg"
  ];

  return (
    <div className="w-full h-full relative bg-gradient-to-b from-black via-[#0a1a2a] to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,174,219,0.1),rgba(0,0,0,0))]" />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),rgba(0,0,0,0)_70%)]"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Dynamic grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent top-1/4"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent top-2/4"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent top-3/4"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent left-1/4"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent left-2/4"
          animate={{ y: ["100%", "-100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent left-3/4"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Central Illustration */}
      <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.id}
            className="w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: currentStage === index ? 1 : 0,
              scale: currentStage === index ? 1 : 0.8,
              y: currentStage === index ? 0 : 20,
            }}
            transition={{ 
              duration: 0.7, 
              ease: "easeOut",
            }}
            style={{ position: 'absolute', display: currentStage === index ? 'block' : 'none' }}
          >
            <div className="relative aspect-video bg-gradient-to-br from-blue-900/20 to-teal-900/20 rounded-xl border border-blue-500/20 overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <motion.img 
                src={stageIllustrations[index]} 
                alt={stage.title} 
                className="w-full h-full object-contain"
                initial={{ scale: 0.95, opacity: 0.5 }}
                animate={{ 
                  scale: currentStage === index ? 1 : 0.95,
                  opacity: currentStage === index ? 1 : 0.5,
                }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeOut",
                }}
                onError={(e) => {
                  // Fallback for missing illustrations
                  e.currentTarget.src = "/demo/placeholder.svg";
                }}
              />
              
              {/* Animated highlight ring */}
              <motion.div
                className="absolute inset-0 border-2 rounded-xl border-blue-400/0"
                animate={{
                  borderColor: ["rgba(59,130,246,0)", "rgba(59,130,246,0.3)", "rgba(59,130,246,0)"],
                  boxShadow: [
                    "0 0 0px rgba(59,130,246,0)",
                    "0 0 15px rgba(59,130,246,0.3)",
                    "0 0 0px rgba(59,130,246,0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Animated UI elements that appear based on stage */}
      {currentStage === 1 && (
        <motion.div 
          className="absolute right-4 bottom-4 md:right-1/4 md:bottom-1/4 bg-black/70 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30 text-sm text-white max-w-xs z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span>Voice Recognition Active</span>
            <span className="flex items-center">
              <motion.span 
                className="h-2 w-2 rounded-full bg-green-500 mr-1"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}  
              />
              Recording
            </span>
          </div>
          <div className="font-mono text-xs text-blue-300 mb-2">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              style={{ display: "inline-block", whiteSpace: "nowrap", overflow: "hidden" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              "Patient reports headache that started three days ago..."
            </motion.span>
          </div>
          <div className="bg-blue-900/30 p-2 rounded border border-blue-700/30">
            <p className="text-xs text-blue-200">Generating SOAP Note...</p>
            <div className="h-1 w-full bg-blue-900/50 rounded-full mt-1 overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }} 
              />
            </div>
          </div>
        </motion.div>
      )}
      
      {currentStage === 2 && (
        <motion.div 
          className="absolute left-4 top-4 md:left-1/4 md:top-1/3 flex flex-col gap-2 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {['Prescription', 'Lab Order', 'Referral', 'Visit Summary'].map((task, i) => (
            <motion.div 
              key={task}
              className="bg-black/70 backdrop-blur-sm p-3 rounded-lg border border-teal-500/30 text-white flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                transition: { delay: 0.3 + (i * 0.15) } 
              }}
            >
              <motion.span 
                className={`h-4 w-4 rounded-full ${i < 2 ? 'bg-green-500' : 'bg-blue-500'} flex-shrink-0`}
                animate={i >= 2 ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                } : {}}
                transition={i >= 2 ? {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror"
                } : {}}
              />
              <span>{task} {i < 2 ? 'Completed' : 'In Progress'}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
      
      {currentStage === 4 && (
        <motion.div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-6 w-full max-w-4xl px-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            { metric: '95%', label: 'Reduced Documentation Time' },
            { metric: '40%', label: 'Increased Patient Throughput' },
            { metric: '2x', label: 'ROI Within Months' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30 text-center flex-1"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + (i * 0.2), duration: 0.5 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (i * 0.2), duration: 0.6, type: "spring" }}
              >
                {stat.metric}
              </motion.div>
              <div className="text-white text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
