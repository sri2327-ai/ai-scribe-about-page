import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Users, Clock, FileText, Shield, MessageSquare, Database, CheckCircle } from "lucide-react";
import { VoiceAnimation } from './animations/VoiceAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useWindowSize } from '@/hooks/use-window-size';
import { useIsMobile } from '@/hooks/use-mobile';
import { shadowStyles } from '@/lib/shadow-utils';
import { LazyLoad } from '@/components/ui/lazy-load';
const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];
export const FirstSection = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
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
    color: "#143151"
  }, {
    id: "patient-engagement",
    title: "AI Staffing Agent",
    icon: <MessageSquare className="w-5 h-5" />,
    description: "AI-powered virtual staff member that handles administrative tasks and improves clinical workflow efficiency.",
    benefit: "Reduce admin workload by 40%",
    color: "#387E89"
  }, {
    id: "custom-agents",
    title: "Custom AI Agents",
    icon: <Users className="w-5 h-5" />,
    description: "Purpose-built AI assistants that adapt to your specialty and workflow preferences.",
    benefit: "30+ specialty workflows",
    color: "#5192AE"
  }, {
    id: "ehr-integrations",
    title: "EHR Integrations",
    icon: <Database className="w-5 h-5" />,
    description: "Works with any EHR system and connects to 7000+ apps.",
    benefit: "Seamless connectivity",
    color: "#143151"
  }];

  // Handle tab click (manual interaction)
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };
  return <section className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 overflow-hidden relative" ref={sectionRef}>
      {/* Healthcare-themed background elements - kept subtle */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-teal-100/10 rounded-full blur-3xl"></div>
      
      {/* Main content container with improved responsive spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10">
        {/* Updated grid to true 50-50 split on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Left column - Main heading and CTA */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.1
        }} className="space-y-5 md:space-y-7">
            <div className="space-y-4 md:space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black">
                AI Scribing &<br />
                <span className="text-black">
                  AI Staffing Agent
                </span><br />
                Built for Clinicians<br />
                Like You
              </h1>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 md:pt-3">
                {clinicianBenefits.map((benefit, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.5
              }} className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                    {benefit.icon}
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{benefit.text}</span>
                  </motion.div>)}
              </div>
              
              <motion.div className="pt-5 md:pt-7" initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5,
              duration: 0.5
            }}>
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
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column - Feature workflow now wrapped with LazyLoad component */}
          <LazyLoad threshold={0.1} rootMargin="200px">
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
              {/* Reducing the max-height and making the card more compact */}
              <Card className={`bg-white/90 border-0 border-gray-100 transition-all duration-300 overflow-hidden ${shadowStyles.brandGlow} ring-1 ring-gray-100/70 backdrop-blur-sm hover:shadow-xl dark:bg-gray-900/95 dark:border-gray-800 max-w-md mx-auto max-h-[420px]`}>
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500/10 to-pink-500/10 backdrop-blur-sm">
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base flex items-center justify-between flex-wrap dark:text-white">
                    <span className="pr-2">Don't change for AI—make it work for you</span> 
                    <span className="inline-flex items-center justify-center px-2.5 py-0.5 text-xs xs:text-sm sm:text-sm rounded-full bg-[#D3E4FD] text-[#143151] dark:bg-[#D3E4FD]/90 whitespace-nowrap mt-1 xs:mt-0 font-medium">
                      Clinician-First
                    </span>
                  </h3>
                </div>
                
                <div className="p-2 sm:p-3">
                  {/* Enhanced feature tabs container with improved visual hierarchy */}
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-[#F8FAFF] to-[#F2F8FF] backdrop-blur-sm rounded-lg border border-blue-50 shadow-sm">
                    {featureTabs.map((tab, index) => {
                    const isActive = activeTabIndex === index;
                    return <motion.div key={tab.id} animate={{
                      opacity: isActive ? 1 : 0.75,
                      scale: isActive ? 1 : 0.98
                    }} transition={{
                      duration: 0.3,
                      ease: "easeOut"
                    }} className={`relative overflow-hidden cursor-pointer ${isActive ? 'z-10' : 'z-0'} mb-2 last:mb-0`} onClick={() => handleTabClick(index)}>
                          <motion.div className={`flex flex-col rounded-lg p-3 ${isActive ? 'border border-blue-100 bg-white shadow-md' : 'border border-transparent bg-gray-50/50'}`} whileHover={{
                        scale: 1.01,
                        backgroundColor: isActive ? 'rgba(255,255,255,1)' : 'rgba(243,244,246,0.8)',
                        transition: {
                          duration: 0.2
                        }
                      }}>
                            <div className="flex items-center gap-2.5">
                              <motion.div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{
                            backgroundColor: isActive ? `${tab.color}25` : `${tab.color}15`
                          }} whileHover={{
                            scale: 1.1,
                            backgroundColor: `${tab.color}35`,
                            transition: {
                              duration: 0.2
                            }
                          }}>
                                {React.cloneElement(tab.icon, {
                              style: {
                                color: tab.color
                              },
                              className: "w-4 h-4"
                            })}
                              </motion.div>
                              <div>
                                <motion.h3 className={`text-sm font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                                  {tab.title}
                                </motion.h3>
                              </div>
                            </div>
                            
                            <AnimatePresence>
                              {isActive && <motion.div initial={{
                            opacity: 0,
                            height: 0
                          }} animate={{
                            opacity: 1,
                            height: 'auto'
                          }} exit={{
                            opacity: 0,
                            height: 0
                          }} transition={{
                            duration: 0.3
                          }} className="overflow-hidden">
                                  <motion.p initial={{
                              opacity: 0,
                              y: 5
                            }} animate={{
                              opacity: 1,
                              y: 0
                            }} transition={{
                              delay: 0.1
                            }} className="text-xs text-gray-600 mt-2.5 ml-10 leading-relaxed">
                                    {tab.description}
                                  </motion.p>
                                  
                                  <div className="ml-10 mt-2.5">
                                    <div className="flex items-center gap-2 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/15 p-2 rounded-lg">
                                      <CheckCircle className="w-3.5 h-3.5 text-[#387E89]" />
                                      <span className="font-medium text-xs text-[#143151]">{tab.benefit}</span>
                                      
                                      <div className="ml-auto">
                                        <VoiceAnimation size={isMobile ? "xs" : "sm"} color={tab.color} isAnimating={isActive} />
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>}
                            </AnimatePresence>
                          </motion.div>
                        </motion.div>;
                  })}
                  </div>

                  {/* Enhanced navigation indicator dots */}
                  <div className="flex justify-center gap-2.5 mt-3.5">
                    {featureTabs.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleTabClick(idx)} 
                        className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 ${
                          activeTabIndex === idx 
                            ? 'w-6 h-2 bg-[#387E89] rounded-full' 
                            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full'
                        }`}
                        aria-label={`View ${featureTabs[idx].title}`} 
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </LazyLoad>
        </div>
        
        {/* Trusted by section - improved to fit screen better */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.6
      }} className="mt-8 sm:mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 overflow-hidden p-3">
            <Typography variant="h6" className="text-center text-gray-800 font-medium mb-2 text-xs sm:text-sm px-2 truncate">
              S10.AI is recommended by
            </Typography>
            
            <Box sx={{
            overflow: "hidden",
            width: '100%',
            '& .marquee-container': {
              minHeight: {
                xs: '24px',
                sm: '28px',
                md: '32px'
              }
            }
          }}>
              <div className="overflow-hidden w-full">
                <Marquee gradient={true} gradientWidth={50} speed={25}>
                  {companyLogos.map((logo, index) => <motion.div key={index} whileHover={{
                  scale: 1.1
                }} transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}>
                      <Box sx={{
                    mx: {
                      xs: 1.5,
                      sm: 2,
                      md: 3
                    },
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                        <img src={logo} alt={`Healthcare partner ${index + 1}`} style={{
                      width: 'auto',
                      height: isMobile ? '18px' : '24px',
                      objectFit: 'contain'
                    }} />
                      </Box>
                    </motion.div>)}
                </Marquee>
              </div>
            </Box>
          </div>
        </motion.div>
      </div>
    </section>;
};
