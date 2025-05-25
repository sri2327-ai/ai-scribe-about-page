import React, { useState, useEffect, useRef } from "react";
import { Box, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { 
  FileText, HardDrive, Send, CheckCircle, 
  ClipboardList, TestTube, Mail, Mic, 
  Clock, Heart, Database, History,
  Globe, ChevronDown, ChevronUp
} from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";

// Define vibrant colors inspired by the Bravo workflow animation
const stepColors = {
  start: "#046f90",       // Blue
  previous: "#387E89",    // Teal
  notes: "#5192AE",       // Light Blue
  referral: "#9b87f5",    // Purple for "create referral letters"
  labs: "#f06292",        // Pink
  instructions: "#1EAEDB", // Bright Blue for "generate patient instructions"
  ehr: "#4CAF50"          // Green for "push to ehr"
};

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

const workflowSteps = [
  {
    id: "start",
    title: "Start Encounter",
    icon: <Send size={24} style={{ color: stepColors.start }} />,
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
          <div className="relative">
            <Mic size={32} style={{ color: stepColors.start }} />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
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
          
          {/* Voice waves visualization */}
          <Box 
            sx={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 0.5 
            }}
          >
            {Array(15).fill(0).map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  height: [6, i % 3 === 0 ? 14 : 10, 6],
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
          
          {/* Enhanced mobile-friendly illustration */}
          <motion.div 
            className="mt-3 bg-white rounded-lg shadow-sm p-3 w-full border border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-blue-600" />
                <span className="text-xs text-blue-600 font-medium">Live Transcription</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-blue-500" />
                <span className="text-xs text-blue-500">Multi-lingual</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Mic className="w-3 h-3 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50 rounded-2xl p-2 max-w-[90%]">
                    <div className="h-1.5 w-3/4 bg-blue-200 rounded mb-1"></div>
                    <div className="h-1.5 w-1/2 bg-blue-200 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-start justify-end">
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-2xl p-2 max-w-[90%] ml-auto">
                    <div className="h-1.5 w-full bg-gray-200 rounded mb-1"></div>
                    <div className="h-1.5 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-100 shrink-0"></div>
              </div>

              {/* Language selector indicator */}
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-2 flex flex-wrap gap-1 justify-center"
              >
                {["EN", "ES", "FR", "中", "日"].map((lang, i) => (
                  <motion.div 
                    key={lang} 
                    className={`px-1.5 py-0.5 rounded-full text-xs ${i === 0 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {lang}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </Box>
      </Box>
    )
  },
  {
    id: "previous",
    title: "Previous Visit Context",
    icon: <History size={24} style={{ color: stepColors.previous }} />,
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
            height: '60px',
            overflow: 'hidden'
          }}
        >
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '8px',
              left: '12px',
              fontSize: '0.7rem',
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
              fontSize: '0.7rem',
              fontFamily: 'monospace',
              animation: 'typing 2s 0.5s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              color: stepColors.previous
            }}
          >
            <span style={{ color: stepColors.previous }}>Symptoms:</span> Recurring headaches, vision changes
          </Typography>
        </Box>
      </Box>
    )
  },
  {
    id: "notes",
    title: "Generate Clinical Notes",
    icon: <FileText size={24} style={{ color: stepColors.notes }} />,
    description: "Creating comprehensive documentation...",
    color: stepColors.notes,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <motion.div 
          className="mt-2 bg-white rounded-lg shadow-sm p-3 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" style={{ color: stepColors.notes }} />
              <span className="text-sm font-medium" style={{ color: stepColors.notes }}>Clinical Note</span>
            </div>
            <div className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">
              Generating...
            </div>
          </div>
          
          <div className="space-y-2">
            <div>
              <div className="text-xs font-medium mb-1" style={{ color: stepColors.notes }}>SUBJECTIVE</div>
              <div className="bg-blue-50 p-2 rounded-md text-xs text-blue-800">
                Patient presents with acute abdominal pain...
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-xs font-medium mb-1" style={{ color: stepColors.notes }}>ICD-10</div>
                <div className="bg-blue-50 p-1.5 rounded-md text-xs text-blue-800">
                  K35.80
                </div>
              </div>
              
              <div>
                <div className="text-xs font-medium mb-1" style={{ color: stepColors.notes }}>CPT/E&M</div>
                <div className="bg-blue-50 p-1.5 rounded-md text-xs text-blue-800">
                  99203
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Box>
    )
  },
  {
    id: "referral",
    title: "Create Referral Letters",
    icon: <ClipboardList size={24} style={{ color: stepColors.referral }} />,
    description: "Preparing specialist referrals...",
    color: stepColors.referral,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <motion.div 
          className="mt-2 bg-white rounded-lg shadow-sm p-3 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <ClipboardList className="w-4 h-4" style={{ color: stepColors.referral }} />
            <span className="text-sm font-medium" style={{ color: stepColors.referral }}>Specialty Referral</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Cardiology", color: "purple" },
              { name: "Surgery", color: "red" }
            ].map((item, i) => (
              <div key={i} className={`bg-${item.color}-50 rounded-lg p-2 border border-${item.color}-100`}>
                <div className={`text-xs text-${item.color}-700 mb-1 font-medium`}>{item.name}</div>
                <motion.div
                  className={`w-full h-1 bg-${item.color}-200 rounded-full overflow-hidden`}
                >
                  <motion.div
                    className={`h-full bg-${item.color}-500`}
                    initial={{ width: 0 }}
                    animate={{ width: '90%' }}
                    transition={{ duration: 1.5 }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </Box>
    )
  },
  {
    id: "labs",
    title: "Process Lab & Prescription Orders",
    icon: <TestTube size={24} style={{ color: stepColors.labs }} />,
    description: "Submitting necessary lab work...",
    color: stepColors.labs,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {[
            { name: "CBC with Differential", status: "Ordered" },
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
                  fontSize: '0.7rem', 
                  color: item.type === 'Rx' ? '#b45309' : stepColors.labs
                }}
              >
                {item.name}
              </Typography>
              <Typography 
                component="div"
                sx={{ 
                  fontSize: '0.65rem', 
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
    icon: <Mail size={24} style={{ color: stepColors.instructions }} />,
    description: "Creating personalized care instructions...",
    color: stepColors.instructions,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <motion.div 
          className="mt-2 bg-white rounded-lg shadow-sm p-3 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" style={{ color: stepColors.instructions }} />
              <span className="text-sm font-medium" style={{ color: stepColors.instructions }}>Patient Instructions</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <span className="text-xs text-green-600">Ready to send</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="border border-dashed border-blue-200 rounded-lg p-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs text-blue-600">1</span>
                </div>
                <span className="text-xs text-blue-800 font-medium">Rest & Recovery</span>
              </div>
              <div className="pl-6">
                <motion.div 
                  className="h-1.5 bg-blue-50 rounded w-full mb-1"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Box>
    )
  },
  {
    id: "ehr",
    title: "Push Notes to EHR",
    icon: <Database size={24} style={{ color: stepColors.ehr }} />,
    description: "Secure integration with all EHR systems",
    color: stepColors.ehr,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <motion.div 
          className="mt-2 bg-white rounded-lg shadow-sm p-3 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-4 h-4" style={{ color: stepColors.ehr }} />
            <span className="text-sm font-medium" style={{ color: stepColors.ehr }}>EHR Integration</span>
          </div>
          
          <div className="space-y-2">
            {[
              { icon: FileText, name: "Clinical Note", type: "note" },
              { icon: TestTube, name: "Labs & Orders", type: "lab" },
              { icon: ClipboardList, name: "Referrals", type: "referral" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-2 rounded-lg bg-green-50 border border-green-100 relative overflow-hidden"
                animate={{ boxShadow: ['0 1px 3px rgba(0,0,0,0.1)', '0 3px 6px rgba(0,0,0,0.2)', '0 1px 3px rgba(0,0,0,0.1)'] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-green-200">
                    <item.icon size={10} className="text-green-700" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-green-800">{item.name}</div>
                    <div className="text-xs text-green-700">Successfully synced</div>
                  </div>
                  <CheckCircle size={14} className="text-green-600 ml-auto" />
                </div>
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-green-300"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Box>
    )
  }
];

export function AnimatedWorkflow() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const [timerDisplay, setTimerDisplay] = useState<string>("00:00");
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const autoPlayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
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
    if (isAutoPlaying && !userInteracted) {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
      
      autoPlayTimeoutRef.current = setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
      }, isMobile ? 5000 : 7000);
      
      return () => {
        if (autoPlayTimeoutRef.current) {
          clearTimeout(autoPlayTimeoutRef.current);
          autoPlayTimeoutRef.current = null;
        }
      };
    }
  }, [isAutoPlaying, currentStep, isMobile, userInteracted]);

  const handleStepClick = (index: number) => {
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
      autoPlayTimeoutRef.current = null;
    }
    
    setUserInteracted(true);
    setIsAutoPlaying(false);
    setCurrentStep(index);
    setExpandedStep(expandedStep === index ? null : index);
    
    // Resume auto-play after 20 seconds of inactivity
    const inactivityTimer = setTimeout(() => {
      setUserInteracted(false);
      setIsAutoPlaying(true);
    }, 20000);
    
    return () => clearTimeout(inactivityTimer);
  };

  const toggleExpanded = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedStep(expandedStep === index ? null : index);
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
        maxWidth: { xs: "100%", sm: "100%", md: "600px" }, 
        margin: "0 auto",
        overflow: "hidden"
      }}
    >
      {/* Background decorative elements */}
      {!isMobile && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <div className="absolute w-32 h-32 rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute w-24 h-24 rounded-full bg-pink-400 blur-3xl -translate-x-20 translate-y-10"></div>
          <div className="absolute w-24 h-24 rounded-full bg-teal-400 blur-3xl translate-x-16 -translate-y-12"></div>
        </div>
      )}

      {/* Header with progress indicator */}
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography 
          component="h2"
          sx={{ 
            fontWeight: 600, 
            color: '#333',
            fontSize: { xs: '1rem', sm: '1.25rem' },
            mb: 2
          }}
        >
          CRUSH AI Workflow
        </Typography>
        
        {/* Progress bar */}
        <Box sx={{ 
          width: '100%', 
          height: 4, 
          bgcolor: 'rgba(0,0,0,0.1)', 
          borderRadius: 2,
          overflow: 'hidden'
        }}>
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / workflowSteps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </Box>
        
        <Typography 
          component="span"
          sx={{ 
            color: '#666',
            fontSize: { xs: '0.7rem', sm: '0.75rem' },
            mt: 1,
            display: 'block'
          }}
        >
          Step {currentStep + 1} of {workflowSteps.length}
        </Typography>
      </Box>

      <Box 
        sx={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, sm: 1.5 },
          overflowY: "auto",
          maxHeight: { xs: "500px", sm: "600px" },
          position: "relative",
          zIndex: 1,
          scrollBehavior: 'smooth'
        }}
      >
        {workflowSteps.map((step, index) => {
          const isActive = currentStep === index;
          const isExpanded = expandedStep === index;
          const isComplete = currentStep > index;

          return (
            <motion.div
              key={step.id}
              initial={false}
              animate={{ 
                opacity: isActive ? 1 : (isComplete ? 0.8 : 0.6),
                scale: isActive ? 1 : 0.98,
                y: 0
              }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-xl transition-all duration-300 ${
                isActive ? 'bg-gradient-to-r from-blue-50/50 to-purple-50/50 shadow-lg' : 
                isComplete ? 'bg-green-50/30' : 'bg-gray-50/30'
              } hover:shadow-md cursor-pointer`}
              onClick={() => handleStepClick(index)}
              style={{
                borderLeft: isActive ? `4px solid ${step.color}` : 
                           isComplete ? '4px solid #10b981' : '4px solid transparent',
                minHeight: isMobile ? '70px' : '80px'
              }}
            >
              <motion.div
                className="flex flex-col gap-2"
                style={{ padding: isMobile ? '16px' : '20px' }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="rounded-full flex items-center justify-center shrink-0 relative"
                    style={{ 
                      width: isMobile ? '48px' : '56px',
                      height: isMobile ? '48px' : '56px',
                      backgroundColor: isComplete ? '#10b981' : `${step.color}15`,
                      boxShadow: isActive ? `0 0 0 3px ${step.color}20` : 'none',
                      transition: "all 0.3s ease"
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {isComplete ? (
                      <CheckCircle size={isMobile ? 24 : 28} className="text-white" />
                    ) : (
                      React.cloneElement(step.icon, { 
                        size: isMobile ? 20 : 24 
                      })
                    )}
                    
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: step.color }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 
                        className={`font-semibold leading-tight ${isMobile ? 'text-sm' : 'text-base'}`}
                        style={{ color: isActive ? step.color : '#333' }}
                      >
                        {step.title}
                      </h3>
                      
                      {!isMobile && (
                        <motion.button
                          onClick={(e) => toggleExpanded(index, e)}
                          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {isExpanded ? 
                            <ChevronUp size={16} style={{ color: step.color }} /> : 
                            <ChevronDown size={16} style={{ color: step.color }} />
                          }
                        </motion.button>
                      )}
                    </div>
                    
                    <p className={`text-gray-600 leading-tight ${isMobile ? 'text-xs' : 'text-sm'} mt-1`}>
                      {step.description}
                    </p>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-2"
                    >
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: step.color }}
                      >
                        <motion.div
                          className="w-full h-full rounded-full"
                          style={{ backgroundColor: step.color }}
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
                
                {/* Content area - improved layout */}
                <AnimatePresence>
                  {(isActive || isExpanded) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div 
                        className="mt-3 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        style={{ 
                          marginLeft: isMobile ? '0px' : '20px',
                          border: `1px solid ${step.color}20`
                        }}
                      >
                        {index === 0 
                          ? step.detailContent({ timerDisplay }) 
                          : step.detailContent({ timerDisplay })
                        }
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Connection line to next step */}
              {index < workflowSteps.length - 1 && (
                <motion.div
                  className="absolute left-6 -bottom-2 w-1 h-4 rounded-full"
                  style={{
                    background: isActive ? 
                      `linear-gradient(to bottom, ${step.color}, ${workflowSteps[index + 1].color})` :
                      'linear-gradient(to bottom, #e5e7eb, #e5e7eb)',
                    left: isMobile ? '26px' : '30px'
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              )}
            </motion.div>
          );
        })}
      </Box>

      {/* Enhanced step indicator dots */}
      <div className="flex justify-center gap-2 mt-4 pb-2">
        {workflowSteps.map((step, index) => (
          <motion.button
            key={index}
            onClick={() => handleStepClick(index)}
            className="transition-all duration-300 p-2 rounded-full hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`View ${step.title}`}
          >
            <div 
              className={`rounded-full transition-all duration-300 ${
                currentStep === index 
                  ? (isMobile ? 'w-4 h-4' : 'w-5 h-5')
                  : 'w-2 h-2'
              }`}
              style={{ 
                backgroundColor: currentStep === index ? step.color : '#e5e7eb',
                boxShadow: currentStep === index ? `0 0 0 2px ${step.color}30` : 'none'
              }}
            >
              {currentStep === index && (
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: step.color }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.4, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Auto-play control */}
      <div className="flex justify-center mt-2">
        <motion.button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            isAutoPlaying 
              ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
        </motion.button>
      </div>

      {/* Animation styles */}
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

        /* Improved scrollbar for better UX */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* Mobile-specific improvements */
        @media (max-width: 640px) {
          .text-xs {
            font-size: 0.7rem;
            line-height: 1.3;
          }
          .text-sm {
            font-size: 0.8rem;
            line-height: 1.4;
          }
          .p-3 {
            padding: 0.75rem;
          }
          .gap-2 {
            gap: 0.5rem;
          }
          .space-y-2 > * + * {
            margin-top: 0.5rem;
          }
        }
        `
      }} />
    </Box>
  );
}
