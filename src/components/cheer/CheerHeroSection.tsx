import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Video, Users, Monitor, Mic, Phone, MessageSquare, Settings, Calendar, FileText, Activity, Sparkles, Languages, Send, Clock, UserPlus, Mail, Copy, Check, CalendarPlus, ChevronRight } from 'lucide-react';
import doctorSarahImg from '@/assets/doctor-sarah-videocall-wide.jpg';
import patientImg from '@/assets/patient-videocall.jpg';
type ViewType = 'patient' | 'dashboard' | 'clinician';

const PatientViewAnimation = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const seconds = 734 + tick;
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
      <div className="flex-1 relative p-3 md:p-4">
        {/* Main patient video (real footage) */}
        <div className="absolute inset-3 md:inset-4 rounded-xl overflow-hidden bg-black">
          <img
            src={patientImg}
            alt="Patient on video call"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Subtle live "video" feel */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"
            animate={{ opacity: [0.85, 1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Soft ambient pulse for video feel */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-[#387E89]/10 via-transparent to-[#5192AE]/10 pointer-events-none"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
            <p className="font-semibold text-xs md:text-sm">Emily Carter</p>
            <p className="text-[10px] md:text-xs text-white/70">Patient · Home</p>
          </div>
          <div className="absolute top-2 md:top-4 left-2 md:left-4 flex items-center gap-1.5 md:gap-2 bg-red-500/90 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse" />
            LIVE
          </div>
          <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/50 backdrop-blur-sm text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-mono">
            {mm}:{ss}
          </div>
        </div>

        {/* Self-view: real clinician */}
        <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-20 md:w-32 aspect-video rounded-lg overflow-hidden border-2 border-white/40 shadow-2xl">
          <img
            src={doctorSarahImg}
            alt="Dr. Sarah Johnson"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: 'center 18%' }}
          />
          <div className="absolute bottom-0.5 left-1 text-[8px] md:text-[10px] text-white font-medium drop-shadow">You</div>
        </div>
      </div>

      <div className="p-3 md:p-4 bg-gray-900/80 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 md:gap-3">
          <button className="p-2 md:p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <Mic className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
          <button className="p-2 md:p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <Video className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
          <button className="p-2.5 md:p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors">
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-white rotate-[135deg]" />
          </button>
          <button className="p-2 md:p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
          <button className="p-2 md:p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <Settings className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
// Live Consultation: AI Scribe + Interpreter + Send Patient Instructions
const ClinicianDashboardAnimation = () => {
  const transcriptLines = [
    { speaker: 'Patient', text: "I've had this headache for three days now." },
    { speaker: 'Dr. Johnson', text: 'Any nausea or sensitivity to light?' },
    { speaker: 'Patient', text: 'Yes, bright lights make it worse.' },
    { speaker: 'AI Note', text: 'Migraine pattern detected · suggesting workup.' },
  ];
  const [scribeLine, setScribeLine] = useState(0);
  const [sentInstruction, setSentInstruction] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setScribeLine(l => (l + 1) % transcriptLines.length), 2200);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const id = setInterval(() => setSentInstruction(s => !s), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex bg-gray-50 rounded-lg overflow-hidden">
      {/* Video tile */}
      <div className="w-[42%] p-2 md:p-3">
        <div className="h-full rounded-xl overflow-hidden relative bg-black">
          <img src={patientImg} alt="Patient" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: 'center 30%' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-green-500/90 text-white px-1.5 py-0.5 rounded-full text-[9px] md:text-[10px]">
            <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
            Connected
          </div>
          <div className="absolute bottom-2 left-2 text-white">
            <p className="text-[10px] md:text-xs font-semibold">Emily Carter</p>
            <p className="text-[8px] md:text-[10px] text-white/80">In consultation</p>
          </div>
          <div className="absolute top-2 right-2 w-12 md:w-16 aspect-video rounded overflow-hidden border border-white/40">
            <img src={doctorSarahImg} alt="Dr." className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: 'center 18%' }} />
          </div>
        </div>
      </div>

      {/* Right: AI tools stack */}
      <div className="flex-1 bg-white border-l border-gray-200 p-2 md:p-3 flex flex-col gap-2 md:gap-2.5 overflow-hidden">
        {/* AI Scribe */}
        <div className="rounded-lg border border-[#387E89]/20 bg-gradient-to-br from-[#387E89]/5 to-white p-2 md:p-2.5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
            </div>
            <p className="text-[9px] md:text-[11px] font-bold text-black">AI Scribe</p>
            <span className="ml-auto text-[7px] md:text-[9px] text-black flex items-center gap-1">
              <motion.span className="w-1 h-1 bg-[#387E89] rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} />
              Listening
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={scribeLine}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="text-[8px] md:text-[10px] min-h-[24px]"
            >
              <span className="font-semibold text-black">{transcriptLines[scribeLine].speaker}: </span>
              <span className="text-black">{transcriptLines[scribeLine].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interpreter */}
        <div className="rounded-lg border border-gray-200 bg-white p-2 md:p-2.5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded bg-[#143151] flex items-center justify-center">
              <Languages className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
            </div>
            <p className="text-[9px] md:text-[11px] font-bold text-black">Interpreter</p>
            <span className="ml-auto text-[7px] md:text-[9px] px-1.5 py-0.5 rounded-full bg-gray-100 text-black">EN → ES</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex items-end gap-0.5 h-3 md:h-4">
              {[0, 1, 2, 3, 4].map(i => (
                <motion.span
                  key={i}
                  className="w-0.5 bg-[#387E89] rounded-full"
                  animate={{ height: ['20%', '90%', '40%', '70%', '30%'] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                />
              ))}
            </div>
            <p className="text-[8px] md:text-[10px] text-black italic truncate">"Las luces brillantes lo empeoran."</p>
          </div>
        </div>

        {/* Send Patient Instructions */}
        <div className="rounded-lg border border-gray-200 bg-white p-2 md:p-2.5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded bg-[#5192AE] flex items-center justify-center">
              <FileText className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
            </div>
            <p className="text-[9px] md:text-[11px] font-bold text-black">Send Patient Instructions</p>
          </div>
          <div className="text-[8px] md:text-[10px] text-black bg-gray-50 rounded px-1.5 py-1 mb-1.5">
            • Hydrate · • Sumatriptan 50mg PRN · • Follow-up in 7 days
          </div>
          <motion.button
            className="w-full text-[9px] md:text-[10px] py-1.5 rounded-md bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-medium flex items-center justify-center gap-1"
            animate={sentInstruction ? { scale: [1, 0.97, 1] } : {}}
          >
            {sentInstruction ? (
              <><Check className="w-3 h-3" /> Sent to patient</>
            ) : (
              <><Send className="w-3 h-3" /> Send instructions</>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Dashboard: Send Quick Invite + Schedule
const ClinicianViewAnimation = () => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex bg-white rounded-lg overflow-hidden">
      {/* Sidebar */}
      <div className="w-10 md:w-14 bg-[#143151] flex flex-col items-center py-3 md:py-4 gap-2 md:gap-4">
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white/20 flex items-center justify-center">
          <Activity className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </div>
        {[Calendar, Users, FileText, Settings].map((Icon, i) => (
          <button key={i} className={`w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-white/20' : 'hover:bg-white/10'}`}>
            <Icon className="w-3 h-3 md:w-4 md:h-4 text-white/80" />
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-2.5 md:p-3 flex flex-col gap-2 md:gap-3 overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs md:text-sm font-bold text-black">Dashboard</h3>
            <p className="text-[8px] md:text-[10px] text-black">Welcome back, Dr. Johnson</p>
          </div>
        </div>

        {/* Quick Invite card */}
        <div className="rounded-xl border border-[#387E89]/20 bg-gradient-to-br from-[#387E89]/5 via-white to-[#143151]/5 p-2.5 md:p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center">
              <UserPlus className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
            </div>
            <p className="text-[10px] md:text-xs font-bold text-black">Send Quick Invite</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex-1 flex items-center gap-1 bg-white border border-gray-200 rounded-md px-1.5 py-1 md:py-1.5">
              <Mail className="w-2.5 h-2.5 md:w-3 md:h-3 text-black" />
              <span className="text-[8px] md:text-[10px] text-black truncate">michael.r@email.com</span>
            </div>
            <motion.button
              className="text-[8px] md:text-[10px] px-2 md:px-2.5 py-1 md:py-1.5 rounded-md bg-[#143151] text-white font-medium flex items-center gap-1"
              animate={copied ? { scale: [1, 0.95, 1] } : {}}
            >
              {copied ? <><Check className="w-2.5 h-2.5" /> Sent</> : <><Send className="w-2.5 h-2.5" /> Invite</>}
            </motion.button>
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            <Copy className="w-2.5 h-2.5 text-black" />
            <span className="text-[7px] md:text-[9px] text-black truncate">cheer.health/join/8K2-9X4</span>
          </div>
        </div>

        {/* Schedule card */}
        <div className="rounded-xl border border-gray-200 bg-white flex-1 p-2.5 md:p-3 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-1.5 md:mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-[#5192AE] flex items-center justify-center">
                <CalendarPlus className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-black">Schedule</p>
            </div>
            <span className="text-[8px] md:text-[10px] text-black">Today</span>
          </div>
          <div className="space-y-1 md:space-y-1.5 overflow-hidden">
            {[
              { name: 'Sarah Miller', time: '2:00 PM', type: 'Follow-up', status: 'upcoming' },
              { name: 'James Wilson', time: '2:30 PM', type: 'New Patient', status: 'waiting' },
              { name: 'Emma Davis', time: '3:00 PM', type: 'Consultation', status: 'upcoming' },
            ].map((apt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 rounded-lg border border-gray-100"
              >
                <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center">
                  <span className="text-white text-[7px] md:text-[9px] font-bold">{apt.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] md:text-[11px] font-semibold text-black truncate">{apt.name}</p>
                  <p className="text-[7px] md:text-[9px] text-black">{apt.type}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-black" />
                  <span className="text-[8px] md:text-[10px] font-medium text-black">{apt.time}</span>
                </div>
                <span className={`text-[7px] md:text-[9px] px-1 py-0.5 rounded-full ${apt.status === 'waiting' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-black'}`}>
                  {apt.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export const CheerHeroSection = () => {
  const [activeView, setActiveView] = useState<ViewType>('patient');
  const renderAnimation = () => {
    switch (activeView) {
      case 'patient':
        return <PatientViewAnimation />;
      case 'dashboard':
        return <ClinicianDashboardAnimation />;
      case 'clinician':
        return <ClinicianViewAnimation />;
    }
  };
  const viewButtons: {
    id: ViewType;
    label: string;
    shortLabel: string;
    icon: React.ElementType;
  }[] = [{
    id: 'patient',
    label: 'Patient View',
    shortLabel: 'Patient',
    icon: Users
  }, {
    id: 'dashboard',
    label: 'Live Consultation',
    shortLabel: 'Live',
    icon: Video
  }, {
    id: 'clinician',
    label: 'Dashboard',
    shortLabel: 'Dashboard',
    icon: Monitor
  }];
  return <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F9FF] via-white to-[#F5F9FF]">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-[#387E89]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-[#143151]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }} className="text-center lg:text-left">
            

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3 md:mb-4 flex justify-center lg:justify-start">
              {[
                { letter: 'C', meaning: 'Click-to-Join Visits' },
                { letter: 'H', meaning: 'Human-Centered Virtual Care' },
                { letter: 'E', meaning: 'Engaging Waiting Rooms' },
                { letter: 'E', meaning: 'Easy Mobile Access' },
                { letter: 'R', meaning: 'Reliable Video Visits' },
              ].map((item, index) => (
                <span
                  key={index}
                  className="relative group cursor-pointer text-black transition-all duration-300"
                >
                  {item.letter}
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 bg-gradient-to-r from-[#387E89] to-[#5192AE] text-white text-xs md:text-sm font-normal rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-lg">
                    <span className="font-semibold">{item.letter}</span> – {item.meaning}
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#387E89] rotate-45" />
                  </span>
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black font-medium mb-6 md:mb-8">
              Telehealth platform for modern clinicians
            </p>

            <p className="text-base md:text-lg lg:text-xl text-black mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              CHEER brings seamless, secure telehealth to clinicians and patients. 
              No downloads, no hassle—just exceptional virtual care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full px-6 md:px-8 py-5 md:py-6 bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#1a3d63] hover:to-[#438f9b] text-white font-semibold text-base md:text-lg shadow-xl shadow-[#143151]/20 transition-all hover:scale-105">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
              {[{
              value: '99.9%',
              label: 'Uptime'
            }, {
              value: '50ms',
              label: 'Latency'
            }, {
              value: 'HIPAA',
              label: 'Compliant'
            }].map((stat, i) => <div key={i} className="text-center lg:text-left">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-black">{stat.value}</p>
                  <p className="text-xs md:text-sm text-black">{stat.label}</p>
                </div>)}
            </div>
          </motion.div>

          {/* Right - Modern device mockup */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7,
          delay: 0.3
        }} className="relative">
            <div className="relative mx-auto max-w-[500px] lg:max-w-[600px]">
              {/* Ambient glow */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#387E89]/20 via-[#5192AE]/15 to-[#A5CCF3]/20 rounded-[2.5rem] blur-3xl opacity-70" />

              {/* Sleek glass device frame */}
              <div className="relative rounded-[1.75rem] p-[1px] bg-gradient-to-br from-white/80 via-[#A5CCF3]/40 to-[#387E89]/30 shadow-[0_30px_80px_-20px_rgba(20,49,81,0.35)] backdrop-blur-xl">
                <div className="rounded-[1.7rem] bg-white/70 backdrop-blur-2xl p-2.5 md:p-3 border border-white/60">
                  {/* Top status bar */}
                  <div className="flex items-center justify-between px-2 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/80 border border-[#387E89]/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] animate-pulse" />
                      <span className="text-[9px] md:text-[10px] font-medium text-[#143151]">cheer.health</span>
                    </div>
                    <div className="w-10" />
                  </div>

                  {/* Screen content */}
                  <div className="bg-white rounded-[1.25rem] overflow-hidden aspect-[16/10] ring-1 ring-[#143151]/5 shadow-inner">
                    <AnimatePresence mode="wait">
                      {renderAnimation()}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Floating reflection */}
              <div className="absolute -bottom-6 left-8 right-8 h-12 bg-gradient-to-b from-[#143151]/20 to-transparent blur-2xl rounded-full" />
            </div>

            {/* View toggle buttons */}
            <div className="flex justify-center gap-1.5 md:gap-2 mt-8 md:mt-10">
              {viewButtons.map(btn => <button key={btn.id} onClick={() => setActiveView(btn.id)} className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${activeView === btn.id ? 'bg-gradient-to-r from-[#387E89] to-[#5192AE] text-white shadow-lg shadow-[#387E89]/25' : 'bg-white/70 backdrop-blur border border-[#387E89]/15 text-[#143151] hover:bg-white'}`}>
                  <btn.icon className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">{btn.label}</span>
                  <span className="sm:hidden">{btn.shortLabel}</span>
                </button>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};