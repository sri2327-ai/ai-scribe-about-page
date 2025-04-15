
"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Stethoscope, 
  ClipboardList, 
  Pill, 
  FileSpreadsheet, 
  FileCheck, 
  ScanLine, 
  FlaskConical, 
  Share, 
  BrainCircuit, 
  ShieldCheck, 
  ListChecks, 
  FileText, 
  HeartPulse, 
  AlertTriangle, 
  Clock 
} from "lucide-react";

// BentoGrid Component
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
        "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

// BentoCard Component
const BentoCard = ({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: React.FC<any>;
  title: string;
  description: string;
  className?: string;
}) => (
  <div
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl p-6 h-full",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "border border-gray-100 hover:border-purple-100 transition-all duration-300 hover:-translate-y-1",
      className,
    )}
  >
    <div className="flex flex-col gap-3">
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

// Subsection Component
const FeatureSubsection = ({ 
  title, 
  description, 
  features 
}: { 
  title: string; 
  description: string;
  features: {icon: React.FC<any>; title: string; description: string}[];
}) => {
  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ mb: 6, textAlign: "left" }}>
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
            {title}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: "#555", 
              maxWidth: "800px",
              mt: 3,
              lineHeight: 1.7
            }}
          >
            {description}
          </Typography>
        </motion.div>
      </Box>
      
      <BentoGrid>
        {features.map((feature, index) => (
          <BentoCard 
            key={index}
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </BentoGrid>
    </Box>
  );
};

export const ClinicalWorkflowSection = () => {
  const adminFeatures = [
    {
      icon: Pill,
      title: "Prescription Refills",
      description: "Automates refill requests & pharmacy submissions, saving time and reducing errors."
    },
    {
      icon: ClipboardList,
      title: "Smart Screening",
      description: "Conducts PHQ-9, GAD-7, PCL-5, AUDIT, CSSRS assessments automatically."
    },
    {
      icon: FileSpreadsheet,
      title: "Pre-Charting",
      description: "Prepares charts, retrieves history, and uploads patient documents proactively."
    },
    {
      icon: FlaskConical,
      title: "Lab Orders & Results",
      description: "Automates lab order submissions & updates lab results in patient charts."
    },
    {
      icon: Share,
      title: "Referral Automation",
      description: "Drafts referral letters with intelligent patient insights and history."
    },
    {
      icon: ScanLine,
      title: "CRM Sync",
      description: "Seamlessly transfers patient demographics into your CRM system."
    }
  ];

  const clinicalFeatures = [
    {
      icon: BrainCircuit,
      title: "Clinical Decision Support",
      description: "Instant guidelines, medical insights & jargon clarification at point of care."
    },
    {
      icon: ShieldCheck,
      title: "CDI & Compliance",
      description: "Ensures accurate, structured & compliant documentation for every patient."
    },
    {
      icon: ListChecks,
      title: "HCC MEAT Tracking",
      description: "Monitors MEAT criteria for follow-ups & risk adjustments to improve outcomes."
    },
    {
      icon: FileText,
      title: "Auto-Generated Treatment Plans",
      description: "SMART-based, personalized care plans tailored to each patient's needs."
    },
    {
      icon: AlertTriangle,
      title: "Preventive Screening & Risk Analysis",
      description: "Flags patterns & preventive care needs early to improve patient outcomes."
    },
    {
      icon: Clock,
      title: "Longitudinal Intelligence",
      description: "Captures historical data for improved continuity of care across visits."
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
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }
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
        
        <FeatureSubsection 
          title="Automate Staffing & Cut Admin Work"
          description="CRUSH eliminates repetitive tasks so you can focus on patient care, not paperwork."
          features={adminFeatures}
        />
        
        <FeatureSubsection 
          title="AI Assistance for Physicians – Smarter, More Accurate Decisions"
          description="CRUSH isn't just a scribe—it's an AI-driven clinical assistant that enhances decision-making, compliance, and patient care."
          features={clinicalFeatures}
        />
      </Container>
    </Box>
  );
};
