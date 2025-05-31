
import React from 'react';
import { motion } from 'framer-motion';
import { GridMotion } from '@/components/ui/grid-motion';
import { RefreshCw, MessageSquare, TrendingUp, Activity, Brain, Gauge } from 'lucide-react';

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
      <span className="text-xs font-medium text-white">AI Learning</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <TrendingUp className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Continuous Improvement</span>
    </div>,
    <div className="flex flex-col items-center gap-2">
      <Gauge className="w-6 h-6 text-teal-400" />
      <span className="text-xs font-medium text-white">Quality Control</span>
    </div>,
    "Feedback Loops",
    "User Insights",
    "Workflow Refinement",
    "Physician Styles",
    "Model Updates",
    "Medical Knowledge",
    "New Data",
    "Performance Tracking",
    "Deviation Detection",
    "Sustained Accuracy",
    "Continuous Learning",
    "Real-time Monitoring",
    "Quality Metrics",
    "System Optimization",
    "Accuracy Maintenance",
    "Clinical Validation",
    "Expert Review",
    "Ongoing Commitment",
    "Peak Performance",
    "Excellence Standards",
    "Innovation Drive"
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
              Sustaining Peak Accuracy: Our Ongoing Commitment
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl leading-relaxed text-white/80 mb-8"
            >
              Accuracy is a continuous pursuit
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
            >
              <div className="bg-black border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Clinician Feedback Loops</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  User feedback is integral to refining our models for specific workflows and physician styles.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Regular Model Updates</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  We consistently update our AI with new medical knowledge and data to maintain cutting-edge accuracy.
                </p>
              </div>

              <div className="bg-black border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-500/40 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Performance Monitoring</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Systems are in place to monitor performance and flag any deviations, ensuring sustained accuracy.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Grid Motion */}
      <div className="absolute inset-0 opacity-30">
        <GridMotion 
          items={sustainingItems}
          gradientColor="rgba(20, 184, 166, 0.1)"
          className="h-full"
        />
      </div>
    </section>
  );
};

export default SustainingAccuracySection;
