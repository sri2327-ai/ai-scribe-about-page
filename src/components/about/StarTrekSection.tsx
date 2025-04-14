
import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import StarBackground from "@/components/about/StarBackground";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StarTrekSection = () => {
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
    <Box
      component="section"
      sx={{
        py: { xs: 8, sm: 10 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'black',
        minHeight: { xs: '500px', sm: '600px', lg: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: { xs: 8, sm: 0 }
      }}
    >
      {/* Interactive Star background */}
      <Box 
        sx={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0 
        }}
      >
        <StarBackground interactive={true} />
      </Box>
      
      <Box 
        sx={{ 
          maxWidth: 'lg', 
          mx: 'auto', 
          px: 4, 
          position: 'relative', 
          zIndex: 10 
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%', 
            position: 'relative' 
          }}
        >
          {/* Center content */}
          <Box
            component={motion.div}
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: { xs: '300px', sm: '400px', md: '500px' }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ position: 'relative' }}>
              {/* Interactive flowing line effect */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  inset: 0, 
                  zIndex: -10 
                }}
              >
                <CanvasEffect id="trek-canvas" className="opacity-50" />
              </Box>
              
              <Typography
                component={motion.h2}
                sx={{
                  fontSize: {
                    xs: '1.875rem',
                    sm: '3rem',
                    md: '4.5rem',
                    lg: '6rem'
                  },
                  fontWeight: 'normal',
                  color: 'white',
                  fontFamily: '"Wix Madefor Text", sans-serif',
                  textAlign: 'center'
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Like A Star Trek
              </Typography>
              
              {/* White line */}
              <Box 
                sx={{ 
                  position: 'relative', 
                  height: '4px', 
                  width: '100%', 
                  maxWidth: '25rem', 
                  mx: 'auto', 
                  my: 4 
                }}
              >
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to right, transparent, white, transparent)',
                    animation: 'pulse 2s infinite'
                  }}
                />
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    inset: 0, 
                    bgcolor: 'white', 
                    opacity: 0.5, 
                    filter: 'blur(4px)' 
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      
      {/* Scroll down indicator - positioned on left side */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          left: isMobile ? '16px' : '40px',
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
  );
};

export default StarTrekSection;
