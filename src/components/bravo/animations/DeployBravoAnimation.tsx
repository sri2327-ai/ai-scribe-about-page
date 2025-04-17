
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Plug, Database, Bot, Calendar, MessageSquare } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';
import { SplineScene } from "@/components/ui/splite";

export const DeployBravoAnimation = () => {
  return (
    <div className="relative h-[400px] w-full">
      {/* EHR Integration Visualization */}
      <SplineScene 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="absolute inset-0 opacity-60"
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex items-center justify-center gap-8">
          {[Phone, Plug, Database].map((Icon, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                boxShadow: [
                  "0 4px 12px rgba(0,0,0,0.1)",
                  "0 8px 24px rgba(0,0,0,0.2)",
                  "0 4px 12px rgba(0,0,0,0.1)"
                ]
              }}
              transition={{ delay: index * 0.2, duration: 2, repeat: Infinity }}
            >
              <Icon size={32} style={{ color: bravoColors.tertiary }} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
