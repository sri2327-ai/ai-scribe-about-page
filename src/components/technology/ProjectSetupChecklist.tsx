
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, UserCheck } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";

const ProjectSetupChecklist = () => {
  // Define the security cards
  const securityCards = [
    {
      icon: <Lock className="h-5 w-5 text-blue-300" />,
      title: "Encrypted by Default",
      description: "All data is protected with end-to-end encryption—whether at rest or in transit.",
      titleClassName: "text-white",
      className: "[grid-area:stack] hover:-translate-y-6 transition-all duration-300 cursor-pointer",
    },
    {
      icon: <FileCheck className="h-5 w-5 text-blue-300" />,
      title: "Built for Compliance",
      description: "Follows HIPAA, GDPR, PIPEDA standards with secure, certified infrastructure.",
      titleClassName: "text-white",
      className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 transition-all duration-300 cursor-pointer",
    },
    {
      icon: <UserCheck className="h-5 w-5 text-blue-300" />,
      title: "Access Control",
      description: "Only you can access your data. Our team sees it only if you ask for help.",
      titleClassName: "text-white",
      className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 transition-all duration-300 cursor-pointer",
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-300" />,
      title: "Privacy-First Processing",
      description: "Personal details are stripped before processing to keep data anonymous.",
      titleClassName: "text-white",
      className: "[grid-area:stack] translate-x-36 translate-y-30 hover:translate-y-20 transition-all duration-300 cursor-pointer",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
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
          className="flex justify-center"
        >
          <div className="min-h-[550px] w-full max-w-3xl relative">
            <DisplayCards cards={securityCards} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSetupChecklist;
