import React, { useRef, useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { Zap, MessageSquare, Users, Cog } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Separate component for each timeline item with parallax effect
const ParallaxTimelineItem = ({ item, index, scrollYProgress }) => {
  // Create transform values for each timeline item
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 100 : 50, index % 2 === 0 ? -50 : -100]
  );
  
  return (
    <motion.div
      key={index}
      style={{ y: yOffset }}
      className="mb-8 last:mb-0"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center border border-tealBlueBright">
          <div className="h-3 w-3 rounded-full bg-tealBlueBright" />
        </div>
        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
      </div>
      {item.content}
    </motion.div>
  );
};

// Compact card for mobile carousel view
const TimelineCard = ({ item }) => {
  return (
    <div className="bg-black p-4 rounded-xl border border-white/20 h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center border border-tealBlueBright">
          <div className="h-3 w-3 rounded-full bg-tealBlueBright" />
        </div>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
      </div>
      
      <p className="text-gray-400 text-sm">{item.description}</p>
    </div>
  );
};

const MeetIpkoTimeline = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const timelineData = [
    {
      title: "CCIE",
      subtitle: "Cross-Lingual Conversation Inference Engine",
      description: "Our advanced language processing system enables seamless multilingual communication with 16-language capabilities.",
      content: (
        <div className="bg-black p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <h4 className="text-xl font-normal text-white">Cross-Lingual Conversation Inference Engine</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-6 font-normal">
            Our advanced language processing system enables seamless multilingual communication with 16-language diarization capabilities, breaking down language barriers in healthcare.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-normal mb-2">Multilingual Support</h5>
              <p className="text-gray-400 text-sm font-normal">Supports 16 languages with real-time translation and diarization</p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-normal mb-2">Contextual Understanding</h5>
              <p className="text-gray-400 text-sm font-normal">Maintains context across languages for accurate communication</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "PKIE",
      subtitle: "Physician Knowledge Inference Engine",
      description: "PKIE learns and mimics physician workflows for personalized AI scribing and documentation.",
      content: (
        <div className="bg-black p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <h4 className="text-xl font-normal text-white">Physician Knowledge Inference Engine</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-6 font-normal">
            PKIE learns and mimics physician workflows for personalized AI scribing, adapting to each doctor's unique documentation style and preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-normal mb-2">Adaptive Learning</h5>
              <p className="text-gray-400 text-sm font-normal">Continuously improves by learning from physician interactions</p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-normal mb-2">Workflow Integration</h5>
              <p className="text-gray-400 text-sm font-normal">Seamlessly fits into existing clinical documentation processes</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "MKIE",
      subtitle: "Medical Knowledge Inference Engine",
      description: "AI-driven clinical pathways for precise documentation improvement and medical validation.",
      content: (
        <div className="bg-black p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <h4 className="text-xl font-normal text-white">Medical Knowledge Inference Engine</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-6 font-normal">
            MKIE powers AI-driven clinical pathways for precise documentation improvement, ensuring accuracy and completeness in medical records.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-normal mb-2">Clinical Pathways</h5>
              <p className="text-gray-400 text-sm font-normal">Evidence-based workflows for comprehensive documentation</p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-normal mb-2">Medical Validation</h5>
              <p className="text-gray-400 text-sm font-normal">Ensures clinical accuracy and completeness of documentation</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "IIIE",
      subtitle: "Intuitive Interface Inference Engine",
      description: "Breaks integration barriers for effortless deployment across all healthcare platforms.",
      content: (
        <div className="bg-black p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <h4 className="text-xl font-normal text-white">Intuitive Interface Inference Engine</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-6 font-normal">
            IIIE breaks integration barriers for effortless deployment across platforms, making our AI technology accessible to any healthcare system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-normal mb-2">Seamless Integration</h5>
              <p className="text-gray-400 text-sm font-normal">Works with existing EMR systems without complex setup</p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-normal mb-2">Cross-Platform</h5>
              <p className="text-gray-400 text-sm font-normal">Functions across web, mobile, and desktop environments</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden bg-black"
      ref={containerRef}
      style={{ position: "relative" }}
    >
      <div className="container mx-auto pt-8 md:pt-16">
        {isMobile ? (
          // Mobile view with carousel to save space
          <div className="px-4 py-8">
            <h2 className="text-2xl md:text-4xl mb-4 text-white max-w-4xl">
              Meet IPKO – The Intelligent Physician Knowledge Orchestrator
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              IPKO leverages powerful AI inference engines for unmatched automation, security, and knowledge engineering.
            </p>
            
            <div className="mb-2 text-gray-300 text-sm">Swipe to explore IPKO's engines →</div>
            
            <Carousel className="w-full mb-8">
              <CarouselContent>
                {timelineData.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <TimelineCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-4">
                <CarouselPrevious className="relative static left-0 translate-y-0 bg-black border-white/40 text-white hover:bg-white/10" />
                <CarouselNext className="relative static right-0 translate-y-0 bg-black border-white/40 text-white hover:bg-white/10" />
              </div>
            </Carousel>
            
            {/* Visual timeline connection */}
            <div className="relative h-20 my-8 flex justify-center">
              <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-tealBlueBright to-transparent"></div>
              <div className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-tealBlueBright bg-black"></div>
            </div>
          </div>
        ) : (
          // Desktop view with regular timeline
          <Timeline data={timelineData} />
        )}
      </div>
    </section>
  );
};

export default MeetIpkoTimeline;
