
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import Image from "next/image";

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
            {/* Image without any glowing effect */}
            <div className="relative w-full h-full flex justify-center items-center">
              <Image
                src="/lovable-uploads/ac240693-c55f-4eca-b8c6-edf937838f40.png"
                alt="S10.AI Healthcare Platform"
                layout="fill"
                objectFit="contain"
                priority
                className="z-10 relative"
              />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default TechHero;
