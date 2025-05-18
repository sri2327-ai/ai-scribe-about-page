
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SplashCursor } from "@/components/ui/splash-cursor";

export const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 rounded-t-2xl shadow-2xl mt-0 relative overflow-hidden">
      {/* Fluid background effect - Only applied to this section */}
      <SplashCursor 
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1024}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        BACK_COLOR={{ r: 0, g: 0, b: 0 }}
        TRANSPARENT={true}
        containerId="finalCTA-container"
        respondToScroll={true}
        respondToHover={true}
      />
      
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 md:mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Experience the S10.AI Transformation?
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 leading-relaxed text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reduce burnout, enhance patient care, and reclaim your time. Discover how S10.AI can be tailored to your practice's unique needs.
        </motion.p>
        
        <motion.a 
          href="#" 
          className="cta-button-primary bg-transparent border-2 border-white text-white font-medium py-3 px-6 sm:py-4 sm:px-10 md:px-12 rounded-lg shadow-lg text-base sm:text-lg md:text-xl inline-block transform transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight className="h-5 w-5" />
          Schedule Your Personalized Demo
        </motion.a>
        
        <motion.p 
          className="mt-6 sm:mt-8 text-sm sm:text-md text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Or, <a href="#" className="underline hover:text-teal-300 transition-colors">contact our specialists</a> to learn more.
        </motion.p>
      </div>
    </section>
  );
};
