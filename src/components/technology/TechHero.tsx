
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Spotlight } from "@/components/ui/spotlight";
import { useGlowEffect } from "@/hooks/use-glow-effect";

const TechHero = () => {
  const isMobile = useIsMobile();
  const glowContainerRef = useGlowEffect({
    inactiveZone: 0,
    proximity: 150,
    movementDuration: 1.5,
  });

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
            className="w-full px-4 md:px-0 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-[6rem] font-bold mb-6 leading-tight font-wix-madefor"
              style={{
                background: 'linear-gradient(to left, rgba(51,51,51,0.9) 30%, rgba(85,85,85,1) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              AI Innovation with Unbreakable Security
            </motion.h1>
          </motion.div>
        }
      >
        <div className="w-full h-full flex justify-center items-center">
          <div 
            ref={glowContainerRef} 
            className="relative w-full h-full max-w-5xl flex justify-center items-center"
            style={{
              '--active': '1',
              '--intensity': '2',
              '--spread': '60',
              '--start': '0',
            } as React.CSSProperties}
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  conic-gradient(
                    from calc(var(--start) * 1deg) at 50% 50%,
                    rgba(30, 174, 219, 0),
                    rgba(30, 174, 219, calc(var(--active) * var(--intensity) * 0.4)),
                    rgba(30, 174, 219, 0)
                  )
                `,
                opacity: 'var(--active)',
                filter: `blur(calc(var(--spread) * 1px))`,
              }}
            />
            
            <img
              src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
              alt="S10.AI Healthcare Platform"
              className="w-full h-full object-contain z-10 relative"
            />
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default TechHero;
