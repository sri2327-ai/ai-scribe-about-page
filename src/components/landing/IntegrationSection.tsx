
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Card, CardContent, Grid, useTheme } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import { landingPageStyles } from '@/styles/landing-page-utils';
import LandingButton from './LandingButton';

// Integration partners data
const integrationPartners = [
  { name: "Epic", logo: "/HeaderLogo.png" },
  { name: "Cerner", logo: "/HeaderLogo.png" },
  { name: "Athenahealth", logo: "/HeaderLogo.png" },
  { name: "Allscripts", logo: "/HeaderLogo.png" },
  { name: "NextGen", logo: "/HeaderLogo.png" },
  { name: "eClinicalWorks", logo: "/HeaderLogo.png" }
];

const IntegrationCard = ({ name, logo }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: landingPageStyles.card.hoverShadow }}
    transition={{ duration: 0.3 }}
  >
    <Card 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 140,
        borderRadius: landingPageStyles.card.borderRadius,
        boxShadow: landingPageStyles.card.boxShadow,
        p: 2,
        backgroundColor: 'white',
        transition: 'all 0.3s ease',
      }}
    >
      <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <img 
          src={logo} 
          alt={`${name} logo`} 
          style={{ height: '40px', objectFit: 'contain' }}
          loading="lazy"
        />
        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontWeight: 500,
            fontSize: '1rem',
            color: landingPageStyles.colors.primary
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const IntegrationSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <motion.section 
      className="py-16 md:py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Box className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Typography 
            variant="h2" 
            component="h2"
            sx={{
              fontWeight: landingPageStyles.typography.h2.fontWeight,
              fontSize: landingPageStyles.typography.h2.fontSize,
              lineHeight: landingPageStyles.typography.h2.lineHeight,
              color: landingPageStyles.colors.primary,
              mb: 2
            }}
          >
            Seamless Integration with Your Existing Systems
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              fontWeight: landingPageStyles.typography.body1.fontWeight,
              fontSize: landingPageStyles.typography.body1.fontSize,
              lineHeight: landingPageStyles.typography.body1.lineHeight,
              color: landingPageStyles.colors.gray[600],
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            S10.AI works with all major healthcare systems and tools, ensuring smooth implementation and workflow continuity.
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center">
          {integrationPartners.map((partner, index) => (
            <Grid key={index} xs={6} sm={4} md={4} lg={2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <IntegrationCard name={partner.name} logo={partner.logo} />
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <LandingButton 
            variant="primary" 
            size="medium" 
            ariaLabel="Check integration compatibility"
          >
            Check Compatibility
          </LandingButton>
        </Box>
      </Box>
    </motion.section>
  );
};

export default IntegrationSection;
