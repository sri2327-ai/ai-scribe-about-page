import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, Heart, Users, TrendingUp, FileText, Calendar } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 rounded-t-2xl shadow-2xl mt-0 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Experience the S10.AI Transformation?
        </motion.h2>
        
        {/* ROI Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.1 }}
        >
          <motion.div 
            className="flex flex-col items-center p-3 sm:p-4 border-2 border-white/30 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Clock className="h-8 w-8 mb-2 text-white" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">75%</span>
            <span className="text-xs sm:text-sm mt-1 text-white/80">Reduction in documentation time</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-3 sm:p-4 border-2 border-white/30 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <DollarSign className="h-8 w-8 mb-2 text-white" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">40%</span>
            <span className="text-xs sm:text-sm mt-1 text-white/80">Increase in practice revenue</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-3 sm:p-4 border-2 border-white/30 rounded-lg col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heart className="h-8 w-8 mb-2 text-white" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">95%</span>
            <span className="text-xs sm:text-sm mt-1 text-white/80">Patient satisfaction rates</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-3 sm:p-4 border-2 border-white/30 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TrendingUp className="h-8 w-8 mb-2 text-white" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">$150K+</span>
            <span className="text-xs sm:text-sm mt-1 text-white/80">Annual cost savings</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-3 sm:p-4 border-2 border-white/30 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Users className="h-8 w-8 mb-2 text-white" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">30%</span>
            <span className="text-xs sm:text-sm mt-1 text-white/80">Increase in patient volume</span>
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 leading-relaxed text-gray-300 font-normal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Reduce burnout, enhance patient care, and reclaim your time. Discover how S10.AI can be tailored to your practice's unique needs.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="#" 
            className="bg-black border-2 border-white text-white font-medium py-3 px-6 sm:py-4 sm:px-10 md:px-12 rounded-lg shadow-lg text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="h-5 w-5" />
            Schedule Your Demo
          </motion.a>
          
          <motion.a 
            href="#" 
            className="bg-black border border-white/70 text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="h-5 w-5" />
            View ROI Case Studies
          </motion.a>
        </motion.div>
        
        <motion.p 
          className="mt-6 text-sm sm:text-md text-gray-400 font-normal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Same-day demo appointments available. <a href="#" className="underline hover:text-teal-300 transition-colors">Contact our specialists</a> with any questions.
        </motion.p>
      </div>
    </section>
  );
};
