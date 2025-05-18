
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CommitsGrid } from "@/components/ui/commits-grid";

export const S10AISection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: false, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Force animation refresh on scroll visibility
  useEffect(() => {
    if (isInView && gridRef.current) {
      // Add a small delay for visibility
      const timer = setTimeout(() => {
        // Force a refresh of the grid when it comes into view
        const gridElement = gridRef.current?.querySelector(".commits-grid");
        if (gridElement) {
          gridElement.classList.remove("commits-grid");
          // Use a safer way to trigger reflow
          void gridElement.getBoundingClientRect();
          gridElement.classList.add("commits-grid");
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);
  
  return (
    <section className="bg-black py-16 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <motion.div 
          ref={gridRef}
          className="mb-6 w-full max-w-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            filter: isHovered ? "brightness(1.2) contrast(1.1)" : "brightness(1) contrast(1)",
            transition: "filter 0.5s ease, transform 0.3s ease",
            transform: isHovered ? "translateY(-5px)" : "translateY(0)",
          }}
        >
          <CommitsGrid 
            text="S10.AI" 
            gridSize={{ rows: 9, cols: 25 }} // Increased grid size for better resolution
            animationIntensity={isHovered ? 2 : isInView ? 1.5 : 0} 
            colorScheme={{
              bg: "bg-gray-900",
              border: "border-gray-700",
              activeBg: "bg-teal-400/50 dark:bg-teal-400/40", // Brighter, more visible active cells
              activeText: "text-white",
              inactiveBg: "bg-gray-800/70 dark:bg-gray-800/50", // More subtle inactive cells
              inactiveText: "text-gray-500",
            }}
          />
        </motion.div>
        <motion.p 
          className="text-center mt-8 text-xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-teal-400">Making Life Easy For Clinicians</span>
        </motion.p>
      </div>
    </section>
  );
};
