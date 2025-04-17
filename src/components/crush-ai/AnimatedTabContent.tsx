
import React from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Typography } from "@mui/material";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { CrushAIBentoGridItem } from "./CrushAIBentoGridItem";
import { PrescriptionRefillsIllustration, SmartScreeningIllustration, PreChartingIllustration, ClinicalDecisionIllustration, HCCTrackingIllustration, LongitudinalIntelligenceIllustration } from "./AdminFeatureIllustrations";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const adminPanels = [
  {
    title: "Prescription Refills & Lab Management",
    description: "Automates refill requests, lab order submissions, and updates lab results in patient charts—saving time and reducing errors.",
    illustration: <PrescriptionRefillsIllustration />,
    details: [
      "Smart automation of refill requests",
      "Instant lab order processing",
      "Real-time result updates"
    ],
    bgClass: "bg-gradient-to-br from-blue-50 to-blue-100/50"
  },
  {
    title: "Smart Screening & Assessments",
    description: "Conducts PHQ-9, GAD-7, PCL-5, AUDIT, and CSSRS assessments automatically, and prepares results for clinical use.",
    illustration: <SmartScreeningIllustration />,
    details: [
      "Automated mental health screenings",
      "Instant assessment scoring",
      "Clinical decision support"
    ],
    bgClass: "bg-gradient-to-br from-green-50 to-green-100/50"
  },
  {
    title: "Pre-Charting & Document Management",
    description: "Prepares charts, retrieves history, uploads patient documents, and drafts referral letters with intelligent patient insights.",
    illustration: <PreChartingIllustration />,
    details: [
      "AI-powered chart preparation",
      "Smart document organization",
      "Automated referral drafting"
    ],
    bgClass: "bg-gradient-to-br from-indigo-50 to-purple-50/50"
  }
];

const clinicalPanels = [
  {
    title: "Clinical Decision Support",
    description: "Delivers instant medical guidelines, clarifies jargon, and ensures accurate documentation at the point of care.",
    illustration: <ClinicalDecisionIllustration />,
    details: [
      "Real-time clinical guidelines",
      "Medical terminology assistance",
      "Documentation accuracy support"
    ],
    bgClass: "bg-gradient-to-br from-teal-50 to-teal-100/50"
  },
  {
    title: "HCC Tracking & Documentation",
    description: "Monitors MEAT criteria for HCC coding, supports risk adjustments, and maintains documentation standards.",
    illustration: <HCCTrackingIllustration />,
    details: [
      "Automated MEAT criteria tracking",
      "Risk adjustment support",
      "Documentation compliance"
    ],
    bgClass: "bg-gradient-to-br from-amber-50 to-amber-100/50"
  },
  {
    title: "Longitudinal Intelligence",
    description: "Captures and leverages historical patient data across visits to inform better clinical decisions.",
    illustration: <LongitudinalIntelligenceIllustration />,
    details: [
      "Historical data analysis",
      "Treatment outcome tracking",
      "Care continuity support"
    ],
    bgClass: "bg-gradient-to-br from-blue-50 to-teal-50/50"
  }
];

export const AdminTabContent = () => {
  return (
    <ContainerScroll
      titleComponent={
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 600, 
            mb: 1,
            color: '#000000',
            fontSize: { xs: "1.5rem", md: "1.75rem" }
          }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#046f90] to-[#0d252b]">
            Automate Staffing & Cut Admin Work
          </span>
        </Typography>
      }
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
      >
        {adminPanels.map((panel, index) => (
          <CrushAIBentoGridItem
            key={index}
            {...panel}
            index={index}
          />
        ))}
      </motion.div>
    </ContainerScroll>
  );
};

export const ClinicalTabContent = () => {
  return (
    <ContainerScroll
      titleComponent={
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 600, 
            mb: 1,
            color: '#000000',
            fontSize: { xs: "1.5rem", md: "1.75rem" }
          }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#046f90] to-[#0d252b]">
            AI Assistance for Physicians – Smarter, More Accurate Decisions
          </span>
        </Typography>
      }
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
      >
        {clinicalPanels.map((panel, index) => (
          <CrushAIBentoGridItem
            key={index}
            {...panel}
            index={index}
          />
        ))}
      </motion.div>
    </ContainerScroll>
  );
};
