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
      style={{ background: 'linear-gradient(180deg, #fff 0%, #F5F9FC 100%)', borderTop: '1px solid #E8EFF5' }}
    >
      {/* Soft background blobs */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(56,126,137,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{ background: `${S10.teal}12`, color: S10.teal, border: `1px solid ${S10.teal}28`, boxShadow: `0 1px 8px ${S10.teal}10` }}
          >
            End-to-End Clinical Workflow
          </div>
          <h2
            className="font-black leading-tight tracking-tight mb-4"
            style={{ color: S10.navy, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.02em' }}
          >
            One Platform.{' '}
            <span style={{ color: S10.teal }}>Every Step of the Visit.</span>
          </h2>
          <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: '#475569' }}>
            From the first call to the final claim — fully automated, zero manual work.
          </p>
        </motion.div>

        {/* ── Desktop: 5-column pipeline ── */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-3 lg:gap-4 relative">

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;
              return (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center text-center gap-4 rounded-2xl p-5 cursor-default transition-all duration-300"
                  style={{
                    background: isActive
                      ? `linear-gradient(160deg, #fff 0%, ${step.color}10 100%)`
                      : '#ffffff',
                    border: `1.5px solid ${isActive ? step.color + '50' : '#EAF0F5'}`,
                    boxShadow: isActive
                      ? `0 8px 32px ${step.color}18, 0 2px 8px rgba(20,49,81,0.06)`
                      : '0 1px 6px rgba(20,49,81,0.05)',
                    transform: isActive ? 'translateY(-4px)' : 'none',
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                >
                  {/* Step number badge */}
                  <div
                    className="absolute top-3 right-3 text-[11px] font-black tracking-widest px-1.5 py-0.5 rounded-md"
                    style={{
                      background: isActive ? `${step.color}18` : '#F1F5F9',
                      color: isActive ? step.color : '#94A3B8',
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon circle */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mt-1 transition-all duration-300"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${step.color}, ${S10.navy})`
                        : `${step.color}18`,
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: isActive ? '#fff' : step.color }}
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Title & subtitle */}
                  <div>
                    <h3
                      className="text-[14px] lg:text-[15px] font-bold leading-tight mb-1"
                      style={{ color: S10.navy }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[12px] font-medium" style={{ color: '#64748B' }}>
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px" style={{ background: '#E8EFF4' }} />

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2 w-full text-left">
                    {step.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-[12px] lg:text-[13px] leading-snug"
                        style={{ color: '#334155' }}
                      >
                        <Check
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          style={{ color: step.color }}
                          strokeWidth={2.5}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Connector arrow */}
                  {i < steps.length - 1 && (
                    <div className="absolute -right-[14px] top-[56px] z-10">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shadow-sm"
                        style={{
                          background: '#fff',
                          border: `1.5px solid ${step.color}50`,
                        }}
                      >
                        <ChevronRight className="w-3.5 h-3.5" style={{ color: step.color }} strokeWidth={2.5} />
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
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}20, ${step.color}08)`,
                      border: `2px solid ${step.color}40`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.75} />
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-0.5 flex-1 my-2 min-h-[32px]"
                      style={{ background: `linear-gradient(${step.color}60, transparent)` }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className="flex-1 pb-5 rounded-xl p-4 mb-3"
                  style={{ background: '#fff', border: '1.5px solid #E2E8F0' }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[10px] font-black tracking-widest px-1.5 py-0.5 rounded"
                      style={{ background: `${step.color}15`, color: step.color }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-[15px] font-bold" style={{ color: S10.navy }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[12px] font-medium mb-3" style={{ color: '#64748B' }}>{step.subtitle}</p>
                  <ul className="flex flex-col gap-2">
                    {step.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-[13px] leading-snug"
                        style={{ color: '#334155' }}
                      >
                        <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: step.color }} strokeWidth={2.5} />
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
          className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.25 }}
        >
          <p className="text-sm text-center font-medium" style={{ color: '#64748B' }}>
            Ready to automate your entire clinical workflow?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:opacity-90 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
            style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}
          >
            <Calendar className="w-4 h-4" />
            Book a Free Demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowPipelineSection;
