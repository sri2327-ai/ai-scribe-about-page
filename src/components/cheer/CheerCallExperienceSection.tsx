import React from 'react';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Video,
  Users,
  MonitorUp,
  PenTool,
  FileUp,
  MessageSquare,
  Circle,
  ImageIcon,
} from 'lucide-react';

import adaptiveHd from '@/assets/cheer-call-adaptive-hd.jpg';
import groupCalls from '@/assets/cheer-call-group.jpg';
import screenshare from '@/assets/cheer-call-screenshare.jpg';
import annotation from '@/assets/cheer-call-annotation.jpg';
import filetransfer from '@/assets/cheer-call-filetransfer.jpg';
import chat from '@/assets/cheer-call-chat.jpg';
import recording from '@/assets/cheer-call-recording.jpg';
import virtualbg from '@/assets/cheer-call-virtualbg.jpg';

const features = [
  {
    title: 'Adaptive HD Video',
    description:
      'Crystal-clear video that automatically adjusts to any connection — no drops, no lag.',
    image: adaptiveHd,
    Icon: Video,
  },
  {
    title: 'Group Calls',
    description:
      'Bring family members, specialists, or interpreters into the same secure session.',
    image: groupCalls,
    Icon: Users,
  },
  {
    title: 'Screenshare',
    description:
      'Walk patients through results, treatment plans, or educational content in real time.',
    image: screenshare,
    Icon: MonitorUp,
  },
  {
    title: 'Annotation',
    description:
      'Draw, highlight, and point directly on shared content to clarify your guidance.',
    image: annotation,
    Icon: PenTool,
  },
  {
    title: 'File Transfer',
    description:
      'Send and receive documents, lab results, or images securely during the visit.',
    image: filetransfer,
    Icon: FileUp,
  },
  {
    title: 'Chat',
    description:
      'In-call messaging keeps notes, links, and instructions handy without breaking flow.',
    image: chat,
    Icon: MessageSquare,
  },
  {
    title: 'Screen Capture & Recording',
    description:
      'Capture key moments or record the consult for documentation and follow-up.',
    image: recording,
    Icon: Circle,
  },
  {
    title: 'Virtual Backgrounds',
    description:
      'Maintain a professional, distraction-free presence from anywhere you practice.',
    image: virtualbg,
    Icon: ImageIcon,
  },
];

export const CheerCallExperienceSection = () => {
  const autoplay = React.useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }),
    []
  );

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-white">
      {/* Subtle brand background blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-72 h-72 rounded-full bg-[#A5CCF3]/15 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-[#387E89]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-black text-xs font-medium mb-2">
            Inside the Visit
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
            Every tool a real consultation needs.
          </h2>
          <p className="text-sm md:text-base text-black/70">
            From the first hello to the final note, CHEER gives you the same presence,
            clarity, and control as a face-to-face visit — without the room.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[autoplay]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="pl-3 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative h-full bg-white rounded-2xl border border-black/10 overflow-hidden hover:shadow-xl hover:border-[#387E89]/30 transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Icon badge */}
                      <div className="absolute top-3 left-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-full blur-md opacity-30" />
                          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg">
                            <feature.Icon className="w-4 h-4 text-white" strokeWidth={2} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-bold text-black text-base md:text-lg mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-black/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls below */}
            <div className="flex justify-center gap-3 mt-6">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-full bg-white border border-black/10 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-black hover:text-[#387E89]" />
              <CarouselNext className="static translate-y-0 h-11 w-11 rounded-full bg-white border border-black/10 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-black hover:text-[#387E89]" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
