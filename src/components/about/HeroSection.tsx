
import { motion } from "framer-motion";
import { SplineSceneBasic } from "@/components/ui/demo";
import { Separator } from "@/components/ui/separator";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden border-0">
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
        
        {/* Text glow effect with teal blue color */}
        <div 
          className="absolute w-full max-w-3xl h-32 mx-auto" 
          style={{
            background: "radial-gradient(ellipse at center, rgba(30,174,219,0.15) 0%, rgba(30,174,219,0) 70%)",
            top: "calc(50% - 200px)",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none"
          }}
        />
      </div>
      
      {/* Section Divider */}
      <div className="w-full flex justify-center mt-8 mb-0">
        <Separator className="w-2/3 max-w-4xl bg-gray-800" />
      </div>
    </div>
  );
};

export default HeroSection;
