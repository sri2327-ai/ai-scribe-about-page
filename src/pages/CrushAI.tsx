
import React, { lazy, Suspense } from "react";
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

// Lazy load non-critical components
const EhrIntegrationSection = lazy(() => import("@/components/crush-ai/EhrIntegrationSection").then(module => ({ default: module.EhrIntegrationSection })));
const HowItWorksSection = lazy(() => import("@/components/crush-ai/HowItWorksSection").then(module => ({ default: module.HowItWorksSection })));
const CompetitionSection = lazy(() => import("@/components/crush-ai/CompetitionSection").then(module => ({ default: module.CompetitionSection })));
const WorkflowAutomationSection = lazy(() => import("@/components/crush-ai/WorkflowAutomationSection").then(module => ({ default: module.WorkflowAutomationSection })));
const ClinicalWorkflowSection = lazy(() => import("@/components/crush-ai/ClinicalWorkflowSection").then(module => ({ default: module.ClinicalWorkflowSection })));
const ClinicianTestimonialsSection = lazy(() => import("@/components/crush-ai/ClinicianTestimonialsSection").then(module => ({ default: module.ClinicianTestimonialsSection })));
const ROICalculatorSection = lazy(() => import("@/components/crush-ai/ROICalculatorSection").then(module => ({ default: module.ROICalculatorSection })));
const EHRBeamsBackground = lazy(() => import("@/components/crush-ai/EHRBeamsBackground").then(module => ({ default: module.EHRBeamsBackground })));

// Loading placeholder
const SectionLoader = () => (
  <Box sx={{ py: 8, display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
    <div className="animate-pulse flex space-x-4">
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
);

// Optimized ripple styles with will-change property for better GPU handling
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
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(240, 98, 146, 0.3)'
    }
  },
  '.cta-text': {
    color: `${crushAIColors.text.white} !important`,
    textShadow: '0 2px 8px rgba(0,0,0,0.5) !important'
  },
  '.rippleBackground': {
    willChange: 'transform',
    contain: 'strict',
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    zIndex: 0,
    pointerEvents: 'none',
  },
  '.ripple': {
    willChange: 'opacity, transform',
    containIntrinsicSize: '300px 300px',
  }
};

// Optimized IntersectionObserver based component loader
const LazyLoadSection = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  return (
    <div ref={sectionRef}>
      {isVisible ? children : <SectionLoader />}
    </div>
  );
};

const CrushAI = () => {
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
            <div className="ripple bg-white/10"></div>
            <div className="ripple bg-white/10"></div>
            <div className="ripple bg-white/10"></div>
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
              <div className="ripple bg-[#046f90]/30"></div>
              <div className="ripple bg-[#046f90]/20"></div>
              <div className="ripple bg-[#046f90]/10"></div>
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
            <div className="ripple bg-white/10"></div>
            <div className="ripple bg-white/10"></div>
            <div className="ripple bg-white/10"></div>
          </div>
          <Suspense fallback={<SectionLoader />}>
            <EHRBeamsBackground>
              <CompetitionSection />
            </EHRBeamsBackground>
          </Suspense>
        </Box>
      </LazyLoadSection>
      
      <TestimonialGenerateSection />
      
      <LazyLoadSection>
        <Box sx={{ bgcolor: crushAIColors.background.white }}>
          <Suspense fallback={<SectionLoader />}>
            <ClinicalWorkflowSection />
          </Suspense>
        </Box>
      </LazyLoadSection>
      
      <LazyLoadSection>
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
    </Box>
  );
};

export default CrushAI;
