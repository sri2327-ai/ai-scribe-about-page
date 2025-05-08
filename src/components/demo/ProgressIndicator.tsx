
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStage: number;
  totalStages: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStage, totalStages }) => {
  return (
    <div className="fixed right-6 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20 bg-white p-3 rounded-lg shadow-lg border border-gray-100">
      {Array.from({ length: totalStages }).map((_, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0.5, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <motion.div
            className={`h-4 w-4 md:h-5 md:w-5 rounded-full ${
              index === currentStage 
                ? 'bg-blue-500' 
                : index < currentStage 
                  ? 'bg-blue-700' 
                  : 'bg-gray-300'
            }`}
            initial={{ scale: 1 }}
            animate={{ 
              scale: index === currentStage ? [1, 1.3, 1] : 1,
              backgroundColor: index === currentStage ? "#3b82f6" : (index < currentStage ? "#1d4ed8" : "#d1d5db")
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
            className="absolute -left-[180px] top-0 pointer-events-none"
            animate={{ 
              opacity: index === currentStage ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white px-3 py-1.5 rounded text-sm text-blue-900 whitespace-nowrap border border-blue-200 shadow-md font-medium">
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
