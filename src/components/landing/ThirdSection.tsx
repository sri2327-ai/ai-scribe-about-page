import React, { useState } from 'react';
import { Box, Stack, Typography, Tabs, Tab } from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FileCheck, MessageSquarePlus, Clock, ShieldCheck, FileText, Users, Shield } from "lucide-react";
import { QuoteTestimonial } from './QuoteTestimonial';

export const ThirdSection = () => {
  const [tabValue, setTabValue] = useState(0);
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
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
      quote: "S10.AI has revolutionized our practice. We've cut documentation time by 70% and our physicians can finally focus on patient care.",
      author: "Dr. Sarah Martinez",
      role: "Chief Medical Officer, Pacific Health Group",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60"
    },
    {
      quote: "The ROI was immediate. Within 3 months, we reduced administrative costs by 25% while improving patient satisfaction scores.",
      author: "Michael Chang",
      role: "Director of Operations, MedCare Associates",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section id="healthcare-ai-benefits" aria-labelledby="benefits-heading" className="py-10 px-4 md:px-8 w-full max-w-[100vw]">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', maxWidth: '1400px', mx: 'auto' }}>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            sx={{ 
              textAlign: "center", 
              color: "#000000",
              mb: 2
            }}
            id="benefits-heading"
          >
            Why Healthcare Leaders Choose S10.AI?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "#000000",
              textAlign: "center",
              mb: 4
            }}
          >
            Join 1,000+ healthcare providers who have enhanced their workflows with real-time AI medical scribes, automated documentation, specialty-specific AI workflows, AI agents, and clinical workflow automation.
          </Typography>
        </Box>

        <Box component="nav" sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="healthcare ai tabs"
            sx={{
              "& .Mui-disabled": { display: tabValue === 0 ? "none" : "inline-flex", opacity: 0.3 },
              "& .MuiTabs-indicator": { 
                backgroundColor: '#387E89',
                height: '3px',
                borderRadius: '3px'
              },
              "& .MuiTabs-scroller": { mx: 1 },
              "& .MuiTabScrollButton-root": {
                border: "1px solid #387E89",
                background: "#ffffff",
                color: "#387E89",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#f0f9fa"
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
                sx={{
                  color: tabValue === index ? "#387E89" : "#666666",
                  mx: 1,
                  minHeight: 'unset',
                  textTransform: 'none',
                  fontWeight: tabValue === index ? 'bold' : 'medium',
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    color: "#387E89",
                  },
                  "&.Mui-selected": {
                    color: "#387E89"
                  }
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Stack spacing={3} direction={{ xs: "column", md: "row" }} sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '60%' } }}>
            <Box sx={{ overflowY: 'auto', height: '100%', maxHeight: { xs: '400px', md: '600px' } }}>
              {Object.values(tabAccData).map((value, index) => (
                tabValue === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <Accordion type="single" collapsible className="w-full border-none space-y-4" defaultValue="item-0">
                      {value.map((item: any, itemIndex) => (
                        <AccordionItem 
                          value={`item-${itemIndex}`} 
                          key={itemIndex}
                          className="border border-gray-200 rounded-lg overflow-hidden bg-white mb-2 hover:border-[#387E89] transition-colors"
                        >
                          <AccordionTrigger className="text-black hover:text-[#387E89] hover:no-underline px-4 py-3 text-lg font-semibold">
                            <div className="flex items-center gap-3">
                              {item.icon}
                              <span>{item.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-black/80 px-4 pb-3">
                            <p className="mb-2">{item.content}</p>
                            {item.metric && (
                              <span className="inline-block bg-[#387E89]/10 text-[#387E89] px-3 py-1 rounded-full text-sm font-medium">
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

            <div className="mt-8 space-y-4">
              {testimonials.map((testimonial, index) => (
                <QuoteTestimonial key={index} {...testimonial} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button 
                size="lg"
                className="bg-[#387E89] hover:bg-[#387E89]/90 text-white"
                onClick={() => window.location.href = '/demo'}
              >
                Schedule a Demo
              </Button>
            </div>
          </Box>

          <Box component="aside" sx={{ width: { xs: "100%", md: "40%" } }}>
            <div className="relative rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/unmWENGNuo4"
                title="S10.AI Healthcare Solutions Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
                loading="lazy"
              />
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-[#387E89]">Watch Our Solution in Action</h4>
                <p className="text-sm text-gray-600">
                  See how S10.AI streamlines clinical workflows, automates documentation, and enhances patient care in real-world healthcare settings.
                </p>
              </div>
            </div>
          </Box>
        </Stack>
      </Box>
    </section>
  );
};
