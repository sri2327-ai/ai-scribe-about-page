
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

export const CompatibilitySection = () => {
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
    <div className="relative w-full py-20 overflow-hidden">
      {/* Background with gradient and effects */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'linear-gradient(135deg, #046f90 0%, #D946EF 100%)',
          opacity: 0.9
        }}
      />
      
      {/* Ripple effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="rippleBackground">
          <div className="ripple bg-white/10"></div>
          <div className="ripple bg-white/10"></div>
          <div className="ripple bg-white/10"></div>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
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
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="relative">
                {/* Hub */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full backdrop-blur-sm bg-gradient-to-br from-white/80 to-white/40 flex items-center justify-center shadow-lg border border-white/60 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 z-0" />
                    <GlowBorderEffect glow variant="teal" />
                    <span className="text-2xl font-bold z-10 relative text-white">BRAVO</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Integration items */}
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
                  
                  {/* Integration card */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/80 to-white/40 flex items-center justify-center shadow-md border border-white/60 z-10">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/10 to-purple-400/10 z-0" />
                      <div className="p-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 z-10">
                        {integration.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-full mt-3 text-center w-full">
                    <p className="text-sm font-medium text-white">
                      {integration.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="text-center max-w-2xl mx-auto mt-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xl text-white">
            BRAVO seamlessly integrates with your PMS/EHR System and VOIP infrastructure.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

