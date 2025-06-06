
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { motion } from 'framer-motion';

interface ModernSliderProps {
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    unit: string;
    labels?: string[];
}

export const ModernSlider: React.FC<ModernSliderProps> = ({ 
    value, 
    onChange, 
    min, 
    max, 
    unit, 
    labels 
}) => {
    const handleValueChange = (newValue: number[]) => {
        onChange(newValue[0]);
    };

    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="w-full space-y-6">
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">{unit}</span>
                <motion.span 
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {labels ? labels[value] || value : value}
                </motion.span>
            </div>
            
            <div className="relative space-y-4">
                {/* Modern track with gradient */}
                <div className="relative h-3 bg-gray-100 rounded-full border border-gray-200 shadow-inner overflow-hidden">
                    {/* Progress fill with gradient */}
                    <motion.div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-full shadow-md"
                        style={{ width: `${percentage}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-full"></div>
                    </motion.div>
                    
                    {/* Modern thumb */}
                    <motion.div 
                        className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer"
                        style={{ left: `${percentage}%` }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="w-6 h-6 bg-white rounded-full border-2 border-emerald-500 shadow-lg flex items-center justify-center hover:border-emerald-600 transition-colors">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        </div>
                    </motion.div>
                </div>
                
                {/* Hidden input for interaction */}
                <Slider
                    value={[value]}
                    onValueChange={handleValueChange}
                    min={min}
                    max={max}
                    step={1}
                    className="absolute top-0 left-0 w-full opacity-0 cursor-pointer"
                />
                
                {labels && (
                    <div className="flex justify-between text-sm text-gray-600 font-medium mt-3">
                        <span className="text-left">{labels[0]}</span>
                        <span className="text-center">{labels[Math.floor(labels.length / 2)]}</span>
                        <span className="text-right">{labels[labels.length - 1]}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
