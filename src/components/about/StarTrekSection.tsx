
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { CanvasEffect } from "@/components/ui/canvas-effect";

const StarTrekSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black min-h-[600px] flex flex-col items-center justify-center">
      {/* Background particle effect */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleColor="#ffffff"
          particleDensity={100}
          speed={1}
          className="w-full h-full"
          minSize={0.6}
          maxSize={1.4}
        />
      </div>
      
      {/* Blue glow line effect */}
      <div className="absolute inset-0 z-0 opacity-50">
        <CanvasEffect id="canvas-effect" className="w-full h-full" />
      </div>
      
      {/* Main content */}
      <div className="container relative z-10 px-4 mx-auto flex flex-col items-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-[120px] font-bold mb-6 text-white leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Acme
          </motion.h2>
          
          {/* Blue line under text */}
          <motion.div 
            className="h-[2px] w-full max-w-[400px] mx-auto bg-gradient-to-r from-transparent via-[#1EAEDB] to-transparent mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            Boldly going where no healthcare AI has gone before, 
            our technology is inspired by the futuristic vision of Star Trek — 
            making the impossible possible through innovation and collaboration.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Subtle blue glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#1EAEDB]/10 to-transparent" />
    </section>
  );
};

export default StarTrekSection;
