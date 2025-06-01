
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronDown } from 'lucide-react';
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

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('accuracy-foundation');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-black text-white overflow-hidden min-h-screen">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 min-h-screen flex flex-col">
        
        {/* Main hero content with enhanced frame */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-30 flex flex-col items-center text-center max-w-7xl mx-auto flex-1 justify-center"
        >
          <div className="mb-8 mt-4 md:mt-6 w-full">
            <div className="px-2">
              <div className="relative mx-auto h-full max-w-7xl border border-white/20 p-16 md:p-24 lg:p-32 xl:p-40 [mask-image:radial-gradient(1000rem_120rem_at_center,white,transparent)]">
                {/* Corner brackets - white */}
                <Plus
                  strokeWidth={4}
                  className="text-white absolute -left-4 -top-4 h-8 w-8"
                />
                <Plus
                  strokeWidth={4}
                  className="text-white absolute -bottom-4 -left-4 h-8 w-8"
                />
                <Plus
                  strokeWidth={4}
                  className="text-white absolute -right-4 -top-4 h-8 w-8"
                />
                <Plus
                  strokeWidth={4}
                  className="text-white absolute -bottom-4 -right-4 h-8 w-8"
                />

                {/* Main heading content - larger H1 */}
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-light mb-6 sm:mb-8 text-white leading-tight"
                >
                  S10.AI Accuracy
                </motion.h1>

                <motion.h2
                  variants={itemVariants}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white/90 leading-relaxed mb-16 sm:mb-20 lg:mb-24"
                >
                  Healthcare AI Standard
                </motion.h2>

                {/* Benefit pills inside the frame with improved spacing */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
                >
                  <motion.div variants={itemVariants}>
                    <div className="flex flex-col items-center text-center group transition-all duration-300 hover:scale-110">
                      <div className="relative mb-4">
                        <div className="w-3 h-3 bg-green-800 rounded-full shadow-lg shadow-green-800/50 animate-pulse"></div>
                        <div className="absolute -inset-1.5 bg-green-800/30 rounded-full blur-md animate-pulse"></div>
                        <div className="absolute -inset-1 bg-green-800/40 rounded-full blur-sm animate-pulse"></div>
                      </div>
                      <div className="text-white">
                        <div className="font-semibold text-sm sm:text-base lg:text-lg">HIPAA</div>
                        <div className="text-white/80 text-xs sm:text-sm">Compliant</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <div className="flex flex-col items-center text-center group transition-all duration-300 hover:scale-110">
                      <div className="relative mb-4">
                        <div className="w-3 h-3 bg-green-800 rounded-full shadow-lg shadow-green-800/50 animate-pulse"></div>
                        <div className="absolute -inset-1.5 bg-green-800/30 rounded-full blur-md animate-pulse"></div>
                        <div className="absolute -inset-1 bg-green-800/40 rounded-full blur-sm animate-pulse"></div>
                      </div>
                      <div className="text-white">
                        <div className="font-semibold text-sm sm:text-base lg:text-lg">99.7%</div>
                        <div className="text-white/80 text-xs sm:text-sm">Accuracy</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <div className="flex flex-col items-center text-center group transition-all duration-300 hover:scale-110">
                      <div className="relative mb-4">
                        <div className="w-3 h-3 bg-green-800 rounded-full shadow-lg shadow-green-800/50 animate-pulse"></div>
                        <div className="absolute -inset-1.5 bg-green-800/30 rounded-full blur-md animate-pulse"></div>
                        <div className="absolute -inset-1 bg-green-800/40 rounded-full blur-sm animate-pulse"></div>
                      </div>
                      <div className="text-white">
                        <div className="font-semibold text-sm sm:text-base lg:text-lg">Clinical</div>
                        <div className="text-white/80 text-xs sm:text-sm">Validation</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <div className="flex flex-col items-center text-center group transition-all duration-300 hover:scale-110">
                      <div className="relative mb-4">
                        <div className="w-3 h-3 bg-green-800 rounded-full shadow-lg shadow-green-800/50 animate-pulse"></div>
                        <div className="absolute -inset-1.5 bg-green-800/30 rounded-full blur-md animate-pulse"></div>
                        <div className="absolute -inset-1 bg-green-800/40 rounded-full blur-sm animate-pulse"></div>
                      </div>
                      <div className="text-white">
                        <div className="font-semibold text-sm sm:text-base lg:text-lg">Continuous</div>
                        <div className="text-white/80 text-xs sm:text-sm">Learning</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll down arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <button
            onClick={scrollToNextSection}
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <span className="text-sm font-medium">Explore Accuracy</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Pure black background with canvas effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-black"
      >
        {/* Canvas effect background */}
        <div className="absolute inset-0 w-full h-full">
          <CanvasEffect id="ai-accuracy-canvas" className="opacity-60" />
        </div>
      </motion.div>
    </div>
  );
};

export default AIAccuracyHero;
