
import React from 'react';
import { Box, Typography, Stack } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Heart, Brain, Microscope, Baby, Bone, AirVent } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroIllustration = () => {
  const specialtyIcons = [
    { Icon: Heart, delay: 0.1, rotation: 0 },
    { Icon: Brain, delay: 0.2, rotation: 60 },
    { Icon: Microscope, delay: 0.3, rotation: 120 },
    { Icon: Baby, delay: 0.4, rotation: 180 },
    { Icon: Bone, delay: 0.5, rotation: 240 },
    { Icon: AirVent, delay: 0.6, rotation: 300 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div className="relative w-[400px] h-[400px]">
        {/* Central S10.AI Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
            <Typography className="text-white font-bold text-xl">S10.AI</Typography>
          </div>
        </motion.div>

        {/* Specialty Icons */}
        {specialtyIcons.map(({ Icon, delay, rotation }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${rotation}deg) translate(120px) rotate(-${rotation}deg)`,
            }}
          >
            <div className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Icon size={24} className="text-[#143151]" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const FirstSection = () => {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3rem',
                    md: '3.5rem',
                    lg: '4rem'
                  },
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#000000',
                  mb: 4
                }}
              >
                Innovative<br />
                Ambient AI<br />
                Solutions<br />
                For Healthcare
              </Typography>

              <Typography 
                sx={{ 
                  color: '#000000',
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  mb: 6,
                  maxWidth: '90%'
                }}
              >
                Transform your clinical practice with AI that understands healthcare. 
                Our AI medical scribe and patient care agent reduce documentation time, 
                automate admin tasks, integrate with your EHR, and refocus care on patients.
              </Typography>

              <Button 
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl"
              >
                Request A Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <div className="lg:block">
            <HeroIllustration />
          </div>
        </div>

        {/* Bottom Logos Section */}
        <Box
          sx={{
            mt: { xs: 6, md: 12 },
            background: 'rgba(243, 244, 246, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            p: { xs: 3, sm: 4 },
            border: '1px solid rgba(209, 213, 219, 0.3)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#000000',
              mb: { xs: 2, sm: 3 },
              fontSize: {
                xs: '0.875rem',
                sm: '1rem',
                md: '1.125rem'
              },
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            S10.AI Is Recommended by
          </Typography>
          <Box sx={{ overflow: "hidden", width: '100%' }}>
            <Marquee gradient={false} speed={50}>
              {[...Array(8)].map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    mx: { xs: 1.5, md: 2 },
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src="/HeaderLogo.png"
                    alt={`Company logo ${index + 1}`}
                    style={{
                      width: 'auto',
                      height: '24px',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              ))}
            </Marquee>
          </Box>
        </Box>
      </div>
    </section>
  );
};
