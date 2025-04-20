
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IntegrationChecker } from './IntegrationChecker';

const IntegrationSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#143151] to-[#387E89]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Compatible with Your Preferred Software
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white max-w-2xl mx-auto"
          >
            From EHR to VOIP, PMS to CRM - S10.AI seamlessly integrates with your existing systems. 
            Try our compatibility checker below.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <IntegrationChecker />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            className="rounded-full px-8 py-6 text-lg bg-white hover:bg-gray-100 text-[#143151] shadow-xl"
          >
            Learn More About Integrations
            <ArrowRight className="ml-2 h-4 w-4 text-[#143151]" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSection;
