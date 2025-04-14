
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FifthSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stats = [
    { value: '60%', label: 'Reduction in documentation time' },
    { value: '45%', label: 'Decrease in provider burnout' },
    { value: '30%', label: 'More time with patients' },
    { value: '25%', label: 'Increase in patient satisfaction' },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">The Impact of S10.AI Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our AI-powered solutions have transformed healthcare delivery for providers across the country.
            Here's the real impact of implementing S10.AI in your practice.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg p-6 shadow-sm text-center"
            >
              <h3 className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 bg-white p-8 rounded-lg shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <img 
                src="/Medical-office-of-katy.webp" 
                alt="Healthcare provider using S10.AI"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Real-Life Success Stories</h3>
              <p className="text-gray-600 mb-4">
                "Since implementing S10.AI's CRUSH solution, I've reduced my documentation time by 65% 
                and can now see 4 more patients per day. The accuracy is remarkable, and it integrates 
                perfectly with our EHR system."
              </p>
              <p className="font-medium">Dr. Sarah Miller, Family Medicine</p>
              <p className="text-sm text-gray-500">Medical Office of Katy, Texas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FifthSection;
