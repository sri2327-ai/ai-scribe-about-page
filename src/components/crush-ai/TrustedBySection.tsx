
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const TrustedBySection = () => {
  // Array of avatar initials for healthcare professionals
  const avatarInitials = ["MD", "DO", "RN", "PA", "NP"];
  
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 4, md: 5 },
        bgcolor: '#f9f9f9'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 1
          }}
        >
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: 50,
              bgcolor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              maxWidth: 'fit-content'
            }}
          >
            <Box sx={{ display: 'flex', mr: 2 }}>
              {avatarInitials.map((initial, index) => (
                <Avatar 
                  key={index} 
                  className={`border-2 border-white ${index > 0 ? '-ml-3' : ''}`}
                  style={{ zIndex: 5 - index }}
                >
                  <AvatarFallback>{initial}</AvatarFallback>
                </Avatar>
              ))}
            </Box>
            
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                color: '#333333',
                fontSize: { xs: '1rem', md: '1.1rem' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Trusted by <span style={{ fontWeight: 700, color: '#000', marginLeft: '4px', marginRight: '4px' }}>1000+</span> Clinicians
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
