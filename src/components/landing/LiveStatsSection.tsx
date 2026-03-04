import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Code2, Phone, MessageSquare, Bot, Clock } from 'lucide-react';

const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

const STATS = [
  {
    product: 'AI Medical Scribe',
    label: 'Clinical Notes Generated',
    icon: FileText,
    base: 12_810_470,
    tickPerSec: 18.5,
    color: S10.teal,
    gradient: `linear-gradient(135deg, ${S10.teal}, ${S10.mid})`,
    bgLight: 'rgba(56,126,137,0.08)',
    borderColor: 'rgba(56,126,137,0.18)',
  },
  {
    product: 'AI Medical Coder',
    label: 'Autonomous ICD Codes',
    icon: Code2,
    base: 2_414_497,
    tickPerSec: 4.1,
    color: S10.mid,
    gradient: `linear-gradient(135deg, ${S10.mid}, ${S10.light})`,
    bgLight: 'rgba(81,146,174,0.08)',
    borderColor: 'rgba(81,146,174,0.18)',
  },
  {
    product: 'AI Receptionist',
    label: 'Patient Calls Handled',
    icon: Phone,
    base: 1_203_942,
    tickPerSec: 2.4,
    color: S10.navy,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})`,
    bgLight: 'rgba(20,49,81,0.07)',
    borderColor: 'rgba(20,49,81,0.15)',
  },
  {
    product: 'AI Chat Agent',
    label: 'Chat Conversations',
    icon: MessageSquare,
    base: 3_891_204,
    tickPerSec: 6.3,
    color: S10.teal,
    gradient: `linear-gradient(135deg, ${S10.teal}, ${S10.navy})`,
    bgLight: 'rgba(56,126,137,0.08)',
    borderColor: 'rgba(56,126,137,0.18)',
  },
  {
    product: 'Custom AI Agents',
    label: 'Custom Workflows Run',
    icon: Bot,
    base: 8_338_324,
    tickPerSec: 9.8,
    color: S10.mid,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})`,
    bgLight: 'rgba(81,146,174,0.08)',
    borderColor: 'rgba(81,146,174,0.18)',
  },
  {
    product: 'S10.AI Platform',
    label: 'Hours Saved for Clinicians',
    icon: Clock,
    base: 42_139_694,
    tickPerSec: 45.2,
    color: S10.navy,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})`,
    bgLight: 'rgba(20,49,81,0.07)',
    borderColor: 'rgba(20,49,81,0.15)',
  },
];

function useCountUp(target: number, duration = 1800, started: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    let rafId: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * target));
      if (progress < 1) rafId = requestAnimationFrame(tick);
      else setValue(target);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, started]);
  return value;
}

function AnimatedStat({ stat, index, started }: { stat: typeof STATS[0]; index: number; started: boolean }) {
  const Icon = stat.icon;
  const [live, setLive] = useState(0);
  const countedUp = useCountUp(stat.base, 1800, started);

  useEffect(() => {
    if (!started) return;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setLive(prev => prev + Math.ceil(stat.tickPerSec * (0.8 + Math.random() * 0.4)));
      }, 1000);
    }, 1900);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [started, stat.tickPerSec]);

  const display = countedUp + live;

  return (
    <motion.div
      className="relative flex flex-col bg-white rounded-2xl overflow-hidden"
      style={{
        border: `1px solid ${stat.borderColor}`,
        boxShadow: `0 2px 16px rgba(20,49,81,0.06)`,
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -4, boxShadow: `0 16px 40px rgba(20,49,81,0.12)` }}
    >
      {/* Gradient accent bar */}
      <div className="h-1 w-full flex-shrink-0" style={{ background: stat.gradient }} />

      <div className="flex flex-col p-5 flex-1">
        {/* Product name — prominent */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[15px] font-bold leading-tight"
            style={{ color: S10.navy }}
          >
            {stat.product}
          </span>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: stat.bgLight }}
          >
            <Icon className="w-4.5 h-4.5" style={{ color: stat.color }} strokeWidth={1.75} />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-4" style={{ background: stat.borderColor }} />

        {/* Big animated number */}
        <span
          className="block font-black tabular-nums leading-none mb-2"
          style={{
            color: S10.navy,
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            letterSpacing: '-0.03em',
          }}
        >
          {display.toLocaleString()}
        </span>

        {/* Metric label */}
        <p className="text-[13px] font-medium leading-snug" style={{ color: '#64748B' }}>
          {stat.label}
        </p>

        {/* Live indicator */}
        <div className="flex items-center gap-1.5 mt-auto pt-4">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
            style={{ background: stat.color }}
          />
          <span className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: stat.color }}>
            Live
          </span>
        </div>
      </div>
    </motion.div>
  );
}

const LiveStatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: '#F8FAFC', borderTop: '1px solid #E8EFF4' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[280px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(56,126,137,0.05) 0%, transparent 70%)` }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: `rgba(56,126,137,0.08)`, color: S10.teal, border: `1px solid rgba(56,126,137,0.2)` }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Live Platform Metrics
          </div>
          <h2
            className="font-black leading-tight tracking-tight"
            style={{ color: S10.navy, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.02em' }}
          >
            Real impact.{' '}
            <span style={{ color: S10.teal }}>Delivered every second.</span>
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed max-w-xl" style={{ color: '#475569' }}>
            Numbers updated in real time — across every practice, every product, every day.
          </p>
        </motion.div>

        {/* Stats grid: 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {STATS.map((stat, i) => (
            <AnimatedStat key={i} stat={stat} index={i} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStatsSection;
