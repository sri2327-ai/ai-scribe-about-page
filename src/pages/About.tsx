
import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import HeroSection from "@/components/about/HeroSection";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import WhoWeAre from "@/components/about/WhoWeAre";
import StarTrekSection from "@/components/about/StarTrekSection";
import FounderMessage from "@/components/about/FounderMessage";
import TeamSection from "@/components/about/TeamSection";
import TrustedBy from "@/components/about/TrustedBy";

const About = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Add a listener to handle viewport height on mobile devices
  useEffect(() => {
    const setVh = () => {
      // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set the initial value
    setVh();
    
    // Update on window resize
    window.addEventListener('resize', setVh);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <Box 
      component="main" 
      sx={{ 
        bgcolor: 'black', 
        minHeight: '100vh', 
        width: '100%', 
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <HeroSection />
        <Box sx={{ width: '100%' }}>
          <MissionVision />
          <CoreValues />
          <Box sx={{ position: 'relative' }}>
            <WhoWeAre />
            <StarTrekSection />
          </Box>
          <FounderMessage />
          <TeamSection />
          <TrustedBy />
        </Box>
      </motion.div>
    </Box>
  );
};

export default About;
