
import React from 'react';
import { Card } from "@/components/ui/card";
import { TimelineEntry } from "@/components/changelog/TimelineEntry";

const changelogData = [
  {
    date: "April 24, 2025",
    title: "ICD-10 coding and more intelligent Context",
    description: "Following the recent release of SNOMED coding, a phased rollout of ICD-10 coding is underway. Participating users can enable ICD-10-CM coding via Memory.",
    image: "/lovable-uploads/14fcf3f1-8d66-4abb-a217-4e685d29b99c.png",
    link: "#"
  },
  {
    date: "April 21, 2025",
    title: "Enhanced Clinical Documentation",
    description: "Introducing advanced clinical documentation features with improved accuracy and automated code suggestions.",
    image: "/lovable-uploads/e9ad85da-27c0-412a-a0ff-237e4b9a8ef5.png",
    link: "#"
  }
];

const Changelog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Changelog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            New updates and improvements to our platform
          </p>
        </div>
        
        <div className="space-y-16">
          {changelogData.map((entry, index) => (
            <TimelineEntry
              key={index}
              {...entry}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelog;
