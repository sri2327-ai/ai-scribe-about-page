
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, HardDrive, Send, CheckCircle, 
  ClipboardList, TestTube, Mail, Mic, 
  Clock, Heart, Database, History
} from "lucide-react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

// Define primary color for consistency
const primaryColor = "#143151";

const workflowSteps = [
  {
    id: "start",
    title: "Start Encounter",
    icon: <Send size={30} className="text-black" />,
    description: "Recording patient conversation...",
    detailContent: (
      <Box sx={{ mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            py: 2
          }}
        >
          <Mic size={36} className="text-gray-600" />
          <Typography 
            sx={{ 
              color: '#666',
              fontSize: '0.875rem', 
              textAlign: 'center'
            }}
          >
            00:00
          </Typography>
          <Box 
            sx={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 0.5 
            }}
          >
            {Array(20).fill(0).map((_, i) => (
              <Box 
                key={i}
                sx={{ 
                  width: '2px', 
                  height: '8px', 
                  borderRadius: '1px',
                  bgcolor: 'rgba(0,0,0,0.2)',
                  animation: i % 2 === 0 ? 'pulse 1.5s infinite' : 'none'
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    )
  },
  {
    id: "previous",
    title: "Previous Visit Context",
    icon: <History size={30} className="text-black" />,
    description: "Reviewing patient history for context...",
    detailContent: (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: '1px solid rgba(0,0,0,0.1)', 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: 'rgba(0,0,0,0.02)',
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            position: 'relative',
            height: '80px',
            overflow: 'hidden'
          }}
        >
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '8px',
              left: '12px',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              animation: 'typing 2s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            <span className="font-semibold">Visit Date:</span> March 12, 2025
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '28px',
              left: '12px',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              animation: 'typing 2s 0.5s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            <span className="font-semibold">Symptoms:</span> Recurring headaches, vision changes
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '48px',
              left: '12px',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              animation: 'typing 2s 1s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            <span className="font-semibold">Plan:</span> MRI ordered, follow-up in two weeks
          </Typography>
        </Box>
      </Box>
    )
  },
  {
    id: "notes",
    title: "Generate Clinical Notes",
    icon: <FileText size={30} className="text-black" />,
    description: "Creating comprehensive documentation using your preferred templates...",
    detailContent: (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: '1px solid rgba(0,0,0,0.1)', 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: 'rgba(0,0,0,0.02)',
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            position: 'relative',
            height: '100px',
            overflow: 'hidden'
          }}
        >
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '8px',
              left: '12px',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              animation: 'typing 2s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            <span className="font-semibold">SUBJECTIVE:</span> Patient presents with acute abdominal pain...
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '28px',
              left: '12px',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              animation: 'typing 2s 0.5s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            <span className="font-semibold">OBJECTIVE:</span> Temp 101.2°F, tender RLQ with guarding...
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '48px',
              left: '12px',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              animation: 'typing 2s 1s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            <span className="font-semibold">ICD-10:</span> K35.80 (Unspecified acute appendicitis)
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '68px',
              left: '12px',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              animation: 'typing 2s 1.5s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            <span className="font-semibold">CPT/E&M:</span> 99203 (New patient, detailed exam)
          </Typography>
        </Box>
      </Box>
    )
  },
  {
    id: "referral",
    title: "Create Referral Letters",
    icon: <ClipboardList size={30} className="text-black" />,
    description: "Preparing specialist referrals...",
    detailContent: (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: '1px solid rgba(0,0,0,0.1)', 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: 'rgba(0,0,0,0.02)',
            fontSize: '0.75rem',
            height: '80px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '8px',
              left: '12px',
              fontSize: '0.75rem',
              animation: 'typing 2s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            Dear Dr. John Doe,
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '28px',
              left: '12px',
              fontSize: '0.75rem',
              animation: 'typing 2s 0.7s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            I'm referring a patient with suspected acute appendicitis...
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '48px',
              left: '12px',
              fontSize: '0.75rem',
              animation: 'typing 2s 1.4s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            Urgent surgical consultation is recommended...
          </Typography>
        </Box>
      </Box>
    )
  },
  {
    id: "labs",
    title: "Process Lab & Prescription Orders",
    icon: <TestTube size={30} className="text-black" />,
    description: "Submitting necessary lab work and prescriptions...",
    detailContent: (
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {[
            { name: "CBC with Differential", status: "Ordered" },
            { name: "C-Reactive Protein", status: "Ordered" },
            { name: "Comprehensive Metabolic Panel", status: "Ordered" },
            { name: "Amoxicillin 500mg", type: "Rx", status: "Prescribed" }
          ].map((item, i) => (
            <Box 
              key={i}
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                bgcolor: item.type === 'Rx' ? 'rgba(252, 211, 77, 0.1)' : 'rgba(96, 165, 250, 0.1)',
                border: item.type === 'Rx' ? '1px solid rgba(252, 211, 77, 0.3)' : '1px solid rgba(96, 165, 250, 0.3)',
                fontSize: '0.75rem',
                animation: `slideIn 0.3s ${i * 0.15}s both`
              }}
            >
              <Typography sx={{ fontSize: '0.75rem', color: '#333' }}>
                {item.name}
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: '0.7rem', 
                  color: 'green',
                  bgcolor: 'rgba(0,128,0,0.1)',
                  px: 0.8,
                  py: 0.2,
                  borderRadius: 1,
                  ml: 1
                }}
              >
                {item.status}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    )
  },
  {
    id: "instructions",
    title: "Generate Patient Instructions",
    icon: <Mail size={30} className="text-black" />,
    description: "Creating personalized care instructions...",
    detailContent: (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: '1px solid rgba(0,0,0,0.1)', 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: 'rgba(0,0,0,0.02)',
            fontSize: '0.75rem',
            position: 'relative',
            height: '100px',
            overflow: 'hidden'
          }}
        >
          <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#666' }}>
            <Mail size={12} className="inline mr-1" /> Sent via secure email
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              fontSize: '0.75rem',
              mb: 0.5,
              animation: 'fadeIn 0.5s'
            }}
          >
            Dear Patient,
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              fontSize: '0.75rem',
              mb: 1,
              animation: 'fadeIn 0.5s 0.3s both'
            }}
          >
            Thank you for choosing Medical Center for your care. Below are your instructions following your appendectomy on April 14, 2025:
          </Typography>
          <Box sx={{ fontSize: '0.75rem', pl: 2 }}>
            <Typography 
              component="div" 
              sx={{ 
                fontSize: '0.75rem', 
                mb: 0.5,
                animation: 'fadeIn 0.5s 0.6s both'
              }}
            >
              • Medication: Take Ibuprofen 400 mg every 6 hours for pain...
            </Typography>
            <Typography 
              component="div" 
              sx={{ 
                fontSize: '0.75rem',
                animation: 'fadeIn 0.5s 0.9s both'
              }}
            >
              • Rest for 48 hours; avoid lifting heavy objects...
            </Typography>
          </Box>
        </Box>
      </Box>
    )
  },
  {
    id: "ehr",
    title: "Push Notes to EHR",
    icon: <Database size={30} className="text-black" />,
    description: "Secure integration with all EHR systems",
    detailContent: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ fontSize: '0.8rem', mb: 1, textAlign: 'center' }}>
          All documents pushed to your preferred fields in your EHR
        </Typography>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            bgcolor: 'rgba(0,0,0,0.03)',
            borderRadius: 1,
            border: '1px dashed rgba(0,0,0,0.1)'
          }}
        >
          <Typography
            component={motion.div}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.98, 1, 0.98]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2
            }}
            sx={{ 
              fontSize: '0.8rem',
              textAlign: 'center',
              fontStyle: 'italic',
              color: '#555'
            }}
          >
            Secure integration with all EHR systems
          </Typography>
        </Box>
      </Box>
    )
  }
];

export function AnimatedWorkflow() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const [hovered, setHovered] = useState<number | null>(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Make sure to include all necessary steps for mobile view
  // Update mobileSteps to include all steps (0-6) - especially for final step Push to EHR
  const mobileSteps = isMobile ? [0, 2, 5, 6] : [0, 1, 2, 3, 4, 5, 6];
  
  const isMobileStepVisible = (index: number) => {
    return mobileSteps.includes(index);
  };

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsRecording(true);
      setIsAutoPlaying(true);
    }, 1000);
    
    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (isRecording && isAutoPlaying) {
      const intervalId = setInterval(() => {
        setCurrentStep((prev) => {
          // For mobile view, make sure we're only navigating through visible steps
          if (isMobile) {
            const currentMobileIndex = mobileSteps.indexOf(prev);
            if (currentMobileIndex >= mobileSteps.length - 1) {
              setIsRecording(false);
              setCompleted(true);
              return prev;
            }
            return mobileSteps[currentMobileIndex + 1];
          } else {
            // Default behavior for non-mobile
            if (prev >= workflowSteps.length - 1) {
              setIsRecording(false);
              setCompleted(true);
              return prev;
            }
            return prev + 1;
          }
        });
      }, 6000);

      return () => clearInterval(intervalId);
    }
  }, [isRecording, isAutoPlaying, isMobile, mobileSteps]);

  useEffect(() => {
    if (completed) {
      const timeout = setTimeout(() => {
        setCurrentStep(0);
        setCompleted(false);
        
        if (!userInteracted) {
          setTimeout(() => {
            setIsRecording(true);
            setIsAutoPlaying(true);
          }, 2000);
        }
      }, 7000);

      return () => clearTimeout(timeout);
    }
  }, [completed, userInteracted]);

  const handleStepClick = (index: number) => {
    setUserInteracted(true);
    setIsAutoPlaying(false);
    setIsRecording(false);
    setCurrentStep(index);
    
    const inactivityTimer = setTimeout(() => {
      if (!completed) {
        setIsAutoPlaying(true);
        setIsRecording(true);
      }
    }, 15000);
    
    return () => clearTimeout(inactivityTimer);
  };

  // Find the next step based on current step in mobileSteps
  const getNextMobileStep = (currentIndex: number) => {
    if (isMobile) {
      const currentMobileIndex = mobileSteps.indexOf(currentIndex);
      if (currentMobileIndex !== -1 && currentMobileIndex < mobileSteps.length - 1) {
        return mobileSteps[currentMobileIndex + 1];
      }
      return 0; // Reset to beginning if at end
    }
    
    // Default for non-mobile
    return currentIndex < workflowSteps.length - 1 ? currentIndex + 1 : 0;
  };

  const handleNextStep = () => {
    const nextStep = getNextMobileStep(currentStep);
    setCurrentStep(nextStep);
    
    // If we've gone through all steps, show completion
    if ((isMobile && nextStep === 0) || (!isMobile && nextStep === 0)) {
      setCompleted(true);
    }
  };

  return (
    <Box 
      sx={{
        position: "relative",
        p: { xs: 1.5, sm: 2, md: 4 }, 
        bgcolor: "#ffffff",
        borderRadius: 2,
        boxShadow: "0 4px 32px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.06)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(0, 0, 0, 0.04)",
        width: "100%",
        maxWidth: { xs: "100%", sm: "100%", md: "450px" }, 
        margin: "0 auto",
        background: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        overflow: "hidden"
      }}
    >
      {completed && (
        <Box 
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            zIndex: 50,
            borderRadius: 2,
            p: { xs: 3, md: 4 },
            textAlign: "center" // Ensure all text is centered
          }}
        >
          <Box 
            component={motion.div}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: 2, md: 3 },
              textAlign: "center",
              width: "100%",
              maxWidth: "320px",
              mx: "auto"
            }}
          >
            <CheckCircle size={50} color={primaryColor} />
            <Typography variant="h5" sx={{ 
              fontWeight: 700, 
              color: primaryColor, 
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              lineHeight: 1.2,
              mt: 1
            }}>
              Encounter Complete
            </Typography>
            <Typography variant="body1" sx={{ 
              color: primaryColor, 
              maxWidth: "350px", 
              fontSize: { xs: "0.875rem", sm: "1rem" },
              px: 2
            }}>
              Time Saved, Burnout Crushed, Patients Soaring!
            </Typography>
            
            <Box sx={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: { xs: 4, sm: 6 }, 
              mt: { xs: 1, sm: 2 }, 
              width: "100%"
            }}>
              <Box 
                component={motion.div}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <Clock size={26} color={primaryColor} className="mb-1" />
                <Typography sx={{ 
                  fontSize: { xs: "0.7rem", sm: "0.8rem" }, 
                  fontWeight: "bold", 
                  color: primaryColor,
                  mt: 0.5
                }}>
                  Time Saved
                </Typography>
              </Box>
              <Box 
                component={motion.div}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <Heart size={26} className="text-red-500 mb-1" />
                <Typography sx={{ 
                  fontSize: { xs: "0.7rem", sm: "0.8rem" }, 
                  fontWeight: "bold", 
                  color: primaryColor,
                  mt: 0.5
                }}>
                  Burnout Crushed
                </Typography>
              </Box>
            </Box>
            
            <Box 
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              onClick={() => {
                setCurrentStep(0);
                setCompleted(false);
                setIsRecording(true);
              }}
              sx={{
                mt: { xs: 2, sm: 3 },
                py: 1.5,
                px: 4,
                bgcolor: primaryColor,
                color: "white",
                borderRadius: "full",
                cursor: "pointer",
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                fontWeight: "medium",
                width: "fit-content",
                textAlign: "center"
              }}
            >
              Complete Encounter
            </Box>
          </Box>
        </Box>
      )}
      
      <Box 
        sx={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          overflowY: "auto",
          maxHeight: { xs: "450px", sm: "500px" }
        }}
      >
        {workflowSteps.map((step, index) => {
          const isActive = currentStep === index;
          const isComplete = currentStep > index;
          const isHovered = hovered === index;
          
          // Enhanced logic for mobile view display
          const shouldDisplay = isMobile ? isMobileStepVisible(index) : true;
          
          if (!shouldDisplay) return null;
          
          return (
            <Box
              key={step.id}
              component={motion.div}
              initial={{ opacity: 0.7, x: -5 }}
              animate={{ 
                opacity: isActive || isComplete || isHovered ? 1 : 0.7,
                x: isActive ? 0 : isComplete ? 0 : -5,
                scale: isActive ? 1.02 : 1
              }}
              whileHover={{ 
                scale: 1.02, 
                opacity: 1,
                backgroundColor: "rgba(0, 0, 0, 0.02)" 
              }}
              transition={{ 
                duration: 0.2, 
                ease: "easeInOut"
              }}
              onClick={() => handleStepClick(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                p: { xs: 1, sm: 1.5 },
                borderRadius: 1.5,
                cursor: "pointer", 
                bgcolor: isActive ? "rgba(0, 0, 0, 0.03)" : "transparent",
                border: isActive ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid transparent",
                mb: 0.5,
                position: "relative",
                overflow: "visible"
              }}
            >
              <Box sx={{ display: 'flex', width: '100%', alignItems: 'flex-start' }}>
                <Box 
                  sx={{ 
                    mr: { xs: 1, sm: 2 },
                    opacity: isActive || isComplete ? 1 : 0.7,
                    color: isComplete ? primaryColor : primaryColor,
                    transition: "transform 0.2s ease",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    mt: 0.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  {isComplete ? 
                    <CheckCircle size={20} color={primaryColor} /> : 
                    React.cloneElement(step.icon as React.ReactElement, { size: 20, color: primaryColor })
                  }
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: isActive ? 600 : 500,
                      color: primaryColor,
                      fontSize: { xs: "0.85rem", sm: "0.95rem" }
                    }}
                  >
                    {step.title}
                  </Typography>
                  <AnimatePresence>
                    {isActive && (
                      <Typography 
                        component={motion.p}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        variant="body2" 
                        sx={{ color: primaryColor, fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
                      >
                        {step.description}
                      </Typography>
                    )}
                  </AnimatePresence>
                </Box>
                {isActive && (
                  <Box 
                    component={motion.div}
                    sx={{ ml: "auto" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      style={{ backgroundColor: primaryColor }}
                    />
                  </Box>
                )}
              </Box>
              
              <AnimatePresence>
                {isActive && step.detailContent && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ width: "100%" }}
                  >
                    {step.detailContent}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Mobile-focused: Show Next button for the active step */}
              {isActive && isMobile && index < workflowSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  style={{ 
                    marginTop: 16, 
                    alignSelf: 'center',
                    zIndex: 20
                  }}
                >
                  <Box
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextStep();
                    }}
                    sx={{
                      py: 1,
                      px: 3,
                      bgcolor: primaryColor,
                      color: 'white',
                      borderRadius: 'full',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 'medium',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      '&:hover': {
                        bgcolor: primaryColor,
                        opacity: 0.9
                      }
                    }}
                  >
                    Next Step
                  </Box>
                </motion.div>
              )}
              
              {/* Show Complete button for the last step */}
              {isActive && index === workflowSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  style={{ 
                    marginTop: 16, 
                    alignSelf: 'center',
                    zIndex: 20
                  }}
                >
                  <Box
                    onClick={(e) => {
                      e.stopPropagation();
                      setCompleted(true);
                    }}
                    sx={{
                      py: 1,
                      px: 3,
                      bgcolor: primaryColor,
                      color: 'white',
                      borderRadius: 'full',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 'medium',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      '&:hover': {
                        bgcolor: primaryColor,
                        opacity: 0.9
                      }
                    }}
                  >
                    Complete Encounter
                  </Box>
                </motion.div>
              )}
            </Box>
          );
        })}
      </Box>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { 
            transform: translateX(-10px);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: scaleY(1);
            opacity: 0.5;
          }
          50% {
            transform: scaleY(1.5);
            opacity: 1;
          }
          100% {
            transform: scaleY(1);
            opacity: 0.5;
          }
        }
        `
      }} />
    </Box>
  );
}
