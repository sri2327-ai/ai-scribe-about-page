
import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  Database, 
  Lock, 
  Users, 
  Globe 
} from "lucide-react";
import StarParticles from "@/components/ui/star-particles";

const securityItems = [
  {
    id: 1,
    name: "HIPAA Compliant",
    description: "Meets US healthcare standards",
    icon: Shield,
  },
  {
    id: 2,
    name: "GDPR Compliant",
    description: "European data protection standards",
    icon: ShieldAlert,
  },
  {
    id: 3,
    name: "PIPEDA Compliant",
    description: "Canadian privacy regulations",
    icon: ShieldCheck,
  },
  {
    id: 4,
    name: "ISO 27001 Certified",
    description: "Information security management",
    icon: Shield,
  },
  {
    id: 5,
    name: "No Data Storage",
    description: "Automatic data erasure",
    icon: Database,
  },
  {
    id: 6,
    name: "Multi-Factor Authentication",
    description: "Secured access protocols",
    icon: Lock,
  },
  {
    id: 7,
    name: "Risk Management",
    description: "Authorized personnel only",
    icon: Users,
  },
  {
    id: 8,
    name: "Hosted in US & Canada",
    description: "Regional regulation compliance",
    icon: Globe,
  },
];

const SecurityCompliance = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Star particles background */}
      <Box 
        sx={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(ellipse at center, #111 0%, #000 100%)', 
          zIndex: 0 
        }}
      />
      <StarParticles starCount={150} />
      
      <Container sx={{ position: 'relative', zIndex: 10 }}>
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
            variant="h2"
            sx={{
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              fontWeight: 'normal',
              mb: 2,
              color: 'white'
            }}
          >
            Uncompromising Security & Compliance
          </Typography>
          <Typography
            sx={{
              color: 'grey.400',
              maxWidth: '3xl',
              mx: 'auto'
            }}
          >
            Our platform is built with security-first architecture, ensuring your medical data 
            is protected by the highest standards in the industry.
          </Typography>
        </Box>
        
        <Box 
          sx={{ 
            maxWidth: '5xl', 
            mx: 'auto'
          }}
        >
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {securityItems.map((item) => (
              <Grid item xs={6} md={3} key={item.id}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.id * 0.1 }}
                  viewport={{ once: true }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Box 
                    sx={{ 
                      width: '100%', 
                      aspectRatio: '1/1', 
                      maxWidth: '80px', 
                      borderRadius: '50%', 
                      bgcolor: 'black', 
                      border: '1px solid', 
                      borderColor: 'rgba(30, 174, 219, 0.3)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      mb: 2 
                    }}
                  >
                    <item.icon size={32} color="white" />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontSize: '1.125rem',
                      fontWeight: 'normal',
                      textAlign: 'center'
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'grey.400',
                      fontSize: '0.875rem',
                      textAlign: 'center',
                      mt: 0.5
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SecurityCompliance;
