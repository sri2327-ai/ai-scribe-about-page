
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { crushAIColors } from '@/theme/crush-ai-theme';
import { StepByStepWorkflow } from './medical-illustrations/StepByStepWorkflow';

export const HowItWorksSection = () => {
  return (
    <Box 
      id="how-it-works"
      sx={{ 
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            mb: 6, 
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: crushAIColors.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            How CRUSH Works
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              color: crushAIColors.text.secondary,
              fontSize: { xs: '1rem', md: '1.125rem' },
              mb: 4,
            }}
          >
            CRUSH uses advanced AI to streamline your clinical workflow. Simply speak your patient notes, 
            and watch as CRUSH transforms them into structured documentation.
          </Typography>
        </Box>
        
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box 
            sx={{ 
              flex: 1,
              order: { xs: 2, md: 1 },
              maxWidth: { md: '50%' },
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 600, 
                mb: 3,
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                color: crushAIColors.text.primary,
                letterSpacing: '-0.02em', 
              }}
            >
              From Voice to Complete Documentation
            </Typography>
            
            <Box component="ul" sx={{ pl: 4, mb: 4 }}>
              {[
                "Speak naturally during or after patient encounters",
                "AI automatically structures your narrative into compliant documentation",
                "Smart templates apply to your specific specialty needs",
                "Patient instructions generated automatically based on your notes",
                "Seamlessly integrates with your existing EHR system",
                "Securely pushes completed notes with a single click"
              ].map((item, i) => (
                <Box 
                  key={i} 
                  component="li" 
                  sx={{ 
                    mb: 2, 
                    color: crushAIColors.text.secondary,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: crushAIColors.accent.blue,
                      position: 'absolute',
                      left: '-16px',
                      top: '8px',
                    }
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              flex: 1,
              order: { xs: 1, md: 2 },
              height: { xs: '300px', md: '400px' },
              width: '100%',
              maxWidth: { md: '50%' },
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              bgcolor: '#f8fafc',
            }}
          >
            {/* Replace with our new enhanced workflow illustration */}
            <StepByStepWorkflow />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
