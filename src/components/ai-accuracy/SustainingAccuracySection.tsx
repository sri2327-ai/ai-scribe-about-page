
import React from 'react';
import { motion } from 'framer-motion';
import { GridMotion } from '@/components/ui/grid-motion';
import { RefreshCw, MessageSquare, TrendingUp, Activity, Brain, Gauge, Shield, Lock } from 'lucide-react';
import { Spotlight } from '@/components/ui/spotlight';

const SustainingAccuracySection: React.FC = () => {
  const sustainingItems = [
    <div className="flex flex-col items-center gap-2">
      <MessageSquare className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Clinician Feedback</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <RefreshCw className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Model Updates</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <Activity className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Performance Monitoring</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <Brain className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Privacy-First AI</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <Shield className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Secure Learning</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <Lock className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Zero Storage</span>
    </div>,
    "Feedback Loops",
    "User Insights",
    "Workflow Refinement",
    "Physician Styles",
    "Privacy First",
    "Secure Updates",
    "Zero Storage",
    "Protected Learning",
    "Encrypted Processing",
    "HIPAA Compliant",
    "Data Security",
    "Private AI",
    "Secure Enhancement",
    "Privacy Protection",
    "Anonymous Feedback",
    "Encrypted Channels"
  ];

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
    <section className="relative w-full bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight fill="rgba(20, 184, 166, 0.08)" className="z-0" />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white leading-tight text-center"
            >
              Sustaining Peak Accuracy: Our Privacy-First Commitment
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 mb-6 sm:mb-8 text-center"
            >
              Continuous improvement without compromising data privacy
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
            >
              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Anonymous Feedback Loops</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  User feedback is collected through encrypted channels without storing personal or patient data, enabling refinement for specific workflows.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Secure Model Updates</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  We update our AI with new medical knowledge from public datasets and research, never using customer data for training or improvement.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Privacy-Compliant Monitoring</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Performance monitoring systems track anonymized metrics without accessing or storing patient information, ensuring sustained accuracy.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Privacy-First AI Learning</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Our AI continuously learns from publicly available medical literature and research, maintaining cutting-edge accuracy without accessing customer data.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Encrypted Processing</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  All data processing occurs in encrypted environments with immediate deletion after processing, ensuring zero data retention.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Zero Data Storage</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  S10.ai operates on a strict no-storage policy. Customer data is processed in real-time and immediately purged from all systems.
                </p>
              </div>
            </motion.div>

            {/* Enhanced Privacy Promise */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-xl p-4 sm:p-6 backdrop-blur-sm w-full"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Lock className="w-6 h-6 text-green-400" />
                <h3 className="text-lg sm:text-xl font-semibold text-white">Data Privacy Guarantee</h3>
              </div>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed text-center">
                We maintain peak accuracy through privacy-preserving techniques. S10.ai never stores customer data, never uses patient information for model training, and processes all data with end-to-end encryption before immediate secure deletion. Your data privacy is our unwavering commitment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Grid Motion */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <GridMotion 
          items={sustainingItems}
          gradientColor="rgba(20, 184, 166, 0.1)"
          className="h-full w-full"
        />
      </div>
    </section>
  );
};

export default SustainingAccuracySection;
