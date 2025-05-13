
import React, { useEffect, useRef } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import { motion } from 'framer-motion';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

export const FirstSection = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      className="min-h-screen bg-white overflow-hidden relative"
      ref={sectionRef}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 relative z-10"
      >
        <div className="flex flex-col space-y-16 md:space-y-24">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-16 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="animate-on-scroll"
            >
              <Box sx={{
                maxWidth: {
                  xs: '100%',
                  md: '50%'
                },
                pr: {
                  md: 4
                }
              }}>
                <Typography variant="h1" sx={{
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
                  color: '#000000',
                  mb: {
                    xs: 4,
                    md: 6
                  }
                }} className="tracking-tight">
                  AI Scribing &<br />
                  Patient Engagement<br />
                  Built for Clinicians<br />
                  Like You
                </Typography>

                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="contained" sx={{
                    textTransform: "none",
                    background: `linear-gradient(135deg, #143151, #387E89)`,
                    color: 'white',
                    px: {
                      xs: 3,
                      md: 4
                    },
                    py: {
                      xs: 1.25,
                      md: 1.5
                    },
                    borderRadius: "50px",
                    transition: 'all 0.3s ease',
                    "&:hover": {
                      background: `linear-gradient(135deg, #143151, #387E89)`,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(56, 126, 137, 0.3)',
                      ".icon-box": {
                        transform: "rotate(-270deg)"
                      }
                    }
                  }} startIcon={<Box className="icon-box" sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: {
                      xs: 20,
                      md: 25
                    },
                    height: {
                      xs: 20,
                      md: 25
                    },
                    borderRadius: "50%",
                    color: "white",
                    border: `2px solid white`,
                    transition: "transform 0.3s ease",
                    transform: "rotate(0deg)",
                    mr: 1
                  }}>
                      <ArrowRight className="h-4 w-4" />
                    </Box>}>
                    <Typography variant='h6' sx={{
                      fontSize: {
                        xs: '0.875rem',
                        sm: '1rem',
                        md: '1.125rem'
                      },
                      color: "white",
                      fontWeight: 600
                    }}>
                      Request A Demo
                    </Typography>
                  </Button>
                </motion.div>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="animate-on-scroll"
            >
              <Box sx={{
                width: {
                  xs: '100%',
                  md: '45%'
                },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: {
                  xs: 'center',
                  md: 'flex-end'
                },
                mt: {
                  xs: 4,
                  md: 0
                }
              }}>
                <Box sx={{
                  width: '100%',
                  maxWidth: {
                    xs: '450px',
                    md: '100%'
                  },
                  mx: {
                    xs: 'auto',
                    md: 0
                  }
                }}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box sx={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      p: {
                        xs: 4,
                        sm: 5
                      },
                      border: '1px solid rgba(209, 213, 219, 0.3)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      height: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: {
                        xs: 4,
                        md: 5
                      },
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: '-2px',
                        borderRadius: '18px',
                        background: 'linear-gradient(135deg, rgba(20, 49, 81, 0.1), rgba(56, 126, 137, 0.1))',
                        zIndex: -1,
                      }
                    }}>
                      <Box>
                        <Typography variant="body1" sx={{
                          color: '#000000',
                          fontSize: {
                            xs: '0.875rem',
                            sm: '1rem'
                          },
                          lineHeight: 1.7,
                          fontWeight: 400
                        }} className="relative">
                          Don't adapt to your AI—make it work for you.
                          
                          <motion.span 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.8, duration: 1.5 }}
                            style={{ 
                              position: "absolute", 
                              bottom: -2, 
                              left: 0, 
                              height: "1px", 
                              background: "linear-gradient(to right, rgba(56, 126, 137, 0.3), transparent)" 
                            }} 
                          />
                        </Typography>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                        >
                          <Typography 
                            variant="body1" 
                            sx={{
                              color: '#000000',
                              fontSize: {
                                xs: '0.875rem',
                                sm: '1rem'
                              },
                              lineHeight: 1.7,
                              fontWeight: 400,
                              mt: 2
                            }}
                          >
                            S10.AI's AI medical scribe and patient engagement agent integrate seamlessly with Epic, Cerner, your preferred EHR, and 7,000+ other apps. Trusted by over 1,000 clinics worldwide, S10.AI helps you customize workflows to save time, stay HIPAA-compliant, and see results in days: 30% faster charting and over 20% higher patient satisfaction.
                          </Typography>
                        </motion.div>
                      </Box>
                      
                      <motion.div
                        animate={{ 
                          scale: [0.95, 1, 0.95],
                          opacity: [0.9, 1, 0.9]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Box sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          transform: {
                            xs: 'scale(0.9)',
                            md: 'scale(1)'
                          },
                          maxWidth: '100%',
                          overflow: 'hidden'
                        }}>
                          <VoiceAnimation />
                        </Box>
                      </motion.div>
                    </Box>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="animate-on-scroll"
          >
            <Box sx={{
              background: 'rgba(243, 244, 246, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              p: {
                xs: 3,
                sm: 4
              },
              border: '1px solid rgba(209, 213, 219, 0.3)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              width: '100%',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: '-1px',
                borderRadius: '17px',
                background: 'linear-gradient(135deg, rgba(20, 49, 81, 0.05), rgba(56, 126, 137, 0.05))',
                zIndex: -1,
              }
            }}>
              <Typography variant="h6" sx={{
                color: '#000000',
                mb: {
                  xs: 2,
                  sm: 3
                },
                fontSize: {
                  xs: '0.875rem',
                  sm: '1rem',
                  md: '1.125rem'
                },
                fontWeight: 600,
                textAlign: 'center'
              }}>
                S10.AI Is Recommended by
              </Typography>
              <Box sx={{
                overflow: "hidden",
                width: '100%',
                '& .marquee-container': {
                  minHeight: {
                    xs: '32px',
                    sm: '40px'
                  }
                }
              }}>
                <Marquee gradient={false} speed={50}>
                  {companyLogos.map((logo, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Box sx={{
                        mx: {
                          xs: 1.5,
                          md: 2
                        },
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <img 
                          src={logo} 
                          alt={`Company logo ${index + 1}`} 
                          style={{
                            width: 'auto',
                            height: '24px',
                            objectFit: 'contain'
                          }} 
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Marquee>
              </Box>
            </Box>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Subtle background decorations */}
      <div className="absolute top-1/4 left-5 w-24 h-24 bg-gradient-to-r from-[rgba(20,49,81,0.03)] to-[rgba(56,126,137,0.03)] rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-5 w-32 h-32 bg-gradient-to-r from-[rgba(56,126,137,0.03)] to-[rgba(20,49,81,0.03)] rounded-full blur-3xl" />
    </section>
  );
};
