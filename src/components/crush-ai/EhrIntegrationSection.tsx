
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { DeviceDesktop, Smartphone, Tablet, RotateCw, RefreshCw } from "lucide-react";

export const EhrIntegrationSection = () => {
  const logos = [
    { name: "Epic", logo: "https://www.epic.com/favicon.ico" },
    { name: "Cerner", logo: "https://www.cerner.com/favicon.ico" },
    { name: "Allscripts", logo: "https://www.allscripts.com/favicon.ico" },
    { name: "eClinicalWorks", logo: "https://www.eclinicalworks.com/favicon.ico" },
    { name: "NextGen", logo: "https://www.nextgen.com/favicon.ico" },
    { name: "Athenahealth", logo: "https://www.athenahealth.com/favicon.ico" },
  ];

  const features = [
    {
      icon: <DeviceDesktop size={28} className="text-blue-600" />,
      title: "Works on Any Device",
      description: "Desktop, laptop, tablet, or mobile."
    },
    {
      icon: <RefreshCw size={28} className="text-blue-600" />,
      title: "Instant Sync",
      description: "AI-generated notes go directly into your EHR."
    },
    {
      icon: <RotateCw size={28} className="text-blue-600" />,
      title: "Automated Updates",
      description: "Lab results, prescriptions, and referrals auto-sync."
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 8 },
        bgcolor: '#f5f7f9'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              color: '#000000',
              mb: 2
            }}
          >
            Seamless EHR Integration
          </Typography>
          <Typography 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="body1" 
            sx={{ 
              color: '#666666',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            CRUSH AI connects with all major electronic health record systems, ensuring a smooth workflow.
          </Typography>
        </Box>

        {/* EHR Logos */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 4,
            mb: 6
          }}
        >
          {logos.map((logo, index) => (
            <Box 
              key={index}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                width: '100px',
                height: '100px',
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                border: '1px solid #e0e0e0',
              }}
            >
              <img 
                src={logo.logo} 
                alt={logo.name} 
                style={{ 
                  width: '40px', 
                  height: '40px',
                  objectFit: 'contain',
                  marginBottom: '8px'
                }} 
              />
              <Typography variant="body2" sx={{ fontWeight: 500, color: '#333' }}>
                {logo.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Horizontal scrolling features */}
        <Box 
          sx={{ 
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            py: 2,
            px: 1,
            mb: 3,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {features.map((feature, index) => (
            <Box 
              key={index}
              component={motion.div}
              initial={{ opacity: 0, x: 30 * index }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              sx={{ 
                minWidth: { xs: '280px', md: '320px' },
                p: 3,
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid #e0e0e0',
                flex: 1,
                height: '100%'
              }}
            >
              <Box sx={{ mb: 2, color: 'primary.main' }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000', mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666666' }}>
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
