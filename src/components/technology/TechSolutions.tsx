
import { motion } from "framer-motion";
import { Code, Database, Cpu, Server, Layers, Shield } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const solutions = [
  {
    icon: <Cpu className="h-6 w-6 text-blue-400" />,
    title: "AI Processing",
    description: "Advanced machine learning algorithms for real-time medical data analysis and interpretation."
  },
  {
    icon: <Database className="h-6 w-6 text-blue-400" />,
    title: "Data Management",
    description: "Secure storage and retrieval of medical records with HIPAA-compliant infrastructure."
  },
  {
    icon: <Code className="h-6 w-6 text-blue-400" />,
    title: "Natural Language Processing",
    description: "Sophisticated NLP engines that understand medical terminology and context."
  },
  {
    icon: <Server className="h-6 w-6 text-blue-400" />,
    title: "Cloud Infrastructure",
    description: "Scalable, high-availability architecture designed for enterprise healthcare environments."
  },
  {
    icon: <Layers className="h-6 w-6 text-blue-400" />,
    title: "API Integration",
    description: "Seamless connectivity with existing EHR systems and healthcare platforms."
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-400" />,
    title: "Security Framework",
    description: "Military-grade encryption and security protocols protecting sensitive patient information."
  }
];

const TechSolutions = () => {
  const isMobile = useIsMobile();

  return (
    <section className={`${isMobile ? 'py-12' : 'py-20'} bg-gradient-to-br from-black via-blue-950/20 to-purple-950/20`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-wix-madefor">Our Technology Solutions</h2>
          <p className="text-blue-100/90 max-w-2xl mx-auto">
            Delivering intelligent systems that enhance medical workflow efficiency and accuracy through innovative technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="relative h-full card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 h-full bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg mb-4 inline-block w-fit">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300 font-wix-madefor">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed font-wix-madefor">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
