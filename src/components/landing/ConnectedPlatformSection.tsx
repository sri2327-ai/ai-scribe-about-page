import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, Stethoscope, Brain, TrendingUp, Zap
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ResponsiveCarousel } from '@/components/ui/ResponsiveCarousel';

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

const FeatureCard = ({ feature, index }: { feature: typeof platformFeatures[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col items-center text-center relative group h-full"
  >
    {/* Icon Circle with connecting line */}
    <div className="relative z-10 mb-2 sm:mb-3 overflow-visible w-full">
      {/* Dotted Line - Always visible for stepper effect */}
      <div className="absolute top-6 left-0 right-0 h-0.5"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20, 49, 81, 0.08) 0%, rgba(56, 126, 137, 0.08) 50%, rgba(20, 49, 81, 0.08) 100%)`,
          backgroundSize: '6px 1px',
          backgroundRepeat: 'repeat-x',
          maskImage: 'repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 4px)',
          WebkitMaskImage: 'repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 4px)'
        }}
      />
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 overflow-visible">
          <feature.icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>

    {/* Content Card - Reduced dimensions and improved alignment */}
    <div className="bg-white rounded-xl p-3 sm:p-4 md:p-5 shadow-sm border border-gray-100/50 hover:shadow-md hover:border-[#387E89]/20 transition-all duration-300 h-full group-hover:transform group-hover:-translate-y-1 flex flex-col max-w-xs mx-auto">
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ 
          mb: { xs: 1.5, sm: 2 }, 
          color: '#143151',
          fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
          lineHeight: 1.3,
          textAlign: 'center'
        }}
      >
        {feature.title}
      </Typography>
      
      <Typography
        variant="body2"
        sx={{ 
          color: '#555',
          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
          lineHeight: 1.4,
          mb: { xs: 2, sm: 2.5 },
          flex: 1,
          textAlign: 'center'
        }}
      >
        {feature.description}
      </Typography>

      {/* Key Highlights - Better aligned */}
      <div className="space-y-1 mt-auto">
        {feature.highlights.map((highlight, hIndex) => (
          <div key={hIndex} className="flex items-start gap-2 text-left">
            <div className="w-1.5 h-1.5 rounded-full bg-[#387E89] flex-shrink-0 mt-1.5" />
            <Typography
              variant="body2"
              sx={{ 
                color: '#666',
                fontSize: { xs: '0.7rem', sm: '0.75rem' },
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

const ConnectedPlatformSection = () => {
  const isMobile = useIsMobile();
  const isTablet = typeof window !== 'undefined' && window.innerWidth <= 1024 && window.innerWidth > 768;

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/30">
      <Box sx={{ maxWidth: '1200px', mx: 'auto', width: '100%' }}>
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ 
              mb: 2, 
              color: '#143151', 
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              lineHeight: 1.1,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Everything You Need, Finally Connected
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              color: '#666', 
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem' },
              fontWeight: 400,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.4,
              mb: 2
            }}
          >
            Most platforms stop at SOAP notes. We go further. Our all-in-one Ambient AI platform connects scheduling, documentation, billing, and patient engagement—so your entire workflow runs smarter, faster, and hands-free.
          </Typography>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
            <Zap className="w-4 h-4" />
            by Ambient AI
          </div>
        </div>

        {/* Responsive Layout */}
        {(isMobile || isTablet) ? (
          <ResponsiveCarousel
            items={platformFeatures}
            renderItem={(item, index) => (
              <FeatureCard feature={item} index={index} />
            )}
            columnsDesktop={1}
            columnsTablet={1}
            columnsMobile={1}
            gap={16}
            itemHeight={{ xs: 280, sm: 300, md: 320 }}
            showControls={true}
            autoPlay={false}
            controlsBelow={true}
            className="py-2"
            cardClassName="h-full"
          />
        ) : (
          <div className="relative overflow-visible max-w-[1200px] mx-auto px-6">
            {/* Dotted Connecting Line - Desktop Only */}
            <div 
              className="absolute top-6 left-0 right-0 h-0.5"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(20, 49, 81, 0.08) 0%, rgba(56, 126, 137, 0.08) 50%, rgba(20, 49, 81, 0.08) 100%)`,
                backgroundSize: '6px 1px',
                backgroundRepeat: 'repeat-x',
                maskImage: 'repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 4px)',
                WebkitMaskImage: 'repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 4px)'
              }}
            />
            
            {/* Steps Container - Desktop - Better spacing */}
            <div className="grid grid-cols-5 gap-8 relative overflow-visible">
              {platformFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Connection */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100 flex-wrap justify-center hover:shadow-xl transition-all duration-300">
            {['Scheduling', 'Documentation', 'Billing', 'Patient Care'].map((item, index, arr) => (
              <React.Fragment key={item}>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]" />
                  <span className="text-xs font-semibold text-gray-700">{item}</span>
                </div>
                {index < arr.length - 1 && (
                  <div 
                    className="w-4 h-0.5 hidden sm:block"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(20, 49, 81, 0.3), rgba(56, 126, 137, 0.3))`,
                      backgroundSize: '3px 1px',
                      backgroundRepeat: 'repeat-x',
                      maskImage: 'repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 2px)',
                      WebkitMaskImage: 'repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 2px)'
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
