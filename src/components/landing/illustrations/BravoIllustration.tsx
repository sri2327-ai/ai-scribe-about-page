
import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Calendar, Bell, ClipboardCheck, MessageCircle } from 'lucide-react';

const steps = [
  { Icon: MessageSquare, label: "AI Chat & Calling", delay: 0 },
  { Icon: Calendar, label: "Smart Scheduling", delay: 1 },
  { Icon: Bell, label: "Automated Follow-ups", delay: 2 },
  { Icon: ClipboardCheck, label: "Pre-visit Intake", delay: 3 },
  { Icon: MessageCircle, label: "Patient Feedback", delay: 4 }
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

const BravoIllustration = memo(() => {
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
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2 bg-white p-3 rounded-lg shadow-md z-10 min-w-[120px]"
          style={{ contain: 'content', willChange: 'transform, opacity' }}
        >
          <StepIcon Icon={steps[currentStep].Icon} isActive={true} />
          <p className="text-xs font-medium text-[#143151] text-center">{steps[currentStep].label}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

BravoIllustration.displayName = 'BravoIllustration';

export default BravoIllustration;
