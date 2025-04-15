
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Calendar, Brain, Check } from "lucide-react";

export const WorkflowAutomationSection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: '#fafafa'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ mb: 8, textAlign: 'center' }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              mb: 3,
              color: '#000000',
              letterSpacing: '-0.02em'
            }}
          >
            More Than Just an AI Scribe – CRUSH Automates Clinical Workflows
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 900,
              mx: 'auto',
              color: '#403E43',
              fontSize: '1.1rem'
            }}
          >
            Crush is more than an AI medical scribe—it streamlines healthcare workflows, automates tasks, and enhances patient care, transforming how clinics operate, including for specialty visits.
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 4,
                  fontWeight: 'medium',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Calendar size={28} className="text-tealBlueBright" />
                Automate Staffing & Cut Admin Work
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  color: '#403E43'
                }}
              >
                CRUSH eliminates repetitive tasks so you can focus on patient care, not paperwork.
              </Typography>
              <Box>
                {[
                  "Prescription Refills – Automates refill requests & pharmacy submissions.",
                  "Smart Screening – Conducts PHQ-9, GAD-7, PCL-5, AUDIT, CSSRS assessments.",
                  "Pre-Charting – Prepares charts, retrieves history, and uploads patient documents.",
                  "Lab Orders & Results – Automates lab order submissions & updates lab results in patient charts.",
                  "Referral Automation – Drafts referral letters with intelligent patient insights.",
                  "CRM Sync – Seamlessly transfers patient demographics into your CRM system."
                ].map((item, index) => (
                  <Box 
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: 1.5,
                      mb: 2
                    }}
                  >
                    <Check size={20} className="text-tealBlueBright mt-1 flex-shrink-0" />
                    <Typography variant="body1" sx={{ color: '#403E43' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 4,
                  fontWeight: 'medium',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Brain size={28} className="text-tealBlueBright" />
                AI Assistance for Physicians
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  color: '#403E43'
                }}
              >
                CRUSH isn't just a scribe—it's an AI-driven clinical assistant that enhances decision-making, compliance, and patient care.
              </Typography>
              <Box>
                {[
                  "Clinical Decision Support – Instant guidelines, medical insights & jargon clarification.",
                  "CDI & Compliance – Ensures accurate, structured & compliant documentation.",
                  "HCC MEAT Tracking – Monitors MEAT criteria for follow-ups & risk adjustments.",
                  "Auto-Generated Treatment Plans – SMART-based, personalized care plans.",
                  "Preventive Screening & Risk Analysis – Flags patterns & preventive care needs early.",
                  "Longitudinal Intelligence – Captures historical data for continuity of care."
                ].map((item, index) => (
                  <Box 
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: 1.5,
                      mb: 2
                    }}
                  >
                    <Check size={20} className="text-tealBlueBright mt-1 flex-shrink-0" />
                    <Typography variant="body1" sx={{ color: '#403E43' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
