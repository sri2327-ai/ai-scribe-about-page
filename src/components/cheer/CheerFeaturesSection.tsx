import React from 'react';
import { motion } from 'framer-motion';
import {
  Video,
  Users,
  Pause,
  Image as ImageIcon,
  MonitorUp,
  FileText,
  History,
  ClipboardList,
  FileSignature,
  CalendarCheck,
  PhoneCall,
  Bell,
  Globe,
} from 'lucide-react';
import hdConsultationImg from '@/assets/cheer-hd-consultation-2.jpg';
import advancedVideoImg from '@/assets/cheer-advanced-video.jpg';
import browserAccessImg from '@/assets/cheer-browser-access.jpg';

const advancedVideoItems = [
  { icon: Users, label: 'Group Call' },
  { icon: Pause, label: 'Pause' },
  { icon: ImageIcon, label: 'Virtual BG' },
  { icon: MonitorUp, label: 'Screen Share' },
];

const documentationItems = [
  { icon: History, label: 'Session History' },
  { icon: ClipboardList, label: 'SOAP & DAP' },
  { icon: FileText, label: 'Transcript' },
  { icon: FileSignature, label: 'Teleconsent' },
];

export const CheerFeaturesSection = () => {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#A5CCF3]/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#387E89]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header - compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-6 md:mb-8"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-black text-xs font-medium mb-2">
            Platform Features
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
            Everything You Need for Modern Virtual Care
          </h2>
          <p className="text-sm md:text-base text-black/80">
            Powerful telehealth tools with intuitive design—so you focus on patients.
          </p>
        </motion.div>

        {/* Bento Grid - compact */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[150px] gap-3 md:gap-4 max-w-6xl mx-auto">
          {/* 1. HD Video Consultations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:shadow-xl transition-all duration-300 md:col-span-2 md:row-span-2 min-h-[220px]"
          >
            <img
              src={hdConsultationImg}
              alt="Clinician on an HD video consultation with a patient"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent" />

            <div className="relative h-full p-4 md:p-5 flex flex-col justify-end">
              <div className="inline-flex p-2 rounded-lg bg-white border border-black/10 shadow-sm w-fit mb-2">
                <Video className="w-4 h-4 text-black" strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-black text-lg md:text-xl mb-1">
                HD Video Consultations
              </h3>
              <p className="text-black/80 text-xs md:text-sm leading-snug max-w-md">
                Crystal-clear video with adaptive quality for natural, face-to-face conversations.
              </p>
            </div>
          </motion.div>

          {/* 2. Advanced video features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:shadow-xl transition-all duration-300 md:col-span-2 md:row-span-2 min-h-[220px]"
          >
            <img
              src={advancedVideoImg}
              alt="Multi-participant video call with screen share controls"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/30" />

            <div className="relative h-full p-4 md:p-5 flex flex-col justify-end">
              <div className="inline-flex p-2 rounded-lg bg-white border border-black/10 shadow-sm w-fit mb-2">
                <MonitorUp className="w-4 h-4 text-black" strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-black text-lg md:text-xl mb-1">
                Advanced video features
              </h3>
              <p className="text-black/80 text-xs md:text-sm leading-snug mb-2">
                Tools that keep sessions clear, focused, and engaging.
              </p>

              <div className="grid grid-cols-4 gap-1.5">
                {advancedVideoItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 px-1 py-1.5 rounded-lg bg-white/95 border border-black/10"
                  >
                    <item.icon className="w-3.5 h-3.5 text-black" strokeWidth={1.75} />
                    <span className="text-[9px] md:text-[10px] font-medium text-black truncate">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. AI Receptionist Scheduling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:shadow-xl transition-all duration-300 md:col-span-2 min-h-[150px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/10 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative h-full p-4 md:p-5 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <div className="inline-flex p-2 rounded-lg bg-white border border-black/10 shadow-sm">
                  <PhoneCall className="w-4 h-4 text-black" strokeWidth={1.75} />
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white border border-black/10 text-black">
                  Powered by BRAVO
                </span>
              </div>

              <div>
                <h3 className="font-bold text-black text-base md:text-lg mb-0.5">
                  AI Receptionist Scheduling
                </h3>
                <p className="text-black/80 text-xs leading-snug mb-2">
                  BRAVO answers calls, books appointments and sends reminders 24/7.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-black/10">
                    <CalendarCheck className="w-3 h-3 text-black" strokeWidth={1.75} />
                    <span className="text-[10px] font-medium text-black">Auto-booking</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-black/10">
                    <Bell className="w-3 h-3 text-black" strokeWidth={1.75} />
                    <span className="text-[10px] font-medium text-black">Reminders</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Browser-based access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:shadow-xl transition-all duration-300 md:col-span-2 min-h-[150px]"
          >
            <img
              src={browserAccessImg}
              alt="Patient joining a telehealth video call from a smartphone browser"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent" />

            <div className="relative h-full p-4 md:p-5 flex flex-col justify-end">
              <div className="inline-flex p-2 rounded-lg bg-white border border-black/10 shadow-sm w-fit mb-2">
                <Globe className="w-4 h-4 text-black" strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-black text-base md:text-lg mb-0.5">
                One link is all they need
              </h3>
              <p className="text-black/80 text-xs leading-snug max-w-md">
                Browser-based join from any device. No downloads, no logins, no friction.
              </p>
            </div>
          </motion.div>

          {/* 5. Documentation made simple - full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:shadow-xl transition-all duration-300 md:col-span-4 min-h-[150px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/10 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative h-full p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <div className="md:max-w-xs flex-shrink-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="inline-flex p-2 rounded-lg bg-white border border-black/10 shadow-sm">
                    <FileText className="w-4 h-4 text-black" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-black text-lg md:text-xl">
                    Documentation made simple
                  </h3>
                </div>
                <p className="text-black/80 text-xs md:text-sm leading-snug">
                  Accurate records and essential forms, ready when you need them.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2 md:gap-3 flex-1">
                {documentationItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start gap-1.5 p-2.5 md:p-3 rounded-xl bg-white border border-black/10 hover:border-black/30 transition-colors"
                  >
                    <div className="inline-flex p-1.5 rounded-md bg-black/5">
                      <item.icon className="w-3.5 h-3.5 text-black" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] md:text-xs font-semibold text-black leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
