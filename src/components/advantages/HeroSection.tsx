
import React from "react";
import { motion } from "framer-motion";
import { AnimatedGradientBackground } from "./AnimatedGradientBackground";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[75vh] md:h-[85vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <AnimatedGradientBackground
        Breathing={true}
        animationSpeed={0.015}
        breathingRange={15}
        startingGap={100}
        gradientColors={[
          "#020617",
          "#020617",
          "#0D9488",
          "#34D399",
          "#06B6D4",
          "#020617",
        ]}
        gradientStops={[0, 60, 75, 85, 90, 100]}
        topOffset={0}
      />
      
      <motion.div 
        className="relative z-10 p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 tracking-tight text-gray-100"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          The S10.AI Difference
          <motion.span 
            className="block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            More Than AI
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-2xl sm:text-3xl md:text-4xl font-light mb-10 text-gray-200"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.2)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          It's Your Practice, <span className="font-semibold text-gray-400">Transformed.</span>
        </motion.p>
        
        <motion.a 
          href="#advantages" 
          className="rounded-full px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg text-white border-2 border-white hover:bg-white hover:text-teal-600 transition-all duration-300 shadow-lg inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Explore the Advantages
        </motion.a>
      </motion.div>
    </div>
  );
};
