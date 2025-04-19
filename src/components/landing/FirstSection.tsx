
import React from 'react';
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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

  return (
    <section className="min-h-screen bg-white p-4 md:p-8 flex items-center">
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
          <Box
            sx={{ 
              flex: 1,
              animation: "fadeInUp 0.8s ease-out",
              "@keyframes fadeInUp": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: {xs: '50px', sm: '65px', md: '60px', lg: '72px', xl: '78px'},
                color: '#000000',
                lineHeight: 1.1
              }}
            >
              Innovative<br />
              Ambient AI<br />
              <Box component="span" sx={{ color: '#000000' }}>
                Solutions<br />
                For Healthcare
              </Box>
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              p: 3,
              border: '1px solid rgba(209, 213, 219, 0.3)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              animation: "fadeInDown 0.8s ease-out",
              "@keyframes fadeInDown": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(-20px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Box sx={{ float: 'right', display:'flex', alignItems: 'center', borderRadius: 4, ml: 2 }}>
              <img
                src="/circleIcon.png"
                alt="circleIcon"
                width="90"
                height="auto"
              />
            </Box>
            <Typography variant="h6" sx={{ color: '#000000' }}>
              From AI medical scribes to patient care AI agents, CRUSH and BRAVO are AI-powered solutions that streamline clinical documentation, minimize administrative burdens, reduce burnout, and save you time—so you can focus on patient care and enhance healthcare automation.
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 3
          }}
        >
          <Button
            sx={{
              background: 'linear-gradient(to right, #143151, #387E89)',
              color: 'white',
              px: 4,
              py: 2,
              borderRadius: '50px',
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                background: 'linear-gradient(to right, #0d2440, #2d6974)',
              }
            }}
          >
            <ArrowRight className="h-5 w-5" />
            Book A Demo
          </Button>
          
          <Box 
            sx={{ 
              flex: 1,
              background: 'rgba(243, 244, 246, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              p: 3,
              border: '1px solid rgba(209, 213, 219, 0.3)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h6" sx={{ color: '#000000', mb: 2 }}>
              S10.AI Is Recommended by
            </Typography>
            <Box sx={{ overflow: "hidden" }}>
              <Marquee gradient={false} speed={50}>
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
          </Box>
        </Box>
      </Box>
    </section>
  );
};
