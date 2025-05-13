
import React from 'react';
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  
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
  const cardWidth = isMobile ? 300 : 320;
  const cardHeight = 220;

  return (
    <Box 
      sx={{ 
        width: '100%', 
        background: 'linear-gradient(135deg, #143151, #387E89)',
        padding: { xs: '32px 20px', sm: '40px 24px', md: '48px 32px' },
        borderRadius: { xs: 2, md: 3 },
        color: 'white',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 10px 25px rgba(20, 49, 81, 0.15)'
      }}
    >
      {/* Background sparkle element */}
      <Box sx={{ 
        position: 'absolute', 
        top: 20, 
        right: 20, 
        opacity: 0.12
      }}>
        <Sparkles size={80} />
      </Box>
      
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
              fontWeight: 800,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              lineHeight: 1.2,
              mb: 2,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '40px',
                height: '3px',
                background: 'rgba(255,255,255,0.5)',
                bottom: '-12px',
                left: 0
              }
            }}
          >
            AI Solutions Designed for Every Medical Specialty
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              mt: 4,
              mb: 3
            }}
          >
            Our specialized AI adapts to the unique requirements of each medical field, enhancing diagnostic accuracy and clinical efficiency.
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
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-2px)'
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
                component={motion.div}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 12px 28px 0 rgba(56,126,137,0.18)',
                  transition: { duration: 0.2 }
                }}
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
                  p: { xs: 3, sm: 3.5 },
                  transition: 'all 0.3s',
                  overflow: "hidden",
                  position: 'relative',
                  "&::after": {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #143151, #387E89)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                  },
                  "&:hover::after": {
                    transform: 'scaleX(1)',
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#143151',
                    fontSize: { xs: '1.15rem', sm: '1.2rem', md: '1.35rem' },
                    fontWeight: 700,
                    mb: 2
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#27425B',
                    opacity: 0.85,
                    fontSize: { xs: '0.97rem', sm: '1rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
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
