
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ChemicalBurnEffect } from "@/components/ui/chemical-burn-effect";

const TechHero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background with Chemical Burn effect */}
      <div className="absolute inset-0 z-0">
        <ChemicalBurnEffect 
          colors={['#8B5CF6', '#D946EF', '#1EAEDB']}
          intensity={0.7}
          speed={1.2}
          particleCount={isMobile ? 150 : 300}
        />
      </div>

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
              <img
                src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
                alt="S10.AI Healthcare Platform"
                className="w-full h-full object-contain z-10 relative"
              />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default TechHero;
