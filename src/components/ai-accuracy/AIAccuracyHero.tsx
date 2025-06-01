
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CanvasEffect } from '@/components/ui/canvas-effect';

interface FeatureItemProps {
  name: string;
  value: string;
  position: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ name, value, position }) => {
  return (
    <div className={`absolute ${position} z-20 group transition-all duration-300 hover:scale-110`}>
      <div className="flex items-center gap-2 sm:gap-3 relative">
        <div className="relative">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full group-hover:animate-pulse shadow-lg shadow-white/50"></div>
          <div className="absolute -inset-1 bg-white/30 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-white relative">
          <div className="font-semibold group-hover:text-white transition-colors duration-300 text-xs sm:text-sm lg:text-base whitespace-nowrap">{name}</div>
          <div className="text-white/80 text-xs sm:text-sm group-hover:text-white/90 transition-colors duration-300 whitespace-nowrap">{value}</div>
          <div className="absolute -inset-2 bg-white/5 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

const AIAccuracyHero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-full bg-black text-white overflow-hidden min-h-screen">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 min-h-screen flex flex-col">
        
        {/* Feature items with improved positioning */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex-1 pt-16 sm:pt-20 lg:pt-24"
        >
          <motion.div variants={itemVariants}>
            <FeatureItem 
              name="HIPAA" 
              value="Compliant" 
              position="left-4 sm:left-8 lg:left-12 xl:left-16 top-12 sm:top-16 lg:top-20" 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem 
              name="99.7%" 
              value="Accuracy" 
              position="left-1/4 sm:left-[30%] lg:left-[35%] top-4 sm:top-6 lg:top-8" 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem 
              name="Clinical" 
              value="Validation" 
              position="right-1/4 sm:right-[30%] lg:right-[35%] top-4 sm:top-6 lg:top-8" 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem 
              name="Continuous" 
              value="Learning" 
              position="right-4 sm:right-8 lg:right-12 xl:right-16 top-12 sm:top-16 lg:top-20" 
            />
          </motion.div>
        </motion.div>

        {/* Main hero content with corner bracket frame */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-30 flex flex-col items-center text-center max-w-5xl mx-auto flex-1 justify-center"
        >
          {/* Corner bracket frame container */}
          <div className="relative">
            {/* Corner brackets */}
            <div className="absolute -inset-8 sm:-inset-12 lg:-inset-16">
              {/* Top left corner */}
              <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/40"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-white/40"></div>
              </div>
              
              {/* Top right corner */}
              <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16">
                <div className="absolute top-0 right-0 w-full h-1 bg-white/40"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-white/40"></div>
              </div>
              
              {/* Bottom left corner */}
              <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/40"></div>
                <div className="absolute bottom-0 left-0 w-1 h-full bg-white/40"></div>
              </div>
              
              {/* Bottom right corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16">
                <div className="absolute bottom-0 right-0 w-full h-1 bg-white/40"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full bg-white/40"></div>
              </div>
            </div>
            
            {/* Main heading content */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-3 sm:mb-4 text-white leading-tight px-4 sm:px-8"
            >
              S10.AI Accuracy
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white/90 leading-relaxed px-4 sm:px-8"
            >
              Healthcare AI Standard
            </motion.h2>
          </div>
        </motion.div>

        {/* CTA section with improved positioning */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-30 flex justify-center pb-16 sm:pb-20 lg:pb-24"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 shadow-lg flex items-center gap-2 text-sm sm:text-base backdrop-blur-sm"
          >
            Explore Accuracy Metrics
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced background elements with canvas effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/85"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] rounded-full bg-gradient-to-b from-teal-500/25 to-cyan-600/15 blur-3xl"></div>

        {/* Canvas effect background */}
        <div className="absolute inset-0 w-full h-full">
          <CanvasEffect id="ai-accuracy-canvas" className="opacity-80" />
        </div>
      </motion.div>
    </div>
  );
};

export default AIAccuracyHero;
