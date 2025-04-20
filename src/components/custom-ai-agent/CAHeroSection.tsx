
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { CAWorkflowAnimation } from './animations/CAWorkflowAnimation';

export const CAHeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-28 pb-12 md:pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side content - Always first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-black">
              Build Custom AI Agents for Your Clinic Workflows
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 md:mb-8 leading-relaxed font-normal">
              Supercharge your clinic's operations with S10.AI Custom AI Agents—designed to automate repetitive clinical and administrative tasks, seamlessly integrate with your existing tools, and adapt to your specialty workflows.
            </p>
            
            <Button 
              size="lg"
              className="rounded-full px-6 md:px-8 py-5 md:py-6 text-base md:text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl w-full sm:w-auto font-semibold"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Right side animation - Second on mobile */}
          <div className="order-2 mt-8 md:mt-0">
            <CAWorkflowAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
