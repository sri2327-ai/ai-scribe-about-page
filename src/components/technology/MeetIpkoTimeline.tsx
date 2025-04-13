
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Zap, MessageSquare, Users, Cog } from "lucide-react";

const MeetIpkoTimeline = () => {
  const timelineData = [
    {
      title: "CCIE",
      content: (
        <div className="bg-black p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 border border-white rounded-full">
              <MessageSquare className="w-6 h-6 text-white stroke-1" />
            </div>
            <h4 className="text-xl font-bold text-white">Cross-Lingual Conversation Inference Engine</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            Our advanced language processing system enables seamless multilingual communication with 16-language diarization capabilities, breaking down language barriers in healthcare.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-semibold mb-2">Multilingual Support</h5>
              <p className="text-gray-400 text-sm">Supports 16 languages with real-time translation and diarization</p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-semibold mb-2">Contextual Understanding</h5>
              <p className="text-gray-400 text-sm">Maintains context across languages for accurate communication</p>
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
            <h4 className="text-xl font-bold text-white">Physician Knowledge Inference Engine</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            PKIE learns and mimics physician workflows for personalized AI scribing, adapting to each doctor's unique documentation style and preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-semibold mb-2">Adaptive Learning</h5>
              <p className="text-gray-400 text-sm">Continuously improves by learning from physician interactions</p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-semibold mb-2">Workflow Integration</h5>
              <p className="text-gray-400 text-sm">Seamlessly fits into existing clinical documentation processes</p>
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
            <h4 className="text-xl font-bold text-white">Medical Knowledge Inference Engine</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            MKIE powers AI-driven clinical pathways for precise documentation improvement, ensuring accuracy and completeness in medical records.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-semibold mb-2">Clinical Pathways</h5>
              <p className="text-gray-400 text-sm">Evidence-based workflows for comprehensive documentation</p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-semibold mb-2">Medical Validation</h5>
              <p className="text-gray-400 text-sm">Ensures clinical accuracy and completeness of documentation</p>
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
            <h4 className="text-xl font-bold text-white">Intuitive Interface Inference Engine</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            IIIE breaks integration barriers for effortless deployment across platforms, making our AI technology accessible to any healthcare system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-semibold mb-2">Seamless Integration</h5>
              <p className="text-gray-400 text-sm">Works with existing EMR systems without complex setup</p>
            </div>
            <div className="bg-black p-4 rounded-lg border border-white/20">
              <h5 className="text-white font-semibold mb-2">Cross-Platform</h5>
              <p className="text-gray-400 text-sm">Functions across web, mobile, and desktop environments</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="container mx-auto pt-16">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default MeetIpkoTimeline;

