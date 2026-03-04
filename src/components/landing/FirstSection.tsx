
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { Clock, Database, Shield, FileText, Users, CheckCircle, TrendingUp, Star, Zap, ArrowRight, Play, Phone as PhoneIcon, Link as LinkIcon, Stethoscope, User, Activity, ClipboardList, Bot, CreditCard, FlaskConical, PhoneMissed, Network, Layers, Puzzle, Globe } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

import { Card, CardContent } from '@/components/ui/card';
import { useWindowSize } from '@/hooks/use-window-size';
import { useIsMobile } from '@/hooks/use-mobile';
import OptimizedImage from '@/components/ui/optimized-image';


// Simplified voice animation component
const VoiceAnimation = ({
  size = "md",
  color = "#387E89",
  isAnimating = true
}) => {
  const barCount = size === "xs" ? 3 : size === "sm" ? 4 : 5;
  const maxHeight = size === "xs" ? 8 : size === "sm" ? 12 : 16;
  return <div className="flex items-end gap-0.5 h-6" aria-hidden="true">
      {Array(barCount).fill(0).map((_, idx) => <div key={idx} className={`rounded-full ${isAnimating ? 'animate-pulse' : ''}`} style={{
      backgroundColor: color,
      width: "2px",
      height: isAnimating ? `${Math.max(2, Math.random() * maxHeight)}px` : "2px",
      animationDelay: `${idx * 100}ms`
    }} />)}
    </div>;
};

// ─── Waveform bars component ────────────────────────────────────────────────
const WaveformBars = ({ isActive, color = "#387E89", bars = 32 }: { isActive: boolean; color?: string; bars?: number }) => {
  const [heights, setHeights] = useState(() => Array(bars).fill(0).map(() => Math.random() * 60 + 20));
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setHeights(Array(bars).fill(0).map(() => Math.random() * 60 + 20));
    }, 120);
    return () => clearInterval(interval);
  }, [isActive, bars]);
  return (
    <div className="flex items-center gap-[2px] h-10">
      {heights.map((h, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-100"
          style={{
            width: 3,
            height: isActive ? `${h}%` : '15%',
            background: isActive
              ? `linear-gradient(180deg, ${color}cc, ${color})`
              : '#e5e7eb',
            opacity: isActive ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
};

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

// ─── S10 Brand colors ────────────────────────────────────────────────────────
const S10 = {
  navy:  '#143151',
  teal:  '#387E89',
  mid:   '#5192AE',
  light: '#A5CCF3',
};

// White glassmorphism design system — brand-matched
const DK = {
  bg:       'rgba(255,255,255,0.92)',
  surface:  'rgba(248,251,255,0.85)',
  elevated: 'rgba(255,255,255,0.95)',
  border:   'rgba(20,49,81,0.10)',
  borderHi: 'rgba(56,126,137,0.28)',
  text:     '#143151',
  muted:    '#5192AE',
  accent:   '#387E89',
  accent2:  '#5192AE',
};

const palette = {
  blue:   { bg: '#EEF4FA', border: `${S10.mid}30`, text: S10.navy,  icon: S10.mid },
  teal:   { bg: '#EBF5F6', border: `${S10.teal}35`, text: S10.teal, icon: S10.teal },
  violet: { bg: '#EFF4FA', border: `${S10.navy}25`, text: S10.navy, icon: S10.navy },
  amber:  { bg: '#F0F7F8', border: `${S10.teal}40`, text: S10.teal, icon: S10.teal },
  rose:   { bg: '#EDF3F9', border: `${S10.mid}35`,  text: S10.mid,  icon: S10.mid },
  emerald:{ bg: '#EBF5F6', border: `${S10.teal}30`, text: S10.teal, icon: S10.teal },
  sky:    { bg: '#EFF6FC', border: `${S10.mid}30`,  text: S10.mid,  icon: S10.mid },
  indigo: { bg: '#EEF3F9', border: `${S10.navy}20`, text: S10.navy, icon: S10.navy },
};

// ─── Shared dark card wrapper ────────────────────────────────────────────────
const DkCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`rounded-xl overflow-hidden ${className}`}
    style={{ background: DK.elevated, border: `1px solid ${DK.border}` }}
  >
    {children}
  </div>
);

// ─── Scribe Demo ─────────────────────────────────────────────────────────────
const scribeConversation = [
  { speaker: 'clinician' as const, text: 'Good morning! What brings you in today?' },
  { speaker: 'patient' as const, text: "Persistent headache for three days and neck stiffness." },
  { speaker: 'clinician' as const, text: 'Any sensitivity to light or fever?' },
  { speaker: 'patient' as const, text: 'Yes, bright lights really bother me.' },
  { speaker: 'clinician' as const, text: "Ordering a CT scan and bloodwork to rule out anything serious." },
];
type NoteItem = { label: string; abbr: string; value: string; abbrev: string; color: string };
const generatedNote: NoteItem[] = [
  { label: 'Subjective', abbr: 'S', value: 'Headache × 3 days, neck stiffness, photophobia present', abbrev: 'S', color: S10.navy },
  { label: 'Objective',  abbr: 'O', value: 'Afebrile on exam. Nuchal rigidity noted.', abbrev: 'O', color: S10.teal },
  { label: 'Assessment', abbr: 'A', value: 'R/O meningitis vs. tension headache', abbrev: 'A', color: S10.mid },
  { label: 'Plan',       abbr: 'P', value: 'CT Head + CBC + CMP ordered. F/U in 48h.', abbrev: 'P', color: S10.navy },
];

export const ScribeDemo = () => {
  const [phase, setPhase] = useState<'idle' | 'recording' | 'generating' | 'done'>('idle');
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [noteLines, setNoteLines] = useState<NoteItem[]>([]);
  const [ehrSynced, setEhrSynced] = useState(false);
  const [ehrSyncing, setEhrSyncing] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const clearAll = () => timers.current.forEach(clearTimeout);

  const startEncounter = useCallback(() => {
    clearAll();
    setPhase('recording'); setVisibleLines([]); setNoteLines([]); setEhrSynced(false); setEhrSyncing(false);
    scribeConversation.forEach((_, i) => {
      timers.current.push(setTimeout(() => setVisibleLines(p => [...p, i]), i * 1300));
    });
    const noteStart = scribeConversation.length * 1300 + 300;
    timers.current.push(setTimeout(() => setPhase('generating'), noteStart - 200));
    generatedNote.forEach((line, i) => {
      timers.current.push(setTimeout(() => setNoteLines(p => [...p, line]), noteStart + i * 500));
    });
    timers.current.push(setTimeout(() => setPhase('done'), noteStart + generatedNote.length * 500 + 400));
  }, []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [visibleLines]);

  const reset = useCallback(() => { clearAll(); setPhase('idle'); setVisibleLines([]); setNoteLines([]); setEhrSynced(false); setEhrSyncing(false); }, []);
  useEffect(() => () => clearAll(), []);

  const handlePushEHR = useCallback(() => {
    setEhrSyncing(true);
    setTimeout(() => { setEhrSyncing(false); setEhrSynced(true); }, 1400);
  }, []);

  return (
    <div className="flex flex-col gap-2.5 h-[380px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 flex-shrink-0"
        style={{ background: 'rgba(56,189,174,0.07)', border: `1px solid ${phase !== 'idle' ? 'rgba(56,189,174,0.25)' : DK.border}` }}>
        <div className="relative flex-shrink-0">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(56,189,174,0.25), rgba(88,166,255,0.15))', border: '1px solid rgba(56,189,174,0.3)' }}>
            <Stethoscope className="w-4 h-4" style={{ color: DK.accent }} />
          </div>
          {phase === 'recording' && (
            <>
              <motion.span className="absolute inset-0 rounded-xl border-2" style={{ borderColor: DK.accent }}
                animate={{ scale: [1, 1.7], opacity: [0.5, 0] }} transition={{ repeat: Infinity, duration: 1.3 }} />
              <motion.span className="absolute inset-0 rounded-xl border" style={{ borderColor: DK.accent }}
                animate={{ scale: [1, 2.1], opacity: [0.25, 0] }} transition={{ repeat: Infinity, duration: 1.3, delay: 0.4 }} />
            </>
          )}
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-bold" style={{ color: DK.text }}>Dr. Chen · General Practice</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="relative flex h-1.5 w-1.5">
              {phase !== 'idle' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: DK.accent }} />}
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: phase !== 'idle' ? DK.accent : DK.muted }} />
            </span>
            <span className="text-[10px]" style={{ color: DK.muted }}>
              {phase === 'idle' ? 'Ready to record' : phase === 'recording' ? 'Recording visit…' : phase === 'generating' ? 'Writing note…' : 'Note complete'}
            </span>
          </div>
        </div>
        {phase === 'recording' && <WaveformBars isActive bars={12} color={DK.accent} />}
        {phase === 'generating' && (
          <div className="flex items-center gap-1">
            {[0,1,2].map(i => (
              <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: DK.accent2 }}
                animate={{ scale: [0.7,1.3,0.7], opacity: [0.3,1,0.3] }}
                transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.18 }} />
            ))}
          </div>
        )}
        {phase === 'done' && (
          <span className="text-[9.5px] font-bold px-2 py-1 rounded-full"
            style={{ background: 'rgba(56,189,174,0.15)', color: DK.accent, border: '1px solid rgba(56,189,174,0.3)' }}>
            ✓ Done
          </span>
        )}
      </div>

      {/* Chat + note */}
      <div className="flex-1 overflow-y-auto space-y-2 min-h-0">
        <div ref={chatRef} className="rounded-xl px-3 py-2.5 space-y-2"
          style={{ background: DK.surface, border: `1px solid ${DK.border}` }}>
          {visibleLines.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-1.5 py-4 select-none">
              <Activity className="w-5 h-5" style={{ color: DK.muted }} />
              <p className="text-[10.5px]" style={{ color: DK.muted }}>Press Start to begin encounter</p>
            </div>
          )}
          {scribeConversation.map((line, i) => (
            visibleLines.includes(i) && (
              <motion.div key={i} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}
                className={`flex items-end gap-2 ${line.speaker === 'patient' ? 'flex-row-reverse' : ''}`}>
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: line.speaker === 'clinician' ? 'linear-gradient(135deg, rgba(56,189,174,0.3), rgba(88,166,255,0.2))' : 'rgba(125,133,144,0.2)',
                    border: `1px solid ${line.speaker === 'clinician' ? 'rgba(56,189,174,0.4)' : DK.border}`,
                  }}>
                  {line.speaker === 'clinician'
                    ? <Stethoscope className="w-3 h-3" style={{ color: DK.accent }} />
                    : <User className="w-3 h-3" style={{ color: DK.muted }} />}
                </div>
                <div className="max-w-[76%] px-3 py-1.5 text-[10.5px] leading-relaxed"
                  style={{
                    background: line.speaker === 'clinician' ? DK.elevated : 'linear-gradient(135deg, rgba(56,189,174,0.2), rgba(88,166,255,0.15))',
                    color: DK.text,
                    border: `1px solid ${line.speaker === 'clinician' ? DK.border : 'rgba(56,189,174,0.25)'}`,
                    borderRadius: line.speaker === 'clinician' ? '0.25rem 1rem 1rem 1rem' : '1rem 0.25rem 1rem 1rem',
                  }}>
                  {line.text}
                </div>
              </motion.div>
            )
          ))}
        </div>

        <AnimatePresence>
          {noteLines.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              className="rounded-xl overflow-hidden"
              style={{ background: DK.surface, border: `1px solid ${DK.border}` }}>
              <div className="flex items-center justify-between px-3.5 py-2 border-b" style={{ borderColor: DK.border, background: DK.elevated }}>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(56,189,174,0.25), rgba(88,166,255,0.15))', border: '1px solid rgba(56,189,174,0.3)' }}>
                    <ClipboardList className="w-3 h-3" style={{ color: DK.accent }} />
                  </div>
                  <span className="text-[10.5px] font-bold tracking-widest uppercase" style={{ color: DK.text }}>SOAP Note</span>
                </div>
                {noteLines.length < generatedNote.length ? (
                  <div className="flex items-center gap-1.5">
                    {[0,1,2].map(i => (
                      <motion.div key={i} className="w-1 h-1 rounded-full" style={{ background: DK.accent2 }}
                        animate={{ scale: [0.6,1.3,0.6] }} transition={{ repeat: Infinity, duration: 0.7, delay: i*0.2 }} />
                    ))}
                    <span className="text-[9.5px]" style={{ color: DK.muted }}>Writing…</span>
                  </div>
                ) : (
                  <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    className="text-[9.5px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(56,189,174,0.15)', color: DK.accent, border: '1px solid rgba(56,189,174,0.3)' }}>
                    ✓ Ready
                  </motion.span>
                )}
              </div>
              <div className="px-3 py-2 space-y-1.5">
                {noteLines.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}
                    className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[9px] font-black flex-shrink-0 mt-0.5"
                      style={{ background: item.color, boxShadow: `0 0 8px ${item.color}40` }}>
                      {item.abbr}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[8.5px] font-bold uppercase tracking-widest block leading-none mb-0.5" style={{ color: item.color }}>{item.label}</span>
                      <span className="text-[10.5px] leading-snug" style={{ color: DK.text }}>{item.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(ehrSyncing || ehrSynced) && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="rounded-xl flex items-center gap-3 px-3.5 py-2.5"
              style={{ background: ehrSynced ? 'rgba(56,189,174,0.08)' : DK.elevated, border: `1px solid ${ehrSynced ? 'rgba(56,189,174,0.3)' : DK.border}` }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(56,189,174,0.15)', border: '1px solid rgba(56,189,174,0.25)' }}>
                {ehrSyncing
                  ? <motion.div className="w-4 h-4 rounded-full border-2" style={{ borderColor: DK.accent, borderTopColor: 'transparent' }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }} />
                  : <Network className="w-4 h-4" style={{ color: DK.accent }} />}
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-bold" style={{ color: ehrSynced ? DK.accent : DK.text }}>
                  {ehrSyncing ? 'Pushing to Epic EHR…' : '✓ Synced to Epic EHR'}
                </p>
                <p className="text-[9.5px] mt-0.5" style={{ color: DK.muted }}>
                  {ehrSyncing ? 'Establishing secure connection…' : 'Chart · Note · Orders updated'}
                </p>
              </div>
              {ehrSynced && (
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full animate-pulse"
                  style={{ background: 'rgba(56,189,174,0.15)', color: DK.accent, border: '1px solid rgba(56,189,174,0.3)' }}>Live</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-2 flex-shrink-0">
        {(phase === 'idle' || phase === 'done') ? (
          <>
            <button onClick={startEncounter}
              className="flex-1 py-2.5 rounded-xl text-[11px] font-bold transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #143151, #387E89)', color: '#fff' }}>
              {phase === 'done' ? '↺ New Encounter' : '▶ Start Encounter'}
            </button>
            {phase === 'done' && !ehrSynced && !ehrSyncing && (
              <button onClick={handlePushEHR}
                className="flex-1 py-2.5 rounded-xl text-[11px] font-bold transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ background: 'rgba(56,189,174,0.12)', color: DK.accent, border: '1px solid rgba(56,189,174,0.3)' }}>
                Push to EHR ↗
              </button>
            )}
          </>
        ) : (
          <button onClick={reset}
            className="flex-1 py-2.5 rounded-xl text-[11px] font-semibold transition-all hover:opacity-80 active:scale-[0.98]"
            style={{ background: DK.elevated, color: DK.muted, border: `1px solid ${DK.border}` }}>
            Stop
          </button>
        )}
      </div>
    </div>
  );
};


// ─── BRAVO Demo ───────────────────────────────────────────────────────────────
const bravoConversation = [
  { speaker: 'bravo' as const, name: 'BRAVO', time: '0:00', text: "Good morning, Greenfield Medical. How can I help you today?" },
  { speaker: 'caller' as const, name: 'Sarah', time: '0:05', text: "Hi, I'd like to book an appointment and refill my blood pressure meds." },
  { speaker: 'bravo' as const, name: 'BRAVO', time: '0:11', text: "Of course! Dr. Patel has Thursday at 10:30 AM or Friday at 2 PM. Which works?" },
  { speaker: 'caller' as const, name: 'Sarah', time: '0:17', text: "Thursday at 10:30 is perfect." },
  { speaker: 'bravo' as const, name: 'BRAVO', time: '0:21', text: "Booked! Refill request also sent to Walgreens. You'll get a text confirmation." },
  { speaker: 'caller' as const, name: 'Sarah', time: '0:28', text: "That's amazing, thank you!" },
  { speaker: 'bravo' as const, name: 'BRAVO', time: '0:31', text: "My pleasure, Sarah. Have a wonderful day!" },
];

export const ReceptionistDemo = () => {
  const [phase, setPhase] = useState<'idle' | 'calling' | 'done'>('idle');
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [activeSpeaker, setActiveSpeaker] = useState<'bravo' | 'caller' | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isCancelledRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [visibleLines]);
  useEffect(() => () => { window.speechSynthesis.cancel(); timers.current.forEach(clearTimeout); }, []);

  const speakLine = useCallback((index: number) => {
    if (isCancelledRef.current || index >= bravoConversation.length) {
      setPhase('done'); setActiveSpeaker(null); return;
    }
    const line = bravoConversation[index];
    setActiveSpeaker(line.speaker);
    setVisibleLines(p => [...p, index]);
    const u = new SpeechSynthesisUtterance(line.text);
    u.rate = line.speaker === 'bravo' ? 1.05 : 0.9;
    u.pitch = line.speaker === 'bravo' ? 1.15 : 0.85;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const bv = voices.find(v => v.name.includes('Samantha') || v.name.includes('Google US English') || v.name.includes('Female'));
      const cv = voices.find(v => v.name.includes('Daniel') || v.name.includes('Male') || v.name.includes('Alex'));
      u.voice = line.speaker === 'bravo' ? (bv || voices[0]) : (cv || voices[1] || voices[0]);
    }
    u.onend = () => { if (!isCancelledRef.current) setTimeout(() => speakLine(index + 1), 350); };
    u.onerror = () => { if (!isCancelledRef.current) speakLine(index + 1); };
    window.speechSynthesis.speak(u);
  }, []);

  const startCall = useCallback(() => {
    isCancelledRef.current = false;
    timers.current.forEach(clearTimeout);
    setPhase('calling'); setVisibleLines([]); setActiveSpeaker(null);
    timers.current.push(setTimeout(() => speakLine(0), 500));
  }, [speakLine]);

  const endCall = useCallback(() => {
    isCancelledRef.current = true;
    window.speechSynthesis.cancel();
    setPhase('idle'); setVisibleLines([]); setActiveSpeaker(null);
  }, []);

  const outcomeChips = [
    { text: 'Appt · Thu 10:30 AM', color: DK.accent },
    { text: 'Rx refill → Walgreens', color: DK.accent2 },
    { text: 'SMS sent ✓', color: '#a78bfa' },
  ];

  return (
    <div className="flex flex-col gap-2.5 h-[380px] overflow-hidden">
      {/* Agent card */}
      <div className="rounded-xl overflow-hidden flex-shrink-0"
        style={{ background: phase === 'calling' ? 'rgba(56,189,174,0.07)' : DK.elevated, border: `1px solid ${phase === 'calling' ? 'rgba(56,189,174,0.25)' : DK.border}` }}>
        <div className="px-3.5 py-2.5 flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(56,189,174,0.25), rgba(88,166,255,0.15))', border: '1px solid rgba(56,189,174,0.35)' }}>
              <Bot className="w-5 h-5" style={{ color: DK.accent }} />
            </div>
            {phase === 'calling' && (
              <>
                <motion.span className="absolute inset-0 rounded-xl border-2" style={{ borderColor: DK.accent }}
                  animate={{ scale: [1, 1.5], opacity: [0.6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} />
                <motion.span className="absolute inset-0 rounded-xl border" style={{ borderColor: DK.accent }}
                  animate={{ scale: [1, 1.9], opacity: [0.3, 0] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.35 }} />
              </>
            )}
            {phase === 'done' && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-sm border-2"
                style={{ background: DK.accent, borderColor: DK.surface }}>
                <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4l2 2 3-3" stroke={DK.bg} strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
              </div>
            )}
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-black" style={{ color: DK.text }}>BRAVO AI Receptionist</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              {phase === 'calling' && <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: DK.accent }} />}
              <p className="text-[10px]" style={{ color: phase === 'calling' ? DK.accent : DK.muted }}>
                {phase === 'idle' ? '24/7 · All calls handled automatically' : phase === 'calling' ? 'Live call with Sarah M.' : 'Call complete · All tasks done'}
              </p>
            </div>
          </div>
          {phase === 'calling' && activeSpeaker && (
            <div className="flex flex-col items-center gap-0.5">
              <WaveformBars isActive bars={10} color={activeSpeaker === 'bravo' ? DK.accent : DK.accent2} />
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: activeSpeaker === 'bravo' ? 'rgba(56,189,174,0.15)' : 'rgba(88,166,255,0.15)', color: activeSpeaker === 'bravo' ? DK.accent : DK.accent2 }}>
                {activeSpeaker === 'bravo' ? 'BRAVO' : 'Sarah'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Transcript */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto rounded-xl px-3 py-2.5 space-y-2 scroll-smooth min-h-0"
        style={{ background: DK.surface, border: `1px solid ${DK.border}` }}>
        {visibleLines.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center gap-1.5 select-none">
            <PhoneIcon className="w-5 h-5" style={{ color: DK.muted }} />
            <p className="text-[11px]" style={{ color: DK.muted }}>Press Start Call to hear BRAVO live</p>
          </div>
        )}
        {bravoConversation.map((line, i) => (
          visibleLines.includes(i) && (
            <motion.div key={i} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}
              className={`flex items-end gap-1.5 ${line.speaker === 'caller' ? 'flex-row-reverse' : ''}`}>
              <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{
                  background: line.speaker === 'bravo' ? 'rgba(56,189,174,0.2)' : 'rgba(88,166,255,0.15)',
                  border: `1px solid ${line.speaker === 'bravo' ? 'rgba(56,189,174,0.35)' : 'rgba(88,166,255,0.3)'}`,
                }}>
                {line.speaker === 'bravo'
                  ? <Bot className="w-3 h-3" style={{ color: DK.accent }} />
                  : <User className="w-3 h-3" style={{ color: DK.accent2 }} />}
              </div>
              <div className="max-w-[80%] px-3 py-1.5 text-[10.5px] leading-relaxed"
                style={{
                  background: line.speaker === 'bravo' ? DK.elevated : 'rgba(88,166,255,0.1)',
                  border: `1px solid ${line.speaker === 'bravo' ? DK.border : 'rgba(88,166,255,0.2)'}`,
                  color: DK.text,
                  borderRadius: line.speaker === 'bravo' ? '1rem 1rem 1rem 0.25rem' : '1rem 1rem 0.25rem 1rem',
                }}>
                <span className="block text-[9px] font-bold mb-0.5" style={{ color: line.speaker === 'bravo' ? DK.accent : DK.accent2 }}>{line.name}</span>
                {line.text}
              </div>
            </motion.div>
          )
        ))}
      </div>

      <AnimatePresence>
        {phase === 'done' && (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-1.5 flex-shrink-0">
            {outcomeChips.map(({ text, color }, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
                {text}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2 flex-shrink-0">
        {phase !== 'calling' ? (
          <button onClick={startCall}
            className="flex-1 py-2.5 rounded-xl text-xs font-black transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #143151, #387E89)', color: '#fff' }}>
            {phase === 'done' ? '↺ Replay Call' : '▶ Start Call'}
          </button>
        ) : (
          <button onClick={endCall}
            className="flex-1 py-2.5 rounded-xl text-xs font-black transition-all active:scale-[0.98]"
            style={{ background: 'rgba(56,189,174,0.12)', color: DK.accent, border: '1px solid rgba(56,189,174,0.3)' }}>
            ✕ End Call
          </button>
        )}
      </div>
    </div>
  );
};

// ─── Custom AI Agents Demo ────────────────────────────────────────────────────
const agents = [
  { id: 'scribe',  label: 'AI Scribe',      task: 'Transcribing visit notes…',  done: 'SOAP note generated',   pct: 87 },
  { id: 'billing', label: 'Smart Billing',  task: 'Coding encounter…',           done: 'CPT 99213 suggested',   pct: 62 },
  { id: 'prior',   label: 'Prior Auth',     task: 'Filing auth request…',        done: 'Authorization approved', pct: 100 },
  { id: 'labs',    label: 'Lab Router',     task: 'Routing lab results…',        done: 'Sent to Dr. Chen',      pct: 45 },
  { id: 'recall',  label: 'Patient Recall', task: 'Scheduling outreach calls…',  done: '24 patients reached',   pct: 78 },
];
const agentIcons = [FileText, CreditCard, ClipboardList, FlaskConical, PhoneIcon];
const agentGlows = [S10.navy, S10.teal, S10.mid, S10.navy, S10.teal];

export const CustomAgentsDemo = () => {
  const [progresses, setProgresses] = useState<Record<string, number>>(
    Object.fromEntries(agents.map(a => [a.id, 0]))
  );
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setInterval>[]>([]);

  const runAgents = useCallback(() => {
    setDone(false); setRunning(true);
    setProgresses(Object.fromEntries(agents.map(a => [a.id, 0])));
    timers.current.forEach(clearInterval);
    agents.forEach((agent, idx) => {
      const delay = idx * 300;
      let current = 0;
      setTimeout(() => {
        const iv = setInterval(() => {
          current += Math.random() * 8 + 2;
          if (current >= agent.pct) {
            current = agent.pct;
            clearInterval(iv);
            setProgresses(p => ({ ...p, [agent.id]: agent.pct }));
            if (idx === agents.length - 1) setTimeout(() => { setRunning(false); setDone(true); }, 400);
          } else {
            setProgresses(p => ({ ...p, [agent.id]: Math.round(current) }));
          }
        }, 80);
        timers.current.push(iv);
      }, delay);
    });
  }, []);
  useEffect(() => () => timers.current.forEach(clearInterval), []);

  return (
    <div className="flex flex-col gap-2.5 h-[380px] overflow-hidden">
      {/* Status bar */}
      <div className="flex items-center justify-between rounded-xl px-3.5 py-2.5 flex-shrink-0"
        style={{ background: done ? 'rgba(56,189,174,0.08)' : DK.elevated, border: `1px solid ${done ? 'rgba(56,189,174,0.25)' : DK.border}` }}>
        <div className="flex items-center gap-2.5">
          {running && (
            <div className="flex gap-1">
              {[0,1,2].map(i => (
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: DK.accent }}
                  animate={{ scale: [0.6,1.3,0.6], opacity:[0.3,1,0.3] }} transition={{ repeat: Infinity, duration: 0.8, delay: i*0.2 }} />
              ))}
            </div>
          )}
          {done && <Zap className="w-4 h-4" style={{ color: DK.accent }} />}
          {!running && !done && <Layers className="w-4 h-4" style={{ color: DK.muted }} />}
          <div>
            <p className="text-[11.5px] font-bold" style={{ color: DK.text }}>
              {running ? 'Agents working…' : done ? 'All tasks complete!' : '5 AI agents ready'}
            </p>
            <p className="text-[10px]" style={{ color: DK.muted }}>
              {done ? 'Saved ~40 min of manual work' : 'Autonomous clinical automation'}
            </p>
          </div>
        </div>
        {done && (
          <div className="text-right">
            <p className="text-[13px] font-black" style={{ color: DK.accent }}>40%</p>
            <p className="text-[8.5px]" style={{ color: DK.muted }}>admin saved</p>
          </div>
        )}
      </div>

      {/* Agent list */}
      <div className="flex-1 overflow-y-auto space-y-1.5 min-h-0">
        {agents.map((agent, idx) => {
          const pct = progresses[agent.id];
          const isActive = running && pct > 0 && pct < agent.pct;
          const isDone = pct >= agent.pct && (running || done);
          const isQueued = running && pct === 0;
          const color = agentGlows[idx];
          const AgentIcon = agentIcons[idx];

          return (
            <motion.div key={agent.id}
              animate={{ opacity: (!running && !done) ? 0.6 : 1 }}
              className="rounded-xl"
              style={{ background: isDone ? `${color}0a` : DK.elevated, border: `1px solid ${isDone ? `${color}25` : DK.border}` }}>
              <div className="px-3 py-2.5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: isDone ? `${color}18` : 'rgba(125,133,144,0.1)', border: `1px solid ${isDone ? `${color}30` : DK.border}` }}>
                  {isActive
                    ? <motion.div className="w-4 h-4 rounded-full border-2" style={{ borderColor: color, borderTopColor: 'transparent' }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }} />
                    : <AgentIcon className="w-4 h-4" style={{ color: isDone ? color : DK.muted }} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[12px] font-semibold" style={{ color: isDone ? color : DK.text }}>{agent.label}</span>
                    <div className="flex items-center gap-1.5">
                      {isDone && (
                        <motion.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                          className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                          style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}>
                          ✓ {agent.done}
                        </motion.span>
                      )}
                      {isActive && (
                        <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full animate-pulse"
                          style={{ background: `${color}12`, color, border: `1px solid ${color}20` }}>
                          {agent.task}
                        </span>
                      )}
                      {isQueued && <span className="text-[9px]" style={{ color: DK.muted }}>Queued</span>}
                      <span className="text-[10px] font-black tabular-nums" style={{ color: pct > 0 ? color : DK.muted }}>{pct}%</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${color}12` }}>
                    <motion.div className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${color}60, ${color})`, boxShadow: isDone ? `0 0 8px ${color}50` : 'none' }}
                      initial={{ width: '0%' }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.2 }} />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {done && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-3 gap-2 flex-shrink-0">
            {[
              { val: '5/5', label: 'Completed', color: DK.accent },
              { val: '0.8s', label: 'Avg speed', color: DK.accent2 },
              { val: '100%', label: 'Accurate', color: '#a78bfa' },
            ].map(({ val, label, color }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="rounded-xl p-2.5 text-center"
                style={{ background: `${color}0a`, border: `1px solid ${color}20` }}>
                <p className="text-[14px] font-black" style={{ color, textShadow: `0 0 12px ${color}60` }}>{val}</p>
                <p className="text-[9px] mt-0.5" style={{ color: DK.muted }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={running ? undefined : runAgents} disabled={running}
        className="w-full py-2.5 rounded-xl text-[11px] font-bold transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #143151, #387E89)', color: '#fff' }}>
        {running ? '⚡ Running agents…' : done ? '↺ Run Again' : '▶ Deploy All Agents'}
      </button>
    </div>
  );
};

// ─── Integrations Demo ────────────────────────────────────────────────────────
const ehrList = [
  { name: 'Epic',       abbr: 'EP',  desc: 'HL7 FHIR',  },
  { name: 'Cerner',     abbr: 'CE',  desc: 'SMART API',  },
  { name: 'Athena',     abbr: 'ATH', desc: 'REST API',   },
  { name: 'eClinicals', abbr: 'eC',  desc: 'HL7 v2',    },
  { name: 'DrChrono',   abbr: 'DC',  desc: 'OAuth 2',    },
  { name: 'Kareo',      abbr: 'KA',  desc: 'REST API',   },
];
const appList = [
  { name: 'Zoom',       color: S10.teal },
  { name: 'Twilio',     color: S10.navy },
  { name: 'Slack',      color: S10.mid },
  { name: 'AWS',        color: S10.teal },
  { name: 'Salesforce', color: S10.navy },
  { name: 'Stripe',     color: S10.mid },
  { name: 'Doximity',   color: S10.teal },
  { name: 'G Suite',    color: S10.navy },
];

export const IntegrationsDemo = () => {
  const [syncing, setSyncing] = useState(false);
  const [syncedEHR, setSyncedEHR] = useState<number | null>(null);
  const [syncStep, setSyncStep] = useState(0);
  const ehrGlows = [DK.accent, DK.accent2, '#a78bfa', DK.accent, DK.accent2, '#a78bfa'];

  const handleSync = (idx: number) => {
    if (syncing) return;
    setSyncedEHR(null); setSyncStep(1); setSyncing(true);
    setTimeout(() => setSyncStep(2), 600);
    setTimeout(() => setSyncStep(3), 1200);
    setTimeout(() => { setSyncing(false); setSyncedEHR(idx); setSyncStep(0); }, 1800);
  };

  const syncMessages = ['', 'Establishing connection…', 'Handshaking HL7 FHIR…', 'Sync complete ✓'];
  const EhrIcons = [Globe, Activity, Stethoscope, ClipboardList, PhoneIcon, Layers];

  return (
    <div className="flex flex-col gap-2.5 h-[380px] overflow-hidden">
      {/* Hub */}
      <div className="flex items-center justify-center gap-3 flex-shrink-0">
        <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(56,189,174,0.3))` }} />
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-full"
          style={{ background: 'linear-gradient(135deg, rgba(56,189,174,0.2), rgba(88,166,255,0.15))', border: '1px solid rgba(56,189,174,0.3)', boxShadow: '0 0 20px rgba(56,189,174,0.15)' }}>
          <Network className="w-3.5 h-3.5" style={{ color: DK.accent }} />
          <span className="text-[11px] font-bold" style={{ color: DK.text }}>S10.AI Hub</span>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: DK.accent, boxShadow: `0 0 6px ${DK.accent}` }} />
        </div>
        <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, rgba(56,189,174,0.3))` }} />
      </div>

      {/* EHR grid */}
      <div className="flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: DK.muted }}>EHR Systems</span>
          <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
            style={{ color: DK.accent, background: 'rgba(56,189,174,0.1)', border: '1px solid rgba(56,189,174,0.2)' }}>
            Tap any to connect
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {ehrList.map((ehr, i) => {
            const isSynced = syncedEHR === i;
            const color = ehrGlows[i];
            const EhrIcon = EhrIcons[i];
            return (
              <motion.button key={i}
                onClick={() => handleSync(i)}
                whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.96 }}
                className="flex flex-col items-start gap-1 p-3 rounded-xl text-left transition-all"
                style={{
                  background: isSynced ? `${color}0c` : DK.elevated,
                  border: `1px solid ${isSynced ? `${color}35` : DK.border}`,
                  boxShadow: isSynced ? `0 0 16px ${color}20` : 'none',
                }}>
                <div className="flex items-center justify-between w-full">
                  <EhrIcon className="w-4 h-4" style={{ color: isSynced ? color : DK.muted }} />
                  {isSynced ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 350 }}
                      className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: color, boxShadow: `0 0 8px ${color}50` }}>
                      <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4l2 2 3-3" stroke={DK.bg} strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
                    </motion.div>
                  ) : syncing && syncedEHR === null && (
                    <motion.div className="w-3 h-3 rounded-full border-2" style={{ borderColor: color, borderTopColor: 'transparent' }}
                      animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }} />
                  )}
                </div>
                <span className="text-[11px] font-bold mt-1" style={{ color: isSynced ? color : DK.text }}>{ehr.name}</span>
                <span className="text-[9px]" style={{ color: DK.muted }}>{ehr.desc}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Sync status */}
      <AnimatePresence mode="wait">
        {syncing && (
          <motion.div key="syncing" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 flex-shrink-0"
            style={{ background: 'rgba(56,189,174,0.06)', border: '1px solid rgba(56,189,174,0.2)' }}>
            <motion.div className="w-4 h-4 rounded-full border-2 flex-shrink-0" style={{ borderColor: DK.accent, borderTopColor: 'transparent' }}
              animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }} />
            <span className="text-[11px] font-semibold" style={{ color: DK.accent }}>{syncMessages[syncStep]}</span>
            <div className="flex gap-1 ml-auto">
              {[0,1,2].map(i => (
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: DK.accent }}
                  animate={{ opacity: syncStep > i ? 1 : 0.2 }} transition={{ duration: 0.3 }} />
              ))}
            </div>
          </motion.div>
        )}
        {syncedEHR !== null && !syncing && (
          <motion.div key="synced" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 flex-shrink-0"
            style={{ background: `${ehrGlows[syncedEHR]}08`, border: `1px solid ${ehrGlows[syncedEHR]}25` }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `${ehrGlows[syncedEHR]}18`, border: `1px solid ${ehrGlows[syncedEHR]}25` }}>
              <CheckCircle className="w-4 h-4" style={{ color: ehrGlows[syncedEHR] }} />
            </div>
            <div className="flex-1">
              <p className="text-[11.5px] font-bold" style={{ color: ehrGlows[syncedEHR] }}>{ehrList[syncedEHR].name} connected</p>
              <p className="text-[9.5px] mt-0.5" style={{ color: DK.muted }}>Notes · Orders · Charts syncing in real-time</p>
            </div>
            <span className="text-[9px] font-bold px-2 py-1 rounded-full animate-pulse"
              style={{ color: DK.accent, background: 'rgba(56,189,174,0.12)', border: '1px solid rgba(56,189,174,0.25)' }}>Live</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Apps */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: DK.muted }}>+ 7,000 apps via Zapier & API</p>
        <div className="flex flex-wrap gap-1.5">
          {appList.map((app, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.04 }}
              whileHover={{ y: -1, scale: 1.04 }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg cursor-default"
              style={{ background: `${app.color}0a`, border: `1px solid ${app.color}20` }}>
              <Puzzle className="w-3 h-3" style={{ color: app.color }} />
              <span className="text-[10px] font-semibold" style={{ color: app.color }}>{app.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Demo step definitions ────────────────────────────────────────────────────

const demoSteps = [
  {
    id: 'scribe',
    icon: FileText,
    shortTitle: 'AI Scribe',
    title: 'AI Medical Scribe',
    description: 'Live transcription → auto SOAP note in seconds',
    badge: '2+ hrs saved/day',
    color: S10.navy,
    Demo: ScribeDemo,
  },
  {
    id: 'bravo',
    icon: PhoneIcon,
    shortTitle: 'AI Receptionist',
    title: 'BRAVO AI Receptionist',
    description: 'Handles every inbound call 24/7, books & confirms',
    badge: '24/7 availability',
    color: S10.teal,
    Demo: ReceptionistDemo,
  },
  {
    id: 'agents',
    icon: Users,
    shortTitle: 'Custom Agents',
    title: 'Custom AI Agents',
    description: '5 autonomous agents run your entire clinic',
    badge: '40% less admin',
    color: S10.mid,
    Demo: CustomAgentsDemo,
  },
  {
    id: 'ehr',
    icon: LinkIcon,
    shortTitle: 'EHR + Apps',
    title: 'EHR & App Integrations',
    description: 'Any EHR + 7,000 apps — zero disruption',
    badge: 'Plug & play',
    color: S10.navy,
    Demo: IntegrationsDemo,
  },
];

export const HeroDemoPanel = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [tabProgress, setTabProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const AUTO_MS = 7000;

  const startProgress = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = Date.now();
    const tick = () => {
      const pct = Math.min(((Date.now() - startRef.current) / AUTO_MS) * 100, 100);
      setTabProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const stopProgress = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTabProgress(0);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    stopProgress(); startProgress();
    autoPlayRef.current = setTimeout(() => {
      setCurrentStep(prev => (prev + 1) % demoSteps.length);
    }, AUTO_MS);
    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
      stopProgress();
    };
  }, [isAutoPlaying, currentStep, startProgress, stopProgress]);

  useEffect(() => () => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const handleTabClick = (index: number) => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    stopProgress();
    setIsAutoPlaying(false);
    setCurrentStep(index);
    resumeRef.current = setTimeout(() => setIsAutoPlaying(true), 18000);
  };

  const step = demoSteps[currentStep];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-10 rounded-[3rem] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${S10.teal}14 0%, ${S10.mid}08 50%, transparent 70%)`, filter: 'blur(40px)' }} />

      {/* Main container — white glassmorphism */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid rgba(20,49,81,0.10)`,
          boxShadow: `0 4px 6px rgba(20,49,81,0.04), 0 12px 40px rgba(20,49,81,0.09), 0 28px 64px rgba(20,49,81,0.07)`,
        }}>

        {/* ── Top bar — brand gradient matching the CTA button ── */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b"
          style={{ borderColor: `rgba(20,49,81,0.10)`, background: `linear-gradient(135deg, ${S10.navy} 0%, ${S10.teal} 100%)` }}>
          {/* macOS dots */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/35" />
            <div className="w-3 h-3 rounded-full bg-white/55" />
          </div>
          {/* Center title */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70 bg-white" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-[12px] font-semibold tracking-wide text-white">S10.AI · Live Demo</span>
          </div>
          {/* Live badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 border border-white/25">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-white" />
            <span className="text-[10px] font-bold text-white">LIVE</span>
          </div>
        </div>

        {/* ── Horizontal tab bar ── */}
        <div className="flex border-b" style={{ borderColor: `rgba(20,49,81,0.08)`, background: 'rgba(248,251,255,0.9)' }}>
          {demoSteps.map((s, i) => {
            const Icon = s.icon;
            const isActive = currentStep === i;
            return (
              <button
                key={s.id}
                onClick={() => handleTabClick(i)}
                className="relative flex-1 flex flex-col items-center gap-1 px-2 pt-3 pb-2.5 transition-all duration-200"
                style={{ borderBottom: isActive ? `2px solid ${s.color}` : '2px solid transparent', background: isActive ? `${s.color}06` : 'transparent' }}
              >
                {/* Icon */}
                <div className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: isActive ? `${s.color}18` : 'transparent',
                    border: isActive ? `1px solid ${s.color}30` : '1px solid transparent',
                  }}>
                  <Icon className="w-3.5 h-3.5 transition-colors duration-200"
                    style={{ color: isActive ? s.color : S10.mid }} />
                </div>
                {/* Label */}
                <span className="text-[9.5px] font-semibold leading-tight text-center transition-colors duration-200"
                  style={{ color: isActive ? s.color : S10.mid }}>
                  {s.shortTitle}
                </span>
                {/* Auto-progress underline */}
                {isActive && isAutoPlaying && (
                  <div className="absolute bottom-0 left-0 h-0.5 rounded-full" style={{ background: s.color, width: `${tabProgress}%`, transition: 'none' }} />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Active tab header ── */}
        <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: `1px solid rgba(20,49,81,0.08)`, background: 'rgba(255,255,255,0.7)' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: `${step.color}14`, border: `1px solid ${step.color}25` }}>
              <step.icon className="w-3.5 h-3.5" style={{ color: step.color }} />
            </div>
            <div>
              <p className="text-[13px] font-bold leading-none" style={{ color: S10.navy }}>{step.title}</p>
              <p className="text-[10px] mt-0.5" style={{ color: S10.mid }}>{step.description}</p>
            </div>
          </div>
          <motion.span key={currentStep}
            initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }}
            className="text-[9.5px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
            style={{ background: `${step.color}12`, color: step.color, border: `1px solid ${step.color}28` }}>
            {step.badge}
          </motion.span>
        </div>

        {/* ── Demo body ── */}
        <div className="px-5 py-4" style={{ background: 'rgba(248,251,255,0.85)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <step.Demo />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export const FirstSection = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const {
    width
  } = useWindowSize();
  const isMobile = useIsMobile();
  
  const clinicianBenefits = [{
    icon: <Clock className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "75% faster charting",
    color: "from-blue-500 to-blue-600"
  }, {
    icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "Seamless EHR & 7,000+ App Integrations",
    color: "from-teal-500 to-teal-600"
  }, {
    icon: <Shield className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "HIPAA Compliant",
    color: "from-green-500 to-green-600"
  }];

  // 4-step AI solution process
  const featureTabs = [{
    id: "step-1",
    title: "Step 1: AI-Powered Medical Scribe",
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    description: "Let S10.AI's smart scribe listen, transcribe, and document notes automatically.",
    benefit: "Save 2+ hours a day on charting",
    color: "#143151"
  }, {
    id: "step-2",
    title: "Step 2: AI Staffing Agent",
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
    description: "A virtual team member that automates admin tasks and streamlines your clinical operations.",
    benefit: "Cut admin workload by up to 40%",
    color: "#387E89"
  }, {
    id: "step-3",
    title: "Step 3: Seamless EHR Integration",
    icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    description: "Works with any EHR and connects with 7,000+ healthcare apps for total flexibility.",
    benefit: "Effortless integration, zero disruption",
    color: "#5192AE"
  }, {
    id: "step-4",
    title: "Step 4: That's It",
    icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
    description: "No extra steps. Just log in and let your AI team do the rest.",
    benefit: "Complete automation achieved",
    color: "#143151"
  }];
  
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };
  
  return <section id="ai-solutions-overview" aria-labelledby="hero-heading" className="min-h-screen relative overflow-hidden" ref={sectionRef} style={{
    background: 'linear-gradient(135deg, #fafbfc 0%, #f8fafc 25%, #f1f8ff 50%, #ecf7f7 75%, #f0fdf4 100%)'
  }}>
      {/* Enhanced SEO-friendly content for search engines - Comprehensive coverage */}
      <div className="sr-only">
        <h1 id="hero-heading">S10.AI - The AI That Charts & Staffs — So You Don't Have To</h1>
        <p>
          S10.AI provides innovative AI-powered solutions for healthcare professionals, including AI medical scribes, 
          AI staffing agents, and custom AI agents designed specifically for clinical workflows. Our solutions help 
          clinicians save time, reduce administrative burden, and improve patient care.
        </p>
        
        {/* Core Benefits Section */}
        <section>
          <h2>Core Benefits for Healthcare Providers</h2>
          <ul>
            <li>
              <h3>75% Faster Charting</h3>
              <p>Automated medical documentation reduces charting time by up to 75%, allowing clinicians to spend more time with patients and less time on paperwork.</p>
            </li>
            <li>
              <h3>Seamless EHR & 7,000+ App Integrations</h3>
              <p>Universal compatibility with all major EHR systems and seamless integration with over 7,000 healthcare applications for complete workflow optimization.</p>
            </li>
            <li>
              <h3>HIPAA Compliant Security</h3>
              <p>All AI solutions are fully HIPAA compliant with enterprise-grade security, ensuring patient data protection and regulatory compliance.</p>
            </li>
          </ul>
        </section>
        
        {/* AI Solutions Detailed Description */}
        <section>
          <h2>S10.AI Solutions Portfolio</h2>
          
          <article>
            <h3>AI Medical Scribe</h3>
            <p>Automated documentation that captures the full patient story while you focus on care. Our AI medical scribe listens to patient-clinician conversations and generates accurate, comprehensive clinical notes in real-time.</p>
            <h4>Key Features:</h4>
            <ul>
              <li>Real-time conversation transcription and analysis</li>
              <li>Automated clinical note generation</li>
              <li>Integration with major EHR systems</li>
              <li>Specialty-specific documentation templates</li>
              <li>Voice recognition and natural language processing</li>
            </ul>
            <p><strong>Time Savings:</strong> Save 2+ hours per day on documentation</p>
            <a href="/solutions/ai-medical-scribe">Learn more about AI Medical Scribe</a>
          </article>
          
          <article>
            <h3>AI Staffing Agent</h3>
            <p>AI-powered virtual staff member that handles administrative tasks and improves clinical workflow efficiency. Our AI staffing agent works 24/7 to manage appointments, patient communications, and administrative workflows.</p>
            <h4>Key Features:</h4>
            <ul>
              <li>Automated appointment scheduling and management</li>
              <li>Patient communication and follow-up</li>
              <li>Insurance verification and prior authorization</li>
              <li>Administrative task automation</li>
              <li>Multi-language support for diverse patient populations</li>
            </ul>
            <p><strong>Efficiency Gain:</strong> Reduce admin workload by 40%</p>
            <a href="/solutions/ai-staffing-agent">Learn more about AI Staffing Agent</a>
          </article>
          
          <article>
            <h3>Custom AI Agents</h3>
            <p>Purpose-built AI assistants that adapt to your specialty and workflow preferences. These custom agents are trained on specialty-specific protocols and can handle unique workflows for different medical specialties.</p>
            <h4>Key Features:</h4>
            <ul>
              <li>Specialty-specific AI training and optimization</li>
              <li>Custom workflow integration</li>
              <li>Adaptive learning from practice patterns</li>
              <li>Personalized clinical decision support</li>
              <li>Custom terminology and protocol recognition</li>
            </ul>
            <p><strong>Specialty Coverage:</strong> 30+ specialty workflows supported</p>
            <a href="/solutions/custom-ai-agents">Learn more about Custom AI Agents</a>
          </article>
          
          <article>
            <h3>EHR Integrations</h3>
            <p>Works with any EHR system and connects to 7000+ apps. Our integration platform ensures seamless connectivity with existing healthcare technology infrastructure.</p>
            <h4>Key Features:</h4>
            <ul>
              <li>Universal EHR compatibility</li>
              <li>API-based integration with 7000+ healthcare apps</li>
              <li>Real-time data synchronization</li>
              <li>Custom integration development</li>
              <li>Cloud-based and on-premise deployment options</li>
            </ul>
            <p><strong>Integration Quality:</strong> Seamless connectivity with existing systems</p>
            <a href="/solutions/ehr-integrations">Learn more about EHR Integrations</a>
          </article>
        </section>
        
        {/* Trusted by Healthcare Organizations */}
        <section>
          <h2>Trusted by Leading Healthcare Organizations</h2>
          <p>S10.AI is recommended by leading healthcare organizations and trusted by 1,000+ healthcare providers worldwide. Our solutions have been implemented across various practice sizes, from solo practitioners to large healthcare systems.</p>
          <ul>
            <li>1,000+ healthcare providers using S10.AI solutions</li>
            <li>Proven results across multiple specialties</li>
            <li>Enterprise-grade security and compliance</li>
            <li>24/7 customer support and implementation assistance</li>
          </ul>
        </section>
      </div>

      {/* Enhanced background with subtle medical pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/50 to-teal-50/30"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(20, 49, 81, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(56, 126, 137, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(81, 146, 174, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
        {/* Hero section - Enhanced layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 lg:items-center min-h-[85vh] sm:min-h-[80vh]">
          
          {/* Left column - Main content - Enhanced alignment */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 lg:space-y-8 order-1 text-center lg:text-left"
          >
            {/* Trust indicator - Enhanced design */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative flex w-full sm:inline-flex sm:w-auto items-center justify-between sm:justify-start gap-2 sm:gap-3 bg-card/80 backdrop-blur-xl border border-transparent sm:border-border rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-md md:shadow-lg transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.02] hover:bg-card/90 overflow-hidden"
            >
              {/* Gradient shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-wrap items-center gap-2 sm:gap-3 w-full justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                  Trusted by 1,000+ providers
                </span>

                <span className="hidden md:block h-4 w-px bg-border/60" aria-hidden="true" />

                <span className="inline-flex items-center gap-2 text-xs">
                  <span className="font-semibold">Excellent</span>
                  <span className="flex items-center gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="w-3 h-3 bg-emerald-500 text-white grid place-items-center rounded-[2px]">
                        <Star className="w-2 h-2 fill-white text-white" />
                      </span>
                    ))}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="w-3 h-3 text-emerald-600" aria-hidden="true" />
                    <span className="text-[10px] sm:text-xs">Trustpilot</span>
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Main headline - Better typography */}
            <div className="space-y-4 lg:space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight"
                style={{ color: '#1a1a1a' }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151]">
                  The AI That Charts
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#387E89] via-[#5192AE] to-[#387E89]">
                  & Staffs — So You
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#143151] via-[#387E89] to-[#5192AE]">
                  Don't Have To
                </span>
              </motion.h1>
            </div>
            
            {/* Benefit pills - Enhanced design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {clinicianBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  {React.cloneElement(benefit.icon, {
                    className: "w-4 h-4",
                    style: {
                      background: 'linear-gradient(135deg, #143151, #387E89, #5192AE)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }
                  })}
                  <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced CTA section with animated demo button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <Button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="group relative w-full sm:w-auto rounded-full px-8 py-6 text-lg font-bold text-white border-2 border-white/20 overflow-hidden transition-all duration-500 transform"
                    style={{
                      background: 'linear-gradient(45deg, #143151, #387E89, #5192AE, #387E89)',
                      backgroundSize: '200% 200%',
                      animation: 'gradient-shift 2s ease infinite',
                      boxShadow: '0 20px 40px rgba(56, 126, 137, 0.4), 0 0 20px rgba(56, 126, 137, 0.3)'
                    }}
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#387E89]/30 via-[#5192AE]/30 to-[#143151]/30 rounded-full"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    
                    {/* Button content with animated elements */}
                    <div className="flex items-center justify-center gap-3 relative z-10">
                      <motion.div
                        animate={{ 
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <Zap className="h-5 w-5" />
                      </motion.div>
                      
                      <span className="font-bold">
                        Request A Demo
                      </span>
                      
                      <motion.div
                        animate={{ 
                          x: [0, 5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      animate={{
                        x: ['-200%', '200%']
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </Button>
                </motion.div>
                
                <Button
                  variant="outline"
                  className="group w-full sm:w-auto rounded-full px-6 py-6 text-lg font-semibold border-2 border-[#387E89]/30 text-[#387E89] hover:bg-[#387E89]/5 hover:border-[#387E89] transition-all duration-300"
                >
                  <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="text-sm text-gray-500 pt-4 text-center lg:text-left space-y-1">
                <p className="font-medium">✓ Free 15-minute consultation</p>
                <p>✓ Custom implementation plan</p>
                <p>✓ No setup fees or long-term contracts</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Interactive Demo Panel */}
          <HeroDemoPanel />
        </div>
        
        {/* Enhanced trusted by section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 lg:mt-24"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden p-6">
            <div className="text-center mb-6">
              <Typography variant="h6" className="text-lg font-bold text-gray-800 mb-3">
                Recommended by Leading Healthcare Organizations
              </Typography>
              <div className="w-24 h-1 bg-gradient-to-r from-[#143151] to-[#387E89] mx-auto rounded-full"></div>
            </div>
            
            <Box className="overflow-hidden">
              {/* Static logos for SEO */}
              <div className="flex justify-center gap-8 mb-4 opacity-70">
                {companyLogos.slice(0, 4).map((logo, index) => (
                  <div key={`static-${index}`} className="w-20 h-10 grayscale hover:grayscale-0 transition-all duration-300">
                    <OptimizedImage
                      src={logo}
                      alt={`Healthcare partner ${index + 1}`}
                      width={80}
                      height={40}
                      priority={index < 2}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>
              
              {/* Animated marquee */}
              <Marquee gradient={true} gradientWidth={80} speed={30} className="opacity-80">
                {companyLogos.map((logo, index) => (
                  <div key={index} className="mx-8 grayscale hover:grayscale-0 transition-all duration-300">
                    <OptimizedImage
                      src={logo}
                      alt={`Healthcare partner ${index + 1}`}
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                ))}
              </Marquee>
            </Box>
          </div>
        </motion.div>
      </div>

      {/* Add CSS for gradient animation using a style element without jsx prop */}
      <style>
        {`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>
    </section>;
};

// Export the VoiceAnimation component separately for use in other files
export { VoiceAnimation };
