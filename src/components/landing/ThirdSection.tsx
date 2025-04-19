
import React, { useState } from 'react';
import { Box, Stack, Typography, Tabs, Tab } from "@mui/material";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const ThirdSection = () => {
  const [tabValue, setTabValue] = useState(0);
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  const tabAccData = {
    "The S10.AI Advantage": [
      { "title": "Maximize Patient Interaction", "content": "Minimize paperwork and focus on quality AI for patient care." },
      { "title": "Boost Efficiency & Well-Being", "content": "Alleviate burnout with intelligent automation and AI for physician burnout reduction." },
      { "title": "Address Staffing Shortages", "content": "AI-powered efficiency ensures uninterrupted clinic operations and an enhanced patient experience." },
      { "title": "Improve financial impact", "content": "Expand services, reduce denials, and enhance revenue." },
    ],
    "Streamline documentation": [
      { "title": "Create clinical documentation automatically", "content": "Auto-generate accurate, specialty-specific notes from multilingual patient-clinician conversations, even offline." },
      { "title": "Superior Documentation Accuracy", "content": "AI-driven medical transcription with Generative AI minimizes human error." },
      { "title": "Seamless Integration", "content": "Fully compatible with any electronic health record (EHR)" },
      { "title": "Clinical Decision Support", "content": "Instant guidelines, medical insights & jargon clarification." }
    ],
    "AI powered Front Office": [
      { "title": "Smart Appointment Management", "content": "AI handles scheduling, reschedules, cancellations, and automated reminders to reduce no-shows." },
      { "title": "Seamless Patient Intake", "content": "Automates registration, history updates, and pre-visit documentation for faster onboarding." },
      { "title": "Effortless Refill Processing", "content": "Verifies patients, confirms prescriptions, and alerts staff for quick approvals." },
      { "title": "Proactive Preventative Care", "content": "AI-driven screenings (PHQ-9, GAD-7, etc.) and custom health plans enhance patient well-being." },
      { "title": "RCM Automation", "content": "Streamlines insurance checks, prior authorizations, payment posting, and claim follow-ups for faster reimbursements." }
    ],
    "Automate Tasks": [
      { "title": "Automated Coding", "content": "AI-driven ICD-10 & E/M , CPT & HCC code capture." },
      { "title": "Simplified Orders & Prescriptions", "content": "Automates medication & lab orders." },
      { "title": "Instant Summaries", "content": "Generates referrals, after-visit notes & letters. " },
      { "title": "Smart Pre-Charting", "content": "Prepares charts & retrieves patient history." },
      { "title": "Seamless Lab & CRM Sync", "content": "Auto-updates lab results & patient records." }
    ]
  };

  const tabKeys = Object.keys(tabAccData);

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

        <Box 
          component="nav" 
          sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}
          aria-label="Healthcare AI benefits navigation"
        >
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
            {tabKeys.map((value, index) => (
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

        <Stack
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          sx={{ width: '100%' }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              width: { xs: '100%', md: '60%' }, 
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              p: 3,
              minHeight: { xs: '400px', md: '500px' }
            }}
            role="tabpanel"
            id={`tabpanel-${tabValue}`}
            aria-labelledby={`tab-${tabValue}`}
          >
            <Box sx={{ overflowY: 'auto', height: '100%', maxHeight: { xs: '400px', md: '600px' } }}>
              {Object.values(tabAccData).map((value, index) => (
                tabValue === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <Accordion 
                      type="single" 
                      collapsible 
                      className="w-full border-none space-y-4"
                      defaultValue="item-0"
                    >
                      {value.map((item, itemIndex) => (
                        <AccordionItem 
                          value={`item-${itemIndex}`} 
                          key={itemIndex}
                          className="border border-gray-200 rounded-lg overflow-hidden bg-white mb-2 hover:border-[#387E89] transition-colors"
                          data-accordion-item={`${tabKeys[index]}-${item.title}`}
                        >
                          <AccordionTrigger className="text-black hover:text-[#387E89] hover:no-underline px-4 py-3 text-lg font-semibold">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent className="text-black/80 px-4 pb-3 text-base leading-relaxed">
                            {item.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                )
              ))}
            </Box>
          </Box>
          <Box 
            component="aside"
            sx={{ 
              aspectRatio: "16/9", 
              width: { xs: "100%", md: "40%" },
              minHeight: { xs: "250px", md: "300px" },
              maxHeight: { md: "400px" },
              borderRadius: '8px',
              overflow: "hidden",
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/unmWENGNuo4"
              title="S10.AI Healthcare Solutions Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
              loading="lazy"
              aria-describedby="video-description"
            ></iframe>
            <span id="video-description" className="sr-only">
              This video demonstrates S10.AI's healthcare solutions in action, showing how our technology helps healthcare providers.
            </span>
          </Box>
        </Stack>
      </Box>
    </section>
  );
};
