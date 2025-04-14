'use client'
import React, { useRef } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function EleventhScl(...args: []) {
  const theme = useTheme();
  const containerRef = useRef(null);
  const MotionPaper = motion.create(Paper);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const width = useTransform(scrollYProgress, [0, 1], ["70%", "110%"]);

  return (
    <section ref={containerRef} className="witOutSp" style={{ position: "relative", alignItems: "center", justifyContent: "center", padding: '0px', minHeight: 'unset' }}>
      <MotionPaper
        style={{ width: width}}
        sx={{
          height: 300,
          borderRadius: 4,
          boxShadow: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 24,
          background: "linear-gradient(0deg, #387E89, #FFFFFF 90%)",
          border: '1px solid #387E89'
        }}
      >
        
        <Stack
          spacing={4}
          direction="column"
          sx={{
            maxWidth: { xs : '500px', sm: '650px', md: '750px', lg: '850px' },
            alignItems: "center",
            p: 5
          }}
          useFlexGap
        >
          <Typography variant="h3" fontWeight="semiBold" sx={{ textAlign: "center", color: theme.palette.primary.light }}>
            Join Top Clinics Elevating Patient Care with S10.AI! 
          </Typography>
          <Typography variant="h5" fontWeight="semiBold" sx={{ textAlign: "center", color: theme.palette.text.secondary }}>
            Optimize Your Practice with Bravo & CRUSH
          </Typography>
          <Button 
            variant="text" 
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
            startIcon={
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
                <ArrowForwardIcon fontSize="small" />
              </Box>
            }
            >
            <Typography
              className="button-text"
              variant='h6' 
              fontWeight="semiBold" 
              sx={{
                color: theme.palette.text.secondary,
                transition: "color 0.3s ease"
              }}
            >
              Book A Demo
            </Typography>
          </Button>
        </Stack>
      </MotionPaper>
    </section>
  );
}