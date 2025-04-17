
import React from 'react';
import { motion } from "framer-motion";
import { SparklesTextAdvanced } from "@/components/ui/sparkles-text-advanced";
import { BravoWorkflowAnimation } from '../animations/BravoWorkflowAnimation';
import { bravoColors } from '@/theme/bravo-theme';

export const HowBravoWorksSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <SparklesTextAdvanced 
              text="How BRAVO Works" 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white"
              colors={{ first: "#FFFFFF", second: bravoColors.secondary }}
            />
          </motion.div>
        </div>

        <BravoWorkflowAnimation />
      </div>
    </section>
  );
};
