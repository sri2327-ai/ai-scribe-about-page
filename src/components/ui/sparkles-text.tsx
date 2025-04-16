
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

  // Generate sparkles
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Generate sparkles around the text
      const newSparkles = Array.from({ length: sparklesCount }, (_, i) => ({
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 4 + 1,
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
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 1,
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
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};
