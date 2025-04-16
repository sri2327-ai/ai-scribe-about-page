
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, HardDrive, Send, CheckCircle, 
  ClipboardList, TestTube, Mail, Mic, 
  Clock, Heart, Database, History
} from "lucide-react";
import { Box, Typography } from "@mui/material";

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
          <Typography 
            sx={{ 
              color: '#666',
              fontSize: '0.875rem', 
              mt: 1
            }}
          >
            Click to speak
          </Typography>
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

  // Start auto demo mode on component mount
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsRecording(true);
      setIsAutoPlaying(true);
    }, 1000);
    
    return () => clearTimeout(startTimeout);
  }, []);

  // Auto demo mode with slower transitions
  useEffect(() => {
    if (isRecording && isAutoPlaying) {
      const intervalId = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= workflowSteps.length - 1) {
            setIsRecording(false);
            setCompleted(true);
            return prev;
          }
          return prev + 1;
        });
      }, 6000); // 6 seconds for slower transitions

      return () => clearInterval(intervalId);
    }
  }, [isRecording, isAutoPlaying]);

  // Reset after completion with a delay
  useEffect(() => {
    if (completed) {
      const timeout = setTimeout(() => {
        setCurrentStep(0);
        setCompleted(false);
        
        // Only auto-restart if user hasn't interacted
        if (!userInteracted) {
          setTimeout(() => {
            setIsRecording(true);
            setIsAutoPlaying(true);
          }, 2000);
        }
      }, 7000); // Longer delay before restarting

      return () => clearTimeout(timeout);
    }
  }, [completed, userInteracted]);

  // Detect if user has clicked on any step and switch to interactive mode
  const handleStepClick = (index: number) => {
    setUserInteracted(true);
    setIsAutoPlaying(false);
    setIsRecording(false);
    setCurrentStep(index);
    
    // If user stops interacting for 15 seconds, switch back to auto mode
    const inactivityTimer = setTimeout(() => {
      if (!completed) {
        setIsAutoPlaying(true);
        setIsRecording(true);
      }
    }, 15000);
    
    return () => clearTimeout(inactivityTimer);
  };

  return (
    <Box 
      sx={{
        position: "relative",
        p: { xs: 2, sm: 4 }, 
        bgcolor: "#ffffff",
        borderRadius: 2,
        boxShadow: "0 4px 32px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.06)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(0, 0, 0, 0.04)",
        width: "100%",
        maxWidth: { xs: "100%", md: "450px" }, 
        margin: "0 auto",
        background: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        overflow: "hidden"
      }}
    >
      {/* Show "Encounter Complete" overlay when all steps are completed */}
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
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            zIndex: 50,
            borderRadius: 2,
            p: 4
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
              gap: 3,
              textAlign: "center"
            }}
          >
            <CheckCircle size={60} className="text-green-500" />
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#10b981", fontSize: { xs: "1.25rem", sm: "1.5rem" } }}>
              Encounter Complete
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", maxWidth: "350px", fontSize: { xs: "0.875rem", sm: "1rem" } }}>
              Time Saved, Burnout Crushed, Patients Soaring!
            </Typography>
            
            <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 3, sm: 6 }, mt: 2 }}>
              <Box 
                component={motion.div}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <Clock size={28} className="text-green-600 mb-1" />
                <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem" }, fontWeight: "bold", color: "#333" }}>
                  Time Saved
                </Typography>
              </Box>
              <Box 
                component={motion.div}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <Heart size={28} className="text-red-500 mb-1" />
                <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem" }, fontWeight: "bold", color: "#333" }}>
                  Burnout Crushed
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      
      <Box 
        sx={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1
        }}
      >
        {workflowSteps.map((step, index) => {
          const isActive = currentStep === index;
          const isComplete = currentStep > index;
          const isHovered = hovered === index;
          
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
                alignItems: "flex-start",
                p: { xs: 1, sm: 1.5 },
                borderRadius: 1.5,
                cursor: "pointer", 
                bgcolor: isActive ? "rgba(0, 0, 0, 0.03)" : "transparent",
                border: isActive ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid transparent",
                flexDirection: "column",
                mb: 0.5
              }}
            >
              <Box sx={{ display: 'flex', width: '100%', alignItems: 'flex-start' }}>
                <Box 
                  sx={{ 
                    mr: { xs: 1, sm: 2 },
                    opacity: isActive || isComplete ? 1 : 0.7,
                    color: isComplete ? "#10b981" : "#000000",
                    transition: "transform 0.2s ease",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    mt: 0.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  {isComplete ? <CheckCircle size={20} /> : React.cloneElement(step.icon as React.ReactElement, { size: 20 })}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "#000000" : "#333333",
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
                        sx={{ color: "#666666", fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
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
                      className="w-3 h-3 rounded-full bg-black animate-pulse"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  </Box>
                )}
              </Box>
              
              {/* Detailed content for active step */}
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
            </Box>
          );
        })}
      </Box>

      {/* Add animations */}
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
        .animate-skew-scroll {
          animation: skewScroll 20s linear infinite;
        }
        @keyframes skewScroll {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(calc(-50% - 10px)) rotate(0deg);
          }
        }
        `
      }} />
    </Box>
  );
}
