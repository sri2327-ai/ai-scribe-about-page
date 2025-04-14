
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SecondSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const features = [
    {
      icon: "🎯",
      title: "Real-time Documentation",
      description: "Automatically transcribe and document patient-provider conversations as they happen."
    },
    {
      icon: "⚡",
      title: "60% Time Savings",
      description: "Reduce documentation time by up to 60%, giving you more time with patients."
    },
    {
      icon: "🔄",
      title: "EHR Integration",
      description: "Seamlessly integrate with all major EHR systems for streamlined workflow."
    },
    {
      icon: "🔒",
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with full HIPAA compliance and data protection."
    },
    {
      icon: "🧠",
      title: "Specialized AI Models",
      description: "Models trained for different medical specialties ensure accurate terminology."
    },
    {
      icon: "📊",
      title: "Structured Notes",
      description: "Generate properly structured clinical notes in your preferred format."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Healthcare Providers Choose S10.AI</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our AI-powered medical scribe solution is designed to reduce administrative burden
            and give healthcare providers more time for what matters most - patient care.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={isMounted ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
