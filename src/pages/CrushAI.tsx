
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
      
      {/* TrustedBySection with container styling similar to ROI calculator */}
      <Box 
        component="section" 
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: crushAIColors.secondary,  // Using blue background like ROI calculator
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: "80vh", md: "65vh" },
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: { xs: 0, md: '0rem' },  // No rounded corners like ROI calculator when scrolled fully
            mx: 'auto',
            my: 0,
            width: '100%',
            height: '100%',
            p: { xs: 4, md: 6 },
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <TrustedBySection />
        </Box>
      </Box>
      
      {/* Using the direct component instead of GradientSection for EHR Integration */}
      <EhrIntegrationSection />

      {/* ClinicianTestimonialsSection with container styling similar to ROI calculator */}
      <Box 
        component="section" 
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: crushAIColors.secondary,  // Using blue background like ROI calculator
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: "100vh", md: "90vh" },
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: { xs: 0, md: '0rem' },  // No rounded corners
            mx: 'auto',
            my: 0,
            width: '100%',
            height: '100%',
            p: { xs: 4, md: 6 },
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <ClinicianTestimonialsSection />
        </Box>
      </Box>

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
      
      {/* ROI Calculator section */}
      <Box sx={{ my: 4 }}> {/* Added spacing container */}
        <WaveBackground baseColor={crushAIColors.secondary} intensity="light">
          <ROICalculatorSection />
        </WaveBackground>
      </Box>
    </Box>
  );
};

export default CrushAI;
