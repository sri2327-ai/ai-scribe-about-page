import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, HardDrive, Send, CheckCircle, 
  ClipboardList, TestTube, Mail, Mic, 
  Clock, Heart, Database, History
} from "lucide-react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { crushAIColors } from "@/theme/crush-ai-theme";

// Define primary color for consistency
const primaryColor = "#000000";

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
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Auto-advance steps similar to BravoWorkflowAnimation
  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
      }, 6000); // Show each step for 6 seconds as in BravoWorkflowAnimation
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying]);

  const handleStepClick = (index: number) => {
    setUserInteracted(true);
    setIsAutoPlaying(false);
    setCurrentStep(index);
    
    // Resume auto-play after 15 seconds of inactivity (same as BravoWorkflowAnimation)
    const inactivityTimer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 15000);
    
    return () => clearTimeout(inactivityTimer);
  };

  return (
    <Box 
      sx={{
        position: "relative",
        p: { xs: 2, sm: 3, md: 4 }, 
        bgcolor: "#ffffff",
        borderRadius: 2,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        width: "100%",
        maxWidth: { xs: "100%", sm: "100%", md: "500px" }, 
        margin: "0 auto",
        overflow: "hidden"
      }}
    >
      <Box 
        sx={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflowY: "auto",
          maxHeight: { xs: "450px", sm: "500px" }
        }}
      >
        {workflowSteps.map((step, index) => {
          const isActive = currentStep === index;
          const isComplete = currentStep > index;
          const Icon = () => step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isActive ? 1 : 0.5,
                height: isActive ? "auto" : "64px",
                x: isActive ? 0 : -5
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              className="relative overflow-hidden"
              onClick={() => handleStepClick(index)}
            >
              <motion.div
                className="flex flex-col gap-4 cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ 
                      backgroundColor: `${crushAIColors.primary}10`,
                      transition: "all 0.3s ease" 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-lg font-semibold text-gray-900"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-gray-600"
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -20, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-16"
                    >
                      {step.detailContent}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {index < workflowSteps.length - 1 && (
                <motion.div
                  className="absolute left-6 top-12 w-[1px] h-[calc(100%+1.5rem)]"
                  style={{
                    background: 'linear-gradient(to bottom, #e5e7eb 60%, transparent)'
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: isActive ? 1 : 0.5 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          );
        })}
      </Box>

      {/* Add the color pulse animation styles */}
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
