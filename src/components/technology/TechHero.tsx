
import { motion, useAnimation } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Spotlight } from "@/components/ui/spotlight";
import { useEffect } from "react";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Shield, ShieldCheck, FileCheck, CheckCircle } from "lucide-react";

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
            
            {/* Security Icons with Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-4 mt-4"
            >
              <div className="relative group">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 cursor-pointer group-hover:bg-white/20">
                      <Shield size={20} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold text-white">HIPAA Compliant</h4>
                      <p className="text-xs text-white/70">
                        Health Insurance Portability and Accountability Act compliance for healthcare data protection.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              <div className="relative group">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 cursor-pointer group-hover:bg-white/20">
                      <ShieldCheck size={20} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold text-white">PIPEDA Compliant</h4>
                      <p className="text-xs text-white/70">
                        Personal Information Protection and Electronic Documents Act compliance for Canadian privacy standards.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              <div className="relative group">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 cursor-pointer group-hover:bg-white/20">
                      <FileCheck size={20} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold text-white">GDPR Compliant</h4>
                      <p className="text-xs text-white/70">
                        General Data Protection Regulation compliance for EU data protection and privacy standards.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              <div className="relative group">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 cursor-pointer group-hover:bg-white/20">
                      <CheckCircle size={20} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60 bg-black/80 border border-blue-500/30">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold text-white">ISO 27001 Certified</h4>
                      <p className="text-xs text-white/70">
                        International standard for information security management systems and best practices.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
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
