
import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

export const FirstSection = () => {
  const theme = useTheme();

  return (
    <section className="min-h-screen bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-28 lg:py-32">
        {/* Main content layout */}
        <div className="flex flex-col space-y-12 md:space-y-16">
          {/* Top row: Heading and Card */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-16">
            {/* Left column - Heading and CTA */}
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
                    xs: '3.5rem',
                    sm: '4rem',
                    md: '4.5rem',
                    lg: '5rem',
                  },
                  lineHeight: {
                    xs: 1.1,
                    md: 1
                  },
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '-0.02em',
                  mb: {
                    xs: 6,
                    lg: 8
                  }
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
                  variant='h6' 
                  fontWeight="semiBold" 
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    color: "white",
                  }}
                >
                  Request A Demo
                </Typography>
              </Button>
            </Box>

            {/* Right column - Card and animation */}
            <Box
              sx={{
                width: { xs: '100%', md: '45%' },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-end' },
                mt: { xs: 4, md: 12 } // Increased vertical margin to bring card lower
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: { xs: '450px', md: '100%' },
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                {/* Card with content */}
                <Box
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    p: 3,
                    border: '1px solid rgba(209, 213, 219, 0.3)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 4
                  }}
                >
                  <Box sx={{
                    flex: 1.5,
                    pr: { xs: 0, md: 2 },
                    mb: { xs: 3, md: 0 }
                  }}>
                    <Typography
                      sx={{
                        color: '#000000',
                        fontSize: {
                          xs: '0.75rem',
                          md: '0.875rem'
                        },
                        lineHeight: 1.6,
                        fontWeight: 400
                      }}
                    >
                      From AI medical scribes to patient care AI agents, s10.ai offers AI-powered solutions that streamline clinical documentation, reduce administrative burdens, minimize burnout, and save time—so you can focus on patient care.
                    </Typography>
                  </Box>
                  <Box sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'scale(1.2)'
                  }}>
                    <VoiceAnimation />
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>

          {/* Bottom row: Recommended Companies */}
          <Box
            sx={{
              background: 'rgba(243, 244, 246, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              p: 2,
              border: '1px solid rgba(209, 213, 219, 0.3)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              width: '100%',
              mt: { xs: 8, md: 12 }
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#000000',
                mb: 2,
                fontSize: {
                  xs: '1rem',
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
                  minHeight: '40px'
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
