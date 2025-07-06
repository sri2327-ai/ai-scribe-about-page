
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, Stethoscope, Brain, TrendingUp, Zap
} from 'lucide-react';

const platformFeatures = [
  {
    icon: Calendar,
    title: "Smart Scheduling & Patient Access",
    description: "BRAVO handles inbound calls, schedules appointments, and syncs with EHR/SIP/PMS systems.",
    highlights: ["Automated reminders", "Reduced no-shows", "Full calendar management"]
  },
  {
    icon: Clock,
    title: "Pre-Visit Automation", 
    description: "Digitize patient intake, insurance verification, and medical history updates seamlessly.",
    highlights: ["Digital intake", "Insurance verification", "Medical history sync"]
  },
  {
    icon: Stethoscope,
    title: "Real-Time AI Medical Scribe",
    description: "CRUSH captures encounters and creates structured notes instantly with clinical intelligence.",
    highlights: ["AI pre-charting", "Context-aware documentation", "Auto-coded notes"]
  },
  {
    icon: Brain,
    title: "Admin & Post-Visit Automation",
    description: "Automate refills, referrals, lab orders, and follow-ups to reduce staff burden.",
    highlights: ["Automated refills", "Smart referrals", "Follow-up management"]
  },
  {
    icon: TrendingUp,
    title: "Accelerated Revenue Cycle",
    description: "Real-time insurance checks to AI-powered claims processing for faster reimbursement.",
    highlights: ["Real-time verification", "AI claims processing", "Payment tracking"]
  }
];

const ConnectedPlatformSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/30">
      <Box sx={{ maxWidth: '1400px', mx: 'auto', width: '100%' }}>
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ 
              mb: 3, 
              color: '#143151', 
              fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3.25rem' },
              lineHeight: 1.1,
              maxWidth: '900px',
              mx: 'auto'
            }}
          >
            Everything You Need, Finally Connected
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              color: '#666', 
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              fontWeight: 400,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.5,
              mb: 3
            }}
          >
            Our all-in-one Ambient AI platform connects scheduling, documentation, billing, and patient engagement—so your entire workflow runs smarter and hands-free.
          </Typography>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            <Zap className="w-4 h-4" />
            by Ambient AI
          </div>
        </div>

        {/* Horizontal Stepper */}
        <div className="relative">
          {/* Dotted Connecting Line - Desktop */}
          <div 
            className="absolute top-6 left-0 right-0 h-0.5 hidden md:block"
            style={{
              backgroundImage: `linear-gradient(to right, #143151 0%, #387E89 50%, #143151 100%)`,
              backgroundSize: '8px 2px',
              backgroundRepeat: 'repeat-x',
              maskImage: 'repeating-linear-gradient(to right, transparent 0, transparent 2px, black 2px, black 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, transparent 0, transparent 2px, black 2px, black 6px)'
            }}
          />
          
          {/* Steps Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Icon Circle */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100/50 hover:shadow-md hover:border-[#387E89]/20 transition-all duration-300 h-full group-hover:transform group-hover:-translate-y-1">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ 
                      mb: 2, 
                      color: '#143151',
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      lineHeight: 1.3
                    }}
                  >
                    {feature.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{ 
                      color: '#555',
                      fontSize: { xs: '0.8rem', sm: '0.85rem' },
                      lineHeight: 1.4,
                      mb: 2.5
                    }}
                  >
                    {feature.description}
                  </Typography>

                  {/* Key Highlights */}
                  <div className="space-y-1">
                    {feature.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center gap-2 text-left">
                        <div className="w-1 h-1 rounded-full bg-[#387E89] flex-shrink-0" />
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

                {/* Mobile Dotted Connector */}
                {index < platformFeatures.length - 1 && (
                  <div className="w-full flex justify-center mt-4 lg:hidden">
                    <div 
                      className="w-px h-6"
                      style={{
                        backgroundImage: `linear-gradient(to bottom, #387E89, #143151)`,
                        backgroundSize: '2px 4px',
                        backgroundRepeat: 'repeat-y',
                        maskImage: 'repeating-linear-gradient(to bottom, transparent 0, transparent 1px, black 1px, black 3px)',
                        WebkitMaskImage: 'repeating-linear-gradient(to bottom, transparent 0, transparent 1px, black 1px, black 3px)'
                      }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Connection */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100 flex-wrap justify-center hover:shadow-xl transition-all duration-300">
            {['Scheduling', 'Documentation', 'Billing', 'Patient Care'].map((item, index, arr) => (
              <React.Fragment key={item}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]" />
                  <span className="text-xs font-semibold text-gray-700">{item}</span>
                </div>
                {index < arr.length - 1 && (
                  <div 
                    className="w-6 h-0.5 hidden sm:block"
                    style={{
                      backgroundImage: `linear-gradient(to right, #143151, #387E89)`,
                      backgroundSize: '4px 2px',
                      backgroundRepeat: 'repeat-x',
                      maskImage: 'repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 3px)',
                      WebkitMaskImage: 'repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 3px)'
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
