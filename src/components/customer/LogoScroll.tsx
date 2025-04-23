
import React from "react";
import { Typography, Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";

const logos = [
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png"
];

const LogoScroll = () => {
  // Convert RGB to Hex color string
  const gradientColor = '#FFFFFF';  // White color

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
      <Box className="max-w-7xl mx-auto text-center">
        <Typography
          variant="h3"
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent"
        >
          Trusted By 1000+ Healthcare Providers
        </Typography>

        <Box className="mt-8">
          <div className="block md:hidden">
            <ResponsiveCarousel
              items={logos}
              renderItem={(logo, index) => (
                <div key={index} className="mx-4 flex items-center justify-center">
                  <img
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )}
              columnsDesktop={3}
              columnsTablet={2}
              columnsMobile={1}
              autoPlay={true}
              showControls={false}
            />
          </div>

          <div className="hidden md:block">
            <Marquee
              gradient={true}
              gradientColor={gradientColor}  // Use the hex color string
              speed={40}
              pauseOnHover={true}
            >
              {logos.map((logo, index) => (
                <Box
                  key={index}
                  className="mx-4 md:mx-8 transform transition-transform duration-300 hover:scale-110"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                    className="h-12 sm:h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </Box>
              ))}
            </Marquee>
          </div>
        </Box>
      </Box>
    </section>
  );
};

export default LogoScroll;
