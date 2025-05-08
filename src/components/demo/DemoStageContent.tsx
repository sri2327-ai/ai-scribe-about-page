
import React from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './S10Demo';

interface DemoStageContentProps {
  stage: DemoStage;
  isActive: boolean;
  index: number;
}

export const DemoStageContent: React.FC<DemoStageContentProps> = ({ stage, isActive, index }) => {
  return (
    <motion.div 
      className={`absolute inset-0 flex items-center justify-center p-4 pointer-events-none ${
        index % 2 === 0 ? 'md:items-start md:pt-32' : 'md:items-end md:pb-32'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 max-w-md border border-blue-500/20">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          {stage.title}
        </h2>
        <p className="text-gray-200 mb-4">
          {stage.description}
        </p>
        {stage.highlights && stage.highlights.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {stage.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center text-sm text-blue-200">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></span>
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};
