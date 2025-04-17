import React, { useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { Phone, Users, FileCheck } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';
import { GradientTracing } from "@/components/ui/gradient-tracing";
import { GlowBorderEffect } from "@/components/ui/effects/glow-border-effect";
import ShootingStars from "@/components/ui/shooting-stars";

export const CompatibilitySection = () => {
  const [hoveredSystem, setHoveredSystem] = useState<number | null>(null);
  const controls = useAnimation();

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
    },
    hover: {
      scale: 1.1,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
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
    }),
    hover: {
      scale: 1.1,
      filter: "brightness(1.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  const pulseVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.6, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 1,
        duration: 2,
        times: [0, 0.5, 1]
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
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <ShootingStars 
        className="absolute inset-0" 
        starCount={15}
        colors={[bravoColors.accent.blue, bravoColors.accent.purple]}
      />
      
      <div className="relative h-full flex items-center justify-center">
        <motion.div 
          className="relative flex items-center justify-center"
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
              whileHover="hover"
              onHoverStart={() => {
                controls.start("hover");
                setHoveredSystem(null);
              }}
            >
              {/* Pulse rings */}
              {[1, 1.2, 1.4].map((scale, i) => (
                <motion.div 
                  key={i}
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: `radial-gradient(circle, ${bravoColors.accent.blue}30 0%, ${bravoColors.accent.blue}00 70%)`,
                    scale 
                  }}
                  variants={pulseVariants}
                  custom={i * 0.2}
                />
              ))}
              
              {/* Hub */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full backdrop-blur-sm bg-gradient-to-br from-white/90 to-white/40 flex items-center justify-center shadow-lg border border-white/60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 z-0" />
                  <GlowBorderEffect glow variant="teal" />
                  <span className="text-2xl font-bold z-10 relative" style={{ color: bravoColors.primary }}>BRAVO</span>
                </div>
              </div>
            </motion.div>
            
            {/* Integration spokes */}
            {integrations.map((integration, i) => (
              <div key={i} className="absolute" style={{ 
                transform: `translate(${integration.position.x}px, ${integration.position.y}px)`,
                transformOrigin: 'center'
              }}>
                <div className="relative">
                  {/* Connection line */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <GradientTracing
                      width={150}
                      height={Math.abs(integration.position.y) + 10}
                      path={integration.path}
                      gradientColors={integration.gradientColors}
                      animationDuration={hoveredSystem === i ? 2 : 3}
                      baseColor="#e5e7eb"
                      strokeWidth={hoveredSystem === i ? 2.5 : 1.5}
                    />
                  </div>
                  
                  {/* Integration icon */}
                  <motion.div
                    className="relative"
                    variants={iconVariants}
                    custom={i + 1}
                    whileHover="hover"
                    onHoverStart={() => {
                      setHoveredSystem(i);
                      controls.start("hover");
                    }}
                    onHoverEnd={() => {
                      setHoveredSystem(null);
                      controls.start("visible");
                    }}
                  >
                    <div className="relative w-20 h-20 flex items-center justify-center group">
                      <motion.div 
                        className="w-20 h-20 rounded-xl backdrop-blur-sm bg-gradient-to-br from-white/90 to-white/40 flex items-center justify-center shadow-lg border border-white/60 z-10 overflow-hidden"
                        animate={hoveredSystem === i ? { scale: 1.1 } : { scale: 1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 z-0" />
                        <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 z-10 relative">
                          {integration.icon}
                        </div>
                      </motion.div>
                      
                      {/* System name */}
                      <motion.div 
                        className="absolute top-full mt-4 text-center w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <p className="text-base font-medium" style={{ color: bravoColors.text.secondary }}>
                          {integration.name}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Bottom text */}
        <motion.div
          className="absolute bottom-12 text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <p className="text-xl md:text-2xl" style={{ color: bravoColors.text.secondary }}>
            BRAVO syncs where it matters most — with your preferred SIP, Patient Platform & PMS.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
