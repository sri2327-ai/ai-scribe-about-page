
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { GradientTracing } from "@/components/ui/gradient-tracing";

const workflowSteps = [
  {
    id: 1,
    title: "CRM to EHR Data Transfer",
    description: "No more copy-pasting. S10.AI syncs patient details directly into your EHR with perfect accuracy.",
    illustration: "💻➡️📋"
  },
  {
    id: 2,
    title: "Clinical Data Extraction",
    description: "Pulls diagnoses, allergies, meds, and more from scanned docs into the patient chart—instantly.",
    illustration: "📄➡️📊"
  },
  {
    id: 3,
    title: "Smart Scheduling",
    description: "Handles last-minute changes, fills canceled slots, and reduces no-shows.",
    illustration: "📅✨"
  },
  {
    id: 4,
    title: "Documentation Support",
    description: "Auto-pastes SOAP, HPI, and assessment notes directly into your EHR—fully structured and editable.",
    illustration: "📝➡️📋"
  },
  {
    id: 5,
    title: "Insurance Automation",
    description: "Completes payer forms, submits documentation, tracks status—no more long phone calls or delays.",
    illustration: "📋✅"
  },
  {
    id: 6,
    title: "Inbox Management",
    description: "Responds to appointment requests, routes referrals, confirms forms—all via AI-powered email handling.",
    illustration: "📧🤖"
  }
];

export const CAWorkflowAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute w-[500px] h-[500px] rounded-full opacity-10"
          style={{ backgroundColor: customAIAgentColors.tertiary }}
        />
      </div>

      {/* Workflow steps */}
      <div className="relative w-full max-w-2xl flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="text-6xl mb-4">{workflowSteps[currentStep].illustration}</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: customAIAgentColors.primary }}>
              {workflowSteps[currentStep].title}
            </h3>
            <p className="text-gray-600">
              {workflowSteps[currentStep].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Step indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {workflowSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => {
                setCurrentStep(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentStep === index 
                  ? 'bg-blue-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View ${step.title}`}
            />
          ))}
        </div>

        {/* Connection lines */}
        <GradientTracing
          width={600}
          height={400}
          path="M100,200 C150,100 450,300 500,200"
          strokeWidth={1.5}
          baseColor="#e2e8f0"
          gradientColors={[customAIAgentColors.primary, customAIAgentColors.secondary, customAIAgentColors.secondary]}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        />
      </div>
    </div>
  );
};
