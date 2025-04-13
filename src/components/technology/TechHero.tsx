
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

const TechHero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated gradient background */}
      <AnimatedGradientBackground 
        gradientColors={["#000", "#1EAEDB", "#0FA0CE", "#000"]}
        gradientStops={[0, 30, 60, 100]}
        Breathing={true}
        breathingRange={10}
        animationSpeed={0.03}
      />
      
      <ContainerScroll
        titleComponent={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full px-4 md:px-0 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-[4.5rem] font-bold mb-6 leading-tight font-wix-madefor text-white"
            >
              AI Innovation with Unbreakable Security
            </motion.h1>
          </motion.div>
        }
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="relative w-full h-full max-w-5xl flex justify-center items-center">
            {/* Improved container for better image display */}
            <div className="relative w-full flex justify-center items-center px-4 md:px-8" style={{ height: "auto" }}>
              <div className="w-full md:w-[80%] flex justify-center" style={{ maxHeight: "65vh" }}>
                <img
                  src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
                  alt="S10.AI Healthcare Platform"
                  className="object-contain max-h-full max-w-full z-10"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default TechHero;
