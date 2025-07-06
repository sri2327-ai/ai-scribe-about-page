
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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100/80 hover:shadow-lg hover:border-[#387E89]/20 transition-all duration-300"
  >
    {/* Icon Header */}
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-md">
        <feature.icon className="w-5 h-5 text-white" strokeWidth={2} />
      </div>
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] opacity-60" />
    </div>

    {/* Content */}
    <div className="space-y-3">
      <Typography
        variant="h6"
        sx={{ 
          fontWeight: 700,
          color: '#143151',
          fontSize: '1.1rem',
          lineHeight: 1.3,
          mb: 2
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
          mb: 3
        }}
      >
        {feature.description}
      </Typography>

      {/* Highlights with better mobile spacing */}
      <div className="space-y-2">
        {feature.highlights.map((highlight, hIndex) => (
          <div key={hIndex} className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#387E89] flex-shrink-0 mt-2" />
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
  </motion.div>
);

const TabletFeatureCard = ({ feature, index }: { feature: typeof platformFeatures[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100/80 hover:shadow-md hover:border-[#387E89]/20 transition-all duration-300 h-full flex flex-col"
  >
    {/* Icon and connecting line */}
    <div className="relative mb-3">
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg">
          <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
        </div>
      </div>
      {index < platformFeatures.length - 1 && (
        <div 
          className="absolute top-6 left-1/2 w-8 h-0.5 transform translate-x-4"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(56, 126, 137, 0.3), rgba(20, 49, 81, 0.3))`,
            backgroundSize: '4px 1px',
            backgroundRepeat: 'repeat-x'
          }}
        />
      )}
    </div>

    <div className="flex-1 space-y-3 text-center">
      <Typography
        variant="h6"
        sx={{ 
          fontWeight: 700,
          color: '#143151',
          fontSize: '0.95rem',
          lineHeight: 1.3,
          mb: 2
        }}
      >
        {feature.title}
      </Typography>
      
      <Typography
        variant="body2"
        sx={{ 
          color: '#555',
          fontSize: '0.8rem',
          lineHeight: 1.4,
          mb: 3
        }}
      >
        {feature.description}
      </Typography>

      <div className="space-y-1.5">
        {feature.highlights.map((highlight, hIndex) => (
          <div key={hIndex} className="flex items-start gap-2 text-left">
            <div className="w-1.5 h-1.5 rounded-full bg-[#387E89] flex-shrink-0 mt-1.5" />
            <Typography
              variant="body2"
              sx={{ 
                color: '#666',
                fontSize: '0.75rem',
                lineHeight: 1.3,
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
    className="relative group"
  >
    {/* Card Container */}
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100/60 hover:shadow-2xl hover:border-[#387E89]/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-3 h-full min-h-[420px] flex flex-col">
      
      {/* Icon Section */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
          <feature.icon className="w-9 h-9 text-white" strokeWidth={1.8} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col text-center">
        <Typography
          variant="h5"
          sx={{ 
            fontWeight: 700,
            color: '#143151',
            fontSize: '1.4rem',
            lineHeight: 1.2,
            mb: 4,
            minHeight: '3.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {feature.title}
        </Typography>
        
        <Typography
          variant="body1"
          sx={{ 
            color: '#555',
            fontSize: '1rem',
            lineHeight: 1.6,
            mb: 6,
            flex: '0 0 auto'
          }}
        >
          {feature.description}
        </Typography>

        {/* Highlights */}
        <div className="space-y-3 mt-auto">
          {feature.highlights.map((highlight, hIndex) => (
            <div key={hIndex} className="flex items-center gap-3 justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex-shrink-0" />
              <Typography
                variant="body2"
                sx={{ 
                  color: '#666',
                  fontSize: '0.9rem',
                  lineHeight: 1.4,
                  fontWeight: 600
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
      <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 hidden xl:block">
        <div className="flex items-center">
          <div className="w-8 h-0.5 bg-gradient-to-r from-[#387E89] to-[#143151] opacity-60"></div>
          <div className="w-0 h-0 border-l-[6px] border-l-[#143151] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent opacity-60"></div>
        </div>
      </div>
    )}
  </motion.div>
);

const ConnectedPlatformSection = () => {
  const isMobile = useIsMobile();
  const isTablet = typeof window !== 'undefined' && window.innerWidth <= 1024 && window.innerWidth > 768;

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/20 to-white">
      <Box sx={{ maxWidth: '1400px', mx: 'auto', width: '100%' }}>
        {/* Header - Improved mobile spacing */}
        <div className="text-center mb-16 lg:mb-20">
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ 
              mb: { xs: 3, sm: 4 }, 
              color: '#143151', 
              fontSize: { xs: '1.9rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
              lineHeight: 1.1,
              maxWidth: '700px',
              mx: 'auto',
              px: { xs: 2, sm: 0 }
            }}
          >
            Everything You Need, Finally Connected
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              color: '#666', 
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.5,
              mb: { xs: 3, sm: 4 },
              px: { xs: 2, sm: 1 }
            }}
          >
            Most platforms stop at SOAP notes. We go further. Our all-in-one Ambient AI platform connects scheduling, documentation, billing, and patient engagement—so your entire workflow runs smarter, faster, and hands-free.
          </Typography>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            <Zap className="w-4 h-4" />
            by Ambient AI
          </div>
        </div>

        {/* Feature Cards - Responsive Layout */}
        {isMobile ? (
          <div className="space-y-6 max-w-md mx-auto">
            {platformFeatures.map((feature, index) => (
              <MobileFeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        ) : isTablet ? (
          <div className="grid grid-cols-2 gap-6 relative max-w-2xl mx-auto">
            {/* Connecting line for tablet */}
            <div 
              className="absolute top-6 left-0 right-0 h-0.5 z-0"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(20, 49, 81, 0.1), rgba(56, 126, 137, 0.1))`,
                backgroundSize: '6px 1px',
                backgroundRepeat: 'repeat-x'
              }}
            />
            {platformFeatures.slice(0, 4).map((feature, index) => (
              <TabletFeatureCard key={index} feature={feature} index={index} />
            ))}
            {/* Fifth item spans full width */}
            <div className="col-span-2 flex justify-center">
              <div className="w-full max-w-xs">
                <TabletFeatureCard feature={platformFeatures[4]} index={4} />
              </div>
            </div>
          </div>
        ) : (
          /* Desktop Layout - Completely Redesigned */
          <div className="relative">
            <div className="grid grid-cols-5 gap-12 items-stretch max-w-7xl mx-auto">
              {platformFeatures.map((feature, index) => (
                <DesktopFeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Connection - Improved mobile layout */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 sm:px-6 py-3 shadow-lg border border-gray-100 flex-wrap justify-center hover:shadow-xl transition-all duration-300 max-w-full">
            {['Scheduling', 'Documentation', 'Billing', 'Patient Care'].map((item, index, arr) => (
              <React.Fragment key={item}>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">{item}</span>
                </div>
                {index < arr.length - 1 && (
                  <div 
                    className="w-3 sm:w-4 h-0.5 hidden sm:block"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(20, 49, 81, 0.3), rgba(56, 126, 137, 0.3))`,
                      backgroundSize: '3px 1px',
                      backgroundRepeat: 'repeat-x'
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Box>
    </section>
  );
};

export default ConnectedPlatformSection;
