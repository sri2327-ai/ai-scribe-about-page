
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SeventhSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const integrations = [
    { name: 'Epic', logo: '/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png' },
    { name: 'Cerner', logo: '/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png' },
    { name: 'Athenahealth', logo: '/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png' },
    { name: 'eClinicalWorks', logo: '/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png' },
    { name: 'NextGen', logo: '/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png' },
    { name: 'Allscripts', logo: '/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png' }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Seamless EHR Integration</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            S10.AI integrates with all major electronic health record systems, enabling you to 
            maintain your existing workflow while eliminating documentation headaches.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
          {integrations.map((system, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={isMounted ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-24 border border-gray-100"
            >
              {system.logo ? (
                <img src={system.logo} alt={system.name} className="max-h-10 max-w-full" />
              ) : (
                <span className="text-lg font-bold text-gray-700">{system.name}</span>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={isMounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gray-50 rounded-lg p-8"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Easy Implementation, Minimal Training</h3>
              <p className="text-gray-600 mb-4">
                Our integration specialists ensure a smooth setup process with your EHR system, 
                typically completed in less than a day. The intuitive interface requires minimal 
                training, and most providers are comfortable using S10.AI after just one patient visit.
              </p>
              <Link to="/integrations" className="inline-block">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded transition-colors">
                  Learn More About Integrations
                </button>
              </Link>
            </div>
            <div className="md:w-1/3">
              <img 
                src="/Psychotherapy-Documentation.png" 
                alt="EHR Integration Illustration" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeventhSection;
