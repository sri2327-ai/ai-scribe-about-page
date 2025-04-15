
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, Database, Send, CheckCircle, FileCheck, 
  ClipboardList, Activity, TestTube  // Replace Flask with TestTube
} from "lucide-react";
import { AIVoiceInput } from "./AIVoiceInput";
import { Box, Typography } from "@mui/material";

const workflowSteps = [
  {
    id: "start",
    title: "Start Encounter",
    icon: <Send size={30} className="text-black" />,
    description: "Recording patient conversation..."
  },
  {
    id: "notes",
    title: "Generate Clinical Notes",
    icon: <FileText size={30} className="text-black" />,
    description: "Creating comprehensive documentation..."
  },
  {
    id: "referral",
    title: "Create Referral Letters",
    icon: <ClipboardList size={30} className="text-black" />,
    description: "Preparing specialist referrals..."
  },
  {
    id: "labs",
    title: "Process Lab Orders",
    icon: <TestTube size={30} className="text-black" />, // Changed from Flask
    description: "Submitting necessary lab work..."
  },
  {
    id: "instructions",
    title: "Generate Patient Instructions",
    icon: <Activity size={30} className="text-black" />,
    description: "Creating personalized care instructions..."
  },
  {
    id: "ehr",
    title: "Push Notes to EHR",
    icon: <Database size={30} className="text-black" />,
    description: "Syncing with electronic health record..."
  },
  {
    id: "complete",
    title: "Encounter Complete",
    icon: <CheckCircle size={30} className="text-black" />,
    description: "All tasks completed successfully"
  }
];

export function AnimatedWorkflow() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [hovered, setHovered] = useState<number | null>(null);

  // Auto demo mode
  useEffect(() => {
    if (isRecording) {
      const intervalId = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= workflowSteps.length - 1) {
            setIsRecording(false);
            setCompleted(true);
            return prev;
          }
          return prev + 1;
        });
      }, 2500);

      return () => clearInterval(intervalId);
    }
  }, [isRecording]);

  // Reset after completion
  useEffect(() => {
    if (completed) {
      const timeout = setTimeout(() => {
        setCurrentStep(0);
        setCompleted(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [completed]);

  const handleStart = () => {
    setIsRecording(true);
    setCurrentStep(0);
    setCompleted(false);
  };

  const handleStop = () => {
    setIsRecording(false);
  };

  const handleStepClick = (index: number) => {
    if (!isRecording) {
      setCurrentStep(index);
    }
  };

  return (
    <Box 
      sx={{
        position: "relative",
        p: 4, 
        bgcolor: "#ffffff",
        borderRadius: 2,
        boxShadow: "0 4px 32px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.06)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(0, 0, 0, 0.08)"
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          textAlign: "center",
          fontWeight: 600,
          color: "#000000"
        }}
      >
        AI Workflow Automation
      </Typography>

      <AIVoiceInput 
        onStart={handleStart}
        onStop={handleStop}
        demoMode={true}
        demoInterval={15000}
        className="mb-6"
      />

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
                alignItems: "center",
                p: 1.5,
                borderRadius: 1.5,
                cursor: isRecording ? "default" : "pointer",
                bgcolor: isActive ? "rgba(0, 0, 0, 0.03)" : "transparent",
                border: isActive ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid transparent"
              }}
            >
              <Box 
                sx={{ 
                  mr: 2,
                  opacity: isActive || isComplete ? 1 : 0.7,
                  color: isComplete ? "#10b981" : "#000000",
                  transition: "transform 0.2s ease",
                  transform: isActive ? "scale(1.1)" : "scale(1)"
                }}
              >
                {isComplete ? <CheckCircle size={24} /> : step.icon}
              </Box>
              <Box>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#000000" : "#333333",
                    fontSize: "0.95rem"
                  }}
                >
                  {step.title}
                </Typography>
                {isActive && (
                  <Typography 
                    component={motion.p}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    variant="body2" 
                    sx={{ color: "#666666", fontSize: "0.85rem" }}
                  >
                    {step.description}
                  </Typography>
                )}
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
          );
        })}
      </Box>

      {completed && (
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{ 
            mt: 3, 
            p: 2, 
            bgcolor: "rgba(16, 185, 129, 0.08)",
            borderRadius: 1.5,
            border: "1px solid rgba(16, 185, 129, 0.2)",
            textAlign: "center"
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#10b981", fontWeight: 600, fontSize: "0.95rem" }}>
            All tasks completed successfully!
          </Typography>
          <Typography variant="body2" sx={{ color: "#666666", fontSize: "0.85rem" }}>
            Documentation is ready in the EHR system.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
