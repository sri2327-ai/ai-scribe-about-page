
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const TrustedBySection = () => {
  // Sample data for avatars
  const clinicians = [
    { initials: "JD", image: null },
    { initials: "SP", image: null },
    { initials: "MR", image: null },
    { initials: "AK", image: null },
    { initials: "VL", image: null },
    { initials: "TS", image: null },
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 4, md: 6 },
        bgcolor: '#f9f9f9'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 2 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: { xs: 'center', md: 'flex-end' },
              textAlign: { xs: 'center', md: 'right' },
              width: { xs: '100%', md: '33%' }
            }}
          >
            <Box 
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              sx={{ 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-end' }
              }}
            >
              <Users size={36} className="text-blue-600 mr-3" />
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: '#000000',
                  fontSize: { xs: '1.5rem', md: '1.75rem' }
                }}
              >
                1000+
              </Typography>
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              width: { xs: '100%', md: '67%' }
            }}
          >
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  color: '#333333',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Trusted by Clinicians Nationwide
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: '#666666', 
                  fontSize: '0.95rem', 
                  mt: 1,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Join thousands of healthcare professionals who have increased their efficiency and improved patient care with CRUSH.
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 2, 
                  mt: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                {clinicians.map((clinician, index) => (
                  <Avatar key={index} className="border border-gray-200 h-12 w-12">
                    {clinician.image ? (
                      <AvatarImage src={clinician.image} alt={`Clinician ${index + 1}`} />
                    ) : (
                      <AvatarFallback className="bg-gray-100 text-gray-600 font-medium">
                        {clinician.initials}
                      </AvatarFallback>
                    )}
                  </Avatar>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
