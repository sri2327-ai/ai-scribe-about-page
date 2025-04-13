
import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  FileCheck, 
  UserCheck
} from "lucide-react";
import SecurityStackedCards from "@/components/ui/security-stacked-cards";

const ProjectSetupChecklist = () => {
  // Define the security items for the stacked cards
  const securityCards = [
    {
      icon: Lock,
      title: "Encrypted by Default",
      description: "All data is protected with end-to-end encryption—whether at rest or in transit."
    },
    {
      icon: FileCheck,
      title: "Built for Compliance",
      description: "Follows HIPAA, GDPR, PIPEDA standards with secure, certified infrastructure."
    },
    {
      icon: UserCheck,
      title: "Access Control",
      description: "Only you can access your data. Our team sees it only if you ask for help."
    },
    {
      icon: Shield,
      title: "Privacy-First Processing",
      description: "Personal details are stripped before processing to keep data anonymous."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-blue-950/30 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            How S10.AI Keeps Your Data Safe
          </h2>
          <p className="text-blue-100/80 max-w-3xl mx-auto">
            Our platform comes with these security measures by default
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <SecurityStackedCards cards={securityCards} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSetupChecklist;
