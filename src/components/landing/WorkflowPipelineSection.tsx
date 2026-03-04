import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Stethoscope, Brain, TrendingUp, Check, ArrowRight, Zap } from 'lucide-react';

const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'AI Scheduling & Access',
    subtitle: 'Front-door automation',
    color: '#387E89',
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
    color: '#5192AE',
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
    color: '#387E89',
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
    color: '#5192AE',
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
    color: '#387E89',
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
    <section className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#0B1F35' }}>
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #387E8918 0%, transparent 50%), radial-gradient(circle at 80% 20%, #5192AE14 0%, transparent 50%)' }} />
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* ── Header ── */}
        <motion.div className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-[11px] font-bold tracking-widest uppercase"
            style={{ borderColor: '#387E8950', color: '#A5CCF3', background: '#387E8914' }}>
            <Zap className="w-3 h-3" style={{ color: '#387E89' }} />
            End-to-End Clinical Workflow
          </div>

          <h2 className="font-black leading-tight tracking-tight mb-5 text-white"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', letterSpacing: '-0.025em' }}>
            One Platform.{' '}
            <span style={{ background: 'linear-gradient(90deg, #387E89, #A5CCF3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Every Step of the Visit.
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#94A3B8' }}>
            From the first call to the final claim — fully automated, zero manual work.
          </p>
        </motion.div>

        {/* ── Desktop: Horizontal Pipeline ── */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-3 lg:gap-5 relative">
            {/* Connector line behind cards */}
            <div className="absolute top-[52px] left-[10%] right-[10%] h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, #387E8940, #5192AE40, #387E8940, transparent)' }} />

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;
              return (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center text-center gap-4 rounded-2xl p-4 lg:p-5 cursor-default transition-all duration-300"
                  style={{
                    background: isActive ? `linear-gradient(145deg, #143151, #1a3d55)` : 'rgba(255,255,255,0.04)',
                    border: isActive ? `1px solid ${step.color}60` : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: isActive ? `0 20px 50px ${step.color}25` : 'none',
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Step number */}
                  <span className="text-[10px] font-black tracking-widest absolute top-3 right-3"
                    style={{ color: isActive ? step.color : 'rgba(255,255,255,0.2)' }}>
                    {step.number}
                  </span>

                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mt-2"
                    animate={{
                      background: isActive ? `linear-gradient(135deg, ${step.color}, ${S10.navy})` : 'rgba(255,255,255,0.07)',
                      scale: isActive ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7" style={{ color: isActive ? '#fff' : step.color }} strokeWidth={1.75} />
                  </motion.div>

                  {/* Title */}
                  <div>
                    <h3 className="text-[12px] lg:text-[13px] font-black leading-tight text-white">{step.title}</h3>
                    <p className="text-[10px] font-medium mt-0.5" style={{ color: '#64748B' }}>{step.subtitle}</p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />

                  {/* Bullets */}
                  <ul className="flex flex-col gap-1.5 w-full text-left">
                    {step.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-[10px] lg:text-[11px] leading-snug" style={{ color: '#94A3B8' }}>
                        <Check className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: step.color }} strokeWidth={2.5} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow connector (between cards) */}
                  {i < steps.length - 1 && (
                    <div className="absolute -right-3 lg:-right-4 top-[52px] z-10">
                      <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ background: '#0B1F35', border: `1px solid ${step.color}50` }}>
                          <ArrowRight className="w-3 h-3" style={{ color: step.color }} />
                        </div>
                      </motion.div>
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                {/* Timeline spine */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`, border: `1px solid ${step.color}40` }}>
                    <Icon className="w-4.5 h-4.5" style={{ color: step.color }} strokeWidth={1.75} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 my-2 min-h-[32px]" style={{ background: `linear-gradient(${step.color}50, transparent)` }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-black tracking-widest" style={{ color: `${step.color}80` }}>{step.number}</span>
                    <h3 className="text-[14px] font-black text-white">{step.title}</h3>
                  </div>
                  <p className="text-[11px] font-medium mb-3" style={{ color: '#64748B' }}>{step.subtitle}</p>
                  <ul className="flex flex-col gap-1.5">
                    {step.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12px] leading-snug" style={{ color: '#94A3B8' }}>
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
          className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-center font-medium" style={{ color: '#64748B' }}>
            Ready to automate your entire clinical workflow?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[13px] font-bold text-white shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            style={{ background: `linear-gradient(135deg, #387E89, #5192AE)`, boxShadow: '0 8px 28px rgba(56,126,137,0.35)' }}
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
