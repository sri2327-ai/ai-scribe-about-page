import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  PhoneCall,
  Languages,
  Pencil,
  ClipboardCheck,
  BookOpen,
  Sparkles,
} from 'lucide-react';

const addOns = [
  {
    title: 'AI Scribe',
    tag: 'Documentation',
    description:
      'Ambient AI captures the conversation and drafts your clinical note in real time — no typing, no catch-up.',
    Icon: FileText,
  },
  {
    title: 'AI Receptionist',
    tag: 'Front Office',
    description:
      'Answers calls, books appointments, and triages requests 24/7 so your team can focus on patients in the room.',
    Icon: PhoneCall,
  },
  {
    title: 'Interpreter',
    tag: 'Language',
    description:
      'On-demand medical interpretation in 50+ languages, built directly into the visit — no third-party dial-in.',
    Icon: Languages,
  },
  {
    title: 'Whiteboard',
    tag: 'Visual Teaching',
    description:
      'Draw, sketch, and annotate live to explain anatomy, procedures, or treatment plans clearly.',
    Icon: Pencil,
  },
  {
    title: 'Assessments',
    tag: 'Clinical Tools',
    description:
      'Send PHQ-9, GAD-7, intake forms, and custom questionnaires — scored automatically and saved to the chart.',
    Icon: ClipboardCheck,
  },
  {
    title: 'Patient Instructions',
    tag: 'After-Visit',
    description:
      'Generate clear, personalized after-visit summaries and care plans your patients can actually follow.',
    Icon: BookOpen,
  },
];

export const CheerAddOnsSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-white">
      {/* Subtle brand background blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-72 h-72 rounded-full bg-[#A5CCF3]/15 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-[#387E89]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 text-black text-xs font-medium mb-2">
            <Sparkles className="w-3 h-3" />
            Add-On Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
            Extend CHEER with powerful add-ons.
          </h2>
          <p className="text-sm md:text-base text-black/70">
            Plug in the capabilities your practice needs — from ambient documentation
            to interpretation — all inside the same secure visit.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          {addOns.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative h-full bg-white rounded-2xl border border-black/10 p-5 md:p-6 hover:shadow-xl hover:border-[#387E89]/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Animated gradient accent line */}
              <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#387E89]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon badge */}
              <div className="relative mb-4 w-fit">
                <div className="absolute inset-0 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-full blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Tag */}
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#387E89] mb-2">
                {item.tag}
              </span>

              {/* Title */}
              <h3 className="font-bold text-black text-base md:text-lg mb-1.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-black/70 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom hover indicator */}
              <div className="mt-4 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-medium text-black/40 group-hover:text-[#387E89] transition-colors duration-300">
                <span>Available add-on</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#387E89] animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
