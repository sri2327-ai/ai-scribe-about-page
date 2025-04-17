
import React from 'react';
import { motion } from "framer-motion";
import { Container, Box, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { bravoColors } from '@/theme/bravo-theme';
import { BravoWorkflowAnimation } from './animations/BravoWorkflowAnimation';
import { BravoAbbreviation } from './constants/BravoAbbreviation';

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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ 
          maxWidth: '900px',
          px: { xs: 2, md: 4 },
          textAlign: 'left'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'flex-start' },
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: { xs: 1, md: 2 },
                mb: 3,
              }}
            >
              {BravoAbbreviation.map((item, index) => (
                <HoverCard key={item.letter}>
                  <HoverCardTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
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
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-white border border-gray-200">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '8px',
                          bgcolor: `${bravoColors.accent.blue}10`,
                        }}
                      >
                        <item.icon size={24} style={{ color: bravoColors.accent.blue }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: 'black', mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0,0,0,0.7)' }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </Box>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: 'black',
                  mb: 3,
                  lineHeight: 1.4,
                  maxWidth: '700px',
                }}
              >
                The AI Agent That Revolutionizes Patient Care
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: 'rgba(0,0,0,0.7)',
                  mb: 4,
                  maxWidth: '600px',
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

            <BravoWorkflowAnimation />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
