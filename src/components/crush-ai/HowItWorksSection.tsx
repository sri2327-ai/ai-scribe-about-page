
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Users, MessageCircle, FileCheck } from "lucide-react";
import { Button as ShadcnButton } from "@/components/ui/button";

export const HowItWorksSection = () => {
  const steps = [
    {
      step: "1️⃣ Select a Patient",
      details: ["Launch CRUSH on any device and instantly access patient data."],
      icon: <Users size={48} className="text-tealBlueBright" />
    },
    {
      step: "2️⃣ Start Speaking",
      details: [
        "Speak naturally in any supported language, and Our ambient AI-powered ASR seamlessly records, transcribes, and analyzes conversations in real-time for accuracy and transcription accuracy.",
        "AI Context Awareness – Pulls past visit history for highly accurate documentation.",
        "Telemedicine-Ready – Works for in-person, video, chat, or phone consultations."
      ],
      icon: <MessageCircle size={48} className="text-tealBlueBright" />
    },
    {
      step: "3️⃣ Review & Sign Off",
      details: [
        "Instantly generates EHR-ready medical notes with AI-powered insights.",
        "Smart Workflow Automation – Auto-handles prescriptions, referrals, labs, follow-ups.",
        "After-Visit Summaries – Auto-generated in the patient's preferred language.",
        "AI-Powered Coding – Supports ICD-10, CPT, HCC, and E/M coding for precision billing."
      ],
      icon: <FileCheck size={48} className="text-tealBlueBright" />
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: '#fafafa',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ mb: 8, textAlign: 'center' }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              mb: 3,
              color: '#000000',
              letterSpacing: '-0.02em'
            }}
          >
            How CRUSH Works – AI Charting in 3 Simple Steps
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {steps.map((step, index) => (
            <Grid item xs={12} key={index}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 4,
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  p: 3,
                  borderRadius: 2,
                  boxShadow: index === 1 ? 3 : 0,
                  bgcolor: index === 1 ? '#f0f7fa' : 'transparent'
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: { xs: '100%', sm: 100 },
                    flexShrink: 0
                  }}
                >
                  {step.icon}
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 'bold',
                      mt: 2,
                      color: '#000000'
                    }}
                  >
                    {step.step.split(' ')[0]}
                  </Typography>
                </Box>
                <Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2,
                      fontWeight: 'medium',
                      color: '#000000'
                    }}
                  >
                    {step.step.split(' ').slice(1).join(' ')}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {step.details.map((detail, i) => (
                      <Box 
                        component="li" 
                        key={i}
                        sx={{
                          mb: 1.5,
                          color: '#403E43'
                        }}
                      >
                        <Typography variant="body1">
                          {detail}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ 
            mt: 8, 
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4,
              fontWeight: 700,
              color: '#000000',
              letterSpacing: '-0.02em'
            }}
          >
            AI-Generated Notes in Under 1 Minute – No More Manual Charting!
          </Typography>
          <ShadcnButton 
            size="lg" 
            className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-lg"
          >
            REQUEST A DEMO
            <ArrowRight size={16} className="ml-2" />
          </ShadcnButton>
        </Box>
      </Container>
    </Box>
  );
};
