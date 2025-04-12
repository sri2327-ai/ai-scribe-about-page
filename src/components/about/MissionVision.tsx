
import { motion } from "framer-motion";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import { LampSection } from "@/components/ui/lamp";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";

const MissionVision = () => {
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
    <div className="flex flex-col">
      {/* Mission Section with Lamp Effect */}
      <LampSection title="Our Mission" color="teal">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-white font-wix-madefor leading-relaxed max-w-2xl mx-auto text-center"
        >
          To make life easy for clinicians by eliminating administrative burdens with intelligent automation.
        </motion.p>
        
        {/* Scroll down indicator - positioned on left side */}
        <motion.div 
          className="absolute left-10 bottom-16 flex flex-col items-center cursor-pointer z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          onClick={scrollToNext}
        >
          <p className="text-gray-400 mb-2 text-sm font-wix-madefor">Scroll</p>
          <ChevronDown className="text-white h-6 w-6" />
        </motion.div>
      </LampSection>
      
      {/* Section Divider */}
      <div className="w-full flex justify-center py-12">
        <Separator className="w-2/3 max-w-4xl bg-gray-800" />
      </div>
      
      {/* Vision Section with Canvas Effect */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Canvas Effect Container - with improved visibility */}
        <div className="absolute inset-0 overflow-hidden">
          <CanvasEffect id="vision-canvas" className="w-full h-full opacity-90" />
        </div>
        
        {/* Enhanced teal glow effect background for additional atmosphere */}
        <div 
          className="absolute w-full h-full mx-auto opacity-40" 
          style={{
            background: "radial-gradient(ellipse at center, rgba(30,174,219,0.3) 0%, rgba(30,174,219,0) 70%)",
            pointerEvents: "none"
          }}
        />
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-10 text-center font-wix-madefor"
          >
            Our Vision
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white font-wix-madefor leading-relaxed max-w-2xl mx-auto text-center"
          >
            We envision a world where clinicians and patients are fully engaged, empowered by AI that automates workflows, enhances EHR usability, and unlocks unparalleled value.
          </motion.p>
        </div>
        
        {/* Scroll down indicator - positioned on left side */}
        <motion.div 
          className="absolute left-10 bottom-16 flex flex-col items-center cursor-pointer z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          onClick={scrollToNext}
        >
          <p className="text-gray-400 mb-2 text-sm font-wix-madefor">Scroll</p>
          <ChevronDown className="text-white h-6 w-6" />
        </motion.div>
      </section>
      
      {/* Section Divider */}
      <div className="w-full flex justify-center py-12">
        <Separator className="w-2/3 max-w-4xl bg-gray-800" />
      </div>
    </div>
  );
};

export default MissionVision;
