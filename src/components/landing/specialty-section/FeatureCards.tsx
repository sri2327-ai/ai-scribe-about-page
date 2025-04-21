
import React from 'react';
import { Box, Typography } from "@mui/material";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";

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

  // Use 2-col on tablet/desktop, 1-col carousel on mobile
  return (
    <ResponsiveCarousel
      items={features}
      columnsDesktop={2}
      columnsTablet={2}
      columnsMobile={1}
      gap={24}
      renderItem={(item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            background: '#FFFFFF',
            border: '1px solid #E0E0E0',
            p: { xs: 3, sm: 3.5 },
            borderRadius: 3,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
            height: '100%',
            justifyContent: 'space-between',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              transform: 'translateY(-4px)'
            }
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#143151',
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
              fontWeight: 700
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#000000',
              opacity: 0.7,
              fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            {item.description}
          </Typography>
        </Box>
      )}
    />
  );
};
