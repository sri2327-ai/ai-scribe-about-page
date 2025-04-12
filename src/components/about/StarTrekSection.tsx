
import { motion } from "framer-motion";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import StarBackground from "@/components/about/StarBackground";

const StarTrekSection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-black min-h-[500px] flex items-center justify-center">
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
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-6 text-white font-[Wix_Madefor_Text]">Like A Star Trek</h2>
          
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
