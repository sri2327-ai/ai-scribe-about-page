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
import { Sparkles } from 'lucide-react';
import scribeImg from '@/assets/cheer-addon-scribe.jpg';
import receptionistImg from '@/assets/cheer-addon-receptionist.jpg';
import interpreterImg from '@/assets/cheer-addon-interpreter.jpg';
import whiteboardImg from '@/assets/cheer-addon-whiteboard.jpg';
import assessmentsImg from '@/assets/cheer-addon-assessments.jpg';
import instructionsImg from '@/assets/cheer-addon-instructions.jpg';

const addOns = [
  {
    title: 'AI Scribe',
    tag: 'Documentation',
    description:
      'Ambient AI captures the conversation and drafts your clinical note in real time — no typing, no catch-up.',
    image: scribeImg,
  },
  {
    title: 'AI Receptionist',
    tag: 'Front Office',
    description:
      'Answers calls, books appointments, and triages requests 24/7 so your team can focus on patients in the room.',
    image: receptionistImg,
  },
  {
    title: 'Interpreter',
    tag: 'Language',
    description:
      'On-demand medical interpretation in 50+ languages, built directly into the visit — no third-party dial-in.',
    image: interpreterImg,
  },
  {
    title: 'Whiteboard',
    tag: 'Visual Teaching',
    description:
      'Draw, sketch, and annotate live to explain anatomy, procedures, or treatment plans clearly.',
    image: whiteboardImg,
  },
  {
    title: 'Assessments',
    tag: 'Clinical Tools',
    description:
      'Send PHQ-9, GAD-7, intake forms, and custom questionnaires — scored automatically and saved to the chart.',
    image: assessmentsImg,
  },
  {
    title: 'Patient Instructions',
    tag: 'After-Visit',
    description:
      'Generate clear, personalized after-visit summaries and care plans your patients can actually follow.',
    image: instructionsImg,
  },
];

export const CheerAddOnsSection = () => {
  const autoplay = React.useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }),
    []
  );

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-72 h-72 rounded-full bg-[#A5CCF3]/15 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-[#387E89]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 text-black text-xs font-medium mb-2">
            <Sparkles className="w-3 h-3" />
            Add-On Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
            Extend CHEER with powerful add-ons.
          </h2>
          <p className="text-sm md:text-base text-black/70">
            Plug in the capabilities your practice needs — from ambient documentation
            to interpretation — all inside the same secure visit.
          </p>
        </motion.div>

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
              {addOns.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-3 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative h-full bg-white rounded-2xl border border-black/10 overflow-hidden hover:shadow-xl hover:border-[#387E89]/30 hover:-translate-y-1 transition-all duration-300">
                    {/* Image with brand gradient overlay */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        width={800}
                        height={640}
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Brand gradient tint */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#143151]/55 via-[#387E89]/25 to-[#A5CCF3]/15 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      {/* Tag overlay */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-white bg-white/15 backdrop-blur-md border border-white/25 px-2.5 py-1 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 md:p-6">
                      <h3 className="font-bold text-black text-base md:text-lg mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-black/70 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-medium text-black/40 group-hover:text-[#387E89] transition-colors duration-300">
                        <span>Available add-on</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#387E89] animate-pulse" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

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
