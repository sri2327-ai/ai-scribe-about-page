
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Globe
        </motion.h1>
        
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Revolutionizing Healthcare with AI
        </motion.h2>
      </div>
    </div>
  );
};

export default HeroSection;
