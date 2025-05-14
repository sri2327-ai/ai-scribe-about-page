
import React, { useState, useEffect, useRef } from "react";
import { Box, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { 
  FileText, HardDrive, Send, CheckCircle, 
  ClipboardList, TestTube, Mail, Mic, 
  Clock, Heart, Database, History
} from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

// Define vibrant colors inspired by the Bravo workflow animation
const stepColors = {
  start: "#046f90",       // Blue
  previous: "#387E89",    // Teal
  notes: "#5192AE",       // Light Blue
  referral: "#143151",    // Dark Blue
  labs: "#f06292",        // Pink
  instructions: "#8B5CF6", // Purple
  ehr: "#0EA5E9"          // Sky Blue
};

const workflowSteps = [
  {
    id: "start",
    title: "Start Encounter",
    icon: <Send size={30} style={{ color: stepColors.start }} />,
    description: "Recording patient conversation...",
    color: stepColors.start,
    detailContent: (props) => (
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
          <Mic size={36} style={{ color: stepColors.start }} />
          <Typography 
            component="div"
            sx={{ 
              color: stepColors.start,
              fontSize: '0.875rem', 
              textAlign: 'center'
            }}
          >
            {props.timerDisplay}
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
              <motion.div 
                key={i}
                animate={{ 
                  height: [8, i % 3 === 0 ? 18 : 12, 8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
                style={{
                  width: '2px',
                  backgroundColor: `${i % 2 === 0 ? stepColors.start : '#5192AE'}`,
                  borderRadius: '1px'
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
    icon: <History size={30} style={{ color: stepColors.previous }} />,
    description: "Reviewing patient history for context...",
    color: stepColors.previous,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: `1px solid ${stepColors.previous}30`, 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: `${stepColors.previous}05`,
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
              overflow: 'hidden',
              color: stepColors.previous
            }}
          >
            <span style={{ color: stepColors.previous }}>Visit Date:</span> March 12, 2025
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
              overflow: 'hidden',
              color: stepColors.previous
            }}
          >
            <span style={{ color: stepColors.previous }}>Symptoms:</span> Recurring headaches, vision changes
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
              overflow: 'hidden',
              color: stepColors.previous
            }}
          >
            <span style={{ color: stepColors.previous }}>Plan:</span> MRI ordered, follow-up in two weeks
          </Typography>
        </Box>
      </Box>
    )
  },
  {
    id: "notes",
    title: "Generate Clinical Notes",
    icon: <FileText size={30} style={{ color: stepColors.notes }} />,
    description: "Creating comprehensive documentation using your preferred templates...",
    color: stepColors.notes,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: `1px solid ${stepColors.notes}30`, 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: `${stepColors.notes}05`,
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
              overflow: 'hidden',
              color: stepColors.notes
            }}
          >
            <span style={{ color: stepColors.notes }}>SUBJECTIVE:</span> Patient presents with acute abdominal pain...
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
              overflow: 'hidden',
              color: stepColors.notes
            }}
          >
            <span style={{ color: stepColors.notes }}>OBJECTIVE:</span> Temp 101.2°F, tender RLQ with guarding...
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
              overflow: 'hidden',
              color: stepColors.notes
            }}
          >
            <span style={{ color: stepColors.notes }}>ICD-10:</span> K35.80 (Unspecified acute appendicitis)
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
              overflow: 'hidden',
              color: stepColors.notes
            }}
          >
            <span style={{ color: stepColors.notes }}>CPT/E&M:</span> 99203 (New patient, detailed exam)
          </Typography>
        </Box>
      </Box>
    )
  },
  {
    id: "referral",
    title: "Create Referral Letters",
    icon: <ClipboardList size={30} style={{ color: stepColors.referral }} />,
    description: "Preparing specialist referrals...",
    color: stepColors.referral,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: `1px solid ${stepColors.referral}30`, 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: `${stepColors.referral}05`,
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
              overflow: 'hidden',
              color: stepColors.referral
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
              overflow: 'hidden',
              color: stepColors.referral
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
              overflow: 'hidden',
              color: stepColors.referral
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
    icon: <TestTube size={30} style={{ color: stepColors.labs }} />,
    description: "Submitting necessary lab work and prescriptions...",
    color: stepColors.labs,
    detailContent: () => (
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
                bgcolor: item.type === 'Rx' ? 'rgba(252, 211, 77, 0.1)' : `${stepColors.labs}10`,
                border: item.type === 'Rx' ? '1px solid rgba(252, 211, 77, 0.3)' : `1px solid ${stepColors.labs}30`,
                fontSize: '0.75rem',
                animation: `slideIn 0.3s ${i * 0.15}s both`
              }}
            >
              <Typography 
                component="div"
                sx={{ 
                  fontSize: '0.75rem', 
                  color: item.type === 'Rx' ? '#b45309' : stepColors.labs
                }}
              >
                {item.name}
              </Typography>
              <Typography 
                component="div"
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
    icon: <Mail size={30} style={{ color: stepColors.instructions }} />,
    description: "Creating personalized care instructions...",
    color: stepColors.instructions,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: `1px solid ${stepColors.instructions}30`, 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: `${stepColors.instructions}05`,
            fontSize: '0.75rem',
            position: 'relative',
            height: '100px',
            overflow: 'hidden'
          }}
        >
          <Typography 
            component="div"
            sx={{ display: 'block', mb: 1, color: stepColors.instructions }}
          >
            <Mail size={12} style={{ display: 'inline', marginRight: '4px', color: stepColors.instructions }} /> Sent via secure email
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              fontSize: '0.75rem',
              mb: 0.5,
              animation: 'fadeIn 0.5s',
              color: stepColors.instructions
            }}
          >
            Dear Patient,
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              fontSize: '0.75rem',
              mb: 1,
              animation: 'fadeIn 0.5s 0.3s both',
              color: stepColors.instructions
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
                animation: 'fadeIn 0.5s 0.6s both',
                color: stepColors.instructions
              }}
            >
              • Medication: Take Ibuprofen 400 mg every 6 hours for pain...
            </Typography>
            <Typography 
              component="div" 
              sx={{ 
                fontSize: '0.75rem',
                animation: 'fadeIn 0.5s 0.9s both',
                color: stepColors.instructions
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
    icon: <Database size={30} style={{ color: stepColors.ehr }} />,
    description: "Secure integration with all EHR systems",
    color: stepColors.ehr,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Typography 
          component="div"
          sx={{ fontSize: '0.8rem', mb: 1, textAlign: 'center', color: stepColors.ehr }}
        >
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
            bgcolor: `${stepColors.ehr}05`,
            borderRadius: 1,
            border: `1px dashed ${stepColors.ehr}30`
          }}
        >
          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.98, 1, 0.98]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2
            }}
            style={{ 
              fontSize: '0.8rem',
              textAlign: 'center',
              fontStyle: 'italic',
              color: stepColors.ehr
            }}
          >
            Secure integration with all EHR systems
          </motion.div>
        </Box>
      </Box>
    )
  }
];

// Typography component to avoid repetition
const Typography = ({ children, component = "p", sx = {} }) => {
  const defaultSx = {
    margin: 0,
    padding: 0,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    ...sx
  };
  
  return React.createElement(component, { style: defaultSx }, children);
};

export function AnimatedWorkflow() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const [timerDisplay, setTimerDisplay] = useState<string>("00:00");
  
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Update timer when on the first step
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    
    if (currentStep === 0) {
      setRecordingTime(0);
      interval = setInterval(() => {
        setRecordingTime(prev => {
          const newTime = prev + 1;
          const minutes = Math.floor(newTime / 60);
          const seconds = newTime % 60;
          setTimerDisplay(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
          return newTime;
        });
      }, 1000);
    } else {
      setRecordingTime(0);
      setTimerDisplay("00:00");
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentStep]);

  // Auto-advance steps
  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying]);

  const handleStepClick = (index: number) => {
    setUserInteracted(true);
    setIsAutoPlaying(false);
    setCurrentStep(index);
    
    // Resume auto-play after 15 seconds of inactivity
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <div className="absolute w-32 h-32 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute w-24 h-24 rounded-full bg-pink-400 blur-3xl -translate-x-20 translate-y-10"></div>
        <div className="absolute w-24 h-24 rounded-full bg-teal-400 blur-3xl translate-x-16 -translate-y-12"></div>
      </div>

      <Box 
        sx={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflowY: "auto",
          maxHeight: { xs: "450px", sm: "500px" },
          position: "relative",
          zIndex: 1
        }}
      >
        {workflowSteps.map((step, index) => {
          const isActive = currentStep === index;
          const isComplete = currentStep > index;

          return (
            <motion.div
              key={step.id}
              initial={false}
              animate={{ 
                opacity: isActive ? 1 : 0.7,
                y: 0,
                height: "auto"
              }}
              className={`relative rounded-lg ${isActive ? 'bg-gray-50/50' : ''} hover:bg-gray-50/30 transition-all duration-300`}
              onClick={() => handleStepClick(index)}
              style={{
                borderLeft: isActive ? `3px solid ${step.color}` : '3px solid transparent',
                overflow: 'visible'
              }}
            >
              <motion.div
                className="flex flex-col gap-2 cursor-pointer p-3"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ 
                      backgroundColor: `${step.color}15`,
                      boxShadow: isActive ? `0 0 0 2px ${step.color}40` : 'none',
                      transition: "all 0.3s ease" 
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-base md:text-lg font-normal" style={{ color: isActive ? step.color : '#333' }}>
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  
                  {isActive && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }}></div>
                    </div>
                  )}
                </div>
                
                {/* Content area */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="ml-12 mb-2 mt-1"
                    style={{ overflow: 'visible' }}
                  >
                    <div className="relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-visible">
                      {/* Pass the timerDisplay prop to the first step */}
                      {index === 0 
                        ? step.detailContent({ timerDisplay }) 
                        : step.detailContent()
                      }
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </Box>

      {/* Step indicator dots */}
      <div className="flex justify-center gap-1.5 mt-4 pb-2">
        {workflowSteps.map((step, index) => (
          <button
            key={index}
            onClick={() => handleStepClick(index)}
            className="transition-all duration-300"
            aria-label={`View ${step.title}`}
          >
            <div 
              className={`rounded-full transition-all duration-300 ${currentStep === index ? 'w-4' : 'w-1.5'} h-1.5`}
              style={{ backgroundColor: currentStep === index ? step.color : '#e5e7eb' }}
            />
          </button>
        ))}
      </div>

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
