
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle, Play, Pause } from "lucide-react";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import ShootingStars from '@/components/ui/shooting-stars';

interface Step {
  number: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
}

const IllustrationFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 aspect-video w-full h-full flex items-center justify-center relative overflow-hidden">
    {children}
    
    {/* Added semi-transparent instruction overlay */}
    <div className="absolute top-2 left-2 bg-blue-50 bg-opacity-80 px-2 py-1 rounded text-xs text-blue-700 font-medium">
      Animation Preview
    </div>
  </div>
);

const StepIllustration1 = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full h-full flex flex-col gap-4"
  >
    {/* Consultation Session Visualization */}
    <div className="flex gap-4">
      <motion.div 
        className="h-32 w-1/2 bg-purple-100 rounded-lg p-4 flex flex-col gap-2"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="text-xs font-medium text-purple-600">Neurology</div>
        <motion.div 
          className="h-2 w-3/4 bg-purple-200 rounded"
          animate={{ width: ["40%", "75%", "40%"] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div 
          className="h-2 w-1/2 bg-purple-200 rounded"
          animate={{ width: ["30%", "60%", "30%"] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
        />
      </motion.div>
      <motion.div 
        className="h-32 w-1/2 bg-blue-100 rounded-lg p-4 flex flex-col gap-2"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
      >
        <div className="text-xs font-medium text-blue-600">Dermatology</div>
        <motion.div 
          className="h-2 w-3/4 bg-blue-200 rounded"
          animate={{ width: ["50%", "85%", "50%"] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div 
          className="h-2 w-1/2 bg-blue-200 rounded"
          animate={{ width: ["40%", "70%", "40%"] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
        />
      </motion.div>
    </div>
    <motion.div 
      className="h-24 w-full bg-green-100 rounded-lg p-4"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <div className="text-xs font-medium text-green-600 mb-2">Practice Needs Analysis</div>
      <div className="flex gap-2">
        <motion.div 
          className="h-2 w-1/3 bg-green-200 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.div 
          className="h-2 w-1/3 bg-green-200 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
        />
      </div>
    </motion.div>
  </motion.div>
);

const StepIllustration2 = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full h-full flex flex-col gap-4"
  >
    {/* AI Building Process Visualization */}
    <motion.div className="h-40 bg-blue-50 rounded-lg p-4 relative overflow-hidden">
      <div className="text-sm font-medium text-blue-600 mb-4">IPKO AI Training</div>
      <div className="flex flex-col gap-2">
        <motion.div 
          className="h-3 bg-gradient-to-r from-purple-200 to-blue-200 rounded"
          animate={{ width: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-blue-500"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Training Model...
        </motion.div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="h-12 rounded bg-white shadow-sm p-2"
            animate={{ 
              scale: [1, 1.05, 1],
              backgroundColor: ['#FFFFFF', '#F3F4F6', '#FFFFFF']
            }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
          >
            <div className="w-full h-full flex flex-col gap-1">
              <div className="h-1 w-3/4 bg-blue-100 rounded" />
              <div className="h-1 w-1/2 bg-blue-100 rounded" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const StepIllustration3 = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full h-full flex items-center justify-center"
  >
    {/* System Integration Visualization */}
    <motion.div className="relative w-full h-full flex flex-col items-center justify-center space-y-6">
      <motion.div 
        className="w-full max-w-xs bg-blue-50 rounded-xl p-6 shadow-sm"
        animate={{ 
          scale: [1, 1.02, 1],
          boxShadow: [
            '0 4px 6px rgba(0,0,0,0.1)',
            '0 6px 8px rgba(0,0,0,0.15)',
            '0 4px 6px rgba(0,0,0,0.1)'
          ]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="text-sm font-medium text-blue-600 mb-4">System Integration</div>
        <div className="space-y-3">
          <motion.div 
            className="h-2 bg-blue-200 rounded"
            animate={{ 
              width: ["0%", "100%", "80%"],
              backgroundColor: [
                'rgba(191, 219, 254, 1)', 
                'rgba(191, 219, 254, 0.7)', 
                'rgba(191, 219, 254, 1)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="h-2 bg-blue-200 rounded"
            animate={{ 
              width: ["0%", "90%", "70%"],
              backgroundColor: [
                'rgba(191, 219, 254, 1)', 
                'rgba(191, 219, 254, 0.7)', 
                'rgba(191, 219, 254, 1)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </div>
        <div className="mt-4 text-xs text-blue-500 text-center">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Integrating in under a week...
          </motion.span>
        </div>
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
    {/* Performance Monitoring Visualization */}
    <div className="space-y-4">
      <motion.div 
        className="h-3 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 rounded-full"
        animate={{ width: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      
      <div className="grid grid-cols-2 gap-3">
        <motion.div
          className="p-3 rounded-lg bg-blue-50"
          animate={{ 
            scale: [1, 1.02, 1],
            backgroundColor: ['#EFF6FF', '#F3F4F6', '#EFF6FF']
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-[10px] font-medium text-blue-600 mb-1">Efficiency</div>
          <motion.div 
            className="h-1.5 bg-blue-200 rounded"
            animate={{ width: ["60%", "90%", "60%"] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

        <motion.div
          className="p-3 rounded-lg bg-purple-50"
          animate={{ 
            scale: [1, 1.02, 1],
            backgroundColor: ['#F3E8FF', '#F3F4F6', '#F3E8FF']
          }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
        >
          <div className="text-[10px] font-medium text-purple-600 mb-1">Accuracy</div>
          <motion.div 
            className="h-1.5 bg-purple-200 rounded"
            animate={{ width: ["70%", "95%", "70%"] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>
      </div>

      <motion.div
        className="p-3 rounded-lg bg-green-50"
        animate={{ 
          scale: [1, 1.02, 1],
          backgroundColor: ['#F0FDF4', '#F3F4F6', '#F0FDF4']
        }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
      >
        <div className="text-[10px] font-medium text-green-600 mb-1">Performance Trend</div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="flex-1 h-6 relative"
            >
              <motion.div
                className="absolute bottom-0 w-full bg-green-200 rounded-t"
                initial={{ height: "20%" }}
                animate={{ height: ["20%", "60%", "40%", "80%", "60%"] }}
                transition={{ repeat: Infinity, duration: 4, delay: i * 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
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
    description: "Your agent integrates with your existing systems in under a week.",
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
  const [autoPlay, setAutoPlay] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      if (!hovered) {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, hovered]);

  const nextStep = () => {
    setAutoPlay(false);
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setAutoPlay(false);
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden" style={{
      backgroundColor: customAIAgentColors.background.light
    }}>
      {/* Added subtle background animation */}
      <div className="absolute inset-0 opacity-20">
        <ShootingStars starCount={8} colors={[customAIAgentColors.primary, customAIAgentColors.secondary]} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center" style={{
            color: customAIAgentColors.primary
          }}>
            Getting Started with Custom AI Agents
          </h2>
          <p className="text-lg mb-10 md:mb-12 text-center max-w-3xl mx-auto" style={{
            color: customAIAgentColors.text.secondary
          }}>
            Picture an AI designed specifically for you. Our Custom AI Agents optimize unique workflows, driving significant results across specialties. Here's how to begin:
          </p>

          {/* Mobile View - Stacked Layout */}
          <div className="md:hidden flex flex-col">
            {/* Visual content - Animation Display */}
            <div className="relative h-[300px] mb-8">
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
                  
                  {/* Added floating step counter */}
                  <div className="absolute top-3 right-3 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center font-bold" style={{ color: customAIAgentColors.primary }}>
                    {activeStep + 1}/{steps.length}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Added autoplay control */}
              <button 
                onClick={toggleAutoPlay}
                className="absolute bottom-3 right-3 z-10 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-md transition-colors"
                style={{ color: customAIAgentColors.primary }}
              >
                {autoPlay ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
            
            {/* Step title and description */}
            <div className="text-center mb-6">
              <div 
                className="inline-block px-3 py-1 rounded-full mb-2"
                style={{ backgroundColor: `${customAIAgentColors.primary}20`, color: customAIAgentColors.primary }}
              >
                Step {activeStep + 1}: {steps[activeStep].title}
              </div>
              <p style={{ color: customAIAgentColors.text.secondary }}>
                {steps[activeStep].description}
              </p>
            </div>
            
            {/* Step indicators with navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={prevStep}
                className="flex items-center gap-1"
                style={{
                  borderColor: customAIAgentColors.primary,
                  color: customAIAgentColors.primary
                }}
              >
                <ArrowLeft size={16} />
                <span>Previous</span>
              </Button>
              
              <div className="flex gap-2">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveStep(idx);
                      setAutoPlay(false);
                    }}
                    className={`w-6 h-2 rounded-full transition-all duration-300 ${
                      activeStep === idx ? "w-10" : ""
                    }`}
                    style={{
                      backgroundColor: activeStep === idx 
                        ? customAIAgentColors.primary 
                        : `${customAIAgentColors.primary}40`
                    }}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextStep}
                className="flex items-center gap-1"
                style={{
                  backgroundColor: customAIAgentColors.primary,
                  color: "white"
                }}
              >
                <span>Next</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* Desktop View - Side-by-side Layout with improved UX */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 mb-12">
            {/* Animation Display - Larger and more prominent */}
            <div 
              className="col-span-7 flex flex-col"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="relative h-[450px] bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full p-6"
                  >
                    {steps[activeStep].illustration}
                  </motion.div>
                </AnimatePresence>
                
                {/* Added floating step indicator */}
                <div className="absolute top-4 right-4 bg-white shadow-md rounded-full px-3 py-1 font-medium text-sm" style={{ color: customAIAgentColors.primary }}>
                  Step {activeStep + 1} of {steps.length}
                </div>
                
                {/* Added animation label with improved visibility */}
                <div className="absolute top-4 left-4 bg-blue-50 bg-opacity-90 px-3 py-1.5 rounded text-sm font-medium shadow-sm border border-blue-100 flex items-center gap-2" style={{ color: customAIAgentColors.primary }}>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-2 h-2 rounded-full bg-blue-400"
                  />
                  Animation Preview
                </div>
                
                {/* Added playback controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevStep}
                    className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
                    style={{
                      borderColor: customAIAgentColors.primary,
                      color: customAIAgentColors.primary
                    }}
                  >
                    <ArrowLeft size={14} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleAutoPlay}
                    className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
                    style={{
                      borderColor: customAIAgentColors.primary,
                      color: customAIAgentColors.primary
                    }}
                  >
                    {autoPlay ? <Pause size={14} /> : <Play size={14} />}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextStep}
                    className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
                    style={{
                      borderColor: customAIAgentColors.primary,
                      color: customAIAgentColors.primary
                    }}
                  >
                    <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
              
              {/* Enhanced step indicators */}
              <div className="flex justify-center gap-3">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveStep(idx);
                      setAutoPlay(false);
                    }}
                    className={`group flex-1 h-2 rounded-full relative transition-all duration-300 overflow-hidden ${
                      activeStep === idx ? "h-3" : ""
                    }`}
                    style={{
                      backgroundColor: activeStep === idx 
                        ? customAIAgentColors.primary 
                        : `${customAIAgentColors.primary}30`
                    }}
                    aria-label={`Go to step ${idx + 1}`}
                  >
                    {/* Progress indicator for active animation */}
                    {activeStep === idx && autoPlay && (
                      <motion.div 
                        className="absolute inset-0 origin-left"
                        style={{ 
                          backgroundColor: `${customAIAgentColors.secondary}80`,
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ 
                          duration: 5,
                          ease: "linear",
                          repeat: 1,
                          repeatType: "loop"
                        }}
                      />
                    )}
                    
                    {/* Step number tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs transition-opacity duration-200" style={{ color: customAIAgentColors.primary }}>
                      Step {idx + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Steps list - with improved visual hierarchy */}
            <div className="col-span-5 space-y-3">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`p-5 rounded-xl transition-all duration-300 cursor-pointer border ${
                    activeStep === index 
                      ? "bg-white shadow-lg border-transparent" 
                      : "hover:bg-white/50 border-transparent hover:border-gray-100"
                  }`}
                  onClick={() => {
                    setActiveStep(index);
                    setAutoPlay(false);
                  }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  animate={{ 
                    opacity: activeStep === index ? 1 : 0.7,
                    x: activeStep === index ? 0 : 5
                  }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: activeStep === index 
                          ? `${customAIAgentColors.tertiary}40`
                          : `${customAIAgentColors.tertiary}20`,
                        border: activeStep === index 
                          ? `2px solid ${customAIAgentColors.tertiary}` 
                          : `1px solid ${customAIAgentColors.tertiary}50`
                      }}
                      animate={{ 
                        scale: activeStep === index ? [1, 1.1, 1] : 1,
                        rotate: activeStep === index ? [0, 5, 0, -5, 0] : 0
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-lg font-bold" style={{ color: customAIAgentColors.primary }}>
                        {step.number}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1.5" style={{ color: customAIAgentColors.primary }}>
                        {step.title}
                      </h3>
                      <p className="text-sm" style={{ color: customAIAgentColors.text.secondary }}>
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Added completion indicator with animation */}
                    {activeStep === index && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="ml-auto"
                      >
                        <CheckCircle 
                          size={20} 
                          className="text-green-500"
                        />
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Added progress bar for currently active step */}
                  {activeStep === index && autoPlay && (
                    <div className="mt-3 w-full bg-gray-100 rounded-full h-1 overflow-hidden">
                      <motion.div 
                        className="h-full"
                        style={{ backgroundColor: customAIAgentColors.tertiary }}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ 
                          duration: 5,
                          ease: "linear",
                          repeat: 1,
                          repeatType: "loop"
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl"
              onClick={() => setAutoPlay(false)}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
