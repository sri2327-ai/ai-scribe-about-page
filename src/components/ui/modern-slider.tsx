
import React, { useState, useRef, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from 'framer-motion';

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
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleValueChange = (newValue: number[]) => {
        onChange(newValue[0]);
    };

    const handleInteractionStart = () => {
        setIsInteracting(true);
    };

    const handleInteractionEnd = () => {
        setTimeout(() => setIsInteracting(false), 1500);
    };

    const handleSliderClick = (event: React.MouseEvent) => {
        if (!sliderRef.current) return;
        
        const rect = sliderRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const percentage = x / rect.width;
        const newValue = Math.round(min + (max - min) * percentage);
        const clampedValue = Math.max(min, Math.min(max, newValue));
        
        onChange(clampedValue);
        handleInteractionStart();
        handleInteractionEnd();
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
                <div 
                    ref={sliderRef}
                    className="cursor-pointer"
                    onClick={handleSliderClick}
                    onMouseDown={handleInteractionStart}
                    onMouseUp={handleInteractionEnd}
                    onTouchStart={handleInteractionStart}
                    onTouchEnd={handleInteractionEnd}
                >
                    <Slider
                        value={[value]}
                        onValueChange={handleValueChange}
                        min={min}
                        max={max}
                        step={1}
                        className="w-full cursor-pointer"
                    />
                </div>
                
                <AnimatePresence>
                    {isInteracting && labels && (
                        <motion.div 
                            className="flex justify-between text-sm text-gray-600 font-medium mt-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-left">{labels[0]}</span>
                            <span className="text-center">{labels[Math.floor(labels.length / 2)]}</span>
                            <span className="text-right">{labels[labels.length - 1]}</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
