
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
    <section className="py-24 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#1EAEDB]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-[#1EAEDB]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">A Message from Our Founder</h2>
          <div className="w-20 h-1 bg-[#1EAEDB] mx-auto">
            <div className="absolute w-20 h-1 animate-pulse bg-[#1EAEDB]/50 blur-sm"></div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              In 2017, inspired by Star Trek's mission to "boldly go where no one has gone before," we set out to revolutionize AI in healthcare.
            </motion.p>
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Breakthroughs like AlphaGo and GPT-2 revealed AI's potential—yet also its limitations in bias and accuracy. Our focus became truth-first AI that enhances clinical decision-making.
            </motion.p>
            
            <div className="mt-12">
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                The Innovation Behind S10.AI
              </motion.h3>
              
              <div className="space-y-6">
                {innovationPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-[#1EAEDB] rounded-full flex items-center justify-center relative">
                        <span className="text-white font-bold text-sm z-10">✦</span>
                        <div className="absolute inset-0 bg-[#1EAEDB]/50 rounded-full blur-sm animate-pulse"></div>
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
            <motion.div 
              className="relative p-8 rounded-xl overflow-hidden backdrop-blur-sm bg-blue-950/30 border border-[#1EAEDB]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#1EAEDB]/20 rounded-full blur-xl"></div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6 relative z-10">
                S10.AI is more than an AI—it's the future of human + machine synergy in medicine.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6 relative z-10">
                We are shaping a world where doctors focus on care, not clicks, and AI works behind the scenes, making healthcare more efficient, accurate, and patient-centric.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative p-8 rounded-xl overflow-hidden backdrop-blur-sm bg-blue-950/30 border border-[#1EAEDB]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#1EAEDB]/20 rounded-full blur-xl"></div>
              <h3 className="text-2xl font-semibold mb-4 text-white relative z-10">The Journey Continues…</h3>
              <p className="text-xl text-gray-300 leading-relaxed relative z-10">
                We remain committed to scientific truth, ethical AI, and relentless innovation—paving the way for a future where technology and humanity work together for the greater good.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6 p-6 bg-blue-950/20 rounded-xl border border-[#1EAEDB]/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#1EAEDB] to-cyan-400 flex items-center justify-center overflow-hidden relative">
                  <span className="text-3xl font-bold text-white relative z-10">SS</span>
                  <div className="absolute inset-0 bg-[#1EAEDB]/50 blur-sm animate-pulse"></div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Sridharan Sivan</h4>
                <p className="text-gray-300">Founder & Chairman, S10.AI Inc.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
