
import React from 'react';
import { Calendar, Cloud, Database, Shield, Link, Server } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

const CalendarTab = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <Calendar />,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling with automated appointment reminders and patient self-booking.'
    },
    {
      icon: <Cloud />,
      title: 'Secure Cloud Storage',
      description: 'HIPAA-compliant cloud storage for clinical documents, imaging, and patient records.'
    }
  ];

  const calendarPlatforms = [
    'Google Calendar', 'Outlook Calendar', 'Apple Calendar', 'Microsoft Exchange',
    'Office 365', 'CalDAV', 'Calendly', 'Square Appointments', 'Acuity Scheduling',
    'SimplePractice'
  ];

  const cloudPlatforms = [
    'Google Drive Healthcare', 'OneDrive Enterprise', 'Dropbox Business',
    'Box Healthcare', 'AWS Healthcare', 'Azure Health Data', 'iCloud',
    'IBM Cloud', 'Salesforce Health Cloud'
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#143151]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
            </div>
          </div>
        ))}

        <div className="mt-6">
          <p className="font-semibold text-[#143151] mb-3">Calendar Integrations:</p>
          <div className="flex flex-wrap gap-3">
            {calendarPlatforms.map((platform, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm"
              >
                <Calendar size={16} />
                {platform}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold text-[#143151] mb-3">Cloud Storage Solutions:</p>
          <div className="flex flex-wrap gap-3">
            {cloudPlatforms.map((platform, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm"
              >
                <Cloud size={16} />
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarTab;
