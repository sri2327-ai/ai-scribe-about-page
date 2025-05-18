
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
    <section className="bg-black py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <motion.div 
          ref={gridRef}
          className="mb-6 w-full max-w-2xl"
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
            gridSize={{ rows: 9, cols: 30 }}
            animationIntensity={isHovered ? 2 : isInView ? 1 : 0.5} 
            colorScheme={{
              bg: "bg-black",
              border: "border-gray-800",
              activeBg: "bg-emerald-700/95 dark:bg-emerald-600/95", // More vibrant and dark green
              activeText: "text-white",
              inactiveBg: "bg-gray-900/80 dark:bg-gray-900/70",
              inactiveText: "text-gray-600",
            }}
          />
        </motion.div>
        <motion.p 
          className="text-center mt-8 text-xl md:text-2xl font-medium text-gray-500" 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Making Life Easy For Clinicians
        </motion.p>
      </div>
    </section>
  );
};
