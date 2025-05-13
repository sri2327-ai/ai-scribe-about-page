
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Stethoscope, Clock, PenTool, CheckCircle, Shield, FileText, MessageSquare, Users, Database, Apps, ChartBar } from "lucide-react";
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

  // Feature tab data
  const featureTabs = [
    {
      id: "ai-scribe",
      title: "AI Medical Scribe",
      icon: <FileText className="w-6 h-6 mr-2" />,
      content: {
        title: "Intelligent Medical Documentation",
        description: "Automated clinical documentation that captures the full patient story while you focus on care.",
        stats: [
          { label: "Time Saved", value: "2+ hrs/day" },
          { label: "Accuracy", value: "99.5%" }
        ],
        bulletPoints: [
          "Real-time documentation during visits",
          "Structured clinical narratives",
          "Auto-populated medical history"
        ]
      }
    },
    {
      id: "patient-engagement",
      title: "Patient Engagement",
      icon: <MessageSquare className="w-6 h-6 mr-2" />,
      content: {
        title: "Enhanced Patient Interactions",
        description: "Seamless communication tools that improve patient satisfaction and clinical outcomes.",
        stats: [
          { label: "Satisfaction", value: "↑ 20%" },
          { label: "Engagement", value: "↑ 35%" }
        ],
        bulletPoints: [
          "Automated appointment reminders",
          "Personalized care instructions",
          "Simplified follow-up communications"
        ]
      }
    },
    {
      id: "custom-agents",
      title: "Custom AI Agents",
      icon: <Users className="w-6 h-6 mr-2" />,
      content: {
        title: "Tailored Clinical Assistants",
        description: "Purpose-built AI agents that adapt to your specialty and workflow preferences.",
        stats: [
          { label: "Specialties", value: "30+" },
          { label: "Customization", value: "100%" }
        ],
        bulletPoints: [
          "Specialty-specific terminology",
          "Customizable documentation templates",
          "Workflow optimization tools"
        ]
      }
    },
    {
      id: "ehr-integration",
      title: "Any EHR",
      icon: <Database className="w-6 h-6 mr-2" />,
      content: {
        title: "Universal EHR Compatibility",
        description: "Works with your existing systems without disrupting your workflow.",
        stats: [
          { label: "EHR Systems", value: "40+" },
          { label: "Setup Time", value: "< 1 day" }
        ],
        bulletPoints: [
          "Epic, Cerner, Allscripts integration",
          "Bi-directional data syncing",
          "No workflow disruptions"
        ]
      }
    },
    {
      id: "apps-ecosystem",
      title: "7000+ Apps",
      icon: <Apps className="w-6 h-6 mr-2" />,
      content: {
        title: "Comprehensive App Ecosystem",
        description: "Integrate with thousands of healthcare and productivity applications.",
        stats: [
          { label: "Integrations", value: "7000+" },
          { label: "Categories", value: "25+" }
        ],
        bulletPoints: [
          "Calendar & scheduling apps",
          "Telehealth platforms",
          "Practice management systems"
        ]
      }
    },
    {
      id: "analytics",
      title: "Practice Insights",
      icon: <ChartBar className="w-6 h-6 mr-2" />,
      content: {
        title: "Data-Driven Practice Management",
        description: "Actionable insights to improve clinical efficiency and patient outcomes.",
        stats: [
          { label: "Metrics", value: "50+" },
          { label: "ROI", value: "3.5x" }
        ],
        bulletPoints: [
          "Clinical efficiency tracking",
          "Revenue optimization",
          "Quality measure reporting"
        ]
      }
    }
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
          
          {/* Right column - Interactive feature tabs */}
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
              
              {/* Feature tabs showcase */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-center text-sm font-medium">
                  Clinical Solutions That Save You Time
                </div>
                
                <Tabs defaultValue="ai-scribe" className="w-full">
                  <div className="px-4 pt-4 overflow-x-auto">
                    <TabsList className="w-full justify-start md:justify-between overflow-x-auto">
                      {featureTabs.map((tab) => (
                        <TabsTrigger 
                          key={tab.id} 
                          value={tab.id}
                          className="flex items-center whitespace-nowrap px-3 py-1.5"
                        >
                          {tab.icon}
                          <span className="hidden sm:inline">{tab.title}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  
                  <div className="p-6">
                    {featureTabs.map((tab) => (
                      <TabsContent 
                        key={tab.id} 
                        value={tab.id}
                        className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-[#143151]">{tab.content.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">{tab.content.description}</p>
                            </div>
                            <div className="hidden md:flex">
                              {tab.icon}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            {tab.content.stats.map((stat, idx) => (
                              <div key={idx} className="bg-gray-50/80 p-2 rounded-lg text-center">
                                <div className="text-lg font-bold text-[#387E89]">{stat.value}</div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                          
                          <ul className="space-y-1.5 mt-3">
                            {tab.content.bulletPoints.map((point, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-[#387E89] mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
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
                            className="w-16"
                          >
                            <VoiceAnimation />
                          </motion.div>
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
