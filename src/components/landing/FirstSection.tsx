
import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, ClipboardCheck, CalendarCheck, FileCheck, Users } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import { motion } from 'framer-motion';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const FirstSection = () => {
  const theme = useTheme();

  return (
    <section className="min-h-screen bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col space-y-8 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-16 lg:gap-20">
            <Box
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              sx={{
                maxWidth: { xs: '100%', md: '45%' },
                pr: { md: 4 }
              }}
            >
              <Typography
                component={motion.h1}
                variants={fadeInUp}
                sx={{
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3rem',
                    md: '3.5rem',
                    lg: '4rem'
                  },
                  lineHeight: {
                    xs: 1.1,
                    md: 1
                  },
                  letterSpacing: '-0.02em',
                  fontWeight: 700,
                  color: '#143151',
                  mb: { xs: 2, md: 3 }
                }}
              >
                AI Scribing & Patient Engagement Built for Clinicians Like You
              </Typography>

              <Typography
                component={motion.h3}
                variants={fadeInUp}
                sx={{
                  fontSize: {
                    xs: '1.25rem',
                    sm: '1.5rem',
                    md: '1.75rem'
                  },
                  lineHeight: 1.4,
                  color: '#387E89',
                  mb: { xs: 3, md: 4 },
                  fontWeight: 600
                }}
              >
                The AI that adapts to your workflow, not the other way around
              </Typography>

              <Box
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  mb: { xs: 4, md: 6 }
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(20, 49, 81, 0.1)',
                    borderRadius: '12px',
                    py: 1,
                    px: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(20, 49, 81, 0.1)'
                    }
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#143151' 
                    }}
                  >
                    75%
                  </Box>
                  <Box component="span">faster charting</Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(56, 126, 137, 0.1)',
                    borderRadius: '12px',
                    py: 1,
                    px: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(56, 126, 137, 0.1)'
                    }
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#387E89' 
                    }}
                  >
                    60%
                  </Box>
                  <Box component="span">higher patient satisfaction</Box>
                </Box>
              </Box>

              <Button 
                component={motion.button}
                variants={fadeInUp}
                variant="contained" 
                sx={{ 
                  textTransform: "none",
                  background: `linear-gradient(135deg, #143151, #387E89)`,
                  color: 'white',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  borderRadius: "50px",
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    background: `linear-gradient(135deg, #143151, #387E89)`,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(56, 126, 137, 0.3)',
                    ".icon-box": {
                      transform: "rotate(-270deg)",
                    },
                  },
                }}
                startIcon={
                  <Box
                    className="icon-box"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: { xs: 20, md: 25 },
                      height: { xs: 20, md: 25 },
                      borderRadius: "50%", 
                      color: "white",
                      border: `2px solid white`,
                      transition: "transform 0.3s ease",
                      transform: "rotate(0deg)",
                      mr: 1
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Box>
                }
              >
                <Typography
                  variant='h6' 
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                    color: "white",
                    fontWeight: 600
                  }}
                >
                  Request A Demo
                </Typography>
              </Button>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              sx={{
                width: { xs: '100%', md: '55%' },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-end' },
                mt: { xs: 4, md: 0 }
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: { xs: '450px', md: '100%' },
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border border-blue-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#143151] to-[#387E89]"></div>
                  
                  <h2 className="text-2xl font-bold text-[#143151] mb-5 text-center">
                    Customize workflows to save time, stay HIPAA-compliant, and see results in days
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(20, 49, 81, 0.15)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-[#143151] hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-[#143151]/10 flex items-center justify-center mr-3">
                          <ClipboardCheck className="w-6 h-6 text-[#143151]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#143151]">AI That Works For You</h3>
                      </div>
                      <p className="text-gray-700">S10.AI's medical scribe adapts to your practice, not the other way around</p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(56, 126, 137, 0.15)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-[#387E89] hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-[#387E89]/10 flex items-center justify-center mr-3">
                          <Users className="w-6 h-6 text-[#387E89]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#387E89]">Patient AI Engagement</h3>
                      </div>
                      <p className="text-gray-700">Automate appointments, reminders, and follow-ups to enhance patient care</p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(81, 146, 174, 0.15)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-[#5192AE] hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-[#5192AE]/10 flex items-center justify-center mr-3">
                          <CalendarCheck className="w-6 h-6 text-[#5192AE]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#5192AE]">Universal EHR Integration</h3>
                      </div>
                      <p className="text-gray-700">Works with Epic, Cerner, and 7,000+ apps - trusted by over 1,000 clinics</p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(70, 100, 150, 0.15)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-[#466496] hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-[#466496]/10 flex items-center justify-center mr-3">
                          <FileCheck className="w-6 h-6 text-[#466496]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#466496]">Immediate Results</h3>
                      </div>
                      <p className="text-gray-700">Stay HIPAA-compliant and see tangible improvements within days</p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex justify-center mt-5"
                  >
                    <VoiceAnimation />
                  </motion.div>
                </motion.div>
              </Box>
            </Box>
          </div>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            sx={{
              background: 'linear-gradient(to right, rgba(243, 244, 246, 0.8), rgba(237, 242, 247, 0.8))',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              p: { xs: 3, sm: 4 },
              border: '1px solid rgba(209, 213, 219, 0.5)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              width: '100%',
              mt: { xs: 4, md: 0 },
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
              }
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#143151',
                mb: { xs: 2, sm: 3 },
                fontSize: {
                  xs: '1rem',
                  sm: '1.125rem',
                  md: '1.25rem'
                },
                fontWeight: 600,
                textAlign: 'center'
              }}
            >
              S10.AI Is Recommended by
            </Typography>
            <Box
              sx={{
                overflow: "hidden",
                width: '100%',
                '& .marquee-container': {
                  minHeight: { xs: '40px', sm: '50px' }
                }
              }}
            >
              <Marquee gradient={false} speed={50}>
                {companyLogos.map((logo, index) => (
                  <Box
                    key={index}
                    sx={{
                      mx: {
                        xs: 3,
                        md: 4
                      },
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={logo}
                      alt={`Company logo ${index + 1}`}
                      style={{
                        width: 'auto',
                        height: '32px',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                ))}
              </Marquee>
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
};
