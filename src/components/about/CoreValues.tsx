
import { motion } from "framer-motion";
import { LayoutGrid, Lock, Search, Settings, Star } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const coreValues = [
  {
    icon: <Star className="h-5 w-5 text-white" />,
    title: "Informed Decisions",
    description: "AI-driven insights for better healthcare."
  },
  {
    icon: <Lock className="h-5 w-5 text-white" />,
    title: "Passion for Innovation",
    description: "We push boundaries to transform medicine."
  },
  {
    icon: <Settings className="h-5 w-5 text-white" />,
    title: "Respect for People",
    description: "Prioritizing the well-being of clinicians and patients."
  },
  {
    icon: <Search className="h-5 w-5 text-white" />,
    title: "Reliability & Responsiveness",
    description: "Always evolving, always available."
  },
  {
    icon: <LayoutGrid className="h-5 w-5 text-white" />,
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
              className="relative"
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-xl border border-gray-700 hover:border-transparent p-6 h-full bg-black/40 transition-all duration-300 group">
                <GlowingEffect
                  spread={150}
                  glow={true}
                  disabled={false}
                  proximity={120}
                  inactiveZone={0.01}
                  borderWidth={2}
                  variant="teal"
                  blur={20}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <div className="bg-black/60 p-2 rounded-lg mb-4 inline-block">
                    {value.icon}
                  </div>
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
