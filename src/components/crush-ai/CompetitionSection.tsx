import React, { useState, useCallback, useMemo } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Star, Trophy, ChevronRight, FilePlus, Copy, Import, Users, Zap, Shield, Brain, Clock, Globe, Cog, ArrowRight } from "lucide-react";
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { LazyLoad } from "@/components/ui/lazy-load";

interface CrushFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

// CRUSH Features and Advantages
const crushFeatures: CrushFeature[] = [
  {
    id: "accuracy",
    title: "Pinpoint Accuracy",
    description: "Nails every detail of your medical jargon with unmatched precision",
    icon: <Star size={24} />,
    benefits: ["99.9% accuracy rate", "Understands medical terminology", "Context-aware documentation", "Minimizes errors"]
  },
  {
    id: "ehr-sync",
    title: "Universal EHR Integration",
    description: "Seamless sync with any EHR system - Epic, Cerner, or custom setups",
    icon: <Zap size={24} />,
    benefits: ["Works with 100+ EHR systems", "One-click sync", "Real-time updates", "No workflow disruption"]
  },
  {
    id: "multilingual",
    title: "Multilingual Mastery",
    description: "Fluent in English, Spanish, French, and more languages",
    icon: <Globe size={24} />,
    benefits: ["10+ languages supported", "Cultural context awareness", "Accent recognition", "Global practice ready"]
  },
  {
    id: "customization",
    title: "Human-Backed Customization",
    description: "Expert team tailors notes and workflows to your exact needs",
    icon: <Cog size={24} />,
    benefits: ["Dedicated setup team", "Custom workflows", "Personal preferences", "Ongoing optimization"]
  },
  {
    id: "automation",
    title: "Complete Workflow Automation",
    description: "Handles referrals, prescriptions, and screenings automatically",
    icon: <Brain size={24} />,
    benefits: ["Automated referrals", "Smart prescriptions", "Screening reminders", "Task management"]
  },
  {
    id: "clinical-smarts",
    title: "Clinical Intelligence",
    description: "Real-time tips, HCC tracking, and preventive care flags",
    icon: <Trophy size={24} />,
    benefits: ["HCC code suggestions", "Quality metrics tracking", "Preventive care alerts", "Clinical decision support"]
  },
  {
    id: "efficiency",
    title: "Rapid Documentation",
    description: "Charts completed in under a minute with zero late-night edits",
    icon: <Clock size={24} />,
    benefits: ["Sub-minute documentation", "Instant note generation", "Time savings", "Work-life balance"]
  },
  {
    id: "security",
    title: "Ironclad Security",
    description: "HIPAA, SOC 2, HITECH compliant - your data is fortress-secure",
    icon: <Shield size={24} />,
    benefits: ["HIPAA compliant", "SOC 2 certified", "End-to-end encryption", "Zero data retention"]
  },
  {
    id: "specialty",
    title: "Specialty Adaptation",
    description: "Perfectly customized for any specialty from cardiology to psychiatry",
    icon: <Users size={24} />,
    benefits: ["50+ specialties", "Custom templates", "Specialty workflows", "Expert knowledge base"]
  },
  {
    id: "template-builder",
    title: "AI Template Builder",
    description: "Build, modify or import personalized templates with one click",
    icon: <FilePlus size={24} />,
    benefits: ["One-click creation", "AI-powered suggestions", "Import existing templates", "Community sharing"]
  }
];

// Memoized specialty tags
const SpecialtyTags = React.memo(() => (
  <Box 
    sx={{ 
      mt: 2,
      display: "flex",
      flexWrap: "wrap",
      gap: 1
    }}
  >
    {[
      "Cardiology", "Dermatology", "Orthopedics", 
      "Pediatrics", "Psychiatry", "Neurology", 
      "Oncology", "Primary Care", "+ More"
    ].map((specialty, idx) => (
      <Box 
        key={idx}
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.05 }}
        sx={{ 
          px: 2,
          py: 0.5,
          borderRadius: 5,
          bgcolor: `rgba(20, 49, 81, 0.1)`,
          border: `1px solid rgba(20, 49, 81, 0.2)`,
          fontSize: "0.75rem",
          fontWeight: 500,
          color: crushAIColors.text.primary
        }}
      >
        {specialty}
      </Box>
    ))}
  </Box>
));

SpecialtyTags.displayName = 'SpecialtyTags';

// Memoized template items
const TemplateItems = React.memo(() => (
  <Box 
    sx={{ 
      mt: 2, 
      display: "grid", 
      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, 
      gap: 1.5 
    }}
  >
    {[
      { icon: <FilePlus size={16} />, text: "Create from scratch" },
      { icon: <Copy size={16} />, text: "Generate from instructions" },
      { icon: <Import size={16} />, text: "Import existing templates" },
      { icon: <Users size={16} />, text: "Browse community" }
    ].map((item, idx) => (
      <Box 
        key={idx}
        component={motion.div}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 1.5,
          p: 1.5,
          borderRadius: 1,
          bgcolor: `rgba(20, 49, 81, 0.05)`,
          border: `1px solid rgba(20, 49, 81, 0.1)`
        }}
      >
        <Box sx={{ color: crushAIColors.icons.primary }}>
          {item.icon}
        </Box>
        <Typography variant="body2" sx={{ fontSize: "0.8rem", color: crushAIColors.text.primary }}>
          {item.text}
        </Typography>
      </Box>
    ))}
  </Box>
));

TemplateItems.displayName = 'TemplateItems';

// Feature Card Component
const FeatureCard = React.memo(({ 
  feature, 
  index 
}: { 
  feature: CrushFeature, 
  index: number 
}) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -5, scale: 1.02 }}
    sx={{
      p: 4,
      borderRadius: 3,
      bgcolor: 'rgba(255, 255, 255, 0.95)',
      border: '1px solid rgba(20, 49, 81, 0.1)',
      boxShadow: '0 8px 32px rgba(20, 49, 81, 0.1)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 16px 48px rgba(20, 49, 81, 0.2)',
        borderColor: 'rgba(20, 49, 81, 0.3)'
      }
    }}
  >
    {/* Icon and Title */}
    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
      <Box 
        sx={{ 
          p: 2,
          borderRadius: 2,
          bgcolor: 'rgba(20, 49, 81, 0.1)',
          color: crushAIColors.icons.primary,
          mr: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {feature.icon}
      </Box>
      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 700, 
          color: crushAIColors.text.primary,
          fontSize: { xs: '1.25rem', md: '1.5rem' }
        }}
      >
        {feature.title}
      </Typography>
    </Box>

    {/* Description */}
    <Typography 
      variant="body1" 
      sx={{ 
        color: crushAIColors.text.secondary, 
        lineHeight: 1.6,
        mb: 3,
        fontSize: '1rem'
      }}
    >
      {feature.description}
    </Typography>

    {/* Benefits */}
    <Box sx={{ mb: 3 }}>
      {feature.benefits.map((benefit, idx) => (
        <Box 
          key={idx}
          component={motion.div}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: (index * 0.1) + (idx * 0.1) }}
          viewport={{ once: true }}
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 1.5,
            mb: 1.5
          }}
        >
          <CheckCircle size={16} color="#4CAF50" />
          <Typography 
            variant="body2" 
            sx={{ 
              color: crushAIColors.text.primary,
              fontSize: '0.9rem',
              fontWeight: 500
            }}
          >
            {benefit}
          </Typography>
        </Box>
      ))}
    </Box>

    {/* Special content for specific features */}
    {feature.id === "specialty" && <SpecialtyTags />}
    {feature.id === "template-builder" && <TemplateItems />}

    {/* Learn More Button */}
    <Box 
      component={motion.div}
      whileHover={{ x: 5 }}
      sx={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 1,
        mt: 3,
        color: crushAIColors.icons.primary,
        cursor: 'pointer',
        fontWeight: 600
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        Learn More
      </Typography>
      <ArrowRight size={16} />
    </Box>
  </Box>
));

FeatureCard.displayName = 'FeatureCard';

// Main component
export const CompetitionSection = React.memo(() => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  
  // Memoized header section
  const HeaderSection = useMemo(() => (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      sx={{ mb: 8, textAlign: "center" }}
    >
      <Box sx={{ mb: 3, position: "relative" }}>
        <SparklesTextAdvanced 
          text="CRUSH Features & Advantages" 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white"
          colors={{ first: "#FFFFFF", second: "#FFFFFF" }}
          sparklesCount={25}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          maxWidth: 900,
          mx: "auto",
          color: "#FFFFFF",
          fontWeight: 400,
          fontSize: { xs: '1.1rem', md: '1.25rem' },
          lineHeight: 1.6,
          mb: 2
        }}
      >
        Discover the game-changing features that make C.R.U.S.H. the most advanced AI medical scribe on the market.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 700,
          mx: "auto",
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: { xs: '1rem', md: '1.1rem' },
          lineHeight: 1.5
        }}
      >
        From pinpoint accuracy to complete workflow automation, every feature is designed to transform your practice.
      </Typography>
    </Box>
  ), []);

  // Features Grid
  const FeaturesGrid = useMemo(() => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { 
          xs: '1fr', 
          md: 'repeat(2, 1fr)', 
          lg: 'repeat(3, 1fr)' 
        },
        gap: { xs: 3, md: 4 },
        mb: 8
      }}
    >
      {crushFeatures.map((feature, index) => (
        <FeatureCard 
          key={feature.id}
          feature={feature}
          index={index}
        />
      ))}
    </Box>
  ), []);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12, lg: 16 },
        position: "relative",
        zIndex: 1,
        contain: "layout"
      }}
    >
      <Container maxWidth="xl">
        {HeaderSection}
        <LazyLoad threshold={0.01} rootMargin="400px">
          {FeaturesGrid}
        </LazyLoad>
      </Container>
    </Box>
  );
});

CompetitionSection.displayName = 'CompetitionSection';