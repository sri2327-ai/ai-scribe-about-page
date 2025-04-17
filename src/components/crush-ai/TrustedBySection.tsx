
import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { crushAIColors } from "@/theme/crush-ai-theme";

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
        background: 'linear-gradient(to right, #e6e9f0 0%, #eef1f5 100%)', // Light blue gradient similar to testimonial section
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
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
            sx={{ mb: 5 }}
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
                  mr: 2
                }}
              >
                <Users size={28} className={`text-[${crushAIColors.primaryFlat}]`} />
              </Box>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700,
                  color: crushAIColors.text.primary, 
                  fontSize: { xs: '2rem', md: '2.5rem' }
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
                mx: 'auto'
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
                >
                  <Avatar className="border border-gray-200 h-12 w-12 transition-all hover:scale-110">
                    {clinician.image ? (
                      <AvatarImage src={clinician.image} alt={`Clinician ${index + 1}`} />
                    ) : (
                      <AvatarFallback className="bg-gray-100 text-[#046f90] font-medium">
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
                borderTop: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Typography variant="body2" sx={{ color: crushAIColors.text.secondary, fontSize: '0.875rem' }}>
                + Thousands more clinicians making better use of their time
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
