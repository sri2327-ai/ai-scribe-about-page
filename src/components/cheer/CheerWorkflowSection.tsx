import React from 'react';
import { motion } from 'framer-motion';
import { Send, UserCheck, Users, Video, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Send,
    number: '01',
    title: 'Invite',
    description:
      'Invite patients with a single click by email or SMS. Fast, simple, and built into your workflow.',
  },
  {
    icon: UserCheck,
    number: '02',
    title: 'Check-In',
    description:
      'Patients check in effortlessly and arrive ready to start their appointment—giving you visibility and control.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Patient Queue',
    description:
      'See who\'s waiting, message patients, and start the session whenever you\'re ready.',
  },
  {
    icon: Video,
    number: '04',
    title: 'Consult',
    description:
      'Launch a secure HD video consultation with one click and deliver care just like in-office.',
  },
];

export const CheerWorkflowSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-[#A5CCF3]/15 blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 rounded-full bg-[#387E89]/10 blur-3xl" />
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
          <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-black text-xs font-medium mb-2">
            Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
            Your in-office workflow. Just online.
          </h2>
          <p className="text-sm md:text-base text-black/70">
            A familiar, end-to-end flow—from invitation to consultation—designed for clinicians.
          </p>
        </motion.div>

        {/* Workflow steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#387E89]/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl border border-black/10 p-5 md:p-6 hover:shadow-xl hover:border-[#387E89]/30 transition-all duration-300">
                  {/* Icon circle */}
                  <div className="relative mb-4 mx-auto w-fit">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg">
                      <step.icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="text-center mb-2">
                    <span className="text-[10px] font-bold tracking-widest text-[#387E89]">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-black text-center mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-black/70 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between cards - desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 -right-3 z-20 w-6 h-6 items-center justify-center bg-white rounded-full border border-[#387E89]/30 shadow-sm">
                    <ArrowRight className="w-3 h-3 text-[#387E89]" strokeWidth={2.5} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
