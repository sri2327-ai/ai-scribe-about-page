
import React, { useEffect, useState, memo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Brain, FileText, FileCog, Stethoscope } from 'lucide-react';

const steps = [
  { Icon: Mic, label: "Voice Input", delay: 0, color: "#046f90", bgColor: "#FFDEE2" },
  { Icon: Brain, label: "AI Processing", delay: 1, color: "#387E89", bgColor: "#FDE1D3" },
  { Icon: FileText, label: "Documentation", delay: 2, color: "#5192AE", bgColor: "#FFF0F3" },
  { Icon: FileCog, label: "EHR Integration", delay: 3, color: "#143151", bgColor: "#FFE4E8" },
  { Icon: Stethoscope, label: "Orders & Prescriptions", delay: 4, color: "#f06292", bgColor: "#FFEBEF" }
];

// Memoize icon components to prevent recreation
const StepIcon = memo(({ Icon, isActive, color, bgColor }: { 
  Icon: React.ComponentType<any>; 
  isActive: boolean; 
  color: string;
  bgColor: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-2 rounded-lg"
    style={{ 
      background: isActive ? `linear-gradient(135deg, ${bgColor}, ${bgColor}99)` : bgColor,
      transform: isActive ? 'scale(1)' : 'scale(0.9)', 
      opacity: isActive ? 1 : 0.7,
      transition: 'all 0.3s ease',
      boxShadow: isActive ? `0 4px 12px ${color}30` : 'none'
    }}
  >
    <Icon size={24} color={color} strokeWidth={1.5} />
  </motion.div>
));

StepIcon.displayName = 'StepIcon';

// Voice wave animation component for the Mic step - now with more flat UI style
const VoiceWaveAnimation = memo(() => {
  return (
    <div className="flex items-center justify-center h-8 mt-2 mb-2 space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 rounded-full"
          style={{ backgroundColor: steps[0].color, opacity: 0.8 }}
          animate={{
            height: [6, 14 + i * 2, 6],
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
      {/* Decorative background elements - added soft pink gradients */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="absolute w-36 h-36 rounded-full bg-[#FFDEE2] blur-3xl"></div>
        <div className="absolute w-28 h-28 rounded-full bg-[#FDE1D3] blur-3xl -translate-x-20 translate-y-10"></div>
        <div className="absolute w-28 h-28 rounded-full bg-[#f06292]/20 blur-3xl translate-x-16 -translate-y-12"></div>
      </div>
      
      {/* Path for animation - enhanced with gradient */}
      <svg 
        className="absolute w-48 h-2 top-1/2 -translate-y-1/2"
        style={{ transform: 'translateZ(0)' }} // Hardware acceleration
      >
        <defs>
          <linearGradient id="crush-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFDEE2" />
            <stop offset="50%" stopColor="#FDE1D3" />
            <stop offset="100%" stopColor="#f06292" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 5,1 L 180,1"
          stroke="url(#crush-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
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
          className="flex flex-col items-center gap-2 bg-white/90 p-5 rounded-xl shadow-lg z-10 min-w-[160px]"
          style={{ 
            willChange: 'transform, opacity',
            boxShadow: `0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(${currentStep === 0 ? '255,222,226,0.4' : 
                       currentStep === 1 ? '253,225,211,0.4' : 
                       currentStep === 2 ? '255,240,243,0.4' : 
                       currentStep === 3 ? '255,228,232,0.4' : '255,235,239,0.4'})`,
            borderTop: `3px solid ${steps[currentStep].bgColor}`
          }}
        >
          <StepIcon 
            Icon={steps[currentStep].Icon} 
            isActive={true} 
            color={steps[currentStep].color}
            bgColor={steps[currentStep].bgColor} 
          />
          <p className="text-sm font-medium text-center" style={{ color: steps[currentStep].color }}>
            {steps[currentStep].label}
          </p>
          
          {/* Voice wave animation for the Mic/Voice Input step */}
          {currentStep === 0 && <VoiceWaveAnimation />}
          
          {/* Step content based on current step - enhanced with flat UI elements */}
          <div className="mt-1 w-full">
            {currentStep === 0 && (
              <div className="text-xs text-center text-gray-600 py-1 px-2 bg-[#FFDEE2]/20 rounded-md">
                Recording patient conversation...
              </div>
            )}
            {currentStep === 1 && (
              <div className="flex justify-center">
                <motion.div 
                  className="h-3 w-36 bg-gray-100 rounded-full overflow-hidden"
                  style={{ padding: 0 }}
                >
                  <motion.div
                    className="h-full rounded-full" 
                    style={{ background: `linear-gradient(90deg, ${steps[1].color}, ${steps[1].bgColor})` }}
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
                    <div 
                      key={i} 
                      className="h-2 rounded-md flex-1" 
                      style={{ 
                        backgroundColor: i % 2 === 0 ? steps[2].bgColor : `${steps[2].color}30`,
                        opacity: 0.5 + (i * 0.1)
                      }}
                    ></div>
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
                  style={{ 
                    borderColor: steps[3].color,
                    boxShadow: `0 0 10px ${steps[3].bgColor}`
                  }}
                />
              </div>
            )}
            {currentStep === 4 && (
              <div className="flex justify-center space-x-1 bg-[#FFEBEF]/30 py-1 px-3 rounded-md">
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
          
          {/* Step indicator dots - enhanced with branding colors */}
          <div className="flex gap-1.5 mt-3">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className={`rounded-full transition-all duration-300 ${currentStep === idx ? 'w-4' : 'w-1.5'} h-1.5`}
                style={{ 
                  backgroundColor: currentStep === idx ? steps[idx].color : '#e5e7eb',
                  boxShadow: currentStep === idx ? `0 0 5px ${steps[idx].color}50` : 'none'
                }}
                whileHover={{ scale: 1.2 }}
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
