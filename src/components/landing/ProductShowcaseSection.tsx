import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, Check, Mic, Code2, Phone, Bot, Calendar, MessageSquare, Workflow, Shield, ChevronRight } from 'lucide-react';

const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };
const AUTOPLAY_MS = 10000;

// ── Illustrations ─────────────────────────────────────────────────────────────
const ScribeIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-8">
    <div className="w-full max-w-[260px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}>
          <Mic className="w-7 h-7 text-white" />
        </div>
        <div className="w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 space-y-2.5">
          {[
            { label: 'Chief Complaint', w: 'w-3/4' },
            { label: 'HPI', w: 'w-full' },
            { label: 'Assessment', w: 'w-5/6' },
            { label: 'ICD-10', code: 'G43.909' },
            { label: 'CPT', code: '99213' },
          ].map((row, i) => (
            <div key={row.label} className="flex items-center gap-3"
              style={{ opacity: 1, animation: `fadeSlideIn 0.4s ease-out ${0.1 * i}s both` }}>
              <span className="text-[9px] font-bold w-20 text-right flex-shrink-0 text-teal-300">{row.label}</span>
              {row.code ? (
                <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-teal-400/20 text-teal-300">{row.code}</span>
              ) : (
                <div className={`h-1.5 rounded-full ${row.w} bg-white/20`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold text-white/90 bg-white/10 border border-white/20">
          <Code2 className="w-3.5 h-3.5 text-teal-300" /> Auto ICD-10 · CPT · HCC coded
        </div>
      </div>
    </div>
  </div>
);

const BravoIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-8">
    <div className="w-full max-w-[260px] flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})` }}>
        <Phone className="w-7 h-7 text-white" />
      </div>
      <div className="w-full space-y-2">
        {[
          { from: 'Patient', text: 'I need to reschedule my appointment', right: false },
          { from: 'BRAVO', text: 'Sure! Available Mon 10am or Wed 2pm?', right: true },
          { from: 'Patient', text: 'Wednesday at 2pm works!', right: false },
          { from: 'BRAVO', text: 'Done! Confirmation sent to your phone.', right: true },
        ].map((msg, i) => (
          <div key={i} className={`flex ${msg.right ? 'justify-end' : 'justify-start'}`}
            style={{ animation: `fadeSlideIn 0.4s ease-out ${0.15 * i}s both` }}>
            <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[10px] leading-tight font-medium shadow-sm ${msg.right ? 'text-white' : 'bg-white/10 text-white/90 border border-white/20'}`}
              style={msg.right ? { background: `linear-gradient(135deg, ${S10.teal}, ${S10.mid})` } : {}}>
              <div className="text-[8px] font-bold mb-0.5 opacity-60">{msg.from}</div>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 justify-center">
        {['Inbound', 'Outbound', 'Scheduling', 'Refills', 'Pre-charting'].map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded-full text-[9px] font-semibold border border-blue-300/30 text-blue-200 bg-blue-400/10">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const AgentsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-8">
    <div className="w-full max-w-[260px] flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})` }}>
        <Bot className="w-7 h-7 text-white" />
      </div>
      <div className="w-full space-y-2">
        {[
          { icon: <Workflow className="w-3.5 h-3.5" />, label: 'CRM → EHR Sync', done: true },
          { icon: <Calendar className="w-3.5 h-3.5" />, label: 'Calendar & Reminders', done: true },
          { icon: <MessageSquare className="w-3.5 h-3.5" />, label: 'Patient Outreach', done: false },
          { icon: <Shield className="w-3.5 h-3.5" />, label: 'Compliance Checks', done: false },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl border"
            style={{
              background: item.done ? 'rgba(56,126,137,0.15)' : 'rgba(255,255,255,0.06)',
              borderColor: item.done ? 'rgba(56,126,137,0.4)' : 'rgba(255,255,255,0.12)',
              animation: `fadeSlideIn 0.4s ease-out ${0.12 * i}s both`,
            }}>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: item.done ? 'rgba(56,126,137,0.25)' : 'rgba(255,255,255,0.1)', color: item.done ? '#6ee7b7' : '#94a3b8' }}>
              {item.icon}
            </div>
            <span className="text-[11px] font-semibold flex-1 text-white/90">{item.label}</span>
            {item.done
              ? <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-teal-500"><Check className="w-2.5 h-2.5 text-white" strokeWidth={3} /></div>
              : <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-blue-300/50 flex-shrink-0 animate-spin" />
            }
          </div>
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
    tabLabel: 'AI Scribe',
    displayName: 'AI Scribe & AI Coding',
    tagline: 'Real-time ambient documentation + automated medical coding',
    description: 'Listen, transcribe, and generate structured clinical notes automatically — then code them with ICD-10, CPT, and HCC codes without lifting a finger.',
    color: S10.teal,
    Illustration: ScribeIllustration,
    bullets: [
      'Real-time AI transcription & specialty-specific notes',
      'Auto ICD-10, CPT & HCC medical coding',
      'Context-aware, hands-free — no clicking required',
      'Works with every EHR, any specialty',
    ],
    stats: [{ label: 'Note Accuracy', value: '99%' }, { label: 'Faster Charting', value: '75%' }],
    cta: 'Explore AI Scribe',
    ctaHref: '/crush-ai',
  },
  {
    id: 'bravo',
    tag: 'BRAVO',
    tabLabel: 'AI Receptionist',
    displayName: 'AI Receptionist & Chat Agent',
    tagline: 'Intelligent voice & chat handling every patient interaction',
    description: 'Never miss a patient call again. BRAVO handles inbound and outbound calls, schedules appointments, processes refill requests, and chats on your website — 24/7.',
    color: S10.mid,
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
    tabLabel: 'Custom AI Agents',
    displayName: 'Custom AI Agents',
    tagline: 'Purpose-built AI workflows tailored to your practice',
    description: 'Go beyond off-the-shelf AI. Build custom agents that automate your unique workflows — from CRM-to-EHR sync to complex patient outreach campaigns — deployed in under a week.',
    color: S10.light,
    Illustration: AgentsIllustration,
    bullets: [
      'CRM-to-EHR sync & automated data entry',
      'Patient outreach, follow-ups & reminders',
      'Custom workflow automation for any task',
      'Deployed in under a week, scales instantly',
    ],
    stats: [{ label: 'Hours Saved / Week', value: '20h+' }, { label: 'Clinicians Using', value: '1,000+' }],
    cta: 'Explore Custom Agents',
    ctaHref: '/custom-ai-agent',
  },
];

// ── Progress Bar ──────────────────────────────────────────────────────────────
const ProgressBar = ({ active, color, onComplete }: { active: number; color: string; onComplete: () => void }) => {
  const [width, setWidth] = useState(0);
  const rafRef = useRef<number>();
  const startRef = useRef<number>();

  useEffect(() => {
    setWidth(0);
    startRef.current = undefined;

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_MS) * 100, 100);
      setWidth(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, onComplete]);

  return (
    <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-none" style={{ width: `${width}%`, background: color }} />
    </div>
  );
};

// ── Main Section ──────────────────────────────────────────────────────────────
const ProductShowcaseSection = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((i: number) => {
    setActive(i);
    setAnimKey(k => k + 1);
  }, []);

  const advance = useCallback(() => {
    setActive(p => {
      const next = (p + 1) % products.length;
      setAnimKey(k => k + 1);
      return next;
    });
  }, []);

  const handleTabClick = (i: number) => {
    goTo(i);
    setAutoplay(false);
  };

  const product = products[active];
  const { Illustration } = product;

  return (
    <>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .product-content-anim { animation: contentIn 0.45s ease-out both; }
      `}</style>

      <section style={{
        background: `linear-gradient(160deg, ${S10.navy} 0%, #0f2540 60%, #112038 100%)`,
        padding: '80px 0 100px',
        width: '100%',
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle, ${S10.teal}12 0%, transparent 70%)` }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: `radial-gradient(circle, ${S10.mid}0A 0%, transparent 70%)` }} />
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>

          {/* ── Header ── */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: `${S10.teal}20`, border: `1px solid ${S10.teal}40`,
              borderRadius: '999px', padding: '6px 16px', marginBottom: '20px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: S10.teal, boxShadow: `0 0 8px ${S10.teal}` }} />
              <span style={{ color: S10.teal, fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>AI-Powered Platform</span>
            </div>
            <h2 style={{
              color: '#ffffff',
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 12px',
            }}>
              Smarter Notes. AI Agents —{' '}
              <span style={{ color: S10.teal }}>Building Your Dream Team.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', maxWidth: '520px', margin: '0 auto' }}>
              One platform, three powerful products — built to eliminate admin and let clinicians focus on care.
            </p>
          </div>

          {/* ── Tab Switcher ── */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'flex', gap: '4px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '5px',
              width: 'fit-content',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              {products.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleTabClick(i)}
                    style={{
                      padding: '10px 22px',
                      borderRadius: '12px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 'clamp(12px, 1.4vw, 14px)',
                      fontWeight: 700,
                      transition: 'all 0.25s ease',
                      background: isActive ? p.color : 'transparent',
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                      boxShadow: isActive ? `0 4px 16px ${p.color}40` : 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Progress bar */}
            {autoplay && (
              <div style={{ maxWidth: '440px', margin: '14px auto 0' }}>
                <ProgressBar key={active} active={active} color={product.color} onComplete={advance} />
              </div>
            )}
          </div>

          {/* ── Product Card ── */}
          <div
            key={animKey}
            className="product-content-anim"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Left: Illustration */}
            <div style={{
              minHeight: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, ${product.color}12 100%)`,
              borderRight: '1px solid rgba(255,255,255,0.08)',
            }}>
              {/* Tag badge */}
              <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                <span style={{
                  fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em',
                  padding: '4px 12px', borderRadius: '999px',
                  background: `${product.color}25`, color: product.color,
                  border: `1px solid ${product.color}40`,
                  textTransform: 'uppercase',
                }}>
                  {product.tag}
                </span>
              </div>
              <Illustration />
            </div>

            {/* Right: Content */}
            <div style={{ padding: 'clamp(28px, 5vw, 48px)', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              <div>
                <h3 style={{ color: '#fff', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 10px' }}>
                  {product.displayName}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>{product.description}</p>
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {product.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>
                    <span style={{
                      width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0, marginTop: '1px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `${product.color}25`, border: `1px solid ${product.color}50`,
                    }}>
                      <Check style={{ width: '10px', height: '10px', color: product.color, strokeWidth: 3 }} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '28px', padding: '16px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                {product.stats.map((s, i) => (
                  <div key={i}>
                    <div style={{ color: '#fff', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, lineHeight: 1 }}>{s.value}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 500, marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                <a href={product.ctaHref} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 22px', borderRadius: '12px',
                  fontSize: '13px', fontWeight: 700, color: '#fff', textDecoration: 'none',
                  background: `linear-gradient(135deg, ${S10.navy}, ${product.color})`,
                  border: `1px solid ${product.color}60`,
                  boxShadow: `0 4px 16px ${product.color}30`,
                  transition: 'all 0.2s ease',
                }}>
                  {product.cta} <ArrowRight style={{ width: '14px', height: '14px' }} />
                </a>
                <a href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 22px', borderRadius: '12px',
                  fontSize: '13px', fontWeight: 700, color: '#fff', textDecoration: 'none',
                  background: `linear-gradient(135deg, ${S10.teal}, ${S10.mid})`,
                  boxShadow: `0 4px 16px ${S10.teal}30`,
                  transition: 'all 0.2s ease',
                }}>
                  <Calendar style={{ width: '14px', height: '14px' }} /> Book a Demo
                </a>
                <button
                  onClick={() => { handleTabClick((active + 1) % products.length); }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    padding: '11px 16px', borderRadius: '12px',
                    fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                    background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                >
                  Next <ChevronRight style={{ width: '14px', height: '14px' }} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProductShowcaseSection;
