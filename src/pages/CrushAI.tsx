
import React, { lazy, Suspense, useState, useEffect, memo, useCallback } from "react";
import { Box } from "@mui/material";
import { HeroSection } from "@/components/crush-ai/HeroSection";
import { TrustedBySection } from "@/components/crush-ai/TrustedBySection";
import { TestimonialGenerateSection } from "@/components/crush-ai/TestimonialGenerateSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Container, Typography } from "@mui/material";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { GradientSection } from "@/components/ui/gradient-section";
import { WaveBackground } from "@/components/ui/wave-background";
import { PricingHeroSection } from "@/components/crush-ai/PricingHeroSection";
import { BeforeAfterNoteComparison } from "@/components/crush-ai/BeforeAfterNoteComparison";
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup";
import { useExitIntent } from "@/hooks/useExitIntent";

// Use dynamic imports with prefetch to improve loading performance
const EhrIntegrationSection = lazy(() => {
  const module = import("@/components/crush-ai/EhrIntegrationSection").then(module => ({ default: module.EhrIntegrationSection }));
  return module;
});

const HowItWorksSection = lazy(() => {
  const module = import("@/components/crush-ai/HowItWorksSection").then(module => ({ default: module.HowItWorksSection }));
  return module;
});

const CompetitionSection = lazy(() => {
  const module = import("@/components/crush-ai/CompetitionSection").then(module => ({ default: module.CompetitionSection }));
  return module;
});

const WorkflowAutomationSection = lazy(() => {
  const module = import("@/components/crush-ai/WorkflowAutomationSection").then(module => ({ default: module.WorkflowAutomationSection }));
  return module;
});

const ClinicalWorkflowSection = lazy(() => {
  const module = import("@/components/crush-ai/ClinicalWorkflowSection").then(module => ({ default: module.ClinicalWorkflowSection }));
  return module;
});

const ClinicianTestimonialsSection = lazy(() => {
  const module = import("@/components/crush-ai/ClinicianTestimonialsSection").then(module => ({ default: module.ClinicianTestimonialsSection }));
  return module;
});

const ROICalculatorSection = lazy(() => {
  const module = import("@/components/crush-ai/ROICalculatorSection").then(module => ({ default: module.ROICalculatorSection }));
  return module;
});

const EHRBeamsBackground = lazy(() => {
  const module = import("@/components/crush-ai/EHRBeamsBackground").then(module => ({ default: module.EHRBeamsBackground }));
  return module;
});

// Optimized loading placeholder with reduced animation
const SectionLoader = memo(() => (
  <Box sx={{ 
    py: 8, 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    minHeight: "300px",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  }}>
    <div className="flex space-x-4 w-full max-w-md px-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-4 bg-gray-200 rounded col-span-2"></div>
            <div className="h-4 bg-gray-200 rounded col-span-1"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  </Box>
));

SectionLoader.displayName = 'SectionLoader';

// Optimized styles with reduced paint operations
const globalStyles = {
  '.animated-workflow': {
    color: crushAIColors.text.primary, 
    '& svg, & path, & g': {
      color: `${crushAIColors.icons.primary} !important`,
      fill: `${crushAIColors.icons.primary} !important`,
      stroke: `${crushAIColors.icons.primary} !important`,
    },
    '& text': {
      fill: `${crushAIColors.text.primary} !important`,
    }
  },
  '.demo-button': {
    background: `linear-gradient(90deg, #046f90, #f06292) !important`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    willChange: 'transform',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(240, 98, 146, 0.3)'
    }
  },
  '.cta-text': {
    color: `${crushAIColors.text.white} !important`,
    textShadow: '0 2px 8px rgba(0,0,0,0.5) !important'
  }
};

// Define proper interfaces for our components
interface LazyLoadSectionProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

// Enhanced IntersectionObserver component with better performance characteristics
const LazyLoadSection = memo(({ children, threshold = 0.1, rootMargin = "200px 0px" }: LazyLoadSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const sectionRef = React.useRef(null);

  // Ensure client-side only features
  useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!isClient) return;
    
    const currentRef = sectionRef.current;
    if (!currentRef || hasLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasLoaded) {
            setHasLoaded(true);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, hasLoaded, isClient]);

  return (
    <div ref={sectionRef} className="will-change-auto">
      {(isVisible || hasLoaded) ? children : <SectionLoader />}
    </div>
  );
});

LazyLoadSection.displayName = 'LazyLoadSection';

// Define a proper interface for CTASection
interface CTASectionProps {
  EHRBeamsBackground: React.ComponentType<{children: React.ReactNode}>;
}

// Memoized CTA section to prevent re-renders
const CTASection = memo(({ EHRBeamsBackground }: CTASectionProps) => (
  <Box 
    sx={{ 
      position: "relative",
      zIndex: 1,
      bgcolor: crushAIColors.primaryFlat,
      overflow: "hidden"
    }}
  >
    <div className="rippleBackground">
      <div className="ripple bg-white/10"></div>
      <div className="ripple bg-white/10"></div>
      <div className="ripple bg-white/10"></div>
    </div>
    <Suspense fallback={<SectionLoader />}>
      <EHRBeamsBackground>
        <Box 
          sx={{
            py: { xs: 8, md: 10 }, 
            textAlign: "center",
            position: "relative",
            zIndex: 1
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
                fontWeight: 700,
                mb: 3,
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 1.2
              }}
            >
              CRUSH Streamlines Clinical Workflows. Schedule a Demo to Experience Its Full Value Firsthand.
            </Typography>
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg shadow-xl text-white transition-all duration-300 hover:translate-y-[-2px] demo-button"
            >
              <ArrowRight size={16} className="mr-2" />
              BOOK A DEMO
            </Button>
          </Container>
        </Box>
      </EHRBeamsBackground>
    </Suspense>
  </Box>
));

CTASection.displayName = 'CTASection';

const CrushAI = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Ensure client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { shouldShow, markAsShown } = useExitIntent({
    threshold: 75,
    delay: 3000,
    inactivityTimeout: 30000,
    enabled: isClient // Only enable when client-side
  });

  const handleBookDemo = useCallback(() => {
    markAsShown();
    window.open('/contact', '_blank');
  }, [markAsShown]);

  const handleClosePopup = useCallback(() => {
    markAsShown();
  }, [markAsShown]);

  // Preload critical components only on client-side
  useEffect(() => {
    if (!isClient) return;
    
    const preloadComponents = async () => {
      try {
        // Preload key components that will be visible soon
        const imports = [
          import("@/components/crush-ai/EhrIntegrationSection"),
          import("@/components/crush-ai/HowItWorksSection"),
        ];
        await Promise.all(imports);
      } catch (err) {
        console.error("Error preloading components:", err);
      }
    };
    
    preloadComponents();
  }, [isClient]);

  // Only initialize PerformanceObserver on client-side
  useEffect(() => {
    if (!isClient || typeof window === 'undefined') return;

    // PerformanceObserver to monitor page performance
    if ('PerformanceObserver' in window) {
      try {
        const perfObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'longtask' && entry.duration > 50) {
              console.log('Long task detected:', entry.duration + 'ms');
            }
          });
        });
        perfObserver.observe({ entryTypes: ['longtask'] });

        return () => {
          perfObserver.disconnect();
        };
      } catch (e) {
        console.log('PerformanceObserver not supported');
      }
    }
  }, [isClient]);

  // Show loading state during hydration
  if (!isClient) {
    return (
      <Box 
        sx={{ 
          bgcolor: crushAIColors.background.white, 
          color: crushAIColors.text.primary,
          overflow: 'hidden',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <SectionLoader />
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        bgcolor: crushAIColors.background.white, 
        color: crushAIColors.text.primary,
        overflow: 'hidden',
        position: 'relative',
        ...globalStyles
      }}
    >
      {/* Critical components loaded eagerly */}
      <HeroSection />
      
      <TrustedBySection />
      
      {/* Optimize the heavy sections with lazy loading */}
      <LazyLoadSection>
        <Box 
          sx={{ 
            bgcolor: crushAIColors.primaryFlat,
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div className="rippleBackground">
            <div className="ripple"></div>
            <div className="ripple"></div>
            <div className="ripple"></div>
          </div>
          <Suspense fallback={<SectionLoader />}>
            <EHRBeamsBackground>
              <EhrIntegrationSection />
            </EHRBeamsBackground>
          </Suspense>
        </Box>
      </LazyLoadSection>

      <LazyLoadSection>
        <Suspense fallback={<SectionLoader />}>
          <ClinicianTestimonialsSection />
        </Suspense>
      </LazyLoadSection>

      <LazyLoadSection>
        <GradientSection 
          variant="linear"
          intensity="medium"
          colors={[crushAIColors.background.gradient.split(',')[0].split('(')[1], crushAIColors.background.gradient.split(',')[1].split(')')[0]]}
        >
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <div className="rippleBackground">
              <div className="ripple"></div>
              <div className="ripple"></div>
              <div className="ripple"></div>
            </div>
            <Suspense fallback={<SectionLoader />}>
              <HowItWorksSection />
            </Suspense>
          </Box>
        </GradientSection>
      </LazyLoadSection>

      <LazyLoadSection>
        <Box 
          sx={{ 
            bgcolor: crushAIColors.primaryFlat,
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div className="rippleBackground">
            <div className="ripple"></div>
            <div className="ripple"></div>
            <div className="ripple"></div>
          </div>
          <Suspense fallback={<SectionLoader />}>
            <EHRBeamsBackground>
              <CompetitionSection />
            </EHRBeamsBackground>
          </Suspense>
        </Box>
      </LazyLoadSection>
      
      <TestimonialGenerateSection />
      
      {/* New section: Why CRUSH Crushes the Competition */}
      <LazyLoadSection>
        <Suspense fallback={<SectionLoader />}>
          <BeforeAfterNoteComparison />
        </Suspense>
      </LazyLoadSection>
      
      <LazyLoadSection>
        <Box sx={{ bgcolor: crushAIColors.background.white }}>
          <Suspense fallback={<SectionLoader />}>
            <ClinicalWorkflowSection />
          </Suspense>
        </Box>
      </LazyLoadSection>
      
      <LazyLoadSection>
        <CTASection EHRBeamsBackground={EHRBeamsBackground} />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <Suspense fallback={<SectionLoader />}>
          <WorkflowAutomationSection />
        </Suspense>
      </LazyLoadSection>
      
      <LazyLoadSection>
        <Suspense fallback={<SectionLoader />}>
          <ROICalculatorSection />
        </Suspense>
      </LazyLoadSection>
      
      <LazyLoadSection>
        <Suspense fallback={<SectionLoader />}>
          <PricingHeroSection />
        </Suspense>
      </LazyLoadSection>
      
      {/* Exit Intent Popup - only render on client */}
      {isClient && (
        <ExitIntentPopup
          isOpen={shouldShow}
          onClose={handleClosePopup}
          onBookDemo={handleBookDemo}
          variant="crush"
        />
      )}
    </Box>
  );
};

export default CrushAI;
