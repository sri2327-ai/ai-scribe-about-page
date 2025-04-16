
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Monitor, ShieldCheck, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Efficiency",
    description: "Automate clinical documentation, referrals, and prescriptions.",
    icon: <Monitor size={36} className="text-teal" />
  },
  {
    title: "Enhanced Security",
    description: "Ensure HIPAA compliance with secure data handling.",
    icon: <ShieldCheck size={36} className="text-teal" />
  },
  {
    title: "Actionable Insights",
    description: "Gain valuable insights with comprehensive data analytics.",
    icon: <BarChart3 size={36} className="text-teal" />
  }
];

export const FeatureHighlights = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: '#FFFFFF'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ mb: 6, textAlign: 'center' }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              mb: 3,
              color: '#143151', // Updated to brand navy color
              letterSpacing: '-0.02em'
            }}
          >
            Key Features
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: 800,
              mx: 'auto',
              color: 'rgba(20, 49, 81, 0.8)', // Updated to semi-transparent navy
              fontWeight: 400
            }}
          >
            Explore the core features that make CRUSH the ultimate AI medical scribe.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', md: `calc(33.333% - ${4 * 8/3}px)` }
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <Box 
                      sx={{ 
                        mb: 3,
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'rgba(56, 126, 137, 0.1)', // Updated to semi-transparent teal
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 1.5,
                        fontWeight: 600,
                        color: '#143151', // Updated to brand navy color
                        fontSize: '1.25rem'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{ color: 'rgba(20, 49, 81, 0.8)', fontSize: '0.95rem' }} // Updated to semi-transparent navy
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
