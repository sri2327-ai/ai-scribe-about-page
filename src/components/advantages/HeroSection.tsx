
import React from "react";
import { motion } from "framer-motion";
import { AnimatedGradientBackground } from "./AnimatedGradientBackground";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <AnimatedGradientBackground
        Breathing={true}
        animationSpeed={0.010} // Reduced from 0.015
        breathingRange={10} // Reduced from 15
        startingGap={100}
        gradientColors={[
          "#020617",
          "#020617",
          "#0D9488",
          "#34D399",
          "#06B6D4",
          "#020617",
        ]}
        gradientStops={[0, 70, 80, 85, 90, 100]} // Adjusted stops for subtlety
        topOffset={0}
      />
      
      <motion.div 
        className="relative z-10 p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-medium mb-5 tracking-tight text-gray-100"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          The S10.AI Difference
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl font-light mb-10 text-gray-200"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.2)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          More Than AI - It's Your Practice, <span className="font-semibold text-gray-400">Transformed.</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center"
        >
          <style dangerouslySetInnerHTML={{
            __html: `
              :root {
                --teal-1: 174 80% 40%; /* Darker teal */
                --teal-2: 160 84% 45%; /* Medium teal */
                --teal-3: 152 76% 50%; /* Lighter green-teal */
              }
            `
          }} />
          <RainbowButton 
            onClick={() => document.getElementById('advantages')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full px-4 py-3 w-auto max-w-fit flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white/70 transition-all duration-300"
          >
            <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Explore the Advantages</span>
          </RainbowButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
