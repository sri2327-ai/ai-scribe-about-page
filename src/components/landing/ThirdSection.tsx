import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box, Tabs, Tab, Stack, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from "framer-motion";

export const ThirdSection = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const MotionPaper = motion(Paper);
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setExpanded('panel1');
    setTabValue(newValue);
  };

  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  
  const handleAccChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
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
    <section className="py-10 px-4 md:px-8">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
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
        <Stack
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          useFlexGap
        >
          <Box sx={{ display: 'flex', overflow: "hidden", flexDirection: 'column', minWidth: { xs: 'unset', md: '340px' }, maxWidth: { xs: '100%', md: 'unset' } }}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="scrollable auto tabs example"
              sx={{
                pb: 3,
                "& .Mui-disabled": { display: tabValue === 0 ? "none" : "inline-flex", opacity: 0.3, pointerEvents: "none" },
                "& .MuiTabs-indicator": { display: "none" },
                "& .MuiTabs-scroller": { mx: 1 },
                "& .MuiTabScrollButton-root": {
                  border: "1px solid #000000",
                  background: "#ffffff",
                  color: "#000000",
                  borderRadius: "50%",
                }
              }}
            >
              {tabKeys.map((value, index) => (
                <Tab 
                  key={index}
                  label={value}
                  sx={{
                    borderRadius: '50px',
                    border: "1px solid #000000",
                    color: "#000000",
                    mx: 1,
                    minHeight: 'unset',
                    "&.Mui-selected": {
                      border: "1px solid #000000",
                      backgroundColor: "#ffffff",
                      color: "#000000"
                    },
                    fontWeight: 'bold',
                  }}
                />
              ))}
            </Tabs>
            {Object.values(tabAccData).map((value, index) => (
              tabValue === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut'
                  }}
                >
                  {value.map((item, itemIndex) => {
                    const panelName = `panel${itemIndex + 1}`;
                    return (
                      <Accordion 
                        key={itemIndex} 
                        expanded={expanded === panelName} 
                        onChange={handleAccChange(panelName)}
                        sx={{
                          borderBottom: "1px solid #000000",
                          boxShadow: "none",
                          "&:before": {
                            display: "none",
                          },
                          "&.MuiAccordion-root.Mui-expanded": {
                            margin: '0',
                            padding: '16px 0'
                          }
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<KeyboardArrowDownIcon />}
                          aria-controls={`${panelName}-content`}
                          id={`${panelName}-header`}
                          sx={{
                            "&.Mui-expanded": {
                              minHeight: 'unset',
                            },
                            "& .MuiAccordionSummary-content.Mui-expanded": {
                              my: 1
                            },
                          }}
                        >
                          <Typography variant="body1" fontWeight="semiBold" sx={{ color: "#000000" }}>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body2" fontWeight="medium" sx={{ color: "#000000" }}>{item.content}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </motion.div>
              )
            ))}
          </Box>
          <Box sx={{ aspectRatio: "16/9", overflow: "hidden", display: 'flex', flexGrow: 1, minWidth: { xs: "260px", sm: "400px" }, minHeight: "250px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/unmWENGNuo4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "unset" }}
            ></iframe>
          </Box>
        </Stack>
      </Box>
    </section>
  );
};
