
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
import { FeatureHighlights } from "@/components/crush-ai/FeatureHighlights";

const CrushAI = () => {
  return (
    <Box sx={{ bgcolor: crushAIColors.background.white, color: crushAIColors.text.primary }}>
      {/* Hero Section */}
      <HeroSection />

      {/* EHR Integration Section - With Gradient Background */}
      <Box 
        sx={{ 
          background: `radial-gradient(
            circle at 50% 50%,
            rgba(165, 204, 243, 0.3) 0%, 
            rgba(81, 146, 174, 0.2) 50%, 
            rgba(255, 255, 255, 0.1) 100%
          ), #FFFFFF`,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.05,
            pointerEvents: "none",
            zIndex: 0
          }
        }}
      >
        <EhrIntegrationSection />
      </Box>

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* How It Works Section - With Gradient Background */}
      <Box 
        sx={{ 
          background: `radial-gradient(
            circle at 50% 50%,
            rgba(165, 204, 243, 0.3) 0%, 
            rgba(81, 146, 174, 0.2) 50%, 
            rgba(255, 255, 255, 0.1) 100%
          ), #FFFFFF`,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.05,
            pointerEvents: "none",
            zIndex: 0
          }
        }}
      >
        <HowItWorksSection />
      </Box>

      {/* Why CRUSH Crushes Competition */}
      <CompetitionSection />
      
      {/* Testimonial Generate Section (new placement after Competition) - Already has gradient */}
      <TestimonialGenerateSection />
      
      {/* Clinical Workflow Section - With Gradient Background */}
      <Box 
        sx={{ 
          background: `radial-gradient(
            circle at 50% 50%,
            rgba(165, 204, 243, 0.3) 0%, 
            rgba(81, 146, 174, 0.2) 50%, 
            rgba(255, 255, 255, 0.1) 100%
          ), #FFFFFF`,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.05,
            pointerEvents: "none",
            zIndex: 0
          }
        }}
      >
        <ClinicalWorkflowSection />
      </Box>
      
      {/* Feature Highlights Section */}
      <FeatureHighlights />
      
      {/* Book A Demo CTA */}
      <Box 
        component="section"
        sx={{
          py: 8,
          background: `linear-gradient(135deg, ${crushAIColors.background.light} 0%, rgba(165, 204, 243, 0.2) 100%)`,
          textAlign: "center"
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 700,
              mb: 3,
              color: crushAIColors.text.primary
            }}
          >
            CRUSH Streamlines Clinical Workflows. Schedule a Demo to Experience Its Full Value Firsthand.
          </Typography>
          <Button 
            size="lg" 
            className="bg-[#143151] hover:bg-[#143151]/90 text-white rounded-full px-8 py-6 text-lg shadow-lg"
          >
            <ArrowRight size={16} className="mr-2" />
            BOOK A DEMO
          </Button>
        </Container>
      </Box>
      
      {/* Loved by Clinicians Section - With Gradient Background */}
      <Box 
        sx={{ 
          background: `radial-gradient(
            circle at 50% 50%,
            rgba(165, 204, 243, 0.3) 0%, 
            rgba(81, 146, 174, 0.2) 50%, 
            rgba(255, 255, 255, 0.1) 100%
          ), #FFFFFF`,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.05,
            pointerEvents: "none",
            zIndex: 0
          }
        }}
      >
        <ClinicianTestimonialsSection />
      </Box>
      
      {/* Talk to Patients, Not Screens – CRUSH Handles the Rest */}
      <WorkflowAutomationSection />
      
      {/* ROI Calculator Section - With Gradient Background */}
      <Box 
        sx={{ 
          background: `radial-gradient(
            circle at 50% 50%,
            rgba(165, 204, 243, 0.3) 0%, 
            rgba(81, 146, 174, 0.2) 50%, 
            rgba(255, 255, 255, 0.1) 100%
          ), #FFFFFF`,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.05,
            pointerEvents: "none",
            zIndex: 0
          }
        }}
      >
        <ROICalculatorSection />
      </Box>
    </Box>
  );
};

export default CrushAI;
