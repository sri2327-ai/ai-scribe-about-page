import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Mic, Code2, Phone, Bot, Calendar, MessageSquare, Workflow, Shield, ChevronRight } from 'lucide-react';

const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

// ── Mini Illustrations ────────────────────────────────────────────────────────
const ScribeIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6">
    <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 40%, ${S10.teal}18 0%, transparent 70%)` }} />
    <div className="relative w-full max-w-[240px] sm:max-w-[260px]">
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}>
          <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-4 space-y-2">
          {[
            { label: 'Chief Complaint', w: 'w-3/4' },
            { label: 'HPI', w: 'w-full' },
            { label: 'Assessment', w: 'w-5/6' },
            { label: 'ICD-10', highlight: true, code: 'G43.909' },
            { label: 'CPT', highlight: true, code: '99213' },
          ].map((row, i) => (
            <motion.div key={row.label} className="flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 * i, duration: 0.4 }}>
              <span className="text-[8px] sm:text-[9px] font-bold w-16 sm:w-20 text-right flex-shrink-0" style={{ color: S10.teal }}>{row.label}</span>
              {row.code ? (
                <span className="text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-md" style={{ background: `${S10.teal}15`, color: S10.teal }}>{row.code}</span>
              ) : (
                <div className={`h-2 rounded-full ${row.w}`} style={{ background: `${S10.navy}25` }} />
              )}
            </motion.div>
          ))}
        </div>
        <motion.div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-[10px] sm:text-[11px] font-bold shadow-sm"
          style={{ background: `linear-gradient(90deg, ${S10.navy}, ${S10.teal})` }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}>
          <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Auto ICD-10 · CPT · HCC coded
        </motion.div>
      </div>
    </div>
  </div>
);

const BravoIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6">
    <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 40%, ${S10.mid}18 0%, transparent 70%)` }} />
    <div className="relative w-full max-w-[240px] sm:max-w-[260px] flex flex-col items-center gap-3 sm:gap-4">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})` }}>
        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <div className="w-full space-y-2">
        {[
          { from: 'Patient', text: 'I need to reschedule my appointment', right: false },
          { from: 'BRAVO', text: 'Sure! Available Mon 10am or Wed 2pm?', right: true },
          { from: 'Patient', text: 'Wednesday at 2pm works!', right: false },
          { from: 'BRAVO', text: 'Done! Confirmation sent to your phone.', right: true },
        ].map((msg, i) => (
          <motion.div key={i} className={`flex ${msg.right ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 * i }}>
            <div className="max-w-[85%] px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-[9px] sm:text-[10px] leading-tight font-medium shadow-sm"
              style={msg.right
                ? { background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})`, color: '#fff' }
                : { background: '#F1F5F9', color: S10.navy }}>
              <div className="text-[7px] sm:text-[8px] font-bold mb-0.5 opacity-70">{msg.from}</div>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-center">
        {['Inbound', 'Outbound', 'Scheduling', 'Refills', 'Pre-charting'].map(tag => (
          <span key={tag} className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-semibold border" style={{ borderColor: `${S10.mid}40`, color: S10.mid, background: `${S10.mid}08` }}>{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const AgentsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6">
    <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 40%, ${S10.navy}12 0%, transparent 70%)` }} />
    <div className="relative w-full max-w-[240px] sm:max-w-[260px] flex flex-col items-center gap-3 sm:gap-4">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})` }}>
        <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <div className="w-full space-y-2">
        {[
          { icon: <Workflow className="w-3 h-3 sm:w-3.5 sm:h-3.5" />, label: 'CRM → EHR Sync', done: true },
          { icon: <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />, label: 'Calendar & Reminders', done: true },
          { icon: <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5" />, label: 'Patient Outreach', done: false },
          { icon: <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" />, label: 'Compliance Checks', done: false },
        ].map((item, i) => (
          <motion.div key={i} className="flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-white border shadow-sm"
            style={{ borderColor: item.done ? `${S10.teal}40` : '#E2E8F0' }}
            initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 * i }}>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: item.done ? `${S10.teal}15` : '#F1F5F9', color: item.done ? S10.teal : '#94A3B8' }}>
              {item.icon}
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold flex-1" style={{ color: S10.navy }}>{item.label}</span>
            {item.done
              ? <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: S10.teal }}><Check className="w-2.5 h-2.5 text-white" strokeWidth={3} /></div>
              : <motion.div className="w-4 h-4 rounded-full border-2 border-t-transparent flex-shrink-0" style={{ borderColor: `${S10.teal}60` }} animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }} />
            }
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// ── Products Data ─────────────────────────────────────────────────────────────
const products = [
  {
    id: 'crush',
    tag: 'CRUSH',
    switcherLabel: 'AI Scribe',
    displayName: 'AI Scribe\n& AI Coding',
    tagline: 'Real-time ambient documentation + automated medical coding',
    description: 'Listen, transcribe, and generate structured clinical notes automatically — then code them with ICD-10, CPT, and HCC codes without lifting a finger.',
    color: S10.teal,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})`,
    Illustration: ScribeIllustration,
    bullets: [
      'Real-time AI transcription & specialty-specific notes',
      'Auto ICD-10, CPT & HCC medical coding',
      'Context-aware, hands-free — no clicking required',
      'Works with every EHR, any specialty',
    ],
    stats: [{ label: 'Note Accuracy', value: '99%' }, { label: 'Faster Charting', value: '75%' }],
    cta: 'Explore AI Scribe & Coding',
    ctaHref: '/crush-ai',
  },
  {
    id: 'bravo',
    tag: 'BRAVO',
    switcherLabel: 'AI Receptionist',
    displayName: 'AI Receptionist\n& AI Chat Agent',
    tagline: 'Intelligent voice & chat handling every patient interaction',
    description: 'Never miss a patient call again. BRAVO handles inbound and outbound calls, schedules appointments, processes refill requests, and chats on your website — 24/7.',
    color: S10.mid,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})`,
    Illustration: BravoIllustration,
    bullets: [
      'Handles inbound & outbound calls with live transfers',
      'Appointment scheduling, rescheduling & cancellations',
      'Medication refill requests & pre-charting calls',
      'AI chat agent for web, SMS & patient portal',
    ],
    stats: [{ label: 'Admin Tasks Reduced', value: '85%' }, { label: 'AI Accuracy', value: '99%' }],
    cta: 'Explore AI Receptionist',
    ctaHref: '/bravo',
  },
  {
    id: 'agents',
    tag: 'CUSTOM AI',
    switcherLabel: 'Custom AI Agents',
    displayName: 'Custom\nAI Agents',
    tagline: 'Purpose-built AI workflows tailored to your practice',
    description: 'Go beyond off-the-shelf AI. Build custom agents that automate your unique workflows — from CRM-to-EHR sync to complex patient outreach campaigns — deployed in under a week.',
    color: S10.navy,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})`,
    Illustration: AgentsIllustration,
    bullets: [
      'CRM-to-EHR sync & automated data entry',
      'Patient outreach, follow-ups & reminders',
      'Custom workflow automation for any task',
      'Deployed in under a week, scales instantly',
    ],
    stats: [{ label: 'Hours Saved / Week', value: '20h+' }, { label: 'Clinicians Using', value: '1,000+' }],
    cta: 'Explore Custom AI Agents',
    ctaHref: '/custom-ai-agent',
  },
];

// ── Main Section ──────────────────────────────────────────────────────────────
const ProductShowcaseSection = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const advance = useCallback(() => setActive(p => (p + 1) % products.length), []);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(advance, 10000); // 10 seconds per product
    return () => clearInterval(id);
  }, [autoplay, advance]);

  const product = products[active];
  const { Illustration } = product;

  return (
    <section style={{ background: '#F0F4F8', borderTop: '4px solid #387E89', padding: '60px 0', display: 'block', width: '100%', position: 'relative' }}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className="text-center font-black mb-4 sm:mb-6 leading-tight"
            style={{ color: S10.navy, fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em' }}
          >
            Smarter Notes. AI Agents —<br className="hidden sm:block" />{' '}
            <span style={{ color: S10.teal }}>Building Your Dream Team.</span>
          </h2>

          {/* Product switcher */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 w-full mb-3 flex-wrap">
            {products.map((p, i) => {
              const isActive = i === active;
              const offset = i - active;
              return (
                <button
                  key={p.id}
                  onClick={() => { setActive(i); setAutoplay(false); }}
                  className="relative flex flex-col items-center gap-1 transition-all duration-500 cursor-pointer focus:outline-none"
                  style={{
                    opacity: isActive ? 1 : 0.3,
                    transform: isActive ? 'scale(1)' : `scale(${Math.abs(offset) === 1 ? 0.82 : 0.72})`,
                    transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  <span
                    className="font-black leading-none text-center"
                    style={{
                      color: S10.navy,
                      fontSize: 'clamp(0.95rem, 2.5vw, 2.1rem)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {p.switcherLabel}
                  </span>
                  <motion.div
                    className="h-0.5 w-full rounded-full mt-1"
                    style={{ background: p.color }}
                    animate={{ opacity: isActive ? 1 : 0, scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                  />
                </button>
              );
            })}
          </div>

          {/* Tagline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              className="text-sm sm:text-base md:text-lg text-center max-w-lg px-2"
              style={{ color: '#64748B' }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {product.tagline}
            </motion.p>
          </AnimatePresence>

          {/* Dot nav */}
          <div className="flex items-center gap-2 mt-4 sm:mt-5">
            {products.map((_, i) => (
              <button key={i} onClick={() => { setActive(i); setAutoplay(false); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 24 : 6, height: 6,
                  background: i === active ? product.color : '#CBD5E1',
                }} />
            ))}
          </div>
        </div>

        {/* ── Product Detail Card ── */}
        <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            style={{ background: '#fff' }}
          >
            {/* Left: Illustration */}
            <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[440px] flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${S10.navy}08 0%, ${product.color}10 100%)` }}>
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                <span className="text-[10px] sm:text-[11px] font-black tracking-widest px-2.5 sm:px-3 py-1 rounded-full"
                  style={{ background: `${product.color}18`, color: product.color }}>
                  {product.tag}
                </span>
              </div>
              <div className="w-full h-full">
                <Illustration />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 gap-4 sm:gap-5">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight tracking-tight whitespace-pre-line" style={{ color: S10.navy }}>
                  {product.displayName}
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">{product.description}</p>
              </div>

              {/* Bullets */}
              <ul className="space-y-2">
                {product.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-[13px] text-gray-700">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${product.color}18` }}>
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: product.color }} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="flex gap-6 sm:gap-8 py-3 sm:py-4 border-t border-b border-gray-100">
                {product.stats.map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-black leading-none" style={{ color: S10.navy }}>{s.value}</span>
                    <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium mt-1">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a href={product.ctaHref}
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-[12px] sm:text-[13px] font-bold text-white shadow-sm hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                  style={{ background: product.gradient }}>
                  {product.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-[12px] sm:text-[13px] font-bold text-white shadow-sm hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                  style={{ background: `linear-gradient(135deg, ${S10.teal}, ${S10.mid})` }}>
                  <Calendar className="w-3.5 h-3.5" /> Book a Demo
                </a>
                <button
                  onClick={() => { setActive((active + 1) % products.length); setAutoplay(false); }}
                  className="inline-flex items-center justify-center gap-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-[12px] sm:text-[13px] font-semibold border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-all"
                >
                  Next <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

      </div>
    </section>
  );
};

export default ProductShowcaseSection;
