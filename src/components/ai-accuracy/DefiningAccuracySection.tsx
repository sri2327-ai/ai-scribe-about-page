
import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Users, Brain } from 'lucide-react';

const DefiningAccuracySection: React.FC = () => {
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

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const solutions = [
    {
      title: "C.R.U.S.H. (AI Medical Scribe)",
      icon: Stethoscope,
      features: [
        "Transcription Accuracy: Faithfully capturing spoken interactions.",
        "EHR Context Integration: Correctly understanding and leveraging relevant patient data from your EHR.",
        "Clinical Note Accuracy: Generating medically precise and contextually relevant notes, including accurate capture of medical terms, dosages, and findings.",
        "Predicted Problems Accuracy: Offering clinically relevant suggestions for potential diagnoses based on the encounter and EHR data, benchmarked against physician assessments.",
        "Predicted Orders Accuracy: Suggesting appropriate medical orders (tests, prescriptions, referrals) aligned with clinical best practices and patient specifics.",
        "Coding Accuracy (HCC, CPT, ICD-10, E/M): Ensuring suggested codes accurately reflect the documented encounter and services."
      ]
    },
    {
      title: "B.R.A.V.O. (AI Staffing Agent)",
      icon: Users,
      features: [
        "Information Accuracy: Delivering correct information to patients (e.g., appointment details, instructions).",
        "Task Completion Accuracy: Reliably completing automated tasks like scheduling and data capture."
      ]
    },
    {
      title: "Platform-Wide AI",
      icon: Brain,
      features: [
        "Across our platform, we prioritize accuracy in critical functions like data extraction from faxes and forms, summarization of medical records, pre-charting assistance, and AI-driven order generation."
      ]
    }
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 sm:py-24 lg:py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-white leading-tight text-center"
          >
            Defining S10.ai Accuracy
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl leading-relaxed text-white/60 max-w-3xl mx-auto text-center mb-16"
          >
            Clarity for Clinical Confidence
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed text-white/80 max-w-4xl mx-auto text-center mb-16"
          >
            We ensure our definition of accuracy is specific and measurable across our solutions:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-500/20 rounded-xl">
                    <solution.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {solution.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DefiningAccuracySection;
