
import React from "react";
import { Box } from "@mui/material";
import { HeroSection } from "@/components/crush-ai/HeroSection";
import { EhrIntegrationSection } from "@/components/crush-ai/EhrIntegrationSection";
import { TrustedBySection } from "@/components/crush-ai/TrustedBySection";
import { HowItWorksSection } from "@/components/crush-ai/HowItWorksSection";
import { CompetitionSection } from "@/components/crush-ai/CompetitionSection";
import { WorkflowAutomationSection } from "@/components/crush-ai/WorkflowAutomationSection";
import { TestimonialsBenefitsSection } from "@/components/crush-ai/TestimonialsBenefitsSection";
import { TestimonialGenerateSection } from "@/components/crush-ai/TestimonialGenerateSection";
import { ClinicalWorkflowSection } from "@/components/crush-ai/ClinicalWorkflowSection";

const CrushAI = () => {
  return (
    <Box sx={{ bgcolor: "white", color: "#333" }}>
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
      
      {/* Testimonial with Text Generate Effect */}
      <TestimonialGenerateSection />
      
      {/* Clinical Workflow Section */}
      <ClinicalWorkflowSection />

      {/* Talk to Patients, Not Screens – CRUSH Handles the Rest */}
      <WorkflowAutomationSection />

      {/* Testimonials & Benefits Section */}
      <TestimonialsBenefitsSection />
    </Box>
  );
};

export default CrushAI;
