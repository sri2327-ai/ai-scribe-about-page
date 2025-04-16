
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesTextProps {
  text: string;
  className?: string;
  colors?: {
    first: string;
    second: string;
  };
  sparklesCount?: number;
}

export const SparklesText: React.FC<SparklesTextProps> = ({
  text,
  className,
  colors = { first: "#FF0080", second: "#7928CA" },
  sparklesCount = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  const controls = useAnimationControls();

  // Generate sparkles with reduced count and better positioning
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Generate sparkles around the text
      const newSparkles = Array.from({ length: sparklesCount }, (_, i) => ({
        id: i,
        // Position sparkles further from text for better readability
        x: Math.random() * rect.width * 1.2 - rect.width * 0.1,
        y: Math.random() * rect.height * 1.2 - rect.height * 0.1,
        size: Math.random() * 3 + 1, // Reduced size
        delay: Math.random() * 0.5,
      }));
      
      setSparkles(newSparkles);
    }
  }, [containerRef, sparklesCount]);

  // Create gradient text effect
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative inline-block", className)}
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      {/* Background sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            top: sparkle.y,
            left: sparkle.x,
            width: sparkle.size,
            height: sparkle.size,
            borderRadius: "50%",
            background: sparkle.id % 2 === 0 ? colors.first : colors.second,
            zIndex: -1,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0], // Reduced opacity
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 5, // Slower repeats for less distracting animation
          }}
        />
      ))}

      {/* Text with gradient background */}
      <motion.span
        className="relative bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(90deg, ${colors.first}, ${colors.second})`,
          fontWeight: "inherit",
          position: "relative",
          zIndex: 1,
          textShadow: "0 0 1px rgba(255, 255, 255, 0.3)" // Add subtle text shadow for better readability
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};
