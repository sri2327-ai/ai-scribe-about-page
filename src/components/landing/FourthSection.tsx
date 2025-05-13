
import React from 'react';
import { Box, Typography, Grid, Container } from "@mui/material";
import { landingPageStyles } from '@/styles/landing-page-utils';

export const FourthSection = () => {
  const features = [
    {
      title: "Fast Implementation",
      description: "Get up and running quickly with minimal IT overhead. Our platform integrates with your existing systems seamlessly."
    },
    {
      title: "Specialty-Specific AI",
      description: "Tailored to your medical specialty with terminology recognition and workflow patterns specific to your practice area."
    },
    {
      title: "Continuous Learning",
      description: "Our AI continuously improves based on your feedback and preferences, becoming more accurate over time."
    },
    {
      title: "Privacy & Security",
      description: "HIPAA-compliant and SOC 2 certified, with end-to-end encryption and rigorous data protection protocols."
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#FCFDFD" }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            textAlign: "center", 
            mb: { xs: 5, md: 8 }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600,
              lineHeight: 1.2,
              color: landingPageStyles.colors.primary,
              mb: 2,
              letterSpacing: '-0.025em'
            }}
          >
            Features Designed for Healthcare Professionals
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              lineHeight: 1.6,
              color: landingPageStyles.colors.gray[600],
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Our AI-powered platform is built specifically for healthcare providers to streamline 
            documentation, enhance patient communication, and improve clinical workflows.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Box
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: '12px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #E5E7EB',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)'
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: landingPageStyles.colors.primary,
                    mb: 1.5
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    color: landingPageStyles.colors.gray[600]
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
