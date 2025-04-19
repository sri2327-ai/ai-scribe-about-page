
import React from 'react';
import { Box, Button, Typography, Grid } from "@mui/material";
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
        <Grid container spacing={4} alignItems="center">
          {/* Left side with heading */}
          <Grid xs={12} md={7} lg={7}>
            <Box
              sx={{
                animation: "fadeInUp 0.8s ease-out",
                "@keyframes fadeInUp": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(20px)"
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)"
                  }
                }
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
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
                <ArrowRight className="h-4 w-4" />
                <span>Book A Demo</span>
              </Button>
            </Box>
          </Grid>

          {/* Right side with card and animation */}
          <Grid xs={12} md={5} lg={5}>
            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                p: 3,
                border: '1px solid rgba(209, 213, 219, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                animation: "fadeInDown 0.8s ease-out",
                height: { xs: 'auto', md: '300px' },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 4,
                "@keyframes fadeInDown": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(-20px)"
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)"
                  }
                }
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
                      xs: '1rem',
                      md: '1.125rem'
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
              }}>
                <VoiceAnimation />
              </Box>
            </Box>

            {/* Logos section */}
            <Box
              sx={{
                background: 'rgba(243, 244, 246, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                p: 3,
                border: '1px solid rgba(209, 213, 219, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#000000',
                  mb: 2,
                  fontSize: {
                    xs: '1.125rem',
                    md: '1.25rem'
                  },
                  fontWeight: 600
                }}
              >
                S10.AI Is Recommended by
              </Typography>
              <Box
                sx={{
                  overflow: "hidden",
                  width: '100%',
                  '& .marquee-container': {
                    minHeight: '50px'
                  }
                }}
              >
                <Marquee gradient={false} speed={50}>
                  {companyLogos.map((logo, index) => (
                    <Box
                      key={index}
                      sx={{
                        mx: {
                          xs: 2,
                          md: 3
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
                          height: '30px',
                          objectFit: 'contain'
                        }}
                      />
                    </Box>
                  ))}
                </Marquee>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
