
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';

interface Step {
  number: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
}

const IllustrationFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 aspect-video w-full flex items-center justify-center">
    {children}
  </div>
);

const StepIllustration1 = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full h-full flex flex-col gap-4"
  >
    <div className="flex gap-4">
      <motion.div 
        className="h-32 w-1/2 bg-blue-100 rounded-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.div 
        className="h-32 w-1/2 bg-green-100 rounded-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
      />
    </div>
    <motion.div 
      className="h-24 w-full bg-purple-100 rounded-lg"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    />
  </motion.div>
);

const StepIllustration2 = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full h-full grid grid-cols-3 gap-4"
  >
    {[1, 2, 3].map((i) => (
      <motion.div 
        key={i}
        className="bg-blue-50 rounded-lg p-4"
        animate={{ 
          scale: [1, 1.05, 1],
          backgroundColor: ['#EFF6FF', '#F3F4F6', '#EFF6FF']
        }}
        transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
      >
        <div className="w-full h-full flex flex-col gap-2">
          <div className="h-2 w-3/4 bg-blue-200 rounded" />
          <div className="h-2 w-1/2 bg-blue-200 rounded" />
        </div>
      </motion.div>
    ))}
  </motion.div>
);

const StepIllustration3 = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full h-full flex items-center justify-center"
  >
    <motion.div 
      className="w-32 h-32 rounded-full border-4 border-blue-200 flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    >
      <motion.div 
        className="w-24 h-24 rounded-full border-4 border-green-200"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <motion.div 
          className="w-16 h-16 rounded-full border-4 border-purple-200"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  </motion.div>
);

const StepIllustration4 = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full h-full flex flex-col gap-4"
  >
    <motion.div 
      className="h-4 bg-gradient-to-r from-green-200 to-blue-200 rounded-full"
      animate={{ width: ["0%", "100%"] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    />
    <div className="grid grid-cols-4 gap-2">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="h-16 rounded-lg bg-purple-100"
          animate={{ 
            scale: [1, 1.1, 1],
            backgroundColor: ['#F3E8FF', '#EFF6FF', '#F3E8FF']
          }}
          transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
        />
      ))}
    </div>
  </motion.div>
);

const steps: Step[] = [
  {
    number: "1️",
    title: "Discover Your Needs",
    description: "We start with a consultative session to pinpoint your practice's unique challenges—whether it's automating prior authorizations for neurology or triaging dermatology referrals.",
    illustration: <StepIllustration1 />
  },
  {
    number: "2️",
    title: "Build Your Agent",
    description: "Using IPKO's advanced AI, we craft a bespoke agent tailored to your workflow, trained on your specialty's terminology, protocols, and goals.",
    illustration: <StepIllustration2 />
  },
  {
    number: "3️",
    title: "Seamless Deployment",
    description: "Your agent integrates with your existing systems in under a week, syncing with CRUSH's real-time notes and BRAVO's patient engagement tools for a cohesive experience.",
    illustration: <StepIllustration3 />
  },
  {
    number: "4️",
    title: "Ongoing Optimization",
    description: "Our team monitors performance, refining your agent to ensure it evolves with your practice, delivering consistent efficiency and accuracy.",
    illustration: <StepIllustration4 />
  }
];

export const CAGettingStartedStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-20 bg-gray-50" style={{
      backgroundColor: customAIAgentColors.background.light
    }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{
            color: customAIAgentColors.primary
          }}>
            Getting Started with Custom AI Agents
          </h2>
          <p className="text-lg mb-12" style={{
            color: customAIAgentColors.text.secondary
          }}>
            Picture an AI designed specifically for you. Our Custom AI Agents optimize unique workflows, driving significant results across specialties. Here's how to begin:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeStep === index ? "bg-white shadow-lg" : "hover:bg-white/50"
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.02 }}
                  animate={{ opacity: activeStep === index ? 1 : 0.7 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: `${customAIAgentColors.tertiary}20`,
                        border: activeStep === index ? `2px solid ${customAIAgentColors.tertiary}` : `1px solid ${customAIAgentColors.tertiary}50`
                      }}
                      animate={{ scale: activeStep === index ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-xl font-bold" style={{ color: customAIAgentColors.primary }}>
                        {step.number}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: customAIAgentColors.primary }}>
                        {step.title}
                      </h3>
                      <p className="text-sm" style={{ color: customAIAgentColors.text.secondary }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative h-[400px] flex items-center justify-center bg-white rounded-xl shadow-lg p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <IllustrationFrame>
                    {steps[activeStep].illustration}
                  </IllustrationFrame>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="px-8 py-6 text-lg rounded-md"
              style={{
                backgroundColor: customAIAgentColors.secondary,
                color: customAIAgentColors.text.white
              }}
            >
              See It in Action: Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
