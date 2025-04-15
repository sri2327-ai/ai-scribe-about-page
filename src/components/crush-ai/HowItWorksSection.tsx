
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Mic, BrainCircuit, ClipboardCheck } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Mic size={32} className="text-blue-600" />,
      title: "You Speak Naturally",
      description: "Simply talk to your patient as you normally would. CRUSH actively listens in the background.",
    },
    {
      icon: <BrainCircuit size={32} className="text-blue-600" />,
      title: "CRUSH Processes",
      description: "Our AI analyzes your conversation in real-time, extracting clinical information and patient data.",
    },
    {
      icon: <ClipboardCheck size={32} className="text-blue-600" />,
      title: "Documentation Generated",
      description: "Complete clinical notes are created and formatted to your specifications, ready for your review.",
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 8 },
        bgcolor: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              color: '#000000',
              mb: 2
            }}
          >
            How CRUSH Works
          </Typography>
          <Typography 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="body1" 
            sx={{ 
              color: '#666666',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Our powerful AI assistant simplifies your workflow by handling the documentation so you can focus on patient care.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4} 
          sx={{ mt: 2 }}
        >
          {steps.map((step, index) => (
            <Grid key={index} xs={12} sm={4} sx={{ display: 'flex' }}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  position: 'relative'
                }}
              >
                <Box 
                  sx={{ 
                    mb: 2,
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'rgba(30, 174, 219, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {step.icon}
                </Box>

                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600,
                    mb: 2,
                    color: '#000000'
                  }}
                >
                  {step.title}
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666666'
                  }}
                >
                  {step.description}
                </Typography>

                {index < steps.length - 1 && (
                  <Box 
                    sx={{ 
                      position: { xs: 'static', sm: 'absolute' },
                      right: { sm: '-25px' },
                      top: { sm: '30%' },
                      transform: { xs: 'rotate(90deg)', sm: 'rotate(0deg)' },
                      display: { xs: 'none', sm: 'block' },
                      zIndex: 1
                    }}
                  >
                    <Typography sx={{ fontWeight: 'bold', fontSize: '24px', color: '#CCCCCC' }}>→</Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          sx={{ 
            mt: 6,
            p: 4,
            bgcolor: '#f8f9fa',
            borderRadius: 2,
            border: '1px solid #e0e0e0',
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000', mb: 2 }}>
            Ready to see CRUSH in action?
          </Typography>
          <Typography variant="body1" sx={{ color: '#666666', mb: 3 }}>
            Book a demonstration to see how CRUSH can transform your clinical workflow.
          </Typography>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button 
              className="bg-black hover:bg-black/90 text-white rounded-full px-6 py-3 font-semibold transition-colors duration-300"
            >
              Request a Demo
            </button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
