
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ChartLine, Users, Calendar, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: <TrendingUp className="w-8 h-8 text-[#387E89]" />, label: 'Increase Earnings' },
    { icon: <ChartLine className="w-8 h-8 text-[#387E89]" />, label: 'Enhance Clinical Accuracy' },
    { icon: <Users className="w-8 h-8 text-[#387E89]" />, label: 'Improve Patient Engagement' },
    { icon: <Calendar className="w-8 h-8 text-[#387E89]" />, label: 'Overcome Staffing Shortages' },
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
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <Box className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-[#143151] to-[#387E89] rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Typography variant="h3" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Transform Your Practice with <span className="text-yellow-300">S10.AI</span>
            </Typography>
            <Typography className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Experience the future of healthcare where AI works seamlessly with your team, enhancing efficiency and patient care.
            </Typography>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform transition-transform hover:scale-105"
              >
                <div className="bg-white/90 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <Typography className="font-semibold text-lg">
                  {feature.label}
                </Typography>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Typography className="text-xl sm:text-2xl mb-8 font-light">
              Join the healthcare revolution with <span className="font-bold">S10.AI</span>
            </Typography>
            <Button 
              variant="contained"
              className="bg-white text-[#143151] hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform transition-all hover:scale-105 shadow-xl"
            >
              Book A Demo
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    </section>
  );
};

export default HeroSection;
