
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-black p-10 rounded-3xl border border-blue-800">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-black p-10 rounded-3xl border border-blue-800">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We envision a world where clinicians and patients are fully engaged, empowered by AI that automates workflows, enhances EHR usability, and unlocks unparalleled value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
