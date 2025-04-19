
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Component, 
  Clock, 
  MessageSquare,
  Bot,
  CircleDot,
  Mail,
  FileCheck,
  Shield
} from 'lucide-react';

const steps = [
  {
    title: "Automate Patient Intake",
    description: "Streamline front desk operations with AI",
    icon: LayoutDashboard,
    illustration: () => (
      <div className="w-full h-full bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between mb-4">
          <div className="w-24 h-6 bg-blue-100 rounded"></div>
          <div className="w-12 h-6 bg-green-100 rounded"></div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              </div>
              <div className="flex-1 h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
        <motion.div 
          className="mt-4 w-full h-8 bg-blue-500 rounded flex items-center justify-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-20 h-3 bg-white rounded"></div>
        </motion.div>
      </div>
    )
  },
  {
    title: "Process Clinical Documents",
    description: "Eliminate manual document handling",
    icon: FileText,
    illustration: () => (
      <div className="w-full h-full bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between mb-4">
          <div className="w-32 h-6 bg-green-100 rounded"></div>
          <div className="w-16 h-6 bg-blue-100 rounded"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-24 bg-gray-200 mb-3 rounded flex items-center justify-center">
              <FileText className="w-10 h-10 text-gray-400" />
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-100 rounded w-3/4"></div>
              <div className="h-3 bg-gray-100 rounded w-1/2"></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-3">
              <div className="w-20 h-4 bg-blue-100 rounded"></div>
              <div className="w-10 h-4 bg-green-100 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-100 rounded"></div>
              <div className="h-3 bg-gray-100 rounded w-3/4"></div>
              <motion.div 
                className="h-3 bg-blue-200 rounded w-1/2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Manage Appointments",
    description: "Reduce no-shows and streamline scheduling",
    icon: Calendar,
    illustration: () => (
      <div className="w-full h-full bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-blue-500 mr-2" />
            <div className="w-24 h-6 bg-blue-100 rounded"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <div key={day} className="text-center">
              <div className="w-full h-4 bg-gray-200 rounded mb-1"></div>
              <div className={`w-8 h-8 ${day === 3 ? 'bg-blue-100 border border-blue-300' : 'bg-white border border-gray-300'} rounded-full flex items-center justify-center mx-auto`}>
                {day + 10}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((_, index) => (
            <motion.div 
              key={index} 
              className={`flex items-center justify-between p-2 ${index === 1 ? 'bg-blue-50' : 'bg-white'} rounded-lg shadow-sm`}
              animate={index === 1 ? { y: [0, -3, 0] } : {}}
              transition={index === 1 ? { repeat: Infinity, duration: 2 } : {}}
            >
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
              <div className="w-20 h-4 bg-blue-100 rounded"></div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Generate Clinical Documentation",
    description: "Automate notes, reports, and care plans",
    icon: Component,
    illustration: () => (
      <div className="w-full h-full bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between mb-4">
          <div className="w-28 h-6 bg-purple-100 rounded flex items-center justify-center">
            <Component className="w-4 h-4 text-purple-500 mr-1" />
            <div className="w-16 h-3 bg-purple-200 rounded"></div>
          </div>
          <div className="w-10 h-6 bg-blue-100 rounded"></div>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
            <div className="w-3/4 h-3 bg-gray-100 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-100 rounded"></div>
          </div>
          <div className="flex space-x-3">
            <motion.div 
              className="w-1/2 bg-white p-3 rounded-lg shadow-sm"
              animate={{ boxShadow: ['0 1px 2px rgba(0,0,0,0.1)', '0 4px 8px rgba(0,0,0,0.1)', '0 1px 2px rgba(0,0,0,0.1)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="w-full h-3 bg-red-100 rounded mb-2"></div>
              <div className="w-full h-12 bg-gray-100 rounded"></div>
            </motion.div>
            <div className="w-1/2 bg-white p-3 rounded-lg shadow-sm">
              <div className="w-full h-3 bg-green-100 rounded mb-2"></div>
              <div className="w-full h-12 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Insurance Automation",
    description: "Complete payer forms and track status",
    icon: Shield,
    illustration: () => (
      <div className="w-full h-full bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <Shield className="w-5 h-5 text-green-500 mr-2" />
            <div className="w-24 h-6 bg-green-100 rounded"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="w-full h-5 bg-blue-100 rounded mb-3 flex items-center justify-center">
              <div className="w-20 h-3 bg-blue-300 rounded"></div>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between">
                  <div className="w-20 h-3 bg-gray-100 rounded"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${i === 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div 
            className="bg-white p-3 rounded-lg shadow-sm"
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-full h-5 bg-green-100 rounded mb-3 flex items-center justify-center">
              <FileCheck className="w-4 h-4 text-green-500 mr-1" />
              <div className="w-16 h-3 bg-green-300 rounded"></div>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "Patient Communication",
    description: "Maintain engagement between visits",
    icon: MessageSquare,
    illustration: () => (
      <div className="w-full h-full bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <MessageSquare className="w-5 h-5 text-blue-500 mr-2" />
            <div className="w-24 h-6 bg-blue-100 rounded"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="w-3/4 bg-blue-100 p-3 rounded-lg">
              <div className="w-full h-3 bg-white/50 rounded mb-1"></div>
              <div className="w-2/3 h-3 bg-white/50 rounded"></div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="w-3/4 bg-gray-200 p-3 rounded-lg">
              <div className="w-full h-3 bg-white/50 rounded mb-1"></div>
              <div className="w-1/2 h-3 bg-white/50 rounded"></div>
            </div>
          </div>
          <motion.div 
            className="flex justify-end"
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-3/4 bg-blue-100 p-3 rounded-lg">
              <div className="w-full h-3 bg-white/50 rounded mb-1"></div>
              <div className="w-3/4 h-3 bg-white/50 rounded"></div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "Track Practice Metrics",
    description: "Real-time analytics and performance tracking",
    icon: Clock,
    illustration: () => (
      <div className="w-full h-full bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between mb-6">
          <div className="w-20 h-6 bg-blue-100 rounded flex items-center justify-center">
            <Clock className="w-4 h-4 text-blue-500 mr-1" />
            <div className="w-10 h-3 bg-blue-300 rounded"></div>
          </div>
          <div className="w-24 h-6 bg-green-100 rounded"></div>
        </div>
        <div className="h-40 flex items-end space-x-3 mb-4">
          {[40, 70, 55, 80, 60, 90, 75].map((height, i) => (
            <motion.div 
              key={i} 
              className="flex-1 flex flex-col items-center"
              animate={i === 5 ? { y: [0, -5, 0] } : {}}
              transition={i === 5 ? { repeat: Infinity, duration: 2 } : {}}
            >
              <div 
                className={`w-full ${i === 5 ? 'bg-blue-500' : 'bg-blue-400'} rounded-t-md`} 
                style={{ height: `${height}%` }}
              ></div>
              <div className="w-full h-1 bg-gray-300 mt-1"></div>
              <div className="text-xs text-gray-500 mt-1">{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }
];

export const CATransformWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Stop autoplay when user interacts
  const handleStepClick = (index) => {
    setActiveStep(index);
    setAutoplay(false);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: customAIAgentColors.primary }}
          >
            How AI Agents Transform Your Practice
          </h2>
          <p 
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: customAIAgentColors.text.secondary }}
          >
            Discover how our Custom AI Agents revolutionize your workflow, one step at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-4 order-2 md:order-1">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                onClick={() => handleStepClick(index)}
                className={`p-4 md:p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gray-100 shadow-lg border border-gray-200' 
                    : 'hover:bg-gray-50 border border-transparent'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <div 
                    className="p-3 rounded-full mr-4 transition-colors duration-300"
                    style={{ 
                      backgroundColor: activeStep === index 
                        ? `${customAIAgentColors.primary}20` 
                        : `${customAIAgentColors.tertiary}10`,
                      color: activeStep === index 
                        ? customAIAgentColors.primary 
                        : customAIAgentColors.text.secondary
                    }}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold transition-colors duration-300"
                      style={{ 
                        color: activeStep === index 
                          ? customAIAgentColors.primary 
                          : customAIAgentColors.text.primary
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-sm mt-1 transition-colors duration-300"
                      style={{ color: customAIAgentColors.text.secondary }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative h-[350px] md:h-[400px] bg-white rounded-lg shadow-lg overflow-hidden order-1 md:order-2 border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {steps[activeStep].illustration()}
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStep === index 
                      ? 'w-6 bg-blue-500' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl font-semibold mb-6" style={{ color: customAIAgentColors.text.primary }}>
            Faster Check-Ins. Smarter Scheduling. Effortless Coordination.
          </p>
          
          <motion.button
            className="px-6 py-3 text-base md:text-lg rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg inline-flex items-center hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Demo
          </motion.button>
        </div>
      </div>
    </section>
  );
};
