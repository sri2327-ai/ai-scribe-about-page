
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Stethoscope, Calendar, FileText, CreditCard, Home,
  Clock, Shield, Brain, Zap, TrendingUp
} from 'lucide-react';

const platformFeatures = [
  {
    icon: Calendar,
    title: "Smart Scheduling & Patient Access",
    description: "Let BRAVO handle inbound calls, schedule appointments, and sync with your EHR, SIP, and PMS systems. Automated reminders and confirmations reduce no-shows and keep your calendar full.",
    color: "text-blue-600"
  },
  {
    icon: Clock,
    title: "Pre-Visit Automation That Saves Time", 
    description: "Digitize patient intake, insurance verification, and medical history updates—so every visit starts smooth and fully prepped.",
    color: "text-green-600"
  },
  {
    icon: Stethoscope,
    title: "Real-Time AI Medical Scribe & Clinical Intelligence",
    description: "CRUSH captures and transcribes encounters to create structured notes instantly.",
    color: "text-purple-600",
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
    color: "text-orange-600"
  },
  {
    icon: TrendingUp,
    title: "Accelerated Revenue Cycle Management",
    description: "From real-time insurance checks to AI-powered claims processing and payment tracking—we help you get reimbursed faster and cleaner.",
    color: "text-indigo-600"
  }
];

const ConnectedPlatformSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gray-50 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <Typography
                    variant="h6"
                    fontWeight="semibold"
                    sx={{ 
                      mb: 2, 
                      color: '#143151',
                      fontSize: { xs: '1.125rem', sm: '1.25rem' },
                      lineHeight: 1.3
                    }}
                  >
                    {feature.title}
                  </Typography>
                </div>
              </div>
              
              <Typography
                variant="body2"
                sx={{ 
                  color: '#555',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  lineHeight: 1.6,
                  mb: feature.subFeatures ? 3 : 0
                }}
              >
                {feature.description}
              </Typography>

              {feature.subFeatures && (
                <div className="space-y-2">
                  {feature.subFeatures.map((subFeature, subIndex) => (
                    <div key={subIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#387E89] mt-2 flex-shrink-0" />
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: '#666',
                          fontSize: '0.875rem',
                          lineHeight: 1.5
                        }}
                      >
                        {subFeature}
                      </Typography>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Visual Connection */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-md border border-gray-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Scheduling</span>
            </div>
            <div className="w-2 h-0.5 bg-gray-300" />
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Documentation</span>
            </div>
            <div className="w-2 h-0.5 bg-gray-300" />
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Billing</span>
            </div>
            <div className="w-2 h-0.5 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Patient Care</span>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default ConnectedPlatformSection;
