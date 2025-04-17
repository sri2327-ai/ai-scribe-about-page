import React from "react";
import { motion } from "framer-motion";
import { PrescriptionRefills } from "./medical-illustrations/PrescriptionRefills";
import { SmartScreening } from "./medical-illustrations/SmartScreening";
import { PreCharting } from "./medical-illustrations/PreCharting";
import { ClinicalDecision } from "./medical-illustrations/ClinicalDecision";
import { HCCTracking } from "./medical-illustrations/HCCTracking";
import { LongitudinalIntelligence } from "./medical-illustrations/LongitudinalIntelligence";
import { crushAIColors } from "@/theme/crush-ai-theme";

// Base component for consistent styling
const IllustrationWrapper = ({ children }) => (
  <div className="relative w-full h-full flex items-center justify-center py-6">
    <motion.div 
      className="relative w-40 h-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${crushAIColors.accent.blue}20` }}
      />
      {children}
    </motion.div>
  </div>
);

export const PrescriptionRefillsIllustration = () => (
  <IllustrationWrapper>
    <PrescriptionRefills />
  </IllustrationWrapper>
);

export const SmartScreeningIllustration = () => (
  <IllustrationWrapper>
    <SmartScreening />
  </IllustrationWrapper>
);

export const PreChartingIllustration = () => (
  <IllustrationWrapper>
    <PreCharting />
  </IllustrationWrapper>
);

export const ClinicalDecisionIllustration = () => (
  <IllustrationWrapper>
    <ClinicalDecision />
  </IllustrationWrapper>
);

export const HCCTrackingIllustration = () => (
  <IllustrationWrapper>
    <HCCTracking />
  </IllustrationWrapper>
);

export const LongitudinalIntelligenceIllustration = () => (
  <IllustrationWrapper>
    <LongitudinalIntelligence />
  </IllustrationWrapper>
);
