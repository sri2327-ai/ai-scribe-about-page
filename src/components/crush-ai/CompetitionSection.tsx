
import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

export const CompetitionSection = () => {
  const features = [
    { name: "AI-Powered Clinical Documentation", crush: true, others: false },
    { name: "Real-Time Speech-to-Text", crush: true, others: true },
    { name: "Active Listening & Context Awareness", crush: true, others: false },
    { name: "Automatic Coding Suggestions", crush: true, others: false },
    { name: "Comprehensive EHR Integration", crush: true, others: false },
    { name: "Custom Physician-Specific Templates", crush: true, others: false },
    { name: "Multi-Language Support", crush: true, others: false },
    { name: "AI-Powered Workflow Automation", crush: true, others: false },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#f5f7f9' }}>
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
            Why CRUSH Crushes the Competition
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
            CRUSH AI offers unmatched capabilities that traditional medical scribes and other AI solutions simply can't match.
          </Typography>
        </Box>

        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              bgcolor: '#f0f4f8',
              p: 2,
              borderBottom: '1px solid #e0e0e0'
            }}
          >
            <Typography sx={{ flex: 2, fontWeight: 600, color: '#555' }}>Features</Typography>
            <Typography sx={{ flex: 1, fontWeight: 600, color: '#000', textAlign: 'center' }}>CRUSH AI</Typography>
            <Typography sx={{ flex: 1, fontWeight: 600, color: '#777', textAlign: 'center' }}>Others</Typography>
          </Box>

          {features.map((feature, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex', 
                p: 2,
                borderBottom: index < features.length - 1 ? '1px solid #e0e0e0' : 'none',
                bgcolor: index % 2 === 0 ? 'white' : '#f9f9f9'
              }}
            >
              <Typography sx={{ flex: 2, color: '#333' }}>{feature.name}</Typography>
              <Box sx={{ flex: 1, textAlign: 'center' }}>
                {feature.crush ? (
                  <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                ) : (
                  <CloseIcon sx={{ color: '#F44336' }} />
                )}
              </Box>
              <Box sx={{ flex: 1, textAlign: 'center' }}>
                {feature.others ? (
                  <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                ) : (
                  <CloseIcon sx={{ color: '#F44336' }} />
                )}
              </Box>
            </Box>
          ))}
        </Box>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          {/* Success stories */}
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * item }}
                sx={{ 
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: 'white',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  border: '1px solid #e0e0e0'
                }}
              >
                <Typography variant="h6" sx={{ color: '#000000', mb: 1, fontWeight: 600 }}>
                  {item === 1 ? "Increased Efficiency" : item === 2 ? "Enhanced Accuracy" : "Better Patient Care"}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666666' }}>
                  {item === 1 
                    ? "Physicians report saving 2+ hours per day on documentation tasks."
                    : item === 2 
                    ? "90% reduction in documentation errors compared to manual entry."
                    : "Spend more time with patients instead of paperwork."
                  }
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
