import React from 'react';
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

export const SecondSection = () => {
  const logos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <Typography 
          variant="h3" 
          sx={{
            color: '#000000', // Explicitly set to black
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem',
              lg: '3.5rem'
            },
            textAlign: 'center',
            fontWeight: 700,
            mb: { xs: 6, md: 8 },
            letterSpacing: '-0.02em'
          }}
        >
          Trusted By Leading Healthcare Organisations
        </Typography>

        <Box sx={{
          overflow: "hidden",
          width: '100%',
          background: 'rgba(243, 244, 246, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          p: { xs: 3, md: 4 },
          border: '1px solid rgba(209, 213, 219, 0.3)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <Marquee gradient={false} speed={50}>
            {logos.map((logo, index) => (
              <Box 
                key={index} 
                sx={{
                  mx: { xs: 2, md: 3 },
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <img 
                  src={logo} 
                  alt={`Company logo ${index + 1}`}
                  style={{
                    width: 'auto',
                    height: '50px',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            ))}
          </Marquee>
        </Box>
      </div>
    </section>
  );
};
