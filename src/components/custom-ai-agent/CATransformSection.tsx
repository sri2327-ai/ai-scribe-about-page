
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  Calendar, 
  Clock, 
  LayoutDashboard,
  Component,
  Bot,
  Layers,
  Circle,
  CircleDot
} from 'lucide-react';

const stepVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

const itemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: (i: number) => ({ 
    opacity: 1, 
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  }),
  hover: { scale: 1.02, x: 10 }
};

const iconContainerVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  pulse: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity }
  }
};

interface StepItemProps {
  index: number;
  title: string; 
  description: string;
  items: { icon: React.ElementType; text: string }[];
  isActive: boolean;
  onActivate: () => void;
  stepNumber: string;
}

// Mock UI illustration components
const PatientIntakeUI = () => (
  <div className="w-full h-full flex flex-col gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div className="flex gap-1">
        <div className="w-20 h-5 rounded bg-gray-200"></div>
        <div className="w-5 h-5 rounded bg-gray-300"></div>
      </div>
    </div>
    
    <div className="flex gap-4">
      <div className="w-1/3 p-3 bg-white rounded-lg shadow-sm flex flex-col gap-2">
        <div className="w-full h-5 bg-blue-100 rounded mb-2"></div>
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-200"></div>
            <div className="h-3 flex-1 bg-gray-100 rounded"></div>
          </div>
        ))}
      </div>
      
      <div className="w-2/3 bg-white rounded-lg p-3 shadow-sm">
        <div className="flex justify-between mb-3">
          <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
          <div className="w-1/4 h-4 bg-blue-100 rounded"></div>
        </div>
        
        <div className="space-y-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-100"></div>
              <div className="h-3 flex-1 bg-gray-100 rounded"></div>
              <div className="w-16 h-3 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <motion.div 
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="self-end p-2 rounded-md bg-blue-500 w-24 h-8 flex items-center justify-center"
    >
      <div className="w-16 h-3 bg-white rounded"></div>
    </motion.div>
  </div>
);

const LabResultUI = () => (
  <div className="w-full h-full flex flex-col gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
    <div className="flex justify-between items-center mb-3">
      <div className="w-32 h-5 bg-gray-300 rounded"></div>
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
        </div>
        <div className="w-6 h-6 rounded-full bg-gray-100"></div>
      </div>
    </div>
    
    <div className="flex gap-3">
      <div className="w-1/2 bg-white p-3 rounded-lg shadow-sm">
        <div className="w-full h-36 bg-gray-100 rounded-md mb-2 flex items-center justify-center">
          <FileText className="w-8 h-8 text-gray-400" />
        </div>
        <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
        <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
      </div>
      
      <div className="w-1/2 bg-white p-3 rounded-lg shadow-sm">
        <div className="flex justify-between mb-2">
          <div className="w-20 h-4 bg-blue-100 rounded"></div>
          <div className="w-8 h-4 bg-green-100 rounded"></div>
        </div>
        
        <div className="space-y-3 mb-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between">
              <div className="w-24 h-3 bg-gray-100 rounded"></div>
              <div className="w-16 h-3 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
        
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-1.5 bg-green-100 rounded w-full flex justify-center"
        >
          <div className="w-20 h-3 bg-green-500 rounded"></div>
        </motion.div>
      </div>
    </div>
  </div>
);

const AppointmentUI = () => (
  <div className="w-full h-full flex flex-col gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-blue-500" />
        <div className="w-32 h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded bg-gray-200"></div>
        <div className="w-6 h-6 rounded bg-gray-200"></div>
      </div>
    </div>
    
    <div className="grid grid-cols-7 gap-1 mt-2">
      {Array(7).fill(0).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-8 h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-gray-200">
            <div className="text-xs">{i + 10}</div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="space-y-2 mt-3">
      {[1, 2, 3].map(i => (
        <motion.div 
          key={i}
          animate={{ x: i === 2 ? [0, 5, 0] : 0 }}
          transition={{ repeat: Infinity, duration: i === 2 ? 2 : 0 }}
          className="flex gap-2 items-center p-2 rounded-lg"
          style={{ backgroundColor: i === 2 ? 'rgba(59, 130, 246, 0.1)' : 'white' }}
        >
          <div className="w-12 text-center text-xs">{`${10 + i}:00`}</div>
          <div className="flex-1 h-6 bg-gray-100 rounded"></div>
          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
        </motion.div>
      ))}
    </div>
    
    <motion.div 
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="mt-2 self-center px-3 py-1.5 bg-blue-500 rounded-md"
    >
      <div className="w-20 h-3 bg-white rounded"></div>
    </motion.div>
  </div>
);

const AIScribeUI = () => (
  <div className="w-full h-full flex flex-col gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
    <div className="flex justify-between items-center">
      <div className="w-24 h-4 bg-gray-300 rounded"></div>
      <div className="flex gap-1">
        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
      </div>
    </div>
    
    <div className="flex gap-3 flex-1">
      <div className="w-1/2 bg-white p-3 rounded-lg shadow-sm flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <Component className="w-4 h-4 text-blue-500" />
          <div className="w-20 h-3 bg-gray-200 rounded"></div>
        </div>
        
        <div className="space-y-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-100 mt-1"></div>
              <div className="flex-1">
                <div className="w-full h-3 bg-gray-100 rounded mb-1"></div>
                <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
              </div>
            </div>
          ))}
        </div>
        
        <motion.div 
          className="mt-auto self-end p-1.5 bg-blue-100 rounded flex items-center gap-1"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <div className="w-16 h-2 bg-blue-300 rounded"></div>
        </motion.div>
      </div>
      
      <motion.div 
        className="w-1/2 bg-white p-3 rounded-lg shadow-sm"
        animate={{ boxShadow: ['0 1px 3px rgba(0,0,0,0.1)', '0 4px 6px rgba(0,0,0,0.1)', '0 1px 3px rgba(0,0,0,0.1)'] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-green-500" />
          <div className="w-24 h-3 bg-gray-200 rounded"></div>
        </div>
        
        <div className="space-y-3">
          <div className="w-full h-3 bg-gray-100 rounded"></div>
          <div className="w-full h-3 bg-gray-100 rounded"></div>
          <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
          <div className="w-full h-3 bg-gray-100 rounded"></div>
          <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
        </div>
        
        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
        
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-16 h-2 bg-gray-200 rounded"></div>
          </div>
          <div className="w-20 h-6 bg-green-100 rounded flex items-center justify-center">
            <div className="w-16 h-2 bg-green-500 rounded"></div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const InsuranceUI = () => (
  <div className="w-full h-full flex flex-col gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="p-1 bg-blue-100 rounded">
          <Clock className="w-4 h-4 text-blue-500" />
        </div>
        <div className="w-32 h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="flex gap-2">
        <div className="p-1 rounded-full bg-gray-100">
          <div className="w-4 h-4 rounded-full bg-gray-300"></div>
        </div>
        <div className="p-1 rounded-full bg-gray-100">
          <div className="w-4 h-4 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
    
    <div className="flex gap-3 flex-1">
      <div className="w-1/3 bg-white p-3 rounded-lg shadow-sm">
        <div className="w-full h-4 bg-gray-200 rounded mb-3"></div>
        
        <div className="space-y-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-1.5 rounded bg-gray-50 flex items-center justify-between">
              <div className="w-12 h-3 bg-gray-200 rounded"></div>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: i === 1 ? '#10B981' : '#D1D5DB' }}></div>
            </div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="w-2/3 bg-white p-3 rounded-lg shadow-sm flex flex-col"
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <div className="flex justify-between mb-4">
          <div className="w-32 h-4 bg-gray-200 rounded"></div>
          <div className="w-16 h-5 rounded bg-green-100 flex items-center justify-center">
            <div className="w-10 h-2 bg-green-500 rounded"></div>
          </div>
        </div>
        
        <div className="space-y-3 flex-1">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 mt-1"></div>
            <div className="flex-1">
              <div className="w-full h-3 bg-gray-100 rounded"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 mt-1"></div>
            <div className="flex-1">
              <div className="w-full h-3 bg-gray-100 rounded"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 mt-1"></div>
            <div className="flex-1">
              <div className="w-full h-3 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="flex mt-3 justify-end gap-2">
          <div className="w-20 h-6 bg-gray-100 rounded flex items-center justify-center">
            <div className="w-16 h-2 bg-gray-400 rounded"></div>
          </div>
          <div className="w-20 h-6 bg-blue-500 rounded flex items-center justify-center">
            <div className="w-16 h-2 bg-white rounded"></div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const EmailsUI = () => (
  <div className="w-full h-full flex flex-col gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <MessageSquare className="w-5 h-5 text-blue-500" />
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="flex gap-1">
        <div className="w-8 h-4 rounded bg-gray-200"></div>
        <div className="w-8 h-4 rounded bg-gray-200"></div>
      </div>
    </div>
    
    <div className="flex gap-3 flex-1">
      <div className="w-1/3 bg-white p-3 rounded-lg shadow-sm">
        <div className="w-full h-5 bg-blue-100 rounded flex items-center justify-center mb-3">
          <div className="w-20 h-3 bg-blue-400 rounded"></div>
        </div>
        
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map(i => (
            <motion.div 
              key={i}
              animate={i === 1 ? { backgroundColor: ['rgba(59, 130, 246, 0.1)', 'rgba(59, 130, 246, 0.2)', 'rgba(59, 130, 246, 0.1)'] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`p-2 rounded flex items-center gap-2 ${i === 1 ? 'bg-blue-50' : 'bg-gray-50'}`}
            >
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <div className="flex-1">
                <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                <div className="w-2/3 h-2 bg-gray-100 rounded"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="w-2/3 bg-white p-3 rounded-lg shadow-sm flex flex-col">
        <div className="flex justify-between mb-3">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100"></div>
            <div className="flex flex-col justify-center">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="w-20 h-3 bg-gray-200 rounded"></div>
        </div>
        
        <div className="w-full h-[1px] bg-gray-200 mb-3"></div>
        
        <div className="space-y-2 mb-4">
          <div className="w-full h-3 bg-gray-100 rounded"></div>
          <div className="w-full h-3 bg-gray-100 rounded"></div>
          <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-lg mb-4">
          <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
          <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
        </div>
        
        <motion.div 
          className="mt-auto flex items-center gap-2 p-2 rounded bg-gray-50"
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="flex-1">
            <div className="w-full h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const StepVisualizer = ({ activeStep }: { activeStep: number }) => {
  const getStepUI = () => {
    switch(activeStep) {
      case 0:
        return <PatientIntakeUI />;
      case 1:
        return <LabResultUI />;
      case 2:
        return <AppointmentUI />;
      case 3:
        return <AIScribeUI />;
      case 4:
        return <InsuranceUI />;
      case 5:
        return <EmailsUI />;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-full min-h-[400px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {getStepUI()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const StepItem: React.FC<StepItemProps> = ({ 
  index,
  title, 
  description, 
  items, 
  isActive, 
  onActivate,
  stepNumber
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView && !isActive) {
      const timer = setTimeout(() => {
        onActivate();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, isActive, onActivate]);

  return (
    <div 
      ref={ref}
      className={`relative px-6 py-8 rounded-xl transition-all duration-300 cursor-pointer ${
        isActive ? "bg-gray-50 shadow-lg" : "hover:bg-gray-50"
      }`}
      onClick={onActivate}
    >
      <div className="flex items-start gap-4">
        <motion.div
          variants={iconContainerVariants}
          initial="initial"
          animate={isActive ? "pulse" : "animate"}
          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: `${customAIAgentColors.tertiary}20`,
            border: isActive ? `2px solid ${customAIAgentColors.tertiary}` : `1px solid ${customAIAgentColors.tertiary}50`
          }}
        >
          <span 
            className="text-2xl font-bold" 
            style={{ color: 'black' }}
          >
            {stepNumber}
          </span>
        </motion.div>
        
        <div className="flex-1">
          <motion.h3 
            className="text-2xl font-bold mb-2 text-black" 
            variants={stepVariants}
            initial="initial"
            animate="animate"
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-lg mb-6 text-black" 
            variants={stepVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
          >
            {description}
          </motion.p>
          
          <AnimatePresence>
            {isActive && (
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={i}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"
                      custom={i}
                      variants={itemVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                        style={{ backgroundColor: `${customAIAgentColors.secondary}20` }}
                      >
                        <Icon size={20} style={{ color: 'black' }} />
                      </div>
                      <p className="flex-1 text-black">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const CATransformSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const intervalRef = useRef<number | null>(null);
  
  const steps = [
    {
      number: "1",
      title: "Automate Patient Intake",
      description: "Streamline front desk operations with AI",
      items: [
        { 
          icon: LayoutDashboard, 
          text: "Seamless integration with your practice management system" 
        },
        { 
          icon: Bot, 
          text: "AI agent pre-qualifies and collects patient information" 
        },
        { 
          icon: Layers, 
          text: "Auto-populates forms and updates records in real-time" 
        }
      ]
    },
    {
      number: "2",
      title: "Process Clinical Documents",
      description: "Eliminate manual document handling",
      items: [
        { 
          icon: FileText, 
          text: "AI automatically extracts critical information from lab results" 
        },
        { 
          icon: CircleDot, 
          text: "Structured data extraction and categorization" 
        },
        { 
          icon: Component, 
          text: "Direct integration with your EHR system" 
        }
      ]
    },
    {
      number: "3",
      title: "Manage Appointments",
      description: "Reduce no-shows and streamline scheduling",
      items: [
        { 
          icon: Calendar, 
          text: "Intelligent scheduling based on provider availability" 
        },
        { 
          icon: Circle, 
          text: "Automated reminders and follow-ups" 
        },
        { 
          icon: Clock, 
          text: "Seamless rescheduling without staff intervention" 
        }
      ]
    },
    {
      number: "4",
      title: "Enhance Documentation",
      description: "Simplify clinical note creation",
      items: [
        { 
          icon: Component, 
          text: "AI scribe captures and structures patient encounters" 
        },
        { 
          icon: FileText, 
          text: "Automated coding suggestions and compliance checks" 
        },
        { 
          icon: Layers, 
          text: "Direct integration with your preferred EHR templates" 
        }
      ]
    },
    {
      number: "5",
      title: "Streamline Insurance Tasks",
      description: "Eliminate insurance bottlenecks",
      items: [
        { 
          icon: Clock, 
          text: "Automated pre-authorization workflow" 
        },
        { 
          icon: CircleDot, 
          text: "Real-time eligibility verification" 
        },
        { 
          icon: Component, 
          text: "Insurance follow-up and status tracking" 
        }
      ]
    },
    {
      number: "6",
      title: "Optimize Patient Communication",
      description: "Provide 24/7 patient support",
      items: [
        { 
          icon: MessageSquare, 
          text: "AI triage of patient messages and inquiries" 
        },
        { 
          icon: Bot, 
          text: "Automated responses to common questions" 
        },
        { 
          icon: Clock, 
          text: "Prioritization of urgent patient needs" 
        }
      ]
    }
  ];
  
  useEffect(() => {
    if (isInView) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      const id = window.setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 8000);
      
      intervalRef.current = id;
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isInView, steps.length]);
  
  const handleActivateStep = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setActiveStep(index);
  };
  
  return (
    <section className="bg-white py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <SparklesTextAdvanced 
              text="How AI Agents Transform Your Practice" 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-2 no-underline text-black"
              colors={{ first: customAIAgentColors.primary, second: customAIAgentColors.background.dark }}
            />
          </motion.div>
          <p className="text-lg text-black opacity-80">
            Explore our step-by-step approach to revolutionizing your healthcare workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <StepItem
                key={index}
                index={index}
                title={step.title}
                description={step.description}
                items={step.items}
                isActive={activeStep === index}
                onActivate={() => handleActivateStep(index)}
                stepNumber={step.number}
              />
            ))}
          </div>
          
          <div className="hidden md:block sticky top-24 self-start">
            <StepVisualizer activeStep={activeStep} />
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-2xl font-semibold mb-8 text-black">
            Faster Check-Ins. Smarter Scheduling. Effortless Coordination.
          </p>
          
          <motion.button
            className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl inline-flex items-center hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            REQUEST A DEMO
            <ArrowRight className="ml-2 h-5 w-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
