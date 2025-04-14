
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ThirdSection = () => {
  const features = [
    {
      title: "CRUSH - AI Medical Scribe",
      description: "Convert conversations into accurate clinical notes in real-time. Reduce administrative work by up to 80%.",
      icon: "📝",
      link: "/solutions/crush"
    },
    {
      title: "BRAVO - Patient Care AI",
      description: "Enhance patient engagement and follow-up care with our intelligent automated solutions.",
      icon: "👨‍⚕️",
      link: "/solutions/bravo"
    },
    {
      title: "EHR Integration",
      description: "Seamlessly integrates with major EHR systems including Epic, Cerner, and more.",
      icon: "🔄",
      link: "/integrations"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Our Healthcare AI Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Purpose-built AI tools designed for healthcare professionals to enhance productivity and patient care
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Link 
                to={feature.link} 
                className="text-tealBlue hover:text-tealBlueBright font-medium inline-flex items-center"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            to="/contactus" 
            className="bg-tealBlue hover:bg-tealBlueBright text-white px-8 py-3 rounded-full text-lg font-medium transition-colors inline-block"
          >
            Schedule a Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ThirdSection;
