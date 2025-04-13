
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";

const companyLogos = [
  {
    id: 1,
    name: "MedCare Health",
    Component: () => (
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-black border border-white/30 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">M</span>
        </div>
        <p className="mt-2 text-sm text-gray-300">MedCare Health</p>
      </div>
    )
  },
  {
    id: 2,
    name: "HealthTech",
    Component: () => (
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-black border border-white/30 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">H</span>
        </div>
        <p className="mt-2 text-sm text-gray-300">HealthTech</p>
      </div>
    )
  },
  {
    id: 3,
    name: "Cascade Medical",
    Component: () => (
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-black border border-white/30 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">C</span>
        </div>
        <p className="mt-2 text-sm text-gray-300">Cascade Medical</p>
      </div>
    )
  },
  {
    id: 4,
    name: "Novant Health",
    Component: () => (
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-black border border-white/30 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">N</span>
        </div>
        <p className="mt-2 text-sm text-gray-300">Novant Health</p>
      </div>
    )
  },
  {
    id: 5,
    name: "Cedar Clinic",
    Component: () => (
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-black border border-white/30 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">C</span>
        </div>
        <p className="mt-2 text-sm text-gray-300">Cedar Clinic</p>
      </div>
    )
  },
];

const TrustedByExperts = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
      <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-black" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative z-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-normal mb-4 text-white">
            <span className="text-gray-300">Trusted by experts.</span>
            <br />
            <span>Used by the leaders.</span>
          </h2>
        </motion.div>
        
        <div className="relative mx-auto max-w-4xl">
          <div className="mx-auto mt-14 grid grid-cols-2 md:grid-cols-5 gap-8 text-white relative z-20">
            {companyLogos.map((logo) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: logo.id * 0.1 }}
              >
                <logo.Component />
              </motion.div>
            ))}
          </div>
          
          <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
            <Sparkles
              density={1200}
              className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
              color="#ffffff"
              background="transparent"
              size={1.2}
              speed={0.5}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedByExperts;
