
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
    description: "Never miss appointments again. AI handles inbound calls, schedules appointments, and syncs with EHR/SIP/PMS systems automatically.",
    highlights: ["Reduce no-shows by 40%", "24/7 automated scheduling", "Full calendar management"]
  },
  {
    icon: Clock,
    title: "Pre-Visit Automation", 
    description: "Save 15 minutes per patient. Digitize patient intake, insurance verification, and medical history updates before they arrive.",
    highlights: ["Eliminate paperwork delays", "Instant insurance verification", "Pre-populated medical history"]
  },
  {
    icon: Stethoscope,
    title: "Real-Time AI Medical Scribe",
    description: "Cut documentation time by 75%. AI captures encounters and creates structured notes instantly with clinical intelligence.",
    highlights: ["Zero typing during visits", "Context-aware documentation", "Auto-coded clinical notes"]
  },
  {
    icon: Brain,
    title: "Admin & Post-Visit Automation",
    description: "Reduce staff workload by 60%. Automate refills, referrals, lab orders, and follow-ups without manual intervention.",
    highlights: ["Automated prescription refills", "Smart referral processing", "Proactive follow-up management"]
  },
  {
    icon: TrendingUp,
    title: "Accelerated Revenue Cycle",
    description: "Get paid 3x faster. Real-time insurance checks to AI-powered claims processing accelerates reimbursement.",
    highlights: ["Real-time eligibility verification", "AI-powered claims processing", "Automated payment tracking"]
  }
];

const MobileFeatureCard = ({ feature, index }: { feature: typeof platformFeatures[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100/60 hover:shadow-xl hover:border-[#387E89]/30 transition-all duration-300"
  >
    {/* Icon Header */}
    <div className="flex items-start gap-4 mb-5">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg flex-shrink-0">
        <feature.icon className="w-7 h-7 text-white" strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <Typography
          variant="h6"
          sx={{ 
            fontWeight: 700,
            color: '#143151',
            fontSize: '1.25rem',
            lineHeight: 1.3,
            mb: 0.5
          }}
        >
          {feature.title}
        </Typography>
      </div>
    </div>

    {/* Content */}
    <div className="space-y-4">
      <Typography
        variant="body1"
        sx={{ 
          color: '#555',
          fontSize: '1rem',
          lineHeight: 1.6,
          mb: 4
        }}
      >
        {feature.description}
      </Typography>

      {/* Highlights */}
      <div className="space-y-3">
        {feature.highlights.map((highlight, hIndex) => (
          <div key={hIndex} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex-shrink-0 mt-2.5" />
            <Typography
              variant="body2"
              sx={{ 
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: 1.5,
                fontWeight: 500
              }}
            >
              {highlight}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const TabletFeatureCard = ({ feature, index }: { feature: typeof platformFeatures[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl p-5 shadow-md border border-gray-100/70 hover:shadow-lg hover:border-[#387E89]/30 transition-all duration-300 h-full flex flex-col"
  >
    {/* Icon and Title */}
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-md">
        <feature.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
      </div>
      <Typography
        variant="h6"
        sx={{ 
          fontWeight: 700,
          color: '#143151',
          fontSize: '1.1rem',
          lineHeight: 1.3,
          flex: 1
        }}
      >
        {feature.title}
      </Typography>
    </div>

    <div className="flex-1 space-y-3">
      <Typography
        variant="body2"
        sx={{ 
          color: '#555',
          fontSize: '0.9rem',
          lineHeight: 1.5,
          mb: 3
        }}
      >
        {feature.description}
      </Typography>

      <div className="space-y-2">
        {feature.highlights.map((highlight, hIndex) => (
          <div key={hIndex} className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#387E89] flex-shrink-0 mt-2" />
            <Typography
              variant="body2"
              sx={{ 
                color: '#666',
                fontSize: '0.85rem',
                lineHeight: 1.4,
                fontWeight: 500
              }}
            >
              {highlight}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const DesktopFeatureCard = ({ feature, index }: { feature: typeof platformFeatures[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative group flex-1"
  >
    {/* Card Container */}
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100/60 hover:shadow-2xl hover:border-[#387E89]/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-2 h-full min-h-[320px] flex flex-col">
      
      {/* Icon Section */}
      <div className="flex justify-center mb-5">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
          <feature.icon className="w-7 h-7 text-white" strokeWidth={1.8} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col text-center">
        <Typography
          variant="h6"
          sx={{ 
            fontWeight: 700,
            color: '#143151',
            fontSize: '1.1rem',
            lineHeight: 1.3,
            mb: 3,
            minHeight: '2.6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {feature.title}
        </Typography>
        
        <Typography
          variant="body2"
          sx={{ 
            color: '#555',
            fontSize: '0.9rem',
            lineHeight: 1.5,
            mb: 4,
            flex: '0 0 auto'
          }}
        >
          {feature.description}
        </Typography>

        {/* Highlights */}
        <div className="space-y-2 mt-auto">
          {feature.highlights.map((highlight, hIndex) => (
            <div key={hIndex} className="flex items-start gap-2.5 text-left">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex-shrink-0 mt-2" />
              <Typography
                variant="body2"
                sx={{ 
                  color: '#666',
                  fontSize: '0.8rem',
                  lineHeight: 1.4,
                  fontWeight: 500
                }}
              >
                {highlight}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Connecting Arrow - Only show between cards */}
    {index < platformFeatures.length - 1 && (
      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 hidden xl:block">
        <div className="flex items-center opacity-60">
          <div className="w-6 h-0.5 bg-gradient-to-r from-[#387E89] to-[#143151]"></div>
          <div className="w-0 h-0 border-l-[5px] border-l-[#143151] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
        </div>
      </div>
    )}
  </motion.div>
);

const ConnectedPlatformSection = () => {
  const isMobile = useIsMobile();
  const isTablet = typeof window !== 'undefined' && window.innerWidth <= 1024 && window.innerWidth > 640;

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <Box sx={{ maxWidth: '1200px', mx: 'auto', width: '100%' }}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ 
              mb: { xs: 3, sm: 4 }, 
              color: '#143151', 
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
              lineHeight: 1.2,
              maxWidth: '900px',
              mx: 'auto',
              px: { xs: 1, sm: 0 }
            }}
          >
            Everything You Need, Finally Connected
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              color: '#666', 
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
              fontWeight: 400,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: { xs: 4, sm: 5 },
              px: { xs: 2, sm: 1 }
            }}
          >
            Most platforms stop at SOAP notes. We go further. Our all-in-one Ambient AI platform connects scheduling, documentation, billing, and patient engagement—so your entire workflow runs smarter, faster, and hands-free.
          </Typography>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Zap className="w-4 h-4" />
            by Ambient AI
          </motion.div>
        </motion.div>

        {/* Feature Cards - Responsive Layout */}
        {isMobile ? (
          /* Mobile: Stack vertically with better spacing */
          <div className="space-y-6 max-w-lg mx-auto">
            {platformFeatures.map((feature, index) => (
              <MobileFeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        ) : isTablet ? (
          /* Tablet: 2x2 grid with last item centered */
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-5 mb-5">
              {platformFeatures.slice(0, 4).map((feature, index) => (
                <TabletFeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
            {/* Last card centered */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <TabletFeatureCard feature={platformFeatures[4]} index={4} />
              </div>
            </div>
          </div>
        ) : (
          /* Desktop: Single horizontal row */
          <div className="relative">
            <div className="flex gap-8 items-stretch justify-center max-w-7xl mx-auto">
              {platformFeatures.map((feature, index) => (
                <DesktopFeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Connection */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 lg:mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 sm:px-8 py-4 shadow-xl border border-gray-100 flex-wrap justify-center hover:shadow-2xl transition-all duration-300 max-w-full">
            {['Scheduling', 'Documentation', 'Billing', 'Patient Care'].map((item, index, arr) => (
              <React.Fragment key={item}>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]" />
                  <span className="text-sm sm:text-base font-semibold text-gray-700">{item}</span>
                </div>
                {index < arr.length - 1 && (
                  <div 
                    className="w-4 sm:w-6 h-0.5 hidden sm:block"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(20, 49, 81, 0.4), rgba(56, 126, 137, 0.4))`,
                      backgroundSize: '4px 1px',
                      backgroundRepeat: 'repeat-x'
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </Box>
    </section>
  );
};

export default ConnectedPlatformSection;
