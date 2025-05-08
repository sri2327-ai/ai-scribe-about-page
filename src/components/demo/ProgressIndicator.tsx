
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
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
              index === currentStage 
                ? 'bg-blue-400' 
                : index < currentStage 
                  ? 'bg-blue-600' 
                  : 'bg-white/30'
            }`}
            initial={{ scale: 1 }}
            animate={{ 
              scale: index === currentStage ? 1.5 : 1,
              backgroundColor: index === currentStage ? "#3b82f6" : (index < currentStage ? "#1d4ed8" : "rgba(255,255,255,0.3)")
            }}
            transition={{ duration: 0.3 }}
          />
          
          {index === currentStage && (
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400/30"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};
