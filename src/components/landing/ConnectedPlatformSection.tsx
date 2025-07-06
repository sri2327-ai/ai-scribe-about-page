
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
    description: "Let BRAVO handle inbound calls, schedule appointments, and sync with your EHR, SIP, and PMS systems. Automated reminders and confirmations reduce no-shows and keep your calendar full.",
    stepNumber: 1
  },
  {
    icon: Clock,
    title: "Pre-Visit Automation That Saves Time", 
    description: "Digitize patient intake, insurance verification, and medical history updates—so every visit starts smooth and fully prepped.",
    stepNumber: 2
  },
  {
    icon: Stethoscope,
    title: "Real-Time AI Medical Scribe & Clinical Intelligence",
    description: "CRUSH captures and transcribes encounters to create structured notes instantly.",
    stepNumber: 3,
    subFeatures: [
      "Pre-visit: AI-powered pre-charting, HCC risk insights",
      "During: Context-aware documentation", 
      "Post-visit: Auto-coded notes, EHR order entry, and visit summaries"
    ]
  },
  {
    icon: Brain,
    title: "Admin & Post-Visit Automation",
    description: "Automate routine tasks like refills, referrals, and lab orders. BRAVO also manages follow-ups, medication adherence, and preventive care outreach—reducing staff burden and improving outcomes.",
    stepNumber: 4
  },
  {
    icon: TrendingUp,
    title: "Accelerated Revenue Cycle Management",
    description: "From real-time insurance checks to AI-powered claims processing and payment tracking—we help you get reimbursed faster and cleaner.",
    stepNumber: 5
  }
];

const ConnectedPlatformSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <Box sx={{ maxWidth: '1400px', mx: 'auto', width: '100%' }}>
        {/* Header */}
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ 
              mb: 4, 
              color: '#143151', 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              lineHeight: 1.2,
              maxWidth: '1000px',
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
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 2
            }}
          >
            Most platforms stop at SOAP notes. We go further. Our all-in-one Ambient AI platform connects scheduling, documentation, billing, and patient engagement—so your entire workflow runs smarter, faster, and hands-free.
          </Typography>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            by Ambient AI
          </div>
        </div>

        {/* Horizontal Stepper */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151] hidden md:block" />
          
          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step Circle with Icon Below */}
                <div className="relative z-10 mb-4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg mb-3">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ 
                      mb: 2, 
                      color: '#143151',
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      lineHeight: 1.3
                    }}
                  >
                    {feature.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{ 
                      color: '#555',
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      lineHeight: 1.5,
                      mb: feature.subFeatures ? 2 : 0
                    }}
                  >
                    {feature.description}
                  </Typography>

                  {feature.subFeatures && (
                    <div className="space-y-1 mt-3">
                      {feature.subFeatures.map((subFeature, subIndex) => (
                        <div key={subIndex} className="flex items-start gap-2 text-left">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#387E89] mt-1.5 flex-shrink-0" />
                          <Typography
                            variant="body2"
                            sx={{ 
                              color: '#666',
                              fontSize: '0.8rem',
                              lineHeight: 1.4
                            }}
                          >
                            {subFeature}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dotted connector for mobile */}
                {index < platformFeatures.length - 1 && (
                  <div className="w-full flex justify-center mt-4 md:hidden">
                    <div className="w-px h-8 bg-gradient-to-b from-[#387E89] to-transparent" 
                         style={{ 
                           backgroundImage: 'repeating-linear-gradient(to bottom, #387E89 0px, #387E89 4px, transparent 4px, transparent 8px)' 
                         }} 
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Connection Visualization */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-lg border-2 border-gray-100 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]" />
              <span className="text-xs font-medium text-gray-700">Scheduling</span>
            </div>
            <div className="w-4 h-0.5 bg-gradient-to-r from-[#143151] to-[#387E89] hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]" />
              <span className="text-xs font-medium text-gray-700">Documentation</span>
            </div>
            <div className="w-4 h-0.5 bg-gradient-to-r from-[#143151] to-[#387E89] hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]" />
              <span className="text-xs font-medium text-gray-700">Billing</span>
            </div>
            <div className="w-4 h-0.5 bg-gradient-to-r from-[#143151] to-[#387E89] hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]" />
              <span className="text-xs font-medium text-gray-700">Patient Care</span>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default ConnectedPlatformSection;
