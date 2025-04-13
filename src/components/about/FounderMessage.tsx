
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { Brain, Globe, Layers } from "lucide-react";

// Simpler text rotate without animations that were causing errors
const TextRotate = ({ texts }: { texts: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [texts]);
  
  return (
    <span className="inline-block relative text-white">
      {texts.map((text, i) => (
        <span 
          key={i} 
          className="transition-opacity duration-500"
          style={{
            position: i === currentIndex ? 'relative' : 'absolute',
            opacity: i === currentIndex ? 1 : 0,
            left: 0
          }}
        >
          {text}
        </span>
      ))}
    </span>
  );
};

const innovationPoints = [
  {
    title: "Medical Knowledge Inference Engine (MKIE)",
    description: "Generates accurate medical concepts for documentation improvement.",
    icon: <Brain className="h-6 w-6 text-tealBlueBright" />
  },
  {
    title: "Cross-lingual Conversation Inference Engine (CCIE)",
    description: "A Star Trek-inspired Universal Translator for seamless doctor-patient interactions.",
    icon: <Globe className="h-6 w-6 text-tealBlueBright" />
  },
  {
    title: "Intuitive Interface Inference Engine (IIIE)",
    description: "Breaks integration barriers, making AI effortlessly interact with existing systems.",
    icon: <Layers className="h-6 w-6 text-tealBlueBright" />
  }
];

const FounderMessage = () => {
  const listRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      const items = Array.from(listElement.querySelectorAll('.innovation-item'));
      items.forEach((item, index) => {
        const element = item as HTMLElement;
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, index * 150);
      });
    }
  }, []);
  
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Teal Blue Beams Background */}
      <div className="absolute inset-0 opacity-30">
        <CanvasEffect id="founder-canvas" className="opacity-60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white font-wix-madefor">A Message from Our Founder</h2>
        </motion.div>
        
        <Card className="border-0 rounded-xl overflow-hidden w-full mx-auto max-w-6xl bg-black/60 backdrop-blur-sm text-white border border-tealBlueBright/20 relative">
          {/* Add spotlight effect inside the card */}
          <Spotlight
            className="inset-0 z-0"
            fill="#1EAEDB"
          />
          
          <CardContent className="p-8 md:p-16 relative z-10">
            <div className="flex flex-col space-y-8">
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed font-wix-madefor text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                In 2017, inspired by Star Trek's mission to "<TextRotate texts={["boldly go", "explore", "discover", "innovate"]} /> where no one has gone before," we set out to revolutionize AI in healthcare.
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl leading-relaxed font-wix-madefor text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Breakthroughs like AlphaGo and GPT-2 revealed AI's potential—yet also its limitations in bias and accuracy. Our focus became truth-first AI that enhances clinical decision-making.
              </motion.p>
              
              <div className="mt-4">
                <motion.h3 
                  className="text-xl md:text-2xl font-semibold mb-6 font-wix-madefor text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  The Innovation Behind S10.AI
                </motion.h3>
                
                <div className="space-y-6" ref={listRef}>
                  {innovationPoints.map((point, index) => (
                    <motion.div 
                      key={index}
                      className="innovation-item transition-all duration-500 border-l-2 border-tealBlueBright/40 pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1 pulse-glow">
                          {point.icon}
                        </div>
                        <div>
                          <motion.h4 
                            className="text-lg font-semibold mb-2 font-wix-madefor text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 + index * 0.2 }}
                          >
                            {point.title}
                          </motion.h4>
                          <motion.p 
                            className="text-gray-400 font-wix-madefor"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 + index * 0.2 }}
                          >
                            {point.description}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.p 
                className="text-lg md:text-xl leading-relaxed mt-6 font-wix-madefor text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                S10.AI is more than an AI—it's the future of human + machine synergy in medicine.
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl leading-relaxed font-wix-madefor text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We are shaping a world where doctors focus on care, not clicks, and AI works behind the scenes, making healthcare more <TextRotate texts={["efficient", "accurate", "humane", "intelligent"]} />, and patient-centric.
              </motion.p>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <motion.div 
                  className="flex items-center space-x-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                      <span className="text-xl font-bold text-white">SS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white font-wix-madefor">Sridharan Sivan</h4>
                    <p className="text-gray-400 font-wix-madefor">Founder & Chairman, S10.AI Inc.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FounderMessage;
