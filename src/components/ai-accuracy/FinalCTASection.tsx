
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Users, Phone } from 'lucide-react';
import { HighlightGroup, HighlighterItem, Particles } from '@/components/ui/highlight-effects';

const FinalCTASection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full bg-black text-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Particle Background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#14b8a6"
        refresh={false}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-white leading-tight"
          >
            Transparency and Your Questions
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto"
          >
            S10.ai is committed to transparency in our technology and performance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <HighlightGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants}>
              <HighlighterItem className="h-full">
                <div className="relative z-20 h-full bg-black/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-gradient-to-br hover:from-black/50 hover:to-cyan-700/20 transition-all duration-300">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-black/50 border-2 border-white rounded-full flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Request a Demo</h3>
                    <p className="text-white/70 mb-6 flex-grow">
                      See our accuracy in action with a personalized demonstration.
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black rounded-full transition-colors duration-300 group">
                      Schedule Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </HighlighterItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HighlighterItem className="h-full">
                <div className="relative z-20 h-full bg-black/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-gradient-to-br hover:from-black/50 hover:to-cyan-700/20 transition-all duration-300">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-black/50 border-2 border-white rounded-full flex items-center justify-center mb-6">
                      <FileText className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">View Case Studies</h3>
                    <p className="text-white/70 mb-6 flex-grow">
                      See real-world accuracy and efficiency improvements from our clients.
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black rounded-full transition-colors duration-300 group">
                      Read Studies
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </HighlighterItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HighlighterItem className="h-full">
                <div className="relative z-20 h-full bg-black/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-gradient-to-br hover:from-black/50 hover:to-cyan-700/20 transition-all duration-300">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-black/50 border-2 border-white rounded-full flex items-center justify-center mb-6">
                      <Phone className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
                    <p className="text-white/70 mb-6 flex-grow">
                      Get detailed information on our accuracy protocols and methodologies.
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black rounded-full transition-colors duration-300 group">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </HighlighterItem>
            </motion.div>
          </HighlightGroup>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
