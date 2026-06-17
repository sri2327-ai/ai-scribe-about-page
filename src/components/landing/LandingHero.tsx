import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Star, Clock, Phone, Plug, Shield, ArrowRight, Play, Check,
  FileText, Bot, Video, BarChart3, Sparkles, Network, CheckCircle2,
} from 'lucide-react';
import { ScribeDemo } from '@/components/landing/FirstSection';

// ─── Brand palette (preserved) ────────────────────────────────────────────────
const S10 = {
  navy:  '#143151',
  teal:  '#387E89',
  mid:   '#5192AE',
  light: '#A5CCF3',
};

// Layered tokens that mirror the prompt's UX intent but using brand colors
const BRAND      = S10.teal;     // active tab + primary CTA accent (was #0EA5E9)
const BRAND_DARK = S10.navy;
const BRAND_SOFT = '#E6F1F2';    // soft brand-teal tint (was #EFF6FF)
const TEXT_HEAD  = '#0F172A';
const TEXT_MUTED = '#64748B';
const TEXT_BODY  = '#374151';
const BORDER     = '#E5E7EB';
const PANEL_BG   = '#F8FAFC';

// ─── Trust Pill ───────────────────────────────────────────────────────────────
const TrustPill = () => (
  <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-[13px]"
       style={{ borderColor: BORDER, color: TEXT_MUTED }}>
    <TrendingUp className="w-3.5 h-3.5" style={{ color: '#10B981' }} />
    <span>Trusted by 1,000+ providers</span>
    <span className="h-3 w-px" style={{ background: BORDER }} />
    <span className="flex items-center gap-0.5">
      {[0,1,2,3,4].map(i => (
        <Star key={i} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </span>
    <span className="font-semibold" style={{ color: TEXT_BODY }}>Trustpilot</span>
  </div>
);

// ─── Stat chip ────────────────────────────────────────────────────────────────
const StatChip = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-[5px] text-[13px] font-medium"
       style={{ borderColor: BORDER, background: '#F9FAFB', color: TEXT_BODY }}>
    <Icon className="w-4 h-4" style={{ color: S10.teal }} />
    {text}
  </div>
);

// ─── Tab metadata ─────────────────────────────────────────────────────────────
type TabKey = 1 | 2 | 3 | 4 | 5;
const TABS: { id: TabKey; icon: any; label: string }[] = [
  { id: 1, icon: FileText, label: 'Charting & Coding' },
  { id: 2, icon: Phone,    label: 'Front Office' },
  { id: 3, icon: Bot,      label: 'AI Agents' },
  { id: 4, icon: Plug,     label: 'Integrations' },
  { id: 5, icon: BarChart3,label: 'Intelligence' },
];

// Per-tab content config — badge palette uses brand-adjacent tones
const TAB_CONTENT: Record<TabKey, {
  badge: string;
  badgeBg: string;
  badgeText: string;
  trust: string;
  headline: string;
  body: string;
  greenChips: string[];
  grayChip: string;
  ctas: { label: string; primary?: boolean }[];
}> = {
  1: {
    badge: '✦ CRUSH', badgeBg: BRAND_SOFT, badgeText: BRAND_DARK,
    trust: 'No EHR API needed',
    headline: 'Stop charting after hours.',
    body: 'CRUSH listens to your encounter, writes the note, and codes it — ICD-10, CPT & HCC — in under 60 seconds. Ready in your EHR before the next patient.',
    greenChips: ['2+ hrs saved/day', '34% more codes captured'],
    grayChip: '50+ specialties',
    ctas: [{ label: 'Explore CRUSH', primary: true }, { label: 'Book a demo' }],
  },
  2: {
    badge: '✦ BRAVO', badgeBg: BRAND_SOFT, badgeText: BRAND_DARK,
    trust: 'Setup in 48 hours',
    headline: 'Every call answered. 24/7. Zero extra staff.',
    body: 'BRAVO handles scheduling, intake, insurance verification, and refill requests around the clock — so your front desk focuses on the patients who are actually there.',
    greenChips: ['40% fewer no-shows', '$150K+ saved/year'],
    grayChip: '48hr setup',
    ctas: [{ label: 'Explore BRAVO', primary: true }, { label: 'Hear BRAVO live' }],
  },
  3: {
    badge: '✦ Custom AI Agents', badgeBg: '#FFFBEB', badgeText: '#92400E',
    trust: 'Deployed in under a week',
    headline: 'Your AI clinical team. Built for your specialty.',
    body: 'AI Nurse, AI Pharmacy Tech, AI Medical Assistant, AI Admin — each agent configured for your payer mix. Prior auth from 45 minutes to under 5.',
    greenChips: ['Prior auth: 45 min → 5 min', '7 agent roles available'],
    grayChip: '7,000+ integrations',
    ctas: [{ label: 'Build your AI team', primary: true }],
  },
  4: {
    badge: '✦ CONNECT', badgeBg: BRAND_SOFT, badgeText: BRAND_DARK,
    trust: 'Works with your existing systems',
    headline: 'Every system connected. Every workflow automated.',
    body: 'CONNECT integrates CRUSH, BRAVO, and your AI agents with EHRs, practice management platforms, billing systems, labs, telehealth, and CRM tools. Deploy AI across your organization without replacing a single system.',
    greenChips: ['7,000+ integrations', 'Go live in days'],
    grayChip: 'No rip-and-replace',
    ctas: [{ label: 'Explore CONNECT', primary: true }, { label: 'View integrations' }],
  },
  5: {
    badge: '✦ SHINE', badgeBg: '#ECFDF5', badgeText: '#065F46',
    trust: 'Every note reviewed',
    headline: 'Every note scored. Every revenue gap flagged.',
    body: 'SHINE analyses every CRUSH-generated note for quality, compliance, and medical-legal risk — then tells you exactly what to improve and how much revenue you’re leaving on the table.',
    greenChips: ['34% more diagnoses captured', 'Medical-legal risk detection'],
    grayChip: 'CDI automation',
    ctas: [{ label: 'Explore SHINE', primary: true }, { label: 'See a full audit' }],
  },
};

// ─── Tab widgets ──────────────────────────────────────────────────────────────
const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center rounded-lg text-[12px] text-center"
       style={{ height: 140, border: `1.5px dashed ${BORDER}`, color: TEXT_MUTED, background: '#FAFBFC' }}>
    {children}
  </div>
);

const IntegrationsWidget = () => {
  const nodes = ['EHR', 'Billing', 'Labs', 'CRM', 'Telehealth', 'Analytics'];
  return (
    <div className="rounded-[10px] p-3" style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}>
      <div className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: '#065F46' }}>
        <CheckCircle2 className="w-3.5 h-3.5" />
        All systems connected
      </div>
      <div className="my-3 flex flex-wrap items-center justify-center gap-1.5">
        {nodes.slice(0,3).map(n => (
          <span key={n} className="px-2.5 py-1 rounded-full text-[10.5px] font-medium bg-white"
                style={{ border: `1px solid ${BORDER}`, color: TEXT_BODY }}>{n}</span>
        ))}
        <span className="px-3 py-1.5 rounded-full text-[11px] font-bold text-white mx-1"
              style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}>S10.ai</span>
        {nodes.slice(3).map(n => (
          <span key={n} className="px-2.5 py-1 rounded-full text-[10.5px] font-medium bg-white"
                style={{ border: `1px solid ${BORDER}`, color: TEXT_BODY }}>{n}</span>
        ))}
      </div>
      <div className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-[11px]"
           style={{ background: '#ECFDF5', color: '#065F46' }}>
        <Check className="w-3.5 h-3.5" />
        Data synchronized across all connected platforms
      </div>
    </div>
  );
};

const NoteScorecardWidget = () => (
  <div className="rounded-[10px] p-3" style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}>
    <div className="flex items-center justify-between mb-2">
      <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>Note Quality Score</span>
      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ background: '#ECFDF5', color: '#065F46' }}>94 / 100</span>
    </div>
    {[
      { label: 'Specificity', val: 92, color: '#10B981' },
      { label: 'Compliance', val: 96, color: '#10B981' },
      { label: 'Revenue capture', val: 88, color: '#F59E0B' },
    ].map(r => (
      <div key={r.label} className="mb-1.5">
        <div className="flex justify-between text-[10.5px] mb-0.5" style={{ color: TEXT_BODY }}>
          <span>{r.label}</span><span className="font-semibold">{r.val}%</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#E2E8F0' }}>
          <div className="h-full rounded-full" style={{ width: `${r.val}%`, background: r.color }} />
        </div>
      </div>
    ))}
  </div>
);

const BravoCallWidget = () => (
  <div className="rounded-[10px] p-3" style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}>
    <div className="flex items-center justify-between mb-2.5">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full flex items-center justify-center"
             style={{ background: BRAND_SOFT, color: BRAND_DARK }}>
          <Phone className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[11.5px] font-semibold" style={{ color: TEXT_HEAD }}>Incoming call · Mrs. Patel</p>
          <p className="text-[10px]" style={{ color: TEXT_MUTED }}>Refill request · 00:42</p>
        </div>
      </div>
      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: '#DCFCE7', color: '#15803D' }}>BRAVO handling</span>
    </div>
    <div className="space-y-1.5">
      {['Verified identity & DOB','Located active Rx in EHR','Sent to provider for approval','Scheduled callback at 3:15 PM'].map((s,i) => (
        <div key={i} className="flex items-center gap-1.5 text-[11px]" style={{ color: TEXT_BODY }}>
          <Check className="w-3 h-3" style={{ color: '#10B981' }} />{s}
        </div>
      ))}
    </div>
  </div>
);

const AgentsWidget = () => (
  <div className="rounded-[10px] p-3" style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}>
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-lg bg-white p-2.5" style={{ border: `1px solid ${BORDER}` }}>
        <p className="text-[10px] font-semibold mb-1" style={{ color: TEXT_MUTED }}>BEFORE</p>
        <p className="text-[12px] font-bold" style={{ color: TEXT_HEAD }}>45 min</p>
        <p className="text-[10px]" style={{ color: TEXT_MUTED }}>Manual prior auth</p>
      </div>
      <div className="rounded-lg p-2.5" style={{ background: '#ECFDF5', border: '1px solid #A7F3D0' }}>
        <p className="text-[10px] font-semibold mb-1" style={{ color: '#065F46' }}>AFTER</p>
        <p className="text-[12px] font-bold" style={{ color: '#065F46' }}>&lt; 5 min</p>
        <p className="text-[10px]" style={{ color: '#065F46' }}>AI Pharmacy Tech</p>
      </div>
    </div>
    <div className="mt-2 flex flex-wrap gap-1">
      {['AI Nurse','AI Pharma','AI MA','AI Admin','AI Coder'].map(r => (
        <span key={r} className="text-[10px] px-2 py-0.5 rounded-full bg-white"
              style={{ border: `1px solid ${BORDER}`, color: TEXT_BODY }}>{r}</span>
      ))}
    </div>
  </div>
);

// ─── Tab panel ────────────────────────────────────────────────────────────────
const TabPanel = ({ id }: { id: TabKey }) => {
  const c = TAB_CONTENT[id];
  const widget =
    id === 1 ? <div className="h-[360px]"><ScribeDemo /></div> :
    id === 2 ? <BravoCallWidget /> :
    id === 3 ? <AgentsWidget /> :
    id === 4 ? <IntegrationsWidget /> :
               <NoteScorecardWidget />;

  return (
    <motion.div key={id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}
                className="p-4 bg-white" style={{ minHeight: 300 }}>
      {/* Row 1 — badge + trust */}
      <div className="flex items-center justify-between">
        <span className="rounded-full px-2.5 py-[3px] text-[11px] font-semibold"
              style={{ background: c.badgeBg, color: c.badgeText }}>
          {c.badge}
        </span>
        <span className="flex items-center gap-1 text-[10px] font-medium" style={{ color: '#10B981' }}>
          <Check className="w-3 h-3" />{c.trust}
        </span>
      </div>

      {/* Row 2 — headline */}
      <h3 className="mt-2 text-[16px] font-bold leading-tight" style={{ color: TEXT_HEAD }}>{c.headline}</h3>

      {/* Row 3 — body */}
      <p className="mt-1.5 text-[13px] leading-[1.6] max-w-[340px]" style={{ color: TEXT_MUTED }}>{c.body}</p>

      {/* Row 4 — chips */}
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {c.greenChips.map(t => (
          <span key={t} className="rounded-full px-2.5 py-[3px] text-[11px]"
                style={{ background: '#ECFDF5', color: '#065F46' }}>{t}</span>
        ))}
        <span className="rounded-full px-2.5 py-[3px] text-[11px]"
              style={{ background: '#F1F5F9', color: '#475569' }}>{c.grayChip}</span>
      </div>

      {/* Row 5 — widget */}
      <div className="mt-3.5">{widget}</div>

      {/* Row 6 — CTA links */}
      <div className="mt-3 flex flex-wrap gap-4">
        {c.ctas.map((cta, i) => (
          <a key={i} href="#" className="text-[12px] font-medium hover:underline"
             style={{ color: cta.primary ? BRAND : TEXT_MUTED }}>
            {cta.label} →
          </a>
        ))}
      </div>
    </motion.div>
  );
};

// ─── Main Hero ────────────────────────────────────────────────────────────────
const LandingHero: React.FC = () => {
  const [active, setActive] = useState<TabKey>(1);

  return (
    <section className="bg-white py-8 sm:py-10 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">

        {/* ── LEFT ── */}
        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TrustPill />
          </div>

          <h1 className="font-extrabold tracking-tight"
              style={{ color: TEXT_HEAD, fontSize: 'clamp(32px, 7vw, 64px)', lineHeight: 1.1 }}>
            Less Admin.<br />
            <span style={{ color: BRAND }}>Less Charting.</span><br />
            More Time for Your Patient.
          </h1>

          <p className="text-[15px] sm:text-[16px] leading-[1.6]" style={{ color: TEXT_MUTED, maxWidth: 420 }}>
            One AI platform covering your entire practice — from the first patient call to the final coded note.
            Any EHR. No setup fees.
          </p>

          {/* Stat chips — 2-col grid on mobile for clean wrap */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
            <StatChip icon={Clock}  text="75% faster charting" />
            <StatChip icon={Phone}  text="40% fewer no-shows" />
            <StatChip icon={Plug}   text="100+ EHRs & 7,000 apps" />
            <StatChip icon={Shield} text="HIPAA · GDPR · ISO" />
          </div>

          {/* CTAs — full width on mobile for big tap targets */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-2">
            <button
              onClick={() => (window.location.href = '/contact')}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 sm:py-3 text-[15px] font-semibold text-white transition-colors min-h-[48px]"
              style={{ background: BRAND }}
              onMouseEnter={(e) => (e.currentTarget.style.background = BRAND_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.background = BRAND)}
            >
              <ArrowRight className="w-4 h-4" />
              Request A Demo
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 sm:py-3 text-[15px] font-semibold bg-white transition-colors hover:bg-slate-50 min-h-[48px]"
              style={{ border: '1.5px solid #CBD5E1', color: TEXT_BODY }}
            >
              <Play className="w-4 h-4" />
              Quick Tour
            </button>
          </div>

          {/* Offer row */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-[13px]" style={{ color: TEXT_MUTED }}>
            {['Free 15-min consultation','No setup fees','No long-term contracts'].map(o => (
              <span key={o} className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#10B981' }} />{o}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Demo panel ── */}
        <div className="rounded-2xl overflow-hidden shadow-sm w-full"
             style={{ border: '1px solid #E2E8F0', background: PANEL_BG }}>
          {/* Header strip */}
          <div className="px-4 sm:px-5 py-2.5 text-center"
               style={{ background: '#0F172A' }}>
            <p className="text-[12px] sm:text-[13px] font-medium text-white tracking-[0.03em] m-0">
              One AI Platform. Every Task Automated.
            </p>
          </div>

          {/* Tab strip — horizontally scrollable on mobile with snap + larger tap targets */}
          <div
            className="bg-white flex overflow-x-auto snap-x snap-mandatory sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ borderBottom: '1px solid #E2E8F0', WebkitOverflowScrolling: 'touch' }}
            role="tablist"
            aria-label="Product demos"
          >
            {TABS.map(t => {
              const Icon = t.icon;
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(t.id)}
                  className="flex-shrink-0 sm:flex-1 flex flex-col items-center justify-center gap-1 transition-colors snap-start min-w-[88px] sm:min-w-0"
                  style={{
                    padding: '12px 10px',
                    minHeight: 56,
                    color: isActive ? BRAND : '#94A3B8',
                    borderBottom: isActive ? `2px solid ${BRAND}` : '2px solid transparent',
                    background: isActive ? BRAND_SOFT : 'transparent',
                  }}
                >
                  <Icon className="w-[17px] h-[17px]" />
                  <span className="text-[11.5px] font-semibold leading-[1.2] text-center whitespace-nowrap">{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Panel content */}
          <AnimatePresence mode="wait">
            <TabPanel id={active} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
