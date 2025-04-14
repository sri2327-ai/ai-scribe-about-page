
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SixthSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const specialties = [
    { name: 'Primary Care', description: 'Streamlined documentation for family medicine and general practice' },
    { name: 'Psychiatry', description: 'Specialized mental health notes with nuanced terminology' },
    { name: 'Cardiology', description: 'Precise cardiovascular documentation with accurate medical terms' },
    { name: 'Orthopedics', description: 'Detailed musculoskeletal assessments and treatment notes' },
    { name: 'Pediatrics', description: 'Age-appropriate documentation for children of all ages' },
    { name: 'Dermatology', description: 'Visual findings and treatment protocols properly documented' },
    { name: 'Neurology', description: 'Complex neurological assessments captured accurately' },
    { name: 'OB/GYN', description: "Specialized women's health documentation and terminology" }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Tailored for Your Specialty</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            S10.AI is designed to understand the unique terminology, workflows, and documentation 
            requirements across different medical specialties.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={isMounted ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">{specialty.name}</h3>
              <p className="text-gray-600">{specialty.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={isMounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link to="/specialties" className="inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-full transition-colors">
              View All Specialties
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SixthSection;
