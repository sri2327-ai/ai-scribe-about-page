
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const TechArchitecture = () => {
  const isMobile = useIsMobile();

  return (
    <section className={`${isMobile ? 'py-12' : 'py-20'} bg-black`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">System Architecture</h2>
          <p className="text-gray-300">
            Our technology stack combines cutting-edge AI models with secure, scalable infrastructure to deliver reliable performance in demanding healthcare environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-blue-950 to-black p-6 rounded-xl border border-blue-900/40"
          >
            <h3 className="text-xl text-white font-semibold mb-4">Frontend Layer</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Responsive clinician interfaces with real-time updates</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Progressive web application with offline capabilities</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Encrypted client-side storage for temporary data</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Voice recognition modules for hands-free operation</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-blue-900 to-blue-950 p-6 rounded-xl border border-blue-700/40"
          >
            <h3 className="text-xl text-white font-semibold mb-4">AI Processing Layer</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Custom-trained language models for medical terminology</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Neural networks for symptom classification and coding</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Healthcare-specific recommendation engines</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Auto-scaling inference services with load balancing</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-blue-950 to-black p-6 rounded-xl border border-blue-900/40"
          >
            <h3 className="text-xl text-white font-semibold mb-4">Backend Infrastructure</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>HIPAA-compliant data storage with geographical redundancy</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Microservices architecture for horizontal scaling</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Real-time analytics and monitoring systems</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Secure API gateways with multi-factor authentication</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechArchitecture;
