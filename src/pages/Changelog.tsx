
import React from 'react';
import { TimelineEntry } from "@/components/changelog/TimelineEntry";

const changelogData = [
  {
    date: "April 24, 2025",
    title: "ICD-10 coding and more intelligent Context",
    description: "Following the recent release of SNOMED coding, we're excited to announce a phased rollout of ICD-10 coding. This update brings enhanced medical coding capabilities to improve accuracy and efficiency in clinical documentation. Key features include automated code suggestions, real-time validation, and integration with existing workflows. The new system learns from user interactions to provide increasingly accurate suggestions over time.",
    image: "/lovable-uploads/14fcf3f1-8d66-4abb-a217-4e685d29b99c.png",
    link: "#"
  },
  {
    date: "April 21, 2025",
    title: "Enhanced Clinical Documentation",
    description: "We've completely revamped our clinical documentation system with AI-powered features. This major update introduces smart templates, voice-to-text improvements, and contextual suggestions. The system now better understands medical context, reducing documentation time by up to 45%. We've also added support for specialty-specific workflows and improved integration with major EHR systems.",
    image: "/lovable-uploads/e9ad85da-27c0-412a-a0ff-237e4b9a8ef5.png",
    link: "#"
  }
];

const Changelog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 inline-block">
            Product Updates
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Track our latest features, improvements, and fixes. We're constantly working to improve your experience.
          </p>
        </div>
        
        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 hidden md:block"></div>
          
          <div className="space-y-16">
            {changelogData.map((entry, index) => (
              <TimelineEntry
                key={index}
                {...entry}
                isFirst={index === 0}
                isLast={index === changelogData.length - 1}
              />
            ))}
          </div>
          
          {/* Timeline end marker */}
          <div className="hidden md:block absolute left-2.5 bottom-0 w-4 h-4 rounded-full bg-blue-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
