import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Component, 
  Clock, 
  MessageSquare,
  Shield,
  ListChecks
} from 'lucide-react';

// Define workflow steps with illustrations
const steps = [
  {
    title: "Automate Patient Intake",
    description: "Streamline front desk operations with AI",
    icon: LayoutDashboard,
    content: "AI agents automate the intake process, collecting patient information, insurance details, and medical history seamlessly. This eliminates manual data entry and reduces wait times by 75%."
  },
  {
    title: "Process Clinical Documents",
    description: "Eliminate manual document handling",
    icon: FileText,
    content: "Your custom AI agent automatically processes referrals, test results, and prior medical records. It extracts key data points and integrates them into your existing systems without staff intervention."
  },
  {
    title: "Manage Appointments",
    description: "Reduce no-shows and streamline scheduling",
    icon: Calendar,
    content: "Custom AI scheduling automatically fills cancellations, sends reminders, and optimizes your clinic's calendar based on provider availability and patient needs."
  },
  {
    title: "Generate Clinical Documentation",
    description: "Automate notes, reports, and care plans",
    icon: Component,
    content: "Custom AI documentation creates comprehensive clinical notes that match your specialty's terminology and your personal documentation style, saving hours of administrative work."
  },
  {
    title: "Insurance Automation",
    description: "Complete payer forms and track status",
    icon: Shield,
    content: "AI agents handle prior authorizations, eligibility verification, and claim submission with unprecedented accuracy, reducing denials by up to 47%."
  },
  {
    title: "Patient Communication",
    description: "Maintain engagement between visits",
    icon: MessageSquare,
    content: "Custom AI communication tools generate personalized follow-ups, educational content, and care instructions based on each patient's specific conditions and needs."
  },
  {
    title: "Handle Repetitive Tasks",
    description: "Automate manual and repetitive work",
    icon: ListChecks,
    content: "Your AI agent takes care of any repetitive tasks like data entry, form filling, and routine documentation. This automation reduces human error and frees up your staff to focus on more meaningful patient interactions."
  }
];

// Illustration component for each step
const StepIllustration = ({ step }) => {
  return (
    <div className="w-full h-full p-6 bg-white rounded-lg border border-gray-100 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="p-2 rounded-full mr-2" style={{ backgroundColor: `${customAIAgentColors.primary}10` }}>
            <step.icon size={18} style={{ color: customAIAgentColors.primary }} />
          </span>
          <h4 className="text-lg font-medium" style={{ color: customAIAgentColors.primary }}>{step.title}</h4>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
          <CheckCircle size={16} className="text-green-500" />
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="w-full h-32 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="w-2/3 h-2/3 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <step.icon size={40} style={{ color: `${customAIAgentColors.secondary}50` }} />
            </div>
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 rounded"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </div>
        
        <p className="text-sm" style={{ color: customAIAgentColors.text.secondary }}>
          {step.content}
        </p>
        
        {step.title === "Generate Clinical Documentation" && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="p-2 bg-blue-50 rounded text-xs" style={{ color: customAIAgentColors.primary }}>
              AI-Enhanced Notes
            </div>
            <div className="p-2 bg-green-50 rounded text-xs" style={{ color: customAIAgentColors.primary }}>
              Smart Templates
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const CATransformWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Auto-rotate through steps
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay when user interacts with the component
  const handleStepClick = (index) => {
    setActiveStep(index);
    setAutoplay(false); // Stop autoplay when user clicks
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: customAIAgentColors.primary }}
          >
            How AI Agents Transform Your Practice
          </h2>
          <p 
            className="text-lg mx-auto max-w-2xl"
            style={{ color: customAIAgentColors.text.secondary }}
          >
            Discover how our Custom AI Agents revolutionize your workflow, one step at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side: Steps */}
          <div className="space-y-2 order-2 md:order-1">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                onClick={() => handleStepClick(index)}
                className={`p-4 rounded-lg cursor-pointer transition-colors duration-300 border ${
                  activeStep === index 
                    ? 'border-blue-200 bg-blue-50' 
                    : 'border-transparent hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                style={{ 
                  backgroundColor: activeStep === index ? `${customAIAgentColors.tertiary}15` : '',
                  borderColor: activeStep === index ? `${customAIAgentColors.tertiary}` : ''
                }}
              >
                <div className="flex items-start">
                  <div 
                    className="p-2 rounded-full mr-3 flex-shrink-0"
                    style={{ 
                      backgroundColor: activeStep === index 
                        ? `${customAIAgentColors.primary}20` 
                        : `${customAIAgentColors.tertiary}10`
                    }}
                  >
                    <step.icon 
                      className="w-5 h-5" 
                      style={{ 
                        color: activeStep === index 
                          ? customAIAgentColors.primary 
                          : customAIAgentColors.text.secondary
                      }} 
                    />
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-medium mb-1"
                      style={{ 
                        color: activeStep === index 
                          ? customAIAgentColors.primary 
                          : customAIAgentColors.text.primary
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: customAIAgentColors.text.secondary }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right side: Illustration */}
          <div className="relative h-[400px] order-1 md:order-2">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <StepIllustration step={steps[activeStep]} />
            </motion.div>
            
            {/* Step indicators */}
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
                  style={{
                    backgroundColor: activeStep === index 
                      ? customAIAgentColors.primary 
                      : '#E0E0E0'
                  }}
                  aria-label={`Go to step ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl font-semibold mb-6" style={{ color: customAIAgentColors.text.primary }}>
            Faster Check-Ins. Smarter Scheduling. Effortless Coordination.
          </p>
          
          <motion.button
            className="px-6 py-3 text-lg rounded-lg shadow-lg inline-flex items-center hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: customAIAgentColors.secondary, 
              color: "white" 
            }}
          >
            Request a Demo
          </motion.button>
        </div>
      </div>
    </section>
  );
};
