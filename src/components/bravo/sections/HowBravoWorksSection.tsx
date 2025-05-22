
import React, { useState, useRef, useEffect, memo, useCallback } from 'react';
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
  ChevronLeft
} from 'lucide-react';
import { DeployBravoPreview } from '../animations/DeployBravoPreview';
import { FrontOfficePreview } from '../animations/FrontOfficePreview';
import { SeamlessSyncPreview } from '../animations/SeamlessSyncPreview';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";

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
      className={`relative px-4 sm:px-6 py-6 sm:py-8 rounded-xl transition-all duration-300 md:cursor-pointer ${
        isActive ? "bg-gray-50 shadow-lg border border-gray-100" : "hover:bg-gray-50/50"
      }`}
      onClick={onActivate}
      style={{ scrollMarginTop: '80px' }}
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke={bravoColors.tertiary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
    </div>
  );
});

StepVisualizer.displayName = 'StepVisualizer';

// New component for step indicators
interface StepIndicatorsProps {
  steps: number;
  activeStep: number;
  onStepChange: (index: number) => void;
}

const StepIndicators = memo(({ steps, activeStep, onStepChange }: StepIndicatorsProps) => {
  return (
    <div 
      className="flex justify-center gap-3 mt-6" 
      role="tablist" 
      aria-label="Step indicators"
    >
      {Array.from({ length: steps }).map((_, index) => (
        <button
          key={index}
          onClick={() => onStepChange(index)}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-all duration-300"
          aria-label={`Go to step ${index + 1}`}
          role="tab"
          aria-selected={activeStep === index}
        >
          <div
            className={`transition-all duration-300 ${
              activeStep === index 
                ? 'w-6 sm:w-8 h-2 rounded-full' 
                : 'w-2 h-2 rounded-full hover:bg-gray-400'
            }`}
            style={{
              backgroundColor: activeStep === index 
                ? bravoColors.primary 
                : '#E0E0E0'
            }}
          />
        </button>
      ))}
    </div>
  );
});

StepIndicators.displayName = 'StepIndicators';

export const HowBravoWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollListenerActive = useRef(true);
  const isMobile = useIsMobile();
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const lastScrollTime = useRef(Date.now());
  
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

  // Initialize step refs
  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, steps.length);
  }, [steps.length]);
  
  // Setup intersection observer for section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        // Reset completed steps when section comes into view again
        if (entry.isIntersecting && completedSteps.length === steps.length) {
          setCompletedSteps([]);
        }
      },
      // Increased threshold for better mobile experience
      { threshold: isMobile ? 0.1 : 0.2, rootMargin: '0px 0px -5% 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [completedSteps.length, steps.length, isMobile]);
  
  // Improved scroll detection for mobile and tablets
  const calculateVisibility = useCallback(() => {
    if (!scrollListenerActive.current) return;
    
    const stepElements = stepRefs.current.filter(Boolean);
    if (stepElements.length === 0) return;
    
    // Find most visible element with improved algorithm
    const viewportHeight = window.innerHeight;
    let mostVisibleIndex = activeStep;
    let maxVisibleRatio = 0;
    
    stepElements.forEach((el, idx) => {
      if (!el) return;
      
      const rect = el.getBoundingClientRect();
      const elementHeight = rect.height;
      
      // Calculate visible portion considering element's position in viewport
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(viewportHeight, rect.bottom);
      
      // Skip if not visible
      if (visibleBottom <= visibleTop) return;
      
      const visibleHeight = visibleBottom - visibleTop;
      // For mobile, give more weight to elements that are more visible
      const visibilityRatio = isMobile ? 
        (visibleHeight / elementHeight) * (1.5 - (visibleTop / viewportHeight)) : 
        visibleHeight / elementHeight;
      
      // Center preference - more weight to elements in center of viewport
      const elementMiddle = (rect.top + rect.bottom) / 2;
      const viewportMiddle = viewportHeight / 2;
      const distanceFromCenter = Math.abs(elementMiddle - viewportMiddle) / (viewportHeight / 2);
      const closenessToCenter = 1 - distanceFromCenter;
      
      // Combined score with better mobile optimization
      const score = isMobile ? 
        (visibilityRatio * 0.7) + (closenessToCenter * 0.3) : 
        (visibilityRatio * 0.5) + (closenessToCenter * 0.4);
      
      if (score > maxVisibleRatio) {
        maxVisibleRatio = score;
        mostVisibleIndex = idx;
      }
    });
    
    // Lower threshold for mobile to make it more responsive
    const thresholdValue = isMobile ? 0.3 : 0.4;
    
    // Only update if we have a good visibility threshold and it's different
    if (maxVisibleRatio > thresholdValue && mostVisibleIndex !== activeStep) {
      // Add previous step to completed steps
      if (mostVisibleIndex > activeStep) {
        setCompletedSteps(prev => {
          if (!prev.includes(activeStep)) {
            return [...prev, activeStep];
          }
          return prev;
        });
      }
      
      setActiveStep(mostVisibleIndex);
    }
  }, [activeStep, isMobile]);

  // More responsive scroll handling with improved debouncing for mobile
  useEffect(() => {
    if (!isInView) return;
    
    const handleScroll = () => {
      // Rate limit scroll events more aggressively on mobile
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      
      // More aggressive throttling for mobile to prevent jittery behavior
      if (isMobile && timeSinceLastScroll < 150) return;
      lastScrollTime.current = now;
      
      // Use requestAnimationFrame for smoother handling
      window.requestAnimationFrame(() => {
        calculateVisibility();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    calculateVisibility();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView, calculateVisibility, isMobile]);
  
  // Handle manual step activation with improved scroll behavior for mobile
  const handleActivateStep = useCallback((index) => {
    // Record user interaction
    setHasUserInteracted(true);
    
    // Only proceed if this is a different step
    if (index === activeStep) return;
    
    // Prevent scroll event from changing the active step during animation
    scrollListenerActive.current = false;
    
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
    
    // Scroll to the step if not in view - improved for mobile
    if (stepRefs.current[index]) {
      // Different offset for mobile/tablet/desktop
      const offset = isMobile ? -20 : -80;
      const element = stepRefs.current[index];
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset + offset;
      
      // Use smoother scrolling behavior on mobile
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
      
      // Longer delay for mobile to account for slower scroll animations
      const reEnableDelay = isMobile ? 1200 : 800;
      
      // Re-enable scroll listener after animation completes with a slight delay
      setTimeout(() => {
        scrollListenerActive.current = true;
      }, reEnableDelay);
    }
  }, [activeStep, isMobile]);
  
  // Auto-advance timer for demonstration - improved for mobile
  useEffect(() => {
    let timer;
    
    // Only auto-advance when section is in view, user hasn't interacted, and we're not on mobile
    if (isInView && !hasUserInteracted && completedSteps.length === 0 && !isMobile) {
      timer = setTimeout(() => {
        // Auto-advance to next step
        if (activeStep < steps.length - 1) {
          handleActivateStep(activeStep + 1);
        }
      }, 8000); // 8-second delay before auto-advancing
    }
    
    return () => clearTimeout(timer);
  }, [isInView, activeStep, steps.length, completedSteps.length, handleActivateStep, hasUserInteracted, isMobile]);
  
  // Track view with analytics
  useEffect(() => {
    if (isInView) {
      try {
        // Analytics tracking - uncomment if analytics library is available
        // analytics.track('Section Viewed', { section: 'How BRAVO Works' });
      } catch (e) {
        console.error('Analytics error:', e);
      }
    }
  }, [isInView]);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Left column with steps - improved accessibility */}
          <div 
            className="space-y-3 sm:space-y-4 md:space-y-6" 
            role="tablist" 
            aria-label="BRAVO workflow steps"
          >
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepRefs.current[index] = el}
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
                  isInView={isInView && activeStep === index}
                  isCompleted={completedSteps.includes(index)}
                />
              </div>
            ))}
          </div>
          
          {/* Right column - fixed on desktop view, optimized for mobile */}
          <div className="hidden lg:block sticky top-24 self-start">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <StepVisualizer activeStep={activeStep} />
              </motion.div>
            </AnimatePresence>
            
            {/* Step indicators - improved accessibility */}
            <StepIndicators 
              steps={steps.length}
              activeStep={activeStep}
              onStepChange={handleActivateStep}
            />
            
            {/* Navigation controls */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                className="px-4 py-2"
                disabled={activeStep === 0}
                onClick={() => handleActivateStep(activeStep - 1)}
                aria-label="Previous step"
              >
                <ChevronLeft size={16} className="mr-1" />
                Previous
              </Button>
              
              <Button
                variant="outline"
                className="px-4 py-2"
                disabled={activeStep === steps.length - 1}
                onClick={() => handleActivateStep(activeStep + 1)}
                aria-label="Next step"
              >
                Next
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
          
          {/* Mobile version of visuals - show below each active step */}
          <div className="lg:hidden mt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <StepVisualizer activeStep={activeStep} />
              </motion.div>
            </AnimatePresence>
            
            {/* Mobile step indicators */}
            <StepIndicators 
              steps={steps.length}
              activeStep={activeStep}
              onStepChange={handleActivateStep}
            />
            
            {/* Mobile navigation buttons - improved touch targets */}
            <div className="flex justify-between mt-6 mb-4">
              <Button
                variant="outline"
                size="default"
                className="px-3 py-2 min-w-[100px] text-sm sm:text-base"
                disabled={activeStep === 0}
                onClick={() => handleActivateStep(activeStep - 1)}
                aria-label="Previous step"
              >
                <ChevronLeft size={16} className="mr-1" />
                Previous
              </Button>
              
              <Button
                variant="outline"
                size="default"
                className="px-3 py-2 min-w-[100px] text-sm sm:text-base"
                disabled={activeStep === steps.length - 1}
                onClick={() => handleActivateStep(activeStep + 1)}
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
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
