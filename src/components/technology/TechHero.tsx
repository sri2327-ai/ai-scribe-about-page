
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Spotlight } from "@/components/ui/spotlight";

const TechHero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background with Spotlight effect */}
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 left-0"
          fill="#1EAEDB"
        />
      </div>

      <ContainerScroll
        titleComponent={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full px-4 md:px-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-[6rem] font-bold mb-6 leading-tight text-metallic font-wix-madefor"
              data-text="Advanced AI Innovation & Unbreakable Security"
            >
              Advanced AI Innovation & Unbreakable Security
            </motion.h1>
          </motion.div>
        }
      >
        <img
          src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
          alt="S10.AI Healthcare Platform"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </ContainerScroll>
    </section>
  );
};

export default TechHero;
