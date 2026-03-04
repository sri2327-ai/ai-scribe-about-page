import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, Phone, Bot, Check, Mic, Code2, Calendar, MessageSquare, Workflow, Shield, Stethoscope, Zap, Users, ChevronRight } from 'lucide-react';

const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

// ── Mini Illustrations ────────────────────────────────────────────────────────
const ScribeIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 40%, ${S10.teal}18 0%, transparent 70%)` }} />
    <div className="relative w-full max-w-[260px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}>
          <Mic className="w-8 h-8 text-white" />
        </div>
        <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-2.5">
          {[
            { label: 'Chief Complaint', w: 'w-3/4' },
            { label: 'HPI', w: 'w-full' },
            { label: 'Assessment', w: 'w-5/6' },
            { label: 'ICD-10', w: 'w-1/2', highlight: true, code: 'G43.909' },
            { label: 'CPT', w: 'w-2/5', highlight: true, code: '99213' },
          ].map((row, i) => (
            <motion.div key={row.label} className="flex items-center gap-3"
              initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 * i, duration: 0.4 }}>
              <span className="text-[9px] font-bold w-20 text-right flex-shrink-0" style={{ color: S10.teal }}>{row.label}</span>
              {row.code ? (
                <span className="text-[11px] font-black px-2 py-0.5 rounded-md" style={{ background: `${S10.teal}15`, color: S10.teal }}>{row.code}</span>
              ) : (
                <div className={`h-2 rounded-full ${row.w}`} style={{ background: `${S10.navy}25` }} />
              )}
            </motion.div>
          ))}
        </div>
        <motion.div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-[11px] font-bold shadow-sm"
          style={{ background: `linear-gradient(90deg, ${S10.navy}, ${S10.teal})` }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}>
          <Code2 className="w-3.5 h-3.5" /> Auto ICD-10 · CPT · HCC coded
        </motion.div>
      </div>
    </div>
  </div>
);

const BravoIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 40%, ${S10.mid}18 0%, transparent 70%)` }} />
    <div className="relative w-full max-w-[260px] flex flex-col items-center gap-4">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})` }}>
        <Phone className="w-8 h-8 text-white" />
      </div>
      <div className="w-full space-y-2.5">
        {[
          { from: 'Patient', text: 'I need to reschedule my appointment', right: false },
          { from: 'BRAVO', text: 'Sure! Available Mon 10am or Wed 2pm?', right: true },
          { from: 'Patient', text: 'Wednesday at 2pm works!', right: false },
          { from: 'BRAVO', text: 'Done! Confirmation sent to your phone.', right: true },
        ].map((msg, i) => (
          <motion.div key={i} className={`flex ${msg.right ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 * i }}>
            <div className="max-w-[85%] px-3 py-2 rounded-xl text-[10px] leading-tight font-medium shadow-sm"
              style={msg.right
                ? { background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})`, color: '#fff' }
                : { background: '#F1F5F9', color: S10.navy }}>
              <div className="text-[8px] font-bold mb-0.5 opacity-70">{msg.from}</div>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 justify-center">
        {['Inbound', 'Outbound', 'Scheduling', 'Refills', 'Pre-charting'].map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded-full text-[9px] font-semibold border" style={{ borderColor: `${S10.mid}40`, color: S10.mid, background: `${S10.mid}08` }}>{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const AgentsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 40%, ${S10.navy}12 0%, transparent 70%)` }} />
    <div className="relative w-full max-w-[260px] flex flex-col items-center gap-4">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})` }}>
        <Bot className="w-8 h-8 text-white" />
      </div>
      <div className="w-full space-y-2.5">
        {[
          { icon: <Workflow className="w-3.5 h-3.5" />, label: 'CRM → EHR Sync', done: true },
          { icon: <Calendar className="w-3.5 h-3.5" />, label: 'Calendar & Reminders', done: true },
          { icon: <MessageSquare className="w-3.5 h-3.5" />, label: 'Patient Outreach', done: false },
          { icon: <Shield className="w-3.5 h-3.5" />, label: 'Compliance Checks', done: false },
        ].map((item, i) => (
          <motion.div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white border shadow-sm"
            style={{ borderColor: item.done ? `${S10.teal}40` : '#E2E8F0' }}
            initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 * i }}>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: item.done ? `${S10.teal}15` : '#F1F5F9', color: item.done ? S10.teal : '#94A3B8' }}>
              {item.icon}
            </div>
            <span className="text-[11px] font-semibold flex-1" style={{ color: S10.navy }}>{item.label}</span>
            {item.done
              ? <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: S10.teal }}><Check className="w-2.5 h-2.5 text-white" strokeWidth={3} /></div>
              : <motion.div className="w-4 h-4 rounded-full border-2 border-t-transparent" style={{ borderColor: `${S10.teal}60` }} animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }} />
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
    const id = setInterval(advance, 4000);
    return () => clearInterval(id);
  }, [autoplay, advance]);

  const product = products[active];
  const { Illustration } = product;

  return (
    <section className="py-20 md:py-32 overflow-hidden border-t-4" style={{ background: '#F0F4F8', borderTopColor: '#387E89' }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl">

        {/* ── Product Switcher (Heidi-style) ── */}
        <div className="flex flex-col items-center mb-14 md:mb-20">
          {/* Label */}
          <motion.p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
            style={{ color: S10.teal }}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Our Products
          </motion.p>

          {/* Large product name switcher */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 w-full mb-6">
            {products.map((p, i) => {
              const isActive = i === active;
              const offset = i - active;
              return (
                <button
                  key={p.id}
                  onClick={() => { setActive(i); setAutoplay(false); }}
                  className="relative flex flex-col items-center gap-1 transition-all duration-500 cursor-pointer focus:outline-none"
                  style={{
                    opacity: isActive ? 1 : 0.28,
                    transform: isActive ? 'scale(1)' : `scale(${Math.abs(offset) === 1 ? 0.82 : 0.7})`,
                    transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  <span
                    className="font-black leading-none text-center whitespace-nowrap"
                    style={{
                      color: isActive ? S10.navy : S10.navy,
                      fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
                      fontStyle: isActive ? 'normal' : 'normal',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {p.tag === 'CRUSH' ? 'AI Scribe' : p.tag === 'BRAVO' ? 'AI Receptionist' : 'Custom AI'}
                  </span>
                  {/* Active underline */}
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
              className="text-base sm:text-lg md:text-xl text-center max-w-xl"
              style={{ color: '#64748B' }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {product.tagline}
            </motion.p>
          </AnimatePresence>

          {/* Dot nav */}
          <div className="flex items-center gap-2 mt-6">
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
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            style={{ background: '#fff' }}
          >
            {/* Left: Illustration */}
            <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[460px] flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${S10.navy}08 0%, ${product.color}10 100%)` }}>
              {/* Tag chip */}
              <div className="absolute top-5 left-5">
                <span className="text-[11px] font-black tracking-widest px-3 py-1 rounded-full"
                  style={{ background: `${product.color}18`, color: product.color }}>
                  {product.tag}
                </span>
              </div>
              <div className="w-full h-full">
                <Illustration />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 gap-6">
              {/* Title */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight whitespace-pre-line" style={{ color: S10.navy }}>
                  {product.displayName}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">{product.description}</p>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {product.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] sm:text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${product.color}18` }}>
                      <Check className="w-3 h-3" style={{ color: product.color }} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="flex gap-8 py-4 border-t border-b border-gray-100">
                {product.stats.map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-black leading-none" style={{ color: S10.navy }}>{s.value}</span>
                    <span className="text-[11px] text-gray-400 font-medium mt-1">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={product.ctaHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold text-white shadow-sm hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                  style={{ background: product.gradient }}>
                  {product.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
                {/* Next product hint */}
                {products.length > 1 && (
                  <button
                    onClick={() => { setActive((active + 1) % products.length); setAutoplay(false); }}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl text-[13px] font-semibold border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-all"
                  >
                    Next product <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ProductShowcaseSection;
