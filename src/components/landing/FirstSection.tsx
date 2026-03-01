
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Users, Clock, FileText, Shield, MessageSquare, Database, CheckCircle, Star, TrendingUp, Play, Pause, Phone, Bot, Plug, Square } from "lucide-react";
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

const companyLogos = ["/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png", "/HeaderLogo.png"];

// ─── Scribe Demo ─────────────────────────────────────────────────────────────
const scribeConversation = [
  { speaker: 'clinician' as const, text: 'Good morning! What brings you in today?' },
  { speaker: 'patient'  as const, text: "I've had a persistent headache for about three days and some neck stiffness." },
  { speaker: 'clinician' as const, text: 'Any fever, nausea, or sensitivity to light?' },
  { speaker: 'patient'  as const, text: 'Yes, bright lights are really bothering me.' },
  { speaker: 'clinician' as const, text: 'Okay, I\'m going to order a CT scan and some bloodwork to rule out anything serious.' },
];

const ScribeDemo = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [noteLines, setNoteLines] = useState<string[]>([]);
  const [ehrSynced, setEhrSynced] = useState(false);
  const [running, setRunning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const generatedNote = [
    'CC: Headache × 3 days, neck stiffness',
    'HPI: Photophobia present. No vomiting reported.',
    'Plan: CT Head, CBC, CMP ordered.',
    'Disposition: Follow-up in 48 hrs.',
  ];

  const reset = () => {
    setVisibleLines([]); setNoteLines([]); setEhrSynced(false); setRunning(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const run = useCallback(() => {
    reset();
    setRunning(true);
    scribeConversation.forEach((_, i) => {
      timerRef.current = setTimeout(() => setVisibleLines(p => [...p, i]), i * 1400);
    });
    const noteStart = scribeConversation.length * 1400 + 400;
    generatedNote.forEach((line, i) => {
      timerRef.current = setTimeout(() => setNoteLines(p => [...p, line]), noteStart + i * 600);
    });
    timerRef.current = setTimeout(() => { setEhrSynced(true); setRunning(false); }, noteStart + generatedNote.length * 600 + 800);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <div className="space-y-3">
      {/* Conversation */}
      <div className="bg-gray-50 rounded-xl p-3 space-y-2 max-h-[180px] overflow-y-auto">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Live Conversation</p>
        {scribeConversation.map((line, i) => (
          <AnimatePresence key={i}>
            {visibleLines.includes(i) && (
              <motion.div
                initial={{ opacity: 0, x: line.speaker === 'clinician' ? -10 : 10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex gap-2 ${line.speaker === 'patient' ? 'justify-end' : ''}`}
              >
                <div className={`text-xs px-2.5 py-1.5 rounded-xl max-w-[85%] ${line.speaker === 'clinician' ? 'bg-white border border-gray-200 text-gray-700' : 'bg-[#387E89] text-white'}`}>
                  <span className="block text-[10px] font-semibold mb-0.5 opacity-70">{line.speaker === 'clinician' ? '👨‍⚕️ Clinician' : '🧑 Patient'}</span>
                  {line.text}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
      {/* Note Generation */}
      {noteLines.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-blue-50 border border-blue-100 rounded-xl p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-400 mb-1.5">📝 AI Note Generated</p>
          {noteLines.map((l, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-gray-700 leading-relaxed">{l}</motion.p>
          ))}
        </motion.div>
      )}
      {/* EHR Sync */}
      {ehrSynced && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl p-2.5">
          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
          <span className="text-xs font-semibold text-green-700">Note pushed to EHR ✓</span>
        </motion.div>
      )}
      <button
        onClick={running ? reset : run}
        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold text-white transition-all"
        style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}
      >
        {running ? <><Square className="w-3.5 h-3.5" />Stop</> : <><Play className="w-3.5 h-3.5 ml-0.5" />Play Demo</>}
      </button>
    </div>
  );
};

// ─── Receptionist Audio Demo ─────────────────────────────────────────────────
const receptionistTranscript = [
  { speaker: 'bravo' as const, text: "Good morning! Thank you for calling Greenfield Medical. How can I help you today?" },
  { speaker: 'caller' as const, text: "Hi, I'd like to schedule an appointment and also get a refill for my blood pressure medication." },
  { speaker: 'bravo' as const, text: "Of course! I can see Dr. Patel has availability this Thursday at 10:30 AM. Shall I book that for you?" },
  { speaker: 'caller' as const, text: "Yes, Thursday works great!" },
  { speaker: 'bravo' as const, text: "Done! Appointment confirmed for Thursday at 10:30 AM. I've also sent a refill request to the pharmacy. Is there anything else I can help you with?" },
  { speaker: 'caller' as const, text: "No, that's perfect. Thank you!" },
  { speaker: 'bravo' as const, text: "You're all set! Have a wonderful day and take care." },
];

const ReceptionistDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);
  const [progress, setProgress] = useState(0);
  const isCancelledRef = useRef(false);

  const stopSpeaking = useCallback(() => {
    isCancelledRef.current = true;
    window.speechSynthesis.cancel();
    setIsPlaying(false); setCurrentLine(-1); setProgress(0);
  }, []);

  useEffect(() => () => window.speechSynthesis.cancel(), []);

  const speakLine = useCallback((index: number) => {
    if (isCancelledRef.current || index >= receptionistTranscript.length) {
      setIsPlaying(false); setCurrentLine(-1); setProgress(100); return;
    }
    const line = receptionistTranscript[index];
    const utterance = new SpeechSynthesisUtterance(line.text);
    utterance.rate = line.speaker === 'bravo' ? 1.0 : 0.95;
    utterance.pitch = line.speaker === 'bravo' ? 1.1 : 0.9;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 1) {
      const female = voices.find(v => v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Google US English'));
      const male = voices.find(v => v.name.includes('Male') || v.name.includes('Daniel'));
      utterance.voice = line.speaker === 'bravo' ? (female || voices[0]) : (male || voices[1] || voices[0]);
    }
    setCurrentLine(index);
    setProgress(Math.round(((index + 1) / receptionistTranscript.length) * 100));
    utterance.onend = () => { if (!isCancelledRef.current) speakLine(index + 1); };
    utterance.onerror = (e) => { if (e.error !== 'canceled') setIsPlaying(false); };
    window.speechSynthesis.speak(utterance);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) { stopSpeaking(); return; }
    isCancelledRef.current = false;
    setIsPlaying(true); setProgress(0);
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => speakLine(0);
    } else { speakLine(0); }
  }, [isPlaying, speakLine, stopSpeaking]);

  return (
    <div className="space-y-3">
      {/* Audio Player */}
      <div className="bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 rounded-xl p-3">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <div className="flex-1">
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #143151, #387E89)' }} />
            </div>
            <p className="text-[10px] text-gray-400 mt-1">{isPlaying ? `Speaking line ${currentLine + 1} of ${receptionistTranscript.length}` : '🔊 Click to hear BRAVO handle a real call'}</p>
          </div>
          {isPlaying && <button onClick={stopSpeaking}><Square className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" /></button>}
        </div>
        {/* Wave bars */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-5 mt-2 justify-center">
            {Array(24).fill(0).map((_, i) => (
              <div key={i} className="w-0.5 rounded-full bg-[#387E89]/60 animate-pulse" style={{ height: `${30 + Math.random() * 70}%`, animationDelay: `${i * 60}ms` }} />
            ))}
          </div>
        )}
      </div>
      {/* Transcript */}
      <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
        {receptionistTranscript.map((line, i) => (
          <div key={i} className={`flex gap-1.5 p-1.5 rounded-lg transition-all ${currentLine === i ? 'bg-[#387E89]/10' : ''}`}>
            <span className="text-xs flex-shrink-0">{line.speaker === 'bravo' ? '🤖' : '👤'}</span>
            <p className={`text-xs leading-relaxed ${line.speaker === 'bravo' ? 'text-gray-700' : 'text-gray-500'} ${currentLine === i ? 'font-medium' : ''}`}>{line.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Custom AI Agents Demo ────────────────────────────────────────────────────
const agentTasks = [
  { label: 'Prior Authorization', icon: '📋', status: 'done', delay: 0 },
  { label: 'Lab Result Routing', icon: '🧪', status: 'done', delay: 600 },
  { label: 'Billing Code Suggestion', icon: '💳', status: 'running', delay: 1200 },
  { label: 'Referral Coordination', icon: '📨', status: 'queued', delay: 1800 },
  { label: 'Patient Recall Outreach', icon: '📞', status: 'queued', delay: 2400 },
];

const CustomAgentsDemo = () => {
  const [taskStates, setTaskStates] = useState<string[]>(agentTasks.map(() => 'idle'));
  const [running, setRunning] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const runDemo = () => {
    timers.current.forEach(clearTimeout);
    setTaskStates(agentTasks.map(() => 'idle'));
    setRunning(true);
    agentTasks.forEach((task, i) => {
      timers.current.push(setTimeout(() => setTaskStates(p => { const n = [...p]; n[i] = 'running'; return n; }), task.delay));
      timers.current.push(setTimeout(() => {
        setTaskStates(p => { const n = [...p]; n[i] = 'done'; return n; });
        if (i === agentTasks.length - 1) setRunning(false);
      }, task.delay + 900));
    });
  };

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  return (
    <div className="space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Automated Clinic Tasks</p>
      {agentTasks.map((task, i) => (
        <div key={i} className={`flex items-center gap-2.5 p-2 rounded-lg border transition-all ${taskStates[i] === 'done' ? 'bg-green-50 border-green-200' : taskStates[i] === 'running' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-100'}`}>
          <span className="text-sm">{task.icon}</span>
          <span className="text-xs font-medium text-gray-700 flex-1">{task.label}</span>
          {taskStates[i] === 'done' && <CheckCircle className="w-3.5 h-3.5 text-green-500" />}
          {taskStates[i] === 'running' && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}><Zap className="w-3.5 h-3.5 text-blue-500" /></motion.div>}
          {taskStates[i] === 'idle' && <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300" />}
        </div>
      ))}
      <button
        onClick={running ? undefined : runDemo}
        disabled={running}
        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg, #143151, #387E89)' }}
      >
        {running ? 'Running...' : <><Play className="w-3.5 h-3.5 ml-0.5" />Run Agents</>}
      </button>
    </div>
  );
};

// ─── Integrations Demo ────────────────────────────────────────────────────────
const integrations = [
  { name: 'Epic', category: 'EHR', color: '#e11d48' },
  { name: 'Athenahealth', category: 'EHR', color: '#7c3aed' },
  { name: 'Cerner', category: 'EHR', color: '#2563eb' },
  { name: 'DrChrono', category: 'PMS', color: '#0891b2' },
  { name: 'Kareo', category: 'Billing', color: '#059669' },
  { name: 'Zoom', category: 'Telehealth', color: '#1d4ed8' },
  { name: 'Doximity', category: 'Comms', color: '#0ea5e9' },
  { name: 'Google Cal', category: 'Calendar', color: '#ea580c' },
];

const IntegrationsDemo = () => {
  const [connected, setConnected] = useState<number[]>([]);
  const [connecting, setConnecting] = useState<number | null>(null);

  const connect = (i: number) => {
    if (connected.includes(i) || connecting !== null) return;
    setConnecting(i);
    setTimeout(() => { setConnected(p => [...p, i]); setConnecting(null); }, 1000);
  };

  return (
    <div className="space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Connect Your Stack — 7,000+ Apps</p>
      <div className="grid grid-cols-2 gap-2">
        {integrations.map((intg, i) => (
          <button
            key={i}
            onClick={() => connect(i)}
            className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all ${connected.includes(i) ? 'bg-green-50 border-green-300' : connecting === i ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200 hover:border-[#387E89]/40'}`}
          >
            <div className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" style={{ background: intg.color }}>{intg.name[0]}</div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">{intg.name}</p>
              <p className="text-[10px] text-gray-400">{intg.category}</p>
            </div>
            {connected.includes(i) && <CheckCircle className="w-3 h-3 text-green-500 ml-auto flex-shrink-0" />}
            {connecting === i && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }} className="ml-auto"><Plug className="w-3 h-3 text-blue-500" /></motion.div>}
          </button>
        ))}
      </div>
      <p className="text-[10px] text-center text-gray-400">Click any app to simulate connection</p>
    </div>
  );
};

// ─── Main Demo Panel ──────────────────────────────────────────────────────────
const demoPanelTabs = [
  { id: 'scribe', label: 'AI Medical Scribe', icon: FileText, color: '#3b82f6' },
  { id: 'receptionist', label: 'AI Receptionist', icon: Phone, color: '#387E89' },
  { id: 'agents', label: 'Custom AI Agents', icon: Bot, color: '#8b5cf6' },
  { id: 'integrations', label: 'Integrations', icon: Plug, color: '#059669' },
];

const HeroDemoPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="lg:col-span-5 relative order-2"
    >
      <div className="absolute -inset-8 bg-gradient-to-r from-[#387E89]/10 via-[#5192AE]/15 to-[#143151]/10 rounded-[2rem] blur-2xl opacity-70" />
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#143151] via-[#387E89] to-[#5192AE] p-5 text-white">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center"><Zap className="w-4 h-4 text-white" /></div>
            <span className="font-bold text-base">S10.AI Live Demo</span>
          </div>
          <p className="text-white/75 text-xs">Click a product to see it in action</p>
        </div>

        {/* Tab Bar */}
        <div className="grid grid-cols-4 border-b border-gray-100">
          {demoPanelTabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`flex flex-col items-center gap-1 py-3 px-1 text-center transition-all border-b-2 ${activeTab === i ? 'border-[#387E89] bg-[#387E89]/5' : 'border-transparent hover:bg-gray-50'}`}
              >
                <Icon className="w-4 h-4" style={{ color: activeTab === i ? tab.color : '#9ca3af' }} />
                <span className="text-[9px] font-semibold leading-tight" style={{ color: activeTab === i ? '#143151' : '#9ca3af' }}>
                  {tab.label.split(' ').slice(1).join(' ')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Demo Content */}
        <div className="p-4 min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
              <div className="flex items-center gap-2 mb-3">
                {React.createElement(demoPanelTabs[activeTab].icon, { className: "w-4 h-4", style: { color: demoPanelTabs[activeTab].color } })}
                <span className="text-sm font-bold text-gray-800">{demoPanelTabs[activeTab].label}</span>
              </div>
              {activeTab === 0 && <ScribeDemo />}
              {activeTab === 1 && <ReceptionistDemo />}
              {activeTab === 2 && <CustomAgentsDemo />}
              {activeTab === 3 && <IntegrationsDemo />}
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
