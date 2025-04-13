
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TechHero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-purple-950/20 to-black z-10" />
        <div className="w-full h-full bg-black">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-purple-900/10 to-black" />
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
            <div className="inline-block px-6 py-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold tracking-wider">
                ADVANCED TECHNOLOGY
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100"
          >
            Pioneering Healthcare <br /> Through Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-100/90 max-w-2xl text-lg md:text-xl mb-8"
          >
            Our innovative AI solutions are transforming the healthcare industry through cutting-edge technology that enables clinicians to focus on what matters most — patient care.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-purple-900/20 transition-all duration-300"
          >
            Explore Our Technology
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TechHero;
