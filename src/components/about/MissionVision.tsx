
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import { LampSection } from "@/components/ui/lamp";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Spotlight } from "@/components/ui/spotlight";

const MissionVision = () => {
  const isMobile = useIsMobile();
  
  const scrollToNext = () => {
    // Scroll to the next section smoothly
    const currentPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: currentPosition + windowHeight,
      behavior: "smooth"
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Mission Section with Lamp Effect */}
      <LampSection title="Our Mission" color="teal">
        <Box
          component={motion.p}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          sx={{
            typography: {
              fontSize: {
                xs: '1.125rem',
                sm: '1.25rem',
                md: '1.5rem'
              },
              color: 'white',
              fontFamily: '"Wix Madefor Text", sans-serif',
              lineHeight: 1.75,
              maxWidth: '2xl',
              mx: 'auto',
              textAlign: 'center'
            }
          }}
        >
          To make life easy for clinicians by eliminating administrative burdens with intelligent automation.
        </Box>
        
        {/* Scroll down indicator - positioned on left side */}
        <Box
          component={motion.div}
          sx={{
            position: 'absolute',
            left: { xs: '16px', sm: '40px' },
            bottom: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 20
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          onClick={scrollToNext}
        >
          <Typography 
            sx={{ 
              color: 'grey.400', 
              mb: 1, 
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontFamily: '"Wix Madefor Text", sans-serif'
            }}
          >
            Scroll
          </Typography>
          <ChevronDown 
            color="white" 
            height={isMobile ? 20 : 24} 
            width={isMobile ? 20 : 24} 
          />
        </Box>
      </LampSection>
      
      {/* Section Divider */}
      <Box 
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          py: { xs: 4, sm: 6 }
        }}
      >
        <Box 
          sx={{
            width: '66.666667%',
            maxWidth: '4xl',
            height: '1px',
            bgcolor: 'grey.800'
          }}
        />
      </Box>
      
      {/* Vision Section with Canvas Effect */}
      <Box 
        sx={{ 
          position: 'relative', 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          bgcolor: 'black', 
          overflow: 'hidden' 
        }}
      >
        {/* Spotlight Effect - Added teal blue spotlight */}
        <Spotlight
          className="top-20 left-20 md:top-40 md:left-60"
          fill="#1EAEDB"
        />
        
        {/* Canvas Effect Container - with improved visibility */}
        <Box 
          sx={{ 
            position: 'absolute', 
            inset: 0, 
            overflow: 'hidden' 
          }}
        >
          <CanvasEffect id="vision-canvas" className="w-full h-full opacity-30" />
        </Box>
        
        {/* Enhanced teal glow effect background for additional atmosphere */}
        <Box 
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            mx: 'auto',
            opacity: 0.2,
            background: "radial-gradient(ellipse at center, rgba(30,174,219,0.15) 0%, rgba(30,174,219,0) 70%)",
            pointerEvents: "none"
          }}
        />
        
        <Container 
          sx={{ 
            mx: 'auto', 
            px: 4, 
            zIndex: 10, 
            position: 'relative' 
          }}
        >
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              fontSize: {
                xs: '1.875rem',
                sm: '2.25rem',
                md: '3rem',
                lg: '3.75rem'
              },
              fontWeight: 'normal',
              color: 'white',
              mb: { xs: 3, sm: 5 },
              textAlign: 'center',
              fontFamily: '"Wix Madefor Text", sans-serif'
            }}
          >
            Our Vision
          </Typography>
          
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            sx={{
              fontSize: {
                xs: '1rem',
                sm: '1.125rem',
                md: '1.25rem',
                lg: '1.5rem'
              },
              color: 'white',
              fontFamily: '"Wix Madefor Text", sans-serif',
              lineHeight: 1.75,
              maxWidth: '2xl',
              mx: 'auto',
              textAlign: 'center',
              px: 4
            }}
          >
            We envision a world where clinicians and patients are fully engaged, empowered by AI that automates workflows, enhances EHR usability, and unlocks unparalleled value.
          </Typography>
        </Container>
        
        {/* Scroll down indicator - positioned on left side */}
        <Box
          component={motion.div}
          sx={{
            position: 'absolute',
            left: { xs: '16px', sm: '40px' },
            bottom: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 20
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          onClick={scrollToNext}
        >
          <Typography 
            sx={{ 
              color: 'grey.400', 
              mb: 1, 
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontFamily: '"Wix Madefor Text", sans-serif'
            }}
          >
            Scroll
          </Typography>
          <ChevronDown 
            color="white" 
            height={isMobile ? 20 : 24} 
            width={isMobile ? 20 : 24} 
          />
        </Box>
      </Box>
      
      {/* Section Divider */}
      <Box 
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          py: { xs: 4, sm: 6 }
        }}
      >
        <Box 
          sx={{
            width: '66.666667%',
            maxWidth: '4xl',
            height: '1px',
            bgcolor: 'grey.800'
          }}
        />
      </Box>
    </Box>
  );
};

export default MissionVision;
