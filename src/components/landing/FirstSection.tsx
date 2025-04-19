
import React from 'react';
import { Box, Button, Stack, Typography, Container, Grid } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import Marquee from "react-fast-marquee";

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

export const FirstSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-white">
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          {/* Hero heading */}
          <Grid item xs={12} md={7} lg={6}>
            <Box
              sx={{
                animation: "fadeInUp 0.8s ease-out",
                mb: { xs: 4, md: 0 }
              }}
            >
              <Typography 
                variant="h1" 
                sx={{
                  fontSize: {
                    xs: '3rem',
                    sm: '3.5rem',
                    md: '4rem',
                    lg: '4.5rem'
                  },
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '-0.02em',
                  mb: 3
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
                  py: 1.5,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  width: 'fit-content',
                  height: '48px',
                  mt: 4,
                  mb: 5,
                  '&:hover': {
                    background: 'linear-gradient(to right, #0d2440, #2d6974)'
                  }
                }}
              >
                <ArrowRight className="h-5 w-5" />
                <span>Book A Demo</span>
              </Button>
            </Box>
          </Grid>

          {/* Feature Card */}
          <Grid item xs={12} md={5} lg={6}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%'
            }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  p: { xs: 3, md: 4 },
                  border: '1px solid rgba(209, 213, 219, 0.3)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  animation: "fadeInDown 0.8s ease-out",
                }}
              >
                <Typography 
                  sx={{
                    color: '#000000',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.6,
                    fontWeight: 400,
                    flex: 1,
                    pr: 2,
                    maxWidth: '70%'
                  }}
                >
                  From AI medical scribes to patient care AI agents, CRUSH and BRAVO are AI-powered solutions that streamline clinical documentation, minimize administrative burdens, reduce burnout, and save you time.
                </Typography>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30%',
                  minWidth: '100px',
                }}>
                  <VoiceAnimation />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Trusted By Section */}
        <Box 
          sx={{
            mt: { xs: 6, md: 8 },
            background: 'rgba(243, 244, 246, 0.4)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            p: { xs: 3, md: 3 },
            border: '1px solid rgba(209, 213, 219, 0.3)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}
        >
          <Typography 
            variant="h6" 
            sx={{
              color: '#000000',
              mb: 2,
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              fontWeight: 600
            }}
          >
            S10.AI Is Recommended by
          </Typography>
          <Box sx={{
            overflow: "hidden",
            width: '100%',
            '& .marquee-container': {
              minHeight: '50px'
            }
          }}>
            <Marquee gradient={false} speed={50}>
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
                    alt={`Company logo ${index + 1}`}
                    style={{
                      width: 'auto',
                      height: '35px',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              ))}
            </Marquee>
          </Box>
        </Box>
      </Container>
    </section>
  );
};
