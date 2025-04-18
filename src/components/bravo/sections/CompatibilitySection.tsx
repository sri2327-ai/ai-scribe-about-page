import React from 'react';
import { motion } from "framer-motion";
import { FileCheck, Phone } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';
import { GradientTracing } from "@/components/ui/gradient-tracing";
import { GlowBorderEffect } from "@/components/ui/effects/glow-border-effect";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      when: "beforeChildren", 
      staggerChildren: 0.3,
      duration: 0.5
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const CompatibilitySection = () => {
  // Integration partners with their icons and paths
  const integrations = [
    {
      name: "PMS/EHR System",
      icon: <FileCheck size={24} color="#ffffff" />,
      gradientColors: ["#2EB9DF", "#2EB9DF", "#10B981"] as [string, string, string],
      path: `M0,0 L0,120`,
      position: { x: -120, y: 120 }
    },
    {
      name: "VOIP System",
      icon: <Phone size={24} color="#ffffff" />,
      gradientColors: ["#8B5CF6", "#7C3AED", "#6D28D9"] as [string, string, string],
      path: `M0,0 L0,120`,
      position: { x: 120, y: 120 }
    }
  ];

  return (
    <div className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <radialGradient id="gradient-bg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor={`${bravoColors.tertiary}10`} />
              <stop offset="100%" stopColor="#ffffff00" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-bg)" />
          
          {/* Floating hexagon grid */}
          <pattern id="hexagons" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path 
              d="M0,20 L10,0 L30,0 L40,20 L30,40 L10,40 Z" 
              fill="none" 
              stroke={`${bravoColors.accent.blue}10`} 
              strokeWidth="0.5"
            />
          </pattern>
          <motion.rect 
            x="0" y="0" width="100%" height="100%" 
            fill="url(#hexagons)"
            animate={{ 
              x: [0, 40, 0], 
              y: [0, 30, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20, 
              ease: "linear" 
            }}
          />
        </svg>
      </div>
      
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div 
          className="relative flex items-center justify-center min-h-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Central BRAVO hub */}
          <div className="relative z-20">
            <motion.div 
              className="relative mb-12"
              variants={textVariants}
            >
              <div className="relative">
                {/* Pulse rings */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: `radial-gradient(circle, ${bravoColors.accent.blue}30 0%, ${bravoColors.accent.blue}00 70%)` 
                  }}
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: {
                      scale: [0.8, 1.2, 1],
                      opacity: [0, 0.6, 0],
                      transition: {
                        repeat: Infinity,
                        repeatDelay: 2,
                        duration: 2,
                        times: [0, 0.5, 1]
                      }
                    }
                  }}
                />
                
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: `radial-gradient(circle, ${bravoColors.accent.blue}20 0%, ${bravoColors.accent.blue}00 70%)`,
                    scale: 1.5 
                  }}
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: {
                      scale: [0.8, 1.2, 1],
                      opacity: [0, 0.6, 0],
                      transition: {
                        repeat: Infinity,
                        repeatDelay: 2,
                        duration: 2,
                        times: [0, 0.5, 1]
                      }
                    }
                  }}
                  custom={0.2}
                />
                
                {/* Hub */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full backdrop-blur-sm bg-gradient-to-br from-white/80 to-white/40 flex items-center justify-center shadow-lg border border-white/60 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 z-0" />
                    <GlowBorderEffect glow variant="teal" />
                    <span className="text-2xl font-bold z-10 relative" style={{ color: bravoColors.primary }}>BRAVO</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Integration spokes */}
            {integrations.map((integration, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ 
                  left: `calc(50% + ${integration.position.x}px)`,
                  top: '50%',
                  transform: `translate(-50%, ${integration.position.y}px)`,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: i * 0.3 }
                  }
                }}
              >
                <div className="relative">
                  {/* Connection line */}
                  <div className="absolute top-[-120px] left-0 w-full flex justify-center pointer-events-none">
                    <GradientTracing
                      width={2}
                      height={120}
                      path={integration.path}
                      gradientColors={integration.gradientColors}
                      animationDuration={3}
                      baseColor="#e5e7eb"
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  {/* Integration icon */}
                  <motion.div
                    className="relative"
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1, 
                        opacity: 1,
                        transition: { 
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                          delay: 0.3
                        }
                      }
                    }}
                  >
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/80 to-white/40 flex items-center justify-center shadow-md border border-white/60 z-10">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/10 to-purple-400/10 z-0" />
                        <div className="p-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 z-10">
                          {integration.icon}
                        </div>
                      </div>
                      
                      {/* Connected badge */}
                      <motion.div
                        className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: 1.2,
                              duration: 0.3
                            }
                          }
                        }}
                      >
                        Connected
                      </motion.div>
                    </div>
                    
                    <div className="absolute top-full mt-3 text-center w-full">
                      <p className="text-sm font-medium" style={{ color: bravoColors.text.secondary }}>
                        {integration.name}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="text-center max-w-2xl mx-auto mt-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xl" style={{ color: bravoColors.text.secondary }}>
            BRAVO seamlessly integrates with your PMS/EHR System and VOIP infrastructure.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
