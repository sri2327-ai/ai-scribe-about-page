import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, MessageSquare, Calendar, ClipboardCheck, Bell, FileText, CalendarPlus, Phone, Mail } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "AI Chat & Calls",
    description: "BRAVO connects with patients via chat and calls",
    color: "#143151",
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="space-y-3">
          <div className="flex gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
                <p className="text-sm">Hi, how can I help you today?</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="flex-1">
              <div className="bg-blue-500 rounded-2xl p-3 max-w-[80%] ml-auto">
                <p className="text-sm text-white">I need to schedule an appointment</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
                <p className="text-sm">I'll help you schedule that. What's your preferred time?</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 p-2 bg-green-50 rounded-lg border border-green-100">
            <PhoneCall className="w-4 h-4 text-green-600" />
            <span className="text-xs text-green-700">Calling Patient...</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Books appointments and manages refills",
    color: "#387E89",
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-blue-500" />
            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-2 rounded bg-blue-50 border border-blue-100">
                <div className="text-xs text-center text-blue-600">
                  {i === 1 ? "9:00 AM" : i === 2 ? "1:30 PM" : "4:00 PM"}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-100">
            <CalendarPlus className="w-4 h-4 text-orange-600" />
            <span className="text-xs text-orange-700">Refill Request Scheduled</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Bell,
    title: "Automated Follow-ups",
    description: "Sends reminders through multiple channels",
    color: "#5192AE",
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <Bell className="w-5 h-5 text-blue-500" />
          <div>
            <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-2/3"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="p-2 rounded bg-green-50 border border-green-100">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-green-600" />
              <p className="text-xs text-green-600">SMS Sent</p>
            </div>
          </div>
          <div className="p-2 rounded bg-blue-50 border border-blue-100">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <p className="text-xs text-blue-600">Email Sent</p>
            </div>
          </div>
          <div className="p-2 rounded bg-purple-50 border border-purple-100">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-600" />
              <p className="text-xs text-purple-600">Called and Reminded</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: ClipboardCheck,
    title: "Pre-visit Intake",
    description: "Handles questionnaires and documentation",
    color: "#143151",
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input type="checkbox" checked className="rounded text-blue-500" />
            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked className="rounded text-blue-500" />
            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded text-gray-300" />
            <div className="h-4 bg-gray-100 rounded w-2/3"></div>
          </div>
          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-blue-700">Clinical Summary Generated</span>
            </div>
            <div className="h-3 bg-blue-100 rounded w-full mb-1"></div>
            <div className="h-3 bg-blue-100 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: FileText,
    title: "Post-visit Patient Feedback",
    description: "Collects and analyzes patient feedback",
    color: "#387E89",
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <div className="flex-1">
              <div className="h-4 bg-gray-100 rounded w-full"></div>
            </div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">Great experience!</span>
            </div>
            <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }
];

export const BravoWorkflowAnimation = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);

  // Auto-advance steps
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 6000); // Show each step for 6 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const handleStepClick = (index: number) => {
    setUserInteracted(true);
    setIsAutoPlaying(false);
    setCurrentStep(index);
    
    // Resume auto-play after 15 seconds of inactivity
    const inactivityTimer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 15000);
    
    return () => clearTimeout(inactivityTimer);
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = currentStep === index;
        const isComplete = currentStep > index;

        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isActive ? 1 : 0.5,
              height: isActive ? "auto" : "64px",
              x: isActive ? 0 : -5
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
            className="relative overflow-hidden"
            onClick={() => handleStepClick(index)}
          >
            <motion.div
              className="flex flex-col gap-4 cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${step.color}10` }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: step.color }} />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-lg font-semibold text-gray-900"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-600"
                  >
                    {step.description}
                  </motion.p>
                </div>
              </div>
              
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -20, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-16"
                  >
                    {step.preview}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.div
                className="absolute left-6 top-12 w-[1px] h-[calc(100%+1.5rem)]"
                style={{
                  background: 'linear-gradient(to bottom, #e5e7eb 60%, transparent)'
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isActive ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
