
import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cog, Zap, Brain, Settings, Workflow, Bot } from 'lucide-react';

const steps = [
  { Icon: Brain, label: "AI Analysis", delay: 0, color: "#8B5CF6" },
  { Icon: Settings, label: "Custom Config", delay: 1, color: "#06B6D4" },
  { Icon: Workflow, label: "Workflow Design", delay: 2, color: "#10B981" },
  { Icon: Bot, label: "Agent Deployment", delay: 3, color: "#F59E0B" },
  { Icon: Zap, label: "Smart Automation", delay: 4, color: "#EF4444" }
];

// Memoize icon components to prevent recreation
const StepIcon = memo(({ Icon, isActive, color }: { Icon: React.ComponentType<any>; isActive: boolean; color: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-2 rounded-full"
    style={{ 
      background: `linear-gradient(135deg, ${color}, ${color}99)`,
      transform: isActive ? 'scale(1)' : 'scale(0.9)', 
      opacity: isActive ? 1 : 0.7,
      transition: 'all 0.3s ease',
      boxShadow: isActive ? `0 4px 12px ${color}40` : 'none'
    }}
  >
    <Icon size={24} color="white" strokeWidth={1.5} />
  </motion.div>
));

StepIcon.displayName = 'StepIcon';

// Rotating gear animation for the main centerpiece
const GearAnimation = memo(() => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Cog className="w-8 h-8 text-white" />
      </motion.div>
      
      {/* Orbiting elements */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute w-3 h-3 rounded-full bg-yellow-400"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5
          }}
          style={{
            transformOrigin: `${25 + index * 5}px center`,
          }}
        />
      ))}
    </div>
  );
});

GearAnimation.displayName = 'GearAnimation';

const CustomAIIllustration = memo(() => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isClient || !isLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => {
      clearInterval(interval);
    };
  }, [isClient, isLoaded]);

  if (!isLoaded || !isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden"
      style={{ contain: 'content' }}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="absolute w-32 h-32 rounded-full bg-purple-400 blur-3xl"></div>
        <div className="absolute w-24 h-24 rounded-full bg-blue-400 blur-3xl -translate-x-16 translate-y-8"></div>
        <div className="absolute w-24 h-24 rounded-full bg-cyan-400 blur-3xl translate-x-12 -translate-y-6"></div>
      </div>

      {/* Central gear animation */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <GearAnimation />
      </div>

      {/* Connecting lines */}
      <svg 
        className="absolute w-48 h-2 top-1/2 -translate-y-1/2"
        style={{ transform: 'translateZ(0)' }}
      >
        <defs>
          <linearGradient id="custom-ai-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="25%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="75%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 5,1 L 180,1"
          stroke="url(#custom-ai-gradient)"
          strokeWidth="2"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      {/* Use AnimatePresence for smooth transitions between items */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStep}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2 bg-white/95 p-4 rounded-2xl shadow-xl z-10 min-w-[200px] backdrop-blur-sm border"
          style={{ 
            willChange: 'transform, opacity',
            boxShadow: `0 12px 32px rgba(0,0,0,0.15), 0 0 0 1px ${steps[currentStep].color}20`,
            borderTop: `3px solid ${steps[currentStep].color}`
          }}
        >
          <StepIcon Icon={steps[currentStep].Icon} isActive={true} color={steps[currentStep].color} />
          <p className="text-sm font-semibold text-center" style={{ color: steps[currentStep].color }}>
            {steps[currentStep].label}
          </p>
          
          {/* Step-specific content */}
          <div className="mt-2 w-full">
            {currentStep === 0 && (
              <div className="text-xs text-center text-gray-600 font-medium">
                Analyzing your workflow...
              </div>
            )}
            {currentStep === 1 && (
              <div className="flex justify-center space-x-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-cyan-500"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            )}
            {currentStep === 2 && (
              <div className="flex justify-center">
                <motion.div 
                  className="h-1.5 w-32 bg-gray-200 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full rounded-full bg-green-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="flex justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-t-transparent border-amber-500 rounded-full"
                />
              </div>
            )}
            {currentStep === 4 && (
              <div className="flex justify-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-red-500"
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      opacity: [0.5, 1, 0.5],
                      y: [0, -4, 0]
                    }}
                    transition={{ 
                      duration: 0.8, 
                      repeat: Infinity, 
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Progress indicator */}
          <div className="flex gap-1 mt-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: currentStep === idx ? steps[idx].color : '#e5e7eb'
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

CustomAIIllustration.displayName = 'CustomAIIllustration';

export default CustomAIIllustration;
