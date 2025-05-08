
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStage: number;
  totalStages: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStage, totalStages }) => {
  return (
    <div className="fixed right-6 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20">
      {Array.from({ length: totalStages }).map((_, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0.5, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <motion.div
            className={`h-3 w-3 md:h-4 md:w-4 rounded-full ${
              index === currentStage 
                ? 'bg-blue-400' 
                : index < currentStage 
                  ? 'bg-blue-600' 
                  : 'bg-white/30'
            }`}
            initial={{ scale: 1 }}
            animate={{ 
              scale: index === currentStage ? [1, 1.3, 1] : 1,
              backgroundColor: index === currentStage ? "#3b82f6" : (index < currentStage ? "#1d4ed8" : "rgba(255,255,255,0.3)")
            }}
            transition={{ 
              scale: {
                duration: 1.5, 
                repeat: index === currentStage ? Infinity : 0,
                repeatType: "reverse"
              },
              backgroundColor: { duration: 0.3 } 
            }}
          />
          
          {index === currentStage && (
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400/30"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.8, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
          )}
          
          <motion.div 
            className="absolute -left-20 top-0 opacity-0 pointer-events-none"
            animate={{ 
              opacity: index === currentStage ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-900/80 px-2 py-1 rounded text-xs text-white whitespace-nowrap">
              {index === 0 && "Patient Engagement"}
              {index === 1 && "AI Medical Scribe"}
              {index === 2 && "Admin Tasks"}
              {index === 3 && "Post-Visit Support"}
              {index === 4 && "Return on Investment"}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
