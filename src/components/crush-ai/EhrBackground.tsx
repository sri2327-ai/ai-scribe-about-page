
import React from 'react';
import { motion } from 'framer-motion';

const EhrBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated lines */}
      {[10, 30, 50, 70, 90].map((left, index) => (
        <motion.div 
          key={`line-${index}`}
          className="absolute h-full w-[2px] bg-white/5"
          style={{ left: `${left}%` }}
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: index * 2 
          }}
        />
      ))}

      {/* Pulsing nodes */}
      {[
        { top: "30%", left: "20%", size: "20px" },
        { top: "50%", left: "60%", size: "15px" },
        { top: "70%", left: "40%", size: "25px" },
        { top: "20%", left: "80%", size: "18px" },
        { top: "80%", left: "15%", size: "22px" },
      ].map((node, index) => (
        <motion.div 
          key={`circle-${index}`}
          className="absolute rounded-full bg-white/10"
          style={{ 
            top: node.top, 
            left: node.left, 
            width: node.size, 
            height: node.size 
          }}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: index * 0.5
          }}
        />
      ))}
    </div>
  );
};

export default EhrBackground;
