
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

export const BravoIllustration = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white/80 backdrop-blur-sm p-8">
      <svg className="absolute w-full h-32">
        <motion.path
          d="M 100,50 C 200,50 200,100 300,100 S 400,50 500,50"
          stroke="#387E89"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      <motion.div 
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
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
