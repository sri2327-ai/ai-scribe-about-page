
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
  className?: string;
  icon?: React.ReactNode;
  color?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  index,
  className,
  icon,
  color = 'blue'
}) => {
  // Define gradient classes based on color prop
  const gradientClasses = {
    blue: 'from-blue-500/20 via-blue-600/10 to-purple-500/5',
    purple: 'from-purple-500/20 via-purple-600/10 to-blue-500/5',
    cyan: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/5',
    indigo: 'from-indigo-500/20 via-purple-500/10 to-blue-500/5',
  };

  const borderClasses = {
    blue: 'border-blue-500/20 hover:border-blue-400/40',
    purple: 'border-purple-500/20 hover:border-purple-400/40',
    cyan: 'border-cyan-500/20 hover:border-cyan-400/40',
    indigo: 'border-indigo-500/20 hover:border-indigo-400/40',
  };

  const colorKey = color as keyof typeof gradientClasses;
  const gradientClass = gradientClasses[colorKey] || gradientClasses.blue;
  const borderClass = borderClasses[colorKey] || borderClasses.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        `p-6 rounded-xl border bg-gradient-to-br backdrop-blur-md ${gradientClass} ${borderClass}`,
        'relative overflow-hidden transition-all duration-300 group',
        className
      )}
    >
      {/* Subtle animated gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-blue-400 via-indigo-400 to-purple-400"></div>
      
      {/* Top corner accent */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rotate-45 transform origin-bottom-left"></div>
      
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-blue-400 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-100">{title}</h3>
        
        <p className="text-blue-100/80">{description}</p>

        {/* Subtle bottom line */}
        <div className="w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-400/50 to-purple-500/0 mt-4 transition-all duration-700"></div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
