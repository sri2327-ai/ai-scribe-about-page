
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
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)'
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

