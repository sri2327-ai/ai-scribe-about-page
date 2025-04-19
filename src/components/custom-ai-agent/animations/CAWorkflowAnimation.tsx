
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { GradientTracing } from "@/components/ui/gradient-tracing";
import { 
  Cpu, 
  RefreshCw, 
  Calendar, 
  FileText, 
  ClipboardCheck, 
  Mail 
} from "lucide-react";

// Improved workflow steps with more detailed information and proper icons
const workflowSteps = [
  {
    id: 1,
    title: "CRM to EHR Data Transfer",
    description: "No more copy-pasting. S10.AI syncs patient details directly into your EHR with perfect accuracy.",
    icon: RefreshCw,
    illustration: (
      <div className="w-full h-40 relative flex items-center justify-center">
        <div className="absolute w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center left-12 shadow-md">
          <div className="w-10 h-10 rounded-md bg-blue-200"></div>
        </div>
        <motion.div
          animate={{ x: [0, 50, 50], opacity: [1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 3, repeatDelay: 0.5 }}
          className="absolute w-8 h-8 bg-blue-500/20 rounded-full z-10"
        />
        <div className="absolute h-0.5 w-32 bg-gradient-to-r from-blue-200 to-green-200" />
        <div className="absolute w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center right-12 shadow-md">
          <div className="w-10 h-10 rounded-md bg-green-200"></div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Clinical Data Extraction",
    description: "Pulls diagnoses, allergies, meds, and more from scanned docs into the patient chart—instantly.",
    icon: FileText,
    illustration: (
      <div className="w-full h-40 relative flex items-center justify-center">
        <div className="absolute w-14 h-16 left-12 bg-gray-100 rounded-md shadow-md flex flex-col p-1.5">
          <div className="w-full h-1 bg-gray-300 mb-1 rounded-sm"></div>
          <div className="w-3/4 h-1 bg-gray-300 mb-1 rounded-sm"></div>
          <div className="w-1/2 h-1 bg-gray-300 rounded-sm"></div>
        </div>
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7] 
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute z-10 w-8 h-8 rounded-full bg-blue-400/30 flex items-center justify-center"
        >
          <div className="w-4 h-4 rounded-full bg-blue-500/50"></div>
        </motion.div>
        <div className="absolute w-16 h-16 rounded-lg right-12 bg-indigo-100 flex flex-col p-2 shadow-md">
          <div className="w-full h-2 bg-indigo-200 mb-1.5 rounded-sm"></div>
          <div className="w-full flex gap-1 mb-1.5">
            <div className="w-2 h-2 bg-indigo-300 rounded-sm"></div>
            <div className="flex-1 h-2 bg-indigo-200 rounded-sm"></div>
          </div>
          <div className="w-full flex gap-1">
            <div className="w-2 h-2 bg-indigo-300 rounded-sm"></div>
            <div className="flex-1 h-2 bg-indigo-200 rounded-sm"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Smart Scheduling",
    description: "Handles last-minute changes, fills canceled slots, and reduces no-shows.",
    icon: Calendar,
    illustration: (
      <div className="w-full h-40 relative flex items-center justify-center">
        <div className="absolute w-20 h-20 bg-blue-50 rounded-lg shadow-md p-2 flex flex-col">
          <div className="w-full h-4 bg-blue-200 rounded-t-sm mb-1.5 flex items-center justify-center">
            <div className="w-12 h-1.5 bg-white rounded-sm"></div>
          </div>
          <div className="grid grid-cols-5 gap-0.5">
            {[...Array(10)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  backgroundColor: i === 3 || i === 7 ? ['#93c5fd', '#3b82f6', '#93c5fd'] : ['#e5e7eb', '#e5e7eb']
                }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
                className="w-2.5 h-2.5 bg-gray-200 rounded-sm"
              />
            ))}
          </div>
        </div>
        <motion.div
          animate={{ 
            rotate: [0, 360],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute w-8 h-8"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-0 left-3"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full absolute bottom-0 left-3"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full absolute top-3 right-0"></div>
          <div className="w-2 h-2 bg-amber-500 rounded-full absolute top-3 left-0"></div>
        </motion.div>
      </div>
    )
  },
  {
    id: 4,
    title: "Documentation Support",
    description: "Auto-pastes SOAP, HPI, and assessment notes directly into your EHR—fully structured and editable.",
    icon: ClipboardCheck,
    illustration: (
      <div className="w-full h-40 relative flex items-center justify-center">
        <div className="absolute left-8 w-14 h-16 bg-amber-50 rounded-md flex flex-col p-1.5 shadow-md">
          <div className="w-full h-1.5 bg-amber-200 mb-1 rounded-sm"></div>
          <div className="w-full h-1.5 bg-amber-200 mb-1 rounded-sm"></div>
          <div className="w-3/4 h-1.5 bg-amber-200 rounded-sm"></div>
        </div>
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute z-10 h-0.5 w-16 bg-gradient-to-r from-amber-300 to-emerald-300"
        />
        <div className="absolute right-8 w-14 h-16 bg-emerald-50 rounded-md shadow-md flex flex-col items-start p-1.5">
          <div className="flex w-full mb-1">
            <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-1"></div>
            <div className="flex-1 h-1.5 bg-emerald-200 rounded-sm"></div>
          </div>
          <div className="flex w-full mb-1">
            <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-1"></div>
            <div className="flex-1 h-1.5 bg-emerald-200 rounded-sm"></div>
          </div>
          <div className="flex w-full">
            <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-1"></div>
            <div className="flex-1 h-1.5 bg-emerald-200 rounded-sm"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Insurance Automation",
    description: "Completes payer forms, submits documentation, tracks status—no more long phone calls or delays.",
    icon: Cpu,
    illustration: (
      <div className="w-full h-40 relative flex items-center justify-center">
        <div className="absolute left-10 top-4 w-16 h-14 bg-purple-50 rounded-md shadow-md p-1.5 flex flex-col">
          <div className="w-full h-1.5 bg-purple-200 mb-1 rounded-sm"></div>
          <div className="w-full h-1.5 bg-purple-200 mb-1 rounded-sm"></div>
          <div className="w-1/2 h-1.5 bg-purple-200 rounded-sm"></div>
        </div>
        <motion.div 
          animate={{
            y: [0, -20, 0],
            opacity: [1, 0.8, 1]
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute z-10 w-6 h-6 rounded-full bg-purple-100 border border-purple-300 flex items-center justify-center"
        >
          <div className="w-4 h-4 rounded-full bg-green-200 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
        </motion.div>
        <div className="absolute right-10 bottom-4 w-16 h-14 bg-green-50 rounded-md shadow-md p-1.5 flex flex-col">
          <div className="w-full flex items-center justify-between mb-1.5">
            <div className="w-4 h-1.5 bg-green-200 rounded-sm"></div>
            <div className="w-4 h-1.5 bg-green-300 rounded-sm"></div>
          </div>
          <div className="w-full flex items-center mb-1.5">
            <div className="w-2 h-2 bg-green-300 rounded-full mr-1"></div>
            <div className="flex-1 h-1.5 bg-green-200 rounded-sm"></div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2 h-2 bg-green-300 rounded-full mr-1"></div>
            <div className="flex-1 h-1.5 bg-green-200 rounded-sm"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Inbox Management",
    description: "Responds to appointment requests, routes referrals, confirms forms—all via AI-powered email handling.",
    icon: Mail,
    illustration: (
      <div className="w-full h-40 relative flex items-center justify-center">
        <div className="absolute left-8 w-14 h-16 bg-gray-50 rounded-md shadow-md p-1.5">
          <div className="w-full h-3 bg-gray-200 rounded-t-sm"></div>
          <div className="w-full h-9 flex flex-col justify-center items-center">
            <div className="w-8 h-1 bg-gray-200 rounded-sm mb-1"></div>
            <div className="w-6 h-1 bg-gray-200 rounded-sm"></div>
          </div>
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute z-10 w-8 h-8"
        >
          <div className="w-8 h-5 bg-blue-400 rounded-t-md flex items-center justify-center">
            <div className="w-4 h-2 bg-white rounded-sm"></div>
          </div>
          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-400"></div>
        </motion.div>
        <div className="absolute right-8 w-14 h-16 bg-blue-50 rounded-md shadow-md p-1.5 flex flex-col">
          <div className="w-full flex items-center mb-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-1"></div>
            <div className="flex-1 h-1.5 bg-blue-200 rounded-sm"></div>
          </div>
          <div className="w-full flex items-center mb-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-400 mr-1"></div>
            <div className="flex-1 h-1.5 bg-blue-200 rounded-sm"></div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2 h-2 rounded-full bg-red-400 mr-1"></div>
            <div className="flex-1 h-1.5 bg-blue-200 rounded-sm"></div>
          </div>
        </div>
      </div>
    )
  },
];

export const CAWorkflowAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      {/* Background elements - made more subtle and seamless */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full"
          style={{ 
            backgroundImage: `radial-gradient(
              ellipse at center, 
              ${customAIAgentColors.tertiary}10 0%, 
              ${customAIAgentColors.tertiary}05 100%
            )`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute w-full h-full border-[1px] border-blue-100/20"
        />
      </div>

      {/* Content container with improved responsiveness */}
      <div className="relative w-full max-w-xl mx-auto text-center flex flex-col items-center justify-center px-4 py-10 sm:py-16">
        {/* Workflow step content with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8 w-full"
          >
            {/* Step icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-sm"
                style={{ backgroundColor: `${customAIAgentColors.primary}10` }}
              >
                {React.createElement(workflowSteps[currentStep].icon, { 
                  size: 24, 
                  style: { color: customAIAgentColors.primary } 
                })}
              </div>
            </div>
            
            {/* Custom illustration */}
            <div className="mb-4 sm:mb-6 flex justify-center">
              {workflowSteps[currentStep].illustration}
            </div>

            {/* Step text content */}
            <h3 
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 px-4" 
              style={{ color: customAIAgentColors.primary }}
            >
              {workflowSteps[currentStep].title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mx-auto px-4">
              {workflowSteps[currentStep].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots - improved spacing and interaction */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-4">
          {workflowSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => {
                setCurrentStep(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentStep === index 
                  ? 'bg-blue-500 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View ${step.title}`}
            />
          ))}
        </div>

        {/* Decorative connection lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10 sm:opacity-20">
          <GradientTracing
            width={400}
            height={300}
            path="M100,150 C150,50 250,250 300,150"
            strokeWidth={1.5}
            baseColor="#e2e8f0"
            gradientColors={[customAIAgentColors.primary, customAIAgentColors.secondary, customAIAgentColors.tertiary]}
            className="w-full h-full max-w-full"
          />
          <GradientTracing
            width={400}
            height={300}
            path="M300,100 C250,150 150,150 100,200"
            strokeWidth={1.5}
            baseColor="#e2e8f0"
            gradientColors={[customAIAgentColors.tertiary, customAIAgentColors.secondary, customAIAgentColors.primary]}
            className="w-full h-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
};
