
import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import { motion } from "framer-motion";
import { landingPageStyles } from '@/styles/landing-page-utils';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

// Feature card component with enhanced UX
const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    whileHover={{ y: -4, boxShadow: landingPageStyles.card.hoverShadow }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-xl border border-gray-200 shadow-sm h-full overflow-hidden"
    style={{ 
      borderRadius: landingPageStyles.card.borderRadius,
      boxShadow: landingPageStyles.card.boxShadow,
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
      <p className="text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export const FirstSection = () => {
  const theme = useTheme();

  return (
    <section className="min-h-screen bg-white overflow-hidden relative py-8 md:py-16">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F9FF]/30 to-white pointer-events-none" 
        style={{ zIndex: -1 }}></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pr-8"
          >
            <h1 className="text-[#143151] text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: landingPageStyles.typography.h1.fontWeight,
                  lineHeight: landingPageStyles.typography.h1.lineHeight,
                  letterSpacing: landingPageStyles.typography.h1.letterSpacing,
                }}>
              Innovative<br />
              Ambient AI<br />
              Solutions<br />
              For Healthcare
            </h1>

            <p className="text-gray-700 text-lg mb-8 max-w-2xl leading-relaxed"
               style={{ 
                 fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                 lineHeight: landingPageStyles.typography.body1.lineHeight,
               }}>
              Reduce administrative burden and improve patient care with AI medical scribes, 
              documentation automation, and clinical workflow solutions.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                variant="contained" 
                sx={{ 
                  background: `linear-gradient(135deg, #143151, #387E89)`,
                  color: 'white',
                  px: { xs: 4, md: 5 },
                  py: { xs: 1.5, md: 1.75 },
                  borderRadius: "50px",
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontWeight: 600,
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
                  textTransform: "none",
                  minHeight: '48px',
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    background: `linear-gradient(135deg, #0f243d, #2c6069)`,
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                    ".icon-box": {
                      transform: "rotate(-45deg)",
                    },
                  },
                  "&:focus": {
                    boxShadow: '0px 0px 0px 3px rgba(56, 126, 137, 0.3)',
                    outline: 'none',
                  },
                }}
                startIcon={
                  <Box
                    className="icon-box"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 32,
                      height: 32,
                      borderRadius: "50%", 
                      color: "white",
                      border: `2px solid white`,
                      transition: "transform 0.3s ease",
                      mr: 1
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Box>
                }
              >
                Request A Demo
              </Button>
            </motion.div>

            {/* Trusted By Section - Now in first view */}
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
                        alignItems: 'center'
                      }}
                    >
                      <img
                        src={logo}
                        alt={`Partner company ${index + 1}`}
                        style={{
                          width: 'auto',
                          height: '28px',
                          objectFit: 'contain'
                        }}
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
                title="AI That Works For You"
                description="S10.AI's medical scribe adapts to your practice workflow, saving hours on documentation daily."
                icon={<VoiceAnimation />}
              />
              
              <FeatureCard
                title="Seamless EHR Integration"
                description="Works with Epic, Cerner, and 7,000+ apps - trusted by over 1,000 healthcare clinics."
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
                title="Patient AI Engagement"
                description="Reduce no-shows by 50% with our AI agent for automated patient communication and follow-ups."
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#143151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="#143151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V8" stroke="#143151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
              
              <FeatureCard
                title="Immediate Results"
                description="Stay HIPAA-compliant and see tangible improvements in workflow efficiency within days."
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#143151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#143151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
