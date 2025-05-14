
import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { shadowStyles } from "@/lib/shadow-utils";

export const TrustedBySection = () => {
  // Sample data for avatars
  const clinicians = [
    { initials: "JD", image: null },
    { initials: "SP", image: null },
    { initials: "MR", image: null },
    { initials: "AK", image: null },
    { initials: "VL", image: null },
    { initials: "TS", image: null },
    { initials: "CB", image: null },
    { initials: "RH", image: null },
  ];

  // Refs for scroll animations
  const sectionRef = useRef(null);
  
  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Transform scroll progress to different values for various animations
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [30, 0]);

  return (
    <Box 
      component="section" 
      ref={sectionRef}
      sx={{ 
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      {/* Glass backdrop effect */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255,255,255,0.4)',
          backdropFilter: 'blur(5px)',
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <Box
            component={motion.div}
            style={{ scale, opacity, y }}
            sx={{ 
              mb: 5,
              p: 4,
              background: 'rgba(255,255,255,0.7)',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)',
              boxShadow: shadowStyles.card,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: shadowStyles.prominent,
                transform: 'translateY(-5px)'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: '50%',
                  border: `2px solid ${crushAIColors.primaryFlat}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  background: 'rgba(255,255,255,0.8)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                }}
              >
                <Users size={28} className={`text-[${crushAIColors.primaryFlat}]`} />
              </Box>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700,
                  color: crushAIColors.text.primary, 
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  textShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}
              >
                1000+
              </Typography>
            </Box>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 600,
                color: crushAIColors.text.primary,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                mb: 2
              }}
            >
              Trusted by Clinicians Worldwide
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                color: crushAIColors.text.secondary,
                fontSize: '1rem', 
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400
              }}
            >
              Join thousands of healthcare professionals who have increased their efficiency and improved patient care with CRUSH.
            </Typography>
          </Box>
          
          <Box 
            component={motion.div}
            style={{ 
              scale: useTransform(scrollYProgress, [0.1, 0.6], [0.9, 1.05]),
              opacity: useTransform(scrollYProgress, [0.1, 0.5], [0.7, 1]),
              y: useTransform(scrollYProgress, [0.1, 0.5], [20, 0])
            }}
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                mb: 3
              }}
            >
              {clinicians.map((clinician, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <Avatar 
                    className={`border-2 border-white h-14 w-14 transition-all shadow-lg hover:shadow-xl`}
                    style={{ boxShadow: shadowStyles.testimonial }}
                  >
                    {clinician.image ? (
                      <AvatarImage src={clinician.image} alt={`Clinician ${index + 1}`} />
                    ) : (
                      <AvatarFallback 
                        className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 font-medium text-lg"
                      >
                        {clinician.initials}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </motion.div>
              ))}
            </Box>
            <Box 
              sx={{ 
                width: '100%',
                pt: 2,
                borderTop: '1px solid rgba(0,0,0,0.1)',
                display: 'flex',
                justifyContent: 'center',
                mt: 2,
                px: 3,
                py: 2,
                backgroundColor: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(5px)',
                borderRadius: '1rem',
                boxShadow: shadowStyles.subtle
              }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  color: crushAIColors.text.secondary, 
                  fontSize: '0.875rem', 
                  fontWeight: 400,
                  fontStyle: 'italic'
                }}
              >
                + Thousands more clinicians making better use of their time
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      
      {/* Background decorative elements */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '100%',
          opacity: 0.05,
          background: 'url(/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
          zIndex: 0
        }} 
      />
    </Box>
  );
};
