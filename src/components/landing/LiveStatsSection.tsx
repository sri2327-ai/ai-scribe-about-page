import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Code2, Phone, MessageSquare, Bot, Clock } from 'lucide-react';

const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

const STATS = [
  {
    label: 'Clinical Notes Generated',
    sublabel: 'AI Medical Scribe',
    icon: FileText,
    base: 12_810_470,
    tickPerSec: 18.5,
    color: S10.teal,
    gradient: 'linear-gradient(135deg, #387E89, #5192AE)',
    bgLight: 'rgba(56,126,137,0.07)',
    borderColor: 'rgba(56,126,137,0.2)',
  },
  {
    label: 'Autonomous ICD Codes',
    sublabel: 'AI Medical Coder',
    icon: Code2,
    base: 2_414_497,
    tickPerSec: 4.1,
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
    bgLight: 'rgba(124,58,237,0.07)',
    borderColor: 'rgba(124,58,237,0.2)',
  },
  {
    label: 'Patient Calls Handled',
    sublabel: 'AI Receptionist',
    icon: Phone,
    base: 1_203_942,
    tickPerSec: 2.4,
    color: '#0EA5E9',
    gradient: 'linear-gradient(135deg, #0EA5E9, #38BDF8)',
    bgLight: 'rgba(14,165,233,0.07)',
    borderColor: 'rgba(14,165,233,0.2)',
  },
  {
    label: 'Chat Conversations',
    sublabel: 'AI Chat Agent',
    icon: MessageSquare,
    base: 3_891_204,
    tickPerSec: 6.3,
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #34D399)',
    bgLight: 'rgba(16,185,129,0.07)',
    borderColor: 'rgba(16,185,129,0.2)',
  },
  {
    label: 'Custom Workflows Run',
    sublabel: 'Custom AI Agents',
    icon: Bot,
    base: 8_338_324,
    tickPerSec: 9.8,
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
    bgLight: 'rgba(245,158,11,0.07)',
    borderColor: 'rgba(245,158,11,0.2)',
  },
  {
    label: 'Hours Saved for Clinicians',
    sublabel: 'S10.AI Platform',
    icon: Clock,
    base: 42_139_694,
    tickPerSec: 45.2,
    color: S10.navy,
    gradient: 'linear-gradient(135deg, #143151, #387E89)',
    bgLight: 'rgba(20,49,81,0.07)',
    borderColor: 'rgba(20,49,81,0.2)',
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
      className="relative flex flex-col bg-white rounded-2xl p-5 overflow-hidden"
      style={{
        border: `1px solid ${stat.borderColor}`,
        boxShadow: `0 4px 24px ${stat.color}10`,
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -4, boxShadow: `0 16px 40px ${stat.color}20` }}
    >
      {/* Accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: stat.gradient }} />

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
        style={{ background: stat.bgLight }}
      >
        <Icon className="w-5 h-5" style={{ color: stat.color }} strokeWidth={1.75} />
      </div>

      {/* Number */}
      <span
        className="block font-black tabular-nums leading-none mb-1.5"
        style={{
          color: S10.navy,
          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
          letterSpacing: '-0.03em',
        }}
      >
        {display.toLocaleString()}
      </span>

      {/* Label */}
      <p className="text-[13px] font-semibold leading-snug mb-1" style={{ color: '#1E293B' }}>
        {stat.label}
      </p>

      {/* Sublabel badge */}
      <div
        className="inline-flex items-center gap-1.5 w-fit mt-auto pt-3"
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
          style={{ background: stat.color }}
        />
        <span className="text-[11px] font-medium" style={{ color: stat.color }}>
          {stat.sublabel}
        </span>
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
      {/* Subtle background blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(56,126,137,0.06) 0%, transparent 70%)`,
        }}
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

        {/* Stats grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STATS.map((stat, i) => (
            <AnimatedStat key={i} stat={stat} index={i} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStatsSection;
