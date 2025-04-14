
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThirdSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Meet Bravo & CRUSH – A S10'ing Experience
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              From AI scribes to AI agents, Crush & Bravo solve medical office challenges by streamlining documentation, 
              optimizing real-time clinical prompts, automating clinical workflows, and improving medical decision-making. 
              They cut admin tasks and enhance patient care—always ready to assist, with enterprise-grade AI enhancing every aspect.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
            {/* CRUSH Card */}
            <motion.div 
              initial={isMounted ? { y: 30, opacity: 0 } : false}
              animate={isMounted ? { y: 0, opacity: 1 } : false}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-col justify-between bg-gradient-to-b from-blue-100 to-white rounded-lg shadow-md p-6 max-w-md"
            >
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-200 rounded-lg shadow overflow-hidden"
                >
                  <img
                    src="/circleIcon.png"
                    alt="CRUSH icon"
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-center">C.R.U.S.H</h3>
                <h4 className="text-xl font-semibold text-center min-h-[3rem]">
                  AI Medical Scribe Assistant Powered by Robots
                </h4>
                <p className="text-gray-700 text-center">
                  Crush automates documentation, transcribes in real time using generative AI, 
                  and integrates with your preferred EHR, reducing burnout and freeing you to focus on care. 
                  It ensures compliance, accurate speech-to-text for doctors, and efficiency.
                </p>
              </div>
              
              <Link to="/solutions/crush" className="mt-6 bg-tealBlue hover:bg-tealBlueBright text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 mx-auto">
                <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-white transition-all duration-300 group-hover:rotate-[-270deg]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
                <span className="text-lg font-medium">View More</span>
              </Link>
            </motion.div>
            
            {/* BRAVO Card */}
            <motion.div 
              initial={isMounted ? { y: 30, opacity: 0 } : false}
              animate={isMounted ? { y: 0, opacity: 1 } : false}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col justify-between bg-gradient-to-b from-blue-100 to-white rounded-lg shadow-md p-6 max-w-md"
            >
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-200 rounded-lg shadow overflow-hidden"
                >
                  <img
                    src="/circleIcon.png"
                    alt="BRAVO icon"
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-center">B.R.A.V.O</h3>
                <h4 className="text-xl font-semibold text-center min-h-[3rem]">
                  AI Patient Care Agent Powered by Robots
                </h4>
                <p className="text-gray-700 text-center">
                  Bravo automates scheduling, patient communication, insurance verification, and follow-ups, 
                  keeping your clinic efficient and patients engaged—enhancing clinical workflow optimization, 
                  healthcare AI infrastructure, and patient satisfaction.
                </p>
              </div>
              
              <Link to="/solutions/bravo" className="mt-6 bg-tealBlue hover:bg-tealBlueBright text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 mx-auto">
                <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-white transition-all duration-300 group-hover:rotate-[-270deg]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
                <span className="text-lg font-medium">View More</span>
              </Link>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contactus">
              <motion.button
                initial={isMounted ? { y: 20, opacity: 0 } : false}
                animate={isMounted ? { y: 0, opacity: 1 } : false}
                transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                className="bg-white hover:bg-gray-100 text-tealBlue border-2 border-tealBlue px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-sm"
              >
                Book A Demo
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
