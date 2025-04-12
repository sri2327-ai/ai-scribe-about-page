
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const GlobeVisualization = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const globeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle mouse movement for interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!globeRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = globeRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the center of the globe
      const x = ((clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((clientY - rect.top) / rect.height - 0.5) * 20;
      
      // Apply subtle rotation based on mouse position
      globeRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div 
        ref={globeRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          scale: isLoaded ? 1 : 0.8,
          rotate: isLoaded ? 360 : 0
        }}
        transition={{ 
          duration: 2,
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        className="relative w-full max-w-[800px] h-full transition-transform duration-200"
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1000px",
          willChange: "transform"
        }}
      >
        {/* Main Globe Image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img 
            src="/lovable-uploads/f5c9db2e-5a1e-45eb-8091-dec69b60d640.png" 
            alt="Global Network Visualization" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Pulsing Dots - Teal Highlights */}
        {[
          { top: "30%", left: "35%", delay: 0 },
          { top: "45%", left: "25%", delay: 1.5 },
          { top: "60%", left: "32%", delay: 1 }
        ].map((position, index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 rounded-full bg-[#1EAEDB]"
            style={{ 
              top: position.top, 
              left: position.left,
              boxShadow: "0 0 10px 2px rgba(30, 174, 219, 0.7)"
            }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: position.delay,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Connection Lines */}
        {[
          { start: { top: "30%", left: "35%" }, end: { top: "45%", left: "25%" } },
          { start: { top: "45%", left: "25%" }, end: { top: "60%", left: "32%" } }
        ].map((line, index) => (
          <motion.div
            key={`line-${index}`}
            className="absolute bg-[#1EAEDB] opacity-50"
            style={{
              top: line.start.top,
              left: line.start.left,
              width: "2px",
              transformOrigin: "top left",
              zIndex: 1
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "100px", // Approximation - will be adjusted by transform
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Subtle Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white opacity-10"
          animate={{ 
            boxShadow: [
              "0 0 20px 10px rgba(255, 255, 255, 0.1)",
              "0 0 30px 15px rgba(30, 174, 219, 0.2)",
              "0 0 20px 10px rgba(255, 255, 255, 0.1)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default GlobeVisualization;
