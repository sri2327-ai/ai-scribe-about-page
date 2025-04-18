
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

export const CrushIllustration = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white/80 backdrop-blur-sm p-8">
      <svg className="absolute w-full h-[2px] top-1/2 -translate-y-1/2">
        <motion.path
          d="M 100,1 L 600,1"
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
        className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl shadow-lg z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-4 rounded-full"
          style={{ background: `linear-gradient(135deg, #143151, #387E89)` }}
        >
          {React.createElement(steps[currentStep].Icon, {
            size: 32,
            color: "white",
            strokeWidth: 1.5
          })}
        </motion.div>
        <p className="text-lg font-medium text-[#143151]">{steps[currentStep].label}</p>
      </motion.div>
    </div>
  );
};
