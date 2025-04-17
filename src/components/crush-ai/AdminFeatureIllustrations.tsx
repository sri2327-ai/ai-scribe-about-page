
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, ClipboardList, FileSpreadsheet, Stethoscope, ShieldCheck, LineChart } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

// Fixed variants to comply with TypeScript
const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.5 } 
  },
  whileHover: {
    scale: [1, 1.1, 1],
    transition: { 
      duration: 1.5, 
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut" 
    }
  }
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut"
    }
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  whileHover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

// Base component for consistent styling
const IllustrationWrapper = ({ children }) => (
  <div className="relative w-full h-full flex items-center justify-center py-6">
    <motion.div 
      className="relative w-40 h-40"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
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
    <motion.div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      variants={iconVariants}
    >
      <Pill size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
    </motion.div>
    
    <motion.div
      className="absolute top-6 right-6 p-2 bg-white rounded-lg shadow-sm"
      variants={floatingVariants}
    >
      <motion.div
        className="w-4 h-4 bg-green-400 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" as const }}
      />
    </motion.div>
  </IllustrationWrapper>
);

export const SmartScreeningIllustration = () => (
  <IllustrationWrapper>
    <motion.div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      variants={iconVariants}
    >
      <ClipboardList size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
    </motion.div>
    
    <motion.div
      className="absolute top-8 right-8 text-sm font-semibold"
      variants={floatingVariants}
    >
      PHQ-9
    </motion.div>
  </IllustrationWrapper>
);

export const PreChartingIllustration = () => (
  <IllustrationWrapper>
    <motion.div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      variants={iconVariants}
    >
      <FileSpreadsheet size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
    </motion.div>
  </IllustrationWrapper>
);

export const ClinicalDecisionIllustration = () => (
  <IllustrationWrapper>
    <motion.div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      variants={iconVariants}
    >
      <Stethoscope size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
    </motion.div>
  </IllustrationWrapper>
);

export const HCCTrackingIllustration = () => (
  <IllustrationWrapper>
    <motion.div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      variants={iconVariants}
    >
      <ShieldCheck size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
    </motion.div>
  </IllustrationWrapper>
);

export const LongitudinalIntelligenceIllustration = () => (
  <IllustrationWrapper>
    <motion.div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      variants={iconVariants}
    >
      <LineChart size={48} color={crushAIColors.primaryFlat} strokeWidth={1.5} />
    </motion.div>
    
    <motion.div
      className="absolute bottom-8 left-8 flex space-x-1"
      variants={floatingVariants}
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-blue-400"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, repeatType: "mirror" as const }}
        />
      ))}
    </motion.div>
  </IllustrationWrapper>
);
