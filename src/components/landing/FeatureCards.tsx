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
    <section aria-labelledby="specialty-ai-solutions-heading">
      {/* SEO-friendly content for search engines */}
      <div className="sr-only">
        <h2 id="specialty-ai-solutions-heading">AI Solutions Designed for Every Medical Specialty</h2>
        <p>Our specialized AI adapts to the unique requirements of each medical field, enhancing diagnostic accuracy and clinical efficiency.</p>
        
        <section>
          <h3>Specialty-Specific AI Models</h3>
          <p>Custom-trained artificial intelligence models designed specifically for individual medical specialties, from cardiology to pediatrics, ensuring accurate terminology recognition and workflow optimization.</p>
        </section>
        
        <section>
          <h3>Real-Time Documentation</h3>
          <p>Advanced AI system that captures complex medical terms and clinical details across all medical specialties, including real-time EKG interpretation, triage documentation, dermatology assessments, and comprehensive clinical note generation.</p>
        </section>
        
        <section>
          <h3>Automated Clinical Workflows</h3>
          <p>Intelligent automation system that streamlines medical referrals, prescription management, and patient follow-up processes, reducing administrative burden and improving care coordination.</p>
        </section>
        
        <section>
          <h3>Smart Patient Engagement</h3>
          <p>AI-powered patient engagement platform that significantly reduces no-show rates and improves patient adherence to care plans through automated reminders and personalized communication.</p>
        </section>
      </div>

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
                fontWeight: 800,
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                lineHeight: 1.2,
                mb: 2
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
                      fontSize: { xs: '1.12rem', sm: '1.18rem', md: '1.26rem' },
                      fontWeight: 700,
                      mb: 1.5
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
                      lineHeight: 1.5,
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
    </section>
  );
};
