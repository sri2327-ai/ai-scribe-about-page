import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";

export const TestimonialsBenefitsSection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Spotlight
        className="absolute inset-0"
        fill="rgba(0, 0, 0, 0.03)"
      />
      
      <Container maxWidth="lg">
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ mb: 8, textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              mb: 3,
              color: '#000000',
              letterSpacing: '-0.02em'
            }}
          >
            Talk to Patients, Not Screens – CRUSH Handles the Rest
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 900,
              mx: 'auto',
              color: '#403E43',
              fontSize: '1.1rem'
            }}
          >
            Clinicians love CRUSH because it restores patient focus, reduces admin workload, and increases revenue.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {[
            {
              title: "Restore Focus",
              description: "No more typing, maintain eye contact, and reduce cognitive overload."
            },
            {
              title: "Save Time",
              description: "Auto-generates accurate notes in seconds, cutting charting time to less than 1.6 minutes, making it time-saving."
            },
            {
              title: "Cut Burnout & Boost Revenue",
              description: "No more pajama time—Instant chart closure and streamlined billing, optimized RAF scoring for higher reimbursements, and eased administrative burdens."
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: 'white',
                  boxShadow: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 'medium',
                    color: '#000000'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: '#403E43',
                    flex: 1
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ 
            mt: 8, 
            textAlign: 'center',
            p: 5,
            borderRadius: 2,
            bgcolor: '#fafafa',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            maxWidth: 900,
            mx: 'auto',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              color: '#403E43',
              fontStyle: 'italic'
            }}
          >
            Boost organization-wide productivity and ensure secure data with SOC 2, HITECH, and HIPAA compliance.
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4,
              fontWeight: 700,
              color: '#000000',
              letterSpacing: '-0.02em'
            }}
          >
            Automate Documentation. Improve Patient Care. Reduce Burnout.
          </Typography>
          <ShadcnButton 
            size="lg" 
            className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg shadow-lg"
          >
            REQUEST A DEMO
            <ArrowRight size={16} className="ml-2" />
          </ShadcnButton>
        </Box>
      </Container>
    </Box>
  );
};
