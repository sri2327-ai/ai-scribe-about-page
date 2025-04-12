
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import StarBackground from "@/components/about/StarBackground";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StarTrekSection = () => {
  const isMobile = useIsMobile();
  const [activeWord, setActiveWord] = useState(0);
  const words = ["Understand", "Explore", "Discover", "The Universe"];
  
  useEffect(() => {
    // Rotate through words every 3 seconds
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const scrollToNext = () => {
    // Scroll to the next section smoothly
    const currentPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: currentPosition + windowHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-black min-h-[500px] sm:min-h-[600px] lg:min-h-screen flex items-center justify-center mt-16 sm:mt-0">
      {/* Interactive Star background */}
      <div className="absolute inset-0 z-0">
        <StarBackground interactive={true} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col h-full relative">
          {/* Left positioned word - animated */}
          <motion.div
            className="absolute top-0 left-0 md:left-10 lg:left-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-normal text-white font-wix-madefor opacity-80">
              {words[0]}
            </h2>
          </motion.div>
          
          {/* Right positioned word - animated */}
          <motion.div
            className="absolute bottom-0 right-0 md:right-10 lg:right-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-normal text-white font-wix-madefor opacity-80">
              {words[words.length - 1]}
            </h2>
          </motion.div>
          
          {/* Center content */}
          <motion.div
            className="flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Interactive flowing line effect */}
              <div className="absolute inset-0 -z-10">
                <CanvasEffect id="trek-canvas" className="opacity-50" />
              </div>
              
              <motion.h2
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-white font-wix-madefor text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Like A Star Trek
              </motion.h2>
              
              {/* White line */}
              <div className="relative h-1 w-full max-w-md mx-auto my-8">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                <div className="absolute inset-0 bg-white opacity-50 blur-sm"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator - positioned on left side */}
      <motion.div 
        className={`absolute ${isMobile ? 'left-4' : 'left-10'} bottom-16 flex flex-col items-center cursor-pointer z-20`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        onClick={scrollToNext}
      >
        <p className="text-gray-400 mb-2 text-xs sm:text-sm font-wix-madefor">Scroll</p>
        <ChevronDown className="text-white h-5 w-5 sm:h-6 sm:w-6" />
      </motion.div>
    </section>
  );
};

export default StarTrekSection;
