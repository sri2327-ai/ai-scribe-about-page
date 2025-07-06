
import React from 'react';
import { motion } from 'framer-motion';
import { ProductCarousel } from './ProductCarousel';

export const FourthSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Content */}
        <motion.div 
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 lg:mb-12"
        >
          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#143151] mb-3 sm:mb-4 lg:mb-6 leading-tight px-2 sm:px-0"
            style={{ lineHeight: '1.15' }}
          >
            <span className="block sm:inline">Software Solutions with </span>
            <span className="block sm:inline bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
              Ambient AI
            </span>
            <span className="block sm:inline">—Built to Power Your </span>
            <span className="block sm:inline text-[#387E89]">Healthcare Practice</span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-4 sm:px-2 mb-4 sm:mb-6"
          >
            Our AI solutions streamline medical workflows and improve patient care through intelligent automation. 
            <span className="block mt-2 sm:inline sm:mt-0"> Designed specifically for clinicians, these tools adapt to your specialty and integrate seamlessly with your existing systems.</span>
          </motion.p>

          {/* Enhanced Feature Highlights */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-2"
          >
            {[
              { label: "Real-time AI Scribe", icon: "🎯" },
              { label: "EHR Integration", icon: "🔗" },
              { label: "Specialty-Specific", icon: "⚕️" },
              { label: "HIPAA Compliant", icon: "🔒" }
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
              >
                <span className="text-xs sm:text-sm">{feature.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Product Carousel */}
        <motion.div 
          variants={itemVariants}
          className="w-full mb-6 sm:mb-8 lg:mb-12"
        >
          <ProductCarousel />
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200/30 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">
              Ready to see how our AI solutions can transform your practice?
            </p>
            <motion.button
              onClick={() => window.open('/contact', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Explore Solutions</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FourthSection;
