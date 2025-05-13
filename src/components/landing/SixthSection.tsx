
import React from 'react';
import { Box, Typography, Button, Stack } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { landingPageStyles } from '@/styles/landing-page-utils';

export const SixthSection = () => {
  return(
    <motion.section 
      className="relative py-16 md:py-20 lg:py-24" 
      style={{ 
        minHeight: 'unset', 
        background: `linear-gradient(180deg, #143151, #387E89)` 
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        px: { xs: 2, sm: 3, md: 4 } 
      }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Stack
            spacing={{ xs: 3, md: 4 }}
            direction="column"
            sx={{
              width: '100%',
              maxWidth: { xs: '90%', sm: '500px', md: '600px', lg: '650px' },
              alignItems: "center",
              background: 'white', 
              borderRadius: landingPageStyles.card.borderRadius,
              p: { xs: 3, sm: 4, md: 5 },
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.12)',
            }}
            useFlexGap
          >
            <Typography 
              variant="h2"
              sx={{ 
                textAlign: "center", 
                color: landingPageStyles.colors.primary,
                fontWeight: landingPageStyles.typography.h2.fontWeight,
                fontSize: landingPageStyles.typography.h2.fontSize,
                lineHeight: 1.2,
                letterSpacing: landingPageStyles.typography.h2.letterSpacing,
                maxWidth: '90%',
              }}
            >
              Reduce Administrative Fatigue. Enhance Productivity. Improve Patient Care. 
            </Typography>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                variant="contained" 
                sx={{ 
                  textTransform: "none",
                  background: `linear-gradient(135deg, #143151, #387E89)`,
                  color: 'white',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  borderRadius: "50px",
                  minHeight: '48px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
                  "&:hover": {
                    background: `linear-gradient(135deg, #122a45, #306973)`,
                    transform: 'translateY(-2px)',
                    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                    ".icon-box": {
                      transform: "rotate(-45deg)",
                    },
                  },
                  "&:focus": {
                    boxShadow: '0px 0px 0px 3px rgba(255, 255, 255, 0.5)',
                  },
                }}
                startIcon={
                  <Box
                    className="icon-box"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: { xs: 24, md: 28 },
                      height: { xs: 24, md: 28 },
                      borderRadius: "50%", 
                      color: "white",
                      border: `2px solid white`,
                      transition: "transform 0.3s ease",
                      mr: 1
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Box>
                }
                aria-label="Book a demo"
              >
                <Typography
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                    color: "white",
                    fontWeight: 600
                  }}
                >
                  Book A Demo
                </Typography>
              </Button>
            </motion.div>
          </Stack>
        </motion.div>
      </Box>
    </motion.section>
  );
};

export default SixthSection;
