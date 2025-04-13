
"use client";
import React, { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export const AnimatedIconTooltip = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-6", className)}>
      {items.map((item) => (
        <div
          className="relative group"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "normal",
                }}
                className="absolute -top-24 left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-white text-black z-50 shadow-xl px-4 py-2 max-w-[200px]"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-black relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-gray-600 text-xs text-center mt-1">
                  {item.description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div 
            onMouseMove={handleMouseMove}
            className="bg-black text-white p-4 rounded-full cursor-pointer hover:bg-gray-900 group-hover:scale-105 group-hover:z-30 transition duration-300"
          >
            {React.createElement(item.icon, { 
              size: 24,
              className: "text-white" 
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
