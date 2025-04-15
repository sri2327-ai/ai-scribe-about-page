
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedWorkflow } from "@/components/crush-ai/AnimatedWorkflow";
import Grid from '@mui/material/Grid';

export const HeroSection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 10, md: 14 }, 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ 
                textAlign: 'left',
                pr: { md: 4 }
              }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.8rem' }, 
                  fontWeight: 800,
                  mb: 2,
                  color: '#000000',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                C.R.U.S.H : The AI Medical Scribe That Works for You
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  color: '#403E43',
                  fontSize: { xs: '0.9rem', md: '1rem' },
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                position: 'relative'
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
