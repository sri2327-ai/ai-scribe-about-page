
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { SplineSceneBasic } from "@/components/ui/demo";
import { ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { useGlowEffect } from "@/hooks/use-glow-effect";

const HeroSection = () => {
  // Use the glow effect hook for better interactivity
  const cardRef = useGlowEffect({ 
    inactiveZone: 0.5,
    proximity: 200,
    movementDuration: 2 
  });
  
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'black',
        overflow: 'hidden',
        border: 0
      }}
    >
      {/* Background Spotlight effect */}
      <Spotlight
        className="inset-0 z-0"
        fill="#1EAEDB"
      />
      
      {/* Center content container */}
      <Container 
        sx={{
          position: 'relative',
          mx: 'auto',
          px: 4,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: 0,
          width: '100%'
        }}
      >
        <Box
          component={motion.div}
          ref={cardRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{
            width: '100%',
            border: 0,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            '--active': '1',
            '--intensity': '2',
            '--spread': '60',
            '--start': '0',
          }}
        >
          {/* Inner card spotlight effect - enhanced for better visibility */}
          <Box 
            sx={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 0,
              background: `
                radial-gradient(
                  circle at var(--x, 50%) var(--y, 50%), 
                  rgba(30,174,219,0.20), 
                  transparent 60%
                )
              `,
              opacity: 'var(--active, 1)',
              transform: 'translate3d(0, 0, 0)',
            }}
          />
          <SplineSceneBasic />
        </Box>
      </Container>
      
      {/* Central Scroll Indicator */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
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
        onClick={scrollToNextSection}
      >
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'grey.400',
            mb: 1,
            fontFamily: '"Wix Madefor Text", sans-serif',
            fontSize: '0.875rem'
          }}
        >
          Scroll
        </Typography>
        <Box 
          sx={{
            p: 1,
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'pulse 2s infinite'
          }}
        >
          <ChevronDown color="white" size={24} />
        </Box>
      </Box>
      
      {/* Section Divider */}
      <Box 
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          bottom: '16px'
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

      {/* Add keyframes for the pulse animation - Fixed to use standard style without jsx/global props */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        `
      }} />
    </Box>
  );
};

export default HeroSection;
