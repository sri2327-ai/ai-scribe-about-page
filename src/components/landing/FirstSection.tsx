
import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, ClipboardCheck, CalendarCheck, PieChart } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

export const FirstSection = () => {
  const theme = useTheme();

  return (
    <section className="min-h-screen bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col space-y-12 md:space-y-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-16 lg:gap-20">
            <Box
              sx={{
                maxWidth: { xs: '100%', md: '50%' },
                pr: { md: 4 }
              }}
            >
              <Typography
                variant="h1"
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
                  mb: { xs: 2, md: 4 }
                }}
              >
                AI Scribing & Patient Engagement Built for Clinicians Like You
              </Typography>

              <Typography
                variant="h3"
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

              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '1rem',
                    sm: '1.125rem',
                    md: '1.25rem'
                  },
                  lineHeight: 1.6,
                  color: '#4a5568',
                  mb: { xs: 4, md: 6 },
                  maxWidth: '90%'
                }}
              >
                Don't adapt to your AI—make it work for you.
                S10.AI's AI medical scribe and patient engagement agent integrate seamlessly with Epic, Cerner, your preferred EHR, and 7,000+ other apps. Trusted by over 1,000 clinics worldwide.
              </Typography>

              <Box
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
                    px: 2
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
                    px: 2
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
              sx={{
                width: { xs: '100%', md: '45%' },
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
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(243, 244, 246, 0.8))',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    p: { xs: 4, sm: 5 },
                    border: '1px solid rgba(209, 213, 219, 0.4)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 4, md: 5 },
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '6px',
                      background: 'linear-gradient(90deg, #143151, #387E89)'
                    }
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#143151',
                      fontSize: {
                        xs: '1.25rem',
                        sm: '1.5rem',
                        md: '1.75rem'
                      },
                      fontWeight: 700,
                      mb: 2,
                      textAlign: 'center'
                    }}
                  >
                    Customize workflows to save time, stay HIPAA-compliant, and see results in days
                  </Typography>
                  
                  <Box className="flex flex-col space-y-5">
                    <Box 
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        background: 'rgba(20, 49, 81, 0.04)',
                        p: 2.5,
                        borderRadius: '12px',
                        border: '1px solid rgba(20, 49, 81, 0.08)',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(20, 49, 81, 0.08)'
                        }
                      }}
                    >
                      <Box 
                        sx={{
                          minWidth: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(20, 49, 81, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <ClipboardCheck color="#143151" size={24} />
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#143151',
                            fontSize: {
                              xs: '1rem',
                              sm: '1.1rem'
                            },
                            lineHeight: 1.5,
                            fontWeight: 600,
                            mb: 0.5
                          }}
                        >
                          Don't adapt to your AI—make it work for you
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#4a5568',
                            fontSize: '0.95rem',
                            lineHeight: 1.5
                          }}
                        >
                          S10.AI's medical scribe adapts to your practice, not the other way around
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box 
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        background: 'rgba(56, 126, 137, 0.04)',
                        p: 2.5,
                        borderRadius: '12px',
                        border: '1px solid rgba(56, 126, 137, 0.08)',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(56, 126, 137, 0.08)'
                        }
                      }}
                    >
                      <Box 
                        sx={{
                          minWidth: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(56, 126, 137, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <CalendarCheck color="#387E89" size={24} />
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#143151',
                            fontSize: {
                              xs: '1rem',
                              sm: '1.1rem'
                            },
                            lineHeight: 1.5,
                            fontWeight: 600,
                            mb: 0.5
                          }}
                        >
                          Seamless EHR Integration
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#4a5568',
                            fontSize: '0.95rem',
                            lineHeight: 1.5
                          }}
                        >
                          Works with Epic, Cerner, and 7,000+ apps - trusted by over 1,000 clinics
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box 
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        background: 'rgba(81, 146, 174, 0.04)',
                        p: 2.5,
                        borderRadius: '12px',
                        border: '1px solid rgba(81, 146, 174, 0.08)',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(81, 146, 174, 0.08)'
                        }
                      }}
                    >
                      <Box 
                        sx={{
                          minWidth: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(81, 146, 174, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <PieChart color="#5192AE" size={24} />
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#143151',
                            fontSize: {
                              xs: '1rem',
                              sm: '1.1rem'
                            },
                            lineHeight: 1.5,
                            fontWeight: 600,
                            mb: 0.5
                          }}
                        >
                          Immediate Results
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#4a5568',
                            fontSize: '0.95rem',
                            lineHeight: 1.5
                          }}
                        >
                          Stay HIPAA-compliant and see tangible improvements within days
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box 
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transform: { xs: 'scale(0.9)', md: 'scale(1)' },
                      maxWidth: '100%',
                      overflow: 'hidden'
                    }}
                  >
                    <VoiceAnimation />
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>

          <Box
            sx={{
              background: 'rgba(243, 244, 246, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              p: { xs: 3, sm: 4 },
              border: '1px solid rgba(209, 213, 219, 0.3)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              width: '100%',
              mt: { xs: 4, md: 0 }
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#000000',
                mb: { xs: 2, sm: 3 },
                fontSize: {
                  xs: '0.875rem',
                  sm: '1rem',
                  md: '1.125rem'
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
                  minHeight: { xs: '32px', sm: '40px' }
                }
              }}
            >
              <Marquee gradient={false} speed={50}>
                {companyLogos.map((logo, index) => (
                  <Box
                    key={index}
                    sx={{
                      mx: {
                        xs: 1.5,
                        md: 2
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
                        height: '24px',
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
