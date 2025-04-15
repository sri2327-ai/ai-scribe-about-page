
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export const TrustedBySection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 8 },
        bgcolor: '#f9f9f9'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              sx={{ 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-end' }
              }}
            >
              <Users size={36} className="text-blue-600 mr-3" />
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: '#000000',
                  fontSize: { xs: '1.5rem', md: '1.75rem' }
                }}
              >
                1000+
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  color: '#333333',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Trusted by Clinicians Nationwide
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: '#666666', 
                  fontSize: '0.95rem', 
                  mt: 1,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Join thousands of healthcare professionals who have increased their efficiency and improved patient care with CRUSH.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
