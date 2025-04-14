
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const NinthSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const faqs = [
    {
      question: "How does S10.AI's medical scribe technology work?",
      answer: "S10.AI's CRUSH technology listens to patient-provider conversations in real-time, transcribes the dialogue, and converts it into structured clinical notes using advanced natural language processing. The system integrates with your EHR, automatically populating relevant fields and saving providers hours of documentation time."
    },
    {
      question: "Is S10.AI HIPAA compliant?",
      answer: "Absolutely. S10.AI is fully HIPAA compliant, with end-to-end encryption, secure data storage, and strict access controls. We undergo regular security audits and maintain compliance with all healthcare data protection regulations."
    },
    {
      question: "Which EHR systems does S10.AI integrate with?",
      answer: "S10.AI integrates with all major EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, Allscripts, and many others. Our team can work with you to ensure smooth integration with your specific EHR configuration."
    },
    {
      question: "How long does implementation take?",
      answer: "Typical implementation takes 2-4 weeks, depending on your organization's size and requirements. Our team provides comprehensive training and support throughout the process to ensure a smooth transition."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about S10.AI's solutions.
          </p>
        </motion.div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="/resources/faq"
            className="text-blue-500 font-medium hover:underline inline-flex items-center"
          >
            View more FAQs 
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NinthSection;
