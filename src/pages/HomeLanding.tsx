import React, { useState } from 'react';
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

// ─── Brand ───────────────────────────────────────────────────────────────────
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

// ─── Demo Panel ───────────────────────────────────────────────────────────────
const ProductDemoPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tab = productTabs[activeTab];
  const Demo = tab.Demo;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full"
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
        {/* Chrome header */}
        <div
          className="flex items-center justify-between px-5 py-3.5"
          style={{ background: `linear-gradient(135deg, ${S10.navy} 0%, ${S10.teal} 100%)` }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/40" />
            <div className="w-3 h-3 rounded-full bg-white/60" />
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-[12px] font-semibold tracking-wide text-white">S10.AI · Live Demo</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 border border-white/25">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-bold text-white">LIVE</span>
          </div>
        </div>

        {/* Tab switcher */}
        <div
          className="flex border-b"
          style={{ borderColor: `${S10.navy}10`, background: `${S10.navy}03` }}
        >
          {productTabs.map((t, i) => {
            const Icon = t.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className="flex-1 flex flex-col items-center gap-1 px-2 py-3 text-center transition-all relative"
                style={{
                  background: isActive ? 'white' : 'transparent',
                  borderBottom: isActive ? `2px solid ${t.color}` : '2px solid transparent',
                }}
              >
                <Icon
                  className="w-4 h-4"
                  style={{ color: isActive ? t.color : '#9ca3af' }}
                />
                <span
                  className="text-[11px] font-semibold leading-tight"
                  style={{ color: isActive ? t.color : '#9ca3af' }}
                >
                  {t.label}
                </span>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-[8.5px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}22` }}
                  >
                    {t.badge}
                  </motion.span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active tab: description strip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + '-desc'}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 px-5 py-3 border-b"
            style={{ borderColor: `${S10.navy}08`, background: `${tab.color}06` }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${tab.color}15`, border: `1px solid ${tab.color}25` }}
            >
              <tab.icon className="w-3.5 h-3.5" style={{ color: tab.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold leading-none" style={{ color: tab.color }}>{tab.fullLabel}</p>
              <p className="text-[10px] text-gray-400 mt-0.5 leading-snug">{tab.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Demo content */}
        <div className="px-5 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <Demo />
            </motion.div>
          </AnimatePresence>
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

            {/* ── Right: Product Demo Panel ── */}
            <div className="w-full relative">
              <ProductDemoPanel />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeLanding;
