
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import TechHero from "@/components/technology/TechHero";
import SecurityCompliance from "@/components/technology/SecurityCompliance";
import S10AISafetyFAQs from "@/components/technology/S10AISafetyFAQs";
import TrustedByExperts from "@/components/technology/TrustedByExperts";
import ProjectSetupChecklist from "@/components/technology/ProjectSetupChecklist";
import MeetIpkoTimeline from "@/components/technology/MeetIpkoTimeline";
import TechFeaturesContent from "@/components/technology/TechFeatures";
import TechSolutions from "@/components/technology/TechSolutions";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Technology = () => {
  return (
    <Box>
      <TechHero />
      
      {/* Second scroll section - MeetIpkoTimeline */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <MeetIpkoTimeline />
      </Box>
      
      {/* Technology That Delivers section */}
      <TechFeaturesContent />
      
      {/* Transform Your Healthcare Workflow - CTA */}
      <Box 
        component="section"
        sx={{
          py: 8,
          bgcolor: "#f5f9ff",
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
              color: "#000000"
            }}
          >
            Transform Your Healthcare Workflow. Schedule a Demo Today.
          </Typography>
          <Button 
            size="lg" 
            className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-lg"
          >
            <ArrowRight size={16} className="mr-2" />
            REQUEST A DEMO
          </Button>
        </Container>
      </Box>
      
      <Container>
        {/* Third scroll section - SecurityCompliance */}
        <SecurityCompliance />
        
        {/* Fourth scroll section - ProjectSetupChecklist */}
        <ProjectSetupChecklist />
        
        {/* Fifth scroll section - S10AISafetyFAQs */}
        <S10AISafetyFAQs />
        
        <TrustedByExperts />
      </Container>
    </Box>
  );
};

export default Technology;
