import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { bravoColors } from '@/theme/bravo-theme';
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { 
  ArrowRight, 
  Plug, 
  Phone, 
  FileText, 
  Database, 
  Calendar, 
  ClipboardCheck, 
  FileCheck, 
  MessageSquare, 
  Bell, 
  UserCheck, 
  CreditCard,
  Bot,
  Copy
} from 'lucide-react';
import { DeployBravoPreview } from '../animations/DeployBravoPreview';
import { FrontOfficePreview } from '../animations/FrontOfficePreview';
import { SeamlessSyncPreview } from '../animations/SeamlessSyncPreview';

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

const branchVariants = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } }
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
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.6
  });
  
  useEffect(() => {
    if (isInView && !isActive) {
      onActivate();
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
                        style={{ backgroundColor: `${bravoColors.secondary}20` }}
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

const StepVisualizer = ({ activeStep }: { activeStep: number }) => {
  const PreviewComponent = () => {
    switch(activeStep) {
      case 0:
        return <DeployBravoPreview />;
      case 1:
        return <FrontOfficePreview />;
      case 2:
        return <SeamlessSyncPreview />;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-full min-h-[400px] flex items-center justify-center">
      <motion.div 
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <PreviewComponent />
      </motion.div>
    </div>
  );
};

export const HowBravoWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const intervalRef = useRef<number | null>(null);
  
  const steps = [
    {
      number: "1️",
      title: "Deploy BRAVO",
      description: "Seamlessly integrate with:",
      items: [
        { 
          icon: Phone, 
          text: "SIP & Phone Systems – Twilio, Plivo, Exotel, Telnyx & more." 
        },
        { 
          icon: Copy, 
          text: "Patient Platforms – Elation, OhMD, Care Patron, SimplePractice & others." 
        },
        { 
          icon: Database, 
          text: "EHR & PMS Integration – Auto-sync for real-time workflow automation." 
        }
      ]
    },
    {
      number: "2️",
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
      number: "3️",
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
    const handleScroll = () => {
      if (!isInView) return;
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      const stepElements = stepRefs.current.filter(Boolean);
      if (stepElements.length === 0) return;
      
      let maxVisibleIndex = 0;
      let maxVisibleArea = 0;
      const windowHeight = window.innerHeight;
      
      stepElements.forEach((stepEl, index) => {
        if (!stepEl) return;
        
        const rect = stepEl.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibleAreaRatio = visibleHeight / rect.height;
        
        const midpoint = (rect.top + rect.bottom) / 2;
        const centerDistance = Math.abs(midpoint - (windowHeight / 2));
        const centralityFactor = 1 - (centerDistance / (windowHeight / 2));
        
        const weightedVisibility = visibleAreaRatio * centralityFactor;
        
        if (weightedVisibility > maxVisibleArea) {
          maxVisibleArea = weightedVisibility;
          maxVisibleIndex = index;
        }
      });
      
      if (maxVisibleArea > 0.3 && maxVisibleIndex !== activeStep) {
        setActiveStep(maxVisibleIndex);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView, activeStep]);
  
  useEffect(() => {
    if (isInView) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      const id = window.setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 8000);
      
      intervalRef.current = id;
      
      let scrollTimeout: number | null = null;
      const handleScrollEnd = () => {
        if (scrollTimeout) {
          window.clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = window.setTimeout(() => {
          if (!intervalRef.current) {
            const newId = window.setInterval(() => {
              setActiveStep((prev) => (prev + 1) % steps.length);
            }, 8000);
            intervalRef.current = newId;
          }
        }, 2000);
      };
      
      window.addEventListener('scroll', handleScrollEnd, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScrollEnd);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        if (scrollTimeout) {
          window.clearTimeout(scrollTimeout);
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
  
  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, steps.length);
  }, [steps.length]);
  
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
              className="text-4xl md:text-5xl font-bold tracking-tight mb-2 no-underline text-black"
              colors={{ first: "#143151", second: "#387E89" }}
            />
          </motion.div>
          <p className="text-lg text-black opacity-80">
            Discover how BRAVO transforms your front office workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepRefs.current[index] = el}
                className="scroll-mt-24"
              >
                <StepItem
                  index={index}
                  title={step.title}
                  description={step.description}
                  items={step.items}
                  isActive={activeStep === index}
                  onActivate={() => handleActivateStep(index)}
                  stepNumber={step.number}
                />
              </div>
            ))}
          </div>
          
          <div className="hidden md:block sticky top-24 self-start">
            <AnimatePresence mode="wait">
              <StepVisualizer activeStep={activeStep} />
            </AnimatePresence>
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
