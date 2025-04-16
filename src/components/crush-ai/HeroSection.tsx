
import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { AnimatedWorkflow } from "@/components/crush-ai/AnimatedWorkflow";
import { TiltedScroll } from "@/components/ui/tilted-scroll";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import VoiceWaves from "@/components/ui/voice-waves";
import { ChemicalBurnEffect } from "@/components/ui/chemical-burn-effect";

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
      {/* Chemical Burn Effect with more prominent colors */}
      <ChemicalBurnEffect 
        colors={['#1EAEDB', '#D946EF']} // Bright teal and vibrant pink
        intensity={0.5} // Increased intensity
        className="opacity-30" // More visible
      />
      
      {/* Voice Waves Animation Background Effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <VoiceWaves 
          colors={["#0FA0CE", "#A63B70"]} // Darker teal blue and pink
          opacity={0.3}
        />
      </div>
      
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
                  color: '#000000',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                <Box component="span" sx={{ color: '#000000' }}>
                  {renderLetterPopover('C', 'Customizable', 'Tailor the AI scribe to your specialty and workflow needs')}
                  .
                  {renderLetterPopover('R', 'Real-time EHR Integration', 'Seamlessly connects with your existing electronic health record system')}
                  .
                  {renderLetterPopover('U', 'Universal Coding', 'Supports ICD-10, CPT, and HCC coding standards automatically')}
                  .
                  {renderLetterPopover('S', 'Seamless Multilingual Support', 'Communicate with patients in their preferred language')}
                  .
                  {renderLetterPopover('H', 'Healthcare Automation', 'Streamlines clinical workflows and administrative tasks')}
                </Box> : The AI Medical Scribe That Works for You
              </Typography>

              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  color: '#403E43',
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
                REQUEST A DEMO
                <ArrowRight size={16} className="ml-2" />
              </ShadcnButton>

              <Box 
                sx={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '100px', 
                  mt: 4, 
                  overflow: 'hidden' 
                }}
              >
                <VoiceWaves 
                  colors={["#333333", "#221F26"]} // Even darker colors for the bottom section
                  opacity={0.2}
                  className="absolute bottom-0 left-0 right-0"
                />
              </Box>
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
      
      {/* Bottom Voice Waves */}
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          height: '100px', 
          mt: 4, 
          overflow: 'hidden' 
        }}
      >
        <VoiceWaves 
          colors={["#0FA0CE", "#A63B70"]} // Darker teal blue and pink
          opacity={0.2}
          className="absolute bottom-0 left-0 right-0"
        />
      </Box>
    </Box>
  );
};
