
import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { AnimatedWorkflow } from "@/components/crush-ai/AnimatedWorkflow";
import { TiltedScroll } from "@/components/ui/tilted-scroll";
import { CheckCircle } from "lucide-react";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const HeroSection = () => {
  // Auto-trigger the first tooltip to show users they can hover
  const [showTooltipHint, setShowTooltipHint] = useState(false);
  
  useEffect(() => {
    // Show the tooltip hint after the page loads
    const timer = setTimeout(() => {
      setShowTooltipHint(true);
    }, 1500);
    
    const hideTimer = setTimeout(() => {
      setShowTooltipHint(false);
    }, 4000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const renderLetterPopover = (letter: string, title: string, description: string, isFirst: boolean = false) => {
    return (
      <Popover open={isFirst && showTooltipHint ? true : undefined}>
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
            {isFirst && (
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: '-18px',
                  right: '-14px',
                  fontSize: '12px',
                  animation: showTooltipHint ? 'pulse 2s infinite' : 'none',
                  '@keyframes pulse': {
                    '0%': { opacity: 0.5, transform: 'scale(0.95)' },
                    '50%': { opacity: 1, transform: 'scale(1.05)' },
                    '100%': { opacity: 0.5, transform: 'scale(0.95)' },
                  }
                }}
              >
                <Info size={16} />
              </Box>
            )}
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
                  color: '#000000',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                <Box component="span" sx={{ color: '#000000' }}>
                  {renderLetterPopover('C', 'Customizable', 'Tailor the AI scribe to your specialty and workflow needs', true)}
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
              <Sparkles 
                className="absolute inset-0 pointer-events-none" 
                size={1.5}
                color="#000000"
                opacity={0.3}
                background="transparent"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
