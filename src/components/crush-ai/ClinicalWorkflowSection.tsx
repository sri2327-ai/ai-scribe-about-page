"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Pill, 
  ClipboardList, 
  FileSpreadsheet, 
  Database, 
  BrainCircuit, 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  LineChart,
  Stethoscope,
  Workflow,
  TestTube
} from "lucide-react";

interface BentoCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

const BentoCard = ({ icon: Icon, title, description, className }: BentoCardProps) => (
  <div
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      "border border-gray-100 hover:border-purple-100 transition-all duration-300",
      className
    )}
  >
    <div className="flex flex-col gap-3 p-6 z-10">
      <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center transform-gpu transition-all duration-300 ease-in-out group-hover:scale-90">
        <Icon size={24} className="text-black" />
      </div>
      
      <div className="transform-gpu transition-all duration-300 group-hover:-translate-y-1">
        <h3 className="text-xl font-semibold text-black mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
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
    },
    {
      icon: ClipboardList,
      title: "Smart Screening & Assessments",
      description: "Conducts PHQ-9, GAD-7, PCL-5, AUDIT, and CSSRS assessments automatically, and prepares results for clinical use.",
    },
    {
      icon: FileSpreadsheet,
      title: "Pre-Charting & Referral Automation",
      description: "Prepares charts, retrieves history, uploads patient documents, and drafts referral letters with intelligent patient insights.",
    },
    {
      icon: Database,
      title: "CRM Sync & Patient Demographics",
      description: "Seamlessly transfers patient demographics and pre-visit data into your CRM system for streamlined workflows.",
    },
    {
      icon: Workflow,
      title: "Centralized Care Automation",
      description: "Integrates chart prep, referrals, labs, and CRM updates into a unified flow—enhancing care coordination and reducing manual work.",
    }
  ];

  const clinicalFeatures = [
    {
      icon: Stethoscope,
      title: "Clinical Decision & Documentation Support",
      description: "Delivers instant medical guidelines, clarifies jargon, and ensures accurate, structured, and compliant documentation at the point of care.",
    },
    {
      icon: ShieldCheck,
      title: "HCC Tracking & Compliance",
      description: "Monitors MEAT criteria for HCC coding, supports risk adjustments, and maintains documentation standards for better outcomes and audit readiness.",
    },
    {
      icon: FileText,
      title: "Personalized & Auto-Generated Treatment Plans",
      description: "Creates SMART-based, personalized care plans tailored to each patient's unique needs, enhancing treatment precision and engagement.",
    },
    {
      icon: AlertTriangle,
      title: "Preventive Screening & Risk Insights",
      description: "Proactively flags preventive care needs and risk patterns to enable early interventions and improve long-term patient outcomes.",
    },
    {
      icon: LineChart,
      title: "Longitudinal Intelligence & Continuity of Care",
      description: "Captures and leverages historical patient data across visits to inform better clinical decisions and ensure seamless continuity of care.",
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
                fontSize: { xs: "2rem", sm: "2.5rem", md: "2.75rem" },
                whiteSpace: "nowrap"
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
          
          <div className="grid grid-cols-12 gap-4 mb-12">
            <BentoCard 
              icon={adminFeatures[0].icon}
              title={adminFeatures[0].title}
              description={adminFeatures[0].description}
              className="col-span-12 md:col-span-7 min-h-[180px]"
            />
            <BentoCard 
              icon={adminFeatures[1].icon}
              title={adminFeatures[1].title}
              description={adminFeatures[1].description}
              className="col-span-12 md:col-span-5 min-h-[180px]"
            />
            <BentoCard 
              icon={adminFeatures[2].icon}
              title={adminFeatures[2].title}
              description={adminFeatures[2].description}
              className="col-span-12 md:col-span-4 min-h-[180px]"
            />
            <BentoCard 
              icon={adminFeatures[3].icon}
              title={adminFeatures[3].title}
              description={adminFeatures[3].description}
              className="col-span-12 md:col-span-4 min-h-[180px]"
            />
            <BentoCard 
              icon={adminFeatures[4].icon}
              title={adminFeatures[4].title}
              description={adminFeatures[4].description}
              className="col-span-12 md:col-span-4 min-h-[180px]"
            />
          </div>
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
          
          <div className="grid grid-cols-12 gap-4">
            {/* Bento grid layout for Clinical Features */}
            <BentoCard 
              icon={clinicalFeatures[0].icon}
              title={clinicalFeatures[0].title}
              description={clinicalFeatures[0].description}
              className="col-span-12 md:col-span-6 min-h-[220px]"
            />
            <BentoCard 
              icon={clinicalFeatures[1].icon}
              title={clinicalFeatures[1].title}
              description={clinicalFeatures[1].description}
              className="col-span-12 md:col-span-6 min-h-[220px]"
            />
            <BentoCard 
              icon={clinicalFeatures[2].icon}
              title={clinicalFeatures[2].title}
              description={clinicalFeatures[2].description}
              className="col-span-12 md:col-span-4 min-h-[220px]"
            />
            <BentoCard 
              icon={clinicalFeatures[3].icon}
              title={clinicalFeatures[3].title}
              description={clinicalFeatures[3].description}
              className="col-span-12 md:col-span-4 min-h-[220px]"
            />
            <BentoCard 
              icon={clinicalFeatures[4].icon}
              title={clinicalFeatures[4].title}
              description={clinicalFeatures[4].description}
              className="col-span-12 md:col-span-4 min-h-[220px]"
            />
          </div>
        </Box>
      </Container>
    </Box>
  );
};
