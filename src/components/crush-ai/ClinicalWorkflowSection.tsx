
import React, { useState } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { AdminTabContent, ClinicalTabContent } from "./AnimatedTabContent";
import { AnimatedFeatureCard } from "./AnimatedFeatureCard";
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const ClinicalWorkflowSection = () => {
  const [activeTab, setActiveTab] = useState("admin");
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));

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

  // Card component for mobile view
  const Card = ({ icon: Icon, title, description, index }) => (
    <article className="workflow-feature-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <AnimatedFeatureCard 
        icon={Icon} 
        title={title} 
        description={description} 
        animationDelay={index * 0.1}
        primaryColor={crushAIColors.primaryFlat}
        secondaryColor={crushAIColors.secondary}
        tertiaryColor={crushAIColors.tertiary}
      />
    </article>
  );

  // Render function for mobile view
  const renderFeaturesMobile = (features: any[]) => (
    <section className="workflow-features-mobile">
      {/* SEO Content */}
      <div className="sr-only">
        <h3>Clinical Workflow Features</h3>
        {features.map((feature, index) => (
          <article key={index}>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card 
                  icon={feature.icon} 
                  title={feature.title} 
                  description={feature.description} 
                  index={index}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious className="relative static left-auto translate-y-0" />
          <CarouselNext className="relative static right-auto translate-y-0" />
        </div>
      </Carousel>
    </section>
  );

  return (
    <section
      aria-labelledby="clinical-workflow-heading"
      style={{
        paddingTop: '2rem',
        paddingBottom: '2rem',
        background: crushAIColors.background.gradient,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* SEO Content for Admin Features */}
      <div className="sr-only">
        <h2 id="clinical-workflow-heading">Clinical Workflow Automation</h2>
        <p>CRUSH is more than an AI medical scribe—it streamlines healthcare workflows, automates tasks, and enhances patient care, transforming how clinics operate.</p>
        
        <section>
          <h3>Admin Workflow Automation Features</h3>
          {adminFeatures.map((feature, index) => (
            <article key={index}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>
        
        <section>
          <h3>Clinical Assistant Features</h3>
          {clinicalFeatures.map((feature, index) => (
            <article key={index}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>
      </div>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 5 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <motion.div
              variants={itemVariants}
            >
              <Typography 
                component="h2"
                variant="h3" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  color: '#000000',
                  textAlign: "center",
                  fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
                  lineHeight: 1.2
                }}
              >
                More Than Just an AI Scribe – CRUSH Automates Clinical Workflows
              </Typography>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
            >
              <Typography 
                component="p"
                variant="body1" 
                sx={{ 
                  color: '#000000',
                  maxWidth: "800px",
                  mx: "auto",
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  textAlign: "center"
                }}
              >
                CRUSH is more than an AI medical scribe—it streamlines healthcare workflows, 
                automates tasks, and enhances patient care, transforming how clinics operate.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
        
        <Tabs defaultValue="admin" className="w-full" onValueChange={setActiveTab}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
              <TabsList className="w-auto bg-black/5 p-1.5 rounded-full shadow-sm">
                <TabsTrigger 
                  value="admin" 
                  className="relative py-2.5 px-6 rounded-full transition-all duration-300 data-[state=active]:bg-gradient-to-r from-[#009bca] to-[#0d252b] data-[state=active]:text-white hover:bg-[#046f90]/10"
                >
                  <span>{isMobile ? "Admin" : "Admin Workflow Automation"}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="clinical" 
                  className="relative py-2.5 px-6 rounded-full transition-all duration-300 data-[state=active]:bg-gradient-to-r from-[#009bca] to-[#0d252b] data-[state=active]:text-white hover:bg-[#046f90]/10"
                >
                  <span>{isMobile ? "Clinical" : "Clinical Assistant Features"}</span>
                </TabsTrigger>
              </TabsList>
            </Box>
          </motion.div>
          
          <TabsContent value="admin" className="mt-0 focus-visible:outline-none">
            <section className="admin-workflow-features">
              <h3 className="sr-only">Admin Workflow Automation Features</h3>
              {isMobile 
                ? renderFeaturesMobile(adminFeatures) 
                : <AdminTabContent />
              }
            </section>
          </TabsContent>
          
          <TabsContent value="clinical" className="mt-0 focus-visible:outline-none">
            <section className="clinical-assistant-features">
              <h3 className="sr-only">Clinical Assistant Features</h3>
              {isMobile 
                ? renderFeaturesMobile(clinicalFeatures) 
                : <ClinicalTabContent />
              }
            </section>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};
