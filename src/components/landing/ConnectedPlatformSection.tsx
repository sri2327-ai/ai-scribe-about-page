import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Calendar, Clock, Stethoscope, Brain, TrendingUp, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const platformFeatures = [{
  icon: Calendar,
  title: "Smart Scheduling & Patient Access",
  description: "Let BRAVO handle inbound calls, schedule appointments, and sync with your EHR, SIP, and PMS systems. Automated reminders and confirmations reduce no-shows and keep your calendar full."
}, {
  icon: Clock,
  title: "Pre-Visit Automation That Saves Time",
  description: "Digitize patient intake, insurance verification, and medical history updates—so every visit starts smooth and fully prepped."
}, {
  icon: Stethoscope,
  title: "Real-Time AI Medical Scribe & Clinical Intelligence",
  description: "CRUSH captures and transcribes encounters to create structured notes instantly. Pre-visit: AI-powered pre-charting, HCC risk insights. During: Context-aware documentation. Post-visit: Auto-coded notes, EHR order entry, and visit summaries."
}, {
  icon: Brain,
  title: "Admin & Post-Visit Automation",
  description: "Automate routine tasks like refills, referrals, and lab orders. BRAVO also manages follow-ups, medication adherence, and preventive care outreach—reducing staff burden and improving outcomes."
}, {
  icon: TrendingUp,
  title: "Accelerated Revenue Cycle Management",
  description: "From real-time insurance checks to AI-powered claims processing and payment tracking—we help you get reimbursed faster and cleaner."
}];
const MobileTimelineItem = ({
  feature,
  index,
  isLast
}: {
  feature: typeof platformFeatures[0];
  index: number;
  isLast: boolean;
}) => <motion.div initial={{
  opacity: 0,
  x: -20
}} whileInView={{
  opacity: 1,
  x: 0
}} transition={{
  duration: 0.5,
  delay: index * 0.1
}} viewport={{
  once: true
}} className="flex items-start gap-4 relative">
    {/* Timeline line and dot */}
    <div className="flex flex-col items-center relative">
      {/* Dot */}
      <div className="w-4 h-4 rounded-full bg-[#F06292] relative z-10 flex-shrink-0" />
      
      {/* Connecting line */}
      {!isLast && <div className="w-0.5 h-12 mt-2" style={{
      backgroundImage: `repeating-linear-gradient(to bottom, #F06292 0px, #F06292 4px, transparent 4px, transparent 8px)`,
      opacity: 0.6
    }} />}
    </div>

    {/* Icon */}
    <div className="flex items-center justify-center mt-[-2px] mr-4">
      <feature.icon className="w-8 h-8 text-[#387E89]" strokeWidth={1.5} />
    </div>
    
    {/* Content */}
    <div className="flex-1 pb-6">
      <Typography variant="h6" sx={{
      fontWeight: 600,
      color: '#143151',
      fontSize: '1.1rem',
      lineHeight: 1.3,
      mb: 1
    }}>
        {feature.title}
      </Typography>
      
      <Typography variant="body2" sx={{
      color: '#555',
      fontSize: '0.95rem',
      lineHeight: 1.6,
      letterSpacing: '0.02em',
      fontWeight: 400,
      '& strong': {
        color: '#143151',
        fontWeight: 600
      }
    }}>
        {feature.description}
      </Typography>
    </div>
  </motion.div>;
const FeatureItem = ({
  feature,
  index
}: {
  feature: typeof platformFeatures[0];
  index: number;
}) => <motion.div initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} transition={{
  duration: 0.5,
  delay: index * 0.1
}} viewport={{
  once: true
}} className="flex flex-col items-center text-center relative group cursor-pointer">
    {/* Icon with enhanced hover effect */}
    <motion.div className="w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-[#387E89]/10 group-hover:to-[#143151]/10 transition-all duration-300 shadow-sm group-hover:shadow-lg" whileHover={{
    scale: 1.05
  }} transition={{
    type: "spring",
    stiffness: 300,
    damping: 20
  }}>
      <feature.icon className="w-10 h-10 text-[#387E89] group-hover:text-[#143151] transition-colors duration-300" strokeWidth={1.5} />
    </motion.div>
    
    {/* Title with better typography */}
    <Typography variant="h6" sx={{
    fontWeight: 700,
    color: '#143151',
    fontSize: {
      xs: '0.95rem',
      sm: '1.05rem',
      md: '1.15rem'
    },
    lineHeight: 1.3,
    mb: 3,
    maxWidth: '240px',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#387E89'
    }
  }}>
      {feature.title}
    </Typography>
    
    {/* Description with improved readability */}
    <Typography variant="body2" sx={{
    color: '#666',
    fontSize: {
      xs: '0.85rem',
      sm: '0.9rem',
      md: '0.95rem'
    },
    lineHeight: 1.5,
    maxWidth: '260px',
    opacity: 0.9,
    transition: 'opacity 0.3s ease',
    '.group:hover &': {
      opacity: 1
    }
  }}>
      {feature.description}
    </Typography>

    {/* Enhanced dotted connector with animation */}
    {index < platformFeatures.length - 1 && <motion.div className="absolute top-10 left-full w-12 h-0.5 hidden lg:block" initial={{
    scaleX: 0
  }} whileInView={{
    scaleX: 1
  }} transition={{
    duration: 0.8,
    delay: index * 0.2
  }} viewport={{
    once: true
  }}>
        <div className="w-full h-full origin-left" style={{
      backgroundImage: `repeating-linear-gradient(to right, #387E89 0px, #387E89 6px, transparent 6px, transparent 12px)`,
      opacity: 0.5
    }} />
      </motion.div>}
  </motion.div>;
const ConnectedPlatformSection = () => {
  const isMobile = useIsMobile();
  return <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/20 to-white">
      <Box sx={{
      maxWidth: {
        xs: '600px',
        md: '800px',
        lg: '1200px'
      },
      mx: 'auto',
      width: '100%'
    }}>
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Typography variant="h2" fontWeight="bold" sx={{
          mb: {
            xs: 4,
            sm: 6
          },
          color: '#143151',
          fontSize: {
            xs: '1.2rem',
            sm: '1.6rem',
            md: '2rem',
            lg: '2.4rem'
          },
          lineHeight: 1.2,
          maxWidth: '800px',
          mx: 'auto'
        }}>
            Everything You Need, Finally Connected
          </Typography>
          
          <Typography variant="body1" sx={{
          color: '#666',
          fontSize: {
            xs: '1rem',
            sm: '1.1rem',
            md: '1.2rem'
          },
          fontWeight: 400,
          maxWidth: '700px',
          mx: 'auto',
          lineHeight: 1.7,
          textAlign: 'center',
          px: {
            xs: 3,
            sm: 4,
            md: 0
          }
        }}>
            Most platforms stop at SOAP notes.{' '}
            <span className="font-semibold text-[#143151]">We go further.</span>{' '}
            Our all-in-one Ambient AI platform connects scheduling, documentation, billing, and patient engagement—so your entire workflow runs smarter, faster, and hands-free.
          </Typography>
        </motion.div>

        {/* Features Layout */}
        {isMobile ? (/* Mobile: Timeline layout like reference image */
      <div className="max-w-md mx-auto pl-4">
            {platformFeatures.map((feature, index) => <MobileTimelineItem key={index} feature={feature} index={index} isLast={index === platformFeatures.length - 1} />)}
          </div>) : (/* Desktop/Tablet: Horizontal grid */
      <div className="grid grid-cols-2 lg:flex lg:justify-between lg:items-start gap-8 lg:gap-2">
            {platformFeatures.map((feature, index) => <FeatureItem key={index} feature={feature} index={index} />)}
          </div>)}
      </Box>
    </section>;
};
export default ConnectedPlatformSection;