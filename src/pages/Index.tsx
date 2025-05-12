
import { Link } from "react-router-dom";
import rippleStyles from "@/styles/RippleEffect.module.css";
import { LampSection } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, CalendarCheck, FileCheck, Check } from "lucide-react";

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
          className="text-xl md:text-2xl text-gray-300 mb-5 max-w-3xl mx-auto font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          AI that adapts to your workflow, not the other way around
        </motion.p>
        
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white flex items-center">
            <span className="text-blue-300 font-bold mr-2">75%</span> faster charting
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white flex items-center">
            <span className="text-blue-300 font-bold mr-2">60%</span> higher patient satisfaction
          </div>
        </motion.div>
        
        <motion.p 
          className="text-md text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Don't adapt to your AI—make it work for you.
          S10.AI's AI medical scribe and patient engagement agent integrate seamlessly with Epic, Cerner, your preferred EHR, and 7,000+ other apps. Trusted by over 1,000 clinics worldwide. Customize workflows to save time, stay HIPAA-compliant, and see results in days.
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
        
        {/* Redesigned Key Benefits Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-1 gap-6 text-left max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Card className="bg-white/15 backdrop-blur-lg border-white/20 hover:border-blue-500/40 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Customize workflows to save time, stay HIPAA-compliant, and see results in days</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center mr-3">
                      <ClipboardCheck className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Don't adapt to your AI</h3>
                  </div>
                  <p className="text-gray-300 mb-3">S10.AI's medical scribe adapts to your practice workflow</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Tailored to your specialty</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center mr-3">
                      <CalendarCheck className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Seamless Integration</h3>
                  </div>
                  <p className="text-gray-300 mb-3">Works with Epic, Cerner, and 7,000+ apps</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Trusted by 1,000+ clinics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center mr-3">
                      <FileCheck className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Immediate Results</h3>
                  </div>
                  <p className="text-gray-300 mb-3">Stay HIPAA-compliant with rapid implementation</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">See tangible improvements within days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
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
