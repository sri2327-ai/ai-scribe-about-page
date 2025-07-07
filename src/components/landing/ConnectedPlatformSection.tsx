
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, Stethoscope, Brain, TrendingUp, Zap
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const platformFeatures = [
  {
    icon: Calendar,
    title: "Smart Scheduling & Patient Access",
    description: "Let BRAVO handle inbound calls, schedule appointments, and sync with your EHR, SIP, and PMS systems. Automated reminders and confirmations reduce no-shows and keep your calendar full."
  },
  {
    icon: Clock,
    title: "Pre-Visit Automation That Saves Time",
    description: "Digitize patient intake, insurance verification, and medical history updates—so every visit starts smooth and fully prepped."
  },
  {
    icon: Stethoscope,
    title: "Real-Time AI Medical Scribe & Clinical Intelligence",
    description: "CRUSH captures and transcribes encounters to create structured notes instantly. Pre-visit: AI-powered pre-charting, HCC risk insights. During: Context-aware documentation. Post-visit: Auto-coded notes, EHR order entry, and visit summaries."
  },
  {
    icon: Brain,
    title: "Admin & Post-Visit Automation",
    description: "Automate routine tasks like refills, referrals, and lab orders. BRAVO also manages follow-ups, medication adherence, and preventive care outreach—reducing staff burden and improving outcomes."
  },
  {
    icon: TrendingUp,
    title: "Accelerated Revenue Cycle Management",
    description: "From real-time insurance checks to AI-powered claims processing and payment tracking—we help you get reimbursed faster and cleaner."
  }
];

const MobileTimelineItem = ({ feature, index, isLast }: { feature: typeof platformFeatures[0], index: number, isLast: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 relative"
  >
    {/* Timeline line and dot */}
    <div className="flex flex-col items-center relative">
      {/* Dot */}
      <div className="w-4 h-4 rounded-full bg-[#FF6B5A] relative z-10 flex-shrink-0" />
      
      {/* Connecting line */}
      {!isLast && (
        <div 
          className="w-0.5 h-12 mt-2"
          style={{
            backgroundImage: `repeating-linear-gradient(to bottom, #FF6B5A 0px, #FF6B5A 4px, transparent 4px, transparent 8px)`,
            opacity: 0.6
          }}
        />
      )}
    </div>

    {/* Icon */}
    <div className="flex items-center justify-center mt-[-2px] mr-4">
      <feature.icon 
        className="w-8 h-8 text-[#387E89]" 
        strokeWidth={1.5} 
      />
    </div>
    
    {/* Content */}
    <div className="flex-1 pb-6">
      <Typography
        variant="h6"
        sx={{ 
          fontWeight: 600,
          color: '#143151',
          fontSize: '1.1rem',
          lineHeight: 1.3,
          mb: 1
        }}
      >
        {feature.title}
      </Typography>
      
      <Typography
        variant="body2"
        sx={{ 
          color: '#666',
          fontSize: '0.9rem',
          lineHeight: 1.4
        }}
      >
        {feature.description}
      </Typography>
    </div>
  </motion.div>
);

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
              fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2rem', lg: '2.4rem' },
              lineHeight: 1.2,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Everything You Need, Finally Connected
          </Typography>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
          >
            <Zap className="w-4 h-4" />
            by Ambient AI
          </motion.div>
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
            Most platforms stop at SOAP notes. We go further. Our all-in-one Ambient AI platform connects scheduling, documentation, billing, and patient engagement—so your entire workflow runs smarter, faster, and hands-free.
          </Typography>
        </motion.div>

        {/* Features Layout */}
        {isMobile ? (
          /* Mobile: Timeline layout like reference image */
          <div className="max-w-md mx-auto pl-4">
            {platformFeatures.map((feature, index) => (
              <MobileTimelineItem 
                key={index} 
                feature={feature} 
                index={index} 
                isLast={index === platformFeatures.length - 1} 
              />
            ))}
          </div>
        ) : (
          /* Desktop/Tablet: Horizontal grid */
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 items-start">
            {platformFeatures.map((feature, index) => (
              <FeatureItem key={index} feature={feature} index={index} />
            ))}
          </div>
        )}
      </Box>
    </section>
  );
};

export default ConnectedPlatformSection;
