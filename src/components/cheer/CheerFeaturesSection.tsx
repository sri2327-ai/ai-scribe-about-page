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
  Lock,
  Smartphone,
  Clock,
  MessageSquare,
  BarChart,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import hdConsultationImg from '@/assets/cheer-hd-consultation.jpg';

// Sub-feature lists for grouped tiles
const advancedVideoItems = [
  { icon: Users, label: 'Group Call' },
  { icon: Pause, label: 'Pause' },
  { icon: ImageIcon, label: 'Virtual Background' },
  { icon: MonitorUp, label: 'Screen Share' },
];

const documentationItems = [
  { icon: History, label: 'Session History' },
  { icon: ClipboardList, label: 'SOAP & DAP Notes' },
  { icon: FileText, label: 'Transcript' },
  { icon: FileSignature, label: 'Teleconsent' },
];

const carouselFeatures = [
  { icon: Lock, title: 'End-to-End Encryption', description: 'Every session is encrypted from device to device.' },
  { icon: Smartphone, title: 'Mobile Responsive', description: 'Works seamlessly on phones, tablets, and desktops.' },
  { icon: Clock, title: '24/7 Availability', description: 'Reliable uptime so you never miss a patient.' },
  { icon: Users, title: 'Multi-Party Calls', description: 'Bring family members and specialists into one call.' },
  { icon: MessageSquare, title: 'Secure Messaging', description: 'HIPAA-safe chat before, during, and after visits.' },
  { icon: BarChart, title: 'Analytics Dashboard', description: 'Track visit volume, no-shows, and patient outcomes.' },
];

export const CheerFeaturesSection = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="py-16 md:py-24 lg:py-28 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#A5CCF3]/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#387E89]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-black/5 text-black text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            Everything You Need for
            <span className="block text-black">Modern Virtual Care</span>
          </h2>
          <p className="text-base md:text-lg text-black leading-relaxed">
            CHEER combines powerful telehealth tools with intuitive design,
            so you can focus on what matters most—your patients.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-4 md:gap-5 max-w-6xl mx-auto mb-16 md:mb-20">
          {/* 1. HD Video Consultations - featured with real image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:border-black/30 hover:shadow-xl transition-all duration-300 md:col-span-2 md:row-span-2"
          >
            <img
              src={hdConsultationImg}
              alt="Clinician on an HD video consultation with a patient"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Bottom-up readability gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

            <div className="relative h-full p-5 md:p-6 flex flex-col justify-end">
              <div className="inline-flex p-2.5 rounded-xl bg-white border border-black/10 shadow-sm w-fit mb-3">
                <Video className="w-5 h-5 text-black" strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-black mb-1.5 text-xl md:text-2xl">
                HD Video Consultations
              </h3>
              <p className="text-black/80 leading-relaxed text-sm md:text-base max-w-md">
                Crystal-clear video calls with adaptive quality that adjusts to network conditions for natural, face-to-face conversations.
              </p>
            </div>
          </motion.div>

          {/* 2. Advanced video features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:border-black/30 hover:shadow-xl transition-all duration-300 md:col-span-2 md:row-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#387E89]/5 to-[#5192AE]/10 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative h-full p-5 md:p-6 flex flex-col">
              <div className="inline-flex p-2.5 rounded-xl bg-white border border-black/10 shadow-sm w-fit mb-3">
                <MonitorUp className="w-5 h-5 text-black" strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-black mb-1.5 text-xl md:text-2xl">
                Advanced video features
              </h3>
              <p className="text-black/80 leading-relaxed text-sm md:text-base mb-4">
                Powerful tools that keep sessions clear, focused, and engaging.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-auto">
                {advancedVideoItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-black/10"
                  >
                    <item.icon className="w-4 h-4 text-black flex-shrink-0" strokeWidth={1.75} />
                    <span className="text-xs md:text-sm font-medium text-black truncate">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. AI Receptionist Scheduling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:border-black/30 hover:shadow-xl transition-all duration-300 md:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/10 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
              <div className="flex items-start gap-3">
                <div className="inline-flex p-2.5 rounded-xl bg-white border border-black/10 shadow-sm w-fit">
                  <PhoneCall className="w-5 h-5 text-black" strokeWidth={1.75} />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] md:text-xs font-medium px-2 py-1 rounded-full bg-white border border-black/10 text-black">
                    Powered by BRAVO
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-black mb-1.5 text-base md:text-lg">
                  AI Receptionist Scheduling
                </h3>
                <p className="text-black/80 leading-relaxed text-xs md:text-sm">
                  BRAVO answers calls, books appointments and sends reminders 24/7—so your CHEER calendar fills itself while you focus on care.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/10">
                  <CalendarCheck className="w-3.5 h-3.5 text-black" strokeWidth={1.75} />
                  <span className="text-[11px] md:text-xs font-medium text-black">Auto-booking</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/10">
                  <Bell className="w-3.5 h-3.5 text-black" strokeWidth={1.75} />
                  <span className="text-[11px] md:text-xs font-medium text-black">Smart reminders</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Browser-based access */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:border-black/30 hover:shadow-xl transition-all duration-300 md:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5192AE]/5 to-[#A5CCF3]/10 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
              <div className="inline-flex p-2.5 rounded-xl bg-white border border-black/10 shadow-sm w-fit">
                <Globe className="w-5 h-5 text-black" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold text-black mb-1.5 text-base md:text-lg">
                  Browser-Based Access
                </h3>
                <p className="text-black/80 leading-relaxed text-xs md:text-sm">
                  No downloads required. One-click join from any device, any browser, anywhere.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. Documentation made simple */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:border-black/30 hover:shadow-xl transition-all duration-300 md:col-span-4"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/10 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative h-full p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <div className="md:max-w-sm">
                <div className="inline-flex p-2.5 rounded-xl bg-white border border-black/10 shadow-sm w-fit mb-3">
                  <FileText className="w-5 h-5 text-black" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-black mb-1.5 text-xl md:text-2xl">
                  Documentation made simple
                </h3>
                <p className="text-black/80 leading-relaxed text-sm md:text-base">
                  Accurate records and essential forms, ready when you need them.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 flex-1">
                {documentationItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start gap-2 p-3 md:p-4 rounded-xl bg-white border border-black/10 hover:border-black/30 transition-colors"
                  >
                    <div className="inline-flex p-2 rounded-lg bg-black/5">
                      <item.icon className="w-4 h-4 text-black" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-black">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Carousel - more capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2">More built-in capabilities</h3>
            <p className="text-sm md:text-base text-black/70">Everything you'd expect from an enterprise telehealth platform.</p>
          </div>

          <Carousel
            opts={{ align: 'start', loop: true, dragFree: true }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {carouselFeatures.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-3 md:pl-4 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="h-full p-5 md:p-6 rounded-2xl bg-white border border-black/10 hover:border-black/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="inline-flex p-2.5 rounded-xl bg-black/5 mb-4 group-hover:bg-black/10 transition-colors">
                      <item.icon className="w-5 h-5 text-black" strokeWidth={1.75} />
                    </div>
                    <h4 className="text-base md:text-lg font-semibold text-black mb-1.5">{item.title}</h4>
                    <p className="text-xs md:text-sm text-black/70 leading-relaxed">{item.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
