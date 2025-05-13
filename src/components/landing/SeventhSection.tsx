
import React from "react";
import { Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FeatureCards } from "./specialty-section/FeatureCards";
import { SpecialtiesCarousel } from "./specialty-section/SpecialtiesCarousel";
import { motion } from "framer-motion";
import { landingPageStyles } from "@/styles/landing-page-utils";

export const SeventhSection = () => {
  const theme = useTheme();
  const laptopVw = useMediaQuery('(min-width:900px) and (max-width:1010px)');
  const tabletVw = useMediaQuery('(min-width:600px) and (max-width:700px)');

  return(
    <motion.section 
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Stack
        spacing={4}
        direction={{ xs: "column", md: 'row'}}
        sx={{
          background: '#FFFFFF',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'space-between',
          borderRadius: landingPageStyles.card.borderRadius,
          p: { xs: 3, sm: 4, md: 6 },
          gap: { xs: 6, md: 8 },
          maxWidth: '1280px',
          mx: 'auto',
          boxShadow: landingPageStyles.card.boxShadow,
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            fontWeight: landingPageStyles.typography.h2.fontWeight,
            fontSize: landingPageStyles.typography.h2.fontSize,
            lineHeight: landingPageStyles.typography.h2.lineHeight,
            letterSpacing: landingPageStyles.typography.h2.letterSpacing,
            marginBottom: 0,
          },
          '& p': {
            fontWeight: landingPageStyles.typography.body1.fontWeight,
            fontSize: landingPageStyles.typography.body1.fontSize,
            lineHeight: landingPageStyles.typography.body1.lineHeight,
            letterSpacing: landingPageStyles.typography.body1.letterSpacing,
            marginBottom: 0,
          }
        }}
        useFlexGap
      >
        <FeatureCards />
      </Stack>
      
      {/* Specialties Carousel with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <SpecialtiesCarousel />
      </motion.div>
    </motion.section>
  );
};

export default SeventhSection;
