
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
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);
  const interactionTimeout = useRef<NodeJS.Timeout | null>(null);
  const scrollY = useRef(0);
  
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
  
  // Setup intersection observer for section with improved thresholds
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        // Reset completed steps when section comes into view again
        if (entry.isIntersecting && completedSteps.length === steps.length) {
          setCompletedSteps([]);
        }
      },
      // Improved threshold configuration for better detection
      { 
        threshold: [0.05, 0.1, 0.2, 0.3, 0.4], 
        rootMargin: '0px 0px -10% 0px' 
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [completedSteps.length, steps.length]);
  
  // Enhanced scroll detection with optimized performance
  const calculateVisibility = useCallback(() => {
    if (!scrollListenerActive.current || !isInView) return;
    
    const stepElements = stepRefs.current.filter(Boolean);
    if (stepElements.length === 0) return;
    
    // Get current scroll position for scroll direction detection
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > scrollY.current;
    scrollY.current = currentScrollY;
    
    // Get viewport dimensions
    const viewportHeight = window.innerHeight;
    const viewportMiddle = viewportHeight / 2;
    
    // Enhanced algorithm with weights for different factors
    let bestStepIndex = activeStep;
    let bestScore = -1;
    
    stepElements.forEach((el, idx) => {
      if (!el) return;
      
      const rect = el.getBoundingClientRect();
      
      // Calculate element's position relative to viewport
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;
      const elementMiddle = (elementTop + elementBottom) / 2;
      
      // Skip if completely out of view
      if (elementBottom <= 0 || elementTop >= viewportHeight) return;
      
      // Calculate visibility metrics
      const visibleTop = Math.max(0, elementTop);
      const visibleBottom = Math.min(viewportHeight, elementBottom);
      const visibleHeight = visibleBottom - visibleTop;
      const visibilityRatio = visibleHeight / elementHeight;
      
      // Calculate center alignment (how close is element to screen center)
      const distanceFromCenter = Math.abs(elementMiddle - viewportMiddle);
      const maxDistance = viewportHeight / 2;
      const centerAlignment = 1 - (distanceFromCenter / maxDistance);
      
      // Calculate position bias (prefer elements in upper part of screen when scrolling down)
      // and lower part when scrolling up
      const positionBias = scrollingDown 
        ? 1 - (elementMiddle / viewportHeight) 
        : elementMiddle / viewportHeight;
      
      // Combined score with optimized weights for different devices
      const visibilityWeight = isMobile ? 0.4 : 0.35;
      const centerWeight = isMobile ? 0.35 : 0.4;
      const biasWeight = isMobile ? 0.25 : 0.25;
      
      const score = (visibilityRatio * visibilityWeight) + 
                    (centerAlignment * centerWeight) + 
                    (positionBias * biasWeight);
      
      // Choose the step with the best score
      if (score > bestScore) {
        bestScore = score;
        bestStepIndex = idx;
      }
    });
    
    // Determine if score is high enough to trigger change
    // Higher threshold makes changes more deliberate
    const threshold = isMobile ? 0.5 : 0.6;
    
    if (bestScore > threshold && bestStepIndex !== activeStep) {
      // Add previous step to completed steps
      if (bestStepIndex > activeStep) {
        setCompletedSteps(prev => {
          if (!prev.includes(activeStep)) {
            return [...prev, activeStep];
          }
          return prev;
        });
      }
      
      setActiveStep(bestStepIndex);
    }
  }, [activeStep, isMobile, isInView]);
  
  // Optimized scroll handler with improved debouncing
  useEffect(() => {
    if (!isInView) return;
    
    // Clear any existing timeouts when scroll handler is set up
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    const handleScroll = () => {
      // Cancel any pending calculations
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      
      // Skip rapid scroll events to prevent too many calculations
      const scrollThrottle = isMobile ? 100 : 50; // ms
      if (timeSinceLastScroll < scrollThrottle) {
        // Schedule a check after throttle time instead of skipping completely
        scrollTimeout.current = setTimeout(() => {
          lastScrollTime.current = Date.now();
          window.requestAnimationFrame(calculateVisibility);
        }, scrollThrottle);
        return;
      }
      
      lastScrollTime.current = now;
      
      // Use requestAnimationFrame for smoother performance
      window.requestAnimationFrame(calculateVisibility);
      
      // Schedule another check after scroll has likely stopped
      // This helps catch the final position
      scrollTimeout.current = setTimeout(() => {
        window.requestAnimationFrame(calculateVisibility);
      }, 100);
    };

    // Handle window resize which can change element positions
    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      
      resizeTimeout.current = setTimeout(() => {
        window.requestAnimationFrame(calculateVisibility);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial calculation with slight delay to ensure accurate positions
    setTimeout(() => calculateVisibility(), 200);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      if (interactionTimeout.current) {
        clearTimeout(interactionTimeout.current);
      }
    };
  }, [calculateVisibility, isInView, isMobile]);
  
  // Improved manual step activation with smooth scrolling
  const handleActivateStep = useCallback((index) => {
    // Record user interaction and prevent auto-advance
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
    
    // Enhanced scroll with better positioning and smoothness
    if (stepRefs.current[index]) {
      const element = stepRefs.current[index];
      if (!element) return;
      
      const elementRect = element.getBoundingClientRect();
      
      // Calculate optimal scroll position based on device type
      // For mobile: position the step near the top of the viewport
      // For desktop: position the step more centered
      const viewportHeight = window.innerHeight;
      const optimalPosition = isMobile 
        ? viewportHeight * 0.15  // 15% from the top on mobile
        : viewportHeight * 0.25; // 25% from the top on desktop
      
      const targetScrollY = window.scrollY + elementRect.top - optimalPosition;
      
      // Use better scrolling behavior with smoother animation
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
      
      // Adaptive re-enable timing based on distance scrolled
      // Further scrolls need more time to complete
      const scrollDistance = Math.abs(targetScrollY - window.scrollY);
      const baseDelay = isMobile ? 800 : 600;
      const additionalDelay = Math.min(scrollDistance / 4, 600); // Max 600ms additional
      const reEnableDelay = baseDelay + additionalDelay;
      
      // Re-enable scroll listener after animation completes
      if (interactionTimeout.current) {
        clearTimeout(interactionTimeout.current);
      }
      
      interactionTimeout.current = setTimeout(() => {
        scrollListenerActive.current = true;
        // Force a recalculation once scrolling is complete to ensure sync
        calculateVisibility();
      }, reEnableDelay);
    }
  }, [activeStep, isMobile, calculateVisibility]);
  
  // Optimized auto-advance with improved UX
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    
    // Only auto-advance when section is in view, user hasn't interacted,
    // completed steps is empty, and we're not on mobile
    if (isInView && !hasUserInteracted && completedSteps.length === 0 && !isMobile) {
      timer = setTimeout(() => {
        // Auto-advance to next step
        if (activeStep < steps.length - 1) {
          handleActivateStep(activeStep + 1);
        }
      }, 8000); // 8-second delay before auto-advancing
    }
    
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
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
