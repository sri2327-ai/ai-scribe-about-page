
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
  Mail,
  FileCheck,
  FilePlus
} from "lucide-react";

// Updated dark blue color scheme
const darkBlueTheme = {
  primary: "#143151", // Dark blue
  secondary: "#387E89", // Teal accent
  background: "#0A1A2F", // Darker blue for backgrounds
  accent: "#5192AE", // Lighter blue accent
  highlight: "#78B7D5", // Highlight blue
};

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
          style={{ backgroundColor: `${darkBlueTheme.accent}50` }}
        >
          <div className="w-4 h-4 rounded-full bg-blue-500/50" style={{ backgroundColor: `${darkBlueTheme.primary}80` }}></div>
        </motion.div>
        <div className="absolute w-16 h-16 rounded-lg right-12 bg-indigo-100 flex flex-col p-2 shadow-md"
          style={{ backgroundColor: `${darkBlueTheme.secondary}20` }}
        >
          <div className="w-full h-2 bg-indigo-200 mb-1.5 rounded-sm" style={{ backgroundColor: `${darkBlueTheme.secondary}40` }}></div>
          <div className="w-full flex gap-1 mb-1.5">
            <div className="w-2 h-2 bg-indigo-300 rounded-sm" style={{ backgroundColor: `${darkBlueTheme.secondary}60` }}></div>
            <div className="flex-1 h-2 bg-indigo-200 rounded-sm" style={{ backgroundColor: `${darkBlueTheme.secondary}40` }}></div>
          </div>
          <div className="w-full flex gap-1">
            <div className="w-2 h-2 bg-indigo-300 rounded-sm" style={{ backgroundColor: `${darkBlueTheme.secondary}60` }}></div>
            <div className="flex-1 h-2 bg-indigo-200 rounded-sm" style={{ backgroundColor: `${darkBlueTheme.secondary}40` }}></div>
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
        <div className="absolute w-20 h-20 rounded-lg shadow-md p-2 flex flex-col"
          style={{ backgroundColor: `${darkBlueTheme.primary}15` }}
        >
          <div className="w-full h-4 mb-1.5 flex items-center justify-center rounded-t-sm"
            style={{ backgroundColor: `${darkBlueTheme.primary}40` }}
          >
            <div className="w-12 h-1.5 bg-white rounded-sm"></div>
          </div>
          <div className="grid grid-cols-5 gap-0.5">
            {[...Array(10)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  backgroundColor: i === 3 || i === 7 ? [darkBlueTheme.accent, darkBlueTheme.primary, darkBlueTheme.accent] : ['#e5e7eb', '#e5e7eb']
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
          <div className="w-2 h-2 rounded-full absolute top-0 left-3"
            style={{ backgroundColor: darkBlueTheme.primary }}></div>
          <div className="w-2 h-2 rounded-full absolute bottom-0 left-3"
            style={{ backgroundColor: darkBlueTheme.secondary }}></div>
          <div className="w-2 h-2 rounded-full absolute top-3 right-0"
            style={{ backgroundColor: darkBlueTheme.accent }}></div>
          <div className="w-2 h-2 rounded-full absolute top-3 left-0"
            style={{ backgroundColor: darkBlueTheme.highlight }}></div>
        </motion.div>
      </div>
    )
  },
  {
    id: 4,
    title: "Create Referral Letters",
    description: "Auto-generates complete referral letters with relevant medical history, exam findings, and diagnostic results.",
    icon: FileCheck,
    illustration: (
      <div className="w-full h-40 relative flex items-center justify-center">
        <div className="absolute left-10 w-16 h-18 rounded-md shadow-md p-2 flex flex-col"
          style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.15 }}>
          <div className="w-full h-2 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary }}></div>
          <div className="w-3/4 h-2 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary }}></div>
          <div className="w-full h-2 mb-1.5 rounded-sm" 
            style={{ backgroundColor: darkBlueTheme.primary }}></div>
          <div className="w-2/3 h-2 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary }}></div>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute z-10"
          style={{ color: darkBlueTheme.accent }}
        >
          <FileCheck size={28} style={{ color: darkBlueTheme.accent }} />
        </motion.div>

        <motion.div
          animate={{ x: [0, 30, 30], opacity: [0.8, 1, 0] }}
          transition={{ repeat: Infinity, duration: 3, repeatDelay: 0.3 }}
          className="absolute h-0.5 w-20"
          style={{ backgroundColor: darkBlueTheme.accent }}
        />

        <div className="absolute right-10 w-16 h-18 rounded-md shadow-md p-2 flex flex-col"
          style={{ backgroundColor: darkBlueTheme.secondary, opacity: 0.2 }}>
          <div className="w-full flex items-center justify-between mb-1">
            <div className="w-3 h-3 rounded-full"
              style={{ backgroundColor: darkBlueTheme.primary }}></div>
            <div className="w-8 h-1.5 rounded-sm"
              style={{ backgroundColor: darkBlueTheme.secondary }}></div>
          </div>
          <div className="w-full h-10 rounded-sm mb-1 flex items-center justify-center"
            style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.3 }}>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FilePlus size={16} style={{ color: darkBlueTheme.primary }} />
            </motion.div>
          </div>
          <div className="w-full h-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.secondary }}></div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Process Lab & Prescription Orders",
    description: "Automates lab requests, prescription renewals, and medication orders with a single click.",
    icon: ClipboardCheck,
    illustration: (
      <div className="w-full h-40 relative flex items-center justify-center">
        <div className="absolute left-8 w-16 h-18 rounded-lg shadow-md p-2 flex flex-col"
          style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.15 }}>
          <div className="w-full flex mb-2">
            <div className="w-3 h-3 rounded-sm mr-1"
              style={{ backgroundColor: darkBlueTheme.primary }}></div>
            <div className="flex-1 h-3 rounded-sm"
              style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.5 }}></div>
          </div>
          <div className="w-full flex mb-2">
            <div className="w-3 h-3 rounded-sm mr-1"
              style={{ backgroundColor: darkBlueTheme.primary }}></div>
            <div className="flex-1 h-3 rounded-sm"
              style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.5 }}></div>
          </div>
          <div className="w-full flex">
            <div className="w-3 h-3 rounded-sm mr-1" 
              style={{ backgroundColor: darkBlueTheme.primary }}></div>
            <div className="flex-1 h-3 rounded-sm"
              style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.5 }}></div>
          </div>
        </div>
        
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute z-10 flex items-center justify-center"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ 
              backgroundColor: `${darkBlueTheme.primary}20`, 
              borderColor: darkBlueTheme.primary, 
              borderWidth: '2px' 
            }}>
            <ClipboardCheck size={18} style={{ color: darkBlueTheme.primary }} />
          </div>
        </motion.div>

        <motion.div
          animate={{ x: [0, 30, 30], opacity: [0.6, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 0.5 }}
          className="absolute h-0.5 w-24"
          style={{ backgroundColor: darkBlueTheme.accent }}
        />
        
        <div className="absolute right-8 w-16 h-18 rounded-lg shadow-md p-2 flex flex-col"
          style={{ backgroundColor: darkBlueTheme.secondary, opacity: 0.2 }}>
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 0.5 }}
            className="w-full h-3 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.accent }}
          ></motion.div>
          <div className="w-3/4 h-3 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary }}></div>
          <div className="w-full h-3 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.7 }}></div>
          <div className="w-1/2 h-3 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.5 }}></div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Generate Patient Instructions",
    description: "Creates personalized care instructions, medication guides, and educational resources in the patient's preferred language.",
    icon: FileText,
    illustration: (
      <div className="w-full h-40 relative flex items-center justify-center">
        <div className="absolute left-8 w-16 h-20 rounded-md shadow-md p-2 flex flex-col"
          style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.15 }}>
          <div className="w-full h-3 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary }}></div>
          <div className="w-full h-3 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.8 }}></div>
          <div className="w-3/4 h-3 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.6 }}></div>
          <div className="w-1/2 h-3 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.4 }}></div>
        </div>
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 3, 0, -3, 0]
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute z-10"
        >
          <div className="flex flex-col items-center">
            <FileText size={20} style={{ color: darkBlueTheme.accent }} />
            <div className="mt-1 text-xs font-medium"
              style={{ color: darkBlueTheme.accent }}>PDF</div>
          </div>
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, 30, 30],
            opacity: [0.6, 1, 0]
          }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute h-0.5 w-20"
          style={{ backgroundColor: darkBlueTheme.accent }}
        />
        
        <div className="absolute right-8 w-16 h-20 rounded-md shadow-md p-2 flex flex-col items-start space-y-1.5"
          style={{ backgroundColor: darkBlueTheme.secondary, opacity: 0.15 }}>
          <div className="w-full flex items-center">
            <div className="w-3 h-3 rounded-sm mr-1"
              style={{ backgroundColor: darkBlueTheme.primary }}></div>
            <div className="flex-1 h-3 rounded-sm"
              style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.5 }}></div>
          </div>
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-full flex items-center"
          >
            <div className="w-3 h-3 rounded-sm mr-1"
              style={{ backgroundColor: darkBlueTheme.primary }}></div>
            <div className="flex-1 h-3 rounded-sm"
              style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.7 }}></div>
          </motion.div>
          <div className="w-full flex items-center">
            <div className="w-3 h-3 rounded-sm mr-1"
              style={{ backgroundColor: darkBlueTheme.primary }}></div>
            <div className="flex-1 h-3 rounded-sm"
              style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.5 }}></div>
          </div>
          <div className="w-3/4 h-3 self-end rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.3 }}></div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Push Notes to EHR",
    description: "Automatically uploads completed notes, orders, and patient instructions to your EHR system.",
    icon: Cpu,
    illustration: (
      <div className="w-full h-40 relative flex items-center justify-center">
        <div className="absolute left-8 top-2 w-16 h-16 rounded-lg shadow-md p-2 flex flex-col"
          style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.15 }}>
          <div className="w-full h-2 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary }}></div>
          <div className="w-full h-2 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.8 }}></div>
          <div className="w-3/4 h-2 mb-1.5 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.6 }}></div>
          <div className="w-full h-2 rounded-sm"
            style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.4 }}></div>
        </div>
        
        <motion.div
          animate={{
            y: [-3, 3, -3],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute z-10"
        >
          <div className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ 
              backgroundColor: darkBlueTheme.primary, 
              opacity: 0.3, 
              borderColor: darkBlueTheme.accent, 
              borderWidth: '2px' 
            }}>
            <Cpu size={22} style={{ color: darkBlueTheme.primary }} />
          </div>
        </motion.div>
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute w-full h-0.5 max-w-[150px]"
          style={{ background: `linear-gradient(90deg, ${darkBlueTheme.primary}00, ${darkBlueTheme.accent}, ${darkBlueTheme.primary}00)` }}
        />
        
        <div className="absolute right-8 bottom-2 w-16 h-16 rounded-lg shadow-md p-2 flex flex-col"
          style={{ backgroundColor: darkBlueTheme.secondary, opacity: 0.15 }}>
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-full flex items-center justify-between mb-1.5"
          >
            <div className="w-2 h-2 rounded-full"
              style={{ backgroundColor: darkBlueTheme.primary }}></div>
            <div className="w-8 h-1.5 rounded-sm"
              style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.7 }}></div>
          </motion.div>
          <div className="w-full flex items-center mb-1.5">
            <div className="w-2 h-2 rounded-full"
              style={{ backgroundColor: darkBlueTheme.primary }}></div>
            <div className="flex-1 h-1.5 ml-1 rounded-sm"
              style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.6 }}></div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2 h-2 rounded-full"
              style={{ backgroundColor: darkBlueTheme.primary }}></div>
            <div className="flex-1 h-1.5 ml-1 rounded-sm"
              style={{ backgroundColor: darkBlueTheme.primary, opacity: 0.5 }}></div>
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
              ${darkBlueTheme.primary}20, 
              ${darkBlueTheme.background}10
            )`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute w-full h-full border-[1px]"
          style={{ borderColor: `${darkBlueTheme.accent}30` }}
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
                style={{ backgroundColor: `${darkBlueTheme.primary}15` }}
              >
                {React.createElement(workflowSteps[currentStep].icon, { 
                  size: 24, 
                  style: { color: darkBlueTheme.primary } 
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
              style={{ color: darkBlueTheme.primary }}
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
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300`}
              style={{
                backgroundColor: currentStep === index ? darkBlueTheme.primary : '#d1d5db',
                transform: currentStep === index ? 'scale(1.1)' : 'scale(1)'
              }}
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
            gradientColors={[darkBlueTheme.primary, darkBlueTheme.secondary, darkBlueTheme.accent]}
            className="w-full h-full max-w-full"
          />
          <GradientTracing
            width={400}
            height={300}
            path="M300,100 C250,150 150,150 100,200"
            strokeWidth={1.5}
            baseColor="#e2e8f0"
            gradientColors={[darkBlueTheme.accent, darkBlueTheme.secondary, darkBlueTheme.primary]}
            className="w-full h-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
};
