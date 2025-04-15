
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Clock, PieChart, Stethoscope, DollarSign, Heart } from "lucide-react";

export const TestimonialsBenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock size={28} className="text-blue-600" />,
      title: "Save Time",
      description: "Reduce documentation time by up to 70%, giving you more time for patients and your life."
    },
    {
      icon: <PieChart size={28} className="text-blue-600" />,
      title: "Increase Revenue",
      description: "See more patients and optimize coding for better reimbursement."
    },
    {
      icon: <Stethoscope size={28} className="text-blue-600" />,
      title: "Improve Care",
      description: "Focus more on patients, less on paperwork. Enhance clinical decision-making."
    },
    {
      icon: <DollarSign size={28} className="text-blue-600" />,
      title: "Reduce Costs",
      description: "Lower transcription costs and eliminate the need for traditional scribes."
    },
    {
      icon: <Heart size={28} className="text-blue-600" />,
      title: "Prevent Burnout",
      description: "Reduce administrative burden that contributes to physician burnout."
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: '#F8FAFC'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
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
            The Benefits of CRUSH AI
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
            See why healthcare professionals nationwide are switching to CRUSH AI for their documentation needs.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                sx={{ 
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: 'white',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  border: '1px solid #e0e0e0',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Box sx={{ mb: 2, color: 'primary.main' }}>
                  {benefit.icon}
                </Box>
                <Typography variant="h6" sx={{ color: '#000000', mb: 1, fontWeight: 600 }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666666' }}>
                  {benefit.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          sx={{ 
            mt: 6,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-semibold transition-colors duration-300 flex items-center">
              See All Benefits
              <ArrowRight size={16} className="ml-2" />
            </button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
