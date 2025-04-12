
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

const StarTrekSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <motion.h1 
          className="md:text-5xl text-4xl lg:text-6xl font-bold text-center text-white relative z-20 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Like A Star Trek
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-300 leading-relaxed max-w-3xl text-center mx-auto relative z-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Boldly going where no healthcare AI has gone before, our technology is inspired by the 
          futuristic vision of Star Trek — making the impossible possible through innovation and collaboration.
        </motion.p>
        
        <div className="w-full h-80 relative mt-8">
          {/* Gradients - Updated to teal blue (#1EAEDB) */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#1EAEDB] to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#1EAEDB] to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#33C3F0] to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#33C3F0] to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </section>
  );
};

export default StarTrekSection;
