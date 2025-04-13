
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
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Uncompromising Security & Compliance
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our platform is built with security-first architecture, ensuring your medical data 
            is protected by the highest standards in the industry.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <AnimatedIconTooltip items={securityItems} />
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
