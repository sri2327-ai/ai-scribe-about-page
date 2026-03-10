import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Code2, Phone, MessageSquare, Bot, Clock, TrendingUp } from 'lucide-react';

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
    accentBg: 'rgba(56,126,137,0.10)',
    borderColor: 'rgba(56,126,137,0.20)',
    trend: '+18.5/s',
  },
  {
    product: 'AI Medical Coder',
    label: 'Autonomous ICD Codes',
    icon: Code2,
    base: 2_414_497,
    tickPerSec: 4.1,
    color: S10.mid,
    gradient: `linear-gradient(135deg, ${S10.mid}, ${S10.light})`,
    accentBg: 'rgba(81,146,174,0.10)',
    borderColor: 'rgba(81,146,174,0.20)',
    trend: '+4.1/s',
  },
  {
    product: 'AI Receptionist',
    label: 'Patient Calls Handled',
    icon: Phone,
    base: 1_203_942,
    tickPerSec: 2.4,
    color: S10.navy,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})`,
    accentBg: 'rgba(20,49,81,0.08)',
    borderColor: 'rgba(20,49,81,0.18)',
    trend: '+2.4/s',
  },
  {
    product: 'AI Chat Agent',
    label: 'Chat Conversations',
    icon: MessageSquare,
    base: 3_891_204,
    tickPerSec: 6.3,
    color: S10.teal,
    gradient: `linear-gradient(135deg, ${S10.teal}, ${S10.navy})`,
    accentBg: 'rgba(56,126,137,0.10)',
    borderColor: 'rgba(56,126,137,0.20)',
    trend: '+6.3/s',
  },
  {
    product: 'Custom AI Agents',
    label: 'Custom Workflows Run',
    icon: Bot,
    base: 8_338_324,
    tickPerSec: 9.8,
    color: S10.mid,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})`,
    accentBg: 'rgba(81,146,174,0.10)',
    borderColor: 'rgba(81,146,174,0.20)',
    trend: '+9.8/s',
  },
  {
    product: 'S10.AI Platform',
    label: 'Hours Saved for Clinicians',
    icon: Clock,
    base: 42_139_694,
    tickPerSec: 45.2,
    color: S10.navy,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})`,
    accentBg: 'rgba(20,49,81,0.08)',
    borderColor: 'rgba(20,49,81,0.18)',
    trend: '+45.2/s',
  },
];

function useCountUp(target: number, duration = 1600, started: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    let rafId: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
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
  const countedUp = useCountUp(stat.base, 1600, started);

  useEffect(() => {
    if (!started) return;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setLive(prev => prev + Math.ceil(stat.tickPerSec * (0.85 + Math.random() * 0.3)));
      }, 1000);
    }, 1700);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [started, stat.tickPerSec]);

  const display = countedUp + live;

  return (
    <motion.div
      className="relative flex flex-col bg-white rounded-2xl overflow-hidden group cursor-default"
      style={{
        border: `1px solid ${stat.borderColor}`,
        boxShadow: '0 1px 8px rgba(20,49,81,0.04)',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        boxShadow: `0 12px 32px ${stat.color}18, 0 2px 8px rgba(20,49,81,0.06)`,
        borderColor: stat.color + '44',
      }}
    >
      {/* Top gradient bar */}
      <div className="h-[3px] w-full" style={{ background: stat.gradient }} />

      <div className="p-5 flex flex-col flex-1 gap-4">

        {/* Header row: icon + product name + live badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: stat.accentBg }}
            >
              <Icon className="w-4 h-4" style={{ color: stat.color }} strokeWidth={1.8} />
            </div>
            <span className="text-[13px] font-bold leading-tight" style={{ color: S10.navy }}>
              {stat.product}
            </span>
          </div>

          {/* Live badge */}
          <div
            className="flex items-center gap-1.5 px-2 py-0.5 rounded-full"
            style={{ background: stat.accentBg, border: `1px solid ${stat.borderColor}` }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
              style={{ background: stat.color }}
            />
            <span className="text-[9px] font-extrabold tracking-widest uppercase" style={{ color: stat.color }}>
              Live
            </span>
          </div>
        </div>

        {/* Big number */}
        <div className="flex items-end gap-1.5">
          <span
            className="font-black tabular-nums leading-none block"
            style={{
              backgroundImage: stat.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: 'clamp(1.55rem, 3vw, 2.1rem)',
              letterSpacing: '-0.03em',
              display: 'inline-block',
            }}
          >
            {display.toLocaleString()}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'rgba(20,49,81,0.07)' }} />

        {/* Footer: label + trend */}
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>
            {stat.label}
          </p>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <TrendingUp className="w-3 h-3" style={{ color: stat.color }} strokeWidth={2} />
            <span className="text-[10px] font-bold" style={{ color: stat.color }}>{stat.trend}</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

const LiveStatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const totalHours = 42_139_694;
  const totalNotes = 12_810_470;

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F7FAFB 0%, #EEF4F8 50%, #E8F0F6 100%)',
        borderTop: '1px solid rgba(20,49,81,0.07)',
      }}
    >
      {/* Subtle radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 15% 80%, rgba(56,126,137,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(20,49,81,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Header ── */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-[0.12em] uppercase mb-5"
            style={{
              background: 'rgba(56,126,137,0.08)',
              color: S10.teal,
              border: '1px solid rgba(56,126,137,0.18)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Live Platform Metrics
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2
                className="font-black leading-[1.05] tracking-[-0.025em] mb-3"
                style={{ color: S10.navy, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
              >
                Real impact.{' '}
                <span
                  style={{
                    background: `linear-gradient(90deg, ${S10.teal}, ${S10.mid})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Delivered every second.
                </span>
              </h2>
              <p className="text-[14px] leading-relaxed max-w-md" style={{ color: '#64748B' }}>
                Numbers updating live — across every practice, every product, every day.
              </p>
            </div>

            {/* Summary callouts */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div
                className="px-4 py-3 rounded-xl text-center"
                style={{ background: 'rgba(56,126,137,0.07)', border: '1px solid rgba(56,126,137,0.14)' }}
              >
                <p className="text-[11px] font-bold tracking-wide uppercase mb-0.5" style={{ color: S10.teal }}>Total Notes</p>
                <p className="font-black text-[1.3rem] leading-none tracking-tight" style={{ color: S10.navy }}>
                  {(totalNotes / 1_000_000).toFixed(1)}M+
                </p>
              </div>
              <div
                className="px-4 py-3 rounded-xl text-center"
                style={{ background: 'rgba(20,49,81,0.06)', border: '1px solid rgba(20,49,81,0.12)' }}
              >
                <p className="text-[11px] font-bold tracking-wide uppercase mb-0.5" style={{ color: S10.navy }}>Hours Saved</p>
                <p className="font-black text-[1.3rem] leading-none tracking-tight" style={{ color: S10.navy }}>
                  {(totalHours / 1_000_000).toFixed(1)}M+
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {STATS.map((stat, i) => (
            <AnimatedStat key={i} stat={stat} index={i} started={inView} />
          ))}
        </div>

        {/* ── Bottom note ── */}
        <motion.p
          className="mt-8 text-center text-[11px] font-medium"
          style={{ color: 'rgba(20,49,81,0.35)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Metrics are estimated based on platform usage and update continuously.
        </motion.p>

      </div>
    </section>
  );
};

export default LiveStatsSection;
