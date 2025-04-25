import React from 'react';
import { TimelineEntry } from "@/components/changelog/TimelineEntry";
import { Link } from 'react-router-dom';

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
  },
  {
    date: "April 15, 2025",
    title: "Mobile App Enhancements",
    description: "Our latest mobile app update brings significant improvements to the user experience. New features include offline mode for documentation, enhanced security with biometric authentication, and a redesigned interface for easier navigation. The update also includes performance optimizations that improve load times by up to 30%.",
    image: "/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png",
    link: "#"
  }
];

const Changelog = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <Link to="/" className="text-blue-500 hover:text-blue-700 font-medium mb-8 block">
              ← Back to home
            </Link>
            <h1 className="text-5xl font-bold tracking-tight text-black mb-6">
              Product Updates
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track our latest features, improvements, and fixes. We're constantly working to improve your experience.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-[7.5rem] top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
