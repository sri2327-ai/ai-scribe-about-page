
import React from "react";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Clock, DollarSign, Heart, Activity } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const BenefitsSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const benefits = [
    {
      title: "Save 2+ Hours Daily",
      description: "Eliminate documentation time with real-time AI note generation.",
      icon: <Clock size={32} color={crushAIColors.primary} />,
    },
    {
      title: "Increase Revenue",
      description: "Better coding and more patient visits means higher practice revenue.",
      icon: <DollarSign size={32} color={crushAIColors.primary} />,
    },
    {
      title: "Reduce Burnout",
      description: "Focus on patients instead of paperwork and regain work-life balance.",
      icon: <Heart size={32} color={crushAIColors.primary} />,
    },
    {
      title: "Improve Quality",
      description: "Comprehensive, accurate documentation for better patient care.",
      icon: <Activity size={32} color={crushAIColors.primary} />,
    }
  ];

  const testimonial = {
    quote: "CRUSH has completely transformed how I practice medicine. I've gained back at least 2 hours each day, and my notes are more thorough than ever. It's like having a medical assistant, scribe, and coding expert all in one.",
    author: "Dr. Sarah Johnson",
    position: "Family Medicine, Boston Medical Center"
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: crushAIColors.background.white
      }}
    >
      <Container maxWidth="lg">
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ 
            textAlign: 'center',
            mb: 6
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.75rem', md: '2.75rem' },
              fontWeight: 800,
              mb: 2,
              color: crushAIColors.text.primary
            }}
          >
            Benefits That Transform Practice
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 400,
              color: crushAIColors.text.secondary,
              mb: 5,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            CRUSH isn't just a documentation tool - it's a complete practice transformation
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 4,
            mb: 8
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box 
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Box 
                  sx={{ 
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    backgroundColor: `${crushAIColors.primary}10`
                  }}
                >
                  {benefit.icon}
                </Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontWeight: 700,
                    mb: 1.5,
                    color: crushAIColors.text.primary
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: crushAIColors.text.secondary,
                    fontSize: '0.9rem'
                  }}
                >
                  {benefit.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ 
            p: { xs: 4, md: 6 },
            backgroundColor: `${crushAIColors.tertiary}20`,
            borderRadius: 4,
            position: 'relative',
            maxWidth: 900,
            mx: 'auto'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontStyle: 'italic',
              color: crushAIColors.text.primary,
              position: 'relative',
              mb: 3,
              textAlign: 'center'
            }}
          >
            "{testimonial.quote}"
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 700,
                color: crushAIColors.text.primary
              }}
            >
              {testimonial.author}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                fontSize: { xs: '0.8rem', md: '0.9rem' },
                color: crushAIColors.text.secondary
              }}
            >
              {testimonial.position}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
