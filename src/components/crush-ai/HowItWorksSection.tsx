import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, FileText, CheckCircle, Stethoscope, History, Languages, FileCheck, Upload, ArrowRight } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

const steps = [
  {
    id: "select-patient",
    title: "Select a Patient",
    description: "Launch CRUSH on any device and instantly access patient data.",
    icon: <Stethoscope className="h-8 w-8" style={{ color: crushAIColors.primary }} />,
    details: [
      {
        title: "Patient Database",
        description: "Instant access to comprehensive patient information"
      }
    ],
    animation: (active, onNext) => (
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
            gap: 1,
            cursor: active ? 'pointer' : 'default'
          }}
          onClick={active ? onNext : undefined}
        >
          <motion.div
            animate={active ? { 
              boxShadow: ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 20px rgba(0,0,0,0.3)', '0px 0px 0px rgba(0,0,0,0)'],
            } : {}}
            transition={{ 
              repeat: Infinity, 
              duration: 2 
            }}
            style={{
              padding: 12,
              borderRadius: 12,
              border: `2px solid ${crushAIColors.primary}`,
              background: 'white'
            }}
          >
            <Stethoscope size={32} style={{ color: crushAIColors.primary }} />
          </motion.div>
          <Typography variant="caption" sx={{ fontWeight: 600, color: active ? crushAIColors.primary : '#666' }}>
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
                bgcolor: `${crushAIColors.tertiary}20`
              }}>
                <Box sx={{ 
                  width: 6, 
                  height: 6, 
                  borderRadius: '50%', 
                  bgcolor: crushAIColors.secondary 
                }} />
                <Typography variant="caption" sx={{ fontSize: '0.7rem', color: crushAIColors.text.primary }}>
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
    title: "Start Speaking",
    description: "Speak naturally in any supported language. Our ambient AI-powered ASR seamlessly records, transcribes, and analyzes conversations in real-time.",
    icon: <Mic className="h-8 w-8" style={{ color: crushAIColors.primary }} />,
    details: [
      {
        icon: <History className="h-6 w-6" style={{ color: crushAIColors.secondary }} />,
        title: "AI Context Awareness",
        description: "Pulls past visit history for highly accurate documentation."
      },
      {
        icon: <Languages className="h-6 w-6" style={{ color: crushAIColors.secondary }} />,
        title: "Telemedicine-Ready",
        description: "Works for in-person, video, chat, or phone consultations."
      }
    ],
    animation: (active, onNext) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-32 w-full"
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 1,
            cursor: active ? 'pointer' : 'default'
          }}
          onClick={active ? onNext : undefined}
        >
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
                border: `2px solid ${crushAIColors.primary}`,
                background: active ? `${crushAIColors.tertiary}20` : 'white'
              }}
            >
              <Mic size={36} style={{ color: crushAIColors.primary }} />
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
                      border: `2px solid ${crushAIColors.primary}80`
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
                      border: `2px solid ${crushAIColors.primary}50`
                    }}
                  />
                </Box>
              </>
            )}
          </Box>
          
          <Typography variant="caption" sx={{ fontWeight: 600, color: active ? crushAIColors.primary : '#666' }}>
            {active ? 'Recording...' : 'Ready to record'}
          </Typography>
          
          {active && (
            <Box sx={{ mt: 2, width: '100%' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 8 }}
                style={{
                  height: 4,
                  background: `linear-gradient(90deg, ${crushAIColors.tertiary}40 0%, ${crushAIColors.primary} 100%)`,
                  borderRadius: 2
                }}
              />
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                mt: 0.5,
                fontSize: '0.7rem',
                color: crushAIColors.text.light
              }}>
                <span>0:00</span>
                <span>Recording...</span>
              </Box>
              
              {active && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 }}
                  className="mt-4 flex justify-center"
                >
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: crushAIColors.secondary, 
                      fontWeight: 600, 
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      textDecoration: 'underline' 
                    }}
                    onClick={onNext}
                  >
                    Complete recording →
                  </Typography>
                </motion.div>
              )}
            </Box>
          )}
        </Box>
      </motion.div>
    )
  },
  {
    id: "review-sign",
    title: "Review & Sign Off",
    description: "Instantly generates EHR-ready medical notes with AI-powered insights.",
    icon: <FileCheck className="h-8 w-8" style={{ color: crushAIColors.primary }} />,
    details: [
      {
        icon: <Upload className="h-6 w-6" style={{ color: crushAIColors.secondary }} />,
        title: "Smart Workflow Automation",
        description: "Auto-handles prescriptions, referrals, labs, follow-ups."
      },
      {
        icon: <FileText className="h-6 w-6" style={{ color: crushAIColors.secondary }} />,
        title: "After-Visit Summaries",
        description: "Auto-generated in the patient's preferred language."
      },
      {
        icon: <CheckCircle className="h-6 w-6" style={{ color: crushAIColors.secondary }} />,
        title: "AI-Powered Coding",
        description: "Supports ICD-10, CPT, HCC, and E/M coding for precision billing."
      }
    ],
    animation: (active, onNext) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-32 w-full"
      >
        <Box 
          sx={{ 
            width: '100%', 
            maxWidth: { xs: 220, sm: 280 },
            cursor: active ? 'pointer' : 'default'
          }}
          onClick={active ? onNext : undefined}
        >
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: 12,
              borderRadius: 8,
              border: `2px solid ${crushAIColors.primary}`,
              background: 'white',
              position: 'relative'
            }}
          >
            <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="caption" sx={{ fontWeight: 600, fontSize: { xs: '0.65rem', sm: '0.75rem' }, color: crushAIColors.text.primary }}>Medical Note</Typography>
              {active && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <CheckCircle size={16} style={{ color: crushAIColors.secondary }} />
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
                        fontSize: { xs: '0.6rem', sm: '0.7rem' }, 
                        mb: 0.5,
                        alignItems: 'center'
                      }}>
                        <Typography sx={{ 
                          fontWeight: 600, 
                          mr: 1,
                          fontSize: { xs: '0.6rem', sm: '0.7rem' },
                          color: crushAIColors.primary
                        }}>
                          {section}
                        </Typography>
                        <Box sx={{ 
                          height: 3, 
                          flex: 1, 
                          bgcolor: `${crushAIColors.tertiary}50`,
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
                  <Typography sx={{ fontSize: { xs: '0.55rem', sm: '0.65rem' }, color: crushAIColors.text.light }}>
                    ICD-10: J45.909
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.55rem', sm: '0.65rem' }, color: crushAIColors.text.light }}>
                    CPT: 99214
                  </Typography>
                </motion.div>
                
                {active && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="mt-4 flex justify-center"
                  >
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: crushAIColors.secondary, 
                        fontWeight: 600, 
                        fontSize: '0.75rem'
                      }}
                    >
                      Generated in under 1 minute
                    </Typography>
                  </motion.div>
                )}
              </Box>
            ) : (
              <Box sx={{ 
                height: { xs: 40, sm: 50 }, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <Typography variant="caption" sx={{ color: crushAIColors.text.light, fontStyle: 'italic', fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Waiting for consultation...
                </Typography>
              </Box>
            )}
          </motion.div>
          
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="mt-4 flex justify-center"
            >
              <Typography 
                variant="caption" 
                sx={{ 
                  color: crushAIColors.secondary, 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  textDecoration: 'underline' 
                }}
                onClick={onNext}
              >
                Start over →
              </Typography>
            </motion.div>
          )}
        </Box>
      </motion.div>
    )
  }
];

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setCompletedSteps(prev => [...prev, activeStep]);
      setActiveStep(activeStep + 1);
    } else {
      setCompletedSteps([]);
      setActiveStep(0);
    }
  };
  
  useEffect(() => {
    setActiveStep(0);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  
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
              color: crushAIColors.primary
            }}
          >
            How CRUSH Works
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: crushAIColors.text.secondary,
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
              color: crushAIColors.text.secondary,
              fontWeight: 600,
              fontSize: "1.2rem"
            }}
          >
            AI-Generated Notes in Under 1 Minute – No More Manual Charting!
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'stretch',
            mb: 6,
            mx: 'auto',
            maxWidth: 1200
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '30%' },
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isCompleted = completedSteps.includes(index);
              
              return (
                <Box
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0.8, x: -10 }}
                  animate={{ 
                    opacity: isActive || isCompleted ? 1 : 0.7,
                    x: 0,
                    backgroundColor: isActive ? 'rgba(0, 0, 0, 0.03)' : 'transparent'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: 'rgba(0, 0, 0, 0.02)' 
                  }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActiveStep(index)}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                    boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: isCompleted ? '#10b981' : isActive ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: isActive && !isCompleted ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                  >
                    {isCompleted ? (
                      <CheckCircle size={20} className="text-white" />
                    ) : (
                      <Typography sx={{ fontWeight: 600, color: '#333' }}>
                        {index + 1}
                      </Typography>
                    )}
                  </Box>
                  
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? '#000' : '#333',
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }}
                    >
                      {step.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        fontSize: { xs: '0.75rem', sm: '0.8rem' },
                        display: { xs: 'none', sm: 'block' },
                        mt: 0.5
                      }}
                    >
                      {step.description.length > 60 
                        ? `${step.description.substring(0, 60)}...` 
                        : step.description
                      }
                    </Typography>
                  </Box>
                  
                  {isActive && (
                    <Box 
                      component={motion.div}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      sx={{ ml: 'auto' }}
                    >
                      <Box 
                        sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: '#000' 
                        }}
                        component={motion.div}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5] 
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5
                        }}
                      />
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
          
          <Box
            sx={{
              width: { xs: '100%', md: '70%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
              bgcolor: 'rgba(0, 0, 0, 0.01)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              p: { xs: 2, sm: 4 },
              minHeight: 400
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#333',
                      textAlign: 'center',
                      fontSize: { xs: '1.5rem', sm: '1.75rem' }
                    }}
                  >
                    {steps[activeStep].title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#555',
                      textAlign: 'center',
                      maxWidth: 600,
                      mb: 2,
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    {steps[activeStep].description}
                  </Typography>
                  
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      p: 2
                    }}
                  >
                    {steps[activeStep].animation(true, handleNextStep)}
                  </Box>
                  
                  <AnimatePresence>
                    {steps[activeStep].details && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '100%', overflow: 'hidden' }}
                      >
                        <Box
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fit, minmax(250px, 1fr))' },
                            gap: 2,
                            width: '100%',
                            mt: 2
                          }}
                        >
                          {steps[activeStep].details.map((detail, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.3 }}
                            >
                              <Box 
                                sx={{ 
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  p: 2,
                                  borderRadius: 2,
                                  bgcolor: 'rgba(0,0,0,0.02)',
                                  border: '1px solid rgba(0,0,0,0.05)',
                                  height: '100%'
                                }}
                              >
                                {detail.icon && (
                                  <Box sx={{ 
                                    mr: 1.5, 
                                    mt: 0.5,
                                    color: '#333',
                                    flexShrink: 0
                                  }}>
                                    {detail.icon}
                                  </Box>
                                )}
                                <Box>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#333' }}>
                                    {detail.title}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: '#555', fontSize: '0.8rem' }}>
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
              </motion.div>
            </AnimatePresence>
            
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                gap: 2,
                justifyContent: 'center'
              }}
            >
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="outlined"
                onClick={handleNextStep}
                sx={{
                  borderColor: '#333',
                  color: '#333',
                  py: 1,
                  px: 3,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  borderRadius: 1.5,
                  '&:hover': {
                    borderColor: '#000',
                    bgcolor: 'rgba(0, 0, 0, 0.05)'
                  }
                }}
              >
                {activeStep === steps.length - 1 ? 'Start Over' : 'Next Step'}
                <ArrowRight size={16} className="ml-1" />
              </Button>
            </Box>
          </Box>
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
              bgcolor: crushAIColors.primary,
              color: 'white',
              py: { xs: 1, md: 1.5 },
              px: { xs: 3, md: 4 },
              fontSize: { xs: '0.875rem', md: '1rem' },
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                bgcolor: `${crushAIColors.primary}e6`
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
