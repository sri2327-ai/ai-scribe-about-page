
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Stethoscope, Clock, FileText, Shield, CheckCircle, MessageSquare, Users, Database, Star } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];
export const FirstSection = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);
  const clinicianBenefits = [{
    icon: <Clock className="w-5 h-5 text-[#387E89]" />,
    text: "75% faster charting"
  }, {
    icon: <Stethoscope className="w-5 h-5 text-[#387E89]" />,
    text: "Focus on patients"
  }, {
    icon: <Shield className="w-5 h-5 text-[#387E89]" />,
    text: "HIPAA compliant"
  }, {
    icon: <CheckCircle className="w-5 h-5 text-[#387E89]" />,
    text: "Integrates with your EHR"
  }];

  // Feature tab data - simplified for better UX, combining EHR and Apps
  const featureTabs = [{
    id: "ai-scribe",
    title: "AI Medical Scribe",
    icon: <FileText className="w-6 h-6 mr-2" />,
    description: "Automated documentation that captures the full patient story while you focus on care.",
    benefit: "Save 2+ hours per day"
  }, {
    id: "patient-engagement",
    title: "Patient Engagement Agent",
    icon: <MessageSquare className="w-6 h-6 mr-2" />,
    description: "Seamless communication tools that improve patient satisfaction and clinical outcomes.",
    benefit: "Boost satisfaction by 20%"
  }, {
    id: "custom-agents",
    title: "Custom AI Agents",
    icon: <Users className="w-6 h-6 mr-2" />,
    description: "Purpose-built AI assistants that adapt to your specialty and workflow preferences.",
    benefit: "30+ specialty workflows"
  }, {
    id: "ehr-integrations",
    title: "Complete Integrations",
    icon: <Database className="w-6 h-6 mr-2" />,
    description: "Works with any EHR system and connects to 7000+ healthcare and productivity apps.",
    benefit: "Your entire tech stack connected"
  }];
  return <section className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 overflow-hidden relative" ref={sectionRef}>
      {/* Healthcare-themed background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl"></div>
      
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 items-center">
          
          {/* Left column - Main heading and CTA */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.1
          }} className="space-y-6">
              {/* Pill badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 text-[#387E89] text-sm font-medium">
                <Zap size={14} className="mr-1" />
                Trusted by 1000+ Healthcare Providers
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                AI Scribing & <br />
                <span className="bg-gradient-to-r from-[#143151] to-[#387E89] text-transparent bg-clip-text">
                  Patient Engagement
                </span><br />
                Built for Clinicians<br />
                Like You
              </h1>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {clinicianBenefits.map((benefit, index) => <div key={index} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                    {benefit.icon}
                    <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                  </div>)}
              </div>
              
              <div className="pt-4">
                <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="rounded-full px-6 py-6 text-base font-medium bg-gradient-to-r from-[#143151] to-[#387E89] hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 text-white">
                  <motion.div animate={isHovered ? {
                  x: [0, 5, 0]
                } : {}} transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0
                }} className="flex items-center gap-2">
                    Request A Demo
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right column - Improved feature showcase */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.7,
          delay: 0.3
        }} className="lg:col-span-3 relative mt-16 lg:mt-10">
            <div className="relative">
              
              {/* Completely redesigned feature showcase */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                {/* Enhanced header with subtle particle effect */}
                <div className="relative p-5 bg-gradient-to-r from-[#143151] via-[#265470] to-[#387E89] text-white">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-0 right-1/3 w-16 h-16 bg-white/10 rounded-full translate-y-1/2"></div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center">
                    <Star className="w-6 h-6 mr-3 text-yellow-200 animate-pulse" />
                    <h3 className="font-semibold text-lg md:text-xl">Clinical AI Solutions That Save You Time</h3>
                  </div>
                </div>
                
                <Tabs defaultValue="ai-scribe" className="w-full">
                  <div className="px-4 pt-4">
                    <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-gray-50/70 p-2 rounded-lg">
                      {featureTabs.map(tab => (
                        <TabsTrigger 
                          key={tab.id} 
                          value={tab.id} 
                          className="flex items-center whitespace-nowrap px-4 py-3 gap-2 my-1 rounded-lg transition-all"
                        >
                          <span className="flex items-center justify-center bg-opacity-20 rounded-full p-1">
                            {tab.icon}
                          </span>
                          <span className="font-medium">{tab.title}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  
                  <div className="p-6">
                    {featureTabs.map(tab => (
                      <TabsContent key={tab.id} value={tab.id} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                        <div className="space-y-6">
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-between items-start"
                          >
                            <div className="max-w-[80%]">
                              <h3 className="text-xl font-semibold text-[#143151]">{tab.title}</h3>
                              <p className="text-gray-600 mt-2 leading-relaxed">{tab.description}</p>
                            </div>
                            <div className="hidden md:flex bg-gradient-to-br from-blue-50 to-teal-50 p-4 rounded-full shadow-sm">
                              {tab.icon}
                            </div>
                          </motion.div>
                          
                          <div className="bg-gradient-to-r from-gray-50 via-blue-50/20 to-teal-50/20 p-5 rounded-lg flex items-center justify-between border border-blue-100/20">
                            <div className="flex items-center space-x-3">
                              <div className="bg-[#387E89] rounded-full p-1.5">
                                <CheckCircle className="w-5 h-5 text-white" />
                              </div>
                              <span className="font-semibold text-[#387E89]">{tab.benefit}</span>
                            </div>
                            
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
                              className="w-14 h-14 flex items-center justify-center"
                            >
                              <VoiceAnimation />
                            </motion.div>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </div>
                </Tabs>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Trusted by section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.6
      }} className="mt-16">
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
                {companyLogos.map((logo, index) => <motion.div key={index} whileHover={{
                scale: 1.1
              }} transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}>
                    <Box sx={{
                  mx: {
                    xs: 3,
                    md: 5
                  },
                  display: 'flex',
                  alignItems: 'center'
                }}>
                      <img src={logo} alt={`Healthcare partner ${index + 1}`} style={{
                    width: 'auto',
                    height: '32px',
                    objectFit: 'contain'
                  }} />
                    </Box>
                  </motion.div>)}
              </Marquee>
            </Box>
          </div>
        </motion.div>
      </div>
    </section>;
};
