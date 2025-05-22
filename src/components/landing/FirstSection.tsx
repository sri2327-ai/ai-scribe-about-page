
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Users, Clock, FileText, Shield, MessageSquare, Database, CheckCircle } from "lucide-react";
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

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 overflow-hidden relative" ref={sectionRef}>
      {/* Healthcare-themed background elements - kept subtle */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-teal-100/10 rounded-full blur-3xl" aria-hidden="true"></div>
      
      {/* Main content container with improved responsive spacing and width constraint */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10"
        style={{ width: '100%' }}
      >
        {/* Updated grid to true 50-50 split on larger screens with layout stability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Left column - Main heading and CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 md:space-y-7"
          >
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
                {clinicianBenefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100"
                  >
                    {benefit.icon}
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="pt-5 md:pt-7" 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
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
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column - Feature tabs with improved DOM efficiency */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Improved SEO-friendly card with better HTML structure and less DOM nodes */}
              <Card className={`bg-white/90 border-0 border-gray-100 transition-all duration-300 overflow-hidden ${shadowStyles.brandGlow} ring-1 ring-gray-100/70 backdrop-blur-sm hover:shadow-xl dark:bg-gray-900/95 dark:border-gray-800 max-w-md mx-auto h-[420px] w-full`}>
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500/10 to-pink-500/10 backdrop-blur-sm">
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base flex items-center justify-between flex-wrap dark:text-white">
                    <span className="pr-2">Don't change for AI—make it work for you</span> 
                    <span className="inline-flex items-center justify-center px-2.5 py-0.5 text-xs xs:text-sm sm:text-sm rounded-full bg-[#D3E4FD] text-[#143151] dark:bg-[#D3E4FD]/90 whitespace-nowrap mt-1 xs:mt-0 font-medium">
                      Clinician-First
                    </span>
                  </h3>
                </div>
                
                <div className="p-2 sm:p-3 overflow-auto" style={{ height: "calc(100% - 54px)" }}>
                  {/* Fully accessible feature tabs with reduced DOM nodes */}
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-[#F8FAFF] to-[#F2F8FF] backdrop-blur-sm rounded-lg border border-blue-50 shadow-sm h-full">
                    {/* Main content for all tabs - always present in HTML for crawlers */}
                    <div className="mb-4">
                      <h4 className="sr-only">S10.AI Features Overview</h4>
                      <ul className="space-y-2">
                        {featureTabs.map((tab, index) => (
                          <li key={tab.id}>
                            <div
                              onClick={() => handleTabClick(index)}
                              className={`flex flex-col rounded-lg p-3 cursor-pointer transition-all ${
                                activeTabIndex === index 
                                  ? 'border border-blue-100 bg-white shadow-md' 
                                  : 'border border-transparent bg-gray-50/50'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                                  style={{ backgroundColor: activeTabIndex === index ? `${tab.color}25` : `${tab.color}15` }}
                                >
                                  {React.cloneElement(tab.icon, {
                                    style: { color: tab.color },
                                    className: "w-4 h-4",
                                    "aria-hidden": "true"
                                  })}
                                </div>
                                <h3 className={`text-sm font-semibold ${activeTabIndex === index ? 'text-gray-900' : 'text-gray-700'}`}>
                                  {tab.title}
                                </h3>
                              </div>
                              
                              {/* Tab content - visible only for active tab but present in DOM for all tabs */}
                              <div 
                                className={activeTabIndex === index ? "block mt-2.5" : "opacity-0 h-0 overflow-hidden"} 
                                aria-hidden={activeTabIndex !== index}
                              >
                                <p className="text-xs text-gray-600 mt-1 ml-10 leading-relaxed">
                                  {tab.description}
                                </p>
                                
                                <div className="ml-10 mt-2.5">
                                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/15 p-2 rounded-lg">
                                    <CheckCircle className="w-3.5 h-3.5 text-[#387E89]" aria-hidden="true" />
                                    <span className="font-medium text-xs text-[#143151]">{tab.benefit}</span>
                                    
                                    {/* Replace complex DOM with simplified animation component */}
                                    {activeTabIndex === index && (
                                      <div className="ml-auto">
                                        <VoiceAnimation size={isMobile ? "xs" : "sm"} color={tab.color} isAnimating={true} />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Static visible content summary that's always present and fully visible */}
                    <div className="bg-blue-50/50 rounded-lg p-3 mt-4 border border-blue-100/50">
                      <h4 className="text-sm font-medium text-[#143151] mb-2">Our AI Solutions Include:</h4>
                      <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
                        {featureTabs.map(tab => (
                          <li key={`summary-${tab.id}`}><strong>{tab.title}</strong> - {tab.benefit}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Navigation indicator dots with proper ARIA attributes and reduced DOM */}
                    <div className="flex justify-center gap-2.5 mt-3.5" role="group" aria-label="Feature navigation">
                      {featureTabs.map((tab, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => handleTabClick(idx)} 
                          className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 ${
                            activeTabIndex === idx 
                              ? 'w-6 h-2 bg-[#387E89] rounded-full' 
                              : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full'
                          }`}
                          aria-label={`View ${featureTabs[idx].title}`}
                          aria-pressed={activeTabIndex === idx}
                          aria-controls={`feature-content-${tab.id}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
        
        {/* Trusted by section - with DOM optimization */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 sm:mt-12"
          style={{ width: '100%', height: 'auto', minHeight: '120px' }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 overflow-hidden p-3 h-full">
            <Typography variant="h6" className="text-center text-gray-800 font-medium mb-2 text-xs sm:text-sm px-2 truncate">
              S10.AI is recommended by
            </Typography>
            
            <Box 
              sx={{
                overflow: "hidden",
                width: '100%',
                '& .marquee-container': {
                  minHeight: {
                    xs: '24px',
                    sm: '28px',
                    md: '32px'
                  }
                }
              }}
            >
              <div className="overflow-hidden w-full">
                {/* Preload images to prevent layout shifts */}
                <div className="hidden">
                  {companyLogos.slice(0, 2).map((logo, idx) => (
                    <link key={idx} rel="preload" href={logo} as="image" />
                  ))}
                </div>
                
                {/* Static visible logos for SEO/crawlers - reduced number */}
                <div className="flex flex-wrap justify-center gap-4 mb-3">
                  {companyLogos.slice(0, 3).map((logo, index) => (
                    <div key={`static-${index}`} className="w-16 h-8">
                      <OptimizedImage 
                        src={logo} 
                        alt={`Healthcare partner ${index + 1}`} 
                        width={72}
                        height={18}
                        priority={index < 2}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Interactive marquee for users - with fewer duplicates */}
                <Marquee gradient={true} gradientWidth={50} speed={25}>
                  {companyLogos.slice(0, 5).map((logo, index) => (
                    <div key={index} className="mx-4">
                      <OptimizedImage 
                        src={logo} 
                        alt={`Healthcare partner ${index + 1}`} 
                        width={isMobile ? 72 : 96}
                        height={isMobile ? 18 : 24}
                        priority={index < 2}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </Box>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Export the VoiceAnimation component separately for use in other files
export { VoiceAnimation };
