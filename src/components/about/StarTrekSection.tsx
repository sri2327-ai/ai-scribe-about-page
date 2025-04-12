
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import StarBackground from "@/components/about/StarBackground";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StarTrekSection = () => {
  const isMobile = useIsMobile();
  
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
    <section className="py-16 sm:py-20 relative overflow-hidden bg-black min-h-[500px] sm:min-h-[600px] flex items-center justify-center mt-16 sm:mt-0">
      {/* Star background */}
      <StarBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal mb-4 sm:mb-6 text-white font-wix-madefor">Like A Star Trek</h2>
          
          {/* White line */}
          <div className="relative h-1 w-full max-w-md mx-auto mb-8 sm:mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-white opacity-50 blur-sm"></div>
          </div>
          
          {/* Interactive flowing line effect - adjusted height for mobile */}
          <div className="relative h-40 sm:h-64 w-full">
            <CanvasEffect id="trek-canvas" className="opacity-30" />
          </div>
        </motion.div>
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
