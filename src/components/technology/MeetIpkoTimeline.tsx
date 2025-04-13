
import React, { useRef, useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { Zap, MessageSquare, Users, Cog } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

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
      className="mb-16 last:mb-0"
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
      content: (
        <div className="bg-black p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 border border-white rounded-full">
              <MessageSquare className="w-6 h-6 text-white stroke-1" />
            </div>
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
      content: (
        <div className="bg-black p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 border border-white rounded-full">
              <Users className="w-6 h-6 text-white stroke-1" />
            </div>
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
      content: (
        <div className="bg-black p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 border border-white rounded-full">
              <Zap className="w-6 h-6 text-white stroke-1" />
            </div>
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
      content: (
        <div className="bg-black p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 border border-white rounded-full">
              <Cog className="w-6 h-6 text-white stroke-1" />
            </div>
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
          // Mobile view with parallax effect
          <div className="px-4 py-10">
            <h2 className="text-2xl md:text-4xl mb-4 text-white max-w-4xl">
              Meet IPKO – The Intelligent Physician Knowledge Orchestrator
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-sm mb-12">
              IPKO, built on S10's patented AI, leverages powerful AI inference engines for unmatched automation, security, and knowledge engineering.
            </p>
            
            <div className="relative min-h-[150vh]">
              {timelineData.map((item, index) => (
                <ParallaxTimelineItem 
                  key={index}
                  item={item}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
              
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-tealBlueBright to-transparent" />
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
