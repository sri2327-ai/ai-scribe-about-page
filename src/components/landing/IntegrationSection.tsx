
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
  console.log("🚀 UPDATED IntegrationSection with combined logo marquee is rendering");
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-8 px-4 bg-gradient-to-r from-[#143151] to-[#387E89] relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Combined Header */}
        <div className="text-center mb-6">
          {isClient ? (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2"
            >
              Compatible with 500+ Healthcare Platforms
            </motion.h2>
          ) : (
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              Compatible with 500+ Healthcare Platforms
            </h2>
          )}
          
          {isClient ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/90 text-sm md:text-base max-w-2xl mx-auto"
            >
              From EHR to VOIP, PMS to CRM - S10.AI seamlessly integrates with your existing systems. Try our compatibility checker below.
            </motion.p>
          ) : (
            <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto">
              From EHR to VOIP, PMS to CRM - S10.AI seamlessly integrates with your existing systems. Try our compatibility checker below.
            </p>
          )}
        </div>

        <div className="mb-6">
          <IntegrationChecker />
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/10 rounded-lg p-2 md:p-3 max-w-lg flex items-start gap-2 backdrop-blur-sm">
            <Info className="w-4 h-4 text-white shrink-0 mt-0.5" />
            <p className="text-white text-xs md:text-sm text-left">
              <span className="font-medium">Disclaimer:</span> The compatibility checker demonstrates S10.AI's universal compatibility. 
              Any software name you enter will show as compatible because S10.AI is designed to work with all your preferred software solutions.
            </p>
          </div>
        </div>

        <motion.div 
          className="relative mb-8"
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
                    className="bg-white/10 rounded-xl border border-white/20 p-4 w-32 h-20 flex items-center justify-center group hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} integration`}
                      className="max-h-10 w-auto object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
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
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#143151] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#387E89] to-transparent z-10 pointer-events-none"></div>
              
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
                    <div className="bg-white/10 rounded-2xl border border-white/20 p-8 w-40 h-24 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 relative overflow-hidden backdrop-blur-sm">
                      {/* Subtle shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      
                      <img
                        src={item.logo}
                        alt={`${item.name} integration`}
                        className="max-h-12 w-auto object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500 relative z-10"
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
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 border border-white/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <Typography
              variant="body2"
              className="text-white text-sm font-medium"
            >
              Universal API • Real-time sync • Zero setup required
            </Typography>
          </div>
        </motion.div>

        {/* CTA Button */}
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
  );
};

export default IntegrationSection;
