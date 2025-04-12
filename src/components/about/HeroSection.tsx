
import { motion } from "framer-motion";
import GlobeVisualization from "./GlobeVisualization";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Center content container */}
      <div className="container relative mx-auto px-4 z-10 flex flex-col items-center justify-center">
        {/* Main heading with X.ai style gradient text effect */}
        <motion.h2
          className="font-bold text-8xl text-center pointer-events-none mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #8A898C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0px 2px 10px rgba(255, 255, 255, 0.1)",
          }}
        >
          Globe
        </motion.h2>
        
        {/* Globe container - positioned to show only upper half */}
        <div className="absolute w-full max-w-7xl mx-auto flex items-center justify-center" 
             style={{ 
               bottom: "-50%", // Position to show only top 50%
               height: "100vh",
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
