
import React from 'react';
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

export const FirstSection = () => {
  const theme = useTheme();
  
  return (
    <section className="min-h-screen bg-white px-4 py-8 md:p-16 lg:p-20 flex items-center">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1400px',
        mx: 'auto',
        gap: { xs: 6, md: 8 }
      }}>
        <Stack 
          spacing={{ xs: 4, md: 6 }} 
          direction={{
            xs: "column",
            md: "row"
          }} 
          sx={{
            width: '100%',
            justifyContent: "space-between",
            alignItems: {
              xs: "center",
              md: "flex-start"
            }
          }} 
        >
          <Box sx={{
            flex: '1 1 auto',
            maxWidth: { xs: '100%', md: '55%' },
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
          }}>
            <Typography 
              variant="h1" 
              sx={{
                fontSize: {
                  xs: '2.5rem',
                  sm: '3rem',
                  md: '3.5rem',
                  lg: '4rem',
                  xl: '4.5rem'
                },
                color: '#000000',
                lineHeight: 1.1,
                fontWeight: 700,
                mb: { xs: 2, md: 0 }
              }}
            >
              Innovative<br />
              Ambient AI<br />
              <Box component="span" sx={{ color: '#000000' }}>
                Solutions<br />
                For Healthcare
              </Box>
            </Typography>
          </Box>

          <Box sx={{
            flex: '0 1 auto',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            border: '1px solid rgba(209, 213, 219, 0.3)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', md: '400px' },
            maxWidth: '100%',
            animation: "fadeInDown 0.8s ease-out",
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
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
              mb: 3
            }}>
              <img 
                src="/circleIcon.png" 
                alt="circleIcon" 
                style={{
                  width: '90px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </Box>
            <Typography 
              variant="h6" 
              sx={{
                color: '#000000',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.6
              }}
            >
              From AI medical scribes to patient care AI agents, CRUSH and BRAVO are AI-powered solutions that streamline clinical documentation, minimize administrative burdens, reduce burnout, and save you time—so you can focus on patient care and enhance healthcare automation.
            </Typography>
          </Box>
        </Stack>

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
          gap: { xs: 4, md: 6 },
          width: '100%'
        }}>
          <Button 
            sx={{
              background: 'linear-gradient(to right, #143151, #387E89)',
              color: 'white',
              px: 4,
              py: 2,
              borderRadius: '50px',
              textTransform: 'none',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              minWidth: { xs: '100%', sm: '200px' },
              height: '56px',
              alignSelf: { xs: 'stretch', md: 'flex-start' },
              '&:hover': {
                background: 'linear-gradient(to right, #0d2440, #2d6974)'
              }
            }}
          >
            <ArrowRight className="h-5 w-5" />
            <span>Book A Demo</span>
          </Button>
          
          <Box sx={{
            flex: 1,
            background: 'rgba(243, 244, 246, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            border: '1px solid rgba(209, 213, 219, 0.3)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Typography 
              variant="h6" 
              sx={{
                color: '#000000',
                mb: 3,
                fontSize: { xs: '1.1rem', sm: '1.25rem' }
              }}
            >
              S10.AI Is Recommended by
            </Typography>
            <Box sx={{
              overflow: "hidden",
              width: '100%',
              '& .marquee-container': {
                minHeight: '60px'
              }
            }}>
              <Marquee gradient={false} speed={50}>
                {companyLogos.map((logo, index) => (
                  <Box 
                    key={index} 
                    sx={{
                      mx: { xs: 2, sm: 3 },
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img 
                      src={logo} 
                      alt={`logo-${index}`} 
                      style={{
                        width: 'auto',
                        height: '40px',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                ))}
              </Marquee>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
