
import { motion } from "framer-motion";
import StarBackground from "./StarBackground";
import GlobeVisualization from "./GlobeVisualization";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden">
      {/* Star background */}
      <StarBackground />
      
      {/* Middle content with heading - centered */}
      <div className="container mx-auto px-4 z-10 text-center flex-grow flex flex-col justify-center items-center relative">
        <motion.h2
          className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#c0c0c0] via-[#d8d8d8] to-[#9F9EA1] text-4xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textShadow: "0px 2px 10px rgba(255, 255, 255, 0.3)",
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
        
        {/* Add bottom glow effect for text */}
        <div 
          className="absolute w-full max-w-3xl h-24 mx-auto" 
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
            top: "calc(50% + 2rem)",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none"
          }}
        />
      </div>
      
      {/* Bottom content with globe - moved up slightly */}
      <div className="relative h-[350px] md:h-[400px] flex items-end justify-center overflow-hidden">
        {/* Interactive globe */}
        <GlobeVisualization />
      </div>
      
      {/* Add gradient fade effect at bottom */}
      <div className="w-full h-12 bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 z-0"></div>
    </div>
  );
};

export default HeroSection;
