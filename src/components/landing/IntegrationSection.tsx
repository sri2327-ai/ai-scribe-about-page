
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { IntegrationChecker } from './IntegrationChecker';
import { Link } from 'react-router-dom';

const IntegrationSection = () => {
  console.log("Rendering Integration Section on landing page");
  
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="bg-white/10 rounded-lg p-3 max-w-lg flex items-start gap-3 backdrop-blur-sm">
            <Info className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <p className="text-sm text-white text-left">
              <span className="font-medium">Disclaimer:</span> The compatibility checker demonstrates S10.AI's universal compatibility. 
              Any software name you enter will show as compatible because S10.AI is designed to work with all your preferred software solutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/integration">
            <Button 
              className="rounded-full px-8 py-6 text-lg bg-white hover:bg-gray-100 text-[#143151] shadow-xl"
            >
              Learn More About Integrations
              <ArrowRight className="ml-2 h-4 w-4 text-[#143151]" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSection;
