import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Database, Shield, Users, Star, ArrowRight, Check,
  FileText, MessageSquare, Bot, Link as LinkIcon, ChevronDown
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ─── Brand ────────────────────────────────────────────────────────────────────
const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

// ─── Trust Badge ──────────────────────────────────────────────────────────────
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

// ─── Feature Pill ─────────────────────────────────────────────────────────────
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

// ─── Right Panel: Feature Accordion ──────────────────────────────────────────
const features = [
  {
    id: 0,
    icon: FileText,
    title: 'AI Medical Scribe & AI Coding',
    description: 'Live transcription generates structured SOAP notes in seconds. Auto-codes visits and pushes directly to your EHR.',
    highlight: '2+ hrs saved/day',
    highlightIcon: '⏱',
  },
  {
    id: 1,
    icon: MessageSquare,
    title: 'AI Phone & Chat Agent',
    description: 'Handles every inbound call 24/7 — books appointments, confirms details, and answers patient questions autonomously.',
    highlight: '100% calls answered',
    highlightIcon: '📞',
  },
  {
    id: 2,
    icon: Bot,
    title: 'Custom AI Agents',
    description: '5 autonomous agents run your entire clinic — prior auth, referrals, billing, and more. Fully customizable to your workflow.',
    highlight: '5 agents deployed',
    highlightIcon: '🤖',
  },
  {
    id: 3,
    icon: LinkIcon,
    title: 'EHR Integrations',
    description: 'Works with any EHR system and connects to 7,000+ apps. Zero disruption to your existing workflows.',
    highlight: 'Seamless connectivity',
    highlightIcon: '✓',
  },
];

const FeaturePanel = () => {
  const [active, setActive] = useState(3); // default EHR open, matching reference
  const [dots] = useState([0, 1, 2, 3]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full h-full"
    >
      {/* Card */}
      <div
        className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden"
        style={{ boxShadow: '0 4px 40px rgba(20,49,81,0.08)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100"
          style={{ background: 'linear-gradient(135deg, #f8fbff 0%, #f0f7f8 100%)' }}
        >
          <span className="text-[15px] font-bold text-gray-800">One AI Platform. Every Task Automated.</span>
          <span
            className="text-[11px] font-semibold px-3 py-1 rounded-full"
            style={{ background: `${S10.light}30`, color: S10.teal, border: `1px solid ${S10.light}` }}
          >
            Clinician-First
          </span>
        </div>

        {/* Feature list */}
        <div className="divide-y divide-gray-100">
          {features.map((f) => {
            const Icon = f.icon;
            const isOpen = active === f.id;
            return (
              <div key={f.id}>
                <button
                  className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-gray-50/70 transition-colors"
                  onClick={() => setActive(isOpen ? -1 : f.id)}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: isOpen ? `${S10.teal}15` : '#f3f4f6',
                      border: isOpen ? `1.5px solid ${S10.teal}40` : '1.5px solid transparent',
                      transition: 'all 0.25s',
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: isOpen ? S10.teal : '#6b7280' }} />
                  </div>

                  <span
                    className="flex-1 text-[14px] font-semibold"
                    style={{ color: isOpen ? S10.navy : '#374151' }}
                  >
                    {f.title}
                  </span>

                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: isOpen ? S10.teal : '#9ca3af',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1" style={{ paddingLeft: '4.5rem' }}>
                        <p className="text-[13px] text-gray-500 leading-relaxed mb-3">{f.description}</p>
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold"
                          style={{ background: `${S10.teal}12`, color: S10.teal }}
                        >
                          <span>{f.highlightIcon}</span>
                          {f.highlight}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 py-4 border-t border-gray-100">
          {dots.map((d) => (
            <button
              key={d}
              onClick={() => setActive(d)}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === d ? 24 : 8,
                height: 8,
                background: active === d ? S10.navy : '#d1d5db',
              }}
            />
          ))}
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
        {/* Very faint background tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 75% 50%, rgba(56,126,137,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ── Left ── */}
            <div className="flex flex-col gap-7">

              {/* Combined trust badge */}
              <TrustBadge />

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[2.8rem] sm:text-5xl md:text-[3.6rem] lg:text-[4rem] font-black leading-[1.06] tracking-[-0.02em] text-gray-900"
              >
                Less Admin.<br />
                Less Documentation.<br />
                More Time for Care.
              </motion.h1>

              {/* Feature pills: 2×2 grid */}
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

              {/* CTA button */}
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
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20"
                  >
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

            {/* ── Right: Feature Panel ── */}
            <div className="w-full">
              <FeaturePanel />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeLanding;
