
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TechInnovation = () => {
  const isMobile = useIsMobile();

  return (
    <section className={`${isMobile ? 'py-12' : 'py-20'} bg-gradient-to-br from-purple-950/30 via-blue-950/20 to-black`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              The IPKO Technology
            </h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Our patented Intelligent Physician Knowledge Orchestrator (IPKO) is a revolutionary AI system designed specifically for healthcare providers. It transforms the way medical documentation is created, managed, and utilized.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Real-time Transcription</h3>
                <p className="text-blue-100/80">
                  Advanced speech recognition with medical terminology awareness providing over 98% accuracy in clinical settings.
                </p>
              </div>
              
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Contextual Understanding</h3>
                <p className="text-blue-100/80">
                  AI models trained on millions of medical encounters to understand the nuances of doctor-patient interactions.
                </p>
              </div>
              
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Adaptive Learning</h3>
                <p className="text-blue-100/80">
                  The system continuously improves through machine learning, adapting to each physician's unique documentation style.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Advanced Technology Circuit Board" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-300 text-sm mb-1">Patented Technology</p>
                    <h4 className="text-white text-2xl font-bold">IPKO System Architecture</h4>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 group cursor-pointer hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechInnovation;
