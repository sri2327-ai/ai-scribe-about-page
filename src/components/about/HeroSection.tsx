
import { motion } from "framer-motion";
import { SplineSceneBasic } from "@/components/ui/demo";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden border-0">
      {/* Center content container */}
      <div className="container relative mx-auto px-4 z-10 flex flex-col items-center justify-center border-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-10 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Smarter Healthcare Starts Here
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We're simplifying clinical workflows with AI, robotic assistants, and smart agents.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl border-0"
        >
          <SplineSceneBasic />
        </motion.div>
        
        {/* Text glow effect with teal blue color */}
        <div 
          className="absolute w-full max-w-3xl h-32 mx-auto" 
          style={{
            background: "radial-gradient(ellipse at center, rgba(30,174,219,0.15) 0%, rgba(30,174,219,0) 70%)",
            top: "calc(50% - 200px)",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none"
          }}
        />
      </div>
      
      {/* Bottom gradient fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
