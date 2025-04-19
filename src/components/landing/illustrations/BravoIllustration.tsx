
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, FileCheck, UserCheck } from 'lucide-react';

export const BravoIllustration = () => {
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
      <svg className="absolute w-full h-32">
        <motion.path
          d="M 100,50 C 200,50 200,100 300,100 S 400,50 500,50"
          stroke={lineColor}
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      <div className="relative flex justify-between w-full max-w-3xl">
        {[
          { Icon: Calendar, label: "Scheduling", yOffset: 0 },
          { Icon: MessageSquare, label: "Communication", yOffset: 40 },
          { Icon: FileCheck, label: "Verification", yOffset: 40 },
          { Icon: UserCheck, label: "Patient Care", yOffset: 0 }
        ].map(({ Icon, label, yOffset }, index) => (
          <motion.div
            key={label}
            variants={itemVariants}
            className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow-lg z-10"
            style={{ transform: `translateY(${yOffset}px)` }}
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
