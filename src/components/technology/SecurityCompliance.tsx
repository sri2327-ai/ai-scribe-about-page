
import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  Database, 
  Lock, 
  Users, 
  Globe 
} from "lucide-react";
import { AnimatedIconTooltip } from "@/components/ui/animated-icon-tooltip";
import StarParticles from "@/components/ui/star-particles";

const securityItems = [
  {
    id: 1,
    name: "HIPAA Compliant",
    description: "Meets US healthcare standards",
    icon: Shield,
  },
  {
    id: 2,
    name: "GDPR Compliant",
    description: "European data protection standards",
    icon: ShieldAlert,
  },
  {
    id: 3,
    name: "PIPEDA Compliant",
    description: "Canadian privacy regulations",
    icon: ShieldCheck,
  },
  {
    id: 4,
    name: "ISO 27001 Certified",
    description: "Information security management",
    icon: Shield,
  },
  {
    id: 5,
    name: "No Data Storage",
    description: "Automatic data erasure",
    icon: Database,
  },
  {
    id: 6,
    name: "Multi-Factor Authentication",
    description: "Secured access protocols",
    icon: Lock,
  },
  {
    id: 7,
    name: "Risk Management",
    description: "Authorized personnel only",
    icon: Users,
  },
  {
    id: 8,
    name: "Hosted in US & Canada",
    description: "Regional regulation compliance",
    icon: Globe,
  },
];

const SecurityCompliance = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Star particles background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111_0%,_#000_100%)] z-0"></div>
      <StarParticles starCount={150} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
            Uncompromising Security & Compliance
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our platform is built with security-first architecture, ensuring your medical data 
            is protected by the highest standards in the industry.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {securityItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-full max-w-[240px] aspect-[2/1] rounded-full bg-black border border-tealBlueBright/30 flex items-center justify-center mb-4">
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-white text-lg font-normal text-center">{item.name}</h3>
              <p className="text-gray-400 text-sm text-center mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
