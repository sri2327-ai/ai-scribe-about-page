
import React, { useEffect, useState, memo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Brain, FileText, FileCog, Stethoscope } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  return (
    <div className="flex items-center justify-center h-8 mt-2 mb-2 space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full"
          style={{ backgroundColor: steps[0].color }}
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
  const [lastInteractionTime, setLastInteractionTime] = useState<number>(Date.now());
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  // Function to handle step clicks for interactive usage
  const handleStepClick = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setCurrentStep(index);
    setLastInteractionTime(Date.now());
  }, []);
  
  // Function to restart auto-play if user has been inactive
  const checkInactivity = useCallback(() => {
    const now = Date.now();
    const inactiveTime = now - lastInteractionTime;
    
    // Resume auto-play after 10 seconds of inactivity
    if (inactiveTime > 10000 && !isAutoPlaying) {
      setIsAutoPlaying(true);
    }
  }, [lastInteractionTime, isAutoPlaying]);

  // Set up auto-play cycle and inactivity checker
  useEffect(() => {
    setIsLoaded(true);
    
    // Clear any existing interval
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
    
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % steps.length);
      }, 3000);
    }
    
    // Check for inactivity every 2 seconds
    const inactivityInterval = setInterval(checkInactivity, 2000);
    
    return () => {
      if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
      clearInterval(inactivityInterval);
    };
  }, [isAutoPlaying, checkInactivity]);

  // Track user interactions
  useEffect(() => {
    const handleUserInteraction = () => {
      setLastInteractionTime(Date.now());
    };
    
    window.addEventListener('mousemove', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);
    window.addEventListener('click', handleUserInteraction);
    
    return () => {
      window.removeEventListener('mousemove', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
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
  
  const cardWidth = isMobile ? 'min-w-[120px]' : 'min-w-[140px]';
  const cardPadding = isMobile ? 'p-3' : 'p-4';
  const iconSize = isMobile ? 'w-10 h-10' : 'w-12 h-12';

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center p-3 sm:p-4 overflow-hidden"
      style={{ contain: 'content' }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-pink-400 blur-3xl -translate-x-16 translate-y-8 sm:-translate-x-20 sm:translate-y-10"></div>
        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-teal-400 blur-3xl translate-x-12 -translate-y-10 sm:translate-x-16 sm:-translate-y-12"></div>
      </div>
      
      {/* Path for animation - only the outer line, optimized for mobile */}
      <svg 
        className="absolute w-32 sm:w-40 h-2 top-1/2 -translate-y-1/2"
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
          d="M 5,1 L 155,1"
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
          className={`flex flex-col items-center gap-2 bg-white/90 ${cardPadding} rounded-lg shadow-lg z-10 ${cardWidth} max-w-[90%]`}
          style={{ 
            willChange: 'transform, opacity',
            boxShadow: `0 8px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(${currentStep === 0 ? '4,111,144,0.1' : 
                       currentStep === 1 ? '56,126,137,0.1' : 
                       currentStep === 2 ? '81,146,174,0.1' : 
                       currentStep === 3 ? '20,49,81,0.1' : '240,98,146,0.1'})`,
            borderTop: `3px solid ${steps[currentStep].color}`
          }}
        >
          <StepIcon Icon={steps[currentStep].Icon} isActive={true} color={steps[currentStep].color} />
          <p className="text-sm font-medium text-center" style={{ color: steps[currentStep].color }}>
            {steps[currentStep].label}
          </p>
          
          {/* Voice wave animation for the Mic/Voice Input step */}
          {currentStep === 0 && <VoiceWaveAnimation />}
          
          {/* Step content based on current step - simplified for mobile */}
          <div className="mt-1 w-full">
            {currentStep === 0 && (
              <div className="text-xs text-center text-gray-500">
                Recording patient conversation...
              </div>
            )}
            {currentStep === 1 && (
              <div className="flex justify-center">
                <motion.div 
                  className="h-2 w-full max-w-[90%] bg-gray-200 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full rounded-full" 
                    style={{ backgroundColor: steps[1].color }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-full h-3 flex space-x-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-2 rounded-sm flex-1" style={{ backgroundColor: `${steps[2].color}${50 + i*10}` }}></div>
                  ))}
                </motion.div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="flex justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-t-transparent rounded-full"
                  style={{ borderColor: steps[3].color }}
                />
              </div>
            )}
            {currentStep === 4 && (
              <div className="flex justify-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: steps[4].color }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Interactive Step indicators - improved for mobile touch */}
          <div className="flex gap-2 mt-2">
            {steps.map((step, idx) => (
              <motion.button 
                key={idx} 
                className={`rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 h-2.5`}
                style={{ 
                  backgroundColor: currentStep === idx ? steps[idx].color : '#e5e7eb',
                  width: currentStep === idx ? '1rem' : '0.5rem',
                  boxShadow: currentStep === idx ? `0 0 8px ${steps[idx].color}80` : 'none',
                  focusRing: steps[idx].color
                }}
                onClick={() => handleStepClick(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                role="button"
                aria-label={`View ${step.label} step`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleStepClick(idx);
                  }
                }}
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
