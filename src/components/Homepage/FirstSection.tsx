
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FirstSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 pt-8 lg:pt-0 lg:pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI Medical Scribe for <span className="text-blue-600">Healthcare Professionals</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Convert patient-provider conversations into accurate clinical notes in real-time. 
              Reduce documentation time by 60% and focus more on patient care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contactus" className="inline-block">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-sm">
                  Request a Demo
                </button>
              </Link>
              <Link to="/solutions/crush" className="inline-block">
                <button className="w-full bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-6 rounded-full border border-blue-600 transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img 
                  src="/Dr-Lisbeth-Roy.png" 
                  alt="Healthcare professional" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="/Humera.jpeg" 
                  alt="Healthcare professional" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="/Harold.jpg" 
                  alt="Healthcare professional" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <p className="ml-4 text-sm text-gray-600">
                Trusted by <span className="font-semibold">1,000+</span> healthcare providers
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <img 
              src="/ImprovePatientCare.webp" 
              alt="S10.AI Medical Scribe in action" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
