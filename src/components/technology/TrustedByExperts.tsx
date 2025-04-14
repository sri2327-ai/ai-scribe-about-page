
import React from "react";
import { Box, Container, Typography, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";

const companyLogos = [
  {
    id: 1,
    name: "MedCare Health",
    letter: "M"
  },
  {
    id: 2,
    name: "HealthTech",
    letter: "H"
  },
  {
    id: 3,
    name: "Cascade Medical",
    letter: "C"
  },
  {
    id: 4,
    name: "Novant Health",
    letter: "N"
  },
  {
    id: 5,
    name: "Cedar Clinic",
    letter: "C"
  },
];

const TrustedByExperts = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: 12,
        overflow: 'hidden',
        bgcolor: 'black'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #121212, black)',
          opacity: 0.9
        }}
      />
      
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: 'relative',
          zIndex: 20
        }}
      >
        <Container>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            sx={{
              textAlign: 'center',
              mb: 8
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.875rem', md: '3rem' },
                fontWeight: 'normal',
                mb: 2,
                color: 'white'
              }}
            >
              <Box component="span" sx={{ color: 'rgba(209, 213, 219, 1)' }}>
                Trusted by experts.
              </Box>
              <br />
              <Box component="span">
                Used by the leaders.
              </Box>
            </Typography>
          </Box>
          
          <Box sx={{ position: 'relative', mx: 'auto', maxWidth: '64rem' }}>
            <Grid container spacing={4} sx={{ mt: 7, position: 'relative', zIndex: 20 }}>
              {companyLogos.map((logo) => (
                <Grid item xs={6} md={2.4} key={logo.id}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: logo.id * 0.1 }}
                    viewport={{ once: true }}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: 'black',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                    >
                      {logo.letter}
                    </Avatar>
                    <Typography sx={{ mt: 1, fontSize: '0.875rem', color: 'rgba(209, 213, 219, 1)' }}>
                      {logo.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            
            <Box
              sx={{
                position: 'relative',
                mt: -16,
                height: 384,
                width: '100%',
                overflow: 'hidden',
                maskImage: 'radial-gradient(50% 50%, white, transparent)'
              }}
            >
              <Sparkles
                density={1200}
                className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                color="#ffffff"
                background="transparent"
                size={1.2}
                speed={0.5}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TrustedByExperts;
