
import React, { useEffect, useState, memo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Brain, FileText, FileCog, Stethoscope } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const steps = [
  { Icon: Mic, label: "Start Encounter", description: "Recording patient conversation...", delay: 0, color: "#046f90" },
  { Icon: Brain, label: "Previous Visit Context", description: "Reviewing patient history for context", delay: 1, color: "#387E89" },
  { Icon: FileText, label: "Generate Clinical Notes", description: "Creating comprehensive documentation", delay: 2, color: "#5192AE" },
  { Icon: FileCog, label: "Create Referral Letter", description: "Preparing specialist referrals...", delay: 3, color: "#143151" },
  { Icon: Stethoscope, label: "Medical Information", description: "Visit Date: March 12, 2025\nSymptoms: Recurring headaches", delay: 4, color: "#f06292" }
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
    <div className="flex items-center justify-center h-6 mt-1 mb-1 space-x-1">
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
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  // Function to handle step clicks for interactive usage
  const handleStepClick = useCallback((index: number) => {
    setCurrentStep(index);
    setLastInteractionTime(Date.now());
  }, []);
  
  // Set up auto-play cycle
  useEffect(() => {
    setIsLoaded(true);
    
    // Clear any existing interval
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
    
    // Start auto-play
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 3000);
    
    return () => {
      if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
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
      className="relative w-full h-full flex items-center justify-center p-3 overflow-hidden"
      style={{ 
        contain: 'content',
        position: 'relative'
      }}
    >
      {/* Clean background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-xl"></div>
      
      <div className="relative z-10 flex flex-col items-start w-full max-w-xs mx-auto">
        {/* Current active step with icon */}
        <div className="flex items-start w-full mb-3">
          <div className="mr-4 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              {React.createElement(steps[currentStep].Icon, { 
                size: 24, 
                color: steps[currentStep].color,
                className: "opacity-80" 
              })}
            </div>
          </div>
          
          <div className="flex-1">
            <h4 className="text-lg font-medium text-gray-700" style={{ color: steps[currentStep].color }}>
              {steps[currentStep].label}
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              {steps[currentStep].description}
            </p>
            
            {/* Step-specific content */}
            {currentStep === 0 && <VoiceWaveAnimation />}
            
            {currentStep === 1 && (
              <div className="mt-2 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full" 
                  style={{ backgroundColor: steps[1].color }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                />
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="mt-2 space-y-1.5">
                <div className="h-1 w-full bg-gray-100 rounded-full">
                  <motion.div 
                    className="h-full rounded-full" 
                    style={{ backgroundColor: `${steps[2].color}` }}
                    initial={{ width: "0%" }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
                <div className="h-1 w-full bg-gray-100 rounded-full">
                  <motion.div 
                    className="h-full rounded-full" 
                    style={{ backgroundColor: `${steps[2].color}` }}
                    initial={{ width: "0%" }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  />
                </div>
                <div className="h-1 w-full bg-gray-100 rounded-full">
                  <motion.div 
                    className="h-full rounded-full" 
                    style={{ backgroundColor: `${steps[2].color}` }}
                    initial={{ width: "0%" }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                  />
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <motion.div 
                className="mt-2 text-xs text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Processing referral documentation...
              </motion.div>
            )}
            
            {currentStep === 4 && (
              <motion.div 
                className="mt-2 text-xs text-gray-600 whitespace-pre-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {steps[4].description}
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Progress indicator dots */}
        <div className="flex space-x-2 mt-2 w-full justify-center">
          {steps.map((_, idx) => (
            <button 
              key={idx} 
              className={`rounded-full h-2 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2`}
              style={{ 
                backgroundColor: currentStep === idx ? steps[idx].color : '#e5e7eb',
                width: currentStep === idx ? '1rem' : '0.5rem',
                boxShadow: currentStep === idx ? `0 0 8px ${steps[idx].color}80` : 'none'
              }}
              onClick={() => handleStepClick(idx)}
              aria-label={`View ${steps[idx].label} step`}
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

        {/* Auto label */}
        <div className="mt-4 w-full flex justify-center">
          <div className="px-4 py-1 rounded-full bg-blue-100 text-blue-500 text-xs font-medium flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></div>
            Auto
          </div>
        </div>
      </div>
    </div>
  );
});

CrushIllustration.displayName = 'CrushIllustration';

export default CrushIllustration;
