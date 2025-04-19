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
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* Main content layout */}
        <div className="flex flex-col space-y-8">
          {/* Top row: Heading and Card */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
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
                    xs: '2.5rem',
                    sm: '3rem',
                    md: '3.5rem',
                    lg: '4rem',
                  },
                  lineHeight: {
                    xs: 1.2,
                    md: 1.1
                  },
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '-0.02em',
                  mb: {
                    xs: 3,
                    lg: 4
                  }
                }}
              >
                Innovative<br />
                Ambient AI<br />
                Solutions<br />
                For Healthcare
              </Typography>

              <Button
                sx={{
                  background: 'linear-gradient(to right, #143151, #387E89)',
                  color: 'white',
                  px: 4,
                  py: 2,
                  mt: 2,
                  mb: 4,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: {
                    xs: '1rem',
                    md: '1.125rem'
                  },
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 2,
                  width: {
                    xs: '100%',
                    sm: 'auto'
                  },
                  maxWidth: {
                    xs: '100%',
                    sm: '200px'
                  },
                  height: '50px',
                  '&:hover': {
                    background: 'linear-gradient(to right, #0d2440, #2d6974)'
                  }
                }}
              >
                <span>Book A Demo</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Box>

            {/* Right column - Card and animation */}
            <Box
              sx={{
                width: { xs: '100%', md: '45%' },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-end' }
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
                    flex: 2,
                    pr: { xs: 0, md: 2 },
                    mb: { xs: 3, md: 0 }
                  }}>
                    <Typography
                      sx={{
                        color: '#000000',
                        fontSize: {
                          xs: '0.875rem',
                          md: '1rem'
                        },
                        lineHeight: 1.6,
                        fontWeight: 400
                      }}
                    >
                      From AI medical scribes to patient care AI agents, CRUSH and BRAVO are AI-powered solutions that streamline clinical documentation, minimize administrative burdens, reduce burnout, and save you time—so you can focus on patient care.
                    </Typography>
                  </Box>
                  <Box sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'scale(0.8)'
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
              width: '100%'
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
