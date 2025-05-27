import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Users, Clock, FileText, Shield, MessageSquare, Database, CheckCircle, Star, TrendingUp, Play } from "lucide-react";
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
  
  return <section id="ai-solutions-overview" aria-labelledby="hero-heading" className="min-h-screen relative overflow-hidden" ref={sectionRef} style={{
    background: 'linear-gradient(135deg, #fafbfc 0%, #f8fafc 25%, #f1f8ff 50%, #ecf7f7 75%, #f0fdf4 100%)'
  }}>
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

      {/* Enhanced background with subtle medical pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/50 to-teal-50/30"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(20, 49, 81, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(56, 126, 137, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(81, 146, 174, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
        {/* Hero section - Enhanced layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 lg:items-center min-h-[85vh] sm:min-h-[80vh]">
          
          {/* Left column - Main content - Enhanced alignment */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 lg:space-y-8 order-1 text-center lg:text-left"
          >
            {/* Trust indicator - Enhanced design */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 rounded-full px-4 py-2.5 shadow-sm backdrop-blur-sm"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-amber-700">Trusted by 1,000+ Healthcare Providers</span>
              <TrendingUp className="w-4 h-4 text-amber-600" />
            </motion.div>

            {/* Main headline - Better typography */}
            <div className="space-y-4 lg:space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight"
                style={{ color: '#1a1a1a' }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151]">
                  AI Scribing &
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#387E89] via-[#5192AE] to-[#387E89]">
                  AI Staffing Agent
                </span>
                <span className="block text-gray-800">Built for</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#143151] via-[#387E89] to-[#5192AE]">
                  Clinicians Like You
                </span>
              </motion.h1>
              
              {/* Enhanced subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Focus on patient care, not paperwork. Our AI handles documentation, 
                <span className="font-semibold text-[#387E89]"> administrative tasks</span>, and 
                <span className="font-semibold text-[#143151]"> clinical workflows</span> seamlessly.
              </motion.p>
            </div>
            
            {/* Benefit pills - Enhanced design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {clinicianBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  {React.cloneElement(benefit.icon, {
                    className: "w-4 h-4",
                    style: {
                      background: 'linear-gradient(135deg, #143151, #387E89, #5192AE)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }
                  })}
                  <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced CTA section with animated demo button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <Button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="group relative w-full sm:w-auto rounded-full px-8 py-6 text-lg font-bold text-white border-2 border-white/20 overflow-hidden transition-all duration-500 transform"
                    style={{
                      background: isHovered 
                        ? 'linear-gradient(45deg, #143151, #387E89, #5192AE, #387E89)' 
                        : 'linear-gradient(135deg, #143151, #387E89, #5192AE)',
                      backgroundSize: isHovered ? '200% 200%' : '100% 100%',
                      animation: isHovered ? 'gradient-shift 2s ease infinite' : 'none',
                      boxShadow: isHovered 
                        ? '0 20px 40px rgba(56, 126, 137, 0.4), 0 0 20px rgba(56, 126, 137, 0.3)' 
                        : '0 10px 25px rgba(56, 126, 137, 0.25)'
                    }}
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#387E89]/30 via-[#5192AE]/30 to-[#143151]/30 rounded-full"
                      animate={isHovered ? {
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                      } : {}}
                      transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                    />
                    
                    {/* Button content with animated elements */}
                    <div className="flex items-center justify-center gap-3 relative z-10">
                      <motion.div
                        animate={isHovered ? { 
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1]
                        } : {}}
                        transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
                      >
                        <Zap className="h-5 w-5" />
                      </motion.div>
                      
                      <motion.span
                        animate={isHovered ? { 
                          scale: [1, 1.05, 1]
                        } : {}}
                        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                        className="font-bold"
                      >
                        Request A Demo
                      </motion.span>
                      
                      <motion.div
                        animate={isHovered ? { 
                          x: [0, 5, 0],
                          scale: [1, 1.1, 1]
                        } : {}}
                        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      animate={isHovered ? {
                        x: ['-200%', '200%']
                      } : {}}
                      transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, repeatDelay: 2 }}
                    />
                  </Button>
                </motion.div>
                
                <Button
                  variant="outline"
                  className="group w-full sm:w-auto rounded-full px-6 py-6 text-lg font-semibold border-2 border-[#387E89]/30 text-[#387E89] hover:bg-[#387E89]/5 hover:border-[#387E89] transition-all duration-300"
                >
                  <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="text-sm text-gray-500 pt-4 text-center lg:text-left space-y-1">
                <p className="font-medium">✓ Free 15-minute consultation</p>
                <p>✓ Custom implementation plan</p>
                <p>✓ No setup fees or long-term contracts</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Enhanced feature showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative order-2"
          >
            <Card className="relative bg-white/95 backdrop-blur-sm border-0 shadow-2xl shadow-[#387E89]/10 ring-1 ring-gray-200/50 overflow-hidden">
              {/* Enhanced header */}
              <div className="relative p-6 bg-gradient-to-r from-[#143151] via-[#387E89] to-[#5192AE] text-white">
                <div className="relative z-10">
                  <h3 className="font-bold text-lg flex items-center justify-between gap-3">
                    <span>Built by Clinicians, for Clinicians</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold border border-white/30">
                      Clinician-First
                    </span>
                  </h3>
                  <p className="text-sm text-white/90 mt-2">AI that understands your workflow</p>
                </div>
              </div>
              
              {/* Enhanced content area */}
              <div className="p-6">
                <div className="bg-gradient-to-br from-blue-50/50 via-white to-teal-50/50 rounded-xl p-6 border border-blue-100/50 shadow-inner">
                  <div className="space-y-4">
                    {featureTabs.map((tab, index) => (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        onClick={() => handleTabClick(index)}
                        className={`group relative cursor-pointer rounded-xl p-4 transition-all duration-300 ${
                          activeTabIndex === index
                            ? 'bg-white shadow-lg ring-2 ring-[#387E89]/20 scale-[1.02]'
                            : 'bg-white/60 hover:bg-white/90 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                              activeTabIndex === index ? 'shadow-lg' : 'group-hover:shadow-md'
                            }`}
                            style={{
                              background: activeTabIndex === index 
                                ? `linear-gradient(135deg, ${tab.color}15, ${tab.color}25)` 
                                : `${tab.color}10`
                            }}
                          >
                            {React.cloneElement(tab.icon, {
                              style: { color: tab.color },
                              className: "w-6 h-6"
                            })}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-semibold text-sm mb-2 ${
                              activeTabIndex === index ? 'text-gray-900' : 'text-gray-700'
                            }`}>
                              {tab.title}
                            </h4>
                            
                            <AnimatePresence>
                              {activeTabIndex === index && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                                    {tab.description}
                                  </p>
                                  
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2 bg-gradient-to-r from-[#143151]/5 to-[#387E89]/10 px-3 py-2 rounded-lg flex-1">
                                      <CheckCircle className="w-4 h-4 text-[#387E89] shrink-0" />
                                      <span className="font-semibold text-xs text-[#143151]">{tab.benefit}</span>
                                    </div>
                                    <VoiceAnimation size="sm" color={tab.color} isAnimating={true} />
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced navigation dots */}
                  <div className="flex justify-center gap-2 mt-6">
                    {featureTabs.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleTabClick(idx)}
                        className={`transition-all duration-300 rounded-full ${
                          activeTabIndex === idx
                            ? 'w-8 h-3 bg-gradient-to-r from-[#387E89] to-[#143151]'
                            : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* Enhanced trusted by section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 lg:mt-24"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden p-6">
            <div className="text-center mb-6">
              <Typography variant="h6" className="text-lg font-bold text-gray-800 mb-3">
                Recommended by Leading Healthcare Organizations
              </Typography>
              <div className="w-24 h-1 bg-gradient-to-r from-[#143151] to-[#387E89] mx-auto rounded-full"></div>
            </div>
            
            <Box className="overflow-hidden">
              {/* Static logos for SEO */}
              <div className="flex justify-center gap-8 mb-4 opacity-70">
                {companyLogos.slice(0, 4).map((logo, index) => (
                  <div key={`static-${index}`} className="w-20 h-10 grayscale hover:grayscale-0 transition-all duration-300">
                    <OptimizedImage
                      src={logo}
                      alt={`Healthcare partner ${index + 1}`}
                      width={80}
                      height={40}
                      priority={index < 2}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>
              
              {/* Animated marquee */}
              <Marquee gradient={true} gradientWidth={80} speed={30} className="opacity-80">
                {companyLogos.map((logo, index) => (
                  <div key={index} className="mx-8 grayscale hover:grayscale-0 transition-all duration-300">
                    <OptimizedImage
                      src={logo}
                      alt={`Healthcare partner ${index + 1}`}
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                ))}
              </Marquee>
            </Box>
          </div>
        </motion.div>
      </div>

      {/* Add CSS keyframes for gradient animation */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>;
};

// Export the VoiceAnimation component separately for use in other files
export { VoiceAnimation };
