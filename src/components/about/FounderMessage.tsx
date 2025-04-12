
import { motion } from "framer-motion";
import { animate, stagger } from "motion";
import { useEffect, useRef } from "react";

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

const TextRotate = ({ texts }: { texts: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const wordElements = Array.from(container.children);
    
    // Hide all texts initially
    wordElements.forEach((el, i) => {
      if (i > 0) {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.display = "none";
      }
    });
    
    const rotateText = () => {
      const prevIndex = currentIndex.current;
      currentIndex.current = (currentIndex.current + 1) % texts.length;
      
      // Hide previous word
      const prevElement = wordElements[prevIndex] as HTMLElement;
      animate(
        prevElement,
        { opacity: 0, y: -20 },
        { duration: 0.3, easing: "ease-in-out" }
      ).finished.then(() => {
        prevElement.style.display = "none";
        
        // Show next word
        const nextElement = wordElements[currentIndex.current] as HTMLElement;
        nextElement.style.display = "inline-block";
        animate(
          nextElement,
          { opacity: 1, y: 0 },
          { duration: 0.3, easing: "ease-in-out" }
        );
      });
    };
    
    const interval = setInterval(rotateText, 3000);
    return () => clearInterval(interval);
  }, [texts]);
  
  return (
    <span ref={containerRef} className="inline-block relative">
      {texts.map((text, i) => (
        <span 
          key={i} 
          className={`absolute left-0 ${i === 0 ? "opacity-100" : "opacity-0"}`}
          style={{ transform: "translateY(0)" }}
        >
          {text}
        </span>
      ))}
    </span>
  );
};

const FounderMessage = () => {
  const listRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      const items = Array.from(listElement.querySelectorAll('.innovation-item'));
      animate(
        items,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.15), easing: "ease-out", duration: 0.5 }
      );
    }
  }, []);
  
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">A Message from Our Founder</h2>
          <div className="w-20 h-1 bg-white/80 mx-auto">
            <div className="absolute w-20 h-1 animate-pulse bg-white/20 blur-sm"></div>
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
              In 2017, inspired by Star Trek's mission to "<TextRotate texts={["boldly go", "explore", "discover", "innovate"]} /> where no one has gone before," we set out to revolutionize AI in healthcare.
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
              
              <div className="space-y-6" ref={listRef}>
                {innovationPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4 innovation-item opacity-0"
                    style={{ transform: "translateY(20px)" }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center relative">
                        <span className="text-black font-bold text-sm z-10">✦</span>
                        <div className="absolute inset-0 bg-white/50 rounded-full blur-sm animate-pulse"></div>
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
              className="relative p-8 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6 relative z-10">
                S10.AI is more than an AI—it's the future of human + machine synergy in medicine.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6 relative z-10">
                We are shaping a world where doctors focus on care, not clicks, and AI works behind the scenes, making healthcare more <TextRotate texts={["efficient", "accurate", "humane", "intelligent"]} />, and patient-centric.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative p-8 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
              <h3 className="text-2xl font-semibold mb-4 text-white relative z-10">The Journey Continues…</h3>
              <p className="text-xl text-gray-300 leading-relaxed relative z-10">
                We remain committed to scientific truth, ethical AI, and relentless innovation—paving the way for a future where technology and humanity work together for the greater good.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden relative">
                  <span className="text-3xl font-bold text-white relative z-10">SS</span>
                  <div className="absolute inset-0 bg-white/10 blur-sm animate-pulse"></div>
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
