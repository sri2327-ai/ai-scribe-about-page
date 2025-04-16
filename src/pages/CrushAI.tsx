
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

const CrushAI = () => {
  return (
    <Box sx={{ bgcolor: crushAIColors.background.white, color: crushAIColors.text.primary }}>
      {/* Hero Section */}
      <HeroSection />

      {/* EHR Integration Section */}
      <EhrIntegrationSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Why CRUSH Crushes Competition */}
      <CompetitionSection />
      
      {/* Testimonial Generate Section (new placement after Competition) */}
      <TestimonialGenerateSection />
      
      {/* Clinical Workflow Section */}
      <ClinicalWorkflowSection />
      
      {/* Book A Demo CTA */}
      <Box 
        component="section"
        sx={{
          py: 8,
          bgcolor: crushAIColors.background.light,
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
      
      {/* Loved by Clinicians Section */}
      <ClinicianTestimonialsSection />
      
      {/* Talk to Patients, Not Screens – CRUSH Handles the Rest */}
      <WorkflowAutomationSection />
      
      {/* ROI Calculator Section */}
      <ROICalculatorSection />
    </Box>
  );
};

export default CrushAI;
