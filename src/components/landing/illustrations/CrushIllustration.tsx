
import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Brain, FileText, FileCog, Stethoscope } from 'lucide-react';

const steps = [
  { Icon: Mic, label: "Voice Input", delay: 0 },
  { Icon: Brain, label: "AI Processing", delay: 1 },
  { Icon: FileText, label: "Documentation", delay: 2 },
  { Icon: FileCog, label: "EHR Integration", delay: 3 },
  { Icon: Stethoscope, label: "Orders & Prescriptions", delay: 4 }
];

// Memoize icon components to prevent recreation
const StepIcon = memo(({ Icon, isActive }: { Icon: React.ComponentType<any>; isActive: boolean }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-2 rounded-full"
    style={{ 
      background: `linear-gradient(135deg, #143151, #387E89)`,
      transform: isActive ? 'scale(1)' : 'scale(0.9)', 
      opacity: isActive ? 1 : 0.7,
      transition: 'all 0.3s ease'
    }}
  >
    <Icon size={24} color="white" strokeWidth={1.5} />
  </motion.div>
));

StepIcon.displayName = 'StepIcon';

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
      {/* Path for animation */}
      <svg 
        className="absolute w-48 h-2 top-1/2 -translate-y-1/2"
        style={{ transform: 'translateZ(0)' }} // Hardware acceleration
      >
        <motion.path
          d="M 5,1 L 180,1"
          stroke="#387E89"
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
          className="flex flex-col items-center gap-2 bg-white p-3 rounded-lg shadow-md z-10 min-w-[120px]"
          style={{ willChange: 'transform, opacity' }}
        >
          <StepIcon Icon={steps[currentStep].Icon} isActive={true} />
          <p className="text-xs font-medium text-[#143151] text-center">{steps[currentStep].label}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

CrushIllustration.displayName = 'CrushIllustration';

export default CrushIllustration;
