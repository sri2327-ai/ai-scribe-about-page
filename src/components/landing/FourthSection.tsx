import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";

export const FourthSection = () => {
  const theme = useTheme();
  const MotionPaper = motion(Paper);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <Box sx={{ 
        maxWidth: '1400px',
        mx: 'auto',
        display: 'flex', 
        flexDirection: 'column', 
        gap: 6 
      }}>
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          <Typography variant="h3" sx={{ textAlign: "center", color: "black", mb: 3 }}>
            Meet Bravo & CRUSH – A S10'ing Experience 
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center", color: "black" }}>
            From AI scribes to AI agents, Crush & Bravo solve medical office challenges by streamlining documentation, optimizing real-time clinical prompts, automating clinical workflows, and improving medical decision-making. They cut admin tasks and enhance patient care—always ready to assist, with enterprise-grade AI enhancing every aspect. 
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 4, md: 6 },
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          <Box sx={{ 
            flex: '1',
            maxWidth: { xs: '100%', md: '600px' },
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}>
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
              <MotionPaper
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                sx={{ 
                  width: '100%',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  borderRadius: 2
                }}
              >
                <img
                  src="/circleIcon.png"
                  alt="CRUSH AI"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </MotionPaper>
              
              <Typography variant="h4" sx={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                C.R.U.S.H
              </Typography>
              
              <Typography variant="h6" sx={{ color: 'black', textAlign: 'center', fontWeight: 600 }}>
                AI Medical Scribe Assistant Powered by Robots
              </Typography>
              
              <Typography sx={{ color: 'black', textAlign: 'center', lineHeight: 1.7 }}>
                Crush automates documentation, transcribes in real time using generative AI, and integrates with your preferred EHR, reducing burnout and freeing you to focus on care. It ensures compliance, accurate speech-to-text for doctors, and efficiency.
              </Typography>
            </Box>

            <Box sx={{ p: 4, pt: 0 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: 'linear-gradient(to right, #143151, #387E89)',
                  color: 'white',
                  py: 1.5,
                  borderRadius: 6,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  '&:hover': {
                    background: 'linear-gradient(to right, #12283F, #2E6A75)',
                    opacity: 0.9
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  View More
                  <ArrowRight size={20} />
                </Box>
              </Button>
            </Box>
          </Box>

          <Box sx={{ 
            flex: '1',
            maxWidth: { xs: '100%', md: '600px' },
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}>
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
              <MotionPaper
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                sx={{ 
                  width: '100%',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  borderRadius: 2
                }}
              >
                <img
                  src="/circleIcon.png"
                  alt="BRAVO AI"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </MotionPaper>
              
              <Typography variant="h4" sx={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                B.R.A.V.O
              </Typography>
              
              <Typography variant="h6" sx={{ color: 'black', textAlign: 'center', fontWeight: 600 }}>
                AI Patient Care Agent Powered by Robots
              </Typography>
              
              <Typography sx={{ color: 'black', textAlign: 'center', lineHeight: 1.7 }}>
                Bravo automates scheduling, patient communication, insurance verification, and follow-ups, keeping your clinic efficient and patients engaged—enhancing clinical workflow optimization, healthcare AI infrastructure, and patient satisfaction.
              </Typography>
            </Box>

            <Box sx={{ p: 4, pt: 0 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: 'linear-gradient(to right, #143151, #387E89)',
                  color: 'white',
                  py: 1.5,
                  borderRadius: 6,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  '&:hover': {
                    background: 'linear-gradient(to right, #12283F, #2E6A75)',
                    opacity: 0.9
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  View More
                  <ArrowRight size={20} />
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
