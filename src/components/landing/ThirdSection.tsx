
import React, { useState, useEffect } from 'react';
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FileCheck, MessageSquarePlus, Clock, ShieldCheck, FileText, Users, Shield, ArrowLeft, ArrowRight } from "lucide-react";
import { useMediaQuery } from '@mui/material';
import { shadowStyles } from "@/lib/shadow-utils";
import { YouTubeFacade } from "@/components/ui/youtube-facade";

const tabAccData = {
  "The S10.AI Advantage": [{
    icon: <FileCheck className="w-5 h-5" />,
    title: "Maximize Patient Interaction",
    content: "Reduce documentation time by 75% and increase patient face-time by 40% on average.",
    metric: "75% faster documentation"
  }, {
    icon: <Clock className="w-5 h-5" />,
    title: "Boost Efficiency & Well-Being",
    content: "Save 10-20 hours per week per clinician with intelligent automation and AI for physician burnout reduction.",
    metric: "20 hours saved weekly"
  }, {
    icon: <MessageSquarePlus className="w-5 h-5" />,
    title: "Address Staffing Shortages",
    content: "Reduce administrative staff needs by 30% while maintaining high-quality patient service.",
    metric: "30% staff efficiency gain"
  }, {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Improve financial impact",
    content: "Increase revenue by 15% through improved documentation accuracy and reduced claim denials.",
    metric: "15% revenue increase"
  }],
  "Streamline documentation": [{
    icon: <FileText className="w-5 h-5" />,
    title: "Create clinical documentation automatically",
    content: "Auto-generate accurate, specialty-specific notes from multilingual patient-clinician conversations, even offline.",
    metric: "85% faster note creation"
  }, {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Superior Documentation Accuracy",
    content: "AI-driven medical transcription with Generative AI minimizes human error.",
    metric: "99% accuracy rate"
  }, {
    icon: <Users className="w-5 h-5" />,
    title: "Seamless Integration",
    content: "Fully compatible with any electronic health record (EHR)",
    metric: "100+ EHR integrations"
  }, {
    icon: <MessageSquarePlus className="w-5 h-5" />,
    title: "Clinical Decision Support",
    content: "Instant guidelines, medical insights & jargon clarification.",
    metric: "60% faster decisions"
  }],
  "AI powered Front Office": [{
    icon: <Clock className="w-5 h-5" />,
    title: "Smart Appointment Management",
    content: "AI handles scheduling, reschedules, cancellations, and automated reminders to reduce no-shows.",
    metric: "50% fewer no-shows"
  }, {
    icon: <Users className="w-5 h-5" />,
    title: "Seamless Patient Intake",
    content: "Automates registration, history updates, and pre-visit documentation for faster onboarding.",
    metric: "80% faster intake"
  }, {
    icon: <FileCheck className="w-5 h-5" />,
    title: "Effortless Refill Processing",
    content: "Verifies patients, confirms prescriptions, and alerts staff for quick approvals.",
    metric: "90% faster refills"
  }, {
    icon: <Shield className="w-5 h-5" />,
    title: "Proactive Preventative Care",
    content: "AI-driven screenings (PHQ-9, GAD-7, etc.) and custom health plans enhance patient well-being.",
    metric: "40% better screening"
  }, {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "RCM Automation",
    content: "Streamlines insurance checks, prior authorizations, payment posting, and claim follow-ups for faster reimbursements.",
    metric: "45% faster payments"
  }],
  "Automate Tasks": [{
    icon: <FileCheck className="w-5 h-5" />,
    title: "Automated Coding",
    content: "AI-driven ICD-10 & E/M , CPT & HCC code capture.",
    metric: "95% coding accuracy"
  }, {
    icon: <MessageSquarePlus className="w-5 h-5" />,
    title: "Simplified Orders & Prescriptions",
    content: "Automates medication & lab orders.",
    metric: "70% faster orders"
  }, {
    icon: <FileText className="w-5 h-5" />,
    title: "Instant Summaries",
    content: "Generates referrals, after-visit notes & letters.",
    metric: "85% time saved"
  }, {
    icon: <Clock className="w-5 h-5" />,
    title: "Smart Pre-Charting",
    content: "Prepares charts & retrieves patient history.",
    metric: "75% faster prep"
  }, {
    icon: <Shield className="w-5 h-5" />,
    title: "Seamless Lab & CRM Sync",
    content: "Auto-updates lab results & patient records.",
    metric: "100% sync accuracy"
  }]
};

const testimonials = [{
  quote: "S10.AI has transformed our practice workflow. Our providers now spend more time with patients and less time on documentation.",
  author: "Dr. Sarah Johnson",
  role: "Chief Medical Officer",
  organization: "Northside Medical Group",
  image: "/placeholder.svg"
}, {
  quote: "The AI medical scribe functionality is remarkably accurate. It's like having an extra team member in every patient encounter.",
  author: "Dr. Michael Chen",
  role: "Primary Care Physician",
  organization: "Valley Health Partners",
  image: "/placeholder.svg"
}, {
  quote: "Implementation was seamless and the ROI was immediate. We've reduced administrative staff needs while improving patient satisfaction scores.",
  author: "Jennifer Williams",
  role: "Practice Manager",
  organization: "Westside Family Medicine",
  image: "/placeholder.svg"
}];

export const ThirdSection = () => {
  const [tabValue, setTabValue] = useState(0);
  const isMobile = useMediaQuery('(max-width:768px)');
  const isTablet = useMediaQuery('(max-width:1024px)');
  const [visibleTabsStart, setVisibleTabsStart] = useState(0);
  const tabKeys = Object.keys(tabAccData);
  const tabsToShow = isMobile ? 1 : isTablet ? 2 : 4;
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const handlePrevTabs = () => {
    setVisibleTabsStart(prev => Math.max(0, prev - 1));
  };
  const handleNextTabs = () => {
    setVisibleTabsStart(prev => Math.min(tabKeys.length - tabsToShow, prev + 1));
  };

  // Update visible tabs when screen size changes
  useEffect(() => {
    if (tabValue >= visibleTabsStart + tabsToShow) {
      setVisibleTabsStart(Math.max(0, tabValue - tabsToShow + 1));
    } else if (tabValue < visibleTabsStart) {
      setVisibleTabsStart(tabValue);
    }
  }, [tabValue, tabsToShow, visibleTabsStart]);

  return <section id="healthcare-ai-benefits" aria-labelledby="benefits-heading" className="py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8 w-full max-w-[100vw] bg-gradient-to-b from-white to-gray-50">
      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: {
        xs: 3,
        sm: 4,
        md: 5
      },
      width: '100%',
      maxWidth: '1200px',
      mx: 'auto',
      alignItems: 'center'
    }}>
        <Box component={motion.div} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center max-w-3xl mx-auto">
          <Typography variant="h4" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3" id="benefits-heading" sx={{
          lineHeight: 1.2
        }}>
            Why Healthcare Leaders Choose S10.AI?
          </Typography>
          <Typography variant="body1" className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto" sx={{
          mt: 1
        }}>
            Join 1,000+ healthcare providers who have enhanced their workflows with real-time AI medical scribes, automated documentation, specialty-specific AI workflows, AI agents, and clinical workflow automation.
          </Typography>
        </Box>

        {/* SEO-friendly static content - Always visible */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete S10.AI Healthcare Solutions Overview</h2>
          
          {Object.entries(tabAccData).map(([categoryName, items], categoryIndex) => (
            <div key={`static-category-${categoryIndex}`} className="mb-8 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-[#387E89] mb-4">{categoryName}</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {items.map((item, itemIndex) => (
                  <div key={`static-item-${categoryIndex}-${itemIndex}`} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[#387E89]/10 text-[#387E89]">
                        {item.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">{item.content}</p>
                    <div className="inline-block bg-[#387E89]/10 text-[#387E89] px-3 py-1 rounded-full text-sm font-medium">
                      {item.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Box component="nav" className="w-full flex justify-center mb-2 relative">
          <div className="relative w-full max-w-3xl mx-auto">
            {visibleTabsStart > 0 && <button onClick={handlePrevTabs} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1 border border-gray-100 hover:bg-gray-50" aria-label="Previous tabs">
                <ArrowLeft className="h-4 w-4" />
              </button>}
            
            <Tabs value={tabValue} onChange={handleChange} variant="scrollable" scrollButtons={false} aria-label="healthcare ai tabs" sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: '#387E89',
              height: '3px',
              borderRadius: '3px'
            },
            "& .MuiTabs-flexContainer": {
              gap: {
                xs: 0.5,
                sm: 1
              },
              justifyContent: 'center'
            },
            "& .MuiTabs-scroller": {
              overflow: 'hidden !important',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            },
            "& .MuiTab-root": {
              fontSize: {
                xs: "0.875rem",
                sm: "1rem"
              },
              textTransform: "none",
              minWidth: {
                xs: "auto",
                sm: "auto"
              },
              px: {
                xs: 1.5,
                sm: 2,
                md: 3
              },
              py: {
                xs: 1,
                sm: 1.5,
                md: 2
              },
              color: "#666666",
              "&.Mui-selected": {
                color: "#387E89",
                fontWeight: "600"
              }
            }
          }}>
              {tabKeys.slice(visibleTabsStart, visibleTabsStart + tabsToShow).map((value, index) => <Tab key={index + visibleTabsStart} label={value} id={`tab-${index + visibleTabsStart}`} aria-controls={`tabpanel-${index + visibleTabsStart}`} sx={{
              fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                md: '1rem'
              }
            }} />)}
            </Tabs>
            
            {visibleTabsStart < tabKeys.length - tabsToShow && <button onClick={handleNextTabs} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1 border border-gray-100 hover:bg-gray-50" aria-label="Next tabs">
                <ArrowRight className="h-4 w-4" />
              </button>}
          </div>
        </Box>

        <Box className={`grid ${isMobile ? 'grid-cols-1 gap-5' : 'grid-cols-12 gap-4 sm:gap-6 lg:gap-8'} w-full`}>
          <Box className={isMobile ? 'col-span-1' : 'col-span-7'}>
            <Box className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              {/* Interactive tabs and accordions for enhanced UX */}
              <div className="w-full">
                {tabKeys.map((tabKey, tabIndex) => (
                  <div 
                    key={`tab-content-${tabIndex}`} 
                    role="tabpanel"
                    id={`tabpanel-${tabIndex}`}
                    aria-labelledby={`tab-${tabIndex}`}
                    className={`${tabValue === tabIndex ? '' : 'hidden'}`}
                  >
                    {tabValue === tabIndex && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3" defaultValue="item-0">
                          {tabAccData[tabKey].map((item: any, itemIndex) => (
                            <AccordionItem value={`item-${itemIndex}`} key={itemIndex} className="border border-gray-100 rounded-lg overflow-hidden hover:border-[#387E89] transition-all duration-200 data-[state=open]:shadow-md">
                              <AccordionTrigger className="px-3 sm:px-4 py-2 sm:py-3 hover:no-underline">
                                <div className="flex items-center gap-2 sm:gap-3">
                                  <div className="p-1.5 sm:p-2 rounded-lg bg-[#387E89]/10">
                                    {item.icon}
                                  </div>
                                  <span className="text-base sm:text-lg font-semibold text-gray-900">{item.title}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                                <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 leading-relaxed">{item.content}</p>
                                {item.metric && <span className="inline-block bg-[#387E89]/10 text-[#387E89] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                                    {item.metric}
                                  </span>}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </Box>
          </Box>

          <Box component="aside" className={isMobile ? "mt-5" : "col-span-5"}>
            <div className="sticky top-24 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white h-fit">
              {/* Updated YouTube video with correct video ID */}
              <div className="aspect-video w-full">
                <YouTubeFacade 
                  videoId="Xu0BH3oO5bA" 
                  title="Ambient AI for Cardiology"
                  thumbnailQuality="maxresdefault"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-[#387E89] mb-2">Ambient AI for Cardiology</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  See how S10.AI's specialized ambient AI transforms cardiology workflows, automating documentation and enhancing patient care in cardiovascular medicine.
                </p>
              </div>
            </div>
          </Box>
        </Box>

        {/* Enhanced CTA with improved UI/UX */}
        <div className="mt-8 sm:mt-10 md:mt-12 w-full max-w-7xl mx-auto">
          <motion.a 
            href="#key-differences" 
            className="group inline-flex items-center text-black hover:text-gray-800 text-lg sm:text-xl font-medium transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 5 }}
          >
            <div className="mr-3 w-10 h-10 rounded-md bg-gradient-to-r from-[#143151] to-[#387E89] flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <ArrowRight className="h-5 w-5 text-white group-hover:animate-pulse" />
            </div>
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">See S10.AI's 5 Key Differences</span>
          </motion.a>
        </div>
      </Box>
    </section>;
};

export default ThirdSection;
