
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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

// Meteor component
const Meteor = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute h-0.5 w-[100px] md:w-[150px] bg-white opacity-60 rotate-[30deg]"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        filter: "blur(1.5px)",
      }}
      initial={{ 
        opacity: 0,
        translateX: "0%",
        translateY: "0%" 
      }}
      animate={{ 
        opacity: [0, 0.8, 0], 
        translateX: "100%", 
        translateY: "100%" 
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 7 + 5
      }}
    />
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
      {/* Meteor effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <Meteor key={i} delay={i * 0.8} />
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">A Message from Our Founder</h2>
          {/* Removed the underline div that was here */}
        </motion.div>
        
        <Card className="border-0 rounded-xl overflow-hidden w-full mx-auto max-w-6xl bg-black text-white">
          <CardContent className="p-16">
            <div className="flex flex-col space-y-8">
              <motion.p 
                className="text-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                In 2017, inspired by Star Trek's mission to "<TextRotate texts={["boldly go", "explore", "discover", "innovate"]} /> where no one has gone before," we set out to revolutionize AI in healthcare.
              </motion.p>
              
              <motion.p 
                className="text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Breakthroughs like AlphaGo and GPT-2 revealed AI's potential—yet also its limitations in bias and accuracy. Our focus became truth-first AI that enhances clinical decision-making.
              </motion.p>
              
              <div className="mt-4">
                <motion.h3 
                  className="text-2xl font-semibold mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
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
                        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                          <span className="text-black text-xs">•</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
                        <p className="text-gray-300">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <motion.p 
                className="text-xl leading-relaxed mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                S10.AI is more than an AI—it's the future of human + machine synergy in medicine.
              </motion.p>
              
              <motion.p 
                className="text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We are shaping a world where doctors focus on care, not clicks, and AI works behind the scenes, making healthcare more <TextRotate texts={["efficient", "accurate", "humane", "intelligent"]} />, and patient-centric.
              </motion.p>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <motion.div 
                  className="flex items-center space-x-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <span className="text-xl font-bold text-black">SS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Sridharan Sivan</h4>
                    <p className="text-gray-400">Founder & Chairman, S10.AI Inc.</p>
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
