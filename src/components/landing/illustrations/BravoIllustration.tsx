
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Bell, ClipboardCheck, MessageCircle } from 'lucide-react';

const steps = [
  { Icon: MessageSquare, label: "AI Chat & Calling", delay: 0 },
  { Icon: Calendar, label: "Smart Scheduling", delay: 1 },
  { Icon: Bell, label: "Automated Follow-ups", delay: 2 },
  { Icon: ClipboardCheck, label: "Pre-visit Intake", delay: 3 },
  { Icon: MessageCircle, label: "Patient Feedback", delay: 4 }
];

const BravoIllustration = () => {
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
    return <div className="w-full h-full flex items-center justify-center">
      <div className="w-4 h-4 border-2 border-t-transparent border-[#387E89] rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
      {/* Expanded animation path */}
      <svg className="absolute w-32 h-2">
        <motion.path
          d="M 5,1 L 120,1"
          stroke="#387E89"
          strokeWidth="2"
          strokeDasharray="3,3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      <motion.div 
        key={currentStep}
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-2 bg-white p-3 rounded-lg shadow-md z-10 min-w-[120px]"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-2 rounded-full"
          style={{ background: `linear-gradient(135deg, #143151, #387E89)` }}
        >
          {React.createElement(steps[currentStep].Icon, {
            size: 24,
            color: "white",
            strokeWidth: 1.5
          })}
        </motion.div>
        <p className="text-xs font-medium text-[#143151] text-center">{steps[currentStep].label}</p>
      </motion.div>
    </div>
  );
};

export default BravoIllustration;
