
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStage: number;
  totalStages: number;
  onStageClick: (index: number) => void;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  currentStage, 
  totalStages,
  onStageClick
}) => {
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30">
      <div className="flex flex-col items-center space-y-4">
        {Array.from({ length: totalStages }).map((_, index) => (
          <motion.button
            key={index}
            className="w-4 h-4 rounded-full bg-gray-300 relative cursor-pointer hover:opacity-80 transition-all"
            onClick={() => onStageClick(index)}
            whileHover={{ scale: 1.3 }}
            animate={{
              backgroundColor: currentStage === index ? '#3B82F6' : '#D1D5DB',
              scale: currentStage === index ? 1.2 : 1
            }}
          >
            {/* Add tooltip/label to make it clearer what each indicator represents */}
            <div className="absolute right-full mr-3 top-0 whitespace-nowrap bg-white/80 text-gray-800 px-2 py-1 rounded text-xs hidden group-hover:block">
              {index + 1}
            </div>
            
            {currentStage === index && (
              <motion.span
                className="absolute inset-0 rounded-full bg-blue-500"
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
