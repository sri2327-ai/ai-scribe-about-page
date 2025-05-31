
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SlidingNumber } from '@/components/ui/sliding-number';

const AccuracyFoundationSection: React.FC = () => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation when section comes into view
            setTimeout(() => {
              setAnimatedValue(99.7);
            }, 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('accuracy-foundation');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

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
    <section id="accuracy-foundation" className="relative w-full bg-black text-white py-20 sm:py-24 lg:py-32">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 text-white leading-tight"
          >
            Accuracy: The Foundation of Trust in Healthcare AI
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-thin text-white flex items-baseline">
                <SlidingNumber value={animatedValue} />
                <span className="ml-1 text-white font-thin">%</span>
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-white font-medium">
              Clinical Accuracy Rate
            </p>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto"
          >
            In healthcare, accuracy is non-negotiable. It's essential for patient safety, sound clinical decisions, and efficient practice management. At S10.ai, we are fundamentally committed to delivering the highest standards of accuracy. This page outlines how we define, achieve, and continuously verify the precision of our AI solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AccuracyFoundationSection;
