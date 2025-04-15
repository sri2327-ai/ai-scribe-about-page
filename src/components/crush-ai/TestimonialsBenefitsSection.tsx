
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Clock, DollarSign, Heart, Shield } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="h-6 w-6 text-blue-500" />,
    title: "Save 2+ Hours Daily",
    description: "Eliminate documentation time with real-time AI note generation."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-green-500" />,
    title: "Increase Revenue",
    description: "Better coding and more patient visits means higher practice revenue."
  },
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: "Reduce Burnout",
    description: "Focus on patients instead of paperwork and regain work-life balance."
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-500" />,
    title: "Improve Quality",
    description: "Comprehensive, accurate documentation for better patient care."
  }
];

export const TestimonialsBenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#ffffff"
      }}
    >
      <Container maxWidth="lg">
        {/* Benefits Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ 
            mb: 10, 
            textAlign: "center" 
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 800,
              mb: 3,
              color: "#000000"
            }}
          >
            Benefits That Transform Practice
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#403E43",
              fontWeight: 400,
              mb: 6
            }}
          >
            CRUSH isn't just a documentation tool - it's a complete practice transformation
          </Typography>

          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center'
            }}
          >
            {benefits.map((benefit, index) => (
              <Box
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                sx={{ 
                  width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 16px)' },
                  p: 4,
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    p: 2, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(0, 0, 0, 0.04)',
                    mb: 2
                  }}
                >
                  {benefit.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', textAlign: 'center' }}>
                  {benefit.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Testimonials Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center" }}
        >
          <Box
            sx={{
              p: 5,
              borderRadius: 4,
              bgcolor: "#f5f9ff",
              maxWidth: 900,
              mx: "auto",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "5px",
                background: "linear-gradient(to right, #1EAEDB, #8B5CF6)"
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 800,
                color: "#1EAEDB",
                mb: 3
              }}
            >
              "
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                mb: 4,
                fontStyle: "italic",
                color: "#333"
              }}
            >
              CRUSH has completely transformed how I practice medicine. I've gained back at least 2 hours each day, and my notes are more thorough than ever. It's like having a medical assistant, scribe, and coding expert all in one.
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Dr. Sarah Johnson
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Family Medicine, Boston Medical Center
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
