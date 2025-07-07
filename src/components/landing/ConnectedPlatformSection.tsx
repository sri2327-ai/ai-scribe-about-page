
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, Stethoscope, Brain, TrendingUp, Zap
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const platformFeatures = [
  {
    icon: Stethoscope,
    title: "Clinical workflows that save time, not add to it",
    description: "AI-powered documentation and clinical intelligence that streamlines your practice workflow."
  },
  {
    icon: TrendingUp,
    title: "Built-in billing and claims to get paid faster",
    description: "Integrated revenue cycle management with real-time insurance verification and automated claims processing."
  },
  {
    icon: Calendar,
    title: "Smart scheduling that keeps your calendar full",
    description: "AI-powered appointment scheduling with automated patient communication and no-show reduction."
  },
  {
    icon: Brain,
    title: "Reputation tools to attract and retain patients",
    description: "Patient engagement and reputation management tools that grow your practice organically."
  },
  {
    icon: Clock,
    title: "One login, one platform, built for private care",
    description: "Everything you need in a single, integrated platform designed specifically for healthcare providers."
  }
];

const FeatureItem = ({ feature, index }: { feature: typeof platformFeatures[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center relative"
  >
    {/* Icon */}
    <div className="w-16 h-16 mb-4 flex items-center justify-center">
      <feature.icon 
        className="w-12 h-12 text-[#387E89]" 
        strokeWidth={1.5} 
      />
    </div>
    
    {/* Title */}
    <Typography
      variant="h6"
      sx={{ 
        fontWeight: 600,
        color: '#143151',
        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
        lineHeight: 1.3,
        mb: 2,
        maxWidth: '200px'
      }}
    >
      {feature.title}
    </Typography>
    
    {/* Description */}
    <Typography
      variant="body2"
      sx={{ 
        color: '#666',
        fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
        lineHeight: 1.4,
        maxWidth: '220px'
      }}
    >
      {feature.description}
    </Typography>

    {/* Dotted connector - only show between items on desktop */}
    {index < platformFeatures.length - 1 && (
      <div className="absolute top-8 left-full w-8 h-0.5 hidden lg:block">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(to right, #387E89 0px, #387E89 4px, transparent 4px, transparent 8px)`,
            opacity: 0.4
          }}
        />
      </div>
    )}
  </motion.div>
);

const ConnectedPlatformSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <Box sx={{ maxWidth: '900px', mx: 'auto', width: '100%' }}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ 
              mb: { xs: 4, sm: 6 }, 
              color: '#143151', 
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem', lg: '3.2rem' },
              lineHeight: 1.2,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Everything you need, finally connected
          </Typography>
          <Typography
            variant="body1"
            sx={{ 
              color: '#666', 
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 400,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              px: { xs: 2, sm: 0 }
            }}
          >
            Most EHRs stop at clinical notes. Tebra goes further, combining your EHR with billing, scheduling, and reputation tools that actually talk to each other. No more switching tabs, chasing down claims, or losing patients to bad reviews.
          </Typography>
        </motion.div>

        {/* Features Grid */}
        <div className={`
          ${isMobile 
            ? 'grid grid-cols-1 gap-8 max-w-sm mx-auto' 
            : 'grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 items-start'
          }
        `}>
          {platformFeatures.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
      </Box>
    </section>
  );
};

export default ConnectedPlatformSection;
