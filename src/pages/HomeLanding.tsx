import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Database, Shield, Users, Star, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroDemoPanel } from '@/components/landing/FirstSection';

// ─── Trust badge ──────────────────────────────────────────────────────────────
const TrustBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 flex-wrap"
  >
    {/* Trusted by providers */}
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
      <div className="flex items-center gap-1">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4z" fill="#22c55e" stroke="#22c55e" strokeWidth="0.5"/>
        </svg>
        <span className="text-[12px] font-semibold text-gray-700">Trusted by 1,000+ providers</span>
      </div>
    </div>

    {/* Trustpilot */}
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
      <span className="text-[12px] font-semibold text-gray-600">Excellent</span>
      <div className="flex items-center gap-0.5">
        {[...Array(4)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-[#00b67a] text-[#00b67a]" />
        ))}
        <Star className="w-3.5 h-3.5 fill-[#00b67a]/50 text-[#00b67a]" />
      </div>
      <span className="text-[12px] font-bold text-[#00b67a]">Trustpilot</span>
    </div>
  </motion.div>
);

// ─── Feature pill ─────────────────────────────────────────────────────────────
const FeaturePill = ({ icon, text, delay }: { icon: React.ReactNode; text: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay }}
    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-default"
  >
    <span className="text-[#387E89]">{icon}</span>
    <span className="text-[13px] font-medium text-gray-700">{text}</span>
  </motion.div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const HomeLanding = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Very subtle bg gradient */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(56,126,137,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(20,49,81,0.04) 0%, transparent 70%)'
          }}
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── Left ── */}
            <div className="flex flex-col gap-6 lg:pt-4">

              {/* Trust badges */}
              <TrustBadge />

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <h1 className="text-[2.6rem] sm:text-5xl md:text-[3.5rem] lg:text-[3.8rem] font-black leading-[1.05] tracking-tight text-gray-900">
                  Less Admin.<br />
                  <span className="text-gray-900">Less Documentation.</span><br />
                  <span style={{ background: 'linear-gradient(135deg, #143151, #387E89)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    More Time for Care.
                  </span>
                </h1>
              </motion.div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2.5 mt-1">
                <FeaturePill icon={<Clock className="w-4 h-4" />} text="75% faster charting" delay={0.3} />
                <FeaturePill icon={<Database className="w-4 h-4" />} text="Works with all EHRs + thousands of apps" delay={0.36} />
                <FeaturePill icon={<Shield className="w-4 h-4" />} text="HIPAA compliant" delay={0.42} />
                <FeaturePill icon={<Users className="w-4 h-4" />} text="Real Human Support, 24/7" delay={0.48} />
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-bold text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                  style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}
                  onClick={() => window.location.href = '/contact'}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Request A Demo
                </Button>
              </motion.div>

              {/* Trust checkmarks */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="flex flex-col gap-1.5"
              >
                {[
                  'Free 15-minute consultation',
                  'Custom implementation plan',
                  'No setup fees or long-term contracts',
                ].map((line, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#387E89' }} />
                    <span className="text-[13px] text-gray-500">{line}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Demo Panel ── */}
            <div className="lg:mt-0 mt-6">
              <HeroDemoPanel />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeLanding;
