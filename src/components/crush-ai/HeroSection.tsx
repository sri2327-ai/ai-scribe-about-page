import React, { useState, useEffect } from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { AnimatedWorkflow } from "@/components/crush-ai/AnimatedWorkflow";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SparklesText } from "@/components/ui/sparkles-text";
import { crushAIColors } from "@/theme/crush-ai-theme";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { GradientSection } from "@/components/ui/gradient-section";
import rippleStyles from "@/styles/RippleEffect.module.css";
import { CrushTooltip } from "@/components/crush-ai/CrushTooltip";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

export const HeroSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));

  const tooltipData = [
    { letter: 'C', content: 'Customisable' },
    { letter: 'R', content: 'Real-Time EHR Sync' },
    { letter: 'U', content: 'Universal Coding' },
    { letter: 'S', content: 'Smart AI Assistance' },
    { letter: 'H', content: 'Healthcare Automation' }
  ];

  const complianceIcons = [
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act Compliant",
      icon: Shield
    },
    {
      name: "PIPEDA",
      description: "Personal Information Protection and Electronic Documents Act Compliant",
      icon: Shield
    },
    {
      name: "ISO 27001",
      description: "International Organization for Standardization Security Certified",
      icon: Shield
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation Compliant",
      icon: Shield
    },
    {
      name: "APP",
      description: "Australian Privacy Principles Compliant",
      icon: Shield
    }
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

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2,
            mt: 4,
            flexWrap: 'wrap'
          }}
        >
          {complianceIcons.map((item, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Box
                  component="button"
                  sx={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <item.icon size={20} color="black" strokeWidth={1.5} />
                </Box>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-64 bg-gradient-to-r from-[#143151] to-[#387E89] border border-white/20"
                sx={{
                  color: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'white', mb: 1 }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  {item.description}
                </Typography>
              </HoverCardContent>
            </HoverCard>
          ))}
        </Box>
      </Container>
    </GradientSection>
  );
};
