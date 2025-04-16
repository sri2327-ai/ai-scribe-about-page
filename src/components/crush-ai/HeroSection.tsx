
import React, { useState, useEffect } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedWorkflow } from "@/components/crush-ai/AnimatedWorkflow";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SparklesText } from "@/components/ui/sparkles-text";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const HeroSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));

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
        py: { xs: 6, sm: 10, md: 16 }, // Reduced padding for mobile
        position: 'relative',
        overflow: 'hidden',
        height: 'auto', // Changed to auto for all screen sizes
        minHeight: { xs: 'auto', md: '90vh' }, // Reduced minimum height
        mt: { xs: 6, sm: 8, md: 0 } // Added more top margin for mobile
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {/* Mobile/Tablet Layout: Stack Vertically with Text First, Animation Second */}
        {(isMobile || isTablet) && (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 6,
            mb: 4
          }}>
            {/* Text Section */}
            <Box 
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ 
                width: '100%',
                px: { xs: 2, sm: 4 }
              }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '1.7rem', sm: '2rem' }, 
                  fontWeight: 800,
                  mb: 2,
                  color: crushAIColors.text.primary,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                <Box component="span" sx={{ color: "black" }}>
                  <SparklesText 
                    text="C.R.U.S.H"
                    className="text-3xl md:text-4xl font-bold inline-block"
                    colors={{ first: "#0EA5E9", second: "#D946EF" }}
                    sparklesCount={15}
                    textColor="black"
                  />
                  : The AI Medical Scribe That Works for You
                </Box>
              </Typography>

              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  color: crushAIColors.text.secondary,
                  fontSize: { xs: '0.85rem', sm: '0.95rem' },
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
            </Box>

            {/* Animation Section - Now completely separate from text */}
            <Box 
              sx={{ 
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: '300px', sm: '350px' }, // Fixed height for mobile
                maxWidth: { xs: '320px', sm: '400px' }, // Controlled width
                mx: 'auto' // Center it
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
                  height: '100%'
                }}
              >
                <AnimatedWorkflow />
              </Box>
            </Box>
          </Box>
        )}

        {/* Desktop Layout: Side by Side */}
        {!isMobile && !isTablet && (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: 4,
            height: '100%',
            justifyContent: 'center'
          }}>
            <Box 
              sx={{ 
                width: '50%',
                mb: 0,
                textAlign: 'left'
              }}
            >
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{ 
                  pr: 4
                }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: '2.3rem', 
                    fontWeight: 800,
                    mb: 2,
                    color: crushAIColors.text.primary,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                  }}
                >
                  <Box component="span" sx={{ color: "black" }}>
                    <SparklesText 
                      text="C.R.U.S.H"
                      className="text-4xl font-bold inline-block"
                      colors={{ first: "#0EA5E9", second: "#D946EF" }}
                      sparklesCount={15}
                      textColor="black"
                    />
                    : The AI Medical Scribe That Works for You
                  </Box>
                </Typography>

                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 4, 
                    color: crushAIColors.text.secondary,
                    fontSize: '0.95rem',
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
              </Box>
            </Box>
            
            <Box 
              sx={{ 
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxHeight: '80vh'
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
                  maxWidth: '550px'
                }}
              >
                <AnimatedWorkflow />
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};
