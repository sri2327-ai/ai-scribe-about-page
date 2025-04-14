
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Zap, Rocket, Layers, Users, Shield } from "lucide-react";

const coreValues = [
  {
    icon: <Layers size={28} color="white" />,
    title: "Informed Decisions",
    description: "AI-driven insights for better healthcare and patient outcomes."
  },
  {
    icon: <Rocket size={28} color="white" />,
    title: "Passion for Innovation",
    description: "We push boundaries to transform medicine and clinical practices."
  },
  {
    icon: <Zap size={28} color="white" />,
    title: "Respect for People",
    description: "Prioritizing the well-being of clinicians and patients at every step."
  },
  {
    icon: <Users size={28} color="white" />,
    title: "Reliability & Responsiveness",
    description: "Always evolving, always available, consistently dependable."
  },
  {
    icon: <Shield size={28} color="white" />,
    title: "Community Well-Being",
    description: "AI that improves lives, not just systems and processes."
  }
];

const CoreValues = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 10 }, 
        bgcolor: 'black',
        width: '100%'
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 8 }
          }}
        >
          <Typography 
            variant="h3"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 'normal',
              mb: 3,
              color: 'white'
            }}
          >
            Our Core Values
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          width: '100%'
        }}>
          {coreValues.map((value, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              sx={{
                textAlign: 'center',
                p: { xs: 2, md: 3 },
                width: { xs: '100%', md: '20%' },
                position: 'relative',
                borderRight: index < coreValues.length - 1 ? { xs: 'none', md: '1px solid rgba(80, 80, 80, 0.4)' } : 'none',
                borderBottom: { xs: index < coreValues.length - 1 ? '1px solid rgba(80, 80, 80, 0.4)' : 'none', md: 'none' },
                py: { xs: 4, md: 2 }
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3
                }}
              >
                {value.icon}
              </Box>
              <Typography 
                variant="h5"
                sx={{ 
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  fontWeight: 'normal',
                  mb: 2,
                  color: 'white'
                }}
              >
                {value.title}
              </Typography>
              <Typography 
                sx={{ 
                  color: 'rgba(156, 163, 175, 1)',
                  lineHeight: 1.7,
                  fontWeight: 'normal',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                {value.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoreValues;
