
import React, { useEffect, useState, memo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Brain, FileText, FileCog, Stethoscope } from 'lucide-react';

const steps = [
  { Icon: Mic, label: "Voice Input", delay: 0, color: "#046f90" },
  { Icon: Brain, label: "AI Processing", delay: 1, color: "#387E89" },
  { Icon: FileText, label: "Documentation", delay: 2, color: "#5192AE" },
  { Icon: FileCog, label: "EHR Integration", delay: 3, color: "#143151" },
  { Icon: Stethoscope, label: "Orders & Prescriptions", delay: 4, color: "#f06292" }
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

// Voice wave animation component for the Mic step
const VoiceWaveAnimation = memo(() => {
  const waveRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="flex items-center justify-center h-6 mt-1 mb-2 space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-blue-400 rounded-full"
          animate={{
            height: [6, 12 + i * 2, 6],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
});

VoiceWaveAnimation.displayName = 'VoiceWaveAnimation';

const CrushIllustration = memo(() => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state to prevent initial animation issues
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Don't render until component is fully mounted
  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-t-transparent border-[#387E89] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden"
      style={{ contain: 'content' }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <div className="absolute w-32 h-32 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute w-24 h-24 rounded-full bg-pink-400 blur-3xl -translate-x-20 translate-y-10"></div>
        <div className="absolute w-24 h-24 rounded-full bg-teal-400 blur-3xl translate-x-16 -translate-y-12"></div>
      </div>
      
      {/* Path for animation - only the outer line */}
      <svg 
        className="absolute w-48 h-2 top-1/2 -translate-y-1/2"
        style={{ transform: 'translateZ(0)' }} // Hardware acceleration
      >
        <defs>
          <linearGradient id="crush-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#046f90" />
            <stop offset="50%" stopColor="#387E89" />
            <stop offset="100%" stopColor="#f06292" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 5,1 L 180,1"
          stroke="url(#crush-gradient)"
          strokeWidth="2"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      {/* Use AnimatePresence for smooth transitions between items */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStep}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2 bg-white p-4 rounded-lg shadow-md z-10 min-w-[140px]"
          style={{ 
            willChange: 'transform, opacity',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            border: '1px solid rgba(0,0,0,0.08)'
          }}
        >
          <StepIcon Icon={steps[currentStep].Icon} isActive={true} color={steps[currentStep].color} />
          <p className="text-sm font-medium text-center" style={{ color: steps[currentStep].color }}>
            {steps[currentStep].label}
          </p>
          
          {/* Voice wave animation for the Mic/Voice Input step */}
          {currentStep === 0 && <VoiceWaveAnimation />}
          
          {/* Step indicator dots */}
          <div className="flex gap-1.5 mt-1.5">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`rounded-full transition-all duration-300 ${currentStep === idx ? 'w-4' : 'w-1.5'} h-1.5`}
                style={{ backgroundColor: currentStep === idx ? steps[idx].color : '#e5e7eb' }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

CrushIllustration.displayName = 'CrushIllustration';

export default CrushIllustration;
