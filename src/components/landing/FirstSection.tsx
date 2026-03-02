
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Users, Clock, FileText, Shield, MessageSquare, Database, CheckCircle, Star, TrendingUp, Play, Pause, Phone, Bot, Plug, Square, Mic, ChevronRight, Activity, Link2, Stethoscope } from "lucide-react";
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

// ─── Scribe Demo ─────────────────────────────────────────────────────────────
const scribeConversation = [
  { speaker: 'clinician' as const, text: 'Good morning! What brings you in today?' },
  { speaker: 'patient' as const, text: "Persistent headache for three days and neck stiffness." },
  { speaker: 'clinician' as const, text: 'Any sensitivity to light or fever?' },
  { speaker: 'patient' as const, text: 'Yes, bright lights really bother me.' },
  { speaker: 'clinician' as const, text: "Ordering a CT scan and bloodwork to rule out anything serious." },
];
const generatedNote = [
  'CC: Headache × 3 days, neck stiffness',
  'HPI: Photophobia present. Afebrile.',
  'Plan: CT Head, CBC, CMP ordered.',
  'Disposition: Follow-up in 48 hrs.',
];

const ScribeDemo = () => {
  const [phase, setPhase] = useState<'idle' | 'recording' | 'generating' | 'done'>('idle');
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [noteLines, setNoteLines] = useState<string[]>([]);
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
      timers.current.push(setTimeout(() => setVisibleLines(p => [...p, i]), i * 1400));
    });
    const noteStart = scribeConversation.length * 1400 + 400;
    timers.current.push(setTimeout(() => setPhase('generating'), noteStart - 300));
    generatedNote.forEach((line, i) => {
      timers.current.push(setTimeout(() => setNoteLines(p => [...p, line]), noteStart + i * 600));
    });
    timers.current.push(setTimeout(() => setPhase('done'), noteStart + generatedNote.length * 600 + 500));
  }, []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [visibleLines]);

  const reset = useCallback(() => { clearAll(); setPhase('idle'); setVisibleLines([]); setNoteLines([]); setEhrSynced(false); }, []);
  useEffect(() => () => clearAll(), []);

  return (
    <div className="space-y-2.5">
      {/* Live conversation */}
      <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #0f1923 0%, #1a2e3d 100%)' }}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
          <div className="flex items-center gap-2">
            {phase === 'recording' && <span className="flex h-2 w-2"><span className="animate-ping absolute h-2 w-2 rounded-full bg-red-400 opacity-75" /><span className="relative rounded-full h-2 w-2 bg-red-500" /></span>}
            {phase !== 'recording' && <span className="h-2 w-2 rounded-full bg-white/20" />}
            <span className="text-[11px] font-semibold text-white/60 tracking-wide">
              {phase === 'idle' ? 'Ready' : phase === 'recording' ? 'Recording encounter' : phase === 'generating' ? 'Generating note…' : 'Complete'}
            </span>
          </div>
          {phase === 'recording' && <WaveformBars isActive bars={18} color="#60d8e8" />}
          {phase === 'generating' && (
            <div className="flex gap-1">
              {[0,1,2].map(i => (
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400"
                  animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }} />
              ))}
            </div>
          )}
        </div>

        {/* Chat messages */}
        <div ref={chatRef} className="px-4 py-3 space-y-2 h-[130px] overflow-y-auto">
          {visibleLines.length === 0 && phase === 'idle' && (
            <div className="h-full flex items-center justify-center">
              <p className="text-[11px] text-white/25 text-center">Press Start Encounter to begin live transcription</p>
            </div>
          )}
          {scribeConversation.map((line, i) => (
            <AnimatePresence key={i}>
              {visibleLines.includes(i) && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
                  className={`flex gap-2 ${line.speaker === 'patient' ? 'justify-end' : ''}`}>
                  <div className={`text-[11px] leading-relaxed px-3 py-1.5 rounded-2xl max-w-[85%] ${
                    line.speaker === 'clinician'
                      ? 'bg-white/8 text-white/80 rounded-tl-sm'
                      : 'text-white rounded-tr-sm'
                  }`} style={line.speaker === 'patient' ? { background: 'linear-gradient(135deg, #387E89cc, #5192AEcc)' } : {}}>
                    <span className="block text-[9px] font-bold mb-0.5 opacity-50">{line.speaker === 'clinician' ? 'Dr. Chen' : 'Patient'}</span>
                    {line.text}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

      {/* AI Note */}
      {noteLines.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-xl overflow-hidden border border-blue-100/60">
          <div className="flex items-center justify-between px-3 py-1.5" style={{ background: 'linear-gradient(90deg, #eff6ff, #f0f9ff)' }}>
            <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">AI SOAP Note</span>
            <span className="text-[9px] text-blue-400 font-medium">Auto-generated</span>
          </div>
          <div className="px-3 py-2 bg-white space-y-0.5">
            {noteLines.map((l, i) => (
              <motion.p key={i} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }}
                className="text-[11px] text-gray-700 font-mono">{l}</motion.p>
            ))}
          </div>
        </motion.div>
      )}

      {/* EHR synced */}
      {ehrSynced && (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2.5 rounded-xl p-2.5"
          style={{ background: 'linear-gradient(90deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0' }}>
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-green-800">Pushed to Epic EHR</p>
            <p className="text-[9px] text-green-600">Synced in 0.3s · Chart updated</p>
          </div>
        </motion.div>
      )}

      {/* Buttons */}
      <div className="flex gap-2 pt-0.5">
        {(phase === 'idle' || phase === 'done') ? (
          <>
            <button onClick={startEncounter}
              className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white tracking-wide transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}>
              {phase === 'done' ? 'New Encounter' : 'Start Encounter'}
            </button>
            {phase === 'done' && !ehrSynced && (
              <button onClick={() => setEhrSynced(true)}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold transition-all hover:opacity-90 active:scale-[0.98] border-2 border-[#387E89] text-[#387E89]">
                Push to EHR
              </button>
            )}
          </>
        ) : (
          <button onClick={reset}
            className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-gray-500 border border-gray-200 hover:border-gray-300 transition-all">
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

  return (
    <div className="space-y-2.5">
      {/* Phone UI */}
      <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #0f1923, #1a2e3d)' }}>
        {/* Caller header */}
        <div className="px-4 pt-3 pb-2.5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #387E89, #5192AE)' }}>B</div>
              {phase === 'calling' && (
                <motion.div className="absolute inset-0 rounded-full border-2 border-[#387E89]"
                  animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }} />
              )}
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-white">BRAVO AI Receptionist</p>
              <p className="text-[10px] text-white/40">
                {phase === 'idle' ? 'Ready · 24/7 · All calls handled' :
                 phase === 'calling' ? 'In call with Sarah M.' : 'Call complete · All tasks done ✓'}
              </p>
            </div>
            {phase === 'calling' && activeSpeaker && (
              <WaveformBars isActive bars={14} color={activeSpeaker === 'bravo' ? '#60d8e8' : '#a78bfa'} />
            )}
          </div>
        </div>

        {/* Transcript */}
        <div ref={scrollRef} className="px-4 py-3 space-y-2 h-[150px] overflow-y-auto">
          {visibleLines.length === 0 && (
            <div className="h-full flex items-center justify-center">
              <p className="text-[11px] text-white/25 text-center">Press Start Call to hear BRAVO in action</p>
            </div>
          )}
          {bravoConversation.map((line, i) => (
            <AnimatePresence key={i}>
              {visibleLines.includes(i) && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
                  className={`flex gap-2 ${line.speaker === 'caller' ? 'justify-end' : ''}`}>
                  {line.speaker === 'bravo' && (
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #387E89, #5192AE)' }}>B</div>
                  )}
                  <div className={`max-w-[82%] rounded-2xl px-3 py-1.5 ${
                    activeSpeaker === line.speaker && visibleLines[visibleLines.length - 1] === i
                      ? 'ring-1 ring-white/20' : ''
                  } ${line.speaker === 'bravo' ? 'bg-white/8 rounded-tl-sm' : 'rounded-tr-sm'}`}
                    style={line.speaker === 'caller' ? { background: 'linear-gradient(135deg, #4f46e5aa, #7c3aedaa)' } : {}}>
                    <p className="text-[9px] font-bold mb-0.5 opacity-50 text-white">{line.name} · {line.time}</p>
                    <p className="text-[11px] leading-relaxed text-white/85">{line.text}</p>
                  </div>
                  {line.speaker === 'caller' && (
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-[9px] font-bold text-white bg-white/15">S</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

      {/* Outcomes */}
      {phase === 'done' && (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-1.5">
          {['Appt booked · Thu 10:30', 'Rx refill sent', 'SMS sent'].map((t, i) => (
            <span key={i} className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, #f0fdf4, #dcfce7)', color: '#15803d', border: '1px solid #bbf7d0' }}>
              ✓ {t}
            </span>
          ))}
        </motion.div>
      )}

      {/* CTA */}
      <div className="flex gap-2">
        {phase !== 'calling' ? (
          <button onClick={startCall}
            className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white tracking-wide transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}>
            {phase === 'done' ? 'Replay Call' : 'Start Call'}
          </button>
        ) : (
          <button onClick={endCall}
            className="flex-1 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-[0.98]"
            style={{ background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5' }}>
            End Call
          </button>
        )}
      </div>
    </div>
  );
};

// ─── Custom AI Agents Demo ────────────────────────────────────────────────────
const agents = [
  { id: 'scribe',    label: 'AI Scribe',       task: 'Documenting visit…',   done: 'Note generated',     color: '#3b82f6', pct: 87 },
  { id: 'billing',   label: 'AI Billing',       task: 'Coding encounter…',    done: 'CPT 99213 suggested', color: '#8b5cf6', pct: 62 },
  { id: 'prior',     label: 'Prior Auth',        task: 'Submitting request…',  done: 'Auth approved',       color: '#ec4899', pct: 100 },
  { id: 'labs',      label: 'Lab Routing',       task: 'Routing results…',     done: 'Sent to Dr. Chen',    color: '#f59e0b', pct: 45 },
  { id: 'recall',    label: 'Patient Recall',    task: 'Scheduling outreach…', done: '24 patients contacted', color: '#10b981', pct: 78 },
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
      const delay = idx * 250;
      let current = 0;
      setTimeout(() => {
        const iv = setInterval(() => {
          current += Math.random() * 8 + 3;
          if (current >= agent.pct) {
            current = agent.pct;
            clearInterval(iv);
            setProgresses(p => ({ ...p, [agent.id]: agent.pct }));
            if (idx === agents.length - 1) {
              setTimeout(() => { setRunning(false); setDone(true); }, 400);
            }
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
    <div className="space-y-2.5">
      {/* Dark container */}
      <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #0f1923, #1a2e3d)' }}>
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
          <span className="text-[11px] font-semibold text-white/50 tracking-wide">
            {running ? 'Agents running…' : done ? '5 tasks completed' : '5 agents ready to deploy'}
          </span>
          {running && (
            <div className="flex gap-1">
              {[0,1,2].map(i => (
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} />
              ))}
            </div>
          )}
          {done && <span className="text-[10px] font-bold text-emerald-400">All done ✓</span>}
        </div>

        <div className="px-4 py-3 space-y-3">
          {agents.map(agent => {
            const pct = progresses[agent.id];
            const isDone = pct >= agent.pct && (running || done);
            return (
              <div key={agent.id}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: agent.color }} />
                    <span className="text-[11px] font-semibold text-white/80">{agent.label}</span>
                  </div>
                  <span className="text-[10px] font-medium" style={{ color: isDone ? agent.color : 'rgba(255,255,255,0.3)' }}>
                    {(running || done) ? (isDone ? agent.done : agent.task) : 'Standby'}
                  </span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${agent.color}88, ${agent.color})` }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats row */}
      {done && (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-3 gap-2">
          {[['40%', 'Admin saved'], ['0.3s', 'Avg task time'], ['5', 'Agents active']].map(([val, label], i) => (
            <div key={i} className="rounded-xl p-2.5 text-center" style={{ background: 'linear-gradient(145deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
              <p className="text-base font-black text-gray-900">{val}</p>
              <p className="text-[9px] text-gray-500 font-medium leading-tight">{label}</p>
            </div>
          ))}
        </motion.div>
      )}

      <button onClick={running ? undefined : runAgents} disabled={running}
        className="w-full py-2.5 rounded-xl text-xs font-bold text-white tracking-wide transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}>
        {running ? 'Running…' : done ? 'Run Again' : 'Deploy All Agents'}
      </button>
    </div>
  );
};

// ─── Integrations Demo ────────────────────────────────────────────────────────
const ehrList = [
  { name: 'Epic',        color: '#dc2626', initial: 'E' },
  { name: 'Cerner',      color: '#2563eb', initial: 'C' },
  { name: 'Athena',      color: '#7c3aed', initial: 'A' },
  { name: 'eClinicals',  color: '#0891b2', initial: 'eC' },
  { name: 'DrChrono',    color: '#db2777', initial: 'DC' },
  { name: 'Kareo',       color: '#059669', initial: 'K' },
];
const appGrid = [
  { name: 'Zoom',     color: '#1d4ed8', initial: 'Zm' },
  { name: 'Doximity', color: '#0ea5e9', initial: 'Dx' },
  { name: 'Twilio',   color: '#e11d48', initial: 'Tw' },
  { name: 'Stripe',   color: '#5b21b6', initial: 'St' },
  { name: 'G Suite',  color: '#ea580c', initial: 'GS' },
  { name: 'Slack',    color: '#7c3aed', initial: 'Sl' },
  { name: 'AWS',      color: '#f59e0b', initial: 'AW' },
  { name: 'Salesforce', color: '#0ea5e9', initial: 'SF' },
];

const IntegrationsDemo = () => {
  const [activeEHR, setActiveEHR] = useState<number | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [syncedEHR, setSyncedEHR] = useState<number | null>(null);

  const handleSync = (idx: number) => {
    if (syncing) return;
    setActiveEHR(idx);
    setSyncing(true);
    setSyncedEHR(null);
    setTimeout(() => { setSyncing(false); setSyncedEHR(idx); }, 1600);
  };

  return (
    <div className="space-y-2.5">
      {/* Dark header */}
      <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #0f1923, #1a2e3d)' }}>
        <div className="px-4 py-2.5 border-b border-white/5">
          <p className="text-[11px] font-semibold text-white/50 tracking-wide">Select an EHR to test sync</p>
        </div>

        {/* EHR grid */}
        <div className="p-3 grid grid-cols-3 gap-2">
          {ehrList.map((ehr, i) => {
            const isActive = activeEHR === i;
            const isSynced = syncedEHR === i;
            return (
              <button key={i} onClick={() => handleSync(i)}
                className="relative flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
                style={{
                  background: isActive ? `${ehr.color}22` : 'rgba(255,255,255,0.04)',
                  border: `1.5px solid ${isActive ? ehr.color + '60' : 'rgba(255,255,255,0.06)'}`,
                }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-black"
                  style={{ background: `linear-gradient(135deg, ${ehr.color}cc, ${ehr.color})` }}>
                  {ehr.initial}
                </div>
                <span className="text-[10px] font-semibold text-white/70">{ehr.name}</span>
                {isSynced && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                    <span className="text-white text-[8px] font-black">✓</span>
                  </motion.div>
                )}
                {syncing && isActive && (
                  <motion.div className="absolute inset-0 rounded-xl border-2" style={{ borderColor: ehr.color }}
                    animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8 }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sync result */}
      {syncedEHR !== null && (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2.5 rounded-xl p-2.5"
          style={{ background: 'linear-gradient(90deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0' }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-black flex-shrink-0"
            style={{ background: ehrList[syncedEHR].color }}>
            {ehrList[syncedEHR].initial}
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold text-green-800">Connected to {ehrList[syncedEHR].name}</p>
            <p className="text-[9px] text-green-600">Notes sync · Orders sync · Charts sync · Real-time</p>
          </div>
        </motion.div>
      )}

      {/* Other apps */}
      <div>
        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-2">Also connects with 7,000+ apps</p>
        <div className="flex flex-wrap gap-1.5">
          {appGrid.map((app, i) => (
            <div key={i} className="flex items-center gap-1 bg-white border border-gray-100 rounded-lg px-2 py-1 shadow-sm">
              <div className="w-4 h-4 rounded-md flex items-center justify-center text-white text-[8px] font-black flex-shrink-0"
                style={{ background: app.color }}>{app.initial}</div>
              <span className="text-[10px] font-medium text-gray-600">{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Main Demo Panel ──────────────────────────────────────────────────────────
const tabItems = [
  { id: 'scribe', label: 'AI Scribe', shortLabel: 'Scribe', subtitle: 'Live transcription → auto SOAP note', badge: '2+ hrs saved/day', color: '#3b82f6', Demo: ScribeDemo },
  { id: 'bravo',  label: 'BRAVO',    shortLabel: 'BRAVO',  subtitle: 'AI handles every inbound call',       badge: '24/7 availability', color: '#387E89', Demo: ReceptionistDemo },
  { id: 'agents', label: 'Agents',   shortLabel: 'Agents', subtitle: '5 agents automating your clinic',     badge: '40% less admin',   color: '#8b5cf6', Demo: CustomAgentsDemo },
  { id: 'ehr',    label: 'EHR',      shortLabel: 'EHR',    subtitle: 'Plug-and-play with any EHR + 7k apps', badge: 'Zero disruption',  color: '#059669', Demo: IntegrationsDemo },
];

const HeroDemoPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabItems[activeTab];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="lg:col-span-5 relative order-2"
    >
      <div className="absolute -inset-4 rounded-[2rem] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(56,126,137,0.12) 0%, transparent 70%)' }} />

      <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-200/60"
        style={{ background: '#ffffff' }}>

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">S10.AI · Live Demo</span>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Clinician-First</span>
        </div>

        {/* ── Tab bar ── */}
        <div className="grid grid-cols-4 border-b border-gray-100">
          {tabItems.map((t, i) => {
            const isActive = activeTab === i;
            return (
              <button key={t.id} onClick={() => setActiveTab(i)}
                className={`relative py-3 transition-all ${isActive ? 'bg-white' : 'bg-gray-50/80 hover:bg-gray-50'}`}>
                <span className={`text-[11px] font-bold ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>{t.shortLabel}</span>
                {isActive && (
                  <motion.div layoutId="active-tab-bar"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-t-full"
                    style={{ background: `linear-gradient(90deg, ${t.color}88, ${t.color})` }} />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Tab meta ── */}
        <div className="flex items-start justify-between px-5 pt-4 pb-3">
          <div>
            <h3 className="text-[13px] font-black text-gray-900 leading-tight">{tab.label}</h3>
            <p className="text-[11px] text-gray-400 mt-0.5">{tab.subtitle}</p>
          </div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border flex-shrink-0 ml-3 mt-0.5"
            style={{ background: `${tab.color}0f`, color: tab.color, borderColor: `${tab.color}30` }}>
            {tab.badge}
          </span>
        </div>

        <div className="h-px bg-gray-100 mx-5" />

        {/* ── Demo content ── */}
        <div className="px-5 py-4">
          <AnimatePresence mode="wait">
            <motion.div key={tab.id}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              <tab.Demo />
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
