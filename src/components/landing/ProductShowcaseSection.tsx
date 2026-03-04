import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Phone, Bot, Check, Mic, Code2, Calendar, MessageSquare, Workflow, Shield, Stethoscope, Zap, Users } from 'lucide-react';

const S10 = { navy: '#143151', teal: '#387E89', mid: '#5192AE', light: '#A5CCF3' };

// ── Mini animated illustration for each product ──────────────────────────────
const ScribeIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    {/* Ambient glow */}
    <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 40%, ${S10.teal}18 0%, transparent 70%)` }} />
    <div className="relative w-full max-w-[220px]">
      {/* Mic icon center */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}>
          <Mic className="w-7 h-7 text-white" />
        </div>
        {/* Animated note lines */}
        <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm p-3 space-y-2">
          {[
            { label: 'CC', w: 'w-3/4' },
            { label: 'HPI', w: 'w-full' },
            { label: 'Dx', w: 'w-2/3' },
            { label: 'CPT', w: 'w-1/2', highlight: true },
          ].map((row, i) => (
            <motion.div
              key={row.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.4 }}
            >
              <span className="text-[9px] font-bold w-7 text-right flex-shrink-0" style={{ color: S10.teal }}>{row.label}</span>
              <div
                className={`h-1.5 rounded-full ${row.w} ${row.highlight ? 'opacity-90' : 'opacity-60'}`}
                style={{ background: row.highlight ? `linear-gradient(90deg, ${S10.mid}, ${S10.teal})` : `${S10.navy}30` }}
              />
            </motion.div>
          ))}
        </div>
        {/* Coding chip */}
        <motion.div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-[10px] font-semibold shadow-sm"
          style={{ background: `linear-gradient(90deg, ${S10.navy}, ${S10.teal})` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <Code2 className="w-3 h-3" />
          ICD-10 · CPT auto-coded
        </motion.div>
      </div>
    </div>
  </div>
);

const BravoIllustration = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 40%, ${S10.mid}15 0%, transparent 70%)` }} />
      <div className="relative w-full max-w-[220px] flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})` }}>
          <Phone className="w-7 h-7 text-white" />
        </div>
        {/* Chat bubbles */}
        <div className="w-full space-y-2">
          {[
            { from: 'Patient', text: 'I need to reschedule my appointment', right: false },
            { from: 'BRAVO', text: 'I can help! Available Mon 10am or Wed 2pm?', right: true },
          ].map((msg, i) => (
            <motion.div
              key={i}
              className={`flex ${msg.right ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.4 }}
            >
              <div
                className="max-w-[85%] px-3 py-2 rounded-xl text-[10px] leading-tight font-medium shadow-sm"
                style={msg.right
                  ? { background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})`, color: '#fff' }
                  : { background: '#F1F5F9', color: S10.navy }
                }
              >
                <div className="text-[8px] font-bold mb-0.5 opacity-70">{msg.from}</div>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Capability pills row */}
        <div className="flex flex-wrap gap-1 justify-center">
          {['Inbound', 'Outbound', 'Scheduling', 'Refills'].map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-full text-[9px] font-semibold border" style={{ borderColor: `${S10.teal}40`, color: S10.teal, background: `${S10.teal}08` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const AgentsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 40%, ${S10.navy}12 0%, transparent 70%)` }} />
    <div className="relative w-full max-w-[220px] flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md" style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})` }}>
        <Bot className="w-7 h-7 text-white" />
      </div>
      {/* Agent workflow nodes */}
      <div className="w-full space-y-2">
        {[
          { icon: <Workflow className="w-3 h-3" />, label: 'CRM → EHR Sync', done: true },
          { icon: <Calendar className="w-3 h-3" />, label: 'Calendar & Reminders', done: true },
          { icon: <MessageSquare className="w-3 h-3" />, label: 'Patient Outreach', done: false },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white border shadow-sm"
            style={{ borderColor: item.done ? `${S10.teal}40` : '#E2E8F0' }}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18 * i, duration: 0.4 }}
          >
            <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: item.done ? `${S10.teal}15` : '#F1F5F9', color: item.done ? S10.teal : '#94A3B8' }}>
              {item.icon}
            </div>
            <span className="text-[10px] font-medium flex-1" style={{ color: S10.navy }}>{item.label}</span>
            {item.done && <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: S10.teal }}>
              <Check className="w-2 h-2 text-white" strokeWidth={3} />
            </div>}
            {!item.done && <motion.div className="w-3.5 h-3.5 rounded-full border-2 border-t-transparent" style={{ borderColor: `${S10.teal}60` }} animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }} />}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// ── Product card data ─────────────────────────────────────────────────────────
const products = [
  {
    id: 'crush',
    tag: 'CRUSH',
    name: 'AI Medical Scribe & AI Coding',
    tagline: 'Real-time ambient documentation + automated medical coding',
    icon: <FileText className="w-7 h-7 text-white" />,
    color: S10.teal,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})`,
    Illustration: ScribeIllustration,
    bullets: [
      'Real-time AI transcription & structured notes',
      'Auto ICD-10, CPT & HCC coding',
      'Context-aware, specialty-specific documentation',
      'Ambient, hands-free — no clicking required',
    ],
    stats: [
      { icon: <FileText className="w-4 h-4" />, label: 'Note Accuracy', value: '99%' },
      { icon: <Users className="w-4 h-4" />, label: 'Patient Face Time', value: '+40%' },
    ],
    works: ['All specialties'],
    compatible: ['All EHR'],
    cta: 'Explore AI Scribe',
    ctaHref: '/crush-ai',
  },
  {
    id: 'bravo',
    tag: 'BRAVO',
    name: 'AI Receptionist & AI Chat Agent',
    tagline: 'Intelligent voice & chat handling every patient interaction',
    icon: <Phone className="w-7 h-7 text-white" />,
    color: S10.mid,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})`,
    Illustration: BravoIllustration,
    bullets: [
      'Handles inbound & outbound calls with transfers',
      'Appointment scheduling, rescheduling & cancellations',
      'Medication refill requests & pre-charting calls',
      'AI chat agent for web, SMS & portal',
    ],
    stats: [
      { icon: <Zap className="w-4 h-4" />, label: 'Admin Tasks', value: '-85%' },
      { icon: <Shield className="w-4 h-4" />, label: 'AI Accuracy', value: '99%' },
    ],
    works: ['All specialties'],
    compatible: ['All EHR', 'PMS', 'VOIP'],
    cta: 'Explore AI Receptionist',
    ctaHref: '/bravo',
  },
  {
    id: 'agents',
    tag: 'CUSTOM AI',
    name: 'Custom AI Agents',
    tagline: 'Purpose-built AI workflows tailored to your practice',
    icon: <Bot className="w-7 h-7 text-white" />,
    color: S10.navy,
    gradient: `linear-gradient(135deg, ${S10.navy}, ${S10.mid})`,
    Illustration: AgentsIllustration,
    bullets: [
      'CRM-to-EHR sync & automated data entry',
      'Patient outreach, follow-ups & reminders',
      'Custom workflow automation for any task',
      'Deployed in under a week, scales instantly',
    ],
    stats: [
      { icon: <Workflow className="w-4 h-4" />, label: 'Hours Saved/Week', value: '10-20h' },
      { icon: <Stethoscope className="w-4 h-4" />, label: 'Clinicians Using', value: '1,000+' },
    ],
    works: ['All specialties'],
    compatible: ['All EHR', '7,000+ Apps'],
    cta: 'Explore Custom AI Agents',
    ctaHref: '/custom-ai-agent',
  },
];

// ── Card Component ────────────────────────────────────────────────────────────
const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const { Illustration } = product;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Illustration area */}
      <div className="relative h-[200px] bg-gradient-to-b from-gray-50 to-gray-100/50 overflow-hidden">
        <Illustration />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Tag + Title */}
        <div>
          <span
            className="inline-block text-[11px] font-black tracking-widest px-2.5 py-0.5 rounded-full mb-2"
            style={{ background: `${product.color}15`, color: product.color }}
          >
            {product.tag}
          </span>
          <h3 className="text-xl font-extrabold leading-tight" style={{ color: S10.navy }}>
            {product.name}
          </h3>
          <p className="text-[13px] text-gray-500 mt-1 leading-snug">{product.tagline}</p>
        </div>

        {/* Bullets */}
        <ul className="space-y-2">
          {product.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-700">
              <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${product.color}18` }}>
                <Check className="w-2.5 h-2.5" style={{ color: product.color }} strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {product.stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5 text-gray-400">
                <span style={{ color: product.color }}>{s.icon}</span>
                <span className="text-[11px] font-medium">{s.label}</span>
              </div>
              <span className="text-[22px] font-black leading-none" style={{ color: S10.navy }}>{s.value}</span>
            </div>
          ))}
        </div>

        {/* Compatibility */}
        <div className="space-y-1.5 text-[12px]">
          <div className="flex items-center flex-wrap gap-1.5">
            <span className="text-gray-400 font-medium">Works with:</span>
            {product.works.map(w => (
              <span key={w} className="px-2.5 py-0.5 rounded-full font-semibold border" style={{ borderColor: `${product.color}40`, color: product.color, background: `${product.color}08` }}>{w}</span>
            ))}
          </div>
          <div className="flex items-center flex-wrap gap-1.5">
            <span className="text-gray-400 font-medium">Compatible with:</span>
            {product.compatible.map(c => (
              <span key={c} className="px-2.5 py-0.5 rounded-full font-medium text-gray-600 bg-gray-100">{c}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={product.ctaHref}
          className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[14px] font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] shadow-sm"
          style={{ background: product.gradient }}
        >
          {product.cta}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────
const ProductShowcaseSection = () => (
  <section className="py-16 md:py-24 bg-gray-50/60">
    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl">
      {/* Heading */}
      <motion.div
        className="text-center mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight" style={{ color: S10.navy }}>
          Smarter Notes. AI Agents —<br className="hidden sm:block" />
          <span style={{ color: S10.teal }}> Building Your Dream Team.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
          Three AI products. One platform. Designed to eliminate admin and let clinicians focus on care.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductShowcaseSection;
