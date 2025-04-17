
import React from 'react';
import { motion } from "framer-motion";
import { Container, Box, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Bell, 
  Workflow, 
  ShieldCheck, 
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { bravoColors } from '@/theme/bravo-theme';
import { Spotlight } from "@/components/ui/spotlight";

const BravoAbbreviation = [
  {
    letter: "B",
    title: "Booking & Scheduling",
    description: "Smart appointments & follow-ups",
    icon: Calendar,
  },
  {
    letter: "R",
    title: "Reminders & Notifications",
    description: "Reduce no-shows with automated alerts",
    icon: Bell,
  },
  {
    letter: "A",
    title: "Automated Triage",
    description: "Prioritize urgent cases instantly",
    icon: Workflow,
  },
  {
    letter: "V",
    title: "Verification & Identity",
    description: "Secure patient & insurance checks",
    icon: ShieldCheck,
  },
  {
    letter: "O",
    title: "Onboarding & Pre-Visit",
    description: "Streamlined intake & clinical summaries",
    icon: ClipboardCheck,
  },
];

export const BravoHeroSection = () => {
  return (
    <Box 
      component="section" 
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'black',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 16, md: 0 },
      }}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60"
        fill={bravoColors.accent.blue}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ 
          maxWidth: '900px', 
          mx: 'auto',
          px: { xs: 2, md: 4 },
          textAlign: 'center' 
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
                justifyContent: 'center',
                alignItems: 'center',
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
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 700,
                            color: 'white',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                          }}
                        >
                          {item.letter}
                        </Typography>
                      </Box>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-black/80 border border-blue-500/30">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '8px',
                          bgcolor: `${bravoColors.accent.blue}20`,
                        }}
                      >
                        <item.icon size={24} style={{ color: bravoColors.accent.blue }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: 'white', mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
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
                  color: 'white',
                  mb: 3,
                  lineHeight: 1.4,
                }}
              >
                The AI Agent That Revolutionizes Patient Care
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: 'rgba(255,255,255,0.7)',
                  mb: 4,
                  maxWidth: '700px',
                  mx: 'auto',
                }}
              >
                Automate Scheduling, Cut No-Shows, and Elevate Patient Experience!
              </Typography>

              <Button 
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
