
import React, { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { bravoColors } from '@/theme/bravo-theme';
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { 
  ArrowRight, 
  Phone, 
  Copy, 
  Database, 
  Calendar, 
  MessageSquare, 
  UserCheck, 
  ClipboardCheck, 
  Bell, 
  FileText, 
  CreditCard, 
  FileCheck,
  LucideIcon,
  ChevronRight,
  ChevronLeft,
  Check
} from 'lucide-react';
import { DeployBravoPreview } from '../animations/DeployBravoPreview';
import { FrontOfficePreview } from '../animations/FrontOfficePreview';
import { SeamlessSyncPreview } from '../animations/SeamlessSyncPreview';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stepVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const itemVariants = {
  initial: { opacity: 0, x: -5 },
  animate: i => ({ 
    opacity: 1, 
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4 }
  }),
  hover: { scale: 1.01, x: 5 }
};

// Define proper TypeScript interfaces for our components
interface StepIconProps {
  icon: LucideIcon;
  isActive: boolean;
  color: string;
}

// Memoized step icon to prevent rerendering
const StepIcon = memo(({ icon: Icon, isActive, color }: StepIconProps) => (
  <div 
    className="p-2 rounded-full transition-all duration-300"
    style={{ 
      backgroundColor: isActive ? `${color}20` : `${color}10`,
      transform: isActive ? 'scale(1)' : 'scale(0.95)', 
      opacity: isActive ? 1 : 0.7,
    }}
  >
    <Icon size={20} style={{ color }} />
  </div>
));

StepIcon.displayName = 'StepIcon';

interface StepItemProps {
  index: number;
  title: string;
  description: string;
  items: { icon: LucideIcon; text: string; }[];
  isActive: boolean;
  onActivate: () => void;
  stepNumber: string;
  isInView: boolean;
  isCompleted: boolean;
}

// Memoized step item to reduce re-renders
const StepItem = memo(({ 
  index,
  title, 
  description, 
  items, 
  isActive, 
  onActivate,
  stepNumber,
  isInView,
  isCompleted
}: StepItemProps) => {
  return (
    <div 
      className={cn(
        "relative px-4 sm:px-6 py-6 sm:py-8 rounded-xl transition-all duration-300 cursor-pointer",
        isActive ? "bg-gray-50 shadow-lg border border-gray-100" : "hover:bg-gray-50/50"
      )}
      onClick={onActivate}
      role="tab"
      id={`step-tab-${index}`}
      aria-selected={isActive}
      aria-controls={`step-content-${index}`}
      tabIndex={isActive ? 0 : -1}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onActivate();
        }
      }}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.7 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.8 }}
          className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: `${bravoColors.tertiary}15`,
            border: isActive ? `2px solid ${bravoColors.tertiary}` : `1px solid ${bravoColors.tertiary}40`
          }}
        >
          {isCompleted ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-xl"
            >
              <Check className="w-6 h-6" style={{ color: bravoColors.tertiary }} />
            </motion.div>
          ) : (
            <span 
              className="text-base sm:text-xl font-bold" 
              style={{ color: 'black' }}
            >
              {stepNumber}
            </span>
          )}
        </motion.div>
        
        <div className="flex-1">
          <motion.h3 
            className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-black group-hover:text-gray-800 flex items-center" 
            variants={stepVariants}
            initial="initial"
            animate="animate"
          >
            {title}
            {isActive && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="ml-2"
              >
                <ChevronRight size={16} className="text-primary" />
              </motion.span>
            )}
          </motion.h3>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-black" 
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
                className="space-y-2 sm:space-y-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                {items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={i}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg"
                      custom={i}
                      variants={itemVariants}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      whileHover="hover"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center" 
                        style={{ backgroundColor: `${bravoColors.secondary}15` }}
                      >
                        <Icon size={16} className="sm:hidden" style={{ color: 'black' }} />
                        <Icon size={18} className="hidden sm:block" style={{ color: 'black' }} />
                      </div>
                      <p className="flex-1 text-xs sm:text-sm md:text-base text-black">
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
});

StepItem.displayName = 'StepItem';

interface StepVisualizerProps {
  activeStep: number;
}

// Memoized visual component to prevent re-renders
const StepVisualizer = memo(({ activeStep }: StepVisualizerProps) => {
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
    <div 
      className="relative h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
      role="tabpanel"
      id={`step-content-${activeStep}`}
      aria-labelledby={`step-tab-${activeStep}`}
    >
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <PreviewComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

StepVisualizer.displayName = 'StepVisualizer';

// Add proper interface for StepIndicators component
interface StepIndicatorsProps {
  steps: number;
  activeStep: number;
  onStepChange: (index: number) => void;
}

// New component for step indicators with better UX
const StepIndicators = memo(({ steps, activeStep, onStepChange }: StepIndicatorsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8" role="tablist" aria-label="Step indicators">
      {Array.from({ length: steps }).map((_, index) => (
        <button
          key={index}
          onClick={() => onStepChange(index)}
          className={cn(
            "flex items-center gap-2 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-all duration-300",
            activeStep === index 
              ? "bg-gradient-to-r from-[#143151] to-[#387E89] text-white shadow-md" 
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          )}
          aria-label={`Go to step ${index + 1}`}
          role="tab"
          aria-selected={activeStep === index}
        >
          <span className="text-sm font-medium">Step {index + 1}</span>
        </button>
      ))}
    </div>
  );
});

StepIndicators.displayName = 'StepIndicators';

export const HowBravoWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const isMobile = useIsMobile();
  
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
  
  // Improved step activation handler with completion marking
  const handleActivateStep = useCallback((index) => {
    // Mark previous steps as completed
    if (index > activeStep) {
      setCompletedSteps(prev => {
        const newCompleted = [...prev];
        for (let i = activeStep; i < index; i++) {
          if (!newCompleted.includes(i)) {
            newCompleted.push(i);
          }
        }
        return newCompleted;
      });
    }
    
    setActiveStep(index);
  }, [activeStep]);

  // Navigate to next step
  const handleNextStep = useCallback(() => {
    if (activeStep < steps.length - 1) {
      handleActivateStep(activeStep + 1);
    }
  }, [activeStep, steps.length, handleActivateStep]);

  // Navigate to previous step
  const handlePrevStep = useCallback(() => {
    if (activeStep > 0) {
      handleActivateStep(activeStep - 1);
    }
  }, [activeStep, handleActivateStep]);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <SparklesTextAdvanced 
              text="How BRAVO Works" 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 no-underline text-black"
              colors={{ first: "#143151", second: "#387E89" }}
            />
          </motion.div>
          <p className="text-base sm:text-lg text-black opacity-80 max-w-2xl mx-auto">
            Discover how BRAVO transforms your front office workflow
          </p>
        </div>
        
        {/* Prominent Step Indicators for all screen sizes */}
        <StepIndicators 
          steps={steps.length}
          activeStep={activeStep}
          onStepChange={handleActivateStep}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start mt-6 sm:mt-8">
          {/* Left column with steps - improved accessibility */}
          <div 
            className="space-y-3 sm:space-y-4 md:space-y-6" 
            role="tablist" 
            aria-label="BRAVO workflow steps"
          >
            {steps.map((step, index) => (
              <div 
                key={index}
                className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-300 rounded-xl"
              >
                <StepItem
                  index={index}
                  title={step.title}
                  description={step.description}
                  items={step.items}
                  isActive={activeStep === index}
                  onActivate={() => handleActivateStep(index)}
                  stepNumber={step.number}
                  isInView={true}
                  isCompleted={completedSteps.includes(index)}
                />
              </div>
            ))}
          </div>
          
          {/* Right column - preview area */}
          <div className="lg:sticky lg:top-24 self-start">
            <StepVisualizer activeStep={activeStep} />
            
            {/* Navigation controls - improved visibility and accessibility */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                className="px-4 py-2"
                disabled={activeStep === 0}
                onClick={handlePrevStep}
                aria-label="Previous step"
              >
                <ChevronLeft size={16} className="mr-1" />
                Previous
              </Button>
              
              <Button
                variant="outline"
                className="px-4 py-2"
                disabled={activeStep === steps.length - 1}
                onClick={handleNextStep}
                aria-label="Next step"
              >
                Next
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-10 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 text-black">
            Faster Check-Ins. Smarter Scheduling. Effortless Coordination.
          </p>
          
          <Button 
            size="lg"
            className="px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg inline-flex items-center hover:shadow-xl transition-all duration-300"
          >
            REQUEST A DEMO
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
