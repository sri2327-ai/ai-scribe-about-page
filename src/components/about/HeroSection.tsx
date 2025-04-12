
import { motion } from "framer-motion";
import GlobeVisualization from "./GlobeVisualization";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Center content container */}
      <div className="container relative mx-auto px-4 z-10 flex flex-col items-center justify-center">
        {/* Main heading with gradient fade effect - X.ai style */}
        <motion.h2
          className="font-sans text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#eeeeee] to-[#bbbbbb] text-8xl text-center pointer-events-none mt-[-200px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textShadow: "0px 2px 10px rgba(255, 255, 255, 0.3)",
            letterSpacing: "-0.05em",
            fontWeight: "400"
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
        
        {/* Text glow effect */}
        <div 
          className="absolute w-full max-w-3xl h-32 mx-auto" 
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
            top: "calc(50% - 200px)",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none"
          }}
        />
        
        {/* Globe container - repositioned higher up, tilted, and 50% visible */}
        <div className="absolute w-full flex items-center justify-center" 
             style={{ 
               top: "calc(50% + 40px)", 
               height: "800px",
               width: "100vw", 
               maxWidth: "100vw",
               left: "50%",
               transform: "translateX(-50%)",
               zIndex: 5
             }}>
          <GlobeVisualization />
        </div>
      </div>
      
      {/* Bottom gradient fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
