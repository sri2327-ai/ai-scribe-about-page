
import React, { useState, useEffect } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedWorkflow } from "@/components/crush-ai/AnimatedWorkflow";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SparklesText } from "@/components/ui/sparkles-text";
import { crushAIColors } from "@/theme/crush-ai-theme";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { GradientSection } from "@/components/ui/gradient-section";
import rippleStyles from "@/styles/RippleEffect.module.css";
import { CrushTooltip } from "@/components/crush-ai/CrushTooltip";

export const HeroSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));

  // C.R.U.S.H tooltip content with updated content for "C"
  const tooltipData = [
    { letter: 'C', content: 'Customisable' },
    { letter: 'R', content: 'Real-Time EHR Sync' },
    { letter: 'U', content: 'Universal Coding' },
    { letter: 'S', content: 'Smart AI Assistance' },
    { letter: 'H', content: 'Healthcare Automation' }
  ];

  return (
    <GradientSection 
      variant="linear"
      intensity="light"
      sx={{ 
        py: { xs: 6, sm: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        height: 'auto',
        minHeight: { xs: 'auto', md: '90vh' },
        mt: { xs: 6, sm: 8, md: 0 },
        background: crushAIColors.background.gradient,
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
                <Box 
                  component="span" 
                  sx={{ 
                    color: crushAIColors.text.primary, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexWrap: 'wrap' 
                  }}
                >
                  <CrushTooltip data={tooltipData} />
                  <Box component="span">:</Box>
                  <Box component="span" sx={{ ml: 1 }}>The AI Medical Scribe That Works for You</Box>
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
                className="text-white rounded-full px-8 py-6 text-lg shadow-lg"
                style={{ background: crushAIColors.button.gradient }}
              >
                <ArrowRight size={16} className="mr-2" />
                REQUEST A DEMO
              </ShadcnButton>
            </Box>

            {/* Animation Section with Ripple Background */}
            <Box 
              sx={{ 
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: '300px', sm: '350px' },
                maxWidth: { xs: '320px', sm: '400px' },
                mx: 'auto',
                position: 'relative'
              }}
            >
              {/* Ripple effect background */}
              <div className={rippleStyles.rippleBackground}>
                <div className={`${rippleStyles.ripple} bg-[#046f90]/30`}></div>
                <div className={`${rippleStyles.ripple} bg-[#046f90]/20`}></div>
                <div className={`${rippleStyles.ripple} bg-[#046f90]/10`}></div>
              </div>
              
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
                  zIndex: 1
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
                  <Box 
                    component="span" 
                    sx={{ 
                      color: crushAIColors.text.primary, 
                      display: 'flex', 
                      alignItems: 'center',
                      flexWrap: 'wrap' 
                    }}
                  >
                    <CrushTooltip data={tooltipData} />
                    <Box component="span">:</Box>
                    <Box component="span" sx={{ ml: 1 }}>The AI Medical Scribe That Works for You</Box>
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
                  className="text-white rounded-full px-8 py-6 text-lg shadow-lg"
                  style={{ background: crushAIColors.button.gradient }}
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
                maxHeight: '80vh',
                position: 'relative'
              }}
            >
              {/* Ripple effect background */}
              <div className={rippleStyles.rippleBackground}>
                <div className={`${rippleStyles.ripple} bg-[#046f90]/30`}></div>
                <div className={`${rippleStyles.ripple} bg-[#046f90]/20`}></div>
                <div className={`${rippleStyles.ripple} bg-[#046f90]/10`}></div>
              </div>
              
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
                  maxWidth: '550px',
                  zIndex: 1
                }}
              >
                <AnimatedWorkflow />
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </GradientSection>
  );
};
