
import React, { useState, useEffect } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedWorkflow } from "@/components/crush-ai/AnimatedWorkflow";
import { TiltedScroll } from "@/components/ui/tilted-scroll";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SparklesText } from "@/components/ui/sparkles-text";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const HeroSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const renderLetterPopover = (letter: string, title: string, description: string) => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Box 
            component="span" 
            sx={{ 
              color: crushAIColors.text.primary,
              fontWeight: 900,
              position: 'relative',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '4px'
              }
            }}
          >
            <strong>{letter}</strong>
          </Box>
        </PopoverTrigger>
        <PopoverContent 
          className="p-0 border-0 shadow-xl" 
          sideOffset={5}
          style={{
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)'
          }}
        >
          <Box sx={{ p: 3, color: '#fff' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', opacity: 0.9, lineHeight: 1.5 }}>
              {description}
            </Typography>
          </Box>
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 }, // Increased top padding for mobile
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 'auto', md: '100vh' },
        minHeight: { xs: 'auto', md: '100vh' },
        mt: { xs: 2, md: 0 } // Added top margin on mobile to give space from header
      }}
    >
      {/* Background Tilted Scroll with increased opacity */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.35, // Increased opacity to 0.35 as requested
          display: { xs: 'block', md: 'block' } // Show on all devices
        }}
      >
        <TiltedScroll />
      </Box>
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, height: '100%' }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'center', 
          gap: { xs: 4, md: 4 }, // Increased gap on mobile
          height: '100%',
          justifyContent: 'center'
        }}>
          <Box 
            sx={{ 
              width: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 1 },
              mb: { xs: 4, md: 0 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            <Box 
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ 
                pr: { md: 4 }
              }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '1.7rem', md: '2.3rem' }, 
                  fontWeight: 800,
                  mb: 2,
                  color: crushAIColors.text.primary,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                <Box component="span" sx={{ color: crushAIColors.text.primary }}>
                  <SparklesText 
                    text="C.R.U.S.H"
                    className="text-3xl md:text-4xl font-bold inline-block"
                    colors={{ first: "#0EA5E9", second: "#D946EF" }}
                    sparklesCount={15} // Reverted to original settings
                  />
                  : The AI Medical Scribe That Works for You
                </Box>
              </Typography>

              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  color: crushAIColors.text.secondary,
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  fontWeight: 400,
                  lineHeight: 1.5
                }}
              >
                AI-Powered Assistant – Automating Clinical Documentation, Referrals, Prescriptions &
                Workflows—So You Can Focus on Patient Care!
              </Typography>

              <ShadcnButton 
                size="lg" 
                className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-lg"
              >
                <ArrowRight size={16} className="mr-2" />
                REQUEST A DEMO
              </ShadcnButton>
              
              {/* Show TiltedScroll on mobile below the CTA button with higher opacity */}
              {isMobile && (
                <Box 
                  sx={{ 
                    mt: 5, 
                    opacity: 0.35, // Increased opacity to 0.35
                    transform: 'scale(0.8)',
                    height: '150px', // Increased height for better visibility
                    overflow: 'hidden'
                  }}
                >
                  <TiltedScroll />
                </Box>
              )}
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              width: { xs: '100%', md: '50%' },
              order: { xs: 2, md: 2 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxHeight: { xs: '320px', md: '80vh' },
              px: { xs: 2, md: 0 },
              mt: { xs: 2, md: 0 } // Added more space on mobile
            }}
          >
            <Box 
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                width: '100%',
                height: '100%',
                maxWidth: { xs: '300px', md: '550px' }
              }}
            >
              <AnimatedWorkflow />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
