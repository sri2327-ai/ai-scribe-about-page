
import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

export const FirstSection = () => {
  const theme = useTheme();

  return (
    <section className="min-h-screen bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col space-y-12 md:space-y-16">
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
                  fontWeight: 500,
                  fontSize: '2.5rem',
                  lineHeight: '3rem',
                  letterSpacing: '-0.025em',
                  marginBottom: 0,
                  color: '#000000',
                  mb: { xs: 4, md: 6 }
                }}
              >
                Innovative<br />
                Ambient AI<br />
                Solutions<br />
                For Healthcare
              </Typography>

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
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    p: { xs: 4, sm: 5 },
                    border: '1px solid rgba(209, 213, 219, 0.3)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 4, md: 5 }
                  }}
                >
                  <Box className="space-y-5">
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 500,
                        fontSize: '1.5rem',
                        lineHeight: '2rem',
                        letterSpacing: '-0.025em',
                        color: '#143151',
                        mb: 3
                      }}
                    >
                      AI That Works For You
                    </Typography>

                    <Box className="mb-4">
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: '1.1rem',
                          lineHeight: '1.5rem',
                          color: '#143151',
                          mb: 1
                        }}
                      >
                        Customize Workflows
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#000000',
                          fontWeight: 400,
                          fontSize: '1rem',
                          lineHeight: '1.5rem',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        S10.AI's medical scribe adapts to your practice, not the other way around.
                      </Typography>
                    </Box>
                    
                    <Box className="mb-4">
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: '1.1rem',
                          lineHeight: '1.5rem',
                          color: '#143151',
                          mb: 1
                        }}
                      >
                        Seamless EHR Integration
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#000000',
                          fontWeight: 400,
                          fontSize: '1rem',
                          lineHeight: '1.5rem',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        Works with Epic, Cerner, and 7,000+ apps - trusted by over 1,000 clinics.
                      </Typography>
                    </Box>
                    
                    <Box className="mb-4">
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: '1.1rem',
                          lineHeight: '1.5rem',
                          color: '#143151',
                          mb: 1
                        }}
                      >
                        Patient AI Engagement
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#000000',
                          fontWeight: 400,
                          fontSize: '1rem',
                          lineHeight: '1.5rem',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        Reduce no-shows by 50% with our AI agent for patient communication.
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: '1.1rem',
                          lineHeight: '1.5rem',
                          color: '#143151',
                          mb: 1
                        }}
                      >
                        Immediate Results
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#000000',
                          fontWeight: 400,
                          fontSize: '1rem',
                          lineHeight: '1.5rem',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        Stay HIPAA-compliant and see tangible improvements within days.
                      </Typography>
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
                fontWeight: 500,
                fontSize: '1.1rem',
                lineHeight: '1.5rem',
                letterSpacing: '-0.025em',
                color: '#000000',
                mb: { xs: 2, sm: 3 },
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
