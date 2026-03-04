import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Database, Shield, Users, Star, ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroDemoPanel } from '@/components/landing/FirstSection';
import ProductShowcaseSection from '@/components/landing/ProductShowcaseSection';

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



const HomeLanding = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 75% 50%, rgba(56,126,137,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">

            {/* ── Left ── */}
            <div className="flex flex-col gap-5 sm:gap-7 lg:pt-4">
              <TrustBadge />

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[2.1rem] sm:text-[2.6rem] md:text-5xl lg:text-[3.8rem] font-black leading-[1.06] tracking-[-0.02em] text-gray-900"
              >
                Less Admin.<br />
                Less Documentation.<br />
                More Time for Care.
              </motion.h1>

              {/* Feature pills — stack to 1 col on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 w-full sm:w-fit"
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
                  className="inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}
                >
                  <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                    <span className="text-[12px] sm:text-[13px] text-gray-500">{line}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Demo Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full relative mt-4 lg:mt-0"
            >
              {/* Ambient glow */}
              <div
                className="absolute -inset-6 rounded-[3rem] pointer-events-none -z-10"
                style={{ background: `radial-gradient(ellipse at 50% 50%, ${S10.teal}14 0%, transparent 70%)`, filter: 'blur(28px)' }}
              />
              <HeroDemoPanel />
            </motion.div>
          </div>
        </div>
      </section>

      <ProductShowcaseSection />
      <Footer />
    </div>
  );
};

export default HomeLanding;
