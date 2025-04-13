
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";

const companyLogos = [
  {
    id: 1,
    name: "MedCare Health",
    letter: "M"
  },
  {
    id: 2,
    name: "HealthTech",
    letter: "H"
  },
  {
    id: 3,
    name: "Cascade Medical",
    letter: "C"
  },
  {
    id: 4,
    name: "Novant Health",
    letter: "N"
  },
  {
    id: 5,
    name: "Cedar Clinic",
    letter: "C"
  },
];

const TrustedByExperts = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] to-black opacity-90">
        {/* Teal blue gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            background: `radial-gradient(
              circle at bottom center, 
              rgba(30, 174, 219, 0.2) 0%, 
              rgba(30, 174, 219, 0.05) 50%, 
              transparent 70%
            )`
          }} 
        />
      </div>
      
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
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full bg-black border border-teal-500/30 flex items-center justify-center 
                  relative overflow-hidden group-hover:border-teal-500/60 transition-all duration-300">
                  <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300" 
                    style={{
                      background: `radial-gradient(
                        circle at center, 
                        rgba(30, 174, 219, 0.2) 0%, 
                        transparent 70%
                      )`
                    }}
                  />
                  <span className="text-2xl font-bold text-white relative z-10">{logo.letter}</span>
                </div>
                <p className="mt-2 text-sm text-gray-300 group-hover:text-teal-300 transition-colors duration-300">
                  {logo.name}
                </p>
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
