
import { motion } from "framer-motion";
import GlobeVisualization from "./GlobeVisualization";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Center content container */}
      <div className="container relative mx-auto px-4 z-10 flex flex-col items-center justify-center">
        {/* Main heading with gradient fade effect */}
        <motion.h2
          className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#f1f1f1] via-[#d8d8d8] to-[#8A898C] text-8xl text-center pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textShadow: "0px 2px 10px rgba(255, 255, 255, 0.1)",
            letterSpacing: "0.5px"
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut"
            }}
          >
            Revolutionizing Healthcare with AI
          </motion.span>
        </motion.h2>
        
        {/* Text glow effect - reduced for cleaner look */}
        <div 
          className="absolute w-full max-w-3xl h-24 mx-auto" 
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)",
            top: "calc(50% + 3rem)",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none"
          }}
        />
        
        {/* Globe container - positioned to show only top 30% */}
        <div className="absolute w-full flex items-center justify-center" 
             style={{ 
               bottom: "-50vh",
               height: "100vh",
               zIndex: 5
             }}>
          <GlobeVisualization />
        </div>
      </div>
      
      {/* Bottom gradient fade removed for clean black background */}
    </div>
  );
};

export default HeroSection;
