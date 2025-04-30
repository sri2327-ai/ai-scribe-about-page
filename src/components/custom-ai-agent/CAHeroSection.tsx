
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CAWorkflowAnimation } from './animations/CAWorkflowAnimation';

export const CAHeroSection = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-12 md:pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-black">
              Build Custom AI Agents for Your Clinic Workflows
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Supercharge your clinic's operations with S10.AI Custom AI Agents—designed to automate repetitive clinical and administrative tasks, seamlessly integrate with your existing tools, and adapt to your specialty workflows.
            </p>
            
            <Button 
              size="lg"
              className="rounded-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl w-full sm:w-auto font-semibold"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>

          <div className="order-1 lg:order-2 mt-0 md:mt-0">
            <CAWorkflowAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
