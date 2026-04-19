import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Lock, FileCheck2 } from 'lucide-react';

const compliances = [
  {
    title: 'HIPAA',
    description: 'U.S. healthcare privacy and security rules',
    Icon: ShieldCheck,
  },
  {
    title: 'GDPR',
    description: 'European data protection standards',
    Icon: Globe,
  },
  {
    title: 'PHIPA / PIPEDA',
    description: 'Canadian patient privacy compliance',
    Icon: Lock,
  },
  {
    title: 'HITECH',
    description: 'Health IT security and breach notification',
    Icon: FileCheck2,
  },
];

export const CheerComplianceSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-[#F5F5F2]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-72 h-72 rounded-full bg-[#A5CCF3]/15 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-[#387E89]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-black text-xs font-medium mb-2">
            Compliance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
            Safe, private, and secure.
          </h2>
          <p className="text-sm md:text-base text-black/70">
            Feel confident knowing your practice is fully supported by HIPAA, GDPR,
            PHIPA/PIPEDA, and HITECH compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
          {compliances.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-black/[0.03] rounded-2xl p-6 md:p-8 hover:bg-white hover:shadow-xl hover:border-[#387E89]/30 border border-transparent transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg">
                  <item.Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
              </div>

              <div className="border-t border-black/10 pt-4">
                <h3 className="font-bold text-black text-base md:text-lg mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
