
import React, { useState } from 'react';
import { ROICalculator } from '../calculator/ROICalculator';
import { ComparisonAnimation } from '../animations/ComparisonAnimation';
import { motion } from 'framer-motion';
import { bravoColors } from '@/theme/bravo-theme';

export const ROISection = () => {
  const [savings, setSavings] = useState({
    monthly: 0,
    yearly: 0,
    multiplier: 0
  });

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-teal-50/30 opacity-60 blur-3xl" />

      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            See the ROI of Automating Your Front Office
          </h2>
          <p className="text-xl md:text-2xl text-black opacity-80">
            Stop staffing for problems AI can solve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ROICalculator onCalculate={setSavings} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ComparisonAnimation savings={savings} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
