
import React from 'react';
import { motion } from 'framer-motion';
import { GridMotion } from '@/components/ui/grid-motion';
import { CheckCircle, Target, BarChart3, Users, Shield, Zap } from 'lucide-react';

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
      <span className="text-xs font-medium text-white">Quality Assurance</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <Zap className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Real-World Testing</span>
    </div>,
    "99% Accuracy",
    "Benchmarking",
    "Validation",
    "Clinical Notes",
    "Expert Review",
    "Gold Standards",
    "Transcription",
    "Information Extraction",
    "AI-Generated",
    "Physician-Reviewed",
    "Diverse Specialties",
    "Thousands of Encounters",
    "Contextualized Figures",
    "Human Oversight",
    "Pilot Programs",
    "Third-Party Review",
    "Independent Validation",
    "Industry Standards",
    "Clinical Settings",
    "Quality Control",
    "Performance Metrics"
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
    <section className="relative w-full bg-black text-white min-h-screen">
      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-white leading-tight"
            >
              Validation: Our Rigorous Approach to Ensuring Accuracy
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl leading-relaxed text-white/80 mb-8"
            >
              We build trust through transparent and robust validation
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            >
              <div className="space-y-4">
                <div className="bg-black border border-white rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-3 text-white">Benchmarking to Clinical Gold Standards</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    C.R.U.S.H. notes are benchmarked against notes meticulously prepared or reviewed by clinical experts and physicians.
                  </p>
                </div>
                
                <div className="bg-black border border-white rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-3 text-white">Key Metrics</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We use established metrics like Word Error Rate (transcription) and F1 scores (information extraction), comparing AI-suggested codes against expert coders.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black border border-white rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-3 text-white">Contextualized Accuracy Figures</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We provide clear context for our accuracy claims across thousands of encounters in diverse specialties.
                  </p>
                </div>
                
                <div className="bg-black border border-white rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-3 text-white">Quality Assurance & Real-World Testing</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Human oversight in model validation and findings from pilot programs confirm our accuracy in real-world clinical settings.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Grid Motion */}
      <div className="absolute inset-0 opacity-30">
        <GridMotion 
          items={validationItems}
          gradientColor="rgba(20, 184, 166, 0.1)"
          className="h-full"
        />
      </div>
    </section>
  );
};

export default ValidationSection;
