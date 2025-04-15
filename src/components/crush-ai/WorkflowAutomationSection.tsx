
import React from "react";
import { Box, Container, Typography, Grid as MuiGrid } from "@mui/material";
import { motion } from "framer-motion";
import { Microscope, MoveRight, Stethoscope, LayoutDashboard, Clipboard, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export const WorkflowAutomationSection = () => {
  const features = [
    {
      icon: <Microscope size={24} className="text-blue-600" />,
      title: "Clinical Documentation",
      description: "Automatically generates SOAP notes, visit summaries, consultation letters, progress notes and more from your patient conversations."
    },
    {
      icon: <Stethoscope size={24} className="text-blue-600" />,
      title: "Smart Referrals",
      description: "Create referral letters with all necessary patient details prefilled, ready for your approval."
    },
    {
      icon: <LayoutDashboard size={24} className="text-blue-600" />,
      title: "EHR Integration",
      description: "Seamlessly pushes all documentation to your existing EHR system in your preferred format and fields."
    },
    {
      icon: <Clipboard size={24} className="text-blue-600" />,
      title: "Patient Instructions",
      description: "Generates personalized after-visit care instructions and educational materials for patients."
    },
    {
      icon: <Clock size={24} className="text-blue-600" />,
      title: "Time Savings",
      description: "Reduces documentation time by up to 80%, giving you more time for patient care."
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: "#ffffff" 
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              mb: 2
            }}
          >
            Talk to Patients, Not Screens – CRUSH Handles the Rest
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              color: "#666666",
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Focus on meaningful patient interactions while CRUSH automates your clinical documentation
          </Typography>
        </Box>

        <BeforeAfterSlider />
        
        <Box sx={{ mt: 10 }}>
          <Typography 
            variant="h4" 
            component="h3"
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              mb: 4,
              textAlign: "center"
            }}
          >
            More Than Just A Scribe
          </Typography>
          
          <MuiGrid container spacing={3}>
            {features.map((feature, index) => (
              <MuiGrid item key={index} xs={12} md={4}>
                <Card 
                  className="hover:shadow-lg transition-shadow duration-300 h-full"
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardContent className="p-6">
                    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Box sx={{ mr: 2 }}>{feature.icon}</Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: "#666666", flex: 1 }}>
                        {feature.description}
                      </Typography>
                      <Box 
                        component={motion.div}
                        whileHover={{ x: 5 }}
                        sx={{ 
                          display: "flex", 
                          alignItems: "center", 
                          color: "primary.main", 
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          mt: 2,
                          cursor: "pointer"
                        }}
                      >
                        Learn more <MoveRight size={16} className="ml-1" />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </MuiGrid>
            ))}
          </MuiGrid>
        </Box>
      </Container>
    </Box>
  );
};
