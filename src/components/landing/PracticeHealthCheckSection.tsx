
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Stethoscope, TrendingUp, Heart, CheckCircle, BarChart3, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeHealthCheckSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-b from-white to-[#F5F9FF] border border-[#E1EFFF] shadow-xl rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
            
            {/* Left side - Improved Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Main Score Circle */}
                <div className="relative">
                  <div className="w-48 h-48 relative">
                    <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
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
                        className="text-5xl font-bold text-[#143151] mb-2"
                      >
                        85
                      </motion.span>
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="text-sm font-medium text-[#387E89] uppercase tracking-wide"
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
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-600">Above Average</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    animate={{ y: [-3, 3, -3] }}
                    viewport={{ once: true }}
                    className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center shadow-lg"
                    style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    animate={{ y: [3, -3, 3] }}
                    viewport={{ once: true }}
                    className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-[#387E89] to-[#5192AE] rounded-full flex items-center justify-center shadow-lg"
                    style={{ animationDuration: '4s', animationIterationCount: 'infinite', animationDelay: '1s' }}
                  >
                    <TrendingUp className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-3 mt-8"
                >
                  <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-[#E1EFFF] shadow-sm">
                    <BarChart3 className="w-5 h-5 text-[#143151] mx-auto mb-1" />
                    <div className="text-lg font-bold text-[#143151]">92%</div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>

                  <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-[#E1EFFF] shadow-sm">
                    <Users className="w-5 h-5 text-[#387E89] mx-auto mb-1" />
                    <div className="text-lg font-bold text-[#387E89]">78%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>

                  <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-[#E1EFFF] shadow-sm">
                    <Stethoscope className="w-5 h-5 text-[#5192AE] mx-auto mb-1" />
                    <div className="text-lg font-bold text-[#5192AE]">85%</div>
                    <div className="text-xs text-gray-600">Care Quality</div>
                  </div>
                </motion.div>

                {/* Bottom CTA Hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  viewport={{ once: true }}
                  className="text-center mt-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 rounded-full border border-[#387E89]/20">
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
        </Card>
      </div>
    </section>
  );
};

export default PracticeHealthCheckSection;
