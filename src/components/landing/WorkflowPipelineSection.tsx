import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Stethoscope, Brain, TrendingUp, Check, ArrowRight, ChevronRight } from 'lucide-react';

const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Scheduling & Access',
    subtitle: 'Front-door automation',
    color: S10.teal,
    bullets: [
      'AI handles all inbound calls & bookings',
      'Syncs EHR, SIP & practice management',
      '24/7 patient access, zero hold times',
    ],
  },
  {
    number: '02',
    icon: Clock,
    title: 'Pre-Visit Prep',
    subtitle: 'Ready before they arrive',
    color: S10.mid,
    bullets: [
      'Digital intake & insurance verification',
      'AI-powered pre-charting insights',
      'Automated reminders & confirmations',
    ],
  },
  {
    number: '03',
    icon: Stethoscope,
    title: 'During the Visit',
    subtitle: 'Hands-free documentation',
    color: S10.teal,
    bullets: [
      'Real-time ambient AI scribing',
      'Context-aware clinical notes',
      'Any template, any specialty, any EHR',
    ],
  },
  {
    number: '04',
    icon: Brain,
    title: 'Post-Visit Actions',
    subtitle: 'Close the loop instantly',
    color: S10.mid,
    bullets: [
      'Auto ICD-10, CPT & HCC coding',
      'Orders sent directly to EHR',
      'Patient visit summary generation',
    ],
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Revenue Cycle',
    subtitle: 'Get paid, automatically',
    color: S10.teal,
    bullets: [
      'Real-time insurance eligibility checks',
      'AI-assisted claims processing',
      'Payment tracking & denial management',
    ],
  },
];

const WorkflowPipelineSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: '#ffffff', borderTop: '1px solid #E2E8F0' }}
    >
      {/* Subtle top accent line matching ProductShowcase */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${S10.teal}, ${S10.mid})` }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4"
            style={{ background: `${S10.teal}12`, color: S10.teal, border: `1px solid ${S10.teal}30` }}
          >
            End-to-End Clinical Workflow
          </div>
          <h2
            className="font-black leading-tight tracking-tight mb-3"
            style={{ color: S10.navy, fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em' }}
          >
            One Platform.{' '}
            <span style={{ color: S10.teal }}>Every Step of the Visit.</span>
          </h2>
          <p className="max-w-lg mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#64748B' }}>
            From the first call to the final claim — fully automated, zero manual work.
          </p>
        </motion.div>

        {/* ── Desktop: 5-column pipeline ── */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-3 lg:gap-4 relative">
            {/* Connector line */}
            <div
              className="absolute top-[44px] left-[9%] right-[9%] h-px pointer-events-none"
              style={{ background: `linear-gradient(90deg, transparent, ${S10.teal}40, ${S10.mid}40, ${S10.teal}40, transparent)` }}
            />

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;
              return (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center text-center gap-3 rounded-2xl p-4 lg:p-5 cursor-default transition-all duration-300"
                  style={{
                    background: isActive ? `linear-gradient(145deg, ${S10.navy}06, ${step.color}08)` : '#F8FAFC',
                    border: isActive ? `1.5px solid ${step.color}50` : '1.5px solid #E2E8F0',
                    boxShadow: isActive ? `0 8px 32px ${step.color}18` : '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                >
                  {/* Step number */}
                  <span
                    className="text-[9px] font-black tracking-widest absolute top-3 right-3"
                    style={{ color: isActive ? step.color : '#CBD5E1' }}
                  >
                    {step.number}
                  </span>

                  {/* Icon circle */}
                  <motion.div
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mt-1"
                    animate={{
                      background: isActive
                        ? `linear-gradient(135deg, ${step.color}, ${S10.navy})`
                        : `${step.color}14`,
                    }}
                    transition={{ duration: 0.22 }}
                  >
                    <Icon
                      className="w-5 h-5 lg:w-6 lg:h-6"
                      style={{ color: isActive ? '#fff' : step.color }}
                      strokeWidth={1.75}
                    />
                  </motion.div>

                  {/* Title */}
                  <div>
                    <h3
                      className="text-[12px] lg:text-[13px] font-black leading-tight"
                      style={{ color: S10.navy }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[10px] font-medium mt-0.5" style={{ color: '#94A3B8' }}>
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px" style={{ background: '#E2E8F0' }} />

                  {/* Bullets */}
                  <ul className="flex flex-col gap-1.5 w-full text-left">
                    {step.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-1.5 text-[10px] lg:text-[11px] leading-snug"
                        style={{ color: '#475569' }}
                      >
                        <Check
                          className="w-3 h-3 flex-shrink-0 mt-0.5"
                          style={{ color: step.color }}
                          strokeWidth={2.5}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow between cards */}
                  {i < steps.length - 1 && (
                    <div className="absolute -right-3 lg:-right-[14px] top-[44px] z-10">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: '#fff', border: `1px solid ${step.color}40` }}
                      >
                        <ChevronRight className="w-3 h-3" style={{ color: step.color }} strokeWidth={2} />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: Vertical timeline ── */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                className="flex gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Spine */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${step.color}12`,
                      border: `1.5px solid ${step.color}35`,
                    }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: step.color }} strokeWidth={1.75} />
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-px flex-1 my-2 min-h-[28px]"
                      style={{ background: `linear-gradient(${step.color}40, transparent)` }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-5">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-black tracking-widest" style={{ color: `${step.color}80` }}>
                      {step.number}
                    </span>
                    <h3 className="text-[14px] font-black" style={{ color: S10.navy }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[11px] font-medium mb-2.5" style={{ color: '#94A3B8' }}>{step.subtitle}</p>
                  <ul className="flex flex-col gap-1.5">
                    {step.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-[12px] leading-snug"
                        style={{ color: '#475569' }}
                      >
                        <Check className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: step.color }} strokeWidth={2.5} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.25 }}
        >
          <p className="text-sm text-center font-medium" style={{ color: '#64748B' }}>
            Ready to automate your entire clinical workflow?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold text-white shadow-sm hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}
          >
            <Calendar className="w-4 h-4" />
            Book a Free Demo
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowPipelineSection;
