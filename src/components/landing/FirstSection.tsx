
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Stethoscope, Clock, FileText, Shield, CheckCircle, MessageSquare, Users, Database } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useWindowSize } from '@/hooks/use-window-size';
import { useIsMobile } from '@/hooks/use-mobile';
import { shadowStyles } from '@/lib/shadow-utils';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];
export const FirstSection = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { width } = useWindowSize();
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
    icon: <Stethoscope className="w-5 h-5 text-[#387E89]" />,
    text: "Focus on patients"
  }, {
    icon: <Shield className="w-5 h-5 text-[#387E89]" />,
    text: "HIPAA compliant"
  }, {
    icon: <CheckCircle className="w-5 h-5 text-[#387E89]" />,
    text: "Integrates with your EHR"
  }];

  // Feature tab data - updated "Patient Engagement Agent" to "Patient Agent"
  const featureTabs = [{
    id: "ai-scribe",
    title: "AI Medical Scribe",
    icon: <FileText className="w-5 h-5" />,
    description: "Automated documentation that captures the full patient story while you focus on care.",
    benefit: "Save 2+ hours per day",
    color: "#046f90" // Adding colors for each tab
  }, {
    id: "patient-engagement",
    title: "Patient Agent",
    icon: <MessageSquare className="w-5 h-5" />,
    description: "AI-powered communication assistant that improves patient satisfaction and clinical outcomes.",
    benefit: "Boost satisfaction by +60%",
    color: "#387E89"
  }, {
    id: "custom-agents",
    title: "Custom AI Agents",
    icon: <Users className="w-5 h-5" />,
    description: "Purpose-built AI assistants that adapt to your specialty and workflow preferences.",
    benefit: "30+ specialty workflows",
    color: "#143151"
  }, {
    id: "ehr-integrations",
    title: "EHR Integrations",
    icon: <Database className="w-5 h-5" />,
    description: "Works with any EHR system and connects to 7000+ healthcare apps.",
    benefit: "Seamless connectivity",
    color: "#5192AE"
  }];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 overflow-hidden relative" ref={sectionRef}>
      {/* Healthcare-themed background elements - kept subtle */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-teal-100/10 rounded-full blur-3xl"></div>
      
      {/* Main content container - improved for true 50-50 split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Updated grid to true 50-50 split on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left column - Main heading and CTA - exactly 50% on desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
                AI Scribing &<br />
                <span className="bg-gradient-to-r from-[#143151] to-[#387E89] text-transparent bg-clip-text">
                  Patient Engagement
                </span><br />
                Built for Clinicians<br />
                Like You
              </h1>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 md:pt-4">
                {clinicianBenefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100"
                  >
                    {benefit.icon}
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 md:pt-8">
                <Button 
                  onMouseEnter={() => setIsHovered(true)} 
                  onMouseLeave={() => setIsHovered(false)} 
                  className="rounded-full px-6 py-6 text-base sm:text-lg font-medium bg-gradient-to-r from-[#143151] to-[#387E89] hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 text-white"
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
            </div>
          </motion.div>
          
          {/* Right column - Feature cards - exactly 50% on desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <Card className={`bg-white border border-gray-100/80 transition-all duration-300 overflow-hidden rounded-xl ${shadowStyles.brandGlow} hover:-translate-y-1 dark:bg-gray-900/95 dark:border-gray-800`}>
              <div className="p-4 bg-gradient-to-r from-[#f8f9fc] to-[#f1f5fa] border-b border-gray-100 dark:bg-gradient-to-r dark:from-gray-800/80 dark:to-gray-800/50 dark:border-gray-700/50">
                <h3 className="font-medium text-gray-900 text-lg sm:text-xl flex items-center gap-2 dark:text-white">
                  <span className="relative">
                    Don't adapt to your AI—make it work for you
                    <motion.span 
                      initial={{ width: 0 }} 
                      animate={{ width: '100%' }} 
                      transition={{ delay: 0.6, duration: 1 }}
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full"
                    />
                  </span>
                  <span className="inline-block ml-2 px-3 py-1 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 text-[#387E89] text-xs rounded-full font-semibold uppercase tracking-wide border border-[#387E89]/20 dark:bg-blue-900/30 dark:text-blue-300">Clinician-First</span>
                </h3>
              </div>
              
              <Tabs defaultValue="ai-scribe" className="w-full">
                <div className="px-4 pt-4">
                  {/* Enhanced tabs navigation */}
                  <TabsList className="w-full grid grid-cols-2 md:flex md:flex-wrap overflow-visible bg-gray-50/70 p-1.5 rounded-lg gap-1 dark:bg-gray-800/30">
                    {featureTabs.map((tab, index) => (
                      <TabsTrigger 
                        key={tab.id} 
                        value={tab.id} 
                        className="flex items-center justify-center px-3 py-2.5 gap-2 text-center rounded-lg data-[state=active]:shadow-md text-sm font-medium whitespace-normal sm:whitespace-nowrap dark:text-gray-300 dark:data-[state=active]:text-white transition-all duration-200 relative group"
                      >
                        <span 
                          className="flex items-center justify-center shrink-0 bg-white/80 h-8 w-8 rounded-full shadow-sm group-data-[state=active]:bg-[var(--tab-color)] group-data-[state=active]:text-white transition-all duration-200"
                          style={{ 
                            // Using CSS custom property with type assertion to fix the TypeScript error
                            '--tab-color': tab.color
                          } as React.CSSProperties}
                        >
                          {tab.icon}
                        </span>
                        <span className="truncate font-medium">{tab.title}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                <div className="p-4">
                  {featureTabs.map((tab) => (
                    <TabsContent 
                      key={tab.id} 
                      value={tab.id} 
                      className="mt-2 focus-visible:outline-none focus-visible:ring-0"
                    >
                      <CardContent className="p-0">
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col md:flex-row gap-4 items-start p-4 bg-gradient-to-br from-white to-gray-50/80 rounded-lg border border-gray-100/80 dark:from-gray-900/60 dark:to-gray-800/60 dark:border-gray-700/30"
                        >
                          <div className="w-full space-y-3">
                            <div className="flex items-center gap-2">
                              <div className="p-2 rounded-lg bg-white shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                                {tab.icon}
                              </div>
                              <h3 className="text-xl font-semibold" style={{ color: tab.color }}>{tab.title}</h3>
                            </div>
                            
                            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">{tab.description}</p>
                            
                            <div className="flex items-center gap-3 mt-4 bg-gradient-to-r from-[#046f90]/5 to-[#387E89]/10 p-3 rounded-lg border border-[#387E89]/10">
                              <CheckCircle className="w-5 h-5 text-[#387E89]" />
                              <span className="font-medium text-[#387E89]">{tab.benefit}</span>
                              
                              <div className="ml-auto">
                                <VoiceAnimation />
                              </div>
                            </div>
                            
                            <div className="pt-2">
                              <Button 
                                variant="outline" 
                                className="rounded-full border-[#387E89]/20 text-[#387E89] hover:bg-[#387E89]/10 hover:text-[#046f90] transition-colors"
                              >
                                Learn more
                                <ArrowRight className="h-4 w-4 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      </CardContent>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </Card>
          </motion.div>
        </div>
        
        {/* Trusted by section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 sm:mt-16"
        >
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
                {companyLogos.map((logo, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.1 }} 
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Box sx={{
                      mx: {
                        xs: 2,
                        sm: 3,
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
                          height: isMobile ? '24px' : '32px',
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
