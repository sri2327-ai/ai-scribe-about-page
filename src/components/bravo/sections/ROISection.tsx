import React, { useState } from 'react';
import { ROICalculator } from '../calculator/ROICalculator';
import { motion } from 'framer-motion';

export const ROISection = () => {
  const [savings, setSavings] = useState({ monthly: 0, yearly: 0, multiplier: 0 });

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#FAF8F6]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143151] mb-3 leading-tight">
            See what BRAVO can{' '}
            <span className="italic text-[#387E89]">save you</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            With BRAVO, your team reclaims hours every week and your practice recovers thousands in lost revenue — all while giving patients faster, 24/7 responses.
          </p>
        </motion.div>

        <ROICalculator onCalculate={setSavings} />
      </div>
    </section>
  );
};
