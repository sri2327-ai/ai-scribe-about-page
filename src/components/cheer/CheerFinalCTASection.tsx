import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CheerFinalCTASection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-[#F5F5F2]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#A5CCF3]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-black text-xs font-medium mb-5">
            The future of virtual care
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-5 leading-[1.05]">
            Stop logging in.
            <br />
            <span className="bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
              Start showing up.
            </span>
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Launch a secure, branded telehealth visit in under 60 seconds — no downloads,
            no waiting rooms, no IT tickets. Just real care, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book your live demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-black/10 text-black font-semibold text-base hover:border-[#387E89]/40 hover:text-[#387E89] transition-all duration-300"
            >
              Talk to sales
            </Link>
          </div>

          <p className="mt-6 text-xs text-black/50">
            HIPAA-ready · 99.9% uptime · Setup in minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};
