
import React, { useEffect, useState, memo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Brain, FileText, FileCog, Stethoscope, FileOutput, Upload, ArrowLeft, ArrowRight } from 'lucide-react';

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
const StepIcon = memo(({ Icon, isActive, color, isMobile }: { Icon: React.ComponentType<any>; isActive: boolean; color: string; isMobile?: boolean }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`${isMobile ? 'p-2' : 'p-3'} rounded-full`}
    style={{ 
      background: `linear-gradient(135deg, ${color}, ${color}99)`,
      transform: isActive ? 'scale(1)' : 'scale(0.9)', 
      opacity: isActive ? 1 : 0.7,
      transition: 'all 0.3s ease',
      boxShadow: isActive ? `0 4px 12px ${color}40` : 'none'
    }}
  >
    <Icon size={isMobile ? 20 : 28} color="white" strokeWidth={1.5} />
  </motion.div>
));

StepIcon.displayName = 'StepIcon';

// Voice wave animation component for the Mic step
const VoiceWaveAnimation = memo(({ isMobile }: { isMobile?: boolean }) => {
  return (
    <div className={`flex items-center justify-center ${isMobile ? 'h-8 mt-2 mb-2' : 'h-10 mt-3 mb-3'} space-x-1`}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full"
          style={{ backgroundColor: steps[0].color }}
          animate={{
            height: [4, (isMobile ? 12 : 16) + i * (isMobile ? 2 : 3), 4],
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
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Navigate to previous step
  const handlePrevStep = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Navigate to next step
  const handleNextStep = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

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
      className={`relative w-full h-full flex flex-col items-center justify-center ${isMobile ? 'p-2 min-h-[300px]' : 'p-6 min-h-[500px]'} overflow-hidden`}
      style={{ contain: 'content', position: 'relative' }}
    >
      {/* Decorative background elements - better mobile sizing */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <div className={`absolute ${isMobile ? 'w-16 h-16' : 'w-40 h-40'} rounded-full bg-blue-400 blur-3xl`}></div>
        <div className={`absolute ${isMobile ? 'w-12 h-12' : 'w-32 h-32'} rounded-full bg-pink-400 blur-3xl ${isMobile ? '-translate-x-8 translate-y-4' : '-translate-x-24 translate-y-12'}`}></div>
        <div className={`absolute ${isMobile ? 'w-12 h-12' : 'w-32 h-32'} rounded-full bg-teal-400 blur-3xl ${isMobile ? 'translate-x-6 -translate-y-6' : 'translate-x-20 -translate-y-16'}`}></div>
      </div>
      
      {/* Path for animation - better mobile sizing */}
      <svg 
        className={`absolute ${isMobile ? 'w-32 h-3' : 'w-56 h-3'} top-1/2 -translate-y-1/2`}
        style={{ transform: 'translateZ(0)' }}
      >
        <defs>
          <linearGradient id="crush-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#046f90" />
            <stop offset="50%" stopColor="#387E89" />
            <stop offset="100%" stopColor="#f06292" />
          </linearGradient>
        </defs>
        <motion.path
          d={`M 8,1.5 L ${isMobile ? '120' : '210'},1.5`}
          stroke="url(#crush-gradient)"
          strokeWidth="3"
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col items-center gap-2 bg-white/95 ${isMobile ? 'p-3 rounded-lg mx-2' : 'p-6 rounded-2xl'} shadow-xl z-10 ${isMobile ? 'w-full max-w-[280px]' : 'min-w-[360px]'} backdrop-blur-sm`}
          style={{ 
            willChange: 'transform, opacity',
            boxShadow: `0 12px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(${currentStep === 0 ? '4,111,144,0.1' : 
                       currentStep === 1 ? '56,126,137,0.1' : 
                       currentStep === 2 ? '81,146,174,0.1' : 
                       currentStep === 3 ? '20,49,81,0.1' : 
                       currentStep === 4 ? '4,111,144,0.1' : '240,98,146,0.1'})`,
            borderTop: `4px solid ${steps[currentStep].color}`
          }}
        >
          <StepIcon Icon={steps[currentStep].Icon} isActive={true} color={steps[currentStep].color} isMobile={isMobile} />
          <p className={`${isMobile ? 'text-sm' : 'text-lg'} font-semibold text-center`} style={{ color: steps[currentStep].color }}>
            {steps[currentStep].label}
          </p>
          
          {/* Voice wave animation for the Mic/Voice Input step */}
          {currentStep === 0 && <VoiceWaveAnimation isMobile={isMobile} />}
          
          {/* Step content based on current step - better mobile sizing */}
          <div className="mt-1 w-full">
            {currentStep === 0 && (
              <div className={`${isMobile ? 'text-xs' : 'text-base'} text-center text-gray-600 font-medium`}>
                Recording patient conversation...
              </div>
            )}
            {currentStep === 1 && (
              <div className="flex justify-center">
                <motion.div 
                  className={`h-2 ${isMobile ? 'w-24' : 'w-40'} bg-gray-200 rounded-full overflow-hidden`}
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
                  className={`w-full ${isMobile ? 'h-2' : 'h-4'} flex space-x-1`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(isMobile ? 3 : 6)].map((_, i) => (
                    <div key={i} className="h-full rounded-sm flex-1" style={{ backgroundColor: `${steps[2].color}${60 + i*8}` }}></div>
                  ))}
                </motion.div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="flex justify-center">
                <div className={`${isMobile ? 'text-xs' : 'text-base'} text-center text-gray-600 font-medium`}>
                  Generating patient instructions...
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div className="flex justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className={`${isMobile ? 'w-4 h-4' : 'w-8 h-8'} border-2 border-t-transparent rounded-full`}
                  style={{ borderColor: steps[4].color }}
                />
              </div>
            )}
            {currentStep === 5 && (
              <div className="flex justify-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`${isMobile ? 'w-2 h-2' : 'w-3 h-3'} rounded-full`}
                    style={{ backgroundColor: steps[5].color }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Mobile-optimized navigation */}
          <div className={`${isMobile ? 'mt-3' : 'mt-6'} w-full`}>
            {/* Navigation arrows and dots */}
            <div className="flex justify-between items-center">
              {/* Previous button - larger touch target for mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrevStep}
                className={`flex justify-center items-center ${isMobile ? 'w-8 h-8' : 'w-12 h-12'} rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md`}
                aria-label="Previous step"
              >
                <ArrowLeft size={isMobile ? 16 : 20} />
              </motion.button>
              
              {/* Step indicator dots - better mobile layout */}
              <div className={`flex items-center ${isMobile ? 'gap-2' : 'gap-4'} bg-white/90 rounded-full ${isMobile ? 'px-3 py-2' : 'px-6 py-3'} shadow-lg border border-gray-100`}>
                {steps.map((step, idx) => (
                  <motion.button 
                    key={idx} 
                    className="flex flex-col items-center"
                    onClick={() => setCurrentStep(idx)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={step.label}
                    aria-label={`Go to step ${idx + 1}: ${step.label}`}
                    aria-current={currentStep === idx ? "step" : undefined}
                  >
                    <div 
                      className={`${isMobile ? 'w-2.5 h-2.5' : 'w-4 h-4'} rounded-full transition-all duration-300 relative ${isMobile ? 'mb-0.5' : 'mb-1.5'}`}
                      style={{ 
                        backgroundColor: currentStep === idx ? step.color : '#e5e7eb',
                        border: currentStep === idx ? `2px solid ${step.color}` : 'none',
                        boxShadow: currentStep === idx ? `0 0 0 2px white, 0 0 0 4px ${step.color}` : 'none'
                      }}
                    >
                      {currentStep === idx && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          initial={{ opacity: 0.6, scale: 1 }}
                          animate={{ opacity: 0, scale: 1.8 }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          style={{ backgroundColor: step.color }}
                        />
                      )}
                    </div>
                    {/* Step number - better mobile sizing */}
                    <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-600 font-semibold`}>{idx + 1}</span>
                  </motion.button>
                ))}
              </div>
              
              {/* Next button - larger touch target for mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNextStep}
                className={`flex justify-center items-center ${isMobile ? 'w-8 h-8' : 'w-12 h-12'} rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md`}
                aria-label="Next step"
              >
                <ArrowRight size={isMobile ? 16 : 20} />
              </motion.button>
            </div>
          </div>
          
          {/* Progress text indicator - better mobile sizing */}
          <div className={`${isMobile ? 'mt-2' : 'mt-3'} ${isMobile ? 'text-xs' : 'text-sm'} text-gray-500 font-medium text-center`}>
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].label}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

CrushIllustration.displayName = 'CrushIllustration';

export default CrushIllustration;
