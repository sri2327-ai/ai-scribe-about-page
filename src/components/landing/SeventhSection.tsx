
import React from "react";
import { Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FeatureCards } from "./specialty-section/FeatureCards";
import { SpecialtiesCarousel } from "./specialty-section/SpecialtiesCarousel";

export const SeventhSection = () => {
  const theme = useTheme();
  const laptopVw = useMediaQuery('(min-width:900px) and (max-width:1010px)');
  const tabletVw = useMediaQuery('(min-width:600px) and (max-width:700px)');

  return(
    <section className="py-16 px-4">
      <Stack
        spacing={4}
        direction={{ xs: "column", md: 'row'}}
        sx={{
          background: '#FFFFFF',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'space-between',
          borderRadius: 4,
          p: { xs: 4, sm: 5, md: 6 },
          gap: { xs: 6, md: 8 },
          maxWidth: '1280px',
          mx: 'auto',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            fontWeight: 500,
            letterSpacing: '-0.025em',
            marginBottom: 0,
          },
          '& p': {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5rem',
            letterSpacing: '-0.03em',
            marginBottom: 0,
          }
        }}
        useFlexGap
      >
        <FeatureCards />
      </Stack>
      
      {/* Specialties Carousel */}
      <SpecialtiesCarousel />
    </section>
  );
};

export default SeventhSection;
