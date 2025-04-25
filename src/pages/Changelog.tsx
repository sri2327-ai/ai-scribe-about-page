
import React from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from "@/components/ui/timeline";

const changelogData = [
  {
    title: "ICD-10 coding and Context Update",
    content: (
      <div className="space-y-6">
        <p className="text-black text-base leading-relaxed">
          Following the recent release of SNOMED coding, we're excited to announce a phased rollout of ICD-10 coding. This update brings enhanced medical coding capabilities to improve accuracy and efficiency in clinical documentation.
        </p>
        <p className="text-black text-base leading-relaxed">
          Key features include automated code suggestions, real-time validation, and integration with existing workflows. The new system learns from user interactions to provide increasingly accurate suggestions over time.
        </p>
        <div className="rounded-lg overflow-hidden mt-6">
          <img 
            src="/lovable-uploads/14fcf3f1-8d66-4abb-a217-4e685d29b99c.png"
            alt="ICD-10 Coding Update"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <span className="text-sm font-semibold text-black">S10.ai</span>
          <img 
            src="/lovable-uploads/8373b719-98a1-40b9-8d6b-b23bebf28d33.png"
            alt="S10.ai Logo"
            className="h-6 w-auto"
          />
        </div>
      </div>
    )
  },
  {
    title: "Enhanced Clinical Documentation",
    content: (
      <div className="space-y-6">
        <p className="text-black text-base leading-relaxed">
          We've completely revamped our clinical documentation system with AI-powered features. This major update introduces smart templates and voice-to-text improvements that significantly enhance the documentation process.
        </p>
        <p className="text-black text-base leading-relaxed">
          The system now better understands medical context, reducing documentation time by up to 45%. This improvement is particularly noticeable in complex clinical scenarios where context awareness is crucial.
        </p>
        <p className="text-black text-base leading-relaxed">
          We've also added support for specialty-specific workflows and improved integration with major EHR systems, making it easier than ever to maintain comprehensive patient records.
        </p>
        <div className="rounded-lg overflow-hidden mt-6">
          <img 
            src="/lovable-uploads/e9ad85da-27c0-412a-a0ff-237e4b9a8ef5.png"
            alt="Clinical Documentation Update"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <span className="text-sm font-semibold text-black">S10.ai</span>
          <img 
            src="/lovable-uploads/8373b719-98a1-40b9-8d6b-b23bebf28d33.png"
            alt="S10.ai Logo"
            className="h-6 w-auto"
          />
        </div>
      </div>
    )
  },
  {
    title: "Mobile App Enhancement",
    content: (
      <div className="space-y-6">
        <p className="text-black text-base leading-relaxed">
          Our latest mobile app update brings significant improvements to the user experience. The addition of offline mode ensures uninterrupted documentation capability, even in areas with poor connectivity.
        </p>
        <p className="text-black text-base leading-relaxed">
          Enhanced security features now include biometric authentication, providing an additional layer of protection for sensitive medical data while maintaining quick access for authorized users.
        </p>
        <p className="text-black text-base leading-relaxed">
          The redesigned interface offers more intuitive navigation and improved performance, with load times reduced by up to 30%. This optimization ensures a smoother workflow for healthcare professionals on the go.
        </p>
        <div className="rounded-lg overflow-hidden mt-6">
          <img 
            src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
            alt="Mobile App Update"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <span className="text-sm font-semibold text-black">S10.ai</span>
          <img 
            src="/lovable-uploads/8373b719-98a1-40b9-8d6b-b23bebf28d33.png"
            alt="S10.ai Logo"
            className="h-6 w-auto"
          />
        </div>
      </div>
    )
  }
];

const Changelog = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
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
        
        <Timeline data={changelogData} />
      </div>
    </div>
  );
};

export default Changelog;
