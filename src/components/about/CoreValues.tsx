
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const coreValues = [
  {
    title: "Informed Decisions",
    description: "AI-driven insights for better healthcare."
  },
  {
    title: "Passion for Innovation",
    description: "We push boundaries to transform medicine."
  },
  {
    title: "Respect for People",
    description: "Prioritizing the well-being of clinicians and patients."
  },
  {
    title: "Reliability & Responsiveness",
    description: "Always evolving, always available."
  },
  {
    title: "Community Well-Being",
    description: "AI that improves lives, not just systems."
  }
];

const CoreValues = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Our Core Values</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coreValues.map((value, index) => (
            <motion.div 
              key={index}
              className="relative p-8 rounded-xl overflow-hidden"
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
              <div className="absolute inset-0 border border-blue-800/30 rounded-xl"></div>
              
              <div className="relative flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-600 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
