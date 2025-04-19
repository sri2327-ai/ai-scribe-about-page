
import React from 'react';
import { Box, Typography, Button, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const FourthSection = () => {
  const theme = useTheme();
  const MotionPaper = motion(Paper);

  return (
    <section className="py-10 px-4 md:px-8">
      <Box sx={{ display:'flex', flexDirection: 'column', gap: 3 }}>
        <Typography variant="h3" sx={{ textAlign: "center", color: theme.palette.text.primary }}>
          Meet Bravo & CRUSH – A S10'ing Experience 
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center", color: theme.palette.text.primary }}>
          From AI scribes to AI agents, Crush & Bravo solve medical office challenges by streamlining documentation, optimizing real-time clinical prompts, automating clinical workflows, and improving medical decision-making. They cut admin tasks and enhance patient care—always ready to assist, with enterprise-grade AI enhancing every aspect. 
        </Typography>
        
        <Box sx={{ display:'flex', flexDirection: 'row', justifyContent:'space-evenly', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ display:'flex', justifyContent: 'space-between', flexBasis: { xs: '230px', md: '350px'}, flexDirection: 'column', alignItems: 'center', gap: 3, p: 2, background: `linear-gradient(180deg, ${theme.palette.primary.light}, ${theme.palette.common.white})`, borderRadius: 2, boxShadow: 2 }}>
            <Box sx={{ display:'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <MotionPaper
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.35 }}
                sx={{ boxShadow: 1, background: theme.palette.grey.A200, width: 200, height: 200, borderRadius: '10px' }}
              >
                <img
                  src="/circleIcon.png"
                  alt="circleIcon"
                  width="200"
                  height="200"
                  style={{ borderRadius: '10px' }}
                />
              </MotionPaper>
              <Typography variant="h3" sx={{ color: theme.palette.text.primary }}>
                C.R.U.S.H
              </Typography>
              <Typography variant="h6" fontWeight="semiBold" sx={{ minHeight: '55px', textAlign: 'center', color: theme.palette.text.primary }}>
                AI Medical Scribe Assistant Powered by Robots
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.primary }}>
                Crush automates documentation, transcribes in real time using generative AI, and integrates with your preferred EHR, reducing burnout and freeing you to focus on care. It ensures compliance, accurate speech-to-text for doctors, and efficiency.
              </Typography>
            </Box>
            <Button 
              variant="text" 
              className="w-full"
              sx={{ 
                textTransform: "capitalize",
                background: theme.palette.primary.light,
                px: 3,
                py: 1.5,
                borderRadius: "50px",
                "&:hover":{
                  ".icon-box": {
                    transform: "rotate(-270deg)",
                    color: theme.palette.text.secondary,
                    borderColor: theme.palette.text.secondary,
                  },
                  ".button-text": {
                    color: theme.palette.text.secondary,
                  },
                },
              }}
            >
              <Box
                className="icon-box"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  borderRadius: "50%", 
                  color: theme.palette.text.secondary,
                  border: `2px solid ${theme.palette.text.secondary}`,
                  transition: "transform 0.3s ease",
                  transform: "rotate(0deg)",
                  mr: 1
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </Box>
              <Typography
                className="button-text"
                variant='h6' 
                fontWeight="semiBold" 
                sx={{
                  color: theme.palette.text.secondary,
                  transition: "color 0.3s ease"
                }}
              >
                View More
              </Typography>
            </Button>
          </Box>

          <Box sx={{ display:'flex', justifyContent: 'space-between', flexBasis: { xs: '230px', md: '350px'}, flexDirection: 'column', alignItems: 'center', gap: 3, p: 2, background: `linear-gradient(180deg, ${theme.palette.primary.light}, ${theme.palette.common.white})`, borderRadius: 2, boxShadow: 2 }}>
            <Box sx={{ display:'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <MotionPaper
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.35 }}
                sx={{ boxShadow: 1, background: theme.palette.grey.A200, width: 200, height: 200, borderRadius: '10px' }}
              >
                <img
                  src="/circleIcon.png"
                  alt="circleIcon"
                  width="200"
                  height="200"
                  style={{ borderRadius: '10px' }}
                />
              </MotionPaper>
              <Typography variant="h3" sx={{ color: theme.palette.text.primary }}>
                B.R.A.V.O
              </Typography>
              <Typography variant="h6" fontWeight="semiBold" sx={{ minHeight: '55px', textAlign: 'center', color: theme.palette.text.primary }}>
                AI Patient Care Agent Powered by Robots 
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.primary }}>
                Bravo automates scheduling, patient communication, insurance verification, and follow-ups, keeping your clinic efficient and patients engaged—enhancing clinical workflow optimization, healthcare AI infrastructure, and patient satisfaction.
              </Typography>
            </Box>
            <Button 
              variant="text"
              className="w-full" 
              sx={{ 
                textTransform: "capitalize",
                background: theme.palette.primary.light,
                px: 3,
                py: 1.5,
                borderRadius: "50px",
                "&:hover":{
                  ".icon-box": {
                    transform: "rotate(-270deg)",
                    color: theme.palette.text.secondary,
                    borderColor: theme.palette.text.secondary,
                  },
                  ".button-text": {
                    color: theme.palette.text.secondary,
                  },
                },
              }}
            >
              <Box
                className="icon-box"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  borderRadius: "50%", 
                  color: theme.palette.text.secondary,
                  border: `2px solid ${theme.palette.text.secondary}`,
                  transition: "transform 0.3s ease",
                  transform: "rotate(0deg)",
                  mr: 1
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </Box>
              <Typography
                className="button-text"
                variant='h6' 
                fontWeight="semiBold" 
                sx={{
                  color: theme.palette.text.secondary,
                  transition: "color 0.3s ease"
                }}
              >
                View More
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
