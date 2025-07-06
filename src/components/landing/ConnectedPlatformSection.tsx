
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Stethoscope, Calendar, FileText, CreditCard, 
  Clock, Shield, Brain, Zap, TrendingUp, ArrowDown
} from 'lucide-react';

const platformFeatures = [
  {
    icon: Calendar,
    title: "Smart Scheduling & Patient Access",
    description: "Let BRAVO handle inbound calls, schedule appointments, and sync with your EHR, SIP, and PMS systems. Automated reminders and confirmations reduce no-shows and keep your calendar full.",
    color: "from-blue-500 to-blue-600",
    stepNumber: 1
  },
  {
    icon: Clock,
    title: "Pre-Visit Automation That Saves Time", 
    description: "Digitize patient intake, insurance verification, and medical history updates—so every visit starts smooth and fully prepped.",
    color: "from-green-500 to-green-600",
    stepNumber: 2
  },
  {
    icon: Stethoscope,
    title: "Real-Time AI Medical Scribe & Clinical Intelligence",
    description: "CRUSH captures and transcribes encounters to create structured notes instantly.",
    color: "from-purple-500 to-purple-600",
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
    color: "from-orange-500 to-orange-600",
    stepNumber: 4
  },
  {
    icon: TrendingUp,
    title: "Accelerated Revenue Cycle Management",
    description: "From real-time insurance checks to AI-powered claims processing and payment tracking—we help you get reimbursed faster and cleaner.",
    color: "from-indigo-500 to-indigo-600",
    stepNumber: 5
  }
];

const ConnectedPlatformSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <Box sx={{ maxWidth: '1200px', mx: 'auto', width: '100%' }}>
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

        {/* Stepper Format */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#143151] via-[#387E89] to-[#143151] hidden md:block" />
          
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''
              }`}
            >
              {/* Step Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{feature.stepNumber}</span>
                </div>
                {/* Icon positioned next to circle */}
                <div className={`absolute -top-2 ${index % 2 === 0 ? '-right-2' : '-left-2'} w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center`}>
                  <feature.icon className="w-4 h-4 text-gray-600" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${
                index % 2 === 1 ? 'md:mr-8' : 'md:ml-0'
              }`}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ 
                    mb: 3, 
                    color: '#143151',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    lineHeight: 1.3
                  }}
                >
                  {feature.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{ 
                    color: '#555',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.6,
                    mb: feature.subFeatures ? 3 : 0
                  }}
                >
                  {feature.description}
                </Typography>

                {feature.subFeatures && (
                  <div className="space-y-2 mt-4">
                    {feature.subFeatures.map((subFeature, subIndex) => (
                      <div key={subIndex} className={`flex items-start gap-3 ${
                        index % 2 === 1 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <div className="w-2 h-2 rounded-full bg-[#387E89] mt-2 flex-shrink-0" />
                        <Typography
                          variant="body2"
                          sx={{ 
                            color: '#666',
                            fontSize: '0.9rem',
                            lineHeight: 1.5
                          }}
                        >
                          {subFeature}
                        </Typography>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Arrow connector for mobile */}
              {index < platformFeatures.length - 1 && (
                <div className="absolute left-8 -bottom-6 flex justify-center md:hidden">
                  <ArrowDown className="w-5 h-5 text-[#387E89]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Visual Connection */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-white rounded-full px-8 py-6 shadow-lg border-2 border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
              <span className="text-sm font-medium text-gray-700">Scheduling</span>
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#143151] to-[#387E89]" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-green-600" />
              <span className="text-sm font-medium text-gray-700">Documentation</span>
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#143151] to-[#387E89]" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600" />
              <span className="text-sm font-medium text-gray-700">Billing</span>
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#143151] to-[#387E89]" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600" />
              <span className="text-sm font-medium text-gray-700">Patient Care</span>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default ConnectedPlatformSection;
