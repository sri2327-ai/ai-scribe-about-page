
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { StarBorder } from "@/components/ui/star-border";

const TechHero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-black z-10" />
        <div className="w-full h-full bg-black">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-blue-950/10 to-black" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <StarBorder as="div" className="inline-block" color="#4ECDC4" speed="5s">
              <div className="px-6 py-2">
                <span className="text-blue-400 text-sm font-semibold tracking-wider">
                  ADVANCED TECHNOLOGY
                </span>
              </div>
            </StarBorder>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Pioneering Healthcare <br /> Through Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl text-lg md:text-xl mb-8"
          >
            Our innovative AI solutions are transforming the healthcare industry through cutting-edge technology that enables clinicians to focus on what matters most — patient care.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TechHero;
