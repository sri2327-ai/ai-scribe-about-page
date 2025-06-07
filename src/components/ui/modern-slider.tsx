
import React, { useState } from 'react';
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
    const [isInteracting, setIsInteracting] = useState(false);

    const handleValueChange = (newValue: number[]) => {
        onChange(newValue[0]);
    };

    const handleInteractionStart = () => {
        setIsInteracting(true);
    };

    const handleInteractionEnd = () => {
        setTimeout(() => setIsInteracting(false), 1000);
    };

    return (
        <div className="w-full space-y-6">
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">{unit}</span>
                <motion.span 
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {labels ? labels[value] || value : value}
                </motion.span>
            </div>
            
            <div className="relative space-y-4">
                <Slider
                    value={[value]}
                    onValueChange={handleValueChange}
                    onPointerDown={handleInteractionStart}
                    onPointerUp={handleInteractionEnd}
                    min={min}
                    max={max}
                    step={1}
                    className="w-full cursor-pointer"
                />
                
                {labels && isInteracting && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex justify-between text-sm text-gray-600 font-medium mt-3"
                    >
                        <span className="text-left">{labels[0]}</span>
                        <span className="text-center">{labels[Math.floor(labels.length / 2)]}</span>
                        <span className="text-right">{labels[labels.length - 1]}</span>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
