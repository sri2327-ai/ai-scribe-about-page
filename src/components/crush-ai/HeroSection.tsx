
import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedWorkflow } from "@/components/crush-ai/AnimatedWorkflow";
import { TiltedScroll } from "@/components/ui/tilted-scroll";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SparklesText } from "@/components/ui/sparkles-text";

export const HeroSection = () => {
  const renderLetterPopover = (letter: string, title: string, description: string) => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Box 
            component="span" 
            sx={{ 
              color: '#000000', 
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
        py: { xs: 8, md: 12 }, 
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 'auto', md: '100vh' }
      }}
    >
      {/* Background Horizontal Scroll */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.05
        }}
      >
        <TiltedScroll />
      </Box>
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, height: '100%' }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'center', 
          gap: 4,
          height: '100%'
        }}>
          <Box 
            sx={{ 
              width: { xs: '100%', md: '50%' },
              order: { xs: 2, md: 1 }
            }}
          >
            <Box 
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                pr: { md: 4 }
              }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '1.7rem', md: '2.3rem' }, 
                  fontWeight: 800,
                  mb: 2,
                  color: '#143151', // Updated to brand navy color
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                <Box component="span" sx={{ color: '#143151' }}> {/* Updated to brand navy color */}
                  <SparklesText 
                    text="C.R.U.S.H"
                    className="text-3xl md:text-4xl font-bold inline-block"
                    colors={{ first: "#387E89", second: "#5192AE" }} // Updated to brand teal and turquoise
                    sparklesCount={15}
                  />
                  : The AI Medical Scribe That Works for You
                </Box>
              </Typography>

              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  color: 'rgba(20, 49, 81, 0.8)', // Updated to semi-transparent navy
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
                className="bg-navy hover:bg-navy/90 text-white rounded-full px-8 py-6 text-lg shadow-lg"
              >
                <ArrowRight size={16} className="mr-2" />
                REQUEST A DEMO
              </ShadcnButton>
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              width: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxHeight: { xs: '500px', md: '80vh' },
              px: { xs: 2, md: 0 }
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
      </Container>
    </Box>
  );
};
