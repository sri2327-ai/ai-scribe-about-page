import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FeatureCards } from "./specialty-section/FeatureCards";
import { SpecialtiesCarousel } from "./specialty-section/SpecialtiesCarousel";
import { motion } from "framer-motion";
export const SeventhSection = () => {
  const theme = useTheme();
  const laptopVw = useMediaQuery('(min-width:900px) and (max-width:1010px)');
  const tabletVw = useMediaQuery('(min-width:600px) and (max-width:700px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  return <section className="py-24 px-4 overflow-hidden bg-gradient-to-b from-white via-white to-gray-50">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.7
    }} viewport={{
      once: true,
      margin: "-100px"
    }} className="max-w-5xl mx-auto mb-16 text-center">
        
        
      </motion.div>

      <Box sx={{
      maxWidth: '1280px',
      mx: 'auto'
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }} viewport={{
        once: true,
        margin: "-100px"
      }}>
          <Stack spacing={4} direction={{
          xs: "column",
          md: 'row'
        }} sx={{
          background: '#FFFFFF',
          alignItems: {
            xs: 'center',
            md: 'flex-start'
          },
          justifyContent: 'space-between',
          borderRadius: {
            xs: 3,
            md: 4
          },
          p: {
            xs: 3,
            sm: 5,
            md: 6
          },
          gap: {
            xs: 6,
            md: 8
          },
          maxWidth: '1280px',
          mx: 'auto',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0,0,0,0.05)'
        }} useFlexGap>
            <FeatureCards />
          </Stack>
        </motion.div>
        
        {/* Specialties Carousel */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.4
      }} viewport={{
        once: true,
        margin: "-100px"
      }} className="mt-16">
          <SpecialtiesCarousel />
        </motion.div>
      </Box>
    </section>;
};
export default SeventhSection;