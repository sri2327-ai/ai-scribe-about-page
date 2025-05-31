
import React from "react";
import { Box } from "@mui/material";
import AIAccuracyHero from "@/components/ai-accuracy/AIAccuracyHero";
import AccuracyFoundationSection from "@/components/ai-accuracy/AccuracyFoundationSection";
import SectionDivider from "@/components/ai-accuracy/SectionDivider";
import DefiningAccuracySection from "@/components/ai-accuracy/DefiningAccuracySection";

const AIAccuracy = () => {
  return (
    <Box sx={{ bgcolor: "#000000", minHeight: "100vh" }}>
      <AIAccuracyHero />
      <SectionDivider />
      <AccuracyFoundationSection />
      <SectionDivider />
      <DefiningAccuracySection />
    </Box>
  );
};

export default AIAccuracy;
