import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Video, Users, Monitor, Mic, Phone, MessageSquare, Settings, Calendar, FileText, Activity, User, LayoutDashboard, BarChart3, HelpCircle, LogOut } from 'lucide-react';
import { cheerColors } from '@/theme/cheer-theme';
type ViewType = 'patient' | 'dashboard' | 'clinician';
const PatientViewAnimation = () => <motion.div initial={{
  opacity: 0
}} animate={{
  opacity: 1
}} exit={{
  opacity: 0
}} className="h-full flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
    {/* Video call interface */}
    <div className="flex-1 relative p-3 md:p-4">
      {/* Main doctor video */}
      <div className="absolute inset-3 md:inset-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#143151] to-[#387E89]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 mx-auto mb-2 md:mb-3 flex items-center justify-center backdrop-blur-sm">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <p className="font-semibold text-xs md:text-sm">Dr. Sarah Johnson</p>
            <p className="text-[10px] md:text-xs text-white/70">Internal Medicine</p>
          </div>
        </div>
        {/* Live indicator */}
        <div className="absolute top-2 md:top-4 left-2 md:left-4 flex items-center gap-1.5 md:gap-2 bg-red-500/90 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse" />
          LIVE
        </div>
        {/* Duration */}
        <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/40 backdrop-blur-sm text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs">
          12:34
        </div>
      </div>
      
      {/* Self view */}
      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-16 md:w-24 aspect-video rounded-lg overflow-hidden border-2 border-white/30 bg-gradient-to-br from-gray-700 to-gray-600 shadow-xl">
        <div className="flex items-center justify-center h-full">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Users className="w-3 h-3 md:w-4 md:h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Controls */}
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
  </motion.div>;
const ClinicianDashboardAnimation = () => <motion.div initial={{
  opacity: 0
}} animate={{
  opacity: 1
}} exit={{
  opacity: 0
}} className="h-full flex bg-gray-50 rounded-lg overflow-hidden">
    {/* Main video area */}
    <div className="flex-1 p-2 md:p-3">
      <div className="h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#143151] to-[#387E89] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 mx-auto mb-1 md:mb-2 flex items-center justify-center">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <p className="font-semibold text-xs md:text-sm">Patient: John Doe</p>
            <p className="text-[10px] md:text-xs text-white/70">Consultation in progress</p>
          </div>
        </div>
        <div className="absolute top-2 md:top-3 left-2 md:left-3 flex items-center gap-1.5 md:gap-2 bg-green-500/90 text-white px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs">
          <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full animate-pulse" />
          Connected
        </div>
      </div>
    </div>
    
    {/* Side panel */}
    <div className="w-48 md:w-64 bg-white border-l border-gray-200 p-2 md:p-3 flex flex-col">
      <div className="flex items-center gap-2 pb-2 md:pb-3 border-b border-gray-100">
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#143151] flex items-center justify-center">
          <span className="text-white text-[10px] md:text-xs font-bold">JD</span>
        </div>
        <div>
          <p className="text-[10px] md:text-xs font-semibold text-gray-900">John Doe</p>
          <p className="text-[8px] md:text-[10px] text-gray-500">Male, 45 yrs</p>
        </div>
      </div>
      
      <div className="flex-1 py-2 md:py-3 space-y-1.5 md:space-y-2 overflow-hidden">
        <p className="text-[8px] md:text-[10px] font-semibold text-gray-500 uppercase">Quick Notes</p>
        <div className="space-y-1 md:space-y-1.5">
          {['Chief complaint: Headache', 'Duration: 3 days', 'Severity: Moderate'].map((note, i) => <div key={i} className="text-[8px] md:text-[10px] text-gray-600 bg-gray-50 px-1.5 md:px-2 py-1 md:py-1.5 rounded">
              {note}
            </div>)}
        </div>
      </div>
      
      <div className="pt-2 md:pt-3 border-t border-gray-100 flex gap-1.5 md:gap-2">
        <button className="flex-1 text-[8px] md:text-[10px] bg-[#143151] text-white py-1.5 md:py-2 rounded-lg font-medium">
          End Visit
        </button>
        <button className="flex-1 text-[8px] md:text-[10px] border border-gray-200 py-1.5 md:py-2 rounded-lg font-medium text-gray-700">
          Add Note
        </button>
      </div>
    </div>
  </motion.div>;
const ClinicianViewAnimation = () => <motion.div initial={{
  opacity: 0
}} animate={{
  opacity: 1
}} exit={{
  opacity: 0
}} className="h-full flex bg-white rounded-lg overflow-hidden">
    {/* Sidebar */}
    <div className="w-10 md:w-14 bg-[#143151] flex flex-col items-center py-3 md:py-4 gap-2 md:gap-4">
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white/20 flex items-center justify-center">
        <Activity className="w-3 h-3 md:w-4 md:h-4 text-white" />
      </div>
      {[Calendar, Users, FileText, Settings].map((Icon, i) => <button key={i} className={`w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-colors ${i === 1 ? 'bg-white/20' : 'hover:bg-white/10'}`}>
          <Icon className="w-3 h-3 md:w-4 md:h-4 text-white/80" />
        </button>)}
    </div>
    
    {/* Main content */}
    <div className="flex-1 p-3 md:p-4">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div>
          <h3 className="text-xs md:text-sm font-bold text-[#143151]">Today's Schedule</h3>
          <p className="text-[8px] md:text-[10px] text-gray-500">3 appointments remaining</p>
        </div>
        <button className="text-[8px] md:text-[10px] bg-[#387E89] text-white px-2 md:px-3 py-1 md:py-1.5 rounded-full font-medium">
          + New
        </button>
      </div>
      
      <div className="space-y-1.5 md:space-y-2">
        {[{
        name: 'Sarah Miller',
        time: '2:00 PM',
        status: 'upcoming',
        type: 'Follow-up'
      }, {
        name: 'James Wilson',
        time: '2:30 PM',
        status: 'waiting',
        type: 'New Patient'
      }, {
        name: 'Emma Davis',
        time: '3:00 PM',
        status: 'upcoming',
        type: 'Consultation'
      }].map((apt, i) => <div key={i} className="flex items-center gap-2 md:gap-3 p-2 md:p-2.5 rounded-xl border border-gray-100 hover:border-[#387E89]/30 hover:bg-gray-50 transition-all cursor-pointer">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center">
              <span className="text-white text-[8px] md:text-[10px] font-bold">{apt.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] md:text-xs font-semibold text-gray-900 truncate">{apt.name}</p>
              <p className="text-[8px] md:text-[10px] text-gray-500">{apt.type}</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] md:text-[10px] font-medium text-gray-900">{apt.time}</p>
              <span className={`text-[7px] md:text-[9px] px-1 md:px-1.5 py-0.5 rounded-full ${apt.status === 'waiting' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                {apt.status}
              </span>
            </div>
          </div>)}
      </div>
    </div>
  </motion.div>;
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
            

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3 md:mb-4 bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
              CHEER
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#387E89] font-medium mb-6 md:mb-8">
              Telemedicine platform for modern clinicians
            </p>

            <p className="text-base md:text-lg lg:text-xl text-[#387E89] mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              CHEER brings seamless, secure telemedicine to clinicians and patients. 
              No downloads, no hassle—just exceptional virtual care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full px-6 md:px-8 py-5 md:py-6 bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#1a3d63] hover:to-[#438f9b] text-white font-semibold text-base md:text-lg shadow-xl shadow-[#143151]/20 transition-all hover:scale-105">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6 md:px-8 py-5 md:py-6 border-2 border-[#387E89] text-[#387E89] hover:bg-[#387E89]/10 font-semibold text-base md:text-lg transition-all">
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Watch Demo
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
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#143151]">{stat.value}</p>
                  <p className="text-xs md:text-sm text-[#5192AE]">{stat.label}</p>
                </div>)}
            </div>
          </motion.div>

          {/* Right - Laptop mockup */}
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
            {/* Laptop frame */}
            <div className="relative mx-auto max-w-[500px] lg:max-w-[600px]">
              {/* Screen bezel */}
              <div className="bg-gray-800 rounded-t-2xl p-2 pt-3 md:pt-4">
                {/* Camera notch */}
                <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600" />
                
                {/* Screen content */}
                <div className="bg-white rounded-lg overflow-hidden aspect-[16/10] shadow-inner">
                  <AnimatePresence mode="wait">
                    {renderAnimation()}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Laptop base */}
              <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-3 md:h-4 rounded-b-xl mx-4" />
              <div className="bg-gray-800 h-1.5 md:h-2 rounded-b-lg mx-16" />
            </div>

            {/* View toggle buttons */}
            <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
              {viewButtons.map(btn => <button key={btn.id} onClick={() => setActiveView(btn.id)} className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${activeView === btn.id ? 'bg-[#143151] text-white shadow-lg shadow-[#143151]/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
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