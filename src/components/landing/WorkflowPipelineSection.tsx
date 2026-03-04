import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Stethoscope, Brain, TrendingUp, CheckCircle } from 'lucide-react';

const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

const steps = [
  {
    icon: Calendar,
    title: 'AI Scheduling\n& Access',
    color: S10.teal,
    bullets: [
      'AI handles calls and bookings',
      'Syncs EHR, SIP & PMS',
      'Enhances patient access 24/7',
    ],
  },
  {
    icon: Clock,
    title: 'Pre-Visit\nAutomation',
    color: S10.mid,
    bullets: [
      'Digital intake automation',
      'Insurance verification checks',
      'AI pre-charting insights',
    ],
  },
  {
    icon: Stethoscope,
    title: 'During\nVisit',
    color: S10.teal,
    bullets: [
      'Context-aware documentation',
      'Real-time AI scribing',
      'Deep personalization support',
    ],
  },
  {
    icon: Brain,
    title: 'Post-Visit\nAutomation',
    color: S10.mid,
    bullets: [
      'Coding intelligence engine',
      'Automated ordering to EHR',
      'Patient visit summary',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Faster Revenue\nCycle',
    color: S10.teal,
    bullets: [
      'Real-time insurance checks',
      'AI claims processing',
      'Payment tracking automation',
    ],
  },
];

const WorkflowPipelineSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${S10.teal}06 0%, transparent 70%)`,
        }}
      />

      <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-black leading-tight tracking-tight mb-4"
            style={{
              color: S10.navy,
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              letterSpacing: '-0.02em',
            }}
          >
            One AI Platform. Every Workflow.{' '}
            <span style={{ color: S10.teal }}>Fully Synced.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#64748B' }}>
            Most platforms stop at SOAP notes.{' '}
            <strong style={{ color: S10.navy }}>We go further.</strong>{' '}
            Our Ambient AI platform links scheduling, documentation, billing, and patient
            engagement — streamlining your entire workflow, hands-free.
          </p>
        </motion.div>

        {/* Pipeline — horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
          <div className="flex items-start gap-0 min-w-[640px] sm:min-w-0 sm:grid sm:grid-cols-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isHovered = hovered === i;
              const isLast = i === steps.length - 1;

              return (
                <React.Fragment key={i}>
                  {/* Step Card */}
                  <motion.div
                    className="flex flex-col items-center gap-4 flex-1 cursor-default"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {/* Icon box */}
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-sm border transition-all duration-300"
                      animate={{
                        background: isHovered
                          ? `linear-gradient(135deg, ${S10.navy}, ${step.color})`
                          : '#F8FAFC',
                        borderColor: isHovered ? 'transparent' : '#E2E8F0',
                        boxShadow: isHovered
                          ? `0 8px 24px ${step.color}30`
                          : '0 1px 3px rgba(0,0,0,0.08)',
                      }}
                    >
                      <Icon
                        className="w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300"
                        style={{ color: isHovered ? '#fff' : step.color }}
                        strokeWidth={1.75}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="text-[13px] sm:text-[14px] font-black text-center leading-tight whitespace-pre-line"
                      style={{ color: S10.navy }}
                    >
                      {step.title}
                    </h3>

                    {/* Bullet list */}
                    <ul className="flex flex-col gap-2 w-full px-1 sm:px-2">
                      {step.bullets.map((b, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start gap-2 text-[11px] sm:text-[12px] leading-snug"
                          style={{ color: '#475569' }}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + j * 0.06 + 0.3 }}
                        >
                          <CheckCircle
                            className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                            style={{ color: step.color }}
                            strokeWidth={2}
                          />
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Dashed connector */}
                  {!isLast && (
                    <div className="flex items-start pt-6 sm:pt-7 px-1 flex-shrink-0">
                      <div className="flex items-center gap-[3px]">
                        {[...Array(4)].map((_, d) => (
                          <motion.div
                            key={d}
                            className="w-1.5 h-0.5 rounded-full"
                            style={{ background: `${S10.teal}40` }}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.6, delay: d * 0.15, repeat: Infinity }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-center sm:text-left" style={{ color: '#64748B' }}>
            Ready to automate your entire clinical workflow?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-bold text-white shadow-sm hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}
          >
            Book a Free Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowPipelineSection;
