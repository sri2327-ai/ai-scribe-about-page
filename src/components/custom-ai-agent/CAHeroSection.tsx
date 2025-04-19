
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';

export const CAHeroSection = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Build Custom AI Agents for Your Clinic Workflows
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
              Supercharge your clinic's operations with S10.AI Custom AI Agents—designed to automate repetitive clinical and administrative tasks, seamlessly integrate with your existing tools, and adapt to your specialty workflows.
            </p>
            
            <Button 
              size="lg"
              className="rounded-full px-8 py-6 text-lg bg-[#143151] hover:bg-[#0d1f31] text-white shadow-xl"
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
