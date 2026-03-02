import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Database, Shield, Users, Star, ArrowRight, Check,
  FileText, Phone, Bot, Link as LinkIcon, ChevronLeft, ChevronRight,
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

// ─── Product tabs config ──────────────────────────────────────────────────────
const productTabs = [
  {
    id: 'scribe',
    icon: FileText,
    label: 'AI Scribe',
    fullLabel: 'C.R.U.S.H — AI Medical Scribe',
    badge: '2+ hrs saved/day',
    description: 'Live transcription → structured SOAP notes in seconds, auto-coded & pushed to your EHR.',
    color: S10.navy,
    Demo: ScribeDemo,
  },
  {
    id: 'bravo',
    icon: Phone,
    label: 'AI Receptionist',
    fullLabel: 'B.R.A.V.O — AI Phone Agent',
    badge: '24/7 availability',
    description: 'Handles every inbound call autonomously — books appointments, confirms details, answers patient questions.',
    color: S10.teal,
    Demo: ReceptionistDemo,
  },
  {
    id: 'agents',
    icon: Bot,
    label: 'Custom Agents',
    fullLabel: 'Custom AI Agents',
    badge: '5 agents deployed',
    description: 'Prior auth, referrals, billing, and more — 5 autonomous agents running your entire clinic.',
    color: S10.mid,
    Demo: CustomAgentsDemo,
  },
  {
    id: 'integrations',
    icon: LinkIcon,
    label: 'Integrations',
    fullLabel: 'EHR & App Integrations',
    badge: '7,000+ apps',
    description: 'Tap any EHR to sync instantly — bidirectional HL7 FHIR, SMART API, and 7,000+ app connections.',
    color: S10.light,
    Demo: IntegrationsDemo,
  },
];

// ─── Slide variants ───────────────────────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

// ─── Cinematic Demo Slider ────────────────────────────────────────────────────
const AUTO_ADVANCE_MS = 6000;
const PROGRESS_TICK_MS = 60;

const CinematicDemoSlider = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = (newIdx: number, dir: number) => {
    setDirection(dir);
    setActiveIdx(newIdx);
    setProgress(0);
    setPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setPaused(false), 10000);
  };

  const prev = () => navigate((activeIdx - 1 + productTabs.length) % productTabs.length, -1);
  const next = () => navigate((activeIdx + 1) % productTabs.length, 1);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          setDirection(1);
          setActiveIdx(i => (i + 1) % productTabs.length);
          return 0;
        }
        return p + (PROGRESS_TICK_MS / AUTO_ADVANCE_MS) * 100;
      });
    }, PROGRESS_TICK_MS);
    return () => clearInterval(interval);
  }, [paused]);

  const tab = productTabs[activeIdx];
  const Demo = tab.Demo;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
        setPaused(false);
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute -inset-6 rounded-[3rem] pointer-events-none -z-10"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${S10.teal}14 0%, transparent 70%)`, filter: 'blur(28px)' }}
      />

      <div
        className="rounded-2xl overflow-hidden bg-white"
        style={{ border: `1px solid ${S10.mid}22`, boxShadow: `0 2px 4px rgba(0,0,0,0.04), 0 12px 40px rgba(20,49,81,0.09), 0 28px 64px rgba(20,49,81,0.05)` }}
      >
        {/* ── Header ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx + '-header'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between px-5 py-4"
            style={{
              borderLeft: `4px solid ${tab.color}`,
              background: `linear-gradient(135deg, ${tab.color}08 0%, transparent 100%)`,
              borderBottom: `1px solid ${S10.navy}08`,
            }}
          >
            {/* Left: icon + label */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${tab.color}18`, border: `1px solid ${tab.color}30` }}
              >
                <tab.icon className="w-4 h-4" style={{ color: tab.color }} />
              </div>
              <div>
                <p className="text-[12px] font-bold leading-none" style={{ color: tab.color }}>{tab.fullLabel}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{tab.badge}</p>
              </div>
            </div>

            {/* Right: LIVE badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
              style={{ background: `${tab.color}10`, borderColor: `${tab.color}25` }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: tab.color }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: tab.color }} />
              </span>
              <span className="text-[10px] font-bold" style={{ color: tab.color }}>LIVE</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Demo body ── */}
        <div className="px-5 py-5 overflow-hidden" style={{ minHeight: 340 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Demo />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Footer controls ── */}
        <div className="px-5 pb-4 flex flex-col gap-3">
          {/* Arrows + dots */}
          <div className="flex items-center justify-between">
            {/* Prev */}
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
              style={{ background: 'white' }}
            >
              <ChevronLeft className="w-4 h-4 text-gray-500" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {productTabs.map((t, i) => (
                <motion.button
                  key={t.id}
                  onClick={() => navigate(i, i > activeIdx ? 1 : -1)}
                  layout
                  animate={{
                    width: i === activeIdx ? 24 : 8,
                    opacity: i === activeIdx ? 1 : 0.35,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-2 rounded-full"
                  style={{ background: i === activeIdx ? tab.color : '#cbd5e1' }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
              style={{ background: 'white' }}
            >
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-[3px] w-full rounded-full bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: tab.color }}
              animate={{ width: `${paused ? progress : progress}%` }}
              transition={{ duration: 0.06, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

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

            {/* ── Right: Cinematic Demo Slider ── */}
            <div className="w-full relative">
              <CinematicDemoSlider />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeLanding;
