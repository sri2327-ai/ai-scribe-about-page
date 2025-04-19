
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Component, 
  Clock, 
  MessageSquare 
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
              <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
              <div className="flex-1 h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
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
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-24 bg-gray-200 mb-3 rounded"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-100 rounded w-3/4"></div>
              <div className="h-3 bg-gray-100 rounded w-1/2"></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between mb-3">
              <div className="w-20 h-4 bg-blue-100 rounded"></div>
              <div className="w-10 h-4 bg-green-100 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-100 rounded"></div>
              <div className="h-3 bg-gray-100 rounded w-3/4"></div>
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
          <div className="w-24 h-6 bg-blue-100 rounded"></div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <div key={day} className="text-center">
              <div className="w-full h-4 bg-gray-200 rounded mb-1"></div>
              <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center mx-auto">
                {day + 10}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((_, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-2 bg-white rounded-lg"
            >
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
              <div className="w-20 h-4 bg-blue-100 rounded"></div>
            </div>
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
          <div className="w-28 h-6 bg-purple-100 rounded"></div>
          <div className="w-10 h-6 bg-blue-100 rounded"></div>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg">
            <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
            <div className="w-3/4 h-3 bg-gray-100 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-100 rounded"></div>
          </div>
          <div className="flex space-x-3">
            <div className="w-1/2 bg-white p-3 rounded-lg">
              <div className="w-full h-3 bg-red-100 rounded mb-2"></div>
              <div className="w-full h-12 bg-gray-100 rounded"></div>
            </div>
            <div className="w-1/2 bg-white p-3 rounded-lg">
              <div className="w-full h-3 bg-green-100 rounded mb-2"></div>
              <div className="w-full h-12 bg-gray-100 rounded"></div>
            </div>
          </div>
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
          <div className="flex justify-end">
            <div className="w-3/4 bg-blue-100 p-3 rounded-lg">
              <div className="w-full h-3 bg-white/50 rounded mb-1"></div>
              <div className="w-3/4 h-3 bg-white/50 rounded"></div>
            </div>
          </div>
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
          <div className="w-20 h-6 bg-blue-100 rounded"></div>
          <div className="w-24 h-6 bg-green-100 rounded"></div>
        </div>
        <div className="h-40 flex items-end space-x-3 mb-4">
          {[40, 70, 55, 80, 60, 90, 75].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-blue-400 rounded-t-md" 
                style={{ height: `${height}%` }}
              ></div>
              <div className="w-full h-1 bg-gray-300 mt-1"></div>
              <div className="text-xs text-gray-500 mt-1">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
];

export const CATransformWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: customAIAgentColors.primary }}
          >
            How AI Agents Transform Your Practice
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: customAIAgentColors.text.secondary }}
          >
            Discover how our Custom AI Agents revolutionize your workflow, one step at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 order-2 md:order-1">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gray-100 shadow-lg' 
                    : 'hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="p-3 rounded-full mr-4"
                    style={{ 
                      backgroundColor: activeStep === index 
                        ? `${customAIAgentColors.primary}20` 
                        : `${customAIAgentColors.tertiary}20`,
                      color: activeStep === index 
                        ? customAIAgentColors.primary 
                        : customAIAgentColors.text.secondary
                    }}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold"
                      style={{ 
                        color: activeStep === index 
                          ? customAIAgentColors.primary 
                          : customAIAgentColors.text.secondary
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className={`text-sm ${activeStep === index ? 'block' : 'hidden md:block'}`}
                      style={{ color: customAIAgentColors.text.secondary }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="h-[350px] md:h-[400px] relative bg-white rounded-lg shadow-lg overflow-hidden order-1 md:order-2">
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
                  onClick={() => setActiveStep(index)}
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
      </div>
    </section>
  );
};
