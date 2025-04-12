
import { motion } from "framer-motion";
import StarBackground from "./StarBackground";
import GlobeVisualization from "./GlobeVisualization";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-black overflow-hidden">
      {/* Top spacing */}
      <div className="flex-grow" />
      
      {/* Middle content with heading - positioned lower */}
      <div className="container mx-auto px-4 z-10 text-center pb-24 md:pb-36">
        <motion.h2
          className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#c0c0c0] via-[#d8d8d8] to-[#9F9EA1] text-4xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
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
        
        {/* Add gradient fade effect at bottom of text */}
        <div className="w-full h-12 bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 z-0"></div>
      </div>
      
      {/* Bottom content with globe */}
      <div className="flex-grow-0 relative h-[400px] md:h-[500px] flex items-end justify-center overflow-hidden">
        {/* Background stars */}
        <StarBackground />
        
        {/* Interactive globe */}
        <GlobeVisualization />
      </div>
    </div>
  );
};

export default HeroSection;
