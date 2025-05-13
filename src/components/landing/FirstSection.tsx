
import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import { motion } from "framer-motion";
import { landingPageStyles } from '@/styles/landing-page-utils';
import { useToast } from '@/hooks/use-toast';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

// Feature card component with enhanced UX
const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    whileHover={{ y: -4, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)' }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-xl border border-gray-200 shadow-sm h-full overflow-hidden"
    style={{ 
      borderRadius: '12px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div className="p-5 md:p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-[#F5F9FF] p-3 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#143151] pt-2">
          {title}
        </h3>
      </div>
      <p className="text-gray-700 text-base leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export const FirstSection = () => {
  const { toast } = useToast();
  
  const handleDemoRequest = () => {
    toast({
      title: "Demo Request Received",
      description: "Thank you! Our team will contact you shortly.",
    });
  };
  
  return (
    <section className="min-h-screen bg-white overflow-hidden relative py-12 md:py-16 lg:py-20">
      {/* Enhanced subtle background effect */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at 30% 70%, #F5F9FF, transparent 60%), radial-gradient(circle at 70% 30%, rgba(56, 126, 137, 0.05), transparent 50%)',
          zIndex: -1
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pr-8"
          >
            <h1 
              className="text-[#143151] text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
              }}
            >
              AI Scribing &<br />
              Patient Engagement<br />
              Built for Clinicians<br />
              Like You
            </h1>

            <p 
              className="text-gray-700 text-lg mb-8 max-w-2xl leading-relaxed"
              style={{ 
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: 1.6,
                maxWidth: '65ch'
              }}
            >
              S10.AI's AI medical scribe and patient engagement agent integrate seamlessly 
              with Epic, Cerner, your preferred EHR, and 7,000+ other apps. Trusted by over 1,000 
              clinics worldwide, S10.AI helps you customize workflows to save time, stay HIPAA-compliant, 
              and see results in days: 30% faster charting and over 20% higher patient satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0px 8px 15px rgba(56, 126, 137, 0.3)' }}
                whileTap={{ scale: 0.97 }}
                onClick={handleDemoRequest}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 py-3 rounded-full text-base font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-[#387E89] focus:ring-opacity-50"
                style={{ minHeight: '48px', minWidth: '180px' }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span>Request A Demo</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center bg-white text-[#143151] border border-[#143151] px-6 py-3 rounded-full text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#143151] focus:ring-opacity-50"
                style={{ minHeight: '48px', minWidth: '180px' }}
              >
                See How It Works
              </motion.button>
            </div>

            {/* Trusted By Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-12 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  color: '#000000',
                  mb: 2,
                  textAlign: 'center'
                }}
              >
                S10.AI Is Recommended by
              </Typography>
              <Box sx={{ overflow: "hidden", width: '100%' }}>
                <Marquee gradient gradientWidth={50} speed={40}>
                  {companyLogos.map((logo, index) => (
                    <Box
                      key={index}
                      sx={{
                        mx: { xs: 2, md: 3 },
                        display: 'flex',
                        alignItems: 'center',
                        height: '50px'
                      }}
                    >
                      <img
                        src={logo}
                        alt={`Partner company ${index + 1}`}
                        style={{
                          height: '100%',
                          width: 'auto',
                          objectFit: 'contain'
                        }}
                        loading="lazy"
                      />
                    </Box>
                  ))}
                </Marquee>
              </Box>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-4 md:space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeatureCard
                title="Voice Assistant"
                description="Don't adapt to your AI—make it work for you."
                icon={<VoiceAnimation />}
              />
              
              <FeatureCard
                title="Seamless Integration"
                description="Connect with your EHR and clinical apps for complete workflow automation."
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="#143151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#143151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 13H12" stroke="#143151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 17H16" stroke="#143151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
              
              <FeatureCard
                title="Patient Engagement"
                description="Automated communication reduces no-shows by 50% and improves patient satisfaction."
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#143151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="#143151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V8" stroke="#143151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
              
              <FeatureCard
                title="Fast Results"
                description="See immediate improvements with 30% faster charting and enhanced documentation quality."
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#143151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#143151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
            </div>
            
            {/* Added floating statistics for visual impact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100 text-center">
                <p className="text-[#387E89] text-2xl font-bold">30%</p>
                <p className="text-gray-600 text-sm">Faster Charting</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100 text-center">
                <p className="text-[#387E89] text-2xl font-bold">20%+</p>
                <p className="text-gray-600 text-sm">Higher Satisfaction</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100 text-center">
                <p className="text-[#387E89] text-2xl font-bold">1,000+</p>
                <p className="text-gray-600 text-sm">Clinics Trust Us</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Add a subtle divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};
