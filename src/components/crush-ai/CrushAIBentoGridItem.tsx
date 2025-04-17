
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { crushAIColors } from '@/theme/crush-ai-theme';

interface BentoGridItemProps {
  title: string;
  description: string;
  illustration: React.ReactNode;
  details: string[];
  bgClass: string;
  index: number;
}

const panelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: { 
    y: -10,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const descriptionVariants = {
  initial: { opacity: 0.7 },
  hover: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

const detailVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1, 
    x: 0,
    transition: { 
      delay: 0.3 + (i * 0.1),
      duration: 0.4
    }
  }),
  hover: { 
    x: 5,
    transition: { duration: 0.2 }
  }
};

export const CrushAIBentoGridItem = ({ 
  title, 
  description, 
  illustration, 
  details, 
  bgClass, 
  index 
}: BentoGridItemProps) => {
  return (
    <motion.div
      custom={index}
      variants={panelVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "overflow-hidden rounded-xl border border-gray-100 h-full shadow-sm",
        bgClass
      )}
    >
      <div className="h-full flex flex-col">
        <div className="flex-1 min-h-[180px] flex items-center justify-center overflow-hidden">
          {illustration}
        </div>
        
        <div className="p-6 flex-1 flex flex-col bg-white/80 backdrop-blur-sm">
          <h3 
            className="text-xl font-bold mb-2"
            style={{ color: crushAIColors.primary }}
          >
            {title}
          </h3>
          
          <motion.p 
            className="text-sm mb-4"
            variants={descriptionVariants}
            style={{ color: crushAIColors.text.secondary }}
          >
            {description}
          </motion.p>
          
          <div className="mt-auto space-y-3">
            {details.map((detail, j) => (
              <motion.div 
                key={j}
                custom={j}
                variants={detailVariants}
                className="flex items-start text-sm"
              >
                <motion.span 
                  className="text-blue-500 mr-2 shrink-0 mt-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "loop", 
                    ease: "easeInOut",
                    delay: j * 0.5
                  }}
                >
                  •
                </motion.span>
                <span style={{ color: crushAIColors.text.secondary }}>{detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
