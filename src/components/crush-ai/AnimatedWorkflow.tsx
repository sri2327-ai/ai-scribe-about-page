
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Database, Send, CheckCircle } from "lucide-react";
import { AIVoiceInput } from "./AIVoiceInput";
import { Box, Typography } from "@mui/material";

const workflowSteps = [
  {
    id: "start",
    title: "Start Encounter",
    icon: <Send size={36} className="text-tealBlueBright" />,
    description: "Recording patient conversation..."
  },
  {
    id: "notes",
    title: "Generate Clinical Notes",
    icon: <FileText size={36} className="text-tealBlueBright" />,
    description: "Creating comprehensive documentation..."
  },
  {
    id: "referral",
    title: "Create Referral Letters",
    icon: <FileText size={36} className="text-tealBlueBright" />,
    description: "Preparing specialist referrals..."
  },
  {
    id: "labs",
    title: "Process Lab Orders",
    icon: <FileText size={36} className="text-tealBlueBright" />,
    description: "Submitting necessary lab work..."
  },
  {
    id: "instructions",
    title: "Generate Patient Instructions",
    icon: <FileText size={36} className="text-tealBlueBright" />,
    description: "Creating personalized care instructions..."
  },
  {
    id: "ehr",
    title: "Push Notes to EHR",
    icon: <Database size={36} className="text-tealBlueBright" />,
    description: "Syncing with electronic health record..."
  },
  {
    id: "complete",
    title: "Encounter Complete",
    icon: <CheckCircle size={36} className="text-tealBlueBright" />,
    description: "All tasks completed successfully"
  }
];

export function AnimatedWorkflow() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

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
      }, 3000);

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

  return (
    <Box 
      sx={{
        position: "relative",
        p: 3, 
        bgcolor: "#f8fafc",
        borderRadius: 2,
        boxShadow: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          textAlign: "center",
          fontWeight: "medium",
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
          
          return (
            <Box
              key={step.id}
              component={motion.div}
              initial={{ opacity: 0.5, x: -10 }}
              animate={{ 
                opacity: isActive || isComplete ? 1 : 0.5,
                x: isActive ? 0 : isComplete ? 0 : -10
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1.5,
                borderRadius: 1,
                bgcolor: isActive ? "rgba(30, 174, 219, 0.1)" : "transparent",
                border: isActive ? "1px solid rgba(30, 174, 219, 0.3)" : "1px solid transparent"
              }}
            >
              <Box 
                sx={{ 
                  mr: 2,
                  opacity: isActive || isComplete ? 1 : 0.5,
                  color: isComplete ? "#10b981" : "#1EAEDB"
                }}
              >
                {isComplete ? <CheckCircle size={28} /> : step.icon}
              </Box>
              <Box>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: isActive ? "bold" : "medium",
                    color: isActive ? "#1EAEDB" : "#000000"
                  }}
                >
                  {step.title}
                </Typography>
                {isActive && (
                  <Typography 
                    component={motion.p}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    variant="body2" 
                    sx={{ color: "#666" }}
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
                  <div className="w-3 h-3 rounded-full bg-tealBlueBright animate-pulse" />
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
            bgcolor: "rgba(16, 185, 129, 0.1)",
            borderRadius: 1,
            border: "1px solid rgba(16, 185, 129, 0.3)",
            textAlign: "center"
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#10b981", fontWeight: "medium" }}>
            All tasks completed successfully!
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            Documentation is ready in the EHR system.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
