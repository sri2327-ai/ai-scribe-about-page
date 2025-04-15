
import React from "react";
import { Box, Container } from "@mui/material";
import TechHero from "@/components/technology/TechHero";
import TechFeatures from "@/components/technology/TechFeatures";
import TechSolutions from "@/components/technology/TechSolutions";
import TechInnovation from "@/components/technology/TechInnovation";
import TechArchitecture from "@/components/technology/TechArchitecture";
import SecurityCompliance from "@/components/technology/SecurityCompliance";
import S10AISafetyFAQs from "@/components/technology/S10AISafetyFAQs";
import TrustedByExperts from "@/components/technology/TrustedByExperts";
import ProjectSetupChecklist from "@/components/technology/ProjectSetupChecklist";
import { MeetIpkoTimeline } from "@/components/technology/MeetIpkoTimeline";
import { MeetIpkoAnimation } from "@/components/technology/MeetIpkoAnimation";
import { MeetIpkoPulseBeams } from "@/components/technology/MeetIpkoPulseBeams";

const Technology = () => {
  return (
    <Box>
      <TechHero />
      
      <Container>
        <TechFeatures 
          title="AI Healthcare Technology" 
          description="Our platform leverages cutting-edge AI to transform healthcare operations." 
          imageSrc="/placeholder.svg" 
          features={[
            "Advanced natural language processing",
            "Real-time medical transcription",
            "HIPAA compliant security",
            "Seamless EHR integration"
          ]}
        />
        
        <TechSolutions />
        <TechInnovation />
        <TechArchitecture />
        <SecurityCompliance />
        <S10AISafetyFAQs />
        <TrustedByExperts />
        <ProjectSetupChecklist />
      </Container>
      
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <MeetIpkoTimeline />
        <MeetIpkoAnimation />
        <MeetIpkoPulseBeams />
      </Box>
    </Box>
  );
};

export default Technology;
