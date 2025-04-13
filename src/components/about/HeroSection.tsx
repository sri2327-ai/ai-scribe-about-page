
import { motion } from "framer-motion";
import { SplineSceneBasic } from "@/components/ui/demo";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  // Add a spotlight inside the card
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      cardRef.current.style.setProperty('--x', `${x}px`);
      cardRef.current.style.setProperty('--y', `${y}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden border-0">
      {/* Background Spotlight effect */}
      <Spotlight
        className="inset-0 z-0"
        fill="#1EAEDB"
      />
      
      {/* Center content container */}
      <div className="container relative mx-auto px-4 z-10 flex flex-col items-center justify-center border-0 w-full">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full border-0 relative overflow-hidden"
          style={{
            '--x': '50%',
            '--y': '50%',
          } as React.CSSProperties}
        >
          {/* Inner card spotlight effect */}
          <div 
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(circle at var(--x) var(--y), rgba(30,174,219,0.15), transparent 70%)`,
              opacity: 0.8,
            }}
          />
          <SplineSceneBasic />
        </motion.div>
      </div>
      
      {/* Scroll down indicator - positioned on left side */}
      <motion.div 
        className="absolute left-10 bottom-16 flex flex-col items-center cursor-pointer z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        onClick={scrollToNextSection}
      >
        <p className="text-gray-400 mb-2 text-sm font-wix-madefor">Scroll</p>
        <ChevronDown className="text-white h-6 w-6" />
      </motion.div>
      
      {/* Section Divider */}
      <div className="w-full flex justify-center absolute bottom-4">
        <Separator className="w-2/3 max-w-4xl bg-gray-800" />
      </div>
    </div>
  );
};

export default HeroSection;
