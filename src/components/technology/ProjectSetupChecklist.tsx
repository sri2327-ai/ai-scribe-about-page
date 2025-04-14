
import React from "react";
import { Box, Container, Typography, Card, CardContent, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, UserCheck } from "lucide-react";

const ProjectSetupChecklist = () => {
  // Define the security cards
  const securityCards = [
    {
      icon: Lock,
      title: "Encrypted by Default",
      description: "All data is protected with end-to-end encryption—whether at rest or in transit.",
    },
    {
      icon: FileCheck,
      title: "Built for Compliance",
      description: "Follows HIPAA, GDPR, PIPEDA standards with secure, certified infrastructure.",
    },
    {
      icon: UserCheck,
      title: "Access Control",
      description: "Only you can access your data. Our team sees it only if you ask for help.",
    },
    {
      icon: Shield,
      title: "Privacy-First Processing",
      description: "Personal details are stripped before processing to keep data anonymous.",
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'black',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
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
            mb: 6
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              fontWeight: 'normal',
              mb: 2,
              color: 'white'
            }}
          >
            How S10.AI Keeps Your Data Safe
          </Typography>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '5xl', position: 'relative' }}>
            <Grid container spacing={2}>
              {securityCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Grid xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{
                        height: '100%',
                        transition: 'all 300ms',
                        bgcolor: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '1rem',
                        backdropFilter: 'blur(12px)',
                        overflow: 'hidden',
                        '&:hover': {
                          boxShadow: '0 0 40px rgba(255,255,255,0.05)',
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        }
                      }}
                    >
                      <CardContent sx={{ position: 'relative', height: '100%', p: 3 }}>
                        {/* Background icon (faded) */}
                        <Box 
                          sx={{ 
                            position: 'absolute', 
                            inset: 0, 
                            opacity: 0.05, 
                            pointerEvents: 'none', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center' 
                          }}
                        >
                          <Icon style={{ width: 160, height: 160, color: 'white', strokeWidth: 0.5 }} />
                        </Box>
                        
                        <Box sx={{ position: 'relative', zIndex: 10 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                            <Box 
                              sx={{ 
                                position: 'relative', 
                                display: 'inline-block', 
                                borderRadius: '50%', 
                                bgcolor: 'black', 
                                p: 1.5, 
                                border: '1px solid rgba(255, 255, 255, 0.4)' 
                              }}
                            >
                              <Icon style={{ height: 24, width: 24, color: 'white' }} strokeWidth={1.5} />
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontSize: '1.25rem',
                                fontWeight: 'normal',
                                color: 'white'
                              }}
                            >
                              {card.title}
                            </Typography>
                          </Box>
                          <Box sx={{ mb: 3 }}>
                            <Typography
                              sx={{
                                color: 'gray.300',
                                lineHeight: 1.6
                              }}
                            >
                              {card.description}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectSetupChecklist;
