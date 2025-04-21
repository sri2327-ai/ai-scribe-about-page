import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FileCheck, MessageSquarePlus, Clock, ShieldCheck, FileText, Users, Shield } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialCard } from './TestimonialCard';
import { useMediaQuery } from '@mui/material';

const tabAccData = {
  "The S10.AI Advantage": [
    { 
      icon: <FileCheck className="w-5 h-5" />,
      title: "Maximize Patient Interaction", 
      content: "Reduce documentation time by 75% and increase patient face-time by 40% on average.",
      metric: "75% faster documentation"
    },
    { 
      icon: <Clock className="w-5 h-5" />,
      title: "Boost Efficiency & Well-Being", 
      content: "Save 10-20 hours per week per clinician with intelligent automation and AI for physician burnout reduction.",
      metric: "20 hours saved weekly"
    },
    { 
      icon: <MessageSquarePlus className="w-5 h-5" />,
      title: "Address Staffing Shortages", 
      content: "Reduce administrative staff needs by 30% while maintaining high-quality patient service.",
      metric: "30% staff efficiency gain"
    },
    { 
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Improve financial impact", 
      content: "Increase revenue by 15% through improved documentation accuracy and reduced claim denials.",
      metric: "15% revenue increase"
    },
  ],
  "Streamline documentation": [
    { 
      icon: <FileText className="w-5 h-5" />,
      title: "Create clinical documentation automatically", 
      content: "Auto-generate accurate, specialty-specific notes from multilingual patient-clinician conversations, even offline.",
      metric: "85% faster note creation"
    },
    { 
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Superior Documentation Accuracy", 
      content: "AI-driven medical transcription with Generative AI minimizes human error.",
      metric: "99% accuracy rate"
    },
    { 
      icon: <Users className="w-5 h-5" />,
      title: "Seamless Integration", 
      content: "Fully compatible with any electronic health record (EHR)",
      metric: "100+ EHR integrations"
    },
    { 
      icon: <MessageSquarePlus className="w-5 h-5" />,
      title: "Clinical Decision Support", 
      content: "Instant guidelines, medical insights & jargon clarification.",
      metric: "60% faster decisions"
    }
  ],
  "AI powered Front Office": [
    { 
      icon: <Clock className="w-5 h-5" />,
      title: "Smart Appointment Management", 
      content: "AI handles scheduling, reschedules, cancellations, and automated reminders to reduce no-shows.",
      metric: "50% fewer no-shows"
    },
    { 
      icon: <Users className="w-5 h-5" />,
      title: "Seamless Patient Intake", 
      content: "Automates registration, history updates, and pre-visit documentation for faster onboarding.",
      metric: "80% faster intake"
    },
    { 
      icon: <FileCheck className="w-5 h-5" />,
      title: "Effortless Refill Processing", 
      content: "Verifies patients, confirms prescriptions, and alerts staff for quick approvals.",
      metric: "90% faster refills"
    },
    { 
      icon: <Shield className="w-5 h-5" />,
      title: "Proactive Preventative Care", 
      content: "AI-driven screenings (PHQ-9, GAD-7, etc.) and custom health plans enhance patient well-being.",
      metric: "40% better screening"
    },
    { 
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "RCM Automation", 
      content: "Streamlines insurance checks, prior authorizations, payment posting, and claim follow-ups for faster reimbursements.",
      metric: "45% faster payments"
    }
  ],
  "Automate Tasks": [
    { 
      icon: <FileCheck className="w-5 h-5" />,
      title: "Automated Coding", 
      content: "AI-driven ICD-10 & E/M , CPT & HCC code capture.",
      metric: "95% coding accuracy"
    },
    { 
      icon: <MessageSquarePlus className="w-5 h-5" />,
      title: "Simplified Orders & Prescriptions", 
      content: "Automates medication & lab orders.",
      metric: "70% faster orders"
    },
    { 
      icon: <FileText className="w-5 h-5" />,
      title: "Instant Summaries", 
      content: "Generates referrals, after-visit notes & letters.",
      metric: "85% time saved"
    },
    { 
      icon: <Clock className="w-5 h-5" />,
      title: "Smart Pre-Charting", 
      content: "Prepares charts & retrieves patient history.",
      metric: "75% faster prep"
    },
    { 
      icon: <Shield className="w-5 h-5" />,
      title: "Seamless Lab & CRM Sync", 
      content: "Auto-updates lab results & patient records.",
      metric: "100% sync accuracy"
    }
  ]
};

const testimonials = [
  {
    quote: "S10.AI has transformed our practice workflow. Our providers now spend more time with patients and less time on documentation.",
    author: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    organization: "Northside Medical Group",
    image: "/placeholder.svg"
  },
  {
    quote: "The AI medical scribe functionality is remarkably accurate. It's like having an extra team member in every patient encounter.",
    author: "Dr. Michael Chen",
    role: "Primary Care Physician",
    organization: "Valley Health Partners",
    image: "/placeholder.svg"
  },
  {
    quote: "Implementation was seamless and the ROI was immediate. We've reduced administrative staff needs while improving patient satisfaction scores.",
    author: "Jennifer Williams",
    role: "Practice Manager",
    organization: "Westside Family Medicine",
    image: "/placeholder.svg"
  }
];

export const ThirdSection = () => {
  const [tabValue, setTabValue] = useState(0);
  const isMobile = useMediaQuery('(max-width:768px)');
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <section id="healthcare-ai-benefits" aria-labelledby="benefits-heading" className="py-12 px-4 md:px-8 w-full max-w-[100vw] bg-gradient-to-b from-white to-gray-50">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', maxWidth: '1200px', mx: 'auto', alignItems: 'center' }}>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <Typography 
            variant="h4" 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            id="benefits-heading"
            sx={{ lineHeight: 1.2 }}
          >
            Why Healthcare Leaders Choose S10.AI?
          </Typography>
          <Typography 
            variant="body1" 
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            sx={{ mt: 1 }}
          >
            Join 1,000+ healthcare providers who have enhanced their workflows with real-time AI medical scribes, automated documentation, specialty-specific AI workflows, AI agents, and clinical workflow automation.
          </Typography>
        </Box>

        <Box component="nav" className="w-full flex justify-center mb-8">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="healthcare ai tabs"
            sx={{
              "& .MuiTabs-indicator": { 
                backgroundColor: '#387E89',
                height: '3px',
                borderRadius: '3px'
              },
              "& .MuiTab-root": {
                fontSize: "1rem",
                textTransform: "none",
                minWidth: "auto",
                px: 3,
                py: 2,
                color: "#666666",
                "&.Mui-selected": {
                  color: "#387E89",
                  fontWeight: "600"
                }
              }
            }}
          >
            {Object.keys(tabAccData).map((value, index) => (
              <Tab 
                key={index}
                label={value}
                id={`tab-${index}`}
                aria-controls={`tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>

        <Box className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12'} gap-8 w-full`}>
          <Box className={isMobile ? 'col-span-1' : 'col-span-7'}>
            <Box className="bg-white rounded-xl shadow-lg p-6">
              {Object.values(tabAccData).map((value, index) => (
                tabValue === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-0">
                      {value.map((item: any, itemIndex) => (
                        <AccordionItem 
                          value={`item-${itemIndex}`} 
                          key={itemIndex}
                          className="border border-gray-100 rounded-lg overflow-hidden hover:border-[#387E89] transition-all duration-200 data-[state=open]:shadow-md"
                        >
                          <AccordionTrigger className="px-4 py-3 hover:no-underline">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-[#387E89]/10">
                                {item.icon}
                              </div>
                              <span className="text-lg font-semibold text-gray-900">{item.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <p className="text-gray-600 mb-3 leading-relaxed">{item.content}</p>
                            {item.metric && (
                              <span className="inline-block bg-[#387E89]/10 text-[#387E89] px-4 py-2 rounded-full text-sm font-medium">
                                {item.metric}
                              </span>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                )
              ))}
            </Box>

            <div className="mt-8 flex justify-center">
              <Button 
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl transform transition-all duration-200 hover:scale-105"
              >
                Schedule a Demo
              </Button>
            </div>
          </Box>

          {!isMobile && (
            <Box component="aside" className="col-span-5">
              <div className="sticky top-24 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white h-fit">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/unmWENGNuo4"
                    title="S10.AI Healthcare Solutions Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: "none" }}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#387E89] mb-2">Watch Our Solution in Action</h4>
                  <p className="text-gray-600">
                    See how S10.AI streamlines clinical workflows, automates documentation, and enhances patient care in real-world healthcare settings.
                  </p>
                </div>
              </div>
            </Box>
          )}

          {isMobile && (
            <Box component="aside" className="mt-8">
              <div className="sticky top-24 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white h-fit">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/unmWENGNuo4"
                    title="S10.AI Healthcare Solutions Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: "none" }}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#387E89] mb-2">Watch Our Solution in Action</h4>
                  <p className="text-gray-600">
                    See how S10.AI streamlines clinical workflows, automates documentation, and enhances patient care in real-world healthcare settings.
                  </p>
                </div>
              </div>
            </Box>
          )}
        </Box>

        <div className="mt-12 relative px-4 w-full max-w-3xl mx-auto">
          <Carousel className="w-full max-w-4xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </Box>
    </section>
  );
};

export default ThirdSection;
