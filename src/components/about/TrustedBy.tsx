
import { motion } from "framer-motion";

const TrustedBy = () => {
  // Mock logos - in a real project, these would be actual images
  const logos = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Trusted by 1000+ Clinicians</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="h-20 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                <div className="text-white text-2xl font-bold">Logo {logo}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
