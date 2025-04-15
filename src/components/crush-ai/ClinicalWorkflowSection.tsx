
"use client";

import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { CanvasEffect } from "@/components/ui/canvas-effect";
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

// Feature Item Component
const FeatureItem = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.FC<any>; 
  title: string; 
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-4"
    >
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column",
        height: "100%", 
        p: 3, 
        borderRadius: "16px",
        border: "1px solid rgba(155,135,245,0.2)",
        background: "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(250,250,252,0.95) 100%)",
        boxShadow: "0 4px 20px rgba(155,135,245,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 25px rgba(155,135,245,0.2)",
        }
      }}>
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <Box sx={{ 
            borderRadius: "12px",
            p: 1.5,
            mr: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(155,135,245,0.1)",
            border: "1px solid rgba(155,135,245,0.3)"
          }}>
            <Icon size={22} strokeWidth={2} className="text-purple-500" />
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              fontSize: "1.1rem",
              color: "#333"
            }}
          >
            {title}
          </Typography>
        </Box>
        <Typography 
          variant="body2" 
          sx={{ 
            color: "#555",
            flex: 1,
            lineHeight: 1.6
          }}
        >
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
};

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
              color: "#333",
              fontSize: { xs: "1.5rem", md: "1.75rem" },
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-8px",
                left: "0",
                width: "60px",
                height: "3px",
                backgroundColor: "rgba(155,135,245,0.7)",
                borderRadius: "2px"
              }
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
      
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid xs={12} sm={6} md={4} key={index}>
            <FeatureItem 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          </Grid>
        ))}
      </Grid>
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
        overflow: "hidden"
      }}
    >
      {/* Background effect */}
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
        <CanvasEffect id="workflow-canvas" />
      </Box>
      
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
                mb: 2,
                background: "linear-gradient(135deg, #9b87f5 0%, #1EAEDB 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }
              }}
            >
              More Than Just an AI Scribe
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 600, 
                mb: 3,
                color: "#333",
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" }
              }}
            >
              CRUSH Automates Clinical Workflows
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
