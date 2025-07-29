import React, { useState, useCallback, useMemo } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Star, Trophy, FilePlus, Zap, Shield, Brain, Clock, Globe, Cog, Users, ChevronDown } from "lucide-react";
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { LazyLoad } from "@/components/ui/lazy-load";

interface CrushFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  keyPoints: string[];
  color: string;
}

// Core CRUSH Features for Clinicians
const crushFeatures: CrushFeature[] = [
  {
    id: "context-aware",
    title: "Context-aware Documentation",
    description: "Pulls relevant data from past visits, adapts notes to current conversation context.",
    icon: <Brain size={20} />,
    keyPoints: ["Pulls relevant data from past visits", "Adapts notes to current conversation context", "99% clinical accuracy"],
    color: "#3B82F6" // Blue
  },
  {
    id: "precharting",
    title: "AI Precharting",
    description: "Automated chart prep intelligence that gathers referrals, labs, notes, imaging.",
    icon: <FilePlus size={20} />,
    keyPoints: ["Automated chart prep intelligence", "Gathers referrals, labs, notes, imaging", "Saves 2.2 hours daily"],
    color: "#10B981" // Green
  },
  {
    id: "coding",
    title: "AI Coding (E/M, ICD, CPT)",
    description: "Real-time, compliant coding that's audit-ready and reduces admin load.",
    icon: <Cog size={20} />,
    keyPoints: ["Real-time, compliant coding", "Audit-ready, reduces admin load", "34% more ICD-10 codes generated"],
    color: "#8B5CF6" // Purple
  },
  {
    id: "chart-closure",
    title: "Accelerated Chart Closure",
    description: "AI-powered structured notes with minimal post-visit documentation.",
    icon: <Clock size={20} />,
    keyPoints: ["AI-powered structured notes", "Minimal post-visit documentation", "1.6 min. chart closure time"],
    color: "#F59E0B" // Orange
  },
  {
    id: "telemedicine",
    title: "Telemedicine Compatible",
    description: "Works in-person and via telehealth, maintaining full functionality anywhere.",
    icon: <Globe size={20} />,
    keyPoints: ["Works in-person and via telehealth", "Maintains full functionality anywhere", "Supports hybrid workflows"],
    color: "#06B6D4" // Cyan
  },
  {
    id: "ehr-integration",
    title: "Works with 100+ EHRs – No API Needed",
    description: "Syncs with Epic, Cerner, and more. No API or dev setup needed.",
    icon: <Zap size={20} />,
    keyPoints: ["Syncs with Epic, Cerner, and more", "No API or dev setup needed", "Fits into your existing workflow"],
    color: "#EF4444" // Red
  },
  {
    id: "multilingual",
    title: "Multilingual Support",
    description: "Speaks 60+ languages, understands accents and dialects.",
    icon: <Globe size={20} />,
    keyPoints: ["Speaks 60+ languages", "Understands accents and dialects", "Captures cultural context"],
    color: "#14B8A6" // Teal
  },
  {
    id: "templates",
    title: "Smart Templates",
    description: "Create specialty-based templates and customize with AI help.",
    icon: <FilePlus size={20} />,
    keyPoints: ["Create specialty-based templates", "Customize with AI help", "Streamline structured notes"],
    color: "#84CC16" // Lime
  },
  {
    id: "onboarding",
    title: "Human-backed Onboarding",
    description: "Guided setup and training with real-time human support.",
    icon: <Users size={20} />,
    keyPoints: ["Guided setup and training", "Real-time human support", "Long-term success assistance"],
    color: "#A855F7" // Violet
  }
];

// Scannable Feature Card - Always Visible Content
const FeatureCard = React.memo(({ 
  feature, 
  index 
}: { 
  feature: CrushFeature, 
  index: number 
}) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        p: { xs: 3, sm: 4 },
        borderRadius: 3,
        bgcolor: 'rgba(255, 255, 255, 0.98)',
        border: `1px solid ${feature.color}20`,
        boxShadow: `0 2px 12px ${feature.color}10`,
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: `0 8px 25px ${feature.color}20`,
          transform: 'translateY(-4px)',
          border: `1px solid ${feature.color}40`
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: feature.color,
          opacity: 0.6
        }
      }}
    >
      {/* Header with Icon and Title */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
        <Box 
          sx={{ 
            width: 44,
            height: 44,
            borderRadius: 2.5,
            bgcolor: `${feature.color}15`,
            border: `1px solid ${feature.color}30`,
            color: feature.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.2s ease',
            '&:hover': {
              bgcolor: `${feature.color}20`,
              transform: 'scale(1.05)'
            }
          }}
        >
          {React.cloneElement(feature.icon as React.ReactElement, { 
            size: 20,
            strokeWidth: 1.8
          })}
        </Box>
        
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              color: crushAIColors.text.primary,
              fontSize: { xs: '0.95rem', sm: '1rem' },
              lineHeight: 1.4,
              mb: 0
            }}
          >
            {feature.title}
          </Typography>
        </Box>
      </Box>

      {/* Key Points - Always Visible */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {feature.keyPoints.map((point, idx) => (
            <Box 
              key={idx}
              sx={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: 1,
                fontSize: { xs: '0.8rem', sm: '0.85rem' },
                color: crushAIColors.text.primary,
                lineHeight: 1.4
              }}
            >
              <CheckCircle 
                size={14} 
                color="#4CAF50" 
                style={{ marginTop: '2px', flexShrink: 0 }}
              />
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 500, 
                  fontSize: { xs: '0.8rem', sm: '0.85rem' },
                  lineHeight: 1.4,
                  color: crushAIColors.text.primary
                }}
              >
                {point}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
});

FeatureCard.displayName = 'FeatureCard';

// Stats Overview
const StatsOverview = React.memo(() => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' },
      gap: 2,
      mb: 6,
      p: 3,
      borderRadius: 2,
      bgcolor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}
  >
    {[
      { number: '99.9%', label: 'Accuracy Rate' },
      { number: '<60s', label: 'Chart Time' },
      { number: '100+', label: 'EHR Systems' },
      { number: 'No API', label: 'Works with Any EHR' },
      { number: '60+', label: 'Languages' },
      { number: '50+', label: 'Specialties' }
    ].map((stat, idx) => (
      <Box key={idx} sx={{ textAlign: 'center' }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 800, 
            color: 'white',
            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.8rem' },
            mb: 0.5
          }}
        >
          {stat.number}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
            lineHeight: 1.2
          }}
        >
          {stat.label}
        </Typography>
      </Box>
    ))}
  </Box>
));

StatsOverview.displayName = 'StatsOverview';

// Main component
export const CompetitionSection = React.memo(() => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        position: "relative",
        zIndex: 1
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ mb: 6, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              mb: 3
            }}
          >
            Why clinicians choose CRUSH
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 600,
              mx: "auto",
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.5,
              mb: 4
            }}
          >
            Powerful AI. Zero burnout.
          </Typography>
        </Box>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)' 
            },
            gap: 1.5
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

      </Container>
    </Box>
  );
});

CompetitionSection.displayName = 'CompetitionSection';