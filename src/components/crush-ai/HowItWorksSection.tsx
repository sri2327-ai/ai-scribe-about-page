
import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, FileText, CheckCircle, Stethoscope, History, Languages, FileCheck, Upload } from "lucide-react";

// Simplified to just 3 main steps
const steps = [
  {
    id: "select-patient",
    icon: <Stethoscope className="h-8 w-8" />,
    title: "1️⃣ Select a Patient",
    description: "Launch CRUSH on any device and instantly access patient data.",
    animation: (active) => (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: active ? 1 : 0.5, 
          scale: active ? 1 : 0.8,
          y: active ? [0, -5, 0] : 0
        }}
        transition={{ 
          duration: 0.5,
          y: { 
            repeat: active ? Infinity : 0,
            duration: 2
          }
        }}
        className="flex items-center justify-center h-24 w-full"
      >
        <Box 
          sx={{ 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
          }}
        >
          <motion.div
            animate={active ? { 
              boxShadow: ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 20px rgba(0,120,255,0.3)', '0px 0px 0px rgba(0,0,0,0)'],
            } : {}}
            transition={{ 
              repeat: Infinity, 
              duration: 2 
            }}
            style={{
              padding: 12,
              borderRadius: 12,
              border: '2px solid #000',
              background: 'white'
            }}
          >
            <Stethoscope size={32} className="text-black" />
          </motion.div>
          <Typography variant="caption" sx={{ fontWeight: 600, color: active ? '#1a73e8' : '#666' }}>
            Patient Database
          </Typography>
          {active && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              className="mt-2"
            >
              <Box sx={{ 
                display: 'flex', 
                gap: 1, 
                alignItems: 'center', 
                p: 1, 
                borderRadius: 1,
                bgcolor: 'rgba(0,0,0,0.05)'
              }}>
                <Box sx={{ 
                  width: 6, 
                  height: 6, 
                  borderRadius: '50%', 
                  bgcolor: 'green' 
                }} />
                <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
                  Connected to EHR
                </Typography>
              </Box>
            </motion.div>
          )}
        </Box>
      </motion.div>
    )
  },
  {
    id: "start-speaking",
    icon: <Mic className="h-8 w-8" />,
    title: "2️⃣ Start Speaking",
    description: "Speak naturally in any supported language. Our ambient AI-powered ASR seamlessly records, transcribes, and analyzes conversations in real-time.",
    details: [
      {
        icon: <History className="h-6 w-6" />,
        title: "AI Context Awareness",
        description: "Pulls past visit history for highly accurate documentation."
      },
      {
        icon: <Languages className="h-6 w-6" />,
        title: "Telemedicine-Ready",
        description: "Works for in-person, video, chat, or phone consultations."
      }
    ],
    animation: (active) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-32 w-full"
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Box sx={{ position: 'relative' }}>
            <motion.div
              initial={{ scale: 1 }}
              animate={active ? { 
                scale: [1, 1.1, 1],
              } : {}}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5
              }}
              style={{
                padding: 16,
                borderRadius: '50%',
                border: '2px solid #000',
                background: active ? 'rgba(255, 59, 48, 0.1)' : 'white'
              }}
            >
              <Mic size={36} className="text-black" />
            </motion.div>
            
            {active && (
              <>
                <Box sx={{ position: 'absolute', inset: '-8px', zIndex: -1 }}>
                  <motion.div
                    initial={{ opacity: 0.7, scale: 1 }}
                    animate={{ 
                      opacity: 0,
                      scale: 1.5 
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 1.5,
                      repeatDelay: 0.2
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      border: '2px solid rgba(255, 59, 48, 0.5)'
                    }}
                  />
                </Box>
                
                <Box sx={{ position: 'absolute', inset: '-16px', zIndex: -2 }}>
                  <motion.div
                    initial={{ opacity: 0.5, scale: 1 }}
                    animate={{ 
                      opacity: 0,
                      scale: 1.7
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      repeatDelay: 0.1
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      border: '2px solid rgba(255, 59, 48, 0.3)'
                    }}
                  />
                </Box>
              </>
            )}
          </Box>
          
          <Typography variant="caption" sx={{ fontWeight: 600, color: active ? 'red' : '#666' }}>
            {active ? 'Recording...' : 'Ready to record'}
          </Typography>
          
          {active && (
            <Box sx={{ mt: 2, width: '100%' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{
                  height: 4,
                  background: 'linear-gradient(90deg, #f3f3f3 0%, #ff3b30 100%)',
                  borderRadius: 2
                }}
              />
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                mt: 0.5,
                fontSize: '0.7rem',
                color: '#666'
              }}>
                <span>0:00</span>
                <span>Recording...</span>
              </Box>
            </Box>
          )}
        </Box>
      </motion.div>
    )
  },
  {
    id: "review-sign",
    icon: <FileCheck className="h-8 w-8" />,
    title: "3️⃣ Review & Sign Off",
    description: "Instantly generates EHR-ready medical notes with AI-powered insights.",
    details: [
      {
        icon: <Upload className="h-6 w-6" />,
        title: "Smart Workflow Automation",
        description: "Auto-handles prescriptions, referrals, labs, follow-ups."
      },
      {
        icon: <FileText className="h-6 w-6" />,
        title: "After-Visit Summaries",
        description: "Auto-generated in the patient's preferred language."
      },
      {
        icon: <CheckCircle className="h-6 w-6" />,
        title: "AI-Powered Coding",
        description: "Supports ICD-10, CPT, HCC, and E/M coding for precision billing."
      }
    ],
    animation: (active) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-32 w-full"
      >
        <Box sx={{ width: '100%', maxWidth: 280 }}>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: 12,
              borderRadius: 8,
              border: '2px solid #000',
              background: 'white',
              position: 'relative'
            }}
          >
            <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>Medical Note</Typography>
              {active && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <CheckCircle size={16} className="text-green-600" />
                </motion.div>
              )}
            </Box>
            
            {active ? (
              <Box>
                <AnimatePresence>
                  {['S:', 'O:', 'A:', 'P:'].map((section, i) => (
                    <motion.div
                      key={section}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.3 + 0.2 }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        fontSize: '0.7rem', 
                        mb: 0.5,
                        alignItems: 'center'
                      }}>
                        <Typography sx={{ 
                          fontWeight: 600, 
                          mr: 1,
                          fontSize: '0.7rem'
                        }}>
                          {section}
                        </Typography>
                        <Box sx={{ 
                          height: 3, 
                          flex: 1, 
                          bgcolor: 'rgba(0,0,0,0.1)',
                          borderRadius: 1
                        }} />
                      </Box>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  style={{
                    marginTop: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography sx={{ fontSize: '0.65rem', color: '#666' }}>
                    ICD-10: J45.909
                  </Typography>
                  <Typography sx={{ fontSize: '0.65rem', color: '#666' }}>
                    CPT: 99214
                  </Typography>
                </motion.div>
              </Box>
            ) : (
              <Box sx={{ 
                height: 50, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <Typography variant="caption" sx={{ color: '#999', fontStyle: 'italic' }}>
                  Waiting for consultation...
                </Typography>
              </Box>
            )}
          </motion.div>
          
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              style={{
                marginTop: 12,
                textAlign: 'center'
              }}
            >
              <Typography variant="caption" sx={{ color: 'green', fontWeight: 600 }}>
                Generated in under 1 minute
              </Typography>
            </motion.div>
          )}
        </Box>
      </motion.div>
    )
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
          sx={{ mb: 8, textAlign: "center" }}
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

        {/* Interactive Workflow Steps - Only 3 Main Cards */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            mb: 6
          }}
        >
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            
            return (
              <Box 
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => setActiveStep(isActive ? null : index)}
                sx={{
                  width: { xs: '100%', md: '33%' },
                  p: 4,
                  borderRadius: 3,
                  border: '2px solid',
                  borderColor: isActive ? '#1a73e8' : 'rgba(0, 0, 0, 0.12)',
                  boxShadow: isActive ? '0 8px 30px rgba(0, 120, 255, 0.12)' : '0 4px 6px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1,
                  bgcolor: isActive ? 'rgba(240, 249, 255, 0.8)' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minHeight: 320,
                  overflow: 'hidden',
                  "&:hover": {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    borderColor: 'rgba(0, 120, 255, 0.3)'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    bgcolor: isActive ? 'rgba(26, 115, 232, 0.1)' : 'rgba(0, 0, 0, 0.04)',
                    borderRadius: '50%',
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ color: 'black' }}>
                    {step.icon}
                  </Box>
                </Box>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1.5,
                    color: "#000",
                    transition: 'all 0.3s ease',
                  }}
                >
                  {step.title}
                </Typography>
                
                <Typography 
                  variant="body2"
                  sx={{ 
                    color: '#333',
                    mb: 3,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {step.description}
                </Typography>

                {/* Interactive Animation Section */}
                {step.animation(isActive)}
                
                {/* Details that show on active */}
                <AnimatePresence>
                  {isActive && step.details && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ width: '100%', overflow: 'hidden' }}
                    >
                      <Box sx={{ mt: 2 }}>
                        {step.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                          >
                            <Box 
                              sx={{ 
                                display: 'flex',
                                alignItems: 'flex-start',
                                mb: 2,
                                p: 1,
                                borderRadius: 1,
                                bgcolor: 'rgba(0,0,0,0.02)',
                                textAlign: 'left'
                              }}
                            >
                              <Box sx={{ 
                                mr: 1.5, 
                                mt: 0.5,
                                color: '#000'
                              }}>
                                {detail.icon}
                              </Box>
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                  {detail.title}
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#555' }}>
                                  {detail.description}
                                </Typography>
                              </Box>
                            </Box>
                          </motion.div>
                        ))}
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
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
