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
}

// Streamlined CRUSH Features
const crushFeatures: CrushFeature[] = [
  {
    id: "accuracy",
    title: "99.9% Accuracy",
    description: "Precise medical terminology recognition",
    icon: <Star size={20} />,
    keyPoints: ["Medical jargon mastery", "Context awareness", "Zero errors"]
  },
  {
    id: "speed",
    title: "60-Second Charts",
    description: "Complete documentation in under a minute",
    icon: <Clock size={20} />,
    keyPoints: ["Instant generation", "No overtime", "Real-time processing"]
  },
  {
    id: "security",
    title: "Fortress Security",
    description: "HIPAA, SOC 2, HITECH compliant",
    icon: <Shield size={20} />,
    keyPoints: ["End-to-end encryption", "Zero data retention", "Compliance certified"]
  },
  {
    id: "integration",
    title: "100+ EHR Systems",
    description: "Universal compatibility with all major EHRs",
    icon: <Zap size={20} />,
    keyPoints: ["Epic & Cerner", "One-click sync", "Seamless workflow"]
  },
  {
    id: "multilingual",
    title: "60+ Languages",
    description: "Global language support with accent recognition",
    icon: <Globe size={20} />,
    keyPoints: ["Accent recognition", "Cultural context", "International ready"]
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description: "Auto-handles referrals and prescriptions",
    icon: <Brain size={20} />,
    keyPoints: ["Smart referrals", "Auto prescriptions", "Task automation"]
  },
  {
    id: "intelligence",
    title: "Clinical Intelligence",
    description: "HCC tracking and preventive care alerts",
    icon: <Trophy size={20} />,
    keyPoints: ["HCC optimization", "Quality metrics", "Care alerts"]
  },
  {
    id: "templates",
    title: "Smart Templates",
    description: "AI-powered template creation and sharing",
    icon: <FilePlus size={20} />,
    keyPoints: ["One-click creation", "Community library", "AI suggestions"]
  },
  {
    id: "specialties",
    title: "50+ Specialties",
    description: "Customized for every medical specialty",
    icon: <Users size={20} />,
    keyPoints: ["Expert knowledge", "Custom protocols", "Specialty workflows"]
  },
  {
    id: "customization",
    title: "Human-Backed Setup",
    description: "Expert team personalizes your workflow",
    icon: <Cog size={20} />,
    keyPoints: ["Dedicated team", "Custom setup", "Ongoing support"]
  }
];

// Compact Feature Card
const CompactCard = React.memo(({ 
  feature, 
  index 
}: { 
  feature: CrushFeature, 
  index: number 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      viewport={{ once: true, amount: 0.5 }}
      sx={{
        p: 2,
        borderRadius: 1.5,
        bgcolor: 'rgba(255, 255, 255, 0.95)',
        border: '1px solid rgba(20, 49, 81, 0.1)',
        boxShadow: '0 2px 8px rgba(20, 49, 81, 0.08)',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 4px 16px rgba(20, 49, 81, 0.15)',
          transform: 'translateY(-2px)'
        }
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box 
          sx={{ 
            p: 1,
            borderRadius: 1,
            bgcolor: 'rgba(20, 49, 81, 0.1)',
            color: crushAIColors.icons.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          {feature.icon}
        </Box>
        
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              fontWeight: 700, 
              color: crushAIColors.text.primary,
              fontSize: '0.95rem',
              mb: 0.5
            }}
          >
            {feature.title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: crushAIColors.text.secondary,
              fontSize: '0.8rem',
              lineHeight: 1.3
            }}
          >
            {feature.description}
          </Typography>
        </Box>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} color={crushAIColors.icons.primary} />
        </motion.div>
      </Box>

      {/* SEO-friendly hidden content for crawlability */}
      <Box 
        sx={{ 
          position: 'absolute', 
          left: '-9999px', 
          width: '1px', 
          height: '1px', 
          overflow: 'hidden' 
        }}
      >
        {feature.keyPoints.map((point, idx) => (
          <span key={idx}>{point} </span>
        ))}
      </Box>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(20, 49, 81, 0.1)' }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {feature.keyPoints.map((point, idx) => (
                  <Box 
                    key={idx}
                    sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: 0.5,
                      fontSize: '0.75rem',
                      color: crushAIColors.text.primary,
                      minWidth: 'fit-content'
                    }}
                  >
                    <CheckCircle size={10} color="#4CAF50" />
                    <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '0.75rem' }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
});

CompactCard.displayName = 'CompactCard';

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
          <SparklesTextAdvanced 
            text="C.R.U.S.H. Advantages" 
            className="text-3xl md:text-4xl font-bold text-center mb-3 text-white"
            colors={{ first: "#FFFFFF", second: "#FFFFFF" }}
            sparklesCount={15}
          />
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
            The most advanced AI medical scribe with game-changing features
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
            <CompactCard 
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </Box>

        {/* Bottom Message */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          sx={{ 
            textAlign: 'center',
            mt: 6,
            p: 3,
            borderRadius: 2,
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.95rem',
              fontStyle: 'italic'
            }}
          >
            Click any feature card to explore key benefits and capabilities
          </Typography>
        </Box>
      </Container>
    </Box>
  );
});

CompetitionSection.displayName = 'CompetitionSection';