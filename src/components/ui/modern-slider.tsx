
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

    return (
        <div className="w-full space-y-6">
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">{unit}</span>
                <motion.span 
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {labels ? labels[value] || value : value}
                </motion.span>
            </div>
            
            <div className="space-y-4">
                <Slider
                    value={[value]}
                    onValueChange={handleValueChange}
                    min={min}
                    max={max}
                    step={1}
                    className="w-full"
                />
                
                {labels && (
                    <div className="flex justify-between text-sm text-gray-600 font-medium">
                        <span>{labels[0]}</span>
                        <span>{labels[Math.floor(labels.length / 2)]}</span>
                        <span>{labels[labels.length - 1]}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
