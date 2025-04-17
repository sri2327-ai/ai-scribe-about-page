
import React from "react";
import { motion } from "framer-motion";
import { AnimatedFeatureCard } from "./AnimatedFeatureCard";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Typography } from "@mui/material";
import { crushAIColors } from "@/theme/crush-ai-theme";
import {
  PrescriptionRefillsIllustration,
  SmartScreeningIllustration,
  PreChartingIllustration,
  CRMSyncIllustration,
  CentralizedCareIllustration
} from "./AdminFeatureIllustrations";
import {
  ClinicalDecisionIllustration,
  HCCTrackingIllustration,
  TreatmentPlansIllustration,
  PreventiveScreeningIllustration,
  LongitudinalIntelligenceIllustration
} from "./ClinicalFeatureIllustrations";
import { Pill, ClipboardList, FileSpreadsheet, Database, Workflow, Stethoscope, ShieldCheck, FileText, AlertTriangle, LineChart } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  illustration: React.ReactNode;
  index: number;
}

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeatureCard = ({ icon, title, description, illustration, index }: FeatureCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col h-full"
    >
      <div className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden h-full flex flex-col">
        <div 
          className="p-5 flex items-center justify-between border-b border-black/5"
          style={{ background: isEven ? `${crushAIColors.accent.blue}10` : `${crushAIColors.tertiary}10` }}
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#F5F9FF" }}
            >
              {React.createElement(icon, { size: 20, className: "text-[#046f90] stroke-[1.5]" })}
            </div>
            <h3 className="text-lg font-semibold text-black">{title}</h3>
          </div>
        </div>
        
        <div className="p-5 flex-1 flex flex-col justify-between">
          <p className="text-black mb-4">{description}</p>
          
          <div className="h-32 flex items-center justify-center">
            {illustration}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const AdminTabContent = () => {
  const adminFeatures = [
    {
      icon: Pill,
      title: "Prescription Refills & Lab Management",
      description: "Automates refill requests, lab order submissions, and updates lab results in patient charts—saving time and reducing errors.",
      illustration: <PrescriptionRefillsIllustration />
    },
    {
      icon: ClipboardList,
      title: "Smart Screening & Assessments",
      description: "Conducts PHQ-9, GAD-7, PCL-5, AUDIT, and CSSRS assessments automatically, and prepares results for clinical use.",
      illustration: <SmartScreeningIllustration />
    },
    {
      icon: FileSpreadsheet,
      title: "Pre-Charting & Referral Automation",
      description: "Prepares charts, retrieves history, uploads patient documents, and drafts referral letters with intelligent patient insights.",
      illustration: <PreChartingIllustration />
    },
    {
      icon: Database,
      title: "CRM Sync & Patient Demographics",
      description: "Seamlessly transfers patient demographics and pre-visit data into your CRM system for streamlined workflows.",
      illustration: <CRMSyncIllustration />
    },
    {
      icon: Workflow,
      title: "Centralized Care Automation",
      description: "Integrates chart prep, referrals, labs, and CRM updates into a unified flow—enhancing care coordination and reducing manual work.",
      illustration: <CentralizedCareIllustration />
    }
  ];

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
        animate="show"
      >
        {adminFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            illustration={feature.illustration}
            index={index}
          />
        ))}
      </motion.div>
    </ContainerScroll>
  );
};

export const ClinicalTabContent = () => {
  const clinicalFeatures = [
    {
      icon: Stethoscope,
      title: "Clinical Decision & Documentation Support",
      description: "Delivers instant medical guidelines, clarifies jargon, and ensures accurate, structured, and compliant documentation at the point of care.",
      illustration: <ClinicalDecisionIllustration />
    },
    {
      icon: ShieldCheck,
      title: "HCC Tracking & Compliance",
      description: "Monitors MEAT criteria for HCC coding, supports risk adjustments, and maintains documentation standards for better outcomes and audit readiness.",
      illustration: <HCCTrackingIllustration />
    },
    {
      icon: FileText,
      title: "Personalized & Auto-Generated Treatment Plans",
      description: "Creates SMART-based, personalized care plans tailored to each patient's unique needs, enhancing treatment precision and engagement.",
      illustration: <TreatmentPlansIllustration />
    },
    {
      icon: AlertTriangle,
      title: "Preventive Screening & Risk Insights",
      description: "Proactively flags preventive care needs and risk patterns to enable early interventions and improve long-term patient outcomes.",
      illustration: <PreventiveScreeningIllustration />
    },
    {
      icon: LineChart,
      title: "Longitudinal Intelligence & Continuity of Care",
      description: "Captures and leverages historical patient data across visits to inform better clinical decisions and ensure seamless continuity of care.",
      illustration: <LongitudinalIntelligenceIllustration />
    }
  ];

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
        animate="show"
      >
        {clinicalFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            illustration={feature.illustration}
            index={index}
          />
        ))}
      </motion.div>
    </ContainerScroll>
  );
};
