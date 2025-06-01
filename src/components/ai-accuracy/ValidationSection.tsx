
import React from 'react';
import { motion } from 'framer-motion';
import { GridMotion } from '@/components/ui/grid-motion';
import { CheckCircle, Target, BarChart3, Users, Shield, Zap, Lock } from 'lucide-react';
import { Spotlight } from '@/components/ui/spotlight';

const ValidationSection: React.FC = () => {
  const validationItems = [
    <div className="flex flex-col items-center gap-2">
      <Target className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Clinical Gold Standards</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <BarChart3 className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Word Error Rate</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <CheckCircle className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">F1 Scores</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <Users className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Expert Coders</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <Shield className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Privacy First</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <Lock className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">No Data Storage</span>
    </div>,
    "99% Accuracy",
    "Benchmarking",
    "Validation",
    "Clinical Notes",
    "Expert Review",
    "Gold Standards",
    "Privacy Protection",
    "No Data Training",
    "Secure Processing",
    "HIPAA Compliant",
    "Data Security",
    "Zero Storage",
    "Private AI",
    "Encrypted",
    "Secure",
    "Protected"
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
              Validation: Our Rigorous Approach to Ensuring Accuracy
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 mb-6 sm:mb-8 text-center"
            >
              We build trust through transparent and robust validation while protecting your data
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
            >
              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Clinical Gold Standards</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  C.R.U.S.H. notes are benchmarked against notes meticulously prepared or reviewed by clinical experts and physicians.
                </p>
              </div>
              
              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Established Metrics</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  We use metrics like Word Error Rate (transcription) and F1 scores (information extraction), comparing AI-suggested codes against expert coders.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Contextualized Results</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  We provide clear context for our accuracy claims across thousands of encounters in diverse specialties.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Quality Assurance</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Human oversight in model validation and findings from pilot programs confirm our accuracy in real-world clinical settings.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Privacy-First Validation</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  S10.ai does not store customer data or use it for model training. All validation is performed securely without compromising patient privacy.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300 w-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Secure Testing Environment</h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Real-world testing occurs in controlled, HIPAA-compliant environments with encrypted data processing and immediate deletion after validation.
                </p>
              </div>
            </motion.div>

            {/* Data Privacy Emphasis */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 rounded-xl p-4 sm:p-6 backdrop-blur-sm w-full"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-teal-400" />
                <h3 className="text-lg sm:text-xl font-semibold text-white">Privacy Commitment</h3>
              </div>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed text-center">
                S10.ai operates on a zero-data-storage principle. We do not retain, store, or use customer data for model training purposes. All processing is performed in real-time with immediate secure deletion, ensuring complete patient privacy and HIPAA compliance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Grid Motion */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <GridMotion 
          items={validationItems}
          gradientColor="rgba(20, 184, 166, 0.1)"
          className="h-full w-full"
        />
      </div>
    </section>
  );
};

export default ValidationSection;
