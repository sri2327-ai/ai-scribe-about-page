import React from 'react';
import { Box, Button, Stack, Typography } from "@mui/material";
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
        <Stack 
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 4, lg: 6 }}
          alignItems={{ xs: "flex-start", lg: "center" }}
          justifyContent="space-between"
        >
          {/* Left column with heading */}
          <Box sx={{
            maxWidth: { xs: '100%', lg: '50%' },
            animation: "fadeInUp 0.8s ease-out",
          }}>
            <Typography 
              variant="h1" 
              sx={{
                fontSize: {
                  xs: '2.75rem',
                  sm: '3.25rem',
                  md: '3.75rem',
                  lg: '4rem'
                },
                lineHeight: { xs: 1.2, md: 1.1 },
                fontWeight: 700,
                color: '#000000',
                letterSpacing: '-0.02em',
                mb: { xs: 2, lg: 0 }
              }}
            >
              Innovative<br />
              Ambient AI<br />
              Solutions<br />
              For Healthcare
            </Typography>
          </Box>

          {/* Right column with description */}
          <Box sx={{
            width: { xs: '100%', lg: '280px' },
            minWidth: { lg: '280px' },
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            p: { xs: 3, md: 3 },
            border: '1px solid rgba(209, 213, 219, 0.3)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            height: { xs: 'auto', sm: '240px' },
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            animation: "fadeInDown 0.8s ease-out",
          }}>
            <Typography 
              sx={{
                color: '#000000',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.6,
                fontWeight: 400,
                flex: 1,
                pr: 2
              }}
            >
              From AI medical scribes to patient care AI agents, CRUSH and BRAVO are AI-powered solutions that streamline clinical documentation, minimize administrative burdens, reduce burnout, and save you time.
            </Typography>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
            }}>
              <VoiceAnimation />
            </Box>
          </Box>
        </Stack>

        {/* Bottom section */}
        <Stack
          spacing={3}
          sx={{
            mt: { xs: 4, sm: 6, md: 8 },
            width: '100%'
          }}
        >
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
              '&:hover': {
                background: 'linear-gradient(to right, #0d2440, #2d6974)'
              }
            }}
          >
            <ArrowRight className="h-5 w-5" />
            <span>Book A Demo</span>
          </Button>

          <Box sx={{
            background: 'rgba(243, 244, 246, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            p: { xs: 3, md: 3 },
            border: '1px solid rgba(209, 213, 219, 0.3)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
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
        </Stack>
      </div>
    </section>
  );
};
