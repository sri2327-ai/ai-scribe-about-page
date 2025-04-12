
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Teal light effect - top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#1EAEDB]/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Our <span className="text-[#1EAEDB]">Mission & Vision</span>
            </h2>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-[#1EAEDB]"></div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1EAEDB] to-[#1EAEDB]/70 rounded-3xl blur-lg opacity-30"></div>
            <div className="relative bg-black p-10 rounded-3xl border border-[#1EAEDB]/30">
              <div className="mb-6 inline-block p-4 bg-[#1EAEDB]/10 rounded-xl">
                <div className="text-[#1EAEDB] text-3xl font-bold">Mission</div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                To make life easy for clinicians by eliminating administrative burdens with intelligent automation.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1EAEDB]/70 to-[#1EAEDB] rounded-3xl blur-lg opacity-30"></div>
            <div className="relative bg-black p-10 rounded-3xl border border-[#1EAEDB]/30">
              <div className="mb-6 inline-block p-4 bg-[#1EAEDB]/10 rounded-xl">
                <div className="text-[#1EAEDB] text-3xl font-bold">Vision</div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                We envision a world where clinicians and patients are fully engaged, empowered by AI that automates workflows, enhances EHR usability, and unlocks unparalleled value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Teal light effect - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1EAEDB]/30 to-transparent"></div>
    </section>
  );
};

export default MissionVision;
