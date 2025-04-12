
import { motion } from "framer-motion";
import { Zap, Rocket, Layers, Users, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const coreValues = [
  {
    icon: <Layers className="h-7 w-7 text-white" />,
    title: "Informed Decisions",
    description: "AI-driven insights for better healthcare and patient outcomes."
  },
  {
    icon: <Rocket className="h-7 w-7 text-white" />,
    title: "Passion for Innovation",
    description: "We push boundaries to transform medicine and clinical practices."
  },
  {
    icon: <Zap className="h-7 w-7 text-white" />,
    title: "Respect for People",
    description: "Prioritizing the well-being of clinicians and patients at every step."
  },
  {
    icon: <Users className="h-7 w-7 text-white" />,
    title: "Reliability & Responsiveness",
    description: "Always evolving, always available, consistently dependable."
  },
  {
    icon: <Shield className="h-7 w-7 text-white" />,
    title: "Community Well-Being",
    description: "AI that improves lives, not just systems and processes."
  }
];

const CoreValues = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          {coreValues.map((value, index) => (
            <motion.div 
              key={index}
              className="relative px-4 py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full">
                {/* Removed all hover effects and glow animations */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="bg-black/80 p-3 rounded-full mb-6 inline-flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
