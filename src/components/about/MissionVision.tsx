
import { motion } from "framer-motion";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import { LampSection } from "@/components/ui/lamp";

const MissionVision = () => {
  return (
    <div className="flex flex-col">
      {/* Mission Section with Lamp Effect */}
      <LampSection title="Our Mission" color="teal">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl mx-auto text-center font-[Wix_Madefor_Text]"
        >
          To make life easy for clinicians by eliminating administrative burdens with intelligent automation.
        </motion.p>
      </LampSection>
      
      {/* Vision Section with Canvas Effect */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-black">
        {/* Canvas Effect Container */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <CanvasEffect id="vision-canvas" className="w-full h-full" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-10 text-center font-[Wix_Madefor_Text]"
          >
            Our Vision
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl mx-auto text-center font-[Wix_Madefor_Text]"
          >
            We envision a world where clinicians and patients are fully engaged, empowered by AI that automates workflows, enhances EHR usability, and unlocks unparalleled value.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
