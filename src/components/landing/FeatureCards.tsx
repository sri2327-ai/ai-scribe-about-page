
import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCards = () => {
  const features: FeatureCardProps[] = [
    {
      title: "Specialty-Specific AI Models",
      description: "Custom-trained for each medical specialty, from cardiology to pediatrics."
    },
    {
      title: "Real-Time Documentation",
      description: "Captures complex medical terms and clinical details across specialties, including real-time EKG, triage, dermatology documentation, and more."
    },
    {
      title: "Automated Clinical Workflows",
      description: "Streamlines referrals, prescriptions, and follow-ups."
    },
    {
      title: "Smart Patient Engagement",
      description: "Reduces no-shows and improves adherence to care plans."
    }
  ];

  // Optimized card size to prevent overflow
  const cardWidth = 300;
  const cardHeight = 200;

  return (
    <Box 
      sx={{ 
        width: '100%', 
        background: 'linear-gradient(135deg, #143151, #387E89)',
        padding: { xs: '32px 16px', sm: '40px 24px', md: '48px 32px' },
        borderRadius: 2,
        color: 'white',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Box sx={{ 
        maxWidth: '1400px', 
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 6 },
        alignItems: { xs: 'flex-start', md: 'center' },
        mb: { xs: 4, md: 0 }
      }}>
        <Box sx={{ 
          width: { xs: '100%', md: '30%' }, 
          mb: { xs: 2, md: 0 }
        }}>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 500,
              fontSize: '2.5rem',
              lineHeight: '3rem',
              letterSpacing: '-0.025em',
              marginBottom: '1rem'
            }}
          >
            AI Solutions Designed for Every Medical Specialty
          </Typography>
          
          <Button
            endIcon={<ArrowRight className="h-5 w-5" />}
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              border: '2px solid white',
              borderRadius: '50px',
              padding: { xs: '8px 16px', sm: '10px 24px' },
              textTransform: 'none',
              mt: { xs: 2, md: 4 },
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            View More
          </Button>
        </Box>
        
        <Box sx={{ 
          width: { xs: '100%', md: '70%' },
          '& .embla': {
            overflow: 'visible' 
          }
        }}>
          <ResponsiveCarousel
            items={features}
            columnsDesktop={2}
            columnsTablet={1}
            columnsMobile={1}
            gap={24}
            showControls={true}
            controlsBelow={true}
            itemWidth={cardWidth}
            itemHeight={cardHeight}
            cardClassName="flex flex-col h-full justify-between"
            renderItem={(item, index) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  background: '#FFF',
                  border: '1px solid #E0E0E0',
                  borderRadius: 3,
                  boxShadow: '0 4px 12px 0px rgba(20, 49, 81, 0.06)',
                  height: cardHeight,
                  width: cardWidth,
                  p: { xs: 2.8, sm: 3.2 },
                  transition: 'all 0.18s',
                  overflow: "hidden",
                  "&:hover": {
                    boxShadow: '0 8px 24px 0 rgba(56,126,137,0.13)',
                    borderColor: '#387E89'
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#143151',
                    fontWeight: 500,
                    fontSize: '1.25rem',
                    lineHeight: '1.75rem',
                    letterSpacing: '-0.025em',
                    marginBottom: '0.75rem'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#27425B',
                    opacity: 0.85,
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};
