
import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Brain, FileText, CircleCheck } from 'lucide-react';

export const CrushIllustration = () => {
  const iconColor = "#143151";
  const lineColor = "#387E89";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center bg-white/80 backdrop-blur-sm p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <svg className="absolute w-full h-[2px] top-1/2 -translate-y-1/2">
        <motion.path
          d="M 100,1 L 600,1"
          stroke={lineColor}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      <div className="relative flex justify-between w-full max-w-3xl">
        {[
          { Icon: Mic, label: "Voice Input" },
          { Icon: Brain, label: "AI Processing" },
          { Icon: FileText, label: "Documentation" },
          { Icon: CircleCheck, label: "Verified" }
        ].map(({ Icon, label }, index) => (
          <motion.div
            key={label}
            variants={itemVariants}
            className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow-lg z-10"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full"
              style={{ background: `linear-gradient(135deg, #143151, #387E89)` }}
            >
              <Icon size={24} color="white" />
            </motion.div>
            <p className="text-sm font-medium text-[#143151]">{label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
