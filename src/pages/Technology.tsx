
import { Box, Typography, Button, Container, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import TechHero from "@/components/technology/TechHero";
import MeetIpkoTimeline from "@/components/technology/MeetIpkoTimeline";
import TechFeatures from "@/components/technology/TechFeatures";
import SecurityCompliance from "@/components/technology/SecurityCompliance";
import ProjectSetupChecklist from "@/components/technology/ProjectSetupChecklist";
import S10AISafetyFAQs from "@/components/technology/S10AISafetyFAQs";
import TrustedByExperts from "@/components/technology/TrustedByExperts";
import { motion } from "framer-motion";

const Technology = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();

  return (
    <Box 
      component="main" 
      sx={{ 
        bgcolor: 'black',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col w-full"
        style={{ position: "relative" }}
      >
        {/* Hero Section with AI Innovation & Security */}
        <TechHero />

        {/* Meet IPKO Section with Timeline */}
        <MeetIpkoTimeline />

        {/* Technology Features Section */}
        <TechFeatures />

        {/* Call to Action Section */}
        <Box 
          component="section"
          sx={{
            py: { xs: 8, md: 14 },
            bgcolor: 'black',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative'
          }}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                maxWidth: '64rem',
                margin: '0 auto',
                position: 'relative'
              }}
            >
              <Typography 
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 'normal',
                  mb: 3,
                  color: 'white'
                }}
              >
                Transform Your Healthcare Workflow
              </Typography>
              <Button 
                variant="outlined"
                size="large"
                sx={{
                  bgcolor: 'black',
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    bgcolor: 'white',
                    color: 'black',
                  },
                  transition: 'all 0.3s',
                  borderRadius: '9999px',
                  px: 4,
                  py: 1.5
                }}
                endIcon={<ArrowRight />}
              >
                Request A Demo
              </Button>
            </motion.div>
          </Container>
        </Box>

        {/* Security & Compliance Section */}
        <SecurityCompliance />
        
        {/* Project Setup Checklist Section */}
        <ProjectSetupChecklist />

        {/* S10.AI Safety FAQs Section */}
        <S10AISafetyFAQs />
        
        {/* Trusted by Experts Section */}
        <TrustedByExperts />
      </motion.div>
    </Box>
  );
};

export default Technology;
