
import React from 'react';
import { motion } from "framer-motion";
import { Container, Box, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { bravoColors } from '@/theme/bravo-theme';
import { BravoWorkflowAnimation } from './animations/BravoWorkflowAnimation';
import { BravoAbbreviation } from './constants/BravoAbbreviation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const BravoHeroSection = () => {
  return (
    <Box 
      component="section" 
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'white',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'flex-start',
        pt: { xs: 16, md: 20 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 8, md: 12 },
          alignItems: { xs: 'flex-start', md: 'center' },
        }}>
          <Box sx={{ 
            flex: '1',
            maxWidth: { xs: '100%', md: '500px' },
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: { xs: 1, md: 2 },
                  mb: 3,
                  position: 'relative',
                }}
              >
                <TooltipProvider>
                  {BravoAbbreviation.map((item, index) => (
                    <motion.div
                      key={item.letter}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger>
                          <Box
                            sx={{
                              position: 'relative',
                              cursor: 'pointer',
                              p: 2,
                              borderRadius: '12px',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                bgcolor: 'rgba(0, 0, 0, 0.03)',
                                transform: 'translateY(-2px)',
                              },
                            }}
                          >
                            <Typography
                              variant="h2"
                              sx={{
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                fontWeight: 700,
                                color: 'black',
                              }}
                            >
                              {item.letter}
                            </Typography>
                          </Box>
                        </TooltipTrigger>
                        <TooltipContent 
                          side="top" 
                          sideOffset={15} 
                          className="w-80 p-0 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden"
                        >
                          <div className="flex items-center gap-4 p-4">
                            <div className={`p-3 rounded-lg bg-blue-50`}>
                              <item.icon size={24} className="text-blue-600" />
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-gray-900 mb-1">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </motion.div>
                  ))}
                </TooltipProvider>
              </Box>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                    fontWeight: 600,
                    color: 'black',
                    mb: 3,
                    lineHeight: 1.4,
                  }}
                >
                  The AI Agent That Revolutionizes Patient Care
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    color: 'rgba(0,0,0,0.7)',
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  Automate Scheduling, Cut No-Shows, and Elevate Patient Experience!
                </Typography>

                <Button 
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </Box>

          {/* Right Column - Animation */}
          <Box sx={{ 
            flex: '1',
            width: '100%',
            maxWidth: { xs: '100%', md: '600px' },
          }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <BravoWorkflowAnimation />
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
