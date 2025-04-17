
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

const CrushAI = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: crushAIColors.background.white, 
        color: crushAIColors.text.primary,
        overflow: 'hidden', // Prevent horizontal scrolling issues
        position: 'relative' // Better positioning context
      }}
    >
      <HeroSection />
      
      {/* Moved TrustedBySection up, right after HeroSection */}
      <TrustedBySection />
      
      {/* Using the direct component instead of GradientSection for EHR Integration */}
      <EhrIntegrationSection />
      
      <GradientSection 
        variant="radial"
        intensity="light"
        colors={[crushAIColors.tertiary, crushAIColors.secondary, crushAIColors.background.white]}
      >
        <ClinicianTestimonialsSection />
      </GradientSection>

      <GradientSection 
        variant="radial"
        intensity="medium"
        colors={[crushAIColors.tertiary, crushAIColors.secondary, crushAIColors.background.white]}
      >
        <HowItWorksSection />
      </GradientSection>

      {/* Using the direct component instead of GradientSection for Competition */}
      <CompetitionSection />
      
      <TestimonialGenerateSection />
      
      <GradientSection 
        variant="radial"
        intensity="medium"
        colors={[crushAIColors.tertiary, crushAIColors.secondary, crushAIColors.background.white]}
      >
        <ClinicalWorkflowSection />
      </GradientSection>
      
      <WaveBackground baseColor={crushAIColors.secondary} intensity="medium">
        <Box 
          component="section"
          sx={{
            py: { xs: 8, md: 10 }, // Better spacing on different devices
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
                letterSpacing: "-0.03em", // More x.ai-like typography
                lineHeight: 1.2 // Better readability
              }}
            >
              CRUSH Streamlines Clinical Workflows. Schedule a Demo to Experience Its Full Value Firsthand.
            </Typography>
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg shadow-lg text-white transition-all duration-300 hover:translate-y-[-2px]" // Added subtle hover effect
              style={{ backgroundColor: crushAIColors.primary }}
            >
              <ArrowRight size={16} className="mr-2" />
              BOOK A DEMO
            </Button>
          </Container>
        </Box>
      </WaveBackground>
      
      <WorkflowAutomationSection />
      
      {/* Added extra spacing to the ROI Calculator section */}
      <Box sx={{ my: 4 }}> {/* Added spacing container */}
        <WaveBackground baseColor={crushAIColors.secondary} intensity="light">
          <ROICalculatorSection />
        </WaveBackground>
      </Box>
    </Box>
  );
};

export default CrushAI;
