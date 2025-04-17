
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { bravoColors } from '@/theme/bravo-theme';
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { BravoWorkflowAnimation } from '../animations/BravoWorkflowAnimation';
import { 
  ArrowRight, 
  Phone, 
  Laptop, 
  Database, 
  Calendar, 
  MessageSquare, 
  UserCheck, 
  ClipboardCheck,
  Bell,
  FileText,
  CreditCard,
  FileCheck,
} from 'lucide-react';

const stepVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

const itemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: i => ({ 
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
  items: { icon: any; text: string }[];
  isActive: boolean;
  onActivate: () => void;
  stepNumber: string;
}

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
            backgroundColor: `${bravoColors.tertiary}20`,
            border: isActive ? `2px solid ${bravoColors.tertiary}` : `1px solid ${bravoColors.tertiary}50`
          }}
        >
          <span 
            className="text-2xl font-bold" 
            style={{ color: isActive ? bravoColors.tertiary : `${bravoColors.tertiary}80` }}
          >
            {stepNumber}
          </span>
        </motion.div>
        
        <div className="flex-1">
          <motion.h3 
            className="text-2xl font-bold mb-2" 
            style={{ color: isActive ? bravoColors.primary : `${bravoColors.primary}90` }}
            variants={stepVariants}
            initial="initial"
            animate="animate"
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-lg mb-6" 
            style={{ color: bravoColors.text.secondary }}
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
                        style={{ backgroundColor: `${bravoColors.secondary}20` }}
                      >
                        <Icon size={20} style={{ color: bravoColors.secondary }} />
                      </div>
                      <p className="flex-1" style={{ color: bravoColors.text.secondary }}>
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

const StepVisualizer = ({ activeStep }: { activeStep: number }) => {
  // Use a single animation component that handles all steps
  return (
    <div className="relative h-full min-h-[400px] flex items-center justify-center">
      <BravoWorkflowAnimation />
    </div>
  );
};

export const HowBravoWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const intervalRef = useRef<number | null>(null);
  
  const steps = [
    {
      number: "1",
      title: "Deploy BRAVO",
      description: "Seamlessly integrate with:",
      items: [
        { 
          icon: Phone, 
          text: "SIP & Phone Systems – Twilio, Plivo, Exotel, Telnyx & more." 
        },
        { 
          icon: Laptop, 
          text: "Patient Platforms – Elation, OhMD, Care Patron, SimplePractice & others." 
        },
        { 
          icon: Database, 
          text: "EHR & PMS Integration – Auto-sync for real-time workflow automation." 
        }
      ]
    },
    {
      number: "2",
      title: "AI-Powered Front Office Automation",
      description: "BRAVO handles every patient engagement & admin task:",
      items: [
        { 
          icon: Calendar, 
          text: "Appointment Management – Auto-schedules, confirms & follows up." 
        },
        { 
          icon: MessageSquare, 
          text: "Refill Processing – Verifies identity, confirms pharmacies & drafts refills." 
        },
        { 
          icon: UserCheck, 
          text: "Patient Intake & Check-In – Registers patients, updates records & collects history." 
        },
        { 
          icon: ClipboardCheck, 
          text: "Pre-Visit Assistance – Captures chief complaints & prepares clinical summaries." 
        },
        { 
          icon: Bell, 
          text: "Patient Communication – Manages inquiries, triage & education." 
        }
      ]
    },
    {
      number: "3",
      title: "Seamless Sync with EHR, PMS & RCM",
      description: "BRAVO ensures a fully automated front-office workflow:",
      items: [
        { 
          icon: FileText, 
          text: "Appointments & Refills – Auto-confirms visits & processes refills." 
        },
        { 
          icon: CreditCard, 
          text: "Billing & Insurance – Verifies eligibility, handles authorizations & claims." 
        },
        { 
          icon: FileCheck, 
          text: "Clinical Documentation – Updates records, generates care plans & tracks follow-ups." 
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
              text="How BRAVO Works" 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
              colors={{ first: "#000000", second: bravoColors.secondary }}
            />
          </motion.div>
          
          <motion.h3 
            className="text-xl md:text-2xl font-medium text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI-Powered Front Office Automation
          </motion.h3>
          
          <motion.div
            className="mx-auto mt-6 w-24 h-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          />
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
          
          <div className="hidden md:block h-full sticky top-24">
            <StepVisualizer activeStep={activeStep} />
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-2xl font-semibold mb-8 text-gray-800">
            Faster Check-Ins. Smarter Scheduling. Effortless Coordination.
          </p>
          
          <motion.button
            className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-xl inline-flex items-center hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            REQUEST A DEMO
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
