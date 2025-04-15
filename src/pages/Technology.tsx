
import React from "react";
import { Box, Container } from "@mui/material";
import TechHero from "@/components/technology/TechHero";
import SecurityCompliance from "@/components/technology/SecurityCompliance";
import S10AISafetyFAQs from "@/components/technology/S10AISafetyFAQs";
import TrustedByExperts from "@/components/technology/TrustedByExperts";
import ProjectSetupChecklist from "@/components/technology/ProjectSetupChecklist";
import MeetIpkoTimeline from "@/components/technology/MeetIpkoTimeline";

const Technology = () => {
  return (
    <Box>
      <TechHero />
      
      {/* Second scroll section - MeetIpkoTimeline */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <MeetIpkoTimeline />
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
