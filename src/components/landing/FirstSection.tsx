import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Users, Clock, FileText, Shield, MessageSquare, Database, CheckCircle, Award, StethoscopeIcon, LightbulbIcon } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useWindowSize } from '@/hooks/use-window-size';
import { useIsMobile } from '@/hooks/use-mobile';
import { shadowStyles } from '@/lib/shadow-utils';
import { Badge } from "@/components/ui/badge";

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];
export const FirstSection = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const {
    width
  } = useWindowSize();
  const isMobile = useIsMobile();

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
    icon: <Users className="w-5 h-5 text-[#387E89]" />,
    text: "AI staffing assistance"
  }, {
    icon: <Shield className="w-5 h-5 text-[#387E89]" />,
    text: "HIPAA compliant"
  }];

  // Feature tab data - updated "AI Staffing Engagement" to "AI Staffing Agent"
  const featureTabs = [{
    id: "ai-scribe",
    title: "AI Medical Scribe",
    icon: <FileText className="w-5 h-5" />,
    description: "Automated documentation that captures the full patient story while you focus on care.",
    benefit: "Save 2+ hours per day"
  }, {
    id: "patient-engagement",
    title: "AI Staffing Agent",
    icon: <MessageSquare className="w-5 h-5" />,
    description: "AI-powered virtual staff member that handles administrative tasks and improves clinical workflow efficiency.",
    benefit: "Reduce admin workload by 40%"
  }, {
    id: "custom-agents",
    title: "Custom AI Agents",
    icon: <Users className="w-5 h-5" />,
    description: "Purpose-built AI assistants that adapt to your specialty and workflow preferences.",
    benefit: "30+ specialty workflows"
  }, {
    id: "ehr-integrations",
    title: "EHR Integrations",
    icon: <Database className="w-5 h-5" />,
    description: "Works with any EHR system and connects to 7000+ apps.",
    benefit: "Seamless connectivity"
  }];
  return <section className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 overflow-hidden relative" ref={sectionRef}>
      {/* Healthcare-themed background elements - kept subtle */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-teal-100/10 rounded-full blur-3xl"></div>
      
      {/* Main content container - improved for true 50-50 split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Updated grid to true 50-50 split on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left column - Main heading and CTA - exactly 50% on desktop */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.1
        }} className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              {/* Enhanced badges section above title */}
              <div className="flex flex-wrap gap-2.5 mb-2">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Badge variant="outline" className={`${shadowStyles.subtle} bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-700 border-blue-200/50 px-3.5 py-1.5 flex items-center gap-2 rounded-full hover:shadow-md transition-all duration-300`}>
                    <span className="bg-blue-100/80 p-1 rounded-full">
                      <Award className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-semibold">Pioneering Smarter, AI-First Healthcare</span>
                  </Badge>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Badge variant="outline" className={`${shadowStyles.subtle} bg-gradient-to-r from-green-50 to-green-100/80 text-green-700 border-green-200/50 px-3.5 py-1.5 flex items-center gap-2 rounded-full hover:shadow-md transition-all duration-300`}>
                    <span className="bg-green-100/80 p-1 rounded-full">
                      <Users className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-semibold">Trusted by 1000+ Clinicians</span>
                  </Badge>
                </motion.div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black">
                AI Scribing &<br />
                <span className="text-black">
                  AI Staffing Agent
                </span><br />
                Built for Clinicians<br />
                Like You
              </h1>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 md:pt-4">
                {clinicianBenefits.map((benefit, index) => <div key={index} className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                    {benefit.icon}
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{benefit.text}</span>
                  </div>)}
              </div>
              
              <div className="pt-6 md:pt-8">
                <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="rounded-full px-6 py-6 text-base sm:text-lg font-medium bg-gradient-to-r from-[#143151] to-[#387E89] hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 text-white">
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
            </div>
          </motion.div>
          
          {/* Right column - Feature cards - exactly 50% on desktop */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.7,
          delay: 0.3
        }} className="relative">
            <Card className={`bg-white border-0 border-gray-100 transition-all duration-300 overflow-hidden ${shadowStyles.brandGlow} ring-1 ring-gray-100/70 backdrop-blur-sm hover:-translate-y-1 dark:bg-gray-900/95 dark:border-gray-800`}>
              <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-pink-500/10 backdrop-blur-sm ">
                <h3 className="font-medium text-gray-900 text-base sm:text-lg flex items-center dark:text-white">
                  Don't change for AI—make it work for you <span className="inline-block ml-2 px-2 py-0.5 bg-blue-50 text-[#387E89] text-xs rounded-full dark:bg-blue-900/30 dark:text-blue-300">Clinician-First</span>
                </h3>
              </div>
              
              <Tabs defaultValue="ai-scribe" className="w-full">
                <div className="px-3 sm:px-4 pt-3 sm:pt-4">
                  {/* Enhanced tab navigation with two-line labels for desktop/laptop */}
                  <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 bg-gray-50/70 p-1 rounded-lg dark:bg-gray-800/30">
                    {featureTabs.map(tab => <TabsTrigger key={tab.id} value={tab.id} className="flex items-center justify-center px-2 py-2 md:py-1.5 gap-1 sm:gap-1.5 my-1 text-center rounded-lg data-[state=active]:shadow-none text-xs md:text-[0.7rem] font-medium dark:text-gray-300 dark:data-[state=active]:text-white">
                        <span className="flex items-center justify-center shrink-0">{tab.icon}</span>
                        <span className="md:text-[0.7rem] md:leading-tight md:flex md:flex-wrap md:justify-center md:h-auto md:max-w-[90px]">{tab.title}</span>
                      </TabsTrigger>)}
                  </TabsList>
                </div>
                
                <div className="p-3 sm:p-4">
                  {featureTabs.map(tab => <TabsContent key={tab.id} value={tab.id} className="mt-2 focus-visible:outline-none focus-visible:ring-0">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 items-start p-2 transition-all duration-300">
                          <div className="w-full space-y-2">
                            <h3 className="text-lg sm:text-xl font-medium text-[#143151] dark:text-blue-300">{tab.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{tab.description}</p>
                            
                            <div className="flex items-center gap-2 mt-2 sm:mt-4 bg-blue-50/50 p-2 sm:p-3 rounded-lg dark:bg-blue-900/20">
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#387E89] dark:text-[#5abecb]" />
                              <span className="font-medium text-sm sm:text-base text-[#387E89] dark:text-[#5abecb]">{tab.benefit}</span>
                              
                              <div className="ml-auto">
                                <VoiceAnimation />
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </TabsContent>)}
                </div>
              </Tabs>
            </Card>
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
      }} className="mt-10 sm:mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 overflow-hidden p-3 sm:p-4">
            <Typography variant="h6" className="text-center text-gray-800 font-medium mb-2 sm:mb-4 text-sm sm:text-base">S10.AI is recommended by</Typography>
            
            <Box sx={{
            overflow: "hidden",
            width: '100%',
            '& .marquee-container': {
              minHeight: {
                xs: '32px',
                sm: '40px',
                md: '48px'
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
                    xs: 2,
                    sm: 3,
                    md: 5
                  },
                  display: 'flex',
                  alignItems: 'center'
                }}>
                      <img src={logo} alt={`Healthcare partner ${index + 1}`} style={{
                    width: 'auto',
                    height: isMobile ? '24px' : '32px',
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
