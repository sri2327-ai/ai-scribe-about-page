
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
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const CrushAI = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: crushAIColors.background.white, 
        color: crushAIColors.text.primary,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <HeroSection />
      
      {/* TrustedBySection with ContainerScroll */}
      <Box 
        sx={{
          backgroundColor: crushAIColors.primary,
        }}
      >
        <ContainerScroll
          titleComponent={
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">Trusted By Clinicians</h1>
              <p className="text-xl text-white/70">See why clinicians worldwide trust CRUSH</p>
            </div>
          }
        >
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              p: { xs: 2, md: 4 },
              width: '100%',
              height: '100%',
            }}
          >
            <TrustedBySection />
          </Box>
        </ContainerScroll>
      </Box>

      {/* Using the direct component instead of GradientSection for EHR Integration */}
      <EhrIntegrationSection />
      
      {/* ClinicianTestimonialsSection with ContainerScroll */}
      <Box 
        sx={{
          backgroundColor: crushAIColors.primary,
        }}
      >
        <ContainerScroll
          titleComponent={
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">Loved by Clinicians</h1>
              <p className="text-xl text-white/70">Read what healthcare professionals say about CRUSH</p>
            </div>
          }
        >
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              p: { xs: 2, md: 4 },
              width: '100%',
              height: '100%',
            }}
          >
            <ClinicianTestimonialsSection />
          </Box>
        </ContainerScroll>
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
              className="rounded-full px-8 py-6 text-lg shadow-lg text-white transition-all duration-300 hover:translate-y-[-2px]"
              style={{ backgroundColor: crushAIColors.primary }}
            >
              <ArrowRight size={16} className="mr-2" />
              BOOK A DEMO
            </Button>
          </Container>
        </Box>
      </WaveBackground>
      
      <WorkflowAutomationSection />
      
      {/* ROI Calculator section with ContainerScroll */}
      <Box 
        sx={{
          backgroundColor: crushAIColors.primary,
          my: 4
        }}
      >
        <ContainerScroll
          titleComponent={
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">ROI Calculator</h1>
              <p className="text-xl text-white/70">Calculate your potential savings with CRUSH</p>
            </div>
          }
        >
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              p: { xs: 2, md: 4 },
              width: '100%',
              height: '100%',
            }}
          >
            <ROICalculatorSection />
          </Box>
        </ContainerScroll>
      </Box>
    </Box>
  );
};

export default CrushAI;
