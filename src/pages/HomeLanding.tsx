import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Database, Shield, Users, Star, ArrowRight, Check,
  FileText, Phone, Bot, Link as LinkIcon,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  ScribeDemo,
  ReceptionistDemo,
  CustomAgentsDemo,
  IntegrationsDemo,
} from '@/components/landing/FirstSection';

// ─── Brand Colors ────────────────────────────────────────────────────────────
const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

// ─── Trust Badge ─────────────────────────────────────────────────────────────
const TrustBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-0 rounded-full border border-gray-200 bg-white shadow-sm overflow-hidden"
  >
    <div className="flex items-center gap-2 px-4 py-2.5 border-r border-gray-200">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0.5" />
      </svg>
      <span className="text-[13px] font-semibold text-gray-700">Trusted by 1,000+ providers</span>
    </div>
    <div className="flex items-center gap-2 px-4 py-2.5">
      <span className="text-[13px] font-semibold text-gray-600">Excellent</span>
      <div className="flex items-center gap-0.5">
        {[...Array(4)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-[#00b67a] text-[#00b67a]" />
        ))}
        <Star className="w-3.5 h-3.5 fill-[#00b67a]/40 text-[#00b67a]" strokeWidth={1.5} />
      </div>
      <span className="text-[13px] font-bold text-[#00b67a]">Trustpilot</span>
    </div>
  </motion.div>
);

// ─── Feature Pill ────────────────────────────────────────────────────────────
const FeaturePill = ({ icon, text, delay }: { icon: React.ReactNode; text: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-default w-fit"
  >
    <span style={{ color: S10.teal }}>{icon}</span>
    <span className="text-[13px] font-medium text-gray-700 whitespace-nowrap">{text}</span>
  </motion.div>
);

// ─── Steps config ─────────────────────────────────────────────────────────────
const steps = [
  {
    id: 'scribe',
    icon: FileText,
    step: 'AI Scribe',
    title: 'C.R.U.S.H — AI Medical Scribe',
    content: 'Live transcription → structured SOAP notes in seconds, auto-coded & pushed to your EHR. Save 2+ hours daily.',
    color: S10.navy,
    Demo: ScribeDemo,
  },
  {
    id: 'bravo',
    icon: Phone,
    step: 'AI Receptionist',
    title: 'B.R.A.V.O — AI Phone Agent',
    content: 'Handles every inbound call autonomously — books appointments, confirms details, answers patient questions 24/7.',
    color: S10.teal,
    Demo: ReceptionistDemo,
  },
  {
    id: 'agents',
    icon: Bot,
    step: 'Custom Agents',
    title: '5 Custom AI Agents',
    content: 'Prior auth, referrals, billing, lab routing and more — autonomous agents running your entire clinic backend.',
    color: S10.mid,
    Demo: CustomAgentsDemo,
  },
  {
    id: 'integrations',
    icon: LinkIcon,
    step: 'Integrations',
    title: 'EHR & App Integrations',
    content: 'Tap any EHR to sync instantly — bidirectional HL7 FHIR, SMART API, and 7,000+ app connections built-in.',
    color: S10.light,
    Demo: IntegrationsDemo,
  },
];

const AUTO_PLAY_MS = 6000;

// ─── Feature Steps Demo Panel ─────────────────────────────────────────────────
const FeatureStepsPanel = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-advance with progress bar
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          setCurrent(c => (c + 1) % steps.length);
          return 0;
        }
        return p + (60 / AUTO_PLAY_MS) * 100;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [paused]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setProgress(0);
    setPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setPaused(false), 12000);
  };

  const activeStep = steps[current];
  const Demo = activeStep.Demo;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
        setPaused(false);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0 rounded-2xl overflow-hidden bg-white"
        style={{
          border: `1px solid ${S10.mid}20`,
          boxShadow: `0 2px 4px rgba(0,0,0,0.04), 0 12px 40px rgba(20,49,81,0.09), 0 28px 64px rgba(20,49,81,0.05)`
        }}>

        {/* ── Left stepper ── */}
        <div className="flex flex-col py-5 px-4 gap-1 border-r"
          style={{ borderColor: `${S10.navy}0d`, background: `${S10.navy}03` }}>
          {steps.map((s, i) => {
            const isActive = i === current;
            const isDone = i < current;
            const Icon = s.icon;

            return (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className="group relative flex items-start gap-3 rounded-xl px-3 py-3 text-left transition-all duration-300 w-full"
                style={{
                  background: isActive ? `${s.color}10` : 'transparent',
                  border: `1px solid ${isActive ? s.color + '30' : 'transparent'}`,
                }}
              >
                {/* Step indicator */}
                <div
                  className="relative flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black transition-all duration-300 mt-0.5"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${s.color}, ${S10.teal})`
                      : isDone
                      ? `${s.color}18`
                      : '#f1f5f9',
                    border: `1.5px solid ${isActive ? s.color : isDone ? s.color + '40' : '#e2e8f0'}`,
                    color: isActive ? '#fff' : isDone ? s.color : '#94a3b8',
                  }}
                >
                  {isDone ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Icon className="w-3.5 h-3.5" />
                  )}
                  {/* Pulse ring for active */}
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      style={{ border: `2px solid ${s.color}50` }}
                      animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                      transition={{ repeat: Infinity, duration: 1.4 }}
                    />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[11px] font-bold leading-none mb-1 transition-colors duration-200"
                    style={{ color: isActive ? s.color : isDone ? '#64748b' : '#94a3b8' }}
                  >
                    {s.step}
                  </p>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-[10px] leading-relaxed overflow-hidden"
                        style={{ color: '#64748b' }}
                      >
                        {s.content}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            );
          })}

          {/* Progress bar at bottom of stepper */}
          <div className="mt-auto pt-4 px-1">
            <div className="h-[3px] w-full rounded-full bg-gray-100 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${activeStep.color}, ${S10.teal})` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.06, ease: 'linear' }}
              />
            </div>
            <p className="text-[9px] text-gray-400 mt-1.5 font-medium">
              Auto-advancing · hover to pause
            </p>
          </div>
        </div>

        {/* ── Right demo panel ── */}
        <div className="flex flex-col overflow-hidden">
          {/* Panel header */}
          <div
            className="flex items-center justify-between px-5 py-3.5 border-b flex-shrink-0"
            style={{
              borderColor: `${S10.navy}0d`,
              borderLeft: `3px solid ${activeStep.color}`,
              background: `linear-gradient(135deg, ${activeStep.color}06 0%, transparent 100%)`,
            }}
          >
            <div>
              <p className="text-[12px] font-black leading-none" style={{ color: activeStep.color }}>
                {activeStep.title}
              </p>
            </div>
            {/* LIVE badge */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border"
              style={{ background: `${activeStep.color}10`, borderColor: `${activeStep.color}28` }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: activeStep.color }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: activeStep.color }} />
              </span>
              <span className="text-[10px] font-bold" style={{ color: activeStep.color }}>LIVE</span>
            </div>
          </div>

          {/* Demo body */}
          <div className="px-5 py-4 overflow-y-auto flex-1" style={{ minHeight: 320 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Demo />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const HomeLanding = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 75% 50%, rgba(56,126,137,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── Left ── */}
            <div className="flex flex-col gap-7 lg:pt-4">
              <TrustBadge />

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[2.6rem] sm:text-5xl md:text-[3.4rem] lg:text-[3.8rem] font-black leading-[1.06] tracking-[-0.02em] text-gray-900"
              >
                Less Admin.<br />
                Less Documentation.<br />
                More Time for Care.
              </motion.h1>

              {/* Feature pills 2×2 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="grid grid-cols-2 gap-2.5 w-fit"
              >
                <FeaturePill icon={<Clock className="w-[15px] h-[15px]" />} text="75% faster charting" delay={0.28} />
                <FeaturePill icon={<Database className="w-[15px] h-[15px]" />} text="Works with all EHRs + thousands of apps" delay={0.33} />
                <FeaturePill icon={<Shield className="w-[15px] h-[15px]" />} text="HIPAA compliant" delay={0.38} />
                <FeaturePill icon={<Users className="w-[15px] h-[15px]" />} text="Real Human Support, 24/7" delay={0.43} />
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button
                  onClick={() => (window.location.href = '/contact')}
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-[15px] font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  Request A Demo
                </button>
              </motion.div>

              {/* Trust checklist */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.62 }}
                className="flex flex-col gap-1.5"
              >
                {[
                  'Free 15-minute consultation',
                  'Custom implementation plan',
                  'No setup fees or long-term contracts',
                ].map((line, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: S10.teal }} />
                    <span className="text-[13px] text-gray-500">{line}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Feature Steps Demo ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full relative"
            >
              {/* Ambient glow */}
              <div
                className="absolute -inset-6 rounded-[3rem] pointer-events-none -z-10"
                style={{ background: `radial-gradient(ellipse at 50% 50%, ${S10.teal}14 0%, transparent 70%)`, filter: 'blur(28px)' }}
              />
              <FeatureStepsPanel />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeLanding;
