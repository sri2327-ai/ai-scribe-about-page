
import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Mic, FileText, Upload, CheckCircle2, History, Stethoscope, FileCheck, Languages } from "lucide-react";

// New steps based on the provided content
const steps = [
  {
    icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
    title: "1️⃣ Select a Patient",
    description: "Launch CRUSH on any device and instantly access patient data.",
    details: "Access your entire patient database from any device - desktop, tablet, or mobile. CRUSH integrates with your existing systems for seamless patient selection."
  },
  {
    icon: <Mic className="h-6 w-6 text-blue-500" />,
    title: "2️⃣ Start Speaking",
    description: "Speak naturally in any supported language. Our ambient AI-powered ASR seamlessly records, transcribes, and analyzes conversations in real-time.",
    details: "No need to change how you speak or interact with patients. CRUSH's advanced AI works in the background, capturing every detail with industry-leading accuracy."
  },
  {
    icon: <History className="h-6 w-6 text-blue-500" />,
    title: "AI Context Awareness",
    description: "Pulls past visit history for highly accurate documentation.",
    details: "CRUSH automatically references previous visits and patient history to ensure comprehensive and contextually relevant documentation."
  },
  {
    icon: <Languages className="h-6 w-6 text-blue-500" />,
    title: "Telemedicine-Ready",
    description: "Works for in-person, video, chat, or phone consultations.",
    details: "Whether you're in the same room or across the country from your patient, CRUSH adapts to any consultation format."
  },
  {
    icon: <FileCheck className="h-6 w-6 text-blue-500" />,
    title: "3️⃣ Review & Sign Off",
    description: "Instantly generates EHR-ready medical notes with AI-powered insights.",
    details: "Within seconds of completing your consultation, review perfectly formatted notes and sign off with confidence."
  },
  {
    icon: <Upload className="h-6 w-6 text-blue-500" />,
    title: "Smart Workflow Automation",
    description: "Auto-handles prescriptions, referrals, labs, follow-ups.",
    details: "CRUSH automatically prepares all necessary documentation based on your consultation, ready for your approval."
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    title: "After-Visit Summaries",
    description: "Auto-generated in the patient's preferred language.",
    details: "Ensure patients fully understand their care plan with comprehensive summaries in their preferred language."
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-blue-500" />,
    title: "AI-Powered Coding",
    description: "Supports ICD-10, CPT, HCC, and E/M coding for precision billing.",
    details: "Never miss a billable code again. CRUSH ensures accurate and comprehensive coding for optimal reimbursement."
  }
];

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#ffffff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ mb: 6, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 800,
              mb: 3,
              color: "#000000"
            }}
          >
            How CRUSH Works
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#403E43",
              fontWeight: 400,
              mb: 2
            }}
          >
            Experience the simplicity and power of CRUSH in your clinical workflow
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#1a73e8",
              fontWeight: 600,
              fontSize: "1.2rem"
            }}
          >
            AI-Generated Notes in Under 1 Minute – No More Manual Charting!
          </Typography>
        </Box>

        {/* Interactive Workflow Steps */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            mb: 6
          }}
        >
          {steps.map((step, index) => {
            const isMainStep = step.title.includes("️⃣");
            const isActive = activeStep === index;
            
            return (
              <Box 
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
                  borderColor: "rgba(0, 120, 255, 0.3)"
                }}
                onClick={() => setActiveStep(isActive ? null : index)}
                sx={{
                  width: { xs: '100%', sm: isMainStep ? 'calc(50% - 16px)' : 'calc(33% - 16px)', md: isMainStep ? 'calc(33% - 16px)' : 'calc(25% - 16px)' },
                  p: 3,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: isActive ? 'rgba(0, 120, 255, 0.3)' : 'rgba(0, 0, 0, 0.08)',
                  boxShadow: isActive ? '0 8px 20px rgba(0, 120, 255, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1,
                  bgcolor: isActive ? 'rgba(240, 249, 255, 0.8)' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minHeight: isMainStep ? '220px' : '200px'
                }}
              >
                <Box 
                  component={motion.div}
                  animate={isActive ? { 
                    scale: [1, 1.2, 1],
                    rotateZ: [0, 10, -10, 0],
                    transition: { 
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1
                    }
                  } : {}}
                  sx={{ 
                    bgcolor: isMainStep ? 'rgba(26, 115, 232, 0.1)' : 'rgba(30, 174, 219, 0.1)',
                    borderRadius: '50%',
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    color: isMainStep ? '#1a73e8' : '#1EAEDB'
                  }}
                >
                  {React.cloneElement(step.icon, { size: isMainStep ? 30 : 24, className: isMainStep ? "text-blue-600" : "text-blue-500" })}
                </Box>
                
                <Typography 
                  component={motion.h3}
                  initial={false}
                  animate={isActive ? { color: "#1a73e8" } : { color: "#000000" }}
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1,
                    color: isMainStep ? "#1a73e8" : "#000000"
                  }}
                >
                  {step.title}
                </Typography>
                
                <Typography 
                  variant="body2"
                  sx={{ 
                    color: '#666',
                    mb: 2,
                    flex: 1
                  }}
                >
                  {step.description}
                </Typography>
                
                {isActive && (
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    sx={{ width: '100%' }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        p: 2,
                        bgcolor: 'rgba(26, 115, 232, 0.05)',
                        borderRadius: 1,
                        color: '#444',
                        fontStyle: 'italic',
                        borderLeft: '3px solid #1a73e8'
                      }}
                    >
                      {step.details}
                    </Typography>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
        
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center' }}
        >
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variant="contained"
            sx={{
              bgcolor: '#1a73e8',
              color: 'white',
              py: 1.5,
              px: 4,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: '0 4px 14px rgba(26, 115, 232, 0.4)',
              '&:hover': {
                bgcolor: '#0d47a1'
              }
            }}
          >
            REQUEST A DEMO
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
