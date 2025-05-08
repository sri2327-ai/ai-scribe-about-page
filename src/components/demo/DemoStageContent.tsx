
import React from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './S10Demo';

interface DemoStageContentProps {
  stage: DemoStage;
  isActive: boolean;
  index: number;
}

export const DemoStageContent: React.FC<DemoStageContentProps> = ({ stage, isActive, index }) => {
  if (!isActive) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-auto"
    >
      <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">{stage.title}</h2>
      <p className="text-gray-700 mb-4">{stage.description}</p>
      
      {stage.highlights && stage.highlights.length > 0 && (
        <div className="space-y-1 mt-3">
          <h3 className="text-sm font-semibold text-gray-600">Key Features:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-1">
            {stage.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};
