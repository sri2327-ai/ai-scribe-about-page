
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

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <ResponsiveCarousel
        items={features}
        columnsDesktop={2}
        columnsTablet={1}
        columnsMobile={1}
        gap={20}
        showControls={true}
        itemWidth={null}
        cardClassName="flex flex-col h-full justify-between"
        renderItem={(item, index) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              background: '#FFF',
              border: '1px solid #E0E0E0',
              borderRadius: 3,
              boxShadow: '0 4px 12px 0px rgba(20, 49, 81, 0.06)',
              height: { xs: 220, md: 200 },
              minHeight: 160,
              p: { xs: 2.3, sm: 3 },
              transition: 'all 0.18s',
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
                mb: 1
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#27425B',
                opacity: 0.85,
                fontSize: { xs: '0.97rem', sm: '1.03rem', md: '1.08rem' },
                fontWeight: 400
              }}
            >
              {item.description}
            </Typography>
          </Box>
        )}
      />
    </Box>
  );
};
