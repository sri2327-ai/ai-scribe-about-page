
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
  { speaker: 'patient' as const, text: "I've had a persistent headache for about three days and some neck stiffness." },
  { speaker: 'clinician' as const, text: 'Any fever, nausea, or sensitivity to light?' },
  { speaker: 'patient' as const, text: 'Yes, bright lights are really bothering me.' },
  { speaker: 'clinician' as const, text: "Okay, I'm going to order a CT scan and some bloodwork to rule out anything serious." },
];

const generatedNote = [
  'CC: Headache × 3 days, neck stiffness',
  'HPI: Photophobia present. No vomiting reported.',
  'Plan: CT Head, CBC, CMP ordered.',
  'Disposition: Follow-up in 48 hrs.',
];

const ScribeDemo = () => {
  const [phase, setPhase] = useState<'idle' | 'recording' | 'generating' | 'done'>('idle');
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [noteLines, setNoteLines] = useState<string[]>([]);
  const [ehrSynced, setEhrSynced] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAll = () => timers.current.forEach(clearTimeout);

  const startEncounter = useCallback(() => {
    clearAll();
    setPhase('recording');
    setVisibleLines([]);
    setNoteLines([]);
    setEhrSynced(false);

    // Auto-play conversation
    scribeConversation.forEach((_, i) => {
      timers.current.push(setTimeout(() => setVisibleLines(p => [...p, i]), i * 1500));
    });

    // Transition to generating
    const noteStart = scribeConversation.length * 1500 + 500;
    timers.current.push(setTimeout(() => setPhase('generating'), noteStart - 400));

    generatedNote.forEach((line, i) => {
      timers.current.push(setTimeout(() => setNoteLines(p => [...p, line]), noteStart + i * 700));
    });

    const doneAt = noteStart + generatedNote.length * 700 + 600;
    timers.current.push(setTimeout(() => setPhase('done'), doneAt));
  }, []);

  const pushToEHR = useCallback(() => {
    setEhrSynced(true);
  }, []);

  const reset = useCallback(() => {
    clearAll();
    setPhase('idle');
    setVisibleLines([]);
    setNoteLines([]);
    setEhrSynced(false);
  }, []);

  useEffect(() => () => clearAll(), []);

  return (
    <div className="space-y-3">
      {/* Status bar */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: phase === 'recording' ? 'rgba(56,126,137,0.07)' : phase === 'generating' ? 'rgba(59,130,246,0.07)' : phase === 'done' ? 'rgba(34,197,94,0.07)' : '#f9fafb' }}>
        {phase === 'recording' && (
          <>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
            <span className="text-xs font-semibold text-gray-700">Recording encounter…</span>
            <WaveformBars isActive bars={20} color="#387E89" />
          </>
        )}
        {phase === 'generating' && (
          <>
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
              <Zap className="w-3.5 h-3.5 text-blue-500" />
            </motion.div>
            <span className="text-xs font-semibold text-blue-600">AI generating note…</span>
          </>
        )}
        {phase === 'done' && (
          <>
            <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
            <span className="text-xs font-semibold text-green-700">Note ready</span>
          </>
        )}
        {phase === 'idle' && (
          <span className="text-xs text-gray-400">Click "Start Encounter" to begin</span>
        )}
      </div>

      {/* Conversation transcript */}
      {visibleLines.length > 0 && (
        <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
          {scribeConversation.map((line, i) => (
            <AnimatePresence key={i}>
              {visibleLines.includes(i) && (
                <motion.div
                  initial={{ opacity: 0, x: line.speaker === 'clinician' ? -8 : 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-1.5 ${line.speaker === 'patient' ? 'justify-end' : ''}`}
                >
                  <div className={`text-xs px-3 py-1.5 rounded-2xl max-w-[82%] ${line.speaker === 'clinician' ? 'bg-gray-100 text-gray-700' : 'text-white'}`}
                    style={line.speaker === 'patient' ? { background: 'linear-gradient(135deg, #143151, #387E89)' } : {}}>
                    <span className="block text-[9px] font-bold mb-0.5 opacity-60">{line.speaker === 'clinician' ? '👨‍⚕️ Dr. Chen' : '🧑 Patient'}</span>
                    {line.text}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      )}

      {/* AI Note */}
      {noteLines.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-blue-100 overflow-hidden">
          <div className="bg-blue-50 px-3 py-1.5 flex items-center gap-1.5">
            <FileText className="w-3 h-3 text-blue-500" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">AI-Generated SOAP Note</span>
          </div>
          <div className="px-3 py-2 space-y-0.5 bg-white">
            {noteLines.map((l, i) => (
              <motion.p key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="text-xs text-gray-700 font-mono leading-relaxed">{l}</motion.p>
            ))}
          </div>
        </motion.div>
      )}

      {/* EHR synced */}
      {ehrSynced && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl p-2.5">
          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
          <div>
            <span className="text-xs font-bold text-green-700">Note pushed to EHR ✓</span>
            <p className="text-[10px] text-green-600">Synced to Epic • 0.3s</p>
          </div>
        </motion.div>
      )}

      {/* Action buttons */}
      <div className="flex gap-2">
        {phase === 'idle' || phase === 'done' ? (
          <>
            <button
              onClick={startEncounter}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}
            >
              <Mic className="w-3.5 h-3.5" />
              Start Encounter
            </button>
            {phase === 'done' && !ehrSynced && (
              <button
                onClick={pushToEHR}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold border-2 border-[#387E89] text-[#387E89] transition-all hover:bg-[#387E89]/5 active:scale-95"
              >
                <Database className="w-3.5 h-3.5" />
                Auto EHR
              </button>
            )}
            {phase === 'done' && (
              <button onClick={reset} className="px-3 py-2 rounded-lg text-xs font-semibold text-gray-400 hover:text-gray-600 border border-gray-200 hover:border-gray-300 transition-all">
                Reset
              </button>
            )}
          </>
        ) : (
          <button
            onClick={reset}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-gray-500 border border-gray-200 hover:border-gray-300 transition-all"
          >
            <Square className="w-3 h-3" />
            Stop
          </button>
        )}
      </div>
    </div>
  );
};

// ─── BRAVO Receptionist Demo ─────────────────────────────────────────────────
const bravoConversation = [
  { speaker: 'bravo' as const, name: 'BRAVO AI', time: '0:00', text: "Good morning! You've reached Greenfield Medical. This is BRAVO. How can I help you today?" },
  { speaker: 'caller' as const, name: 'Sarah M.', time: '0:05', text: "Hi, I'd like to schedule an appointment and also get a refill for my blood pressure medication." },
  { speaker: 'bravo' as const, name: 'BRAVO AI', time: '0:11', text: "Of course, Sarah! Dr. Patel has Thursday at 10:30 AM or Friday at 2 PM available. Which works best?" },
  { speaker: 'caller' as const, name: 'Sarah M.', time: '0:18', text: "Thursday at 10:30 sounds perfect." },
  { speaker: 'bravo' as const, name: 'BRAVO AI', time: '0:22', text: "Done! Appointment confirmed for Thursday at 10:30 AM. I've also sent your refill request to Walgreens on 5th Ave. You'll get a text confirmation shortly." },
  { speaker: 'caller' as const, name: 'Sarah M.', time: '0:31', text: "That's amazing, thank you so much!" },
  { speaker: 'bravo' as const, name: 'BRAVO AI', time: '0:35', text: "My pleasure! Is there anything else I can help you with today?" },
];

const ReceptionistDemo = () => {
  const [phase, setPhase] = useState<'idle' | 'calling' | 'done'>('idle');
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentSpeaker, setCurrentSpeaker] = useState<'bravo' | 'caller' | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isCancelledRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const stopAll = useCallback(() => {
    isCancelledRef.current = true;
    window.speechSynthesis.cancel();
    timers.current.forEach(clearTimeout);
    setPhase('idle');
    setVisibleLines([]);
    setCurrentSpeaker(null);
  }, []);

  useEffect(() => () => { window.speechSynthesis.cancel(); timers.current.forEach(clearTimeout); }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const speakLineSequential = useCallback((index: number) => {
    if (isCancelledRef.current || index >= bravoConversation.length) {
      setPhase('done');
      setCurrentSpeaker(null);
      return;
    }
    const line = bravoConversation[index];
    setCurrentSpeaker(line.speaker);
    setVisibleLines(p => [...p, index]);

    const utterance = new SpeechSynthesisUtterance(line.text);
    utterance.rate = line.speaker === 'bravo' ? 1.05 : 0.9;
    utterance.pitch = line.speaker === 'bravo' ? 1.15 : 0.85;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      if (line.speaker === 'bravo') {
        const v = voices.find(v => v.name.includes('Samantha') || v.name.includes('Google US English') || v.name.includes('Female') || v.name.includes('Karen'));
        if (v) utterance.voice = v;
      } else {
        const v = voices.find(v => v.name.includes('Daniel') || v.name.includes('Male') || v.name.includes('Google UK English Male') || v.name.includes('Alex'));
        if (v) utterance.voice = v;
      }
    }

    utterance.onend = () => {
      if (!isCancelledRef.current) {
        setTimeout(() => speakLineSequential(index + 1), 400);
      }
    };
    utterance.onerror = () => {
      if (!isCancelledRef.current) speakLineSequential(index + 1);
    };
    window.speechSynthesis.speak(utterance);
  }, []);

  const startCall = useCallback(() => {
    isCancelledRef.current = false;
    timers.current.forEach(clearTimeout);
    setPhase('calling');
    setVisibleLines([]);
    setCurrentSpeaker(null);

    // Small delay before first line
    timers.current.push(setTimeout(() => speakLineSequential(0), 600));
  }, [speakLineSequential]);

  return (
    <div className="space-y-3">
      {/* Call UI header */}
      <div className="rounded-xl overflow-hidden border border-gray-200">
        <div className="flex items-center gap-3 px-3 py-2.5" style={{ background: 'linear-gradient(135deg, #143151 0%, #1e4976 100%)' }}>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-white">BRAVO AI Receptionist</p>
            <p className="text-[10px] text-white/60">
              {phase === 'idle' ? 'Ready to answer calls' : phase === 'calling' ? (
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block" />Live call in progress</span>
              ) : 'Call completed ✓'}
            </p>
          </div>
          {phase === 'calling' && (
            <WaveformBars isActive={currentSpeaker !== null} bars={16} color="#60d8e8" />
          )}
        </div>

        {/* Transcript */}
        <div ref={scrollRef} className="bg-gray-50 p-3 space-y-2 max-h-[180px] overflow-y-auto">
          {visibleLines.length === 0 && (
            <p className="text-[11px] text-gray-400 text-center py-4">Press "Start Call" to hear a live demo</p>
          )}
          {bravoConversation.map((line, i) => (
            <AnimatePresence key={i}>
              {visibleLines.includes(i) && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2 ${line.speaker === 'caller' ? 'justify-end' : ''}`}
                >
                  {line.speaker === 'bravo' && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-[10px] font-bold" style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}>B</div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl px-3 py-2 ${line.speaker === 'bravo' ? 'bg-white border border-gray-200' : 'text-white'} ${currentSpeaker === line.speaker && visibleLines[visibleLines.length - 1] === i ? 'ring-2 ring-[#387E89]/40' : ''}`}
                    style={line.speaker === 'caller' ? { background: 'linear-gradient(135deg, #387E89, #5192AE)' } : {}}>
                    <p className={`text-[9px] font-bold mb-0.5 ${line.speaker === 'bravo' ? 'text-[#387E89]' : 'text-white/70'}`}>{line.name} · {line.time}</p>
                    <p className={`text-xs leading-relaxed ${line.speaker === 'bravo' ? 'text-gray-700' : 'text-white'}`}>{line.text}</p>
                  </div>
                  {line.speaker === 'caller' && (
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold text-gray-600">S</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

      {/* Outcome chips */}
      {phase === 'done' && (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-1.5">
          {['✓ Appt booked: Thu 10:30AM', '✓ Rx refill sent', '✓ SMS confirmation'].map((t, i) => (
            <span key={i} className="text-[10px] font-semibold bg-green-50 text-green-700 border border-green-200 rounded-full px-2.5 py-1">{t}</span>
          ))}
        </motion.div>
      )}

      {/* Controls */}
      <div className="flex gap-2">
        {phase !== 'calling' ? (
          <button
            onClick={startCall}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}
          >
            <Phone className="w-3.5 h-3.5" />
            {phase === 'done' ? 'Replay Call' : 'Start Call'}
          </button>
        ) : (
          <button
            onClick={stopAll}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-bold bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-all active:scale-95"
          >
            <Square className="w-3.5 h-3.5" />
            End Call
          </button>
        )}
      </div>
    </div>
  );
};

// ─── Custom AI Agents Demo ────────────────────────────────────────────────────
const agentNodes = [
  { id: 'scribe', label: 'AI Scribe', color: '#3b82f6', bg: '#EFF6FF', x: 50, y: 10, desc: 'Auto-documents visits' },
  { id: 'receptionist', label: 'Receptionist', color: '#387E89', bg: '#F0FAFA', x: 85, y: 40, desc: 'Handles all calls' },
  { id: 'billing', label: 'AI Billing', color: '#059669', bg: '#F0FDF4', x: 70, y: 80, desc: 'Suggests CPT codes' },
  { id: 'prior', label: 'Prior Auth', color: '#7c3aed', bg: '#F5F3FF', x: 15, y: 75, desc: 'Handles auth requests' },
  { id: 'labs', label: 'Lab Routing', color: '#ea580c', bg: '#FFF7ED', x: 5, y: 35, desc: 'Routes results' },
];

const CustomAgentsDemo = () => {
  const [activeNode, setActiveNode] = useState<string | null>('receptionist');
  const [pulseNodes, setPulseNodes] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const ids = agentNodes.map(n => n.id);
      const randomId = ids[Math.floor(Math.random() * ids.length)];
      setPulseNodes([randomId]);
      setTimeout(() => setPulseNodes([]), 800);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const active = agentNodes.find(n => n.id === activeNode);

  return (
    <div className="space-y-3">
      <div className="relative rounded-xl overflow-hidden border border-gray-100" style={{ background: '#f8fafc', height: 200 }}>
        {/* Central hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#143151]/20 flex items-center justify-center shadow-md z-10">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}>
            <Stethoscope className="w-4 h-4 text-white" />
          </div>
        </div>
        {/* Connection lines SVG */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {agentNodes.map(node => (
            <line
              key={node.id}
              x1="50%" y1="50%"
              x2={`${node.x}%`} y2={`${node.y + 5}%`}
              stroke={activeNode === node.id ? node.color : '#e2e8f0'}
              strokeWidth={activeNode === node.id ? 2 : 1}
              strokeDasharray={activeNode === node.id ? "4 3" : "3 4"}
              className="transition-all duration-300"
            />
          ))}
        </svg>
        {/* Agent nodes */}
        {agentNodes.map(node => (
          <button
            key={node.id}
            onClick={() => setActiveNode(node.id)}
            className="absolute flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border-2 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
              background: activeNode === node.id ? node.bg : 'white',
              borderColor: activeNode === node.id ? node.color : '#e2e8f0',
              zIndex: 10,
              boxShadow: pulseNodes.includes(node.id) ? `0 0 0 4px ${node.color}33` : undefined,
            }}
          >
            <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: `radial-gradient(circle at 35% 35%, ${node.color}cc, ${node.color})` }} />
            <span className="text-[10px] font-bold whitespace-nowrap" style={{ color: node.color }}>{node.label}</span>
            {pulseNodes.includes(node.id) && (
              <motion.span
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-full"
                style={{ background: node.color, opacity: 0.2 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Active node detail */}
      {active && (
        <motion.div key={active.id} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 rounded-xl p-3 border" style={{ background: active.bg, borderColor: `${active.color}33` }}>
          <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ background: `radial-gradient(circle at 35% 35%, ${active.color}cc, ${active.color})` }} />
          <div className="flex-1">
            <p className="text-xs font-bold" style={{ color: active.color }}>{active.label}</p>
            <p className="text-[11px] text-gray-500">{active.desc}</p>
          </div>
          <span className="text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Active</span>
        </motion.div>
      )}
    </div>
  );
};

// ─── Integrations Demo ────────────────────────────────────────────────────────
const ehrSystems = [
  { name: 'Epic', abbr: 'E', color: '#e11d48', category: 'EHR' },
  { name: 'Cerner', abbr: 'C', color: '#2563eb', category: 'EHR' },
  { name: 'Athena', abbr: 'A', color: '#7c3aed', category: 'EHR' },
  { name: 'DrChrono', abbr: 'D', color: '#0891b2', category: 'PMS' },
];
const otherApps = [
  { name: 'Zoom', abbr: 'Z', color: '#1d4ed8', category: 'Telehealth' },
  { name: 'Kareo', abbr: 'K', color: '#059669', category: 'Billing' },
  { name: 'Doximity', abbr: 'Dx', color: '#0ea5e9', category: 'Comms' },
  { name: 'G Cal', abbr: 'G', color: '#ea580c', category: 'Calendar' },
  { name: 'Twilio', abbr: 'T', color: '#e11d48', category: 'SMS' },
  { name: 'Stripe', abbr: 'S', color: '#5b21b6', category: 'Payments' },
];

const IntegrationsDemo = () => {
  const [activeEHR, setActiveEHR] = useState<number>(0);
  const [syncing, setSyncing] = useState(false);
  const [synced, setSynced] = useState(false);

  const triggerSync = () => {
    setSyncing(true);
    setSynced(false);
    setTimeout(() => { setSyncing(false); setSynced(true); }, 1800);
  };

  return (
    <div className="space-y-3">
      {/* Central hub visual */}
      <div className="rounded-xl border border-gray-100 p-3" style={{ background: '#f8fafc' }}>
        <div className="flex items-center justify-center gap-0">
          {/* Left apps */}
          <div className="flex flex-col gap-1.5 mr-3">
            {otherApps.slice(0, 3).map((app, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1 border border-gray-100 shadow-sm">
                <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0" style={{ background: app.color }}>{app.abbr}</div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-700">{app.name}</p>
                  <p className="text-[8px] text-gray-400">{app.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Connection lines + hub */}
          <div className="flex items-center">
            <div className="w-8 h-px bg-gradient-to-r from-gray-200 to-[#387E89]/40" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}>
                <div className="text-center">
                  <p className="text-white text-[8px] font-black leading-none">S10</p>
                  <p className="text-white/70 text-[7px]">.AI</p>
                </div>
              </div>
              {syncing && (
                <motion.div className="absolute inset-0 rounded-2xl" animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} style={{ background: '#387E89', borderRadius: '1rem' }} />
              )}
              {synced && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-[#387E89]/40 to-gray-200" />
          </div>

          {/* Right: EHR selection */}
          <div className="flex flex-col gap-1.5 ml-3">
            {ehrSystems.map((ehr, i) => (
              <button
                key={i}
                onClick={() => { setActiveEHR(i); setSynced(false); }}
                className={`flex items-center gap-1.5 rounded-lg px-2 py-1 border transition-all text-left ${activeEHR === i ? 'border-2 shadow-sm' : 'bg-white border-gray-100 shadow-sm'}`}
                style={activeEHR === i ? { background: `${ehr.color}10`, borderColor: ehr.color } : {}}
              >
                <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0" style={{ background: ehr.color }}>{ehr.abbr}</div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-700">{ehr.name}</p>
                  <p className="text-[8px] text-gray-400">{ehr.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* More apps row */}
      <div className="flex items-center gap-1.5">
        <span className="text-[10px] text-gray-400">Also connects:</span>
        <div className="flex gap-1">
          {otherApps.slice(3).map((app, i) => (
            <div key={i} className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[9px] font-bold shadow-sm" style={{ background: app.color }} title={app.name}>{app.abbr}</div>
          ))}
        </div>
        <span className="text-[10px] text-gray-400 ml-1">+ 7,000 more</span>
      </div>

      {/* Sync button */}
      <button
        onClick={triggerSync}
        disabled={syncing}
        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-70"
        style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}
      >
        {syncing ? (
          <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}><Link2 className="w-3.5 h-3.5" /></motion.div>Syncing with {ehrSystems[activeEHR].name}…</>
        ) : synced ? (
          <><CheckCircle className="w-3.5 h-3.5" />Synced with {ehrSystems[activeEHR].name} ✓</>
        ) : (
          <><Link2 className="w-3.5 h-3.5" />Test Sync with {ehrSystems[activeEHR].name}</>
        )}
      </button>
    </div>
  );
};

// ─── Main Demo Panel ──────────────────────────────────────────────────────────
const tabItems = [
  {
    id: 'scribe',
    label: 'AI Medical Scribe',
    shortLabel: 'Scribe',
    subtitle: 'Auto-documentation from conversations',
    badge: 'Save 2+ hrs/day',
    icon: FileText,
    color: '#3b82f6',
    Demo: ScribeDemo,
  },
  {
    id: 'receptionist',
    label: 'AI Phone Agent',
    shortLabel: 'BRAVO',
    subtitle: 'Live call handling, scheduling & refills',
    badge: '24/7 availability',
    icon: Phone,
    color: '#387E89',
    Demo: ReceptionistDemo,
  },
  {
    id: 'agents',
    label: 'Custom AI Agents',
    shortLabel: 'Agents',
    subtitle: 'Automate every admin task',
    badge: '40% less admin',
    icon: Bot,
    color: '#7c3aed',
    Demo: CustomAgentsDemo,
  },
  {
    id: 'integrations',
    label: 'EHR Integrations',
    shortLabel: 'EHR',
    subtitle: 'Works with Epic, Cerner, Athena & 7k+ apps',
    badge: 'Zero disruption',
    icon: Database,
    color: '#059669',
    Demo: IntegrationsDemo,
  },
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
      {/* Soft glow behind card */}
      <div className="absolute -inset-6 bg-gradient-to-br from-[#387E89]/8 via-[#5192AE]/10 to-[#143151]/8 rounded-[2.5rem] blur-3xl pointer-events-none" />

      <div className="relative bg-white rounded-2xl border border-gray-200/80 shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* ── Header badge ── */}
        <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-gray-100">
          <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">One AI Platform. Every Task Automated.</p>
          <span className="bg-pink-50 text-pink-500 border border-pink-200 text-[10px] font-bold px-2.5 py-1 rounded-full">Clinician-First</span>
        </div>

        {/* ── Tab bar ── */}
        <div className="flex border-b border-gray-100 bg-gray-50/70">
          {tabItems.map((t, i) => {
            const Icon = t.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className={`flex-1 flex flex-col items-center gap-0.5 py-3 px-1 transition-all relative text-center ${isActive ? 'bg-white' : 'hover:bg-white/60'}`}
              >
                <Icon className="w-4 h-4" style={{ color: isActive ? t.color : '#9ca3af' }} />
                <span className={`text-[10px] font-bold leading-none ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>{t.shortLabel}</span>
                {isActive && (
                  <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t" style={{ background: t.color }} />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Active tab meta ── */}
        <div className="px-5 pt-4 pb-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-gray-900">{tab.label}</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">{tab.subtitle}</p>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border flex-shrink-0 ml-2"
              style={{ background: `${tab.color}12`, color: tab.color, borderColor: `${tab.color}30` }}>
              {tab.badge}
            </span>
          </div>
        </div>

        <div className="h-px bg-gray-100 mx-5" />

        {/* ── Demo content ── */}
        <div className="px-5 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
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
