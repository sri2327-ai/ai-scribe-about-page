import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

export const EleventhSection = () => {
  return (
    <section 
      id="call-to-action"
      className="min-h-screen py-16 w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #143151, #387E89, #F06292)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Stack
          spacing={4}
          direction={{ xs: "column", md: "row" }}
          sx={{
            maxWidth: '1200px',
            width: '100%',
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 3, md: 4 },
            mx: 'auto',
            gap: { xs: 3, md: 6 }
          }}
        >
          <Box sx={{ maxWidth: { xs: '100%', md: '60%' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="h3" 
              sx={{ 
                color: 'white',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                lineHeight: 1.2,
                mb: 2,
                fontWeight: 700
              }}
            >
              Elevate Patient Care with S10.AI
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
                fontWeight: 400
              }}
            >
              Join healthcare providers nationwide who are transforming their practice with AI-driven solutions that reduce administrative burden, minimize burnout, and improve patient outcomes.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: { xs: 'center', md: 'flex-start' } }}>
            <Button 
              variant="contained" 
              aria-label="Book a demo of S10.AI"
              sx={{ 
                bgcolor: 'white',
                color: '#143151',
                px: { xs: 3, md: 4 },
                py: { xs: 1.25, md: 1.5 },
                borderRadius: "50px",
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                "&:hover": {
                  bgcolor: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                }
              }}
              startIcon={<CalendarCheck className="h-5 w-5" />}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 600
                }}
              >
                Book A Demo
              </Typography>
            </Button>
            
            <Button 
              variant="outlined" 
              aria-label="Learn more about S10.AI"
              sx={{ 
                borderColor: 'rgba(255, 255, 255, 0.7)',
                color: 'white',
                px: { xs: 3, md: 4 },
                py: { xs: 1.25, md: 1.5 },
                borderRadius: "50px",
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
              startIcon={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: '1.5px solid white',
                  }}
                >
                  <ArrowRight className="h-3 w-3" />
                </Box>
              }
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 600
                }}
              >
                Learn More
              </Typography>
            </Button>
          </Box>
        </Stack>
      </motion.div>
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-16" />
      
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(40px)',
          transform: 'translateY(-50%)',
          opacity: 0.5,
          display: { xs: 'none', md: 'block' }
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.15)',
          filter: 'blur(30px)',
          opacity: 0.5,
          display: { xs: 'none', md: 'block' }
        }}
      />
    </section>
  );
};

export default EleventhSection;
