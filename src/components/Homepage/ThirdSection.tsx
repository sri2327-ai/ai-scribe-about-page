
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThirdSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8"
          >
            Reduce Administrative Fatigue. Enhance Productivity. Improve Patient Care.
          </motion.h2>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="bg-tealBlue hover:bg-tealBlueBright text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 mx-auto">
              <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-white transition-all duration-300 group-hover:rotate-[-270deg]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
              <span className="text-lg font-medium">Book A Demo</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
