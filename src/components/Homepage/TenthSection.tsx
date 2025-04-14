
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TenthSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Documentation Process?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join thousands of healthcare providers who are saving hours every day and improving 
            patient care with S10.AI's medical scribe solutions.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={isMounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-8"
        >
          <Link to="/contactus" className="inline-block">
            <button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-colors">
              Request a Demo
            </button>
          </Link>
          <Link to="/solutions/crush" className="inline-block">
            <button className="w-full bg-transparent hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-full border border-white transition-colors">
              Learn More
            </button>
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isMounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm opacity-80">
            No credit card required. Free consultation with our healthcare AI specialists.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TenthSection;
