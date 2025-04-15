
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, FileText, Sparkles, CheckCircle } from "lucide-react";

export const AnimatedWorkflow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showComplete, setShowComplete] = useState(false);
  
  const steps = [
    {
      icon: <Stethoscope size={28} className="text-blue-600" />,
      title: "Patient Encounter",
      description: "You speak naturally with your patient"
    },
    {
      icon: <Sparkles size={28} className="text-blue-600" />,
      title: "AI Processing",
      description: "CRUSH listens and processes in real-time"
    },
    {
      icon: <FileText size={28} className="text-blue-600" />,
      title: "Documentation",
      description: "Clinical notes generated automatically"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          // When we've gone through all steps, show the completion screen
          setShowComplete(true);
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    // Reset "Encounter Complete" after showing it for 3 seconds
    if (showComplete) {
      const timeout = setTimeout(() => {
        setShowComplete(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [showComplete, steps.length]);

  return (
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        maxWidth: 500,
        height: '100%',
        maxHeight: 500,
        border: '1px solid #e0e0e0',
        borderRadius: 4,
        overflow: 'hidden',
        bgcolor: 'white',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      }}
    >
      {/* Header */}
      <Box 
        sx={{ 
          p: 2,
          borderBottom: '1px solid #e0e0e0',
          bgcolor: '#f5f7f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>
          Clinical Workflow
        </Typography>
      </Box>
      
      {/* Content */}
      <Box 
        sx={{ 
          p: 3,
          height: 'calc(100% - 56px)',
          position: 'relative'
        }}
      >
        {/* Steps Timeline */}
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative',
            zIndex: 1
          }}
        >
          {steps.map((step, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex',
                mb: index < steps.length - 1 ? 3 : 0,
                flex: 1,
                opacity: showComplete ? 0.5 : 1
              }}
            >
              {/* Step Number */}
              <Box 
                sx={{ 
                  mr: 2,
                  mt: 0.5,
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: currentStep === index ? '#e3f2fd' : '#f0f0f0',
                  border: '1px solid',
                  borderColor: currentStep === index ? '#1976d2' : '#e0e0e0'
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, color: currentStep === index ? '#1976d2' : '#777' }}>
                  {index + 1}
                </Typography>
              </Box>
              
              {/* Step Content */}
              <Box>
                <Box 
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    mb: 0.5
                  }}
                >
                  <Box sx={{ mr: 1 }}>
                    {step.icon}
                  </Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 600,
                      color: currentStep === index ? '#000000' : '#555555'
                    }}
                  >
                    {step.title}
                  </Typography>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: currentStep === index ? '#333333' : '#777777'
                  }}
                >
                  {step.description}
                </Typography>
                
                {/* Progress Line */}
                {index < steps.length - 1 && (
                  <Box 
                    sx={{ 
                      height: 30,
                      width: 1,
                      bgcolor: currentStep > index ? '#1976d2' : '#e0e0e0',
                      ml: 1.5,
                      my: 1
                    }}
                  />
                )}
              </Box>
            </Box>
          ))}
        </Box>
        
        {/* "Encounter Complete" Overlay */}
        <AnimatePresence>
          {showComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                zIndex: 2
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  borderRadius: 2,
                  bgcolor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0'
                }}
              >
                <CheckCircle size={48} className="text-green-500 mb-2" />
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#000000', mb: 1 }}>
                  Encounter Complete
                </Typography>
                <Typography variant="body2" sx={{ color: '#666666', textAlign: 'center' }}>
                  Clinical documentation successfully generated and saved to EHR
                </Typography>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};
