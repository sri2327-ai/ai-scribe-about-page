import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

export const HeroSection = () => {
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
                  <TooltipProvider>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Box 
                          component="span" 
                          sx={{ 
                            color: '#000000', 
                            fontWeight: 900,
                            position: 'relative',
                            cursor: 'pointer',
                            '&:hover': {
                              textDecoration: 'underline',
                              textDecorationThickness: '2px',
                              textUnderlineOffset: '4px'
                            }
                          }}
                        >
                          <strong>C</strong>
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 border-2 border-black" sideOffset={5}>
                        <Box sx={{ p: 2, bgcolor: '#000', color: '#fff' }}>
                          <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
                            Customizable
                          </Typography>
                          <Typography sx={{ fontSize: '0.8rem', mt: 1 }}>
                            Tailor the AI scribe to your specialty and workflow needs
                          </Typography>
                        </Box>
                      </PopoverContent>
                    </Popover>
                  </TooltipProvider>
                  .
                  <TooltipProvider>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Box 
                          component="span" 
                          sx={{ 
                            color: '#000000', 
                            fontWeight: 900,
                            position: 'relative',
                            cursor: 'pointer',
                            '&:hover': {
                              textDecoration: 'underline',
                              textDecorationThickness: '2px',
                              textUnderlineOffset: '4px'
                            }
                          }}
                        >
                          <strong>R</strong>
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 border-2 border-black" sideOffset={5}>
                        <Box sx={{ p: 2, bgcolor: '#000', color: '#fff' }}>
                          <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
                            Real-time EHR Integration
                          </Typography>
                          <Typography sx={{ fontSize: '0.8rem', mt: 1 }}>
                            Seamlessly connects with your existing electronic health record system
                          </Typography>
                        </Box>
                      </PopoverContent>
                    </Popover>
                  </TooltipProvider>
                  .
                  <TooltipProvider>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Box 
                          component="span" 
                          sx={{ 
                            color: '#000000', 
                            fontWeight: 900,
                            position: 'relative',
                            cursor: 'pointer',
                            '&:hover': {
                              textDecoration: 'underline',
                              textDecorationThickness: '2px',
                              textUnderlineOffset: '4px'
                            }
                          }}
                        >
                          <strong>U</strong>
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 border-2 border-black" sideOffset={5}>
                        <Box sx={{ p: 2, bgcolor: '#000', color: '#fff' }}>
                          <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
                            Universal Coding
                          </Typography>
                          <Typography sx={{ fontSize: '0.8rem', mt: 1 }}>
                            Supports ICD-10, CPT, and HCC coding standards automatically
                          </Typography>
                        </Box>
                      </PopoverContent>
                    </Popover>
                  </TooltipProvider>
                  .
                  <TooltipProvider>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Box 
                          component="span" 
                          sx={{ 
                            color: '#000000', 
                            fontWeight: 900,
                            position: 'relative',
                            cursor: 'pointer',
                            '&:hover': {
                              textDecoration: 'underline',
                              textDecorationThickness: '2px',
                              textUnderlineOffset: '4px'
                            }
                          }}
                        >
                          <strong>S</strong>
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 border-2 border-black" sideOffset={5}>
                        <Box sx={{ p: 2, bgcolor: '#000', color: '#fff' }}>
                          <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
                            Seamless Multilingual Support
                          </Typography>
                          <Typography sx={{ fontSize: '0.8rem', mt: 1 }}>
                            Communicate with patients in their preferred language
                          </Typography>
                        </Box>
                      </PopoverContent>
                    </Popover>
                  </TooltipProvider>
                  .
                  <TooltipProvider>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Box 
                          component="span" 
                          sx={{ 
                            color: '#000000', 
                            fontWeight: 900,
                            position: 'relative',
                            cursor: 'pointer',
                            '&:hover': {
                              textDecoration: 'underline',
                              textDecorationThickness: '2px',
                              textUnderlineOffset: '4px'
                            }
                          }}
                        >
                          <strong>H</strong>
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 border-2 border-black" sideOffset={5}>
                        <Box sx={{ p: 2, bgcolor: '#000', color: '#fff' }}>
                          <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
                            Healthcare Automation
                          </Typography>
                          <Typography sx={{ fontSize: '0.8rem', mt: 1 }}>
                            Streamlines clinical workflows and administrative tasks
                          </Typography>
                        </Box>
                      </PopoverContent>
                    </Popover>
                  </TooltipProvider>
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
