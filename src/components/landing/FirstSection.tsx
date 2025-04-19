import React from 'react';
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";
const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];
export const FirstSection = () => {
  const theme = useTheme();
  return <section className="min-h-screen bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
        <Stack direction={{
        xs: "column",
        lg: "row"
      }} spacing={{
        xs: 6,
        lg: 8
      }} alignItems={{
        xs: "flex-start",
        lg: "center"
      }} justifyContent="space-between">
          {/* Left column with heading */}
          <Box sx={{
          maxWidth: {
            xs: '100%',
            lg: '55%'
          },
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
        }} className="text-6xl">
            <Typography variant="h1" sx={{
            fontSize: {
              xs: '2.75rem',
              sm: '3.25rem',
              md: '3.75rem',
              lg: '4.25rem',
              xl: '4.5rem'
            },
            lineHeight: {
              xs: 1.2,
              md: 1.1
            },
            fontWeight: 700,
            color: '#000000',
            letterSpacing: '-0.02em',
            mb: {
              xs: 2,
              lg: 0
            }
          }}>
              Innovative<br />
              Ambient AI<br />
              Solutions<br />
              For Healthcare
            </Typography>
          </Box>

          {/* Right column with description */}
          <Box sx={{
          maxWidth: {
            xs: '100%',
            lg: '40%'
          },
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          p: {
            xs: 4,
            md: 5
          },
          border: '1px solid rgba(209, 213, 219, 0.3)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
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
            mb: 4
          }}>
              <img src="/circleIcon.png" alt="circleIcon" style={{
              width: '80px',
              height: 'auto',
              objectFit: 'contain'
            }} />
            </Box>
            <Typography sx={{
            color: '#000000',
            fontSize: {
              xs: '1.125rem',
              md: '1.25rem'
            },
            lineHeight: 1.6,
            fontWeight: 400
          }}>
              From AI medical scribes to patient care AI agents, CRUSH and BRAVO are AI-powered solutions that streamline clinical documentation, minimize administrative burdens, reduce burnout, and save you time—so you can focus on patient care and enhance healthcare automation.
            </Typography>
          </Box>
        </Stack>

        {/* Bottom section */}
        <Box sx={{
        mt: {
          xs: 6,
          md: 8,
          lg: 10
        },
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        gap: {
          xs: 4,
          md: 6
        },
        alignItems: {
          xs: 'stretch',
          md: 'center'
        }
      }}>
          <Button sx={{
          background: 'linear-gradient(to right, #143151, #387E89)',
          color: 'white',
          px: 4,
          py: 2,
          borderRadius: '50px',
          textTransform: 'none',
          fontSize: {
            xs: '1.125rem',
            md: '1.25rem'
          },
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          minWidth: {
            xs: '100%',
            md: 'auto'
          },
          maxWidth: {
            xs: '100%',
            md: '200px'
          },
          height: '56px',
          '&:hover': {
            background: 'linear-gradient(to right, #0d2440, #2d6974)'
          }
        }}>
            <ArrowRight className="h-5 w-5" />
            <span>Book A Demo</span>
          </Button>

          <Box sx={{
          flex: 1,
          background: 'rgba(243, 244, 246, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          p: {
            xs: 3,
            md: 4
          },
          border: '1px solid rgba(209, 213, 219, 0.3)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
            <Typography variant="h6" sx={{
            color: '#000000',
            mb: 3,
            fontSize: {
              xs: '1.25rem',
              md: '1.5rem'
            },
            fontWeight: 600
          }}>
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
                {companyLogos.map((logo, index) => <Box key={index} sx={{
                mx: {
                  xs: 2,
                  md: 3
                },
                display: 'flex',
                alignItems: 'center'
              }}>
                    <img src={logo} alt={`Company logo ${index + 1}`} style={{
                  width: 'auto',
                  height: '40px',
                  objectFit: 'contain'
                }} />
                  </Box>)}
              </Marquee>
            </Box>
          </Box>
        </Box>
      </div>
    </section>;
};