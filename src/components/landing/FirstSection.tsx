
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Users, Clock, FileText, Shield, MessageSquare, Database, CheckCircle, Star, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useWindowSize } from '@/hooks/use-window-size';
import { useIsMobile } from '@/hooks/use-mobile';
import { shadowStyles } from '@/lib/shadow-utils';
import { LazyLoad } from '@/components/ui/lazy-load';
import OptimizedImage from '@/components/ui/optimized-image';

// More efficient voice animation component
const VoiceAnimation = ({ size = "md", color = "#387E89", isAnimating = true }) => {
  const barCount = size === "xs" ? 3 : size === "sm" ? 4 : 5;
  const maxHeight = size === "xs" ? 8 : size === "sm" ? 12 : 16;
  
  return (
    <div 
      className="flex items-end gap-0.5 h-6" 
      aria-hidden="true"
      style={{ height: size === "xs" ? "12px" : size === "sm" ? "16px" : "24px" }}
    >
      {isAnimating ? (
        <div className="flex items-end gap-0.5">
          {Array(barCount).fill(0).map((_, idx) => (
            <div 
              key={idx}
              className="rounded-full animate-pulse"
              style={{
                backgroundColor: color,
                width: "2px",
                height: `${Math.max(2, Math.random() * maxHeight)}px`,
                animationDelay: `${idx * 100}ms`,
                animationDuration: `${800 + Math.random() * 400}ms`,
              }}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-end gap-0.5">
          {Array(barCount).fill(0).map((_, idx) => (
            <div 
              key={idx}
              className="rounded-full"
              style={{
                backgroundColor: color,
                width: "2px",
                height: "2px"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

export const FirstSection = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
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
    icon: <Clock className="w-4 h-4 text-white" />,
    text: "75% faster charting",
    color: "from-blue-500 to-blue-600"
  }, {
    icon: <Users className="w-4 h-4 text-white" />,
    text: "AI staffing assistance",
    color: "from-teal-500 to-teal-600"
  }, {
    icon: <Shield className="w-4 h-4 text-white" />,
    text: "HIPAA compliant",
    color: "from-green-500 to-green-600"
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

  return (
    <section className="min-h-screen relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/40"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-blue-100/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100/10 to-teal-100/10 rounded-full blur-2xl"></div>
      
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 relative z-10">
        {/* Hero section with enhanced visual hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left column - Enhanced main content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Trust indicator */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-full px-4 py-2 shadow-sm"
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-yellow-700">Trusted by 1,000+ Healthcare Providers</span>
              <TrendingUp className="w-4 h-4 text-yellow-600" />
            </motion.div>

            {/* Main headline with enhanced typography */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  AI Scribing &
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#143151] via-[#387E89] to-[#5192AE] bg-clip-text text-transparent">
                  AI Staffing Agent
                </span>
                <br />
                <span className="text-gray-900">
                  Built for Clinicians
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#387E89] to-[#143151] bg-clip-text text-transparent">
                  Like You
                </span>
              </motion.h1>
              
              {/* Enhanced subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Transform your practice with AI that <span className="font-semibold text-[#387E89]">reduces documentation time by 75%</span> and <span className="font-semibold text-[#143151]">increases patient face-time by 40%</span> on average.
              </motion.p>
            </div>
            
            {/* Enhanced benefit pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {clinicianBenefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className={`flex items-center gap-2 px-4 py-3 bg-gradient-to-r ${benefit.color} rounded-full shadow-lg border border-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300`}
                >
                  {benefit.icon}
                  <span className="text-sm font-semibold text-white">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced CTA section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  onMouseEnter={() => setIsHovered(true)} 
                  onMouseLeave={() => setIsHovered(false)} 
                  className="group relative rounded-full px-8 py-6 text-lg font-bold bg-gradient-to-r from-[#143151] via-[#387E89] to-[#5192AE] hover:shadow-2xl hover:shadow-[#387E89]/25 transform hover:scale-105 transition-all duration-300 text-white border-2 border-white/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  <motion.div 
                    animate={isHovered ? { x: [0, 5, 0] } : {}} 
                    transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }} 
                    className="flex items-center gap-3 relative z-10"
                  >
                    <Zap className="h-5 w-5" />
                    Request A Demo
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Button>
                
                <div className="text-sm text-gray-600 pt-2">
                  <p className="font-medium">✓ Free 30-minute consultation</p>
                  <p>✓ Custom implementation plan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Enhanced feature showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Enhanced card with better visual hierarchy */}
            <Card className="relative bg-white/95 backdrop-blur-sm border-0 shadow-2xl shadow-[#387E89]/10 ring-1 ring-gray-200/50 overflow-hidden max-w-lg mx-auto transform hover:shadow-3xl hover:shadow-[#387E89]/15 transition-all duration-500">
              {/* Enhanced header with gradient */}
              <div className="relative p-4 bg-gradient-to-r from-[#143151] via-[#387E89] to-[#5192AE] text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="font-bold text-lg flex items-center justify-between">
                    <span>Don't change for AI—make it work for you</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                      Clinician-First
                    </span>
                  </h3>
                  <p className="text-sm text-white/90 mt-1">Purpose-built for healthcare professionals</p>
                </div>
              </div>
              
              {/* Enhanced content area */}
              <div className="p-6">
                <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-xl p-5 border border-blue-100/50 shadow-inner">
                  {/* Feature tabs with enhanced design */}
                  <div className="space-y-3">
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
                            : 'bg-white/50 hover:bg-white/80 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                              activeTabIndex === index 
                                ? 'shadow-lg' 
                                : 'group-hover:shadow-md'
                            }`}
                            style={{ 
                              background: activeTabIndex === index 
                                ? `linear-gradient(135deg, ${tab.color}15, ${tab.color}25)` 
                                : `${tab.color}10` 
                            }}
                          >
                            {React.cloneElement(tab.icon, {
                              style: { color: tab.color },
                              className: "w-5 h-5"
                            })}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-semibold text-sm mb-1 ${
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
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 bg-gradient-to-r from-[#143151]/5 to-[#387E89]/10 px-3 py-2 rounded-lg">
                                      <CheckCircle className="w-3 h-3 text-[#387E89]" />
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
          className="mt-16 sm:mt-20"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden p-6">
            <div className="text-center mb-6">
              <Typography variant="h6" className="text-lg font-bold text-gray-800 mb-2">
                S10.AI is recommended by leading healthcare organizations
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
                      width={isMobile ? 80 : 100}
                      height={isMobile ? 40 : 50}
                      className="object-contain"
                    />
                  </div>
                ))}
              </Marquee>
            </Box>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Export the VoiceAnimation component separately for use in other files
export { VoiceAnimation };
