
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ChartLine, Users, Calendar, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#387E89]" />, label: 'Increase Earnings' },
    { icon: <ChartLine className="w-6 h-6 md:w-8 md:h-8 text-[#387E89]" />, label: 'Enhance Clinical Accuracy' },
    { icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-[#387E89]" />, label: 'Improve Patient Engagement' },
    { icon: <Calendar className="w-6 h-6 md:w-8 md:h-8 text-[#387E89]" />, label: 'Overcome Staffing Shortages' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
      <Box className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-[#143151] to-[#387E89] rounded-2xl p-5 sm:p-6 md:p-10 lg:p-12 text-white shadow-2xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-6 md:mb-10">
            <Typography variant="h3" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Transform Your Practice with <span className="text-pink-500">S10.AI</span>
            </Typography>
            <Typography className="text-base opacity-90 max-w-3xl mx-auto text-center px-1">
              Experience the future of healthcare where AI works seamlessly with your team, enhancing efficiency and patient care.
            </Typography>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-5 text-center transform transition-transform hover:scale-105"
              >
                <div className="bg-white/90 rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center mx-auto mb-2 md:mb-3">
                  {feature.icon}
                </div>
                <Typography className="font-semibold text-sm md:text-base">
                  {feature.label}
                </Typography>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Typography className="text-base sm:text-lg mb-4 md:mb-6 font-light">
              Join the healthcare revolution with <span className="font-bold text-pink-500">S10.AI</span>
            </Typography>
            <button 
              className="bg-white rounded-full px-5 py-2.5 md:px-7 md:py-3.5 text-base
                border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300
                text-transparent bg-clip-text bg-gradient-to-r from-[#143151] to-[#387E89]
                hover:from-white hover:to-white shadow-xl"
            >
              Book A Demo
            </button>
          </motion.div>
        </motion.div>
      </Box>
    </section>
  );
};

export default HeroSection;
