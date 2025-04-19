
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

export const CAHeroSection = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedGradientBackground 
          gradientColors={[customAIAgentColors.primary, customAIAgentColors.secondary, customAIAgentColors.background.dark]} 
          gradientStops={[0, 50, 100]}
          startingGap={250}
          animationSpeed={0.05}
          breathingRange={30}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Build Custom AI Agents for Your Clinic Workflows
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Supercharge your clinic's operations with S10.AI Custom AI Agents—designed to automate repetitive clinical and administrative tasks, seamlessly integrate with your existing tools, and adapt to your specialty workflows.
            </p>
            
            <Button 
              size="lg"
              className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
