
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Brain, FileText, FileCog, Stethoscope } from 'lucide-react';

const steps = [
  { Icon: Mic, label: "Voice Input", delay: 0 },
  { Icon: Brain, label: "AI Processing", delay: 1 },
  { Icon: FileText, label: "Documentation", delay: 2 },
  { Icon: FileCog, label: "EHR Integration", delay: 3 },
  { Icon: Stethoscope, label: "Orders & Prescriptions", delay: 4 }
];

const CrushIllustration = () => {
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
    return <div className="w-full h-full bg-gray-50 flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-t-transparent border-[#387E89] rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white/80 backdrop-blur-sm overflow-hidden">
      <svg className="absolute w-4/5 h-[2px] top-1/2 -translate-y-1/2">
        <motion.path
          d="M 10,1 L 140,1"
          stroke="#387E89"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      <motion.div 
        key={currentStep}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-1 bg-white p-2 rounded-xl shadow-md z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-1.5 rounded-full"
          style={{ background: `linear-gradient(135deg, #143151, #387E89)` }}
        >
          {React.createElement(steps[currentStep].Icon, {
            size: 18,
            color: "white",
            strokeWidth: 1.5
          })}
        </motion.div>
        <p className="text-xs font-medium text-[#143151]">{steps[currentStep].label}</p>
      </motion.div>
    </div>
  );
};

export default CrushIllustration;
