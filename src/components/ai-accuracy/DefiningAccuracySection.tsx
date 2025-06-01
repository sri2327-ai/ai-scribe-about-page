import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Users, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/spotlight';

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
        "Transcription Accuracy: Faithfully capturing spoken interactions without data storage.",
        "EHR Context Integration: Understanding patient data securely without retention.",
        "Clinical Note Accuracy: Generating precise notes with immediate secure deletion.",
        "Predicted Problems Accuracy: Offering clinically relevant suggestions through privacy-preserving AI.",
        "Predicted Orders Accuracy: Suggesting appropriate medical orders without storing patient information.",
        "Coding Accuracy (HCC, CPT, ICD-10, E/M): Ensuring accurate codes while maintaining complete data privacy."
      ],
      colSpan: 2,
    },
    {
      title: "B.R.A.V.O.",
      description: "AI Staffing Agent",
      icon: <Users className="w-5 h-5 text-white" />,
      features: [
        "Information Accuracy: Delivering correct information through secure, encrypted processing.",
        "Task Completion Accuracy: Reliably completing automated tasks without storing customer data."
      ]
    },
    {
      title: "Platform-Wide AI",
      description: "Privacy-First Accuracy",
      icon: <Brain className="w-5 h-5 text-white" />,
      features: [
        "Across our platform, we prioritize accuracy while maintaining strict data privacy. All functions including data extraction, summarization, pre-charting, and AI-driven order generation operate with zero data storage and immediate secure deletion."
      ],
      colSpan: 2,
    }
  ];

  return (
    <section className="relative w-full bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight fill="rgba(20, 184, 166, 0.08)" className="z-0" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 text-white leading-tight text-center"
          >
            Defining S10.AI Accuracy
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl leading-relaxed text-white/60 max-w-3xl mx-auto text-center mb-6 sm:mb-8"
          >
            Privacy-First Clinical Confidence
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 max-w-4xl mx-auto text-center mb-8 sm:mb-12"
          >
            We ensure our definition of accuracy is specific and measurable across our solutions while maintaining complete data privacy:
          </motion.p>

          {/* Mobile-first responsive grid */}
          <div className="w-full space-y-4 sm:space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {accuracyItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className={cn(
                  "group relative w-full p-4 sm:p-6 rounded-xl overflow-hidden transition-all duration-300",
                  "border border-white/10 bg-white/5 backdrop-blur-sm",
                  "hover:shadow-[0_2px_12px_rgba(20,184,166,0.2)]",
                  "hover:-translate-y-0.5 will-change-transform hover:bg-teal-500/10 hover:border-teal-500/40",
                  // Mobile-first column spans
                  item.colSpan === 2 ? "lg:col-span-2" : "lg:col-span-1"
                )}
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05)_1px,transparent_1px)] bg-[length:4px_4px]" />
                </div>

                <div className="relative flex flex-col space-y-3 sm:space-y-4 w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm bg-white/10 text-white/80 transition-colors duration-300 group-hover:bg-teal-500/20 group-hover:text-white flex-shrink-0">
                      AI Solution
                    </span>
                  </div>

                  <div className="space-y-2 w-full">
                    <h3 className="font-semibold text-white tracking-tight text-base sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-snug font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4 w-full">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2 sm:gap-3 w-full">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0 opacity-60"></div>
                        <p className="text-xs sm:text-sm leading-relaxed text-white/70 group-hover:text-white/80 transition-colors duration-300 break-words">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-teal-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DefiningAccuracySection;
