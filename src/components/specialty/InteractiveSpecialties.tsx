
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Stethoscope, FileText, Code, Eye } from 'lucide-react';
import { specialtyData } from './specialtyData';

const InteractiveSpecialties = () => {
  const [expandedSpecialty, setExpandedSpecialty] = useState<string | null>(null);

  const toggleSpecialty = (specialty: string) => {
    setExpandedSpecialty(expandedSpecialty === specialty ? null : specialty);
  };

  const scrollToNoteComparison = () => {
    const noteSection = document.getElementById('note-comparison-section');
    if (noteSection) {
      noteSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
            Specialty-Specific AI Documentation
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore how S10.AI adapts to your medical specialty with tailored documentation templates, 
            specialty-specific terminology, and optimized workflow patterns.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {specialtyData.map((specialty, index) => (
            <motion.div
              key={specialty.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => toggleSpecialty(specialty.name)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center text-white">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#143151] mb-1">
                        {specialty.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Click to explore specialty-specific features
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSpecialty === specialty.name ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedSpecialty === specialty.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-4 sm:p-6">
                        {/* Description */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#143151] mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            Specialty Overview
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {specialty.description}
                          </p>
                        </div>

                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#143151] mb-3">
                            Key AI Features
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {specialty.keyFeatures.map((feature, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <div className="w-2 h-2 rounded-full bg-[#387E89] mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Common Procedures */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#143151] mb-3">
                            Common Procedures & Documentation
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {specialty.commonProcedures.map((procedure, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                              >
                                {procedure}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* ICD-10 Codes */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#143151] mb-3 flex items-center">
                            <Code className="w-5 h-5 mr-2" />
                            Common ICD-10 Codes
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {specialty.icd10Codes.map((code, idx) => (
                              <div key={idx} className="text-sm text-gray-700 font-mono bg-gray-50 p-2 rounded">
                                <span className="font-semibold text-[#143151]">{code.code}:</span> {code.description}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* View Sample Note Button */}
                        <div className="pt-4 border-t border-gray-200">
                          <button
                            onClick={scrollToNoteComparison}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-semibold rounded-lg hover:from-[#0d1f31] hover:to-[#2c6269] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            <Eye className="w-5 h-5 mr-2" />
                            View Sample Note
                          </button>
                          {!specialty.hasNoteExample && (
                            <p className="text-sm text-gray-500 mt-2 italic">
                              * Sample notes for this specialty are being developed. Contact us for specialty-specific templates.
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSpecialties;
