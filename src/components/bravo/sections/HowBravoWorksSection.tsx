
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { WaveBackground } from "@/components/ui/wave-background";
import { GradientTracing } from "@/components/ui/gradient-tracing";
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

// Animation variants for steps
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
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  // FIX: Adding proper dependency array to prevent infinite loop
  useEffect(() => {
    if (isInView && !isActive) {
      // Only call onActivate if this is the first time it's in view
      const timer = setTimeout(() => {
        onActivate();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]); // Remove onActivate and isActive from dependency array

  return (
    <div 
      ref={ref}
      className={`relative px-6 py-8 rounded-xl transition-all duration-300 cursor-pointer ${
        isActive ? "bg-white/10 shadow-lg" : "hover:bg-white/5"
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
  const svgRef = useRef<SVGSVGElement>(null);
  
  const icons = [
    <Plug key="plug" size={32} style={{ color: bravoColors.secondary }} />,
    <Bot key="bot" size={32} style={{ color: bravoColors.secondary }} />,
    <Database key="database" size={32} style={{ color: bravoColors.secondary }} />
  ];
  
  const secondaryIcons = [
    [<Phone key="phone" size={24} />, <Copy key="copy" size={24} />, <MessageSquare key="message" size={24} />],
    [<Calendar key="calendar" size={24} />, <ClipboardCheck key="clipboard" size={24} />, <Bell key="bell" size={24} />],
    [<FileCheck key="filecheck" size={24} />, <CreditCard key="credit" size={24} />, <UserCheck key="usercheck" size={24} />]
  ];
  
  return (
    <div className="relative h-full min-h-[400px] flex items-center justify-center">
      <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 500 500" className="absolute inset-0">
        <motion.path
          d="M250,100 C150,150 150,250 250,300 C350,350 350,400 250,450"
          fill="none"
          stroke={`${bravoColors.tertiary}30`}
          strokeWidth="4"
          strokeDasharray="8 8"
          variants={branchVariants}
          initial="initial"
          animate="animate"
        />
      </svg>
      
      {[0, 1, 2].map((step) => (
        <motion.div
          key={step}
          className={`absolute flex items-center justify-center w-20 h-20 rounded-full ${
            activeStep === step ? 'z-10' : 'z-0'
          }`}
          style={{ 
            top: step === 0 ? '10%' : step === 1 ? '45%' : '75%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: activeStep === step 
              ? `${bravoColors.secondary}20` 
              : `${bravoColors.secondary}10`,
            boxShadow: activeStep === step 
              ? `0 0 20px ${bravoColors.secondary}40` 
              : 'none',
            border: `2px solid ${activeStep === step ? bravoColors.secondary : `${bravoColors.secondary}30`}`
          }}
          initial={false}
          animate={{
            scale: activeStep === step ? 1.1 : 0.9,
            opacity: activeStep === step ? 1 : 0.7,
            transition: { duration: 0.5 }
          }}
        >
          {icons[step]}
          
          <AnimatePresence mode="wait">
            {activeStep === step && (
              <>
                {secondaryIcons[step].map((icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shadow-lg"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ 
                      opacity: 1, 
                      x: [(i-1) * 60, (i-1) * 60 + (Math.random() * 10 - 5)], 
                      y: [0, Math.random() * 10 - 5],
                      transition: { 
                        delay: i * 0.2, 
                        opacity: { duration: 0.3 },
                        x: { duration: 4, repeat: Infinity, repeatType: 'reverse' },
                        y: { duration: 3, repeat: Infinity, repeatType: 'reverse' }
                      } 
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    style={{
                      left: `calc(50% + ${(i-1) * 60}px)`,
                      borderColor: bravoColors.tertiary,
                      color: bravoColors.secondary
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      
      <AnimatePresence>
        {activeStep === 1 && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="w-72 h-72 rounded-full" 
              style={{ 
                background: `radial-gradient(circle, ${bravoColors.tertiary}30 0%, transparent 70%)`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
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
  
  // Fix: Managing animation interval with proper cleanup
  useEffect(() => {
    // Only set up auto-advancing when the section is in view
    if (isInView) {
      // Clear any existing intervals first
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      // Set up a new interval
      const id = window.setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 8000);
      
      intervalRef.current = id;
      
      // Clean up function
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }
    // Clean up when not in view
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isInView, steps.length]);
  
  // Safe handler for step activation
  const handleActivateStep = (index: number) => {
    // Clear any auto-advance interval when manually changing steps
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setActiveStep(index);
  };
  
  return (
    <WaveBackground 
      intensity="light" 
      baseColor={bravoColors.background.light} 
      height="auto"
      className="py-20"
    >
      <div className="container mx-auto" ref={sectionRef}>
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
              colors={{ first: bravoColors.primary, second: bravoColors.secondary }}
            />
          </motion.div>
          
          <motion.h3 
            className="text-xl md:text-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: bravoColors.text.secondary }}
          >
            AI-Powered Front Office Automation
          </motion.h3>
          
          <motion.div
            className="mx-auto mt-6 w-24"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <GradientTracing 
              width={100} 
              height={4} 
              baseColor={`${bravoColors.tertiary}20`}
              gradientColors={[bravoColors.tertiary, bravoColors.secondary, bravoColors.primary]}
              strokeWidth={4}
              path={`M0,2 L100,2`}
            />
          </motion.div>
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
          
          <div className="hidden md:block h-full">
            <StepVisualizer activeStep={activeStep} />
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p 
            className="text-2xl font-semibold mb-8"
            style={{ color: bravoColors.secondary }}
          >
            Faster Check-Ins. Smarter Scheduling. Effortless Coordination.
          </p>
          
          <motion.button
            className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white shadow-xl inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            REQUEST A DEMO
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </WaveBackground>
  );
};

