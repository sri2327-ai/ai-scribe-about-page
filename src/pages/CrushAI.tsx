import React from "react";
import { Box } from "@mui/material";
import { HeroSection } from "@/components/crush-ai/HeroSection";
import { EhrIntegrationSection } from "@/components/crush-ai/EhrIntegrationSection";
import { TrustedBySection } from "@/components/crush-ai/TrustedBySection";
import { HowItWorksSection } from "@/components/crush-ai/HowItWorksSection";
import { CompetitionSection } from "@/components/crush-ai/CompetitionSection";
import { WorkflowAutomationSection } from "@/components/crush-ai/WorkflowAutomationSection";
import { ClinicalWorkflowSection } from "@/components/crush-ai/ClinicalWorkflowSection";
import { ClinicianTestimonialsSection } from "@/components/crush-ai/ClinicianTestimonialsSection";
import { ROICalculatorSection } from "@/components/crush-ai/ROICalculatorSection";
import { TestimonialGenerateSection } from "@/components/crush-ai/TestimonialGenerateSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Container, Typography } from "@mui/material";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { GradientSection } from "@/components/ui/gradient-section";
import { WaveBackground } from "@/components/ui/wave-background";
import { EHRBeamsBackground } from "@/components/crush-ai/EHRBeamsBackground";
import { PricingHeroSection } from "@/components/crush-ai/PricingHeroSection";

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
  }
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
      <HeroSection />
      
      <TrustedBySection />
      
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
        <EHRBeamsBackground>
          <EhrIntegrationSection />
        </EHRBeamsBackground>
      </Box>

      <ClinicianTestimonialsSection />

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
          <HowItWorksSection />
        </Box>
      </GradientSection>

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
        <EHRBeamsBackground>
          <CompetitionSection />
        </EHRBeamsBackground>
      </Box>
      
      <TestimonialGenerateSection />
      
      <Box sx={{ bgcolor: crushAIColors.background.white }}>
        <ClinicalWorkflowSection />
      </Box>
      
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
      </Box>
      
      <WorkflowAutomationSection />
      
      <PricingHeroSection />
      
      <Box sx={{ bgcolor: 'transparent', py: { xs: 6, md: 8 } }}>
        <ROICalculatorSection />
      </Box>
    </Box>
  );
};

export default CrushAI;
