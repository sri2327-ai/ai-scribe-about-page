
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
  })
};

const gridItemVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" }
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
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      className={cn(
        "overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300",
        bgClass
      )}
    >
      <motion.div
        variants={gridItemVariants}
        className="h-full flex flex-col"
      >
        {illustration}
        
        <div className="p-5 flex-1 flex flex-col">
          <h3 
            className="text-xl font-bold mb-2 font-sans"
            style={{ color: crushAIColors.primary }}
          >
            {title}
          </h3>
          <p 
            className="text-sm mb-4 font-sans"
            style={{ color: crushAIColors.text.secondary }}
          >
            {description}
          </p>
          
          <ul className="mt-auto space-y-2">
            {details.map((detail, j) => (
              <motion.li 
                key={j}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (j * 0.1) }}
                viewport={{ once: true }}
                className="flex items-start text-sm"
              >
                <span className="text-blue-500 mr-2 shrink-0 mt-1">•</span>
                <span style={{ color: crushAIColors.text.secondary }}>{detail}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};
