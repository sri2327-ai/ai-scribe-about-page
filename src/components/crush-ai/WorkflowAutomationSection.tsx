
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { BrainCircuit, ClipboardCheck, ArrowRight } from "lucide-react";

export const WorkflowAutomationSection = () => {
  const features = [
    {
      icon: <BrainCircuit className="text-blue-600" size={24} />,
      title: "AI-Powered Workflow Automation",
      description: "Streamline repetitive tasks and save time with smart automation."
    },
    {
      icon: <ClipboardCheck className="text-blue-600" size={24} />,
      title: "Complete Clinical Documentation",
      description: "Effortlessly generate comprehensive patient notes and reports."
    }
  ];

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
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
            More Than Just a Scribe
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
            CRUSH AI goes beyond simple documentation to help you manage your entire clinical workflow.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {features.map((feature, index) => (
            <Grid xs={12} md={6} key={index}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                sx={{ 
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: '#f8f9fa',
                  border: '1px solid #e0e0e0'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box 
                    sx={{ 
                      mr: 2,
                      p: 1.5,
                      borderRadius: '50%',
                      bgcolor: 'rgba(0,0,0,0.05)',
                      display: 'flex'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ color: '#000000', fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: '#666666' }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ 
            bgcolor: '#f0f4f8',
            borderRadius: 3,
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}
        >
          <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            <Grid xs={12} md={6}>
              <Box 
                sx={{ 
                  p: { xs: 4, md: 6 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%'
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#000000',
                    mb: 2
                  }}
                >
                  Ready to transform your clinical workflow?
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666666',
                    mb: 4
                  }}
                >
                  Join thousands of healthcare professionals who are saving time and improving patient care with CRUSH AI.
                </Typography>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-semibold transition-colors duration-300 flex items-center max-w-fit">
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </motion.div>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box 
                sx={{ 
                  bgcolor: '#e6ecf4',
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box 
                  component="img"
                  src="/lovable-uploads/8f4a5ae2-aa8a-426f-8eff-90fdba4055a1.png"
                  alt="CRUSH AI workflow"
                  sx={{ 
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
