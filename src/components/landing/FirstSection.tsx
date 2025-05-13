
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Stethoscope, Clock, PenTool, CheckCircle, Shield } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

export const FirstSection = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const clinicianBenefits = [
    { icon: <Clock className="w-5 h-5 text-[#387E89]" />, text: "75% faster charting" },
    { icon: <Stethoscope className="w-5 h-5 text-[#387E89]" />, text: "Focus on patients" },
    { icon: <Shield className="w-5 h-5 text-[#387E89]" />, text: "HIPAA compliant" },
    { icon: <CheckCircle className="w-5 h-5 text-[#387E89]" />, text: "Integrates with your EHR" }
  ];

  return (
    <section 
      className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 overflow-hidden relative"
      ref={sectionRef}
    >
      {/* Healthcare-themed background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl"></div>
      
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 items-center">
          
          {/* Left column - Main heading and CTA */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Pill badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 text-[#387E89] text-sm font-medium">
                <Zap size={14} className="mr-1" />
                Trusted by 1000+ clinics
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                AI Scribing & <br/>
                <span className="bg-gradient-to-r from-[#143151] to-[#387E89] text-transparent bg-clip-text">
                  Patient Engagement
                </span><br/>
                Built for Clinicians<br/>
                Like You
              </h1>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {clinicianBenefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100"
                  >
                    {benefit.icon}
                    <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="rounded-full px-6 py-6 text-base font-medium bg-gradient-to-r from-[#143151] to-[#387E89] hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 text-white"
                >
                  <motion.div
                    animate={isHovered ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                    className="flex items-center gap-2"
                  >
                    Request A Demo
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right column - Interactive display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 relative mt-4 lg:mt-0"
          >
            <div className="relative">
              {/* Doctor illustration or image would go here */}
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <PenTool className="text-[#387E89] w-10 h-10" />
              </div>
              
              {/* Main feature showcase */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-center text-sm font-medium">
                  Live Demo of S10.AI's Voice Recognition
                </div>
                
                <div className="p-6">
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700 font-medium mb-2">Don't adapt to your AI—make it work for you.</p>
                    <p className="text-sm text-gray-600">
                      S10.AI's AI medical scribe and patient engagement agent integrate seamlessly with Epic, Cerner, your preferred EHR, and 7,000+ other apps.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ 
                        scale: [0.97, 1, 0.97],
                        opacity: [0.9, 1, 0.9]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-full"
                    >
                      <VoiceAnimation />
                    </motion.div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">Average time saved</div>
                        <div className="text-lg font-bold text-[#143151]">2+ hours/day</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">Patient satisfaction</div>
                        <div className="text-lg font-bold text-[#143151]">↑ 20%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 overflow-hidden p-4">
            <Typography variant="h6" className="text-center text-gray-800 font-medium mb-4">
              Trusted by Leading Healthcare Institutions
            </Typography>
            
            <Box sx={{
              overflow: "hidden",
              width: '100%',
              '& .marquee-container': {
                minHeight: {
                  xs: '40px',
                  sm: '48px'
                }
              }
            }}>
              <Marquee gradient={false} speed={40}>
                {companyLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Box sx={{
                      mx: {
                        xs: 3,
                        md: 5
                      },
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <img 
                        src={logo} 
                        alt={`Healthcare partner ${index + 1}`} 
                        style={{
                          width: 'auto',
                          height: '32px',
                          objectFit: 'contain'
                        }} 
                      />
                    </Box>
                  </motion.div>
                ))}
              </Marquee>
            </Box>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
