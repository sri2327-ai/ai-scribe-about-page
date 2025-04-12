
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { animate } from "motion";
import { Card, CardContent } from "@/components/ui/card";

const TextRotate = ({ texts }: { texts: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
      const prevIndex = currentIndex;
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(nextIndex);
      
      // Hide previous word
      const prevElement = wordElements[prevIndex] as HTMLElement;
      const animation = animate(
        prevElement,
        { y: [-0, -20] },
        { duration: 0.3, easing: "ease-in-out" }
      );
      
      animation.finished.then(() => {
        prevElement.style.opacity = "0";
        prevElement.style.display = "none";
        
        // Show next word
        const nextElement = wordElements[nextIndex] as HTMLElement;
        nextElement.style.display = "inline-block";
        nextElement.style.opacity = "1";
        animate(
          nextElement,
          { y: [20, 0] },
          { duration: 0.3, easing: "ease-in-out" }
        );
      });
    };
    
    const interval = setInterval(rotateText, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, texts]);
  
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
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">A Message from Our Founder</h2>
          <div className="w-20 h-1 bg-white/50 mx-auto"></div>
        </motion.div>
        
        <Card className="border-0 rounded-xl overflow-hidden w-full mx-auto max-w-6xl bg-white text-black">
          <CardContent className="p-16">
            <div className="flex flex-col space-y-8">
              <motion.p 
                className="text-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                In 2017, inspired by Star Trek's mission to "<TextRotate texts={["boldly go", "explore", "discover", "innovate"]} /> where no one has gone before," we set out to revolutionize AI in healthcare.
              </motion.p>
              
              <motion.p 
                className="text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Breakthroughs like AlphaGo and GPT-2 revealed AI's potential—yet also its limitations in bias and accuracy. Our focus became truth-first AI that enhances clinical decision-making.
              </motion.p>
              
              <div className="mt-4">
                <motion.h3 
                  className="text-2xl font-semibold mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  The Innovation Behind S10.AI
                </motion.h3>
                
                <div className="space-y-6" ref={listRef}>
                  {innovationPoints.map((point, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 innovation-item transition-all duration-500"
                      style={{ opacity: 0, transform: "translateY(20px)" }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">•</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
                        <p className="text-gray-700">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <motion.p 
                className="text-xl leading-relaxed mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                S10.AI is more than an AI—it's the future of human + machine synergy in medicine.
              </motion.p>
              
              <motion.p 
                className="text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We are shaping a world where doctors focus on care, not clicks, and AI works behind the scenes, making healthcare more <TextRotate texts={["efficient", "accurate", "humane", "intelligent"]} />, and patient-centric.
              </motion.p>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <motion.div 
                  className="flex items-center space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center overflow-hidden">
                      <span className="text-xl font-bold text-white">SS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Sridharan Sivan</h4>
                    <p className="text-gray-700">Founder & Chairman, S10.AI Inc.</p>
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
