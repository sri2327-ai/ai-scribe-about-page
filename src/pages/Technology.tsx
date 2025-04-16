
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import TechHero from "@/components/technology/TechHero";
import SecurityCompliance from "@/components/technology/SecurityCompliance";
import S10AISafetyFAQs from "@/components/technology/S10AISafetyFAQs";
import TrustedByExperts from "@/components/technology/TrustedByExperts";
import ProjectSetupChecklist from "@/components/technology/ProjectSetupChecklist";
import MeetIpkoTimeline from "@/components/technology/MeetIpkoTimeline";
import TechFeaturesContent from "@/components/technology/TechFeatures";
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
          bgcolor: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 4,
              color: "#ffffff",
              textAlign: "center"
            }}
          >
            Transform Your Healthcare Workflow
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button 
              variant="outline"
              size="lg" 
              className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              Request A Demo
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Box>
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

