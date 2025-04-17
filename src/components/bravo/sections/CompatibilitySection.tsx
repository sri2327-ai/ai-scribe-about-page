
import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { Phone, Users, FileCheck, Database } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';
import { GradientTracing } from "@/components/ui/gradient-tracing";
import { GlowBorderEffect } from "@/components/ui/effects/glow-border-effect";
import ShootingStars from "@/components/ui/shooting-stars";

export const CompatibilitySection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };
  
  const hubVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: custom * 0.2
      }
    })
  };
  
  const pulseVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: [1, 1.8, 1],
      opacity: [0, 0.8, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 1.5,
        duration: 2,
        times: [0, 0.5, 1]
      }
    }
  };
  
  const connectedBadgeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + (custom * 0.2),
        duration: 0.3
      }
    })
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.2,
        duration: 0.5
      }
    }
  };

  // Integration partners with their paths
  const integrations = [
    {
      name: "SIP Phone System",
      icon: <Phone size={24} color="#ffffff" />,
      gradientColors: ["#2EB9DF", "#2EB9DF", "#6366F1"] as [string, string, string],
      path: `M0,0 C50,-40 100,-40 150,0`,
      position: { x: -150, y: -120 }
    },
    {
      name: "Patient Platform",
      icon: <Users size={24} color="#ffffff" />,
      gradientColors: ["#2EB9DF", "#2EB9DF", "#8B5CF6"] as [string, string, string],
      path: `M0,0 C50,40 100,40 150,0`,
      position: { x: -150, y: 120 }
    },
    {
      name: "PMS/EHR System",
      icon: <FileCheck size={24} color="#ffffff" />,
      gradientColors: ["#2EB9DF", "#2EB9DF", "#10B981"] as [string, string, string],
      path: `M0,0 C40,0 80,0 150,0`,
      position: { x: 150, y: 0 }
    }
  ];

  return (
    <div className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <radialGradient id="gradient-bg" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
              <stop offset="0%" stopColor={`${bravoColors.tertiary}30`} />
              <stop offset="100%" stopColor="#ffffff00" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-bg)" />
          
          {/* Enhanced floating hexagon grid */}
          <pattern id="hexagons" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path 
              d="M0,20 L10,0 L30,0 L40,20 L30,40 L10,40 Z" 
              fill="none" 
              stroke={`${bravoColors.accent.blue}20`} 
              strokeWidth="0.8"
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
        
        {/* Add subtle shooting stars in background */}
        <ShootingStars starCount={10} colors={["#1EAEDB15", "#8B5CF615"]} interactive={false} />
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 pt-8 pb-12">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: bravoColors.primary }}>
            Compatible with Your Preferred SIP, Patient Platform & PMS
          </h2>
        </motion.div>
        
        <motion.div 
          className="relative flex items-center justify-center h-[500px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Central BRAVO hub */}
          <div className="relative z-20">
            <motion.div 
              className="relative flex items-center justify-center"
              variants={hubVariants}
            >
              {/* Enhanced pulse rings - multiple rings with different sizes and timing */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{ 
                  background: `radial-gradient(circle, ${bravoColors.accent.blue}50 0%, ${bravoColors.accent.blue}00 70%)` 
                }}
                variants={pulseVariants}
              />
              
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{ 
                  background: `radial-gradient(circle, ${bravoColors.accent.blue}40 0%, ${bravoColors.accent.blue}00 70%)`,
                  scale: 1.2 
                }}
                animate={{
                  scale: [1.2, 2.2, 1.2],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 1,
                  duration: 2.5,
                  times: [0, 0.5, 1]
                }}
              />
              
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{ 
                  background: `radial-gradient(circle, ${bravoColors.accent.blue}30 0%, ${bravoColors.accent.blue}00 70%)`,
                  scale: 1.5 
                }}
                animate={{
                  scale: [1.5, 3, 1.5],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  duration: 3,
                  times: [0, 0.5, 1]
                }}
              />
              
              {/* Hub */}
              <div className="relative">
                <div className="w-28 h-28 rounded-full backdrop-blur-sm bg-gradient-to-br from-white/90 to-white/60 flex items-center justify-center shadow-lg border border-white/70 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 z-0" />
                  <GlowBorderEffect glow variant="teal" spread={70} blur={15} />
                  <span className="text-2xl font-bold z-10 relative" style={{ color: bravoColors.primary }}>BRAVO</span>
                </div>
                
                {/* Additional inner glow for the hub */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    boxShadow: `0 0 20px 5px ${bravoColors.accent.blue}50`,
                    opacity: 0
                  }}
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    scale: [0.8, 1.1, 0.8]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
            
            {/* Integration spokes - Enhanced with better visual effects */}
            {integrations.map((integration, i) => (
              <div key={i} className="absolute" style={{ 
                transform: `translate(${integration.position.x}px, ${integration.position.y}px)`,
                transformOrigin: 'center'
              }}>
                <div className="relative">
                  {/* Enhanced connection line */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <GradientTracing
                      width={150}
                      height={Math.abs(integration.position.y) + 10}
                      path={integration.path}
                      gradientColors={integration.gradientColors}
                      animationDuration={2.5}
                      baseColor="#e5e7eb"
                      strokeWidth={2.5}
                    />
                    
                    {/* Additional pulse effect along the connection line */}
                    <motion.div
                      className="absolute inset-0 opacity-0"
                      style={{
                        background: `linear-gradient(90deg, ${integration.gradientColors[0]}00, ${integration.gradientColors[1]}50, ${integration.gradientColors[2]}00)`,
                      }}
                      animate={{
                        opacity: [0, 0.7, 0],
                        x: [-20, 150, -20]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay: i * 0.8,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  {/* Integration icon */}
                  <motion.div
                    className="relative"
                    variants={iconVariants}
                    custom={i + 1}
                  >
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/90 to-white/60 flex items-center justify-center shadow-md border border-white/70 z-10">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/10 to-purple-400/10 z-0" />
                        <GlowBorderEffect glow variant="teal" spread={40} blur={10} borderWidth={1.5} />
                        <div className="p-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 z-10">
                          {integration.icon}
                        </div>
                        
                        {/* Subtle pulse effect for icons */}
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          animate={{
                            boxShadow: [
                              `0 0 5px 0px ${integration.gradientColors[1]}00`,
                              `0 0 15px 5px ${integration.gradientColors[1]}40`,
                              `0 0 5px 0px ${integration.gradientColors[1]}00`
                            ]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.5,
                            delay: i * 0.5
                          }}
                        />
                      </div>
                      
                      {/* Enhanced Connected badge with glow effect */}
                      <motion.div
                        className="absolute -top-4 -right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-lg"
                        variants={connectedBadgeVariants}
                        custom={i}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            boxShadow: [
                              '0 0 5px 0px rgba(74, 222, 128, 0)',
                              '0 0 10px 2px rgba(74, 222, 128, 0.6)',
                              '0 0 5px 0px rgba(74, 222, 128, 0)'
                            ]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2
                          }}
                        />
                        Connected
                      </motion.div>
                    </div>
                    
                    <div className="absolute top-full mt-3 text-center w-full">
                      <p className="text-lg font-medium" style={{ color: bravoColors.text.secondary }}>
                        {integration.name}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <p className="text-xl md:text-2xl" style={{ color: bravoColors.text.secondary }}>
            BRAVO syncs where it matters most — with your preferred SIP, Patient Platform & PMS.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
