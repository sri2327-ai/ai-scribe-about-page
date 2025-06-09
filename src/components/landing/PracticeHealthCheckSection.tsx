
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Stethoscope, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeHealthCheckSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Illustration/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="relative p-8 bg-gradient-to-br from-white to-[#F5F9FF] border-0 shadow-xl overflow-hidden">
              {/* Score Circle */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto relative">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${85 * 2.51} ${(100 - 85) * 2.51}`}
                      initial={{ strokeDasharray: "0 251" }}
                      whileInView={{ strokeDasharray: `${85 * 2.51} ${(100 - 85) * 2.51}` }}
                      transition={{ duration: 2, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#143151" />
                        <stop offset="100%" stopColor="#387E89" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs text-gray-500 mb-1">Your score</span>
                    <span className="text-3xl font-bold text-[#143151]">85</span>
                    <span className="text-sm font-medium text-[#387E89]">GOOD</span>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-4 right-4 space-y-2">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-12 h-8 bg-gradient-to-r from-[#387E89]/20 to-[#5192AE]/20 rounded-lg"
                />
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="w-12 h-8 bg-gradient-to-r from-[#5192AE]/20 to-[#A5CCF3]/20 rounded-lg"
                />
              </div>

              {/* Doctor Image Placeholder */}
              <div className="mt-8 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#143151]/10 to-[#387E89]/10 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-12 h-12 text-[#387E89]" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center"
                  >
                    <Heart className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 left-4 opacity-20">
                <TrendingUp className="w-6 h-6 text-[#387E89]" />
              </div>
            </Card>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-[#143151] mb-6 leading-tight"
              >
                Assess Your Practice's Health
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Explore how your practice measures up with our 5-question AI Practice Health Check. 
                Gain insights into provider well-being, financial performance, and patient care—helping 
                you address inefficiencies and enhance operations in just a few minutes.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link to="/practice-efficiency-grader" className="flex items-center gap-3">
                  Try the AI Practice Health Check
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Additional Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-[#143151]" />
                </div>
                <p className="text-sm font-medium text-[#143151]">Provider Well-being</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#387E89]/10 to-[#5192AE]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-[#387E89]" />
                </div>
                <p className="text-sm font-medium text-[#387E89]">Financial Performance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5192AE]/10 to-[#A5CCF3]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Stethoscope className="w-6 h-6 text-[#5192AE]" />
                </div>
                <p className="text-sm font-medium text-[#5192AE]">Patient Care</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PracticeHealthCheckSection;
