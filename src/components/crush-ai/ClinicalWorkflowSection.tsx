
"use client";

import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Pill, 
  ClipboardList, 
  FileSpreadsheet, 
  Database, 
  Workflow,
  Stethoscope,
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  LineChart 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-50px" }}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl p-6",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "border border-gray-100 hover:border-purple-100 transition-all duration-300",
      className
    )}
  >
    <div className="flex flex-col gap-3 z-10">
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 w-12 h-12 rounded-lg flex items-center justify-center transform-gpu transition-all duration-300 ease-in-out group-hover:scale-90">
        <Icon size={24} className="text-purple-700" />
      </div>
      
      <div className="transform-gpu transition-all duration-300 group-hover:-translate-y-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-purple-50/[.05]" />
  </motion.div>
);

export const ClinicalWorkflowSection = () => {
  const [activeTab, setActiveTab] = useState("admin");

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
        py: { xs: 4, md: 6 },
        bgcolor: "#f8f9ff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 5 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
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
                mb: 3,
                color: "#000000",
                textAlign: "center",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "2.75rem" },
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
              CRUSH is more than an AI medical scribe—it streamlines healthcare workflows, 
              automates tasks, and enhances patient care, transforming how clinics operate.
            </Typography>
          </motion.div>
        </Box>
        
        <Tabs defaultValue="admin" className="w-full mb-8" onValueChange={setActiveTab}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <TabsList className="w-auto bg-gradient-to-r from-purple-100/80 to-blue-100/80 p-1.5 shadow-md">
              <TabsTrigger value="admin" className="relative py-2.5 transition-all">
                <motion.span 
                  className="font-medium z-10 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Automate Staffing & Admin Work
                </motion.span>
              </TabsTrigger>
              <TabsTrigger value="clinical" className="relative py-2.5 transition-all">
                <motion.span 
                  className="font-medium z-10 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  AI Assistance for Physicians
                </motion.span>
              </TabsTrigger>
            </TabsList>
          </Box>
          
          <TabsContent value="admin" className="mt-0">
            <ContainerScroll
              titleComponent={
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1,
                    color: "#000",
                    fontSize: { xs: "1.5rem", md: "1.75rem" }
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">
                    Automate Staffing & Cut Admin Work
                  </span>
                </Typography>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
                {adminFeatures.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    className="h-full"
                  />
                ))}
              </div>
            </ContainerScroll>
          </TabsContent>
          
          <TabsContent value="clinical" className="mt-0">
            <ContainerScroll
              titleComponent={
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1,
                    color: "#000",
                    fontSize: { xs: "1.5rem", md: "1.75rem" }
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
                    AI Assistance for Physicians – Smarter, More Accurate Decisions
                  </span>
                </Typography>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
                {clinicalFeatures.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    className="h-full"
                  />
                ))}
              </div>
            </ContainerScroll>
          </TabsContent>
        </Tabs>
      </Container>
    </Box>
  );
};
