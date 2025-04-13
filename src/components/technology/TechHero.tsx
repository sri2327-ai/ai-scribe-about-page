
import { motion, useAnimation } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Spotlight } from "@/components/ui/spotlight";
import { useEffect } from "react";
import { CanvasEffect } from "@/components/ui/canvas-effect";

const TechHero = () => {
  const isMobile = useIsMobile();
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Canvas Effect positioned as background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CanvasEffect id="tech-canvas" className="opacity-40" />
      </div>
      
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 z-10"
        fill="#1EAEDB"
      />
      
      <ContainerScroll
        titleComponent={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full px-4 md:px-0 text-center relative z-20"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-[4.5rem] font-bold mb-6 leading-tight font-wix-madefor text-white"
            >
              AI Innovation with Unbreakable Security
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1EAEDB] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1EAEDB]"></span>
              </span>
              <p className="text-sm text-[#1EAEDB] font-medium">Secure & HIPAA Compliant</p>
            </motion.div>
          </motion.div>
        }
      >
        <div className="w-full h-full flex justify-center items-center p-4 md:p-8 relative z-20">
          <div className="w-full max-w-5xl aspect-[16/9] flex justify-center items-center">
            <img
              src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
              alt="S10.AI Healthcare Platform"
              className="w-full h-full object-contain z-10"
            />
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default TechHero;
