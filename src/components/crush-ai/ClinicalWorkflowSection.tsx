
"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Pill, 
  ClipboardList, 
  FileSpreadsheet, 
  FileCheck, 
  ScanLine, 
  Share, 
  BrainCircuit, 
  ShieldCheck, 
  ListChecks, 
  FileText, 
  AlertTriangle, 
  Clock,
  Users,
  LineChart,
  Stethoscope,
  Workflow,
  Database,
  TestTube
} from "lucide-react";

// Root BentoGrid Component
const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-12 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

// BentoCard Component with flexible sizing
const BentoCard = ({
  icon: Icon,
  title,
  description,
  className,
  colSpan = 4,
  rowSpan = 1,
}: {
  icon: React.FC<any>;
  title: string;
  description: string;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}) => (
  <div
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl p-6 h-full",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "border border-gray-100 hover:border-purple-100 transition-all duration-300",
      `col-span-${colSpan}`,
      className,
    )}
    style={{ minHeight: '220px' }}
  >
    <div className="flex flex-col gap-3 z-10">
      <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center">
        <Icon size={24} className="text-black" />
      </div>
      <h3 className="text-xl font-semibold text-black">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
    
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.02]" />
  </div>
);

export const ClinicalWorkflowSection = () => {
  const adminFeatures = [
    {
      icon: Pill,
      title: "Prescription Refills & Lab Management",
      description: "Automates refill requests, lab order submissions, and updates lab results in patient charts—saving time and reducing errors.",
      colSpan: 5,
    },
    {
      icon: ClipboardList,
      title: "Smart Screening & Assessments",
      description: "Conducts PHQ-9, GAD-7, PCL-5, AUDIT, and CSSRS assessments automatically, and prepares results for clinical use.",
      colSpan: 3,
    },
    {
      icon: FileSpreadsheet,
      title: "Pre-Charting & Referral Automation",
      description: "Prepares charts, retrieves history, uploads patient documents, and drafts referral letters with intelligent patient insights.",
      colSpan: 4,
    },
    {
      icon: Database,
      title: "CRM Sync & Patient Demographics",
      description: "Seamlessly transfers patient demographics and pre-visit data into your CRM system for streamlined workflows.",
      colSpan: 6,
    },
    {
      icon: Workflow,
      title: "Centralized Care Automation",
      description: "Integrates chart prep, referrals, labs, and CRM updates into a unified flow—enhancing care coordination and reducing manual work.",
      colSpan: 6,
    }
  ];

  const clinicalFeatures = [
    {
      icon: Stethoscope,
      title: "Clinical Decision & Documentation Support",
      description: "Delivers instant medical guidelines, clarifies jargon, and ensures accurate, structured, and compliant documentation at the point of care.",
      colSpan: 4,
    },
    {
      icon: ShieldCheck,
      title: "HCC Tracking & Compliance",
      description: "Monitors MEAT criteria for HCC coding, supports risk adjustments, and maintains documentation standards for better outcomes and audit readiness.",
      colSpan: 4,
    },
    {
      icon: FileText,
      title: "Personalized & Auto-Generated Treatment Plans",
      description: "Creates SMART-based, personalized care plans tailored to each patient's unique needs, enhancing treatment precision and engagement.",
      colSpan: 4,
    },
    {
      icon: AlertTriangle,
      title: "Preventive Screening & Risk Insights",
      description: "Proactively flags preventive care needs and risk patterns to enable early interventions and improve long-term patient outcomes.",
      colSpan: 7,
    },
    {
      icon: LineChart,
      title: "Longitudinal Intelligence & Continuity of Care",
      description: "Captures and leverages historical patient data across visits to inform better clinical decisions and ensure seamless continuity of care.",
      colSpan: 5,
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 5 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                mb: 4,
                color: "#000000",
                textAlign: "center",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "2.75rem" }
              }}
            >
              More Than Just an AI Scribe – CRUSH Automates Clinical Workflows
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                color: "#555", 
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" }
              }}
            >
              Crush is more than an AI medical scribe—it streamlines healthcare workflows, 
              automates tasks, and enhances patient care, transforming how clinics operate, 
              including for specialty visits.
            </Typography>
          </motion.div>
        </Box>
        
        <Box sx={{ mb: 8 }}>
          <Box sx={{ mb: 4, textAlign: "left" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 1,
                  color: "#000",
                  fontSize: { xs: "1.5rem", md: "1.75rem" }
                }}
              >
                Automate Staffing & Cut Admin Work
              </Typography>
            </motion.div>
          </Box>
          
          <BentoGrid className="mb-12">
            {adminFeatures.map((feature, index) => (
              <BentoCard 
                key={index}
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
                colSpan={feature.colSpan}
              />
            ))}
          </BentoGrid>
        </Box>
        
        <Box sx={{ mb: 8 }}>
          <Box sx={{ mb: 4, textAlign: "left" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 1,
                  color: "#000",
                  fontSize: { xs: "1.5rem", md: "1.75rem" }
                }}
              >
                AI Assistance for Physicians – Smarter, More Accurate Decisions
              </Typography>
            </motion.div>
          </Box>
          
          <BentoGrid>
            {clinicalFeatures.map((feature, index) => (
              <BentoCard 
                key={index}
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
                colSpan={feature.colSpan}
              />
            ))}
          </BentoGrid>
        </Box>
      </Container>
    </Box>
  );
};
