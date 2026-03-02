
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { Clock, Database, Shield, FileText, Users, CheckCircle, TrendingUp, Star, Zap, ArrowRight, Play, Phone as PhoneIcon, Link as LinkIcon } from "lucide-react";
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

// ─── S10 Brand colors (matching Bravo page exactly) ──────────────────────────
const S10 = {
  navy:  '#143151',
  teal:  '#387E89',
  mid:   '#5192AE',
  light: '#A5CCF3',
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

// ─── Scribe Demo ─────────────────────────────────────────────────────────────
const scribeConversation = [
  { speaker: 'clinician' as const, text: 'Good morning! What brings you in today?' },
  { speaker: 'patient' as const, text: "Persistent headache for three days and neck stiffness." },
  { speaker: 'clinician' as const, text: 'Any sensitivity to light or fever?' },
  { speaker: 'patient' as const, text: 'Yes, bright lights really bother me.' },
  { speaker: 'clinician' as const, text: "Ordering a CT scan and bloodwork to rule out anything serious." },
];
type NoteItem = { label: string; value: string; color: string };
const generatedNote: NoteItem[] = [
  { label: 'Chief Complaint', value: 'Headache × 3 days, neck stiffness', color: '#3b82f6' },
  { label: 'History', value: 'Photophobia present. Afebrile on exam.', color: '#8b5cf6' },
  { label: 'Assessment', value: 'R/O meningitis, tension headache', color: '#f59e0b' },
  { label: 'Plan', value: 'CT Head, CBC, CMP ordered. F/U 48h.', color: '#10b981' },
];

const ScribeDemo = () => {
  const [phase, setPhase] = useState<'idle' | 'recording' | 'generating' | 'done'>('idle');
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [noteLines, setNoteLines] = useState<NoteItem[]>([]);
  const [ehrSynced, setEhrSynced] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const clearAll = () => timers.current.forEach(clearTimeout);

  const startEncounter = useCallback(() => {
    clearAll();
    setPhase('recording');
    setVisibleLines([]);
    setNoteLines([]);
    setEhrSynced(false);
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

  const reset = useCallback(() => { clearAll(); setPhase('idle'); setVisibleLines([]); setNoteLines([]); setEhrSynced(false); }, []);
  useEffect(() => () => clearAll(), []);

  const phaseLabel = phase === 'idle' ? 'Ready' : phase === 'recording' ? 'Recording' : phase === 'generating' ? 'Generating' : 'Complete';
  const accentColor = phase === 'idle' ? '#94a3b8' : S10.teal;

  const noteTagColors = [palette.teal, palette.blue, palette.violet, palette.emerald];

  return (
    <div className="space-y-2.5">
      {/* Status strip */}
      <div className="flex items-center justify-between rounded-2xl px-4 py-2.5 border"
        style={{
          background: phase === 'recording' ? palette.sky.bg : phase === 'generating' ? palette.violet.bg : phase === 'done' ? palette.emerald.bg : '#f8fafc',
          borderColor: phase === 'recording' ? palette.sky.border : phase === 'generating' ? palette.violet.border : phase === 'done' ? palette.emerald.border : '#e2e8f0'
        }}>
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            {phase !== 'idle' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: accentColor }} />}
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: accentColor }} />
          </span>
          <span className="text-[11px] font-bold" style={{ color: '#143151' }}>{phaseLabel}</span>
          {phase === 'recording' && (
            <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: palette.sky.bg, color: palette.sky.text, border: `1px solid ${palette.sky.border}` }}>
              Dr. Chen · Patient Visit
            </span>
          )}
        </div>
        {phase === 'recording' && <WaveformBars isActive bars={14} color={palette.sky.icon} />}
        {phase === 'generating' && (
          <div className="flex items-center gap-1">
            {[0,1,2].map(i => <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: palette.violet.icon }} animate={{ scale: [0.8,1.4,0.8], opacity:[0.4,1,0.4] }} transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }} />)}
            <span className="text-[10px] ml-1 font-semibold" style={{ color: palette.violet.text }}>AI writing…</span>
          </div>
        )}
        {phase === 'done' && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: palette.emerald.bg, color: palette.emerald.text, border: `1px solid ${palette.emerald.border}` }}>✓ Complete</span>}
      </div>

      {/* Conversation feed */}
      <div ref={chatRef} className="h-[116px] overflow-y-auto rounded-2xl border px-3 py-2.5 space-y-2 scroll-smooth" style={{ background: '#f9fafb', borderColor: '#e5e7eb' }}>
        {visibleLines.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center gap-1.5 pointer-events-none select-none">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: palette.sky.bg, border: `1.5px dashed ${palette.sky.border}` }}>
              <span style={{ color: palette.sky.icon }} className="text-sm">🎙</span>
            </div>
            <p className="text-[11px] font-medium" style={{ color: '#9ca3af' }}>Press Start Encounter</p>
          </div>
        )}
        {scribeConversation.map((line, i) => (
          visibleLines.includes(i) && (
            <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
              className={`flex items-end gap-1.5 ${line.speaker === 'patient' ? 'flex-row-reverse' : ''}`}>
               <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[7px] font-black text-white shadow-sm"
                 style={{ background: line.speaker === 'clinician' ? `linear-gradient(135deg,${S10.navy},${S10.teal})` : `${S10.mid}25` }}>
                 <span style={{ color: line.speaker === 'clinician' ? '#fff' : S10.navy }}>{line.speaker === 'clinician' ? 'DR' : 'P'}</span>
               </div>
               <div className={`max-w-[78%] px-3 py-1.5 rounded-2xl text-[10.5px] leading-relaxed shadow-sm`} style={{
                 background: line.speaker === 'clinician' ? '#ffffff' : `linear-gradient(135deg, ${S10.teal}, ${S10.navy})`,
                 border: line.speaker === 'clinician' ? `1px solid ${S10.mid}30` : 'none',
                 color: line.speaker === 'clinician' ? '#374151' : '#fff',
                borderRadius: line.speaker === 'clinician' ? '1rem 1rem 1rem 0.25rem' : '1rem 1rem 0.25rem 1rem',
              }}>
                {line.text}
              </div>
            </motion.div>
          )
        ))}
      </div>

      {/* SOAP Note */}
      <AnimatePresence>
        {noteLines.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border overflow-hidden bg-white shadow-sm" style={{ borderColor: palette.indigo.border }}>
            <div className="flex items-center justify-between px-3.5 py-2 border-b" style={{ borderColor: palette.indigo.border, background: palette.indigo.bg }}>
              <div className="flex items-center gap-1.5">
                <span className="text-sm">📋</span>
                <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: palette.indigo.text }}>SOAP Note</span>
              </div>
              <div className="flex items-center gap-1.5">
                <motion.div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: palette.violet.icon }} animate={noteLines.length < generatedNote.length ? { scale: [1,1.3,1] } : {}} transition={{ repeat: Infinity, duration: 0.6 }} />
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: noteLines.length < generatedNote.length ? palette.violet.bg : palette.emerald.bg, color: noteLines.length < generatedNote.length ? palette.violet.text : palette.emerald.text }}>
                  {noteLines.length < generatedNote.length ? 'Writing…' : '✓ Done'}
                </span>
              </div>
            </div>
            <div className="px-3.5 py-2.5 grid grid-cols-1 gap-2">
              {noteLines.map((item, i) => {
                const c = noteTagColors[i % noteTagColors.length];
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex items-start gap-2.5">
                    <span className="text-[9px] font-black uppercase tracking-wide flex-shrink-0 mt-0.5 px-1.5 py-0.5 rounded-md" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>{item.label.substring(0,4)}</span>
                    <span className="text-[10.5px] leading-snug" style={{ color: '#374151' }}>{item.value}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EHR synced */}
      <AnimatePresence>
        {ehrSynced && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex items-center gap-3 rounded-2xl p-3 border"
            style={{ background: palette.emerald.bg, borderColor: palette.emerald.border }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm text-base" style={{ background: palette.emerald.bg, border: `1.5px solid ${palette.emerald.border}` }}>🏥</div>
            <div>
              <p className="text-[11px] font-black" style={{ color: palette.emerald.text }}>Pushed to Epic EHR</p>
              <p className="text-[9.5px]" style={{ color: '#374151' }}>Synced in 0.3s · Chart updated · Patient notified</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2">
        {(phase === 'idle' || phase === 'done') ? (
          <>
            <button onClick={startEncounter}
              className="flex-1 py-2.5 rounded-2xl text-xs font-black text-white tracking-wide transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}>
              {phase === 'done' ? '↺ New Encounter' : '▶ Start Encounter'}
            </button>
            {phase === 'done' && !ehrSynced && (
              <button onClick={() => setEhrSynced(true)}
                className="flex-1 py-2.5 rounded-2xl text-xs font-black transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ background: palette.emerald.bg, color: palette.emerald.text, border: `1.5px solid ${palette.emerald.border}` }}>
                Push to EHR ↗
              </button>
            )}
          </>
        ) : (
          <button onClick={reset}
            className="flex-1 py-2.5 rounded-2xl text-xs font-semibold border bg-white transition-all" style={{ color: palette.sky.text, borderColor: palette.sky.border }}>
            Stop Recording
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

const ReceptionistDemo = () => {
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

  const outcomes = ['Appt · Thu 10:30 AM', 'Rx refill → Walgreens', 'SMS confirmation sent'];

  const outcomeChips = [
    { text: 'Appt · Thu 10:30 AM', pal: palette.teal },
    { text: 'Rx refill → Walgreens', pal: palette.blue },
    { text: 'SMS confirmation sent', pal: palette.emerald },
  ];

  return (
    <div className="space-y-2.5">
      {/* Call card */}
      <div className="rounded-2xl border overflow-hidden" style={{
        borderColor: phase === 'calling' ? palette.teal.border : '#edf0f4',
        background: phase === 'calling' ? palette.teal.bg : '#f8fafc'
      }}>
        <div className="px-4 py-3 flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg shadow-md"
              style={{ background: phase === 'calling' ? `linear-gradient(135deg,${palette.teal.icon},#143151)` : 'linear-gradient(135deg,#143151,#387E89)' }}>
              <span>🤖</span>
            </div>
            {phase === 'calling' && (
              <>
                <motion.span className="absolute inset-0 rounded-2xl border-2" style={{ borderColor: palette.teal.icon }}
                  animate={{ scale: [1, 1.5], opacity: [0.6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} />
                <motion.span className="absolute inset-0 rounded-2xl border" style={{ borderColor: palette.teal.icon }}
                  animate={{ scale: [1, 1.9], opacity: [0.3, 0] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.35 }} />
              </>
            )}
            {phase === 'done' && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-sm border-2 border-white text-white text-[8px] font-black" style={{ background: palette.emerald.icon }}>✓</div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-black leading-none" style={{ color: '#143151' }}>BRAVO AI Receptionist</p>
            <div className="flex items-center gap-1.5 mt-1">
              {phase === 'calling' && <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: palette.rose.icon }} />}
              <p className="text-[10.5px] font-medium" style={{ color: phase === 'calling' ? palette.rose.text : '#6b7280' }}>
                {phase === 'idle' ? '24/7 · All calls handled automatically' : phase === 'calling' ? 'Live call with Sarah M.' : 'Call complete · All tasks done'}
              </p>
            </div>
          </div>
          {phase === 'calling' && activeSpeaker && (
            <div className="flex flex-col items-center gap-0.5">
              <WaveformBars isActive bars={10} color={activeSpeaker === 'bravo' ? S10.teal : S10.mid} />
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: activeSpeaker === 'bravo' ? `${S10.teal}15` : `${S10.mid}15`, color: activeSpeaker === 'bravo' ? S10.teal : S10.navy }}>
                {activeSpeaker === 'bravo' ? 'BRAVO' : 'Sarah'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Transcript */}
      <div ref={scrollRef} className="h-[136px] overflow-y-auto rounded-2xl border px-3 py-2.5 space-y-2 scroll-smooth" style={{ background: '#f9fafb', borderColor: '#e5e7eb' }}>
        {visibleLines.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center gap-1.5 select-none">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: palette.sky.bg, border: `1.5px dashed ${palette.sky.border}` }}>
              <span className="text-sm">📞</span>
            </div>
            <p className="text-[11px] font-medium" style={{ color: '#9ca3af' }}>Press Start Call to hear BRAVO live</p>
          </div>
        )}
        {bravoConversation.map((line, i) => (
          visibleLines.includes(i) && (
            <motion.div key={i} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}
              className={`flex items-end gap-1.5 ${line.speaker === 'caller' ? 'flex-row-reverse' : ''}`}>
              <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-black shadow-sm"
                style={{
                  background: line.speaker === 'bravo' ? `${S10.teal}20` : `${S10.navy}15`,
                  color: line.speaker === 'bravo' ? S10.teal : S10.navy,
                  border: `1.5px solid ${line.speaker === 'bravo' ? S10.teal + '40' : S10.navy + '30'}`
                }}>
                {line.speaker === 'bravo' ? 'B' : 'S'}
              </div>
              <div className="max-w-[80%] px-3 py-1.5 rounded-2xl text-[10.5px] leading-relaxed shadow-sm" style={{
                background: line.speaker === 'bravo' ? '#fff' : `linear-gradient(135deg,${S10.navy},${S10.teal})`,
                border: line.speaker === 'bravo' ? `1px solid ${S10.teal}30` : 'none',
                color: line.speaker === 'bravo' ? '#374151' : '#fff',
                borderRadius: line.speaker === 'bravo' ? '1rem 1rem 1rem 0.25rem' : '1rem 1rem 0.25rem 1rem',
              }}>
                <span className="block text-[9px] font-bold mb-0.5" style={{ color: line.speaker === 'bravo' ? S10.teal : 'rgba(255,255,255,0.75)' }}>{line.name}</span>
                {line.text}
              </div>
            </motion.div>
          )
        ))}
      </div>

      {/* Outcome chips */}
      <AnimatePresence>
        {phase === 'done' && (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-1.5">
            {outcomeChips.map(({ text, pal }, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                style={{ background: pal.bg, color: pal.text, borderColor: pal.border }}>
                ✓ {text}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2">
        {phase !== 'calling' ? (
          <button onClick={startCall}
            className="flex-1 py-2.5 rounded-2xl text-xs font-black text-white transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}>
            {phase === 'done' ? '↺ Replay Call' : '▶ Start Call'}
          </button>
        ) : (
          <button onClick={endCall}
            className="flex-1 py-2.5 rounded-2xl text-xs font-black transition-all active:scale-[0.98]"
            style={{ background: palette.rose.bg, color: palette.rose.text, border: `1.5px solid ${palette.rose.border}` }}>
            ✕ End Call
          </button>
        )}
      </div>
    </div>
  );
};

// ─── Custom AI Agents Demo ────────────────────────────────────────────────────
const agents = [
  { id: 'scribe',  label: 'AI Scribe',      icon: '🎙', task: 'Transcribing visit notes…',  done: 'SOAP note generated',   pct: 87, timeEst: '1.2s' },
  { id: 'billing', label: 'Smart Billing',  icon: '💳', task: 'Coding encounter…',           done: 'CPT 99213 suggested',   pct: 62, timeEst: '0.8s' },
  { id: 'prior',   label: 'Prior Auth',     icon: '✅', task: 'Filing auth request…',        done: 'Authorization approved', pct: 100, timeEst: '2.1s' },
  { id: 'labs',    label: 'Lab Router',     icon: '🧪', task: 'Routing lab results…',        done: 'Sent to Dr. Chen',      pct: 45, timeEst: '0.5s' },
  { id: 'recall',  label: 'Patient Recall', icon: '📞', task: 'Scheduling outreach calls…',  done: '24 patients reached',   pct: 78, timeEst: '3.4s' },
];

const CustomAgentsDemo = () => {
  const [progresses, setProgresses] = useState<Record<string, number>>(
    Object.fromEntries(agents.map(a => [a.id, 0]))
  );
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setInterval>[]>([]);

  const runAgents = useCallback(() => {
    setDone(false);
    setRunning(true);
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

  const agentColors = [S10.navy, S10.teal, S10.mid, S10.navy, S10.teal];

  return (
    <div className="space-y-3">
      {/* Status bar */}
      <div className="flex items-center justify-between rounded-xl px-3.5 py-2.5"
        style={{ background: done ? `${S10.teal}12` : running ? `${S10.navy}08` : `${S10.navy}06`, border: `1px solid ${done ? S10.teal+'30' : S10.navy+'12'}` }}>
        <div className="flex items-center gap-2.5">
          {running && (
            <div className="flex gap-1">
              {[0,1,2].map(i => (
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: S10.teal }}
                  animate={{ scale: [0.6,1.3,0.6], opacity:[0.3,1,0.3] }} transition={{ repeat: Infinity, duration: 0.8, delay: i*0.2 }} />
              ))}
            </div>
          )}
          {done && <span className="text-sm">✨</span>}
          {!running && !done && <span className="text-sm">🤖</span>}
          <div>
            <p className="text-[11.5px] font-bold leading-none" style={{ color: S10.navy }}>
              {running ? 'Agents working…' : done ? 'All tasks complete!' : '5 AI agents ready'}
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: '#9ca3af' }}>
              {done ? 'Saved ~40 min of manual work' : 'Autonomous clinical automation'}
            </p>
          </div>
        </div>
        {done && (
          <div className="text-right">
            <p className="text-[13px] font-black" style={{ color: S10.teal }}>40%</p>
            <p className="text-[8.5px] font-medium" style={{ color: '#9ca3af' }}>admin saved</p>
          </div>
        )}
      </div>

      {/* Agent list */}
      <div className="space-y-2">
        {agents.map((agent, idx) => {
          const pct = progresses[agent.id];
          const isActive = running && pct > 0 && pct < agent.pct;
          const isDone = pct >= agent.pct && (running || done);
          const isQueued = running && pct === 0;
          const color = agentColors[idx];

          return (
            <motion.div
              key={agent.id}
              animate={{ opacity: (!running && !done) ? 0.7 : 1 }}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                border: `1px solid ${isDone ? color+'28' : isActive ? color+'20' : '#f0f4f8'}`,
                background: isDone ? `${color}06` : 'white',
              }}
            >
              <div className="px-3 py-2.5 flex items-center gap-3">
                {/* Icon */}
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                  style={{ background: isDone ? `${color}15` : isActive ? `${color}10` : '#f8fafc', border: `1px solid ${isDone ? color+'25' : '#eee'}` }}>
                  {isDone
                    ? <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>{agent.icon}</motion.span>
                    : isActive
                    ? <motion.div className="w-4 h-4 rounded-full border-2" style={{ borderColor: color, borderTopColor: 'transparent' }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }} />
                    : <span className="text-sm opacity-40">{agent.icon}</span>}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[12px] font-semibold leading-none" style={{ color: isDone ? color : S10.navy }}>{agent.label}</span>
                    <div className="flex items-center gap-1.5">
                      {isDone && (
                        <motion.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                          className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                          style={{ background: `${color}14`, color, border: `1px solid ${color}22` }}>
                          ✓ {agent.done}
                        </motion.span>
                      )}
                      {isActive && (
                        <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full animate-pulse"
                          style={{ background: `${color}10`, color, border: `1px solid ${color}20` }}>
                          {agent.task}
                        </span>
                      )}
                      {isQueued && <span className="text-[9px] text-gray-300 font-medium">Queued</span>}
                      <span className="text-[10px] font-black tabular-nums" style={{ color: pct > 0 ? color : '#d1d5db' }}>{pct}%</span>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${color}12` }}>
                    <motion.div className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${color}70, ${color})` }}
                      initial={{ width: '0%' }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Result stats */}
      <AnimatePresence>
        {done && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-3 gap-2">
            {[
              { val: '5/5', label: 'Completed', color: S10.teal },
              { val: '0.8s', label: 'Avg speed', color: S10.navy },
              { val: '100%', label: 'Accurate', color: S10.mid },
            ].map(({ val, label, color }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="rounded-xl p-2.5 text-center"
                style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
                <p className="text-[14px] font-black" style={{ color }}>{val}</p>
                <p className="text-[9px] font-medium mt-0.5" style={{ color: '#9ca3af' }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={running ? undefined : runAgents} disabled={running}
        className="w-full py-2.5 rounded-xl text-[11px] font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
        style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})` }}>
        {running ? '⚡ Running agents…' : done ? '↺ Run Again' : '▶ Deploy All Agents'}
      </button>
    </div>
  );
};

// ─── Integrations Demo ────────────────────────────────────────────────────────
const ehrList = [
  { name: 'Epic',       abbr: 'EP',  desc: 'HL7 FHIR',  icon: '🏥' },
  { name: 'Cerner',     abbr: 'CE',  desc: 'SMART API',  icon: '🔬' },
  { name: 'Athena',     abbr: 'ATH', desc: 'REST API',   icon: '⚕️' },
  { name: 'eClinicals', abbr: 'eC',  desc: 'HL7 v2',    icon: '📋' },
  { name: 'DrChrono',   abbr: 'DC',  desc: 'OAuth 2',    icon: '📱' },
  { name: 'Kareo',      abbr: 'KA',  desc: 'REST API',   icon: '💼' },
];
const appList = [
  { name: 'Zoom',       icon: '📹', color: S10.teal },
  { name: 'Twilio',     icon: '📞', color: S10.navy },
  { name: 'Slack',      icon: '💬', color: S10.mid },
  { name: 'AWS',        icon: '☁️',  color: S10.teal },
  { name: 'Salesforce', icon: '☁️',  color: S10.navy },
  { name: 'Stripe',     icon: '💳', color: S10.mid },
  { name: 'Doximity',   icon: '👨‍⚕️', color: S10.teal },
  { name: 'G Suite',    icon: '📧', color: S10.navy },
];

const IntegrationsDemo = () => {
  const [syncing, setSyncing] = useState(false);
  const [syncedEHR, setSyncedEHR] = useState<number | null>(null);
  const [syncStep, setSyncStep] = useState(0);

  const ehrColors = [S10.navy, S10.teal, S10.mid, S10.navy, S10.teal, S10.mid];

  const handleSync = (idx: number) => {
    if (syncing) return;
    setSyncedEHR(null);
    setSyncStep(1);
    setSyncing(true);
    setTimeout(() => setSyncStep(2), 600);
    setTimeout(() => setSyncStep(3), 1200);
    setTimeout(() => { setSyncing(false); setSyncedEHR(idx); setSyncStep(0); }, 1800);
  };

  const syncMessages = ['', 'Establishing connection…', 'Handshaking HL7 FHIR…', 'Sync complete ✓'];

  return (
    <div className="space-y-3">
      {/* S10 hub */}
      <div className="flex items-center justify-center gap-3 py-2">
        <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${S10.teal}40)` }} />
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-full shadow-sm"
          style={{ background: `linear-gradient(135deg, ${S10.navy}, ${S10.teal})`, border: `1px solid ${S10.teal}40` }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[11px] font-bold text-white tracking-wide">S10.AI Hub</span>
        </div>
        <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${S10.teal}40)` }} />
      </div>

      {/* EHR grid */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: S10.navy, opacity: 0.5 }}>EHR Systems</span>
          <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
            style={{ color: S10.teal, background: `${S10.teal}10`, border: `1px solid ${S10.teal}25` }}>
            Tap any to connect
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {ehrList.map((ehr, i) => {
            const isSynced = syncedEHR === i;
            const color = ehrColors[i];
            return (
              <motion.button key={i}
                onClick={() => handleSync(i)}
                whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.96 }}
                className="relative flex flex-col items-start gap-1 p-3 rounded-xl text-left transition-all"
                style={{
                  background: isSynced ? `${color}09` : 'white',
                  border: `1px solid ${isSynced ? color+'35' : '#eef0f4'}`,
                  boxShadow: isSynced ? `0 2px 8px ${color}18` : '0 1px 3px rgba(0,0,0,0.04)',
                }}>
                <div className="w-full h-0.5 rounded-full -mt-0.5"
                  style={{ background: isSynced ? `linear-gradient(90deg,${color}60,${color})` : `${color}20` }} />
                <div className="flex items-center justify-between w-full mt-1">
                  <span className="text-base leading-none">{ehr.icon}</span>
                  {isSynced ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 350 }}
                      className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: color }}>
                      <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4l2 2 3-3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
                    </motion.div>
                  ) : syncing && syncedEHR === null && (
                    <motion.div className="w-3 h-3 rounded-full border-2 border-t-transparent"
                      style={{ borderColor: color, borderTopColor: 'transparent' }}
                      animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }} />
                  )}
                </div>
                <span className="text-[11px] font-bold leading-tight" style={{ color: isSynced ? color : S10.navy }}>{ehr.name}</span>
                <span className="text-[9px] font-medium" style={{ color: '#b0b8c4' }}>{ehr.desc}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Sync status */}
      <AnimatePresence mode="wait">
        {syncing && (
          <motion.div key="syncing" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5"
            style={{ background: `${S10.teal}08`, border: `1px solid ${S10.teal}25` }}>
            <motion.div className="w-4 h-4 rounded-full border-2 flex-shrink-0" style={{ borderColor: S10.teal, borderTopColor: 'transparent' }}
              animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }} />
            <span className="text-[11px] font-semibold" style={{ color: S10.teal }}>{syncMessages[syncStep]}</span>
            <div className="flex gap-1 ml-auto">
              {[0,1,2].map(i => (
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: S10.teal }}
                  animate={{ opacity: syncStep > i ? 1 : 0.2 }} transition={{ duration: 0.3 }} />
              ))}
            </div>
          </motion.div>
        )}
        {syncedEHR !== null && !syncing && (
          <motion.div key="synced" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 rounded-xl px-3.5 py-2.5"
            style={{ background: `${ehrColors[syncedEHR]}08`, border: `1px solid ${ehrColors[syncedEHR]}28` }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
              style={{ background: `${ehrColors[syncedEHR]}14`, border: `1px solid ${ehrColors[syncedEHR]}25` }}>
              {ehrList[syncedEHR].icon}
            </div>
            <div className="flex-1">
              <p className="text-[11.5px] font-bold leading-none" style={{ color: ehrColors[syncedEHR] }}>
                {ehrList[syncedEHR].name} connected
              </p>
              <p className="text-[9.5px] mt-0.5" style={{ color: '#9ca3af' }}>Notes · Orders · Charts syncing in real-time</p>
            </div>
            <span className="text-[9px] font-bold px-2 py-1 rounded-full"
              style={{ color: S10.teal, background: `${S10.teal}12`, border: `1px solid ${S10.teal}25` }}>
              ● Live
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Apps row */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: S10.navy, opacity: 0.4 }}>+ 7,000 apps</p>
        <div className="flex flex-wrap gap-1.5">
          {appList.map((app, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.04 }}
              whileHover={{ y: -1, scale: 1.04 }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg cursor-default transition-all"
              style={{ background: `${app.color}08`, border: `1px solid ${app.color}20` }}>
              <span className="text-sm leading-none">{app.icon}</span>
              <span className="text-[10px] font-semibold" style={{ color: app.color }}>{app.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ─── Demo step definitions (Bravo-style vertical stepper) ────────────────────

const demoSteps = [
  {
    id: 'scribe',
    icon: FileText,
    title: 'AI Medical Scribe',
    description: 'Live transcription → auto SOAP note in seconds',
    badge: '2+ hrs saved/day',
    color: S10.navy,
    Demo: ScribeDemo,
  },
  {
    id: 'bravo',
    icon: PhoneIcon,
    title: 'BRAVO AI Receptionist',
    description: 'Handles every inbound call 24/7, books & confirms',
    badge: '24/7 availability',
    color: S10.teal,
    Demo: ReceptionistDemo,
  },
  {
    id: 'agents',
    icon: Users,
    title: 'Custom AI Agents',
    description: '5 autonomous agents run your entire clinic',
    badge: '40% less admin',
    color: S10.mid,
    Demo: CustomAgentsDemo,
  },
  {
    id: 'ehr',
    icon: LinkIcon,
    title: 'EHR Integrations',
    description: 'Any EHR + 7,000 apps — zero disruption',
    badge: 'Plug & play',
    color: S10.navy,
    Demo: IntegrationsDemo,
  },
];

// ─── Progress bar for active step ──────────────────────────────────────────
const StepProgressBar = ({ isActive, duration = 6000, color }: { isActive: boolean; duration?: number; color: string }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!isActive) { setProgress(0); return; }
    setProgress(0);
    const start = Date.now();
    const raf = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, [isActive, duration, color]);
  if (!isActive) return null;
  return (
    <div className="h-0.5 rounded-full overflow-hidden mt-2" style={{ background: `${color}18` }}>
      <div className="h-full rounded-full transition-none" style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${color}80, ${color})` }} />
    </div>
  );
};

const HeroDemoPanel = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    autoPlayRef.current = setTimeout(() => {
      setCurrentStep(prev => (prev >= demoSteps.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => { if (autoPlayRef.current) clearTimeout(autoPlayRef.current); };
  }, [isAutoPlaying, currentStep]);

  useEffect(() => () => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    if (resumeRef.current) clearTimeout(resumeRef.current);
  }, []);

  const handleStepClick = (index: number) => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    setIsAutoPlaying(false);
    setCurrentStep(index);
    resumeRef.current = setTimeout(() => setIsAutoPlaying(true), 18000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="lg:col-span-5 relative order-2"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-8 rounded-[3rem] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${S10.teal}18 0%, transparent 70%)`, filter: 'blur(32px)' }} />

      <div className="relative rounded-2xl overflow-hidden bg-white"
        style={{ border: `1px solid ${S10.mid}20`, boxShadow: `0 2px 4px rgba(0,0,0,0.04), 0 12px 40px rgba(20,49,81,0.08), 0 28px 64px rgba(20,49,81,0.06)` }}>

        {/* Chrome bar */}
        <div className="flex items-center justify-between px-5 py-3.5"
          style={{ background: `linear-gradient(135deg, ${S10.navy} 0%, ${S10.teal} 100%)` }}>
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

        {/* Vertical stepper */}
        <div className="px-6 pt-5 pb-3">
          {demoSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === index;

            return (
              <div key={step.id} className="relative">
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4 }}
                  className="cursor-pointer"
                  onClick={() => handleStepClick(index)}
                >
                  {/* Header row */}
                  <motion.div
                    className="flex items-center gap-3 py-3"
                    whileHover={{ x: isActive ? 0 : 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Icon circle */}
                    <motion.div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${step.color}22, ${step.color}14)`
                          : `${step.color}0d`,
                        border: isActive ? `1.5px solid ${step.color}35` : `1px solid ${step.color}18`,
                      }}
                      animate={{ scale: isActive ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[14px] font-semibold leading-snug" style={{ color: isActive ? '#0f1c2e' : '#4b5563' }}>
                          {step.title}
                        </h3>
                        <AnimatePresence>
                          {isActive && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.75 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.75 }}
                              className="text-[9.5px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: `${step.color}14`, color: step.color, border: `1px solid ${step.color}28` }}
                            >
                              {step.badge}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                      <p className="text-[11.5px] leading-snug mt-0.5" style={{ color: '#9ca3af' }}>
                        {step.description}
                      </p>
                    </div>

                    {/* Chevron indicator */}
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: isActive ? `${step.color}14` : 'transparent' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M3 2l4 3-4 3" stroke={isActive ? step.color : '#d1d5db'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Progress bar */}
                  <StepProgressBar isActive={isActive && isAutoPlaying} duration={7000} color={step.color} />

                  {/* Expanding demo panel */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="ml-14 mb-3 mt-1 rounded-xl p-3.5"
                          style={{ background: `${step.color}06`, border: `1px solid ${step.color}18` }}>
                          <step.Demo />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Connector line */}
                {index < demoSteps.length - 1 && (
                  <div className="absolute left-[21px] w-px"
                    style={{
                      top: isActive ? '52px' : '52px',
                      height: '28px',
                      background: `linear-gradient(to bottom, ${step.color}35, transparent)`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom dot nav */}
        <div className="flex items-center justify-center gap-2 pt-1 pb-4 border-t" style={{ borderColor: `${S10.mid}12` }}>
          {demoSteps.map((s, i) => (
            <button
              key={i}
              onClick={() => handleStepClick(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: currentStep === i ? 24 : 6,
                height: 6,
                background: currentStep === i
                  ? `linear-gradient(90deg, ${s.color}, ${S10.navy})`
                  : `${S10.mid}25`,
              }}
            />
          ))}
          <span className="text-[9px] font-medium ml-2" style={{ color: `${S10.mid}80` }}>
            {isAutoPlaying ? 'Auto' : 'Manual'}
          </span>
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
