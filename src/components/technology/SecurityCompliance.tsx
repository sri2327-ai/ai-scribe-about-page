
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
    name: "HIPAA, GDPR, & PIPEDA Compliant",
    description: "Meets global healthcare data standards.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    name: "ISO 27001 Certified",
    description: "Industry-leading information security management.",
    icon: Shield,
  },
  {
    id: 3,
    name: "SOC-2 Audit in Progress",
    description: "Ensuring AICPA compliance for trust & transparency.",
    icon: ShieldAlert,
  },
  {
    id: 4,
    name: "No Data Storage",
    description: "Real-time transcription with automatic erasure.",
    icon: Database,
  },
  {
    id: 5,
    name: "Multi-Factor Authentication",
    description: "Secured access at every level with encryption.",
    icon: Lock,
  },
  {
    id: 6,
    name: "Risk Management",
    description: "Only authorized personnel can view data.",
    icon: Users,
  },
  {
    id: 7,
    name: "Hosted in the US & Canada",
    description: "Complies with federal & state regulations.",
    icon: Globe,
  },
];

const SecurityCompliance = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
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
            is protected by the highest standards in the industry. Hover over each icon to learn more.
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
