
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Mic, FileText, Upload, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <Mic className="h-6 w-6 text-blue-500" />,
    title: "Voice Input",
    description: "Simply speak during your patient encounter. CRUSH listens and captures every detail."
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    title: "Smart Documentation",
    description: "AI processes speech in real-time, creating structured clinical notes with proper medical terminology."
  },
  {
    icon: <Upload className="h-6 w-6 text-blue-500" />,
    title: "EHR Integration",
    description: "Notes are automatically formatted and uploaded to your EHR system with a single click."
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-blue-500" />,
    title: "Review & Finalize",
    description: "Quickly review AI-generated notes, make any tweaks, and finalize with confidence."
  }
];

export const HowItWorksSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#ffffff"
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ mb: 6, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 800,
              mb: 3,
              color: "#000000"
            }}
          >
            How CRUSH Works
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#403E43",
              fontWeight: 400
            }}
          >
            Experience the simplicity and power of CRUSH in your clinical workflow
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center'
          }}
        >
          {steps.map((step, index) => (
            <Box 
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 16px)' },
                p: 3,
                borderRadius: 2,
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
              }}
            >
              {index < steps.length - 1 && (
                <Box 
                  sx={{ 
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    top: '30%',
                    right: '-8%',
                    width: '15%',
                    height: '2px',
                    bgcolor: 'rgba(0, 0, 0, 0.1)',
                    zIndex: 0
                  }}
                />
              )}
              
              <Box 
                sx={{ 
                  bgcolor: 'rgba(30, 174, 219, 0.1)', 
                  borderRadius: '50%',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2
                }}
              >
                {step.icon}
              </Box>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 1 
                }}
              >
                {step.title}
              </Typography>
              
              <Typography 
                variant="body2"
                sx={{ 
                  color: '#666' 
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
