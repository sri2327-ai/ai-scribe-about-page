import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

export const CheerAnywhereSection = () => {
  return (
    <section className="bg-[#F5F5F2] py-20 sm:py-28 md:py-32 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight mb-6"
        >
          Your clinic, every screen.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          One secure room link for every patient. No app installs, no logins, no waiting room confusion. Just one tap and they're in care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 sm:gap-4 bg-white rounded-full pl-2 pr-6 sm:pr-8 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#387E89] to-[#143151] flex items-center justify-center shadow-md">
            <Video className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.2} />
          </div>
          <span className="text-base sm:text-xl md:text-2xl font-medium text-black">
            cheer.s10.ai/<span className="font-semibold">drwelch</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default CheerAnywhereSection;
