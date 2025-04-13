
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";
import StarBackground from "@/components/about/StarBackground";

const companyLogos = [
  { id: 1, name: "MedCare Health" },
  { id: 2, name: "HealthTech" },
  { id: 3, name: "Cascade Medical" },
  { id: 4, name: "Novant Health" },
  { id: 5, name: "Cedar Clinic" },
];

const TrustedByExperts = () => {
  return (
    <section className="relative py-20 border-t border-white/10 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <StarBackground interactive={false} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4 text-white">
            Trusted By Experts
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join leading healthcare institutions that leverage S10.AI's IPKO technology
          </p>
        </motion.div>
        
        <div className="relative mx-auto max-w-4xl">
          <div className="relative z-10 bg-black/80 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {companyLogos.map((logo) => (
                <motion.div
                  key={logo.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: logo.id * 0.1 }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {logo.name.charAt(0)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-300 text-center">{logo.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="absolute inset-0 -z-0 overflow-hidden [mask-image:radial-gradient(60%_60%,white,transparent)]">
            <Sparkles
              density={800}
              size={1.2}
              speed={0.5}
              color="#ffffff"
              background="transparent"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByExperts;
