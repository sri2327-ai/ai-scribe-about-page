
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThirdSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How S10.AI Works</h2>
            <p className="text-xl mb-8 opacity-90">
              Our AI-powered medical scribe solution is designed to streamline clinical documentation 
              with minimal setup and maximum results.
            </p>
            
            <ul className="space-y-6">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={isMounted ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start"
              >
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4 font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Install & Activate</h3>
                  <p className="opacity-90">Download our secure app and complete a simple setup process. Integration with your EHR system takes less than an hour.</p>
                </div>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={isMounted ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4 font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Conduct Patient Visit</h3>
                  <p className="opacity-90">Start the S10.AI assistant at the beginning of your patient visit. Focus entirely on your patient while the AI listens and documents.</p>
                </div>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={isMounted ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-start"
              >
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4 font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Review & Finalize</h3>
                  <p className="opacity-90">After the visit, review the AI-generated clinical note, make any necessary edits, and approve it for your EHR system.</p>
                </div>
              </motion.li>
            </ul>
            
            <Link to="/solutions/crush" className="inline-block mt-8">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-full transition-colors">
                Learn More About the Process
              </button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/Real-Life-Scenario.webp" 
                alt="S10.AI documentation workflow" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm cursor-pointer transform transition-transform hover:scale-110">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
