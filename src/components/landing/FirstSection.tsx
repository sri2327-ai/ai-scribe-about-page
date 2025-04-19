
import React from 'react';
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";

const companyLogos = [
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png",
];

export const FirstSection = () => {
  const theme = useTheme();
  const MotionPaper = motion(Paper);

  return (
    <section className="p-4 md:p-8" style={{ background: `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.primary.light})` }}>
      <Box sx={{ display: 'flex', flexDirection:'column', justifyContent:'space-between', flexGrow: 1, gap: 3 }}>
        <Stack
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          sx={{
            flexWrap: 'wrap',
            justifyContent: "space-between",
            alignItems: { xs: "stretch", md: "flex-end" },
          }}
          useFlexGap
        >
          <MotionPaper
            initial={{ x: -25, y: 50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            sx={{ flex: 1, boxShadow: 0, background: 'transparent' }}
          >
            <Typography variant="h1" sx={{ fontSize: {xs: '50px', sm: '65px', md: '60px', lg: '72px', xl: '78px'} }}>
              Innovative<br />
              Ambient AI<br />
              <Box component="span" sx={{ color: theme.palette.primary.light }}>
                Solutions<br />
                For Healthcare
              </Box>
            </Typography>
          </MotionPaper>

          <MotionPaper
            initial={{ x: 25, y: 50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            sx={{ flex: 1, background: theme.palette.grey.A200, borderRadius: 4, p: 2, boxShadow: 1 }}
          >
            <Box sx={{ float: 'right', background: theme.palette.background.default, display:'flex', alignItems: 'center', borderRadius: 4, ml: 2 }}>
              <img
                src="/circleIcon.png"
                alt="circleIcon"
                width="90"
                height="auto"
              />
            </Box>
            <Typography variant="h6">
              From AI medical scribes to patient care AI agents, CRUSH and BRAVO are AI-powered solutions that streamline clinical documentation, minimize administrative burdens, reduce burnout, and save you time—so you can focus on patient care and enhance healthcare automation.
            </Typography>
          </MotionPaper>
        </Stack>

        <Stack
          spacing={3}
          direction="row"
          sx={{
            flexWrap: 'wrap',
            background: theme.palette.grey.A200,
            p: 2,
            borderRadius: 8,
            borderTopLeftRadius: 40,
            alignItems: 'flex-start',
          }}
          useFlexGap
        >
          <MotionPaper
            initial={{ x: 25, y: 30, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            sx={{
              position: 'relative',
              display: 'flex',
              background: theme.palette.common.white,
              boxShadow: 0,
              mt: -2,
              ml: -2,
              p: 1.5,
              borderBottomRightRadius: 40,
              borderTopLeftRadius: 40,
            }}
          >
            <Button 
              variant="text" 
              sx={{ 
                textTransform: "capitalize",
                background: theme.palette.primary.light,
                px: 3,
                py: 1.5,
                borderRadius: "50px",
                "&:hover": {
                  ".icon-box": {
                    transform: "rotate(-270deg)",
                    color: theme.palette.text.secondary,
                    borderColor: theme.palette.text.secondary,
                  },
                  ".button-text": {
                    color: theme.palette.text.secondary,
                  },
                },
                boxShadow: 1
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
                Book A Demo
              </Typography>
            </Button>
          </MotionPaper>
          
          <Typography variant="h6" fontWeight="medium" sx={{ maxWidth: {xs: '150px', sm: '250px' } }}>
            S10.AI Is Recommended by
          </Typography>
          
          <Box sx={{ display: 'flex', flex: 1, flexBasis: '300px', overflow: "hidden" }}>
            <Marquee gradient={false} speed={50} loop={0}>
              {companyLogos.map((logo, index) => (
                <Box key={index} sx={{ mx: { xs: 1, sm: 2 } }}>
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    width="150"
                    height="auto"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              ))}
            </Marquee>
          </Box>
        </Stack>
      </Box>
    </section>
  );
};
