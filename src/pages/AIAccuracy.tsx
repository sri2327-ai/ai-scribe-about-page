
import React from "react";
import { Box } from "@mui/material";
import AIAccuracyHero from "@/components/ai-accuracy/AIAccuracyHero";
import AccuracyFoundationSection from "@/components/ai-accuracy/AccuracyFoundationSection";

const AIAccuracy = () => {
  return (
    <Box sx={{ bgcolor: "#000000", minHeight: "100vh" }}>
      <AIAccuracyHero />
      <AccuracyFoundationSection />
    </Box>
  );
};

export default AIAccuracy;
