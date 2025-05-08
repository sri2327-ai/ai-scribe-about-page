
import React from 'react';

interface ProgressIndicatorProps {
  currentStage: number;
  totalStages: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStage, totalStages }) => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
      {Array.from({ length: totalStages }).map((_, index) => (
        <div 
          key={index}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            index === currentStage 
              ? 'bg-blue-400 scale-150' 
              : index < currentStage 
                ? 'bg-blue-600' 
                : 'bg-white/30'
          }`}
        ></div>
      ))}
    </div>
  );
};
