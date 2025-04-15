
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { 
  Sliders, Link, BadgeCheck, Brain, Cog 
} from 'lucide-react';

const features = [
  {
    title: "Customizable Documentation",
    description: "Control note content & formatting to match your exact preferences",
    icon: <Sliders size={40} className="text-black" />
  },
  {
    title: "Real-Time EHR Sync",
    description: "Instantly integrates with any EHR system",
    icon: <Link size={40} className="text-black" />
  },
  {
    title: "Universal Coding Support",
    description: "Supports ICD-10, E/M, CPT, HCC for compliance & revenue",
    icon: <BadgeCheck size={40} className="text-black" />
  },
  {
    title: "Smart AI Assistance",
    description: "Context-aware AI for accurate documentation",
    icon: <Brain size={40} className="text-black" />
  },
  {
    title: "Healthcare Automation",
    description: "Handles prescriptions, referrals, labs & more",
    icon: <Cog size={40} className="text-black" />
  }
];

export function FeatureHighlights() {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: '#fafafa',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ mb: 6, textAlign: 'center' }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 'bold',
              mb: 3,
              color: '#000000'
            }}
          >
            Built for Healthcare Professionals
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: 800,
              mx: 'auto',
              color: '#403E43'
            }}
          >
            Powerful features designed to streamline your clinical workflow
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={index < 2 ? 6 : 4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: 'white',
                    height: '100%',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Box 
                    sx={{ 
                      mb: 3,
                      p: 2,
                      borderRadius: '50%',
                      bgcolor: 'rgba(0, 0, 0, 0.03)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 1.5,
                      fontWeight: 600,
                      color: '#000000',
                      fontSize: '1.25rem'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: '#666666',
                      fontSize: '0.95rem'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
