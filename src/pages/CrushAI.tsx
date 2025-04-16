
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

const CrushAI = () => {
  return (
    <Box sx={{ bgcolor: "white", color: "#143151" }}> {/* Updated text color to navy */}
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
      
      {/* Testimonial Generate Section (after Competition) */}
      <TestimonialGenerateSection />
      
      {/* Clinical Workflow Section */}
      <ClinicalWorkflowSection />
      
      {/* Testimonial Generate Section (before Workflow Automation) */}
      <TestimonialGenerateSection />
      
      {/* Book A Demo CTA */}
      <Box 
        component="section"
        sx={{
          py: 8,
          bgcolor: "rgba(165, 204, 243, 0.1)", // Updated to light blue with transparency
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
              color: "#143151" // Updated to navy
            }}
          >
            CRUSH Streamlines Clinical Workflows. Schedule a Demo to Experience Its Full Value Firsthand.
          </Typography>
          <Button 
            size="lg" 
            className="bg-navy hover:bg-navy/90 text-white rounded-full px-8 py-6 text-lg shadow-lg"
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
