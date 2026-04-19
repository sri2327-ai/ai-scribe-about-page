import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Shield, 
  Globe, 
  Calendar, 
  Palette,
  Layers,
  Lock,
  Smartphone,
  Clock,
  Users,
  MessageSquare,
  BarChart,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

// Bento grid features - varied sizes for visual interest
const bentoFeatures = [
  {
    icon: Video,
    title: 'HD Video Consultations',
    description: 'Crystal-clear video calls with adaptive quality that adjusts to network conditions for natural conversations.',
    span: 'md:col-span-2 md:row-span-2',
    accent: 'from-[#143151]/5 to-[#387E89]/10',
    featured: true,
  },
  {
    icon: Shield,
    title: 'HIPAA & GDPR Compliant',
    description: 'End-to-end encryption with comprehensive audit trails.',
    span: 'md:col-span-2',
    accent: 'from-[#387E89]/5 to-[#5192AE]/10',
  },
  {
    icon: Globe,
    title: 'Browser-Based Access',
    description: 'No downloads required. One-click join from any device.',
    span: 'md:col-span-1',
    accent: 'from-[#5192AE]/5 to-[#A5CCF3]/10',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Automated reminders reduce no-shows by 40%.',
    span: 'md:col-span-1',
    accent: 'from-[#143151]/5 to-[#5192AE]/10',
  },
  {
    icon: Palette,
    title: 'Custom Waiting Rooms',
    description: 'Brand your virtual waiting room with logos and patient education materials.',
    span: 'md:col-span-2',
    accent: 'from-[#387E89]/5 to-[#A5CCF3]/10',
  },
  {
    icon: Layers,
    title: 'S10.AI Integration',
    description: 'Connects with CRUSH and BRAVO for a complete AI-powered workflow.',
    span: 'md:col-span-2',
    accent: 'from-[#143151]/5 to-[#387E89]/10',
  },
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
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4 md:gap-5 max-w-6xl mx-auto mb-16 md:mb-20">
          {bentoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-white hover:border-black/30 hover:shadow-xl transition-all duration-300 ${feature.span}`}
            >
              {/* Gradient accent layer */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
                <div className="inline-flex p-2.5 rounded-xl bg-white border border-black/10 shadow-sm w-fit group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 text-black" strokeWidth={1.75} />
                </div>

                <div>
                  <h3 className={`font-bold text-black mb-1.5 ${feature.featured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-black/80 leading-relaxed ${feature.featured ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
