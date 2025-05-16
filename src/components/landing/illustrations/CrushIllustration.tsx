import React, { useEffect, useState, memo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Brain, FileText, FileCog, Stethoscope, FileOutput, Upload } from 'lucide-react';

// Updated steps array to include all workflow steps
const steps = [
  { Icon: Mic, label: "Voice Input", delay: 0, color: "#046f90" },
  { Icon: Brain, label: "AI Processing", delay: 1, color: "#387E89" },
  { Icon: FileText, label: "Documentation", delay: 2, color: "#5192AE" },
  { Icon: FileOutput, label: "Patient Instructions", delay: 3, color: "#143151" },
  { Icon: FileCog, label: "EHR Integration", delay: 4, color: "#046f90" },
  { Icon: Upload, label: "Push Notes to EHR", delay: 5, color: "#f06292" }
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
  const [stepsContainerHeight, setStepsContainerHeight] = useState("auto");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Function to scroll the container to show the current step
  const scrollToCurrentStep = () => {
    if (!stepsRef.current || isScrollingRef.current) return;
    
    // Get all step indicator dots
    const stepIndicators = stepsRef.current.querySelectorAll(".step-indicator");
    if (!stepIndicators.length || !stepIndicators[currentStep]) return;
    
    // Scroll the current step into view
    isScrollingRef.current = true;
    
    // Calculate position to scroll to (center the current step)
    const container = stepsRef.current;
    const indicator = stepIndicators[currentStep] as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    const indicatorRect = indicator.getBoundingClientRect();
    
    // Calculate the desired position to make the indicator centered
    const scrollPosition = 
      (indicatorRect.left + indicatorRect.width / 2) - 
      (containerRect.left + containerRect.width / 2);
    
    // Scroll the container
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: container.scrollLeft + scrollPosition,
        behavior: 'smooth'
      });
    }
    
    // Reset scrolling flag after animation completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  useEffect(() => {
    // Set loaded state to prevent initial animation issues
    setIsLoaded(true);
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set new interval for cycling through steps
    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        // Ensure we cycle through all steps (0 to 5)
        return (prev + 1) % steps.length;
      });
    }, 3000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // When current step changes, scroll to make it visible
  useEffect(() => {
    scrollToCurrentStep();
  }, [currentStep]);
  
  // Update container height for responsive layout
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // Adjust container height based on width for responsive design
        setStepsContainerHeight(containerWidth < 500 ? "60px" : "auto");
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
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
      ref={containerRef}
      className="relative w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden"
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
          className="flex flex-col items-center gap-2 bg-white/90 p-4 rounded-lg shadow-lg z-10 min-w-[140px]"
          style={{ 
            willChange: 'transform, opacity',
            boxShadow: `0 8px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(${currentStep === 0 ? '4,111,144,0.1' : 
                       currentStep === 1 ? '56,126,137,0.1' : 
                       currentStep === 2 ? '81,146,174,0.1' : 
                       currentStep === 3 ? '20,49,81,0.1' : 
                       currentStep === 4 ? '4,111,144,0.1' : '240,98,146,0.1'})`,
            borderTop: `3px solid ${steps[currentStep].color}`
          }}
        >
          <StepIcon Icon={steps[currentStep].Icon} isActive={true} color={steps[currentStep].color} />
          <p className="text-sm font-medium text-center" style={{ color: steps[currentStep].color }}>
            {steps[currentStep].label}
          </p>
          
          {/* Voice wave animation for the Mic/Voice Input step */}
          {currentStep === 0 && <VoiceWaveAnimation />}
          
          {/* Step content based on current step */}
          <div className="mt-1 w-full">
            {currentStep === 0 && (
              <div className="text-xs text-center text-gray-500">
                Recording patient conversation...
              </div>
            )}
            {currentStep === 1 && (
              <div className="flex justify-center">
                <motion.div 
                  className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden"
                  style={{ padding: 0 }}
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
                <div className="text-xs text-center text-gray-500">
                  Generating patient instructions...
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div className="flex justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-t-transparent rounded-full"
                  style={{ borderColor: steps[4].color }}
                />
              </div>
            )}
            {currentStep === 5 && (
              <div className="flex justify-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: steps[5].color }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Step indicator dots - now scrollable */}
          <div 
            ref={stepsRef}
            className="flex gap-1.5 mt-2 overflow-x-auto pb-1 scroll-smooth no-scrollbar"
            style={{ 
              height: stepsContainerHeight,
              whiteSpace: 'nowrap',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`rounded-full transition-all duration-300 ${currentStep === idx ? 'w-4' : 'w-1.5'} h-1.5 step-indicator`}
                style={{ backgroundColor: currentStep === idx ? steps[idx].color : '#e5e7eb', flexShrink: 0 }}
                onClick={() => setCurrentStep(idx)}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Add custom CSS for hiding scrollbars but keeping functionality */}
      <style>
        {`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        `}
      </style>
    </div>
  );
});

CrushIllustration.displayName = 'CrushIllustration';

export default CrushIllustration;
