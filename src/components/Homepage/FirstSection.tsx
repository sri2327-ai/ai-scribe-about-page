
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FirstSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              AI-Powered Healthcare Documentation
            </h1>
            <p className="text-xl text-gray-600">
              Experience the fastest AI medical scribe that converts conversations into precise clinical notes. Reduce administrative work and focus on patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contactus" 
                className="bg-tealBlue hover:bg-tealBlueBright text-white px-8 py-3 rounded-full text-lg font-medium transition-colors inline-block text-center"
              >
                Book a Demo
              </Link>
              <Link 
                to="/solutions/crush" 
                className="border border-tealBlue text-tealBlue hover:bg-gray-50 px-8 py-3 rounded-full text-lg font-medium transition-colors inline-block text-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="/ImprovePatientCare.webp" 
              alt="AI Medical Scribe" 
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
