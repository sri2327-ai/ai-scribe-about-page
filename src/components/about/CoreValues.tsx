
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
        py: 10, 
        bgcolor: 'black'
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
            mb: '4rem'
          }}
        >
          <Typography 
            variant="h3"
            sx={{
              fontSize: '2.25rem',
              fontWeight: 'normal',
              mb: 3,
              color: 'white'
            }}
          >
            Our Core Values
          </Typography>
        </Box>
        
        <Grid container spacing={0} sx={{ 
          '& .MuiGrid-item': {
            borderRight: { 
              xs: 'none', 
              md: '1px solid rgba(31, 41, 55, 1)' 
            },
            borderBottom: { 
              xs: '1px solid rgba(31, 41, 55, 1)', 
              md: 'none' 
            },
            '&:last-child': {
              borderRight: 'none'
            }
          }
        }}>
          {coreValues.map((value, index) => (
            <Grid item xs={12} md={4} lg={12/5} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                sx={{
                  position: 'relative',
                  padding: '2rem 1rem'
                }}
              >
                <Box sx={{ position: 'relative', height: '100%' }}>
                  <Box 
                    sx={{ 
                      position: 'relative', 
                      zIndex: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <Box 
                      sx={{ 
                        bgcolor: 'rgba(0, 0, 0, 0.8)',
                        p: 1.5,
                        borderRadius: '50%',
                        mb: 3,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography 
                      variant="h5"
                      sx={{ 
                        fontSize: '1.25rem',
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
                        fontWeight: 'normal'
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreValues;
