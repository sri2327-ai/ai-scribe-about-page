
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { IntegrationChecker } from './IntegrationChecker';
import { Link } from 'react-router-dom';
import { typography, withTypography } from '@/lib/typography';
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

const IntegrationSection = () => {
  console.log("Rendering Integration Section on landing page");
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <section className="py-16 px-4 bg-gradient-to-r from-[#143151] to-[#387E89]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            {isClient ? (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={withTypography(typography.h2, "text-white mb-4")}
              >
                Compatible with Your Preferred Software
              </motion.h2>
            ) : (
              <h2 className={withTypography(typography.h2, "text-white mb-4")}>
                Compatible with Your Preferred Software
              </h2>
            )}
            
            {isClient ? (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={withTypography(typography.description, "text-white max-w-xl mx-auto")}
              >
                From EHR to VOIP, PMS to CRM - S10.AI seamlessly integrates with your existing systems. 
                Try our compatibility checker below.
              </motion.p>
            ) : (
              <p className={withTypography(typography.description, "text-white max-w-xl mx-auto")}>
                From EHR to VOIP, PMS to CRM - S10.AI seamlessly integrates with your existing systems. 
                Try our compatibility checker below.
              </p>
            )}
          </div>

          <div className="mb-12">
            <IntegrationChecker />
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/10 rounded-lg p-3 md:p-4 max-w-lg flex items-start gap-3 backdrop-blur-sm">
              <Info className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <p className={withTypography(typography.body.sm, "text-white text-left")}>
                <span className="font-medium">Disclaimer:</span> The compatibility checker demonstrates S10.AI's universal compatibility. 
                Any software name you enter will show as compatible because S10.AI is designed to work with all your preferred software solutions.
              </p>
            </div>
          </div>

          <div className="text-center">
            {isClient ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link to="/integration">
                  <Button 
                    className="rounded-full px-6 py-2 md:px-8 md:py-6 text-base md:text-lg bg-white hover:bg-gray-100 text-[#143151] shadow-xl"
                  >
                    Learn More About Integrations
                    <ArrowRight className="ml-2 h-4 w-4 text-[#143151]" />
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <Link to="/integration">
                <Button 
                  className="rounded-full px-6 py-2 md:px-8 md:py-6 text-base md:text-lg bg-white hover:bg-gray-100 text-[#143151] shadow-xl"
                >
                  Learn More About Integrations
                  <ArrowRight className="ml-2 h-4 w-4 text-[#143151]" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* Logo Marquee Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent"></div>
        
        <Box className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent"
            >
              Works with 500+ Healthcare Platforms
            </Typography>
            
            <Typography
              variant="body1"
              className="text-gray-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto"
            >
              No matter what software you use, S10.AI integrates seamlessly into your existing workflow
            </Typography>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mobile: Enhanced Carousel */}
            <div className="block lg:hidden">
              <ResponsiveCarousel
                items={integrationLogos}
                renderItem={(item, index) => (
                  <div key={index} className="flex items-center justify-center px-2 py-3">
                    <motion.div 
                      className="bg-white rounded-xl shadow-sm border border-gray-100/80 p-4 w-32 h-20 flex items-center justify-center group hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                      whileHover={{ y: -2, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img
                        src={item.logo}
                        alt={`${item.name} integration`}
                        className="max-h-10 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    </motion.div>
                  </div>
                )}
                columnsDesktop={4}
                columnsTablet={3}
                columnsMobile={2}
                autoPlay={true}
                showControls={false}
                controlsBelow={false}
                itemHeight={110}
                gap={16}
                autoPlayInterval={2500}
              />
            </div>

            {/* Desktop: Enhanced Marquee */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Gradient overlays for seamless effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                
                <Marquee
                  gradient={false}
                  speed={30}
                  pauseOnHover={true}
                  className="py-6"
                >
                  {integrationLogos.concat(integrationLogos).map((item, index) => (
                    <motion.div
                      key={index}
                      className="mx-8 group cursor-pointer"
                      whileHover={{ y: -4, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/80 p-8 w-40 h-24 flex items-center justify-center group-hover:shadow-xl group-hover:border-gray-200 transition-all duration-500 relative overflow-hidden">
                        {/* Subtle shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        
                        <img
                          src={item.logo}
                          alt={`${item.name} integration`}
                          className="max-h-12 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10"
                        />
                      </div>
                    </motion.div>
                  ))}
                </Marquee>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 rounded-full px-6 py-3 border border-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Typography
                variant="body2"
                className="text-gray-600 text-sm font-medium"
              >
                Universal API • Real-time sync • Zero setup required
              </Typography>
            </div>
          </motion.div>
        </Box>
      </section>
    </>
  );
};

export default IntegrationSection;
