
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FourthSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">AI-Powered Solutions for Healthcare Professionals</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our AI technology helps healthcare providers enhance clinical documentation, 
            reduce administrative burdens, and focus more on patient care.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-blue-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-4">CRUSH - AI Medical Scribe</h3>
            <p className="text-gray-600 mb-4">
              Advanced AI technology that converts patient-provider conversations into 
              accurate clinical notes, allowing providers to focus on patients instead of paperwork.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li>Real-time transcription and documentation</li>
              <li>Seamless EHR integration</li>
              <li>HIPAA compliant and secure</li>
              <li>Specialized for multiple medical fields</li>
            </ul>
            <a href="/solutions/crush" className="text-blue-500 font-medium hover:underline inline-flex items-center">
              Learn more 
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-green-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-4">BRAVO - AI Patient Care Agent</h3>
            <p className="text-gray-600 mb-4">
              Intelligent virtual assistant that enhances patient engagement, automates routine tasks, 
              and ensures timely follow-up care.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li>Automated appointment scheduling</li>
              <li>Patient education and information delivery</li>
              <li>Follow-up care reminders</li>
              <li>Health monitoring and check-ins</li>
            </ul>
            <a href="/solutions/bravo" className="text-blue-500 font-medium hover:underline inline-flex items-center">
              Learn more 
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
