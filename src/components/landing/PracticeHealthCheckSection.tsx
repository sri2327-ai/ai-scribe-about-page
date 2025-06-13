
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Stethoscope, TrendingUp, Heart, CheckCircle, BarChart3, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeHealthCheckSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-b from-white to-[#F5F9FF] border border-[#E1EFFF] shadow-xl rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center p-6 sm:p-8 lg:p-10">
            
            {/* Left side - Improved Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center items-center order-2 lg:order-1"
            >
              <div className="relative flex flex-col items-center">
                {/* Main Score Circle */}
                <div className="relative mb-4">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 relative">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#E5E7EB"
                        strokeWidth="4"
                        fill="none"
                        className="drop-shadow-sm"
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#healthGradient)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${85 * 2.51} ${(100 - 85) * 2.51}`}
                        initial={{ strokeDasharray: "0 251.2" }}
                        whileInView={{ strokeDasharray: `${85 * 2.51} ${(100 - 85) * 2.51}` }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="drop-shadow-lg"
                      />
                      <defs>
                        <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#143151" />
                          <stop offset="50%" stopColor="#387E89" />
                          <stop offset="100%" stopColor="#5192AE" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Score Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.span 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1, ease: "backOut" }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-1"
                      >
                        85
                      </motion.span>
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="text-xs font-medium text-[#387E89] uppercase tracking-wide"
                      >
                        Excellent
                      </motion.span>
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-1 mt-1"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-600">Above Average</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    animate={{ 
                      y: [-3, 3, -3],
                      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    viewport={{ once: true }}
                    className="absolute -top-2 -right-2 w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    animate={{ 
                      y: [3, -3, 3],
                      transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                    }}
                    viewport={{ once: true }}
                    className="absolute -bottom-2 -left-2 w-6 h-6 lg:w-7 lg:h-7 bg-gradient-to-r from-[#387E89] to-[#5192AE] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <TrendingUp className="w-3 h-3 text-white" />
                  </motion.div>
                </div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-xs"
                >
                  <div className="text-center p-2 bg-white/80 backdrop-blur-sm rounded-lg border border-[#E1EFFF] shadow-sm">
                    <BarChart3 className="w-4 h-4 text-[#143151] mx-auto mb-1" />
                    <div className="text-sm font-bold text-[#143151]">92%</div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>

                  <div className="text-center p-2 bg-white/80 backdrop-blur-sm rounded-lg border border-[#E1EFFF] shadow-sm">
                    <Users className="w-4 h-4 text-[#387E89] mx-auto mb-1" />
                    <div className="text-sm font-bold text-[#387E89]">78%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>

                  <div className="text-center p-2 bg-white/80 backdrop-blur-sm rounded-lg border border-[#E1EFFF] shadow-sm">
                    <Stethoscope className="w-4 h-4 text-[#5192AE] mx-auto mb-1" />
                    <div className="text-sm font-bold text-[#5192AE]">85%</div>
                    <div className="text-xs text-gray-600">Care Quality</div>
                  </div>
                </motion.div>

                {/* Bottom CTA Hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  viewport={{ once: true }}
                  className="text-center mt-4"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 rounded-full border border-[#387E89]/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-[#143151]">5 Questions • 2 Minutes</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 lg:space-y-6 order-1 lg:order-2 text-center lg:text-left"
            >
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 lg:mb-4 leading-tight"
                >
                  Assess Your Practice's Health
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
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
                className="flex justify-center lg:justify-start"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-sm"
                  asChild
                >
                  <Link to="/practice-efficiency-grader" className="flex items-center gap-2">
                    <span className="whitespace-nowrap">Try the AI Practice Health Check</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              {/* Additional Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 lg:pt-6"
              >
                <div className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#143151]" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#143151]">Provider Well-being</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#387E89]/10 to-[#5192AE]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#387E89]" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#387E89]">Financial Performance</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#5192AE]/10 to-[#A5CCF3]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-[#5192AE]" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#5192AE]">Patient Care</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PracticeHealthCheckSection;
