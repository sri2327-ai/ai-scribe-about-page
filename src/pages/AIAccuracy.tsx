
import React from "react";
import { Box } from "@mui/material";
import AIAccuracyHero from "@/components/ai-accuracy/AIAccuracyHero";
import AccuracyFoundationSection from "@/components/ai-accuracy/AccuracyFoundationSection";
import SectionDivider from "@/components/ai-accuracy/SectionDivider";
import DefiningAccuracySection from "@/components/ai-accuracy/DefiningAccuracySection";
import ValidationSection from "@/components/ai-accuracy/ValidationSection";
import SustainingAccuracySection from "@/components/ai-accuracy/SustainingAccuracySection";
import AccuracyAdvantageSection from "@/components/ai-accuracy/AccuracyAdvantageSection";

const AIAccuracy = () => {
  return (
    <Box sx={{ bgcolor: "#000000", minHeight: "100vh" }}>
      <AIAccuracyHero />
      <SectionDivider />
      <AccuracyFoundationSection />
      <SectionDivider />
      <DefiningAccuracySection />
      <SectionDivider />
      <ValidationSection />
      <SectionDivider />
      <SustainingAccuracySection />
      <SectionDivider />
      <AccuracyAdvantageSection />
    </Box>
  );
};

export default AIAccuracy;
