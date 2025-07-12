import React, { useState, useCallback, useMemo } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Star, Trophy, FilePlus, Copy, Import, Users, Zap, Shield, Brain, Clock, Globe, Cog } from "lucide-react";
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { LazyLoad } from "@/components/ui/lazy-load";

interface CrushFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  category: 'core' | 'integration' | 'intelligence';
}

// CRUSH Features organized by category
const crushFeatures: CrushFeature[] = [
  {
    id: "accuracy",
    title: "Pinpoint Accuracy",
    description: "99.9% accuracy with medical terminology and context awareness",
    icon: <Star size={28} />,
    benefits: ["Medical jargon mastery", "Context-aware documentation", "Error-free transcription"],
    category: 'core'
  },
  {
    id: "efficiency",
    title: "Lightning Speed",
    description: "Complete documentation in under 60 seconds",
    icon: <Clock size={28} />,
    benefits: ["Sub-minute charts", "Instant generation", "Zero overtime"],
    category: 'core'
  },
  {
    id: "security",
    title: "Fortress Security",
    description: "HIPAA, SOC 2, HITECH compliant with zero data retention",
    icon: <Shield size={28} />,
    benefits: ["End-to-end encryption", "Compliance certified", "Privacy first"],
    category: 'core'
  },
  {
    id: "ehr-sync",
    title: "Universal Integration",
    description: "Seamless sync with 100+ EHR systems including Epic and Cerner",
    icon: <Zap size={28} />,
    benefits: ["One-click sync", "Real-time updates", "No workflow disruption"],
    category: 'integration'
  },
  {
    id: "multilingual",
    title: "Global Ready",
    description: "Fluent in 10+ languages with cultural context awareness",
    icon: <Globe size={28} />,
    benefits: ["Accent recognition", "Cultural nuances", "Global practice support"],
    category: 'integration'
  },
  {
    id: "template-builder",
    title: "Smart Templates",
    description: "AI-powered template creation and community sharing",
    icon: <FilePlus size={28} />,
    benefits: ["One-click creation", "AI suggestions", "Community library"],
    category: 'integration'
  },
  {
    id: "clinical-smarts",
    title: "Clinical Intelligence",
    description: "Real-time HCC tracking and preventive care alerts",
    icon: <Trophy size={28} />,
    benefits: ["HCC optimization", "Quality metrics", "Clinical decision support"],
    category: 'intelligence'
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description: "Handles referrals, prescriptions, and screenings automatically",
    icon: <Brain size={28} />,
    benefits: ["Smart referrals", "Auto prescriptions", "Task management"],
    category: 'intelligence'
  },
  {
    id: "specialty",
    title: "Specialty Mastery",
    description: "Customized for 50+ medical specialties",
    icon: <Users size={28} />,
    benefits: ["Expert knowledge", "Specialty workflows", "Custom protocols"],
    category: 'intelligence'
  }
];

const categories = {
  core: { title: "Core Features", color: "#4CAF50" },
  integration: { title: "Integration & Flexibility", color: "#2196F3" },
  intelligence: { title: "AI Intelligence", color: "#9C27B0" }
};

// Hero Feature Component
const HeroFeature = React.memo(({ feature }: { feature: CrushFeature }) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    sx={{
      p: { xs: 4, md: 6 },
      borderRadius: 4,
      bgcolor: 'rgba(255, 255, 255, 0.95)',
      border: '2px solid rgba(76, 175, 80, 0.3)',
      boxShadow: '0 20px 60px rgba(76, 175, 80, 0.15)',
      backdropFilter: 'blur(20px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {/* Glow effect */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
        borderRadius: 4,
        zIndex: -1
      }}
    />
    
    <Box 
      sx={{ 
        display: 'inline-flex',
        p: 3,
        borderRadius: '50%',
        bgcolor: 'rgba(76, 175, 80, 0.1)',
        color: '#4CAF50',
        mb: 3
      }}
    >
      {feature.icon}
    </Box>
    
    <Typography 
      variant="h4" 
      sx={{ 
        fontWeight: 800, 
        color: crushAIColors.text.primary,
        mb: 2,
        fontSize: { xs: '1.75rem', md: '2.25rem' }
      }}
    >
      {feature.title}
    </Typography>
    
    <Typography 
      variant="h6" 
      sx={{ 
        color: crushAIColors.text.secondary, 
        mb: 4,
        fontSize: { xs: '1.1rem', md: '1.25rem' },
        lineHeight: 1.5
      }}
    >
      {feature.description}
    </Typography>
    
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
      {feature.benefits.map((benefit, idx) => (
        <Box 
          key={idx}
          component={motion.div}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: 20,
            bgcolor: 'rgba(76, 175, 80, 0.1)',
            border: '1px solid rgba(76, 175, 80, 0.3)',
            color: '#4CAF50',
            fontWeight: 600,
            fontSize: '0.9rem'
          }}
        >
          {benefit}
        </Box>
      ))}
    </Box>
  </Box>
));

HeroFeature.displayName = 'HeroFeature';

// Compact Feature Card
const CompactFeatureCard = React.memo(({ 
  feature, 
  index 
}: { 
  feature: CrushFeature, 
  index: number 
}) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ y: -3 }}
    sx={{
      p: 3,
      borderRadius: 2,
      bgcolor: 'rgba(255, 255, 255, 0.9)',
      border: `1px solid ${categories[feature.category].color}40`,
      boxShadow: `0 4px 20px ${categories[feature.category].color}20`,
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: `0 8px 30px ${categories[feature.category].color}30`,
        borderColor: `${categories[feature.category].color}60`
      }
    }}
  >
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
      <Box 
        sx={{ 
          p: 1.5,
          borderRadius: 1.5,
          bgcolor: `${categories[feature.category].color}15`,
          color: categories[feature.category].color,
          flexShrink: 0
        }}
      >
        {feature.icon}
      </Box>
      
      <Box sx={{ flex: 1 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700, 
            color: crushAIColors.text.primary,
            mb: 1,
            fontSize: '1.1rem'
          }}
        >
          {feature.title}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: crushAIColors.text.secondary, 
            mb: 2,
            lineHeight: 1.5
          }}
        >
          {feature.description}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {feature.benefits.slice(0, 2).map((benefit, idx) => (
            <Box 
              key={idx}
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 0.5,
                fontSize: '0.8rem',
                color: crushAIColors.text.primary
              }}
            >
              <CheckCircle size={12} color={categories[feature.category].color} />
              <Typography variant="caption" sx={{ fontWeight: 500 }}>
                {benefit}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
));

CompactFeatureCard.displayName = 'CompactFeatureCard';

// Category Section
const CategorySection = React.memo(({ 
  categoryKey, 
  features 
}: { 
  categoryKey: keyof typeof categories,
  features: CrushFeature[] 
}) => (
  <Box sx={{ mb: 6 }}>
    <Box 
      component={motion.div}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2, 
        mb: 3 
      }}
    >
      <Box
        sx={{
          width: 4,
          height: 24,
          bgcolor: categories[categoryKey].color,
          borderRadius: 2
        }}
      />
      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 700,
          color: crushAIColors.text.primary,
          fontSize: { xs: '1.25rem', md: '1.5rem' }
        }}
      >
        {categories[categoryKey].title}
      </Typography>
    </Box>
    
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
        gap: 2
      }}
    >
      {features.map((feature, index) => (
        <CompactFeatureCard 
          key={feature.id}
          feature={feature}
          index={index}
        />
      ))}
    </Box>
  </Box>
));

CategorySection.displayName = 'CategorySection';

// Main component
export const CompetitionSection = React.memo(() => {
  const heroFeature = crushFeatures[0]; // Accuracy as hero
  const otherFeatures = crushFeatures.slice(1);
  
  // Group features by category
  const featuresByCategory = useMemo(() => {
    return Object.keys(categories).reduce((acc, category) => {
      acc[category as keyof typeof categories] = otherFeatures.filter(f => f.category === category);
      return acc;
    }, {} as Record<keyof typeof categories, CrushFeature[]>);
  }, [otherFeatures]);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        zIndex: 1
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{ mb: 8, textAlign: "center" }}
        >
          <SparklesTextAdvanced 
            text="Why Choose C.R.U.S.H.?" 
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
            colors={{ first: "#FFFFFF", second: "#FFFFFF" }}
            sparklesCount={20}
          />
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6
            }}
          >
            Discover the game-changing features that make C.R.U.S.H. the most advanced AI medical scribe
          </Typography>
        </Box>

        {/* Hero Feature */}
        <Box sx={{ mb: 10 }}>
          <HeroFeature feature={heroFeature} />
        </Box>

        {/* Feature Categories */}
        <LazyLoad threshold={0.1} rootMargin="200px">
          {Object.entries(featuresByCategory).map(([categoryKey, features]) => (
            <CategorySection 
              key={categoryKey}
              categoryKey={categoryKey as keyof typeof categories}
              features={features}
            />
          ))}
        </LazyLoad>

        {/* Bottom CTA */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{ 
            textAlign: 'center',
            mt: 8,
            p: 4,
            borderRadius: 3,
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'white', 
              mb: 2,
              fontWeight: 600 
            }}
          >
            Ready to experience the difference?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 3 
            }}
          >
            Join thousands of healthcare providers who've transformed their practice with C.R.U.S.H.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
});

CompetitionSection.displayName = 'CompetitionSection';