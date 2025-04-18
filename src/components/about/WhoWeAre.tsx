
import React, { useState } from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Building, Globe, Users, Settings, Star, Shield } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { GlowBorderEffect } from "@/components/ui/effects/glow-border-effect";

const features = [
  {
    icon: <Building style={{ height: 24, width: 24, color: "white" }} />,
    title: "Company",
    description: "S10.AI Inc. & S10 Technologies, a major investor in virtual medical scribing, supporting 1,000+ physicians in the U.S."
  },
  {
    icon: <Globe style={{ height: 24, width: 24, color: "white" }} />,
    title: "Operations",
    description: "Offices in the U.S. with three offshore delivery & support centers."
  },
  {
    icon: <Users style={{ height: 24, width: 24, color: "white" }} />,
    title: "People",
    description: "A dedicated team of 500+ professionals transforming healthcare AI."
  },
  {
    icon: <Settings style={{ height: 24, width: 24, color: "white" }} />,
    title: "Product",
    description: "The patented Intelligent Physician Knowledge Orchestrator (IPKO), revolutionizing medical documentation."
  },
  {
    icon: <Star style={{ height: 24, width: 24, color: "white" }} />,
    title: "User Satisfaction",
    description: "Rapid adoption, phenomenal feedback, and growing demand prove its impact."
  },
  {
    icon: <Shield style={{ height: 24, width: 24, color: "white" }} />,
    title: "Certifications",
    description: "ISO 27001, HIPAA & PIPEDA compliance, cybersecurity audits, and penetration testing."
  }
];

// Icon animation variants
const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2, 
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      rotate: {
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      },
      scale: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }
};

// Floating animation for icons
const floatingIconVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -5, 0, 5, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop" as const
    }
  }
};

const WhoWeAre = () => {
  const isMobile = useIsMobile();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        minHeight: isMobile ? 'auto' : { lg: '100vh' },
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'black'
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{
            textAlign: 'center',
            mb: { xs: 4, sm: 5, md: 6 }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 'normal',
              mb: { xs: 2, sm: 3 },
              color: 'white',
              fontFamily: '"Wix Madefor Text", sans-serif'
            }}
          >
            Who We Are
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: { xs: 2, md: 3 } 
        }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{ position: 'relative', height: '100%' }}
            >
              <Paper 
                elevation={0}
                sx={{
                  position: 'relative',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: hoveredIndex === index ? 'rgba(120, 120, 120, 0.6)' : 'rgba(80, 80, 80, 0.4)',
                  bgcolor: 'black',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  height: '100%',
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Glow effect on hover */}
                {hoveredIndex === index && (
                  <GlowBorderEffect 
                    variant="white"
                    glow={true}
                    className="opacity-70"
                  />
                )}
                
                <Box 
                  sx={{ 
                    p: 3, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%',
                    zIndex: 10 
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      animate={hoveredIndex === index ? "hover" : "initial"}
                      custom={index}
                    >
                      <motion.div
                        variants={floatingIconVariants}
                        initial="initial"
                        animate="animate"
                        custom={index}
                      >
                        {React.cloneElement(feature.icon, {
                          style: { 
                            height: 28, 
                            width: 28, 
                            color: hoveredIndex === index ? "#1EAEDB" : "white",
                            transition: "color 0.3s ease"
                          }
                        })}
                      </motion.div>
                    </motion.div>
                  </Box>
                  
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: '1.5rem',
                      fontWeight: 'normal',
                      mb: 1.5, 
                      color: 'white',
                      fontFamily: '"Wix Madefor Text", sans-serif'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  
                  <Typography 
                    sx={{
                      color: 'grey.400',
                      lineHeight: 1.75,
                      fontFamily: '"Wix Madefor Text", sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: 'normal',
                      opacity: hoveredIndex === index ? 1 : 0.7,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
