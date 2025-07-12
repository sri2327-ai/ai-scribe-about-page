import React, { useState } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Star, Trophy, FilePlus, Zap, Shield, Brain, Clock, Globe, Cog, Users, ChevronDown, Hospital, Stethoscope } from "lucide-react";
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { crushAIColors } from "@/theme/crush-ai-theme";

interface CrushFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  category: 'core' | 'integration' | 'intelligence';
}

// Key CRUSH Features organized by category
const crushFeatures: CrushFeature[] = [
  // Core Features
  {
    id: "accuracy",
    title: "99.9% Medical Accuracy",
    description: "Precise medical terminology recognition with context awareness",
    icon: <Star size={18} />,
    benefits: ["Medical jargon mastery", "Context-aware processing", "Zero transcription errors"],
    category: 'core'
  },
  {
    id: "speed",
    title: "60-Second Documentation",
    description: "Complete charts generated in under a minute",
    icon: <Clock size={18} />,
    benefits: ["Instant chart generation", "Real-time processing", "No documentation overtime"],
    category: 'core'
  },
  {
    id: "security",
    title: "Enterprise Security",
    description: "HIPAA, SOC 2, HITECH compliant with end-to-end encryption",
    icon: <Shield size={18} />,
    benefits: ["End-to-end encryption", "Zero data retention", "Full compliance certified"],
    category: 'core'
  },
  
  // Integration Features
  {
    id: "ehr-integration",
    title: "Universal EHR Integration",
    description: "Seamless integration with 100+ EHR systems including Epic, Cerner, and all major platforms",
    icon: <Zap size={18} />,
    benefits: ["Epic & Cerner certified", "One-click EHR sync", "Works with any EHR system"],
    category: 'integration'
  },
  {
    id: "specialty-support",
    title: "50+ Medical Specialties",
    description: "Specialized templates and workflows for every medical specialty from cardiology to psychiatry",
    icon: <Stethoscope size={18} />,
    benefits: ["Specialty-specific templates", "Custom clinical protocols", "Expert knowledge base"],
    category: 'integration'
  },
  {
    id: "multilingual",
    title: "Global Language Support",
    description: "Support for 10+ languages with advanced accent recognition",
    icon: <Globe size={18} />,
    benefits: ["Advanced accent recognition", "Cultural context understanding", "International practice ready"],
    category: 'integration'
  },
  
  // Intelligence Features
  {
    id: "clinical-intelligence",
    title: "AI Clinical Intelligence",
    description: "HCC tracking, quality metrics, and preventive care alerts",
    icon: <Brain size={18} />,
    benefits: ["HCC code optimization", "Quality score tracking", "Preventive care alerts"],
    category: 'intelligence'
  },
  {
    id: "workflow-automation",
    title: "Smart Workflow Automation",
    description: "Automated referrals, prescriptions, and administrative tasks",
    icon: <Trophy size={18} />,
    benefits: ["Auto-generated referrals", "Smart prescription handling", "Administrative task automation"],
    category: 'intelligence'
  },
  {
    id: "templates",
    title: "AI-Powered Templates",
    description: "Community-driven template library with AI suggestions",
    icon: <FilePlus size={18} />,
    benefits: ["One-click template creation", "Community template library", "AI-powered suggestions"],
    category: 'intelligence'
  }
];

// Enhanced Feature Card with SEO-friendly content
const FeatureCard = React.memo(({ 
  feature, 
  index 
}: { 
  feature: CrushFeature, 
  index: number 
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article
      itemScope
      itemType="https://schema.org/SoftwareFeature"
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        viewport={{ once: true, amount: 0.3 }}
        sx={{
          p: { xs: 2, md: 2.5 },
          borderRadius: 2,
          bgcolor: 'rgba(255, 255, 255, 0.98)',
          border: '1px solid rgba(20, 49, 81, 0.12)',
          boxShadow: '0 2px 12px rgba(20, 49, 81, 0.08)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          height: 'auto',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(20, 49, 81, 0.16)',
            transform: 'translateY(-4px)',
            bgcolor: 'rgba(255, 255, 255, 1)'
          }
        }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {/* Always visible content */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
          <Box 
            sx={{ 
              p: 1.5,
              borderRadius: 1.5,
              bgcolor: `rgba(${feature.category === 'core' ? '59, 130, 246' : feature.category === 'integration' ? '16, 185, 129' : '168, 85, 247'}, 0.1)`,
              color: feature.category === 'core' ? '#3B82F6' : feature.category === 'integration' ? '#10B981' : '#A855F7',
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
              variant="h6" 
              component="h3"
              itemProp="name"
              sx={{ 
                fontWeight: 700, 
                color: crushAIColors.text.primary,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                mb: 0.5,
                lineHeight: 1.3
              }}
            >
              {feature.title}
            </Typography>
            <Typography 
              variant="body2"
              itemProp="description" 
              sx={{ 
                color: crushAIColors.text.secondary,
                fontSize: { xs: '0.8rem', md: '0.85rem' },
                lineHeight: 1.4,
                mb: 1.5
              }}
            >
              {feature.description}
            </Typography>

            {/* Always visible key benefits for SEO */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
              {feature.benefits.slice(0, 2).map((benefit, idx) => (
                <Box 
                  key={idx}
                  sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: 0.5,
                    fontSize: '0.7rem'
                  }}
                >
                  <CheckCircle size={12} color="#10B981" />
                  <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '0.7rem', color: crushAIColors.text.primary }}>
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <motion.div
            animate={{ rotate: showDetails ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={18} color={crushAIColors.icons.secondary} />
          </motion.div>
        </Box>

        {/* Expandable additional content */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden' }}
            >
              <Box sx={{ pt: 2, borderTop: '1px solid rgba(20, 49, 81, 0.08)' }}>
                {feature.benefits.length > 2 && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                    {feature.benefits.slice(2).map((benefit, idx) => (
                      <Box 
                        key={idx + 2}
                        sx={{ 
                          display: "flex", 
                          alignItems: "center", 
                          gap: 0.5,
                          fontSize: '0.75rem'
                        }}
                      >
                        <CheckCircle size={12} color="#10B981" />
                        <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '0.75rem', color: crushAIColors.text.primary }}>
                          {benefit}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </article>
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
      gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
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
      { number: '50+', label: 'Specialties' }
    ].map((stat, idx) => (
      <Box key={idx} sx={{ textAlign: 'center' }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 800, 
            color: 'white',
            fontSize: { xs: '1.5rem', md: '2rem' },
            mb: 0.5
          }}
        >
          {stat.number}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.8rem'
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
        {/* Header with emphasis on EHR & Specialty support */}
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
              maxWidth: 700,
              mx: "auto",
              color: "rgba(255, 255, 255, 0.95)",
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.4,
              mb: 2,
              fontWeight: 600
            }}
          >
            Works with Any EHR System • Supports All Medical Specialties
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              mx: "auto",
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.5,
              mb: 4
            }}
          >
            Universal compatibility with 100+ EHR platforms and specialized workflows for 50+ medical specialties
          </Typography>
        </Box>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Key Highlights Banner */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 2, md: 4 },
            mb: 6,
            p: { xs: 2, md: 3 },
            borderRadius: 2,
            bgcolor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {[
            { icon: <Hospital size={20} />, text: "Epic & Cerner Certified" },
            { icon: <Stethoscope size={20} />, text: "All Medical Specialties" },
            { icon: <Globe size={20} />, text: "10+ Languages Supported" }
          ].map((highlight, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ color: '#10B981' }}>
                {highlight.icon}
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: { xs: '0.85rem', md: '0.9rem' }
                }}
              >
                {highlight.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)',
              xl: 'repeat(3, 1fr)' 
            },
            gap: { xs: 2, md: 2.5 }
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

        {/* Bottom CTA */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          sx={{ 
            textAlign: 'center',
            mt: 8,
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            bgcolor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'white',
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              fontWeight: 700,
              mb: 1
            }}
          >
            Ready to Transform Your Practice?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: { xs: '0.9rem', md: '1rem' },
              maxWidth: 500,
              mx: 'auto'
            }}
          >
            Join thousands of healthcare providers already using CRUSH AI to streamline documentation across all EHR systems and medical specialties
          </Typography>
        </Box>
      </Container>
    </Box>
  );
});

CompetitionSection.displayName = 'CompetitionSection';