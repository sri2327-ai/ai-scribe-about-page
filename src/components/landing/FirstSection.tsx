import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Users, Clock, FileText, Shield, MessageSquare, Database, CheckCircle, Star, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWindowSize } from '@/hooks/use-window-size';
import { useIsMobile } from '@/hooks/use-mobile';
import OptimizedImage from '@/components/ui/optimized-image';

// Simplified voice animation component
const VoiceAnimation = ({
  size = "md",
  color = "#387E89",
  isAnimating = true
}) => {
  const barCount = size === "xs" ? 3 : size === "sm" ? 4 : 5;
  const maxHeight = size === "xs" ? 8 : size === "sm" ? 12 : 16;
  return <div className="flex items-end gap-0.5 h-6" aria-hidden="true">
      {Array(barCount).fill(0).map((_, idx) => <div key={idx} className={`rounded-full ${isAnimating ? 'animate-pulse' : ''}`} style={{
      backgroundColor: color,
      width: "2px",
      height: isAnimating ? `${Math.max(2, Math.random() * maxHeight)}px` : "2px",
      animationDelay: `${idx * 100}ms`
    }} />)}
    </div>;
};
const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];
export const FirstSection = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const {
    width
  } = useWindowSize();
  const isMobile = useIsMobile();
  const clinicianBenefits = [{
    icon: <Clock className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "75% faster charting",
    color: "from-blue-500 to-blue-600"
  }, {
    icon: <Users className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "AI staffing assistance",
    color: "from-teal-500 to-teal-600"
  }, {
    icon: <Shield className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "HIPAA compliant",
    color: "from-green-500 to-green-600"
  }];

  // Simplified feature tabs
  const featureTabs = [{
    id: "ai-scribe",
    title: "AI Medical Scribe",
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    description: "Automated documentation that captures the full patient story while you focus on care.",
    benefit: "Save 2+ hours per day",
    color: "#143151"
  }, {
    id: "patient-engagement",
    title: "AI Staffing Agent",
    icon: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />,
    description: "AI-powered virtual staff member that handles administrative tasks and improves clinical workflow efficiency.",
    benefit: "Reduce admin workload by 40%",
    color: "#387E89"
  }, {
    id: "custom-agents",
    title: "Custom AI Agents",
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
    description: "Purpose-built AI assistants that adapt to your specialty and workflow preferences.",
    benefit: "30+ specialty workflows",
    color: "#5192AE"
  }, {
    id: "ehr-integrations",
    title: "EHR Integrations",
    icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    description: "Works with any EHR system and connects to 7000+ apps.",
    benefit: "Seamless connectivity",
    color: "#143151"
  }];
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };
  return <section id="ai-solutions-overview" aria-labelledby="hero-heading" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-teal-50/40" ref={sectionRef}>
      {/* Enhanced SEO-friendly content for search engines - Comprehensive coverage */}
      <div className="sr-only">
        <h1 id="hero-heading">S10.AI - AI Scribing & AI Staffing Agent Built for Clinicians</h1>
        <p>
          S10.AI provides innovative AI-powered solutions for healthcare professionals, including AI medical scribes, 
          AI staffing agents, and custom AI agents designed specifically for clinical workflows. Our solutions help 
          clinicians save time, reduce administrative burden, and improve patient care.
        </p>
        
        {/* Core Benefits Section */}
        <section>
          <h2>Core Benefits for Healthcare Providers</h2>
          <ul>
            <li>
              <h3>75% Faster Charting</h3>
              <p>Automated medical documentation reduces charting time by up to 75%, allowing clinicians to spend more time with patients and less time on paperwork.</p>
            </li>
            <li>
              <h3>AI Staffing Assistance</h3>
              <p>Virtual AI staff members handle administrative tasks, appointment scheduling, patient communication, and workflow optimization to reduce staffing shortages.</p>
            </li>
            <li>
              <h3>HIPAA Compliant Security</h3>
              <p>All AI solutions are fully HIPAA compliant with enterprise-grade security, ensuring patient data protection and regulatory compliance.</p>
            </li>
          </ul>
        </section>
        
        {/* AI Solutions Detailed Description */}
        <section>
          <h2>S10.AI Solutions Portfolio</h2>
          
          <article>
            <h3>AI Medical Scribe</h3>
            <p>Automated documentation that captures the full patient story while you focus on care. Our AI medical scribe listens to patient-clinician conversations and generates accurate, comprehensive clinical notes in real-time.</p>
            <h4>Key Features:</h4>
            <ul>
              <li>Real-time conversation transcription and analysis</li>
              <li>Automated clinical note generation</li>
              <li>Integration with major EHR systems</li>
              <li>Specialty-specific documentation templates</li>
              <li>Voice recognition and natural language processing</li>
            </ul>
            <p><strong>Time Savings:</strong> Save 2+ hours per day on documentation</p>
            <a href="/solutions/ai-medical-scribe">Learn more about AI Medical Scribe</a>
          </article>
          
          <article>
            <h3>AI Staffing Agent</h3>
            <p>AI-powered virtual staff member that handles administrative tasks and improves clinical workflow efficiency. Our AI staffing agent works 24/7 to manage appointments, patient communications, and administrative workflows.</p>
            <h4>Key Features:</h4>
            <ul>
              <li>Automated appointment scheduling and management</li>
              <li>Patient communication and follow-up</li>
              <li>Insurance verification and prior authorization</li>
              <li>Administrative task automation</li>
              <li>Multi-language support for diverse patient populations</li>
            </ul>
            <p><strong>Efficiency Gain:</strong> Reduce admin workload by 40%</p>
            <a href="/solutions/ai-staffing-agent">Learn more about AI Staffing Agent</a>
          </article>
          
          <article>
            <h3>Custom AI Agents</h3>
            <p>Purpose-built AI assistants that adapt to your specialty and workflow preferences. These custom agents are trained on specialty-specific protocols and can handle unique workflows for different medical specialties.</p>
            <h4>Key Features:</h4>
            <ul>
              <li>Specialty-specific AI training and optimization</li>
              <li>Custom workflow integration</li>
              <li>Adaptive learning from practice patterns</li>
              <li>Personalized clinical decision support</li>
              <li>Custom terminology and protocol recognition</li>
            </ul>
            <p><strong>Specialty Coverage:</strong> 30+ specialty workflows supported</p>
            <a href="/solutions/custom-ai-agents">Learn more about Custom AI Agents</a>
          </article>
          
          <article>
            <h3>EHR Integrations</h3>
            <p>Works with any EHR system and connects to 7000+ apps. Our integration platform ensures seamless connectivity with existing healthcare technology infrastructure.</p>
            <h4>Key Features:</h4>
            <ul>
              <li>Universal EHR compatibility</li>
              <li>API-based integration with 7000+ healthcare apps</li>
              <li>Real-time data synchronization</li>
              <li>Custom integration development</li>
              <li>Cloud-based and on-premise deployment options</li>
            </ul>
            <p><strong>Integration Quality:</strong> Seamless connectivity with existing systems</p>
            <a href="/solutions/ehr-integrations">Learn more about EHR Integrations</a>
          </article>
        </section>
        
        {/* Trusted by Healthcare Organizations */}
        <section>
          <h2>Trusted by Leading Healthcare Organizations</h2>
          <p>S10.AI is recommended by leading healthcare organizations and trusted by 1,000+ healthcare providers worldwide. Our solutions have been implemented across various practice sizes, from solo practitioners to large healthcare systems.</p>
          <ul>
            <li>1,000+ healthcare providers using S10.AI solutions</li>
            <li>Proven results across multiple specialties</li>
            <li>Enterprise-grade security and compliance</li>
            <li>24/7 customer support and implementation assistance</li>
          </ul>
        </section>
      </div>

      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-blue-100/20"></div>
      
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-10 md:py-14 lg:py-20 relative z-10">
        {/* Hero section - Fixed mobile layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 lg:items-center min-h-[85vh] sm:min-h-[80vh]">
          
          {/* Left column - Main content - Always first on mobile */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} className="space-y-4 sm:space-y-6 lg:space-y-8 order-1">
            {/* Trust indicator */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-sm">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-xs sm:text-sm font-medium text-yellow-700">Trusted by 1,000+ Healthcare Providers</span>
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
            </motion.div>

            {/* Main headline */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.9] tracking-tight text-left text-black">
                <span className="block">
                  AI Scribing &
                </span>
                <span className="block text-black">
                  AI Staffing Agent
                </span>
                <span className="block">Built for</span>
                <span className="block text-black">
                  Clinicians Like You
                </span>
              </motion.h1>
            </div>
            
            {/* Benefit pills */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="flex flex-wrap gap-2 sm:gap-3 justify-start">
              {clinicianBenefits.map((benefit, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.6 + index * 0.1,
              duration: 0.5
            }} className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-3 bg-white rounded-full shadow-lg border border-gray-300 transform hover:scale-105 transition-all duration-300">
                  {React.cloneElement(benefit.icon, {
                className: "w-3 h-3 sm:w-4 sm:h-4",
                style: {
                  background: 'linear-gradient(135deg, #143151, #387E89, #5192AE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }
              })}
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">{benefit.text}</span>
                </motion.div>)}
            </motion.div>
            
            {/* CTA section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.7
          }} className="pt-2 sm:pt-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="group relative w-full sm:w-auto rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r from-[#143151] via-[#387E89] to-[#5192AE] hover:shadow-2xl hover:shadow-[#387E89]/25 transform hover:scale-105 transition-all duration-300 text-white border-2 border-white/20 overflow-hidden">
                  <motion.div animate={isHovered ? {
                  x: [0, 5, 0]
                } : {}} transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0
                }} className="flex items-center justify-center gap-2 sm:gap-3 relative z-10">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                    Request A Demo
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Button>
                
                <div className="text-xs sm:text-sm text-gray-600 pt-1 sm:pt-2 text-left">
                  <p className="font-medium">✓ Free 15-minute consultation</p>
                  <p>✓ Custom implementation plan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Feature showcase - Always second on mobile */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95,
          x: 20
        }} animate={{
          opacity: 1,
          scale: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative order-2 mt-8 lg:mt-0">
            <Card className="relative bg-white/95 backdrop-blur-sm border-0 shadow-2xl shadow-[#387E89]/10 ring-1 ring-gray-200/50 overflow-hidden w-full max-w-md sm:max-w-lg mx-auto">
              {/* Header */}
              <div className="relative p-3 sm:p-4 bg-gradient-to-r from-[#143151] via-[#387E89] to-[#5192AE] text-white">
                <div className="relative z-10">
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg flex items-center justify-between flex-wrap gap-2">
                    <span className="flex-1 min-w-0">Don't change for AI—make it work for you</span>
                    <span className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border border-white/30 whitespace-nowrap">
                      Clinician-First
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1">Purpose-built for healthcare professionals</p>
                </div>
              </div>
              
              {/* Content area */}
              <div className="p-3 sm:p-4 lg:p-6">
                <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-xl p-3 sm:p-4 lg:p-5 border border-blue-100/50 shadow-inner">
                  <div className="space-y-2 sm:space-y-3">
                    {featureTabs.map((tab, index) => <motion.div key={tab.id} initial={{
                    opacity: 0,
                    x: -10
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: 0.8 + index * 0.1
                  }} onClick={() => handleTabClick(index)} className={`group relative cursor-pointer rounded-xl p-2.5 sm:p-3 lg:p-4 transition-all duration-300 ${activeTabIndex === index ? 'bg-white shadow-lg ring-2 ring-[#387E89]/20 scale-[1.02]' : 'bg-white/50 hover:bg-white/80 hover:shadow-md'}`}>
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${activeTabIndex === index ? 'shadow-lg' : 'group-hover:shadow-md'}`} style={{
                        background: activeTabIndex === index ? `linear-gradient(135deg, ${tab.color}15, ${tab.color}25)` : `${tab.color}10`
                      }}>
                            {React.cloneElement(tab.icon, {
                          style: {
                            color: tab.color
                          },
                          className: "w-4 h-4 sm:w-5 sm:h-5"
                        })}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-semibold text-xs sm:text-sm mb-1 ${activeTabIndex === index ? 'text-gray-900' : 'text-gray-700'}`}>
                              {tab.title}
                            </h4>
                            
                            <AnimatePresence>
                              {activeTabIndex === index && <motion.div initial={{
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
                          }}>
                                  <p className="text-xs text-gray-600 mb-2 sm:mb-3 leading-relaxed">
                                    {tab.description}
                                  </p>
                                  
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#143151]/5 to-[#387E89]/10 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg flex-1 min-w-0">
                                      <CheckCircle className="w-3 h-3 text-[#387E89] shrink-0" />
                                      <span className="font-semibold text-xs text-[#143151] truncate">{tab.benefit}</span>
                                    </div>
                                    <VoiceAnimation size="sm" color={tab.color} isAnimating={true} />
                                  </div>
                                </motion.div>}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>)}
                  </div>

                  {/* Navigation dots */}
                  <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                    {featureTabs.map((_, idx) => <button key={idx} onClick={() => handleTabClick(idx)} className={`transition-all duration-300 rounded-full ${activeTabIndex === idx ? 'w-6 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r from-[#387E89] to-[#143151]' : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400'}`} />)}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* Trusted by section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.9
      }} className="mt-10 sm:mt-16 lg:mt-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden p-4 sm:p-6">
            <div className="text-center mb-4 sm:mb-6">
              <Typography variant="h6" className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2">
                S10.AI is recommended by leading healthcare organizations
              </Typography>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#143151] to-[#387E89] mx-auto rounded-full"></div>
            </div>
            
            <Box className="overflow-hidden">
              {/* Static logos for SEO */}
              <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 mb-3 sm:mb-4 opacity-70">
                {companyLogos.slice(0, 4).map((logo, index) => <div key={`static-${index}`} className="w-12 h-6 sm:w-16 sm:h-8 lg:w-20 lg:h-10 grayscale hover:grayscale-0 transition-all duration-300">
                    <OptimizedImage src={logo} alt={`Healthcare partner ${index + 1}`} width={isMobile ? 48 : 80} height={isMobile ? 24 : 40} priority={index < 2} className="object-contain w-full h-full" />
                  </div>)}
              </div>
              
              {/* Animated marquee */}
              <Marquee gradient={true} gradientWidth={60} speed={30} className="opacity-80">
                {companyLogos.map((logo, index) => <div key={index} className="mx-4 sm:mx-6 lg:mx-8 grayscale hover:grayscale-0 transition-all duration-300">
                    <OptimizedImage src={logo} alt={`Healthcare partner ${index + 1}`} width={isMobile ? 60 : 100} height={isMobile ? 30 : 50} className="object-contain" />
                  </div>)}
              </Marquee>
            </Box>
          </div>
        </motion.div>
      </div>
    </section>;
};

// Export the VoiceAnimation component separately for use in other files
export { VoiceAnimation };
