import React from "react";
import { Typography, Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";

const integrationLogos = [
  { name: "Epic", logo: "/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png" },
  { name: "Cerner", logo: "/lovable-uploads/e9ad85da-27c0-412a-a0ff-237e4b9a8ef5.png" },
  { name: "AllScripts", logo: "/lovable-uploads/ba0495cd-1f3d-4b15-8fa6-bfd3655f8e9c.png" },
  { name: "eClinicalWorks", logo: "/lovable-uploads/c2407cd7-f533-4465-aea9-8836d71f670c.png" },
  { name: "athenahealth", logo: "/lovable-uploads/2ddb185a-4a0d-480a-a8cc-9934b8856753.png" },
  { name: "NextGen", logo: "/lovable-uploads/b1fccf69-2584-4150-987a-fb09324403f4.png" },
  { name: "Practice Fusion", logo: "/lovable-uploads/8a96c07b-d50a-4a07-80cd-1d3f13587c14.png" },
  { name: "DrChrono", logo: "/lovable-uploads/a72050cf-4ed6-4347-83df-a477f191bd59.png" }
];

const LogoMarquee = () => {
  const gradientColor = '#f8fafc';

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-slate-50 to-white border-t border-gray-100">
      <Box className="max-w-6xl mx-auto text-center">
        <Typography
          variant="h3"
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-gray-800"
        >
          Seamlessly Integrates with Your Existing Software
        </Typography>

        <Box className="mt-6">
          {/* Mobile: Carousel */}
          <div className="block lg:hidden">
            <ResponsiveCarousel
              items={integrationLogos}
              renderItem={(item, index) => (
                <div key={index} className="flex items-center justify-center px-3 py-4">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 w-28 h-16 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                    <img
                      src={item.logo}
                      alt={`${item.name} integration`}
                      className="max-h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              )}
              columnsDesktop={4}
              columnsTablet={3}
              columnsMobile={2}
              autoPlay={true}
              showControls={false}
              controlsBelow={false}
              itemHeight={100}
              gap={12}
              autoPlayInterval={2500}
            />
          </div>

          {/* Desktop: Marquee */}
          <div className="hidden lg:block">
            <Marquee
              gradient={true}
              gradientColor={gradientColor}
              speed={35}
              pauseOnHover={true}
              className="py-4"
            >
              {integrationLogos.map((item, index) => (
                <Box
                  key={index}
                  className="mx-6 transform transition-transform duration-300 hover:scale-105"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 w-36 h-20 flex items-center justify-center hover:shadow-md hover:border-gray-200 transition-all duration-300">
                    <img
                      src={item.logo}
                      alt={`${item.name} integration`}
                      className="max-h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </Box>
              ))}
            </Marquee>
          </div>
        </Box>

        <Typography
          variant="body2"
          className="text-gray-500 text-sm mt-6 max-w-2xl mx-auto"
        >
          Plus 500+ other healthcare software solutions. Our universal API adapts to your workflow.
        </Typography>
      </Box>
    </section>
  );
};

export default LogoMarquee;