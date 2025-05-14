
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Users, Clock, FileText, Shield, MessageSquare, Database, CheckCircle } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useWindowSize } from '@/hooks/use-window-size';
import { useIsMobile } from '@/hooks/use-mobile';
import { shadowStyles } from '@/lib/shadow-utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { AnimatedFeatureCard } from '../crush-ai/AnimatedFeatureCard';

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

export const FirstSection = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("ai-scribe");
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

  // Feature tab data
  const featureTabs = [{
    id: "ai-scribe",
    title: "AI Medical Scribe",
    icon: <FileText className="w-5 h-5" />,
    description: "Automated documentation that captures the full patient story while you focus on care.",
    benefit: "Save 2+ hours per day",
    color: "#3B82F6"
  }, {
    id: "patient-engagement",
    title: "AI Staffing Agent",
    icon: <MessageSquare className="w-5 h-5" />,
    description: "AI-powered virtual staff member that handles administrative tasks and improves clinical workflow efficiency.",
    benefit: "Reduce admin workload by 40%",
    color: "#10B981"
  }, {
    id: "custom-agents",
    title: "Custom AI Agents",
    icon: <Users className="w-5 h-5" />,
    description: "Purpose-built AI assistants that adapt to your specialty and workflow preferences.",
    benefit: "30+ specialty workflows",
    color: "#8B5CF6"
  }, {
    id: "ehr-integrations",
    title: "EHR Integrations",
    icon: <Database className="w-5 h-5" />,
    description: "Works with any EHR system and connects to 7000+ apps.",
    benefit: "Seamless connectivity",
    color: "#EC4899"
  }];
  
  return <section className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 overflow-hidden relative" ref={sectionRef}>
      {/* Healthcare-themed background elements - kept subtle */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-teal-100/10 rounded-full blur-3xl"></div>
      
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Updated grid with card taking less space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left column - Main heading and CTA - expanded to 7 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black">
                AI Scribing &<br />
                <span className="text-black">
                  AI Staffing Agent
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
          
          {/* Right column - COMPLETELY REDESIGNED FEATURE SHOWCASE CARD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:col-span-5"
          >
            <Card 
              className="backdrop-blur-sm bg-white/80 border-0 overflow-visible shadow-2xl rounded-2xl"
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-teal-200 to-blue-200 rounded-full opacity-60 blur-xl"></div>
              
              {/* Header with glowing effect */}
              <div className="relative p-5 rounded-t-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-pulse"></div>
                <h3 className="relative z-10 font-semibold text-gray-900 text-lg flex items-center dark:text-white">
                  Don't change for AI—make it work for you
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="inline-flex items-center ml-2 px-2.5 py-0.5 bg-gradient-to-r from-blue-50 to-blue-100 text-[#387E89] text-xs rounded-full border border-blue-200/30 shadow-sm"
                  >
                    Clinician-First
                  </motion.span>
                </h3>
              </div>
              
              <Tabs defaultValue="ai-scribe" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                {/* Improved tabs navigation */}
                <div className="px-5 pt-5">
                  <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 bg-gray-50/80 p-2 rounded-xl border border-gray-100 gap-2">
                    {featureTabs.map((tab, index) => (
                      <TabsTrigger 
                        key={tab.id}
                        value={tab.id} 
                        className="group flex flex-col items-center justify-center px-2 py-3 gap-2 rounded-lg border border-transparent data-[state=active]:border-gray-200/50 data-[state=active]:shadow-sm data-[state=active]:bg-white text-xs font-medium relative transition-all duration-300 cursor-pointer hover:bg-white/80"
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <div 
                          className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all group-hover:shadow-md
                            ${activeTab === tab.id 
                              ? `shadow-inner bg-white text-white` 
                              : 'bg-white/60 text-gray-500'}`}
                          style={{
                            background: activeTab === tab.id ? `linear-gradient(135deg, ${tab.color}, ${tab.color}CC)` : '',
                            boxShadow: activeTab === tab.id ? `0 2px 8px ${tab.color}40` : ''
                          }}
                        >
                          {tab.icon}
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <span className={`text-xs font-medium leading-tight text-center ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-600'}`}>
                            {tab.title.split(' ')[0]}<br/>{tab.title.split(' ').slice(1).join(' ')}
                          </span>
                        </div>
                        
                        {/* Active indicator dot */}
                        {activeTab === tab.id && (
                          <motion.div 
                            layoutId="activeTabIndicator"
                            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                            style={{ background: tab.color }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                {/* Enhanced tab content with animations */}
                <div className="p-5">
                  {featureTabs.map((tab) => (
                    <TabsContent 
                      key={tab.id} 
                      value={tab.id} 
                      className="mt-2 focus-visible:outline-none focus-visible:ring-0"
                    >
                      <AnimatedFeatureCard
                        icon={tab.icon}
                        title={tab.title}
                        description={tab.description}
                        primaryColor={tab.color}
                        secondaryColor={`${tab.color}CC`}
                        tertiaryColor={`${tab.color}33`}
                        iconBackground={`${tab.color}10`}
                        className="border-0 shadow-none"
                      >
                        <div className="flex items-center gap-3 mt-5 bg-gradient-to-r from-gray-50 to-gray-100/80 p-4 rounded-xl border border-gray-100 shadow-sm">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ color: tab.color }}
                            className="flex-shrink-0"
                          >
                            <CheckCircle className="w-5 h-5" />
                          </motion.div>
                          <motion.span 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="font-medium text-sm"
                            style={{ color: tab.color }}
                          >
                            {tab.benefit}
                          </motion.span>
                          
                          <div className="ml-auto">
                            <VoiceAnimation />
                          </div>
                        </div>
                      </AnimatedFeatureCard>
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
          className="mt-8 sm:mt-12 lg:mt-16"
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
    </section>;
};
