import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Stethoscope, Brain, TrendingUp, Check, ArrowRight } from 'lucide-react';

const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'AI Scheduling & Access',
    subtitle: 'Front-door automation',
    color: S10.teal,
    bgAccent: `${S10.teal}12`,
    bullets: [
      'AI handles all inbound calls & bookings',
      'Syncs EHR, SIP & practice management',
      '24/7 patient access, zero hold times',
    ],
  },
  {
    number: '02',
    icon: Clock,
    title: 'Pre-Visit Automation',
    subtitle: 'Prep before they arrive',
    color: S10.mid,
    bgAccent: `${S10.mid}12`,
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
    bgAccent: `${S10.teal}12`,
    bullets: [
      'Real-time ambient AI scribing',
      'Context-aware clinical notes',
      'Any template, any specialty, any EHR',
    ],
  },
  {
    number: '04',
    icon: Brain,
    title: 'Post-Visit Automation',
    subtitle: 'Close the loop instantly',
    color: S10.mid,
    bgAccent: `${S10.mid}12`,
    bullets: [
      'Auto ICD-10, CPT & HCC coding',
      'Orders sent directly to EHR',
      'Patient visit summary generation',
    ],
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Faster Revenue Cycle',
    subtitle: 'Get paid, automatically',
    color: S10.teal,
    bgAccent: `${S10.teal}12`,
    bullets: [
      'Real-time insurance eligibility checks',
      'AI-assisted claims processing',
      'Payment tracking & denial management',
    ],
  },
];

const WorkflowPipelineSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${S10.teal}40, transparent)` }} />

      {/* Soft radial bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${S10.teal}05 0%, transparent 70%)` }} />

      <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Label pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 text-[11px] sm:text-[12px] font-bold tracking-widest uppercase"
            style={{ borderColor: `${S10.teal}40`, color: S10.teal, background: `${S10.teal}08` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: S10.teal }} />
            End-to-End Clinical Workflow
          </div>

          <h2 className="font-black leading-tight tracking-tight mb-4"
            style={{ color: S10.navy, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}>
            One Platform.{' '}
            <span style={{ color: S10.teal }}>Every Step of the Visit.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#64748B' }}>
            Most AI tools cover one part of the visit. S10.AI covers all of it — from the first call to the final claim,{' '}
            <strong style={{ color: S10.navy }}>fully automated.</strong>
          </p>
        </motion.div>

        {/* ── Desktop Pipeline (hidden on mobile) ── */}
        <div className="hidden md:block">
          {/* Step cards row */}
          <div className="grid grid-cols-5 gap-4 lg:gap-6 items-start">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isHov = hovered === i;
              return (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center gap-3 cursor-default relative"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Step number */}
                  <span className="text-[11px] font-black tracking-widest mb-1 transition-colors duration-300"
                    style={{ color: isHov ? step.color : '#CBD5E1' }}>
                    {step.number}
                  </span>

                  {/* Icon box */}
                  <motion.div
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center shadow-sm border-2 transition-all duration-300"
                    animate={{
                      background: isHov ? `linear-gradient(135deg, ${S10.navy}, ${step.color})` : '#F8FAFC',
                      borderColor: isHov ? 'transparent' : '#E2E8F0',
                      boxShadow: isHov ? `0 12px 32px ${step.color}30` : '0 1px 3px rgba(0,0,0,0.06)',
                      y: isHov ? -4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className="w-7 h-7 lg:w-8 lg:h-8 transition-colors duration-300"
                      style={{ color: isHov ? '#fff' : step.color }}
                      strokeWidth={1.75}
                    />
                  </motion.div>

                  {/* Title */}
                  <div>
                    <h3 className="text-[13px] lg:text-[14px] font-black leading-snug transition-colors duration-300"
                      style={{ color: isHov ? step.color : S10.navy }}>
                      {step.title}
                    </h3>
                    <p className="text-[10px] lg:text-[11px] font-medium mt-0.5" style={{ color: '#94A3B8' }}>
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px" style={{ background: `${step.color}20` }} />

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2 w-full text-left">
                    {step.bullets.map((b, j) => (
                      <motion.li
                        key={j}
                        className="flex items-start gap-2 text-[11px] lg:text-[12px] leading-snug"
                        style={{ color: '#475569' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + j * 0.05 + 0.3 }}
                      >
                        <Check className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: step.color }} strokeWidth={2.5} />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Animated connector bar under icons */}
          <div className="relative mt-[-13.5rem] mb-[13.5rem] pointer-events-none">
            <div className="grid grid-cols-5 gap-4 lg:gap-6">
              {steps.map((step, i) => (
                <div key={i} className="flex justify-center">
                  {i < steps.length - 1 && (
                    <div className="absolute" style={{ left: `calc(${(i + 1) * 20}% - 12px)`, top: '4.5rem' }}>
                      <div className="flex items-center gap-[3px]">
                        {[...Array(5)].map((_, d) => (
                          <motion.div
                            key={d}
                            className="w-2 h-0.5 rounded-full"
                            style={{ background: `${step.color}50` }}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.8, delay: d * 0.18, repeat: Infinity }}
                          />
                        ))}
                        <motion.div
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <ArrowRight className="w-3 h-3" style={{ color: `${step.color}70` }} />
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: Vertical card list ── */}
        <div className="md:hidden flex flex-col gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                className="flex gap-4 p-4 rounded-2xl border bg-white shadow-sm"
                style={{ borderColor: `${step.color}25` }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                {/* Left: number + icon */}
                <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                  <span className="text-[10px] font-black tracking-widest" style={{ color: `${step.color}80` }}>
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: step.bgAccent }}>
                    <Icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.75} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-1 min-h-[20px]" style={{ background: `${step.color}20` }} />
                  )}
                </div>

                {/* Right: content */}
                <div className="flex-1 pt-0.5">
                  <h3 className="text-[14px] font-black leading-tight" style={{ color: S10.navy }}>
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-medium mb-2.5" style={{ color: '#94A3B8' }}>
                    {step.subtitle}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {step.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12px] leading-snug" style={{ color: '#475569' }}>
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

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-center sm:text-left font-medium" style={{ color: '#64748B' }}>
            Ready to automate your entire clinical workflow?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold text-white shadow-md hover:opacity-90 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
            style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}
          >
            <Calendar className="w-4 h-4" />
            Book a Free Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowPipelineSection;
