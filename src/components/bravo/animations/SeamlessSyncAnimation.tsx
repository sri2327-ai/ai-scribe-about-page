
import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, CreditCard, Database } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';
import { GradientTracing } from "@/components/ui/gradient-tracing";

export const SeamlessSyncAnimation = () => {
  return (
    <div className="relative h-[400px] w-full">
      {/* Center database icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="p-8 bg-white rounded-xl shadow-lg">
          <Database size={48} style={{ color: bravoColors.primary }} />
        </div>
      </motion.div>

      {/* Connecting lines with gradient tracing */}
      <div className="absolute inset-0">
        <GradientTracing
          width={400}
          height={400}
          path="M100,200 L300,200 M200,100 L200,300"
          baseColor={bravoColors.tertiary}
          gradientColors={[bravoColors.secondary, bravoColors.primary, bravoColors.tertiary]}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Animated documents and billing icons */}
      {[FileCheck, CreditCard].map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [-20, 0, -20],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          style={{
            top: index === 0 ? "20%" : "60%",
            left: index === 0 ? "30%" : "70%",
          }}
        >
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <Icon size={32} style={{ color: bravoColors.secondary }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
