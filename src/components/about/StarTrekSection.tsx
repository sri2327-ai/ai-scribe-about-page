
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import StarBackground from "@/components/about/StarBackground";

const StarTrekSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black min-h-[600px] flex items-center justify-center">
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
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-white">S10.AI</h2>
          
          {/* Blue line similar to Star Trek */}
          <div className="relative h-1 w-full max-w-md mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1EAEDB] to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-[#1EAEDB] opacity-50 blur-sm"></div>
          </div>
          
          {/* Interactive flowing line effect */}
          <div className="relative h-64 w-full">
            <CanvasEffect id="trek-canvas" className="opacity-75" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StarTrekSection;
