
import { motion } from "framer-motion";
import { SplineSceneBasic } from "@/components/ui/demo";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

const HeroSection = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden border-0">
      {/* Animated gradient background */}
      <AnimatedGradientBackground 
        gradientColors={["#000", "#1EAEDB", "#0FA0CE", "#000"]}
        gradientStops={[0, 30, 60, 100]}
        Breathing={true}
        breathingRange={10}
        animationSpeed={0.03}
      />
      
      {/* Center content container */}
      <div className="container relative mx-auto px-4 z-10 flex flex-col items-center justify-center border-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full border-0"
        >
          <SplineSceneBasic />
        </motion.div>
        
        {/* Remove the radial background glow effect */}
      </div>
      
      {/* Scroll down indicator - positioned on left side */}
      <motion.div 
        className="absolute left-10 bottom-16 flex flex-col items-center cursor-pointer z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        onClick={scrollToNextSection}
      >
        <p className="text-gray-400 mb-2 text-sm font-wix-madefor">Scroll</p>
        <ChevronDown className="text-white h-6 w-6" />
      </motion.div>
      
      {/* Section Divider */}
      <div className="w-full flex justify-center absolute bottom-4">
        <Separator className="w-2/3 max-w-4xl bg-gray-800" />
      </div>
    </div>
  );
};

export default HeroSection;

