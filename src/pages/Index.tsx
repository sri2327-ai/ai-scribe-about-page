
import { Link } from "react-router-dom";
import rippleStyles from "@/styles/RippleEffect.module.css";
import { LampSection } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Ripple effect background */}
      <div className={rippleStyles.rippleBackground}>
        <div className={rippleStyles.ripple}></div>
        <div className={rippleStyles.ripple}></div>
        <div className={rippleStyles.ripple}></div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto px-4 pt-24 pb-16 md:py-32 relative z-10 flex-1 flex flex-col justify-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          AI Scribing & Patient Engagement<br />Built for Clinicians Like You
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Don't adapt to your AI—make it work for you.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white flex items-center">
            <span className="text-blue-300 font-bold mr-2">30%</span> faster charting
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white flex items-center">
            <span className="text-blue-300 font-bold mr-2">20%</span> higher patient satisfaction
          </div>
        </motion.div>
        
        <motion.p 
          className="text-md text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          S10.AI's AI medical scribe and patient engagement agent integrate seamlessly with Epic, 
          Cerner, your preferred EHR, and 7,000+ other apps. Trusted by over 1,000 clinics worldwide.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link 
            to="/demo" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center gap-2 border border-blue-500"
          >
            <span>Request A Demo</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
          
          <Link 
            to="/specialty" 
            className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/20 font-medium py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            Explore Specialties
          </Link>
        </motion.div>
        
        {/* Key Benefits Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </span>
              Cut Charting Time by 75%
            </h3>
            <p className="text-gray-300">CRUSH AI scribe automates documentation with up to 99% accuracy.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
              Cut No-Shows by 50%
            </h3>
            <p className="text-gray-300">BRAVO AI agent optimizes scheduling and patient communication.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
              Works with Your Chosen EHR
            </h3>
            <p className="text-gray-300">Effortless integration with Epic, Cerner, and over 100+ EHR platforms.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </span>
              Focus on Patients, Not Paperwork
            </h3>
            <p className="text-gray-300">Trusted by over 1,000 clinicians.</p>
          </div>
        </motion.div>
      </div>
      
      {/* Recommended by section */}
      <div className="pb-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-gray-300 mb-3 font-medium">S10.AI Is Recommended by</h4>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white/50">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
