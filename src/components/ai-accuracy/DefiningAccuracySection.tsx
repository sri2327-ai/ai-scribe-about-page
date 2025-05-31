import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Users, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccuracyItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  colSpan?: number;
}

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

  const accuracyItems: AccuracyItem[] = [
    {
      title: "C.R.U.S.H.",
      description: "AI Medical Scribe",
      icon: <Stethoscope className="w-5 h-5 text-white" />,
      features: [
        "Transcription Accuracy: Faithfully capturing spoken interactions.",
        "EHR Context Integration: Correctly understanding and leveraging relevant patient data from your EHR.",
        "Clinical Note Accuracy: Generating medically precise and contextually relevant notes, including accurate capture of medical terms, dosages, and findings.",
        "Predicted Problems Accuracy: Offering clinically relevant suggestions for potential diagnoses based on the encounter and EHR data, benchmarked against physician assessments.",
        "Predicted Orders Accuracy: Suggesting appropriate medical orders (tests, prescriptions, referrals) aligned with clinical best practices and patient specifics.",
        "Coding Accuracy (HCC, CPT, ICD-10, E/M): Ensuring suggested codes accurately reflect the documented encounter and services."
      ],
      colSpan: 2,
    },
    {
      title: "B.R.A.V.O.",
      description: "AI Staffing Agent",
      icon: <Users className="w-5 h-5 text-white" />,
      features: [
        "Information Accuracy: Delivering correct information to patients (e.g., appointment details, instructions).",
        "Task Completion Accuracy: Reliably completing automated tasks like scheduling and data capture."
      ]
    },
    {
      title: "Platform-Wide AI",
      description: "Comprehensive Accuracy",
      icon: <Brain className="w-5 h-5 text-white" />,
      features: [
        "Across our platform, we prioritize accuracy in critical functions like data extraction from faxes and forms, summarization of medical records, pre-charting assistance, and AI-driven order generation."
      ],
      colSpan: 2,
    }
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 sm:py-24 lg:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {accuracyItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className={cn(
                  "group relative p-6 rounded-xl overflow-hidden transition-all duration-300",
                  "border border-white/10 bg-white/5 backdrop-blur-sm",
                  "hover:shadow-[0_2px_12px_rgba(20,184,166,0.2)]",
                  "hover:-translate-y-0.5 will-change-transform hover:bg-teal-500/10 hover:border-teal-400/40",
                  item.colSpan || "col-span-1",
                  item.colSpan === 2 ? "md:col-span-2" : ""
                )}
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05)_1px,transparent_1px)] bg-[length:4px_4px]" />
                </div>

                <div className="relative flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm bg-white/10 text-white/80 transition-colors duration-300 group-hover:bg-teal-500/20 group-hover:text-white">
                      AI Solution
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-white tracking-tight text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-snug font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-3 mt-4">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0 opacity-60"></div>
                        <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/80 transition-colors duration-300">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-teal-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DefiningAccuracySection;
