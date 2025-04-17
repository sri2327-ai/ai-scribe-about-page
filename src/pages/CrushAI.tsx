
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

// Add custom styles to enforce correct colors across components
const globalStyles = {
  // Ensure workflow animation uses correct colors
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
  // Ensure buttons have the correct background
  '.demo-button': {
    background: `linear-gradient(90deg, #046f90, #f06292) !important`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(240, 98, 146, 0.3)'
    }
  },
  // Ensure call-to-action text is visible
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
      
      {/* TrustedBySection with updated gradient background */}
      <TrustedBySection />
      
      {/* EHR Integration section without ripple effect */}
      <Box sx={{ bgcolor: crushAIColors.background.gradient, position: 'relative' }}>
        <EhrIntegrationSection />
      </Box>

      {/* ClinicianTestimonialsSection in its original form */}
      <ClinicianTestimonialsSection />

      {/* How It Works section with gradient background */}
      <GradientSection 
        variant="linear"
        intensity="medium"
        colors={[crushAIColors.background.gradient.split(',')[0].split('(')[1], crushAIColors.background.gradient.split(',')[1].split(')')[0]]}
      >
        <HowItWorksSection />
      </GradientSection>

      {/* Competition Section without ripple effect */}
      <Box sx={{ bgcolor: crushAIColors.background.white, position: 'relative' }}>
        <CompetitionSection />
      </Box>
      
      <TestimonialGenerateSection />
      
      {/* Clinical Workflow section without ripple effect */}
      <Box sx={{ bgcolor: crushAIColors.background.gradient, position: 'relative' }}>
        <ClinicalWorkflowSection />
      </Box>
      
      {/* Call to Action section without ripple effect */}
      <Box 
        sx={{
          background: crushAIColors.background.gradient,
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
              color: crushAIColors.text.primary,
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
      
      <WorkflowAutomationSection />
      
      {/* ROI Calculator section with white background */}
      <Box sx={{ bgcolor: '#FFFFFF' }}>
        <ROICalculatorSection />
      </Box>
    </Box>
  );
};

export default CrushAI;
