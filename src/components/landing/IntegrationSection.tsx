
import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Tabs, Tab, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { landingPageStyles } from '@/styles/landing-page-utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Integration Card Component
const IntegrationCard = ({ title, description, imgSrc, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <Box
        sx={{
          height: '100%',
          p: { xs: 3, md: 4 },
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #E5E7EB',
          backgroundColor: 'white',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)'
          }
        }}
      >
        <Box sx={{ mb: 2, height: '60px', display: 'flex', alignItems: 'center' }}>
          <img 
            src={imgSrc} 
            alt={title} 
            style={{ 
              maxHeight: '50px', 
              maxWidth: '100%', 
              objectFit: 'contain' 
            }} 
            loading="lazy"
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 500,
            color: landingPageStyles.colors.primary,
            mb: 1.5
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '1rem',
            lineHeight: 1.5,
            color: landingPageStyles.colors.gray[600],
            flexGrow: 1
          }}
        >
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default function IntegrationSection() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const integrations = [
    {
      title: "Epic Integration",
      description: "Seamlessly connect with Epic EHR for complete clinical workflow automation and documentation.",
      imgSrc: "/aws.png",
    },
    {
      title: "Cerner Integration",
      description: "Synchronize patient data and clinical documentation with Cerner systems in real-time.",
      imgSrc: "/aws.png",
    },
    {
      title: "Calendar Apps",
      description: "Integrate with Google Calendar, Outlook, and other scheduling tools for appointment management.",
      imgSrc: "/aws.png",
    },
    {
      title: "Patient Portals",
      description: "Connect with patient portals for streamlined engagement and communication.",
      imgSrc: "/aws.png",
    },
  ];

  const integrationsByCategory = [
    {
      category: "EHR Systems",
      items: integrations.slice(0, 2)
    },
    {
      category: "Practice Management",
      items: integrations.slice(2, 4)
    },
    {
      category: "Communication",
      items: integrations.slice(0, 2)
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F5F9FF" }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            textAlign: "center", 
            mb: { xs: 5, md: 8 }
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600,
              lineHeight: 1.2,
              color: landingPageStyles.colors.primary,
              mb: 2,
              letterSpacing: '-0.025em'
            }}
          >
            Seamless Integrations
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              lineHeight: 1.6,
              color: landingPageStyles.colors.gray[600],
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Connect S10.AI with your existing tools and platforms. Our solution integrates 
            with over 7,000 applications to enhance your clinical workflow.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            sx={{
              '& .MuiTabs-flexContainer': {
                justifyContent: 'center',
              },
              '& .MuiTab-root': {
                fontSize: '1rem',
                fontWeight: 500,
                px: 3,
                py: 1.5
              },
              '& .Mui-selected': {
                color: landingPageStyles.colors.secondary
              },
              '& .MuiTabs-indicator': {
                backgroundColor: landingPageStyles.colors.secondary
              }
            }}
          >
            {integrationsByCategory.map((cat, idx) => (
              <Tab key={idx} label={cat.category} />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {integrationsByCategory[activeTab].items.map((integration, index) => (
            <Grid xs={12} sm={6} md={6} lg={3} key={index} item>
              <IntegrationCard 
                title={integration.title}
                description={integration.description}
                imgSrc={integration.imgSrc}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="default" className="bg-[#143151] hover:bg-[#0f243d] text-white">
            Explore All Integrations
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
