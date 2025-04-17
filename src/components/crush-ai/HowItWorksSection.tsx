
import React from "react";
import { Box, Container, Typography, Stack, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { User, Mic, ClipboardCheck } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

export const HowItWorksSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'));
  
  // Define larger size for the cards
  const cardWidth = isMobile ? "100%" : isTablet ? "280px" : "340px";
  const cardHeight = isMobile ? "auto" : isTablet ? "380px" : "450px";
  
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  const steps = [
    {
      number: 1,
      title: "Select a Patient",
      description: "Launch CRUSH on any device and instantly access patient data...",
      icon: <User size={24} />,
      delay: 0,
    },
    {
      number: 2,
      title: "Start Speaking",
      description: "Speak naturally in any supported language. Our ambient AI-powered system captures the entire patient visit.",
      icon: <Mic size={24} />,
      delay: 0.1,
    },
    {
      number: 3,
      title: "Review & Sign Off",
      description: "Instantly generates EHR-ready medical notes with AI-powered suggestions for medical coding...",
      icon: <ClipboardCheck size={24} />,
      delay: 0.2,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        zIndex: 1
      }}
      ref={containerRef}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 800,
                mb: 2,
                color: "white",
                textShadow: "0 2px 10px rgba(0,0,0,0.2)"
              }}
            >
              How It Works
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: "rgba(255,255,255,0.9)",
                maxWidth: "800px",
                mx: "auto",
                mb: 2,
                textShadow: "0 1px 4px rgba(0,0,0,0.1)"
              }}
            >
              CRUSH turns conversational patient encounters into structured medical documentation in real-time - it couldn't be simpler.
            </Typography>
          </motion.div>
        </Box>

        <Box 
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 3 },
            justifyContent: "center",
            alignItems: { xs: "center", md: "stretch" }
          }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              style={{
                y,
                opacity,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  width: cardWidth,
                  height: cardHeight,
                  p: { xs: 3, md: 5 },
                  borderRadius: 3,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "white",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: crushAIColors.primary,
                  }}
                />
                
                <Box 
                  sx={{ 
                    display: "flex", 
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    mb: { xs: 1, md: 3 }
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 60, md: 80 },
                      height: { xs: 60, md: 80 },
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(4, 111, 144, 0.1)",
                      color: crushAIColors.primary,
                      mb: 1,
                    }}
                  >
                    <Box 
                      sx={{ 
                        position: "relative",
                        zIndex: 1
                      }}
                    >
                      {step.icon}
                    </Box>
                  </Box>
                  
                  <Box
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: { xs: 40, md: 50 },
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(4, 111, 144, 0.9)",
                      color: "white",
                      fontWeight: 700,
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {step.number}
                  </Box>
                </Box>
                
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 700,
                    mb: { xs: 1, md: 2 },
                    color: crushAIColors.text.primary,
                    textAlign: "center"
                  }}
                >
                  {step.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: crushAIColors.text.secondary,
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    textAlign: "center",
                    lineHeight: 1.6,
                    flexGrow: 1
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
