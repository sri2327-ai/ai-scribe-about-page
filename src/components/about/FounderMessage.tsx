
import { motion } from "framer-motion";

const innovationPoints = [
  {
    title: "Medical Knowledge Inference Engine (MKIE)",
    description: "Generates accurate medical concepts for documentation improvement."
  },
  {
    title: "Cross-lingual Conversation Inference Engine (CCIE)",
    description: "A Star Trek-inspired Universal Translator for seamless doctor-patient interactions."
  },
  {
    title: "Intuitive Interface Inference Engine (IIIE)",
    description: "Breaks integration barriers, making AI effortlessly interact with existing systems."
  }
];

const FounderMessage = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">A Message from Our Founder</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              In 2017, inspired by Star Trek's mission to "boldly go where no one has gone before," we set out to revolutionize AI in healthcare.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Breakthroughs like AlphaGo and GPT-2 revealed AI's potential—yet also its limitations in bias and accuracy. Our focus became truth-first AI that enhances clinical decision-making.
            </p>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-white">The Innovation Behind S10.AI</h3>
              
              <div className="space-y-6">
                {innovationPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">✦</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
                      <p className="text-gray-300">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 rounded-xl overflow-hidden bg-blue-950/30 border border-blue-800/30">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                S10.AI is more than an AI—it's the future of human + machine synergy in medicine.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We are shaping a world where doctors focus on care, not clicks, and AI works behind the scenes, making healthcare more efficient, accurate, and patient-centric.
              </p>
            </div>
            
            <div className="relative p-8 rounded-xl overflow-hidden bg-blue-950/30 border border-blue-800/30">
              <h3 className="text-2xl font-semibold mb-4 text-white">The Journey Continues…</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                We remain committed to scientific truth, ethical AI, and relentless innovation—paving the way for a future where technology and humanity work together for the greater good.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 p-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center overflow-hidden">
                  <span className="text-3xl font-bold text-white">SS</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Sridharan Sivan</h4>
                <p className="text-gray-300">Founder & Chairman, S10.AI Inc.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
