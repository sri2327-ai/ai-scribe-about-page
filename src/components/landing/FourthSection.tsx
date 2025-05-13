
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Grid } from "@mui/material";
import { landingPageStyles } from '@/styles/landing-page-utils';
import SectionHeading from './shared/SectionHeading';
import LandingCard from './shared/LandingCard';
import { FileCheck, Users, Clock, ShieldCheck } from 'lucide-react';

// Feature data
const features = [
  {
    icon: <FileCheck size={24} color={landingPageStyles.colors.secondary} />,
    title: "Automated Documentation",
    description: "Generate accurate clinical notes automatically from patient conversations, saving hours of documentation time daily."
  },
  {
    icon: <Users size={24} color={landingPageStyles.colors.secondary} />,
    title: "Patient Engagement",
    description: "Reduce no-shows by 50% with intelligent AI follow-ups and automated appointment reminders."
  },
  {
    icon: <Clock size={24} color={landingPageStyles.colors.secondary} />,
    title: "Time-Saving Workflows",
    description: "Streamline administrative tasks with smart clinical workflows tailored to your specialty."
  },
  {
    icon: <ShieldCheck size={24} color={landingPageStyles.colors.secondary} />,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security with full HIPAA compliance to protect sensitive patient information."
  }
];

export const FourthSection = () => {
  return (
    <motion.section
      className="py-16 md:py-20 lg:py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Transform Your Healthcare Practice"
          subtitle="Discover how S10.AI's innovative solutions can transform your practice workflow, reduce burnout, and enhance patient care."
          className="mb-12"
        />

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LandingCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <button 
              className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              style={{ 
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
                minHeight: '48px'
              }}
            >
              Schedule a Demo
            </button>
          </motion.div>
        </Box>
      </div>
    </motion.section>
  );
};
