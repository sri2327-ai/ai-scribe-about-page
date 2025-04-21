import React from 'react';
import { Mail, Cloud, Database, Shield, Link, Server } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import Marquee from "react-fast-marquee";

const EmailTab = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <Mail />,
      title: 'Email Automation',
      description: 'Automated email campaigns for appointment reminders, follow-ups, and patient education.'
    },
    {
      icon: <Cloud />,
      title: 'Secure Cloud Storage',
      description: 'HIPAA-compliant cloud storage for clinical documents, imaging, and patient records.'
    }
  ];

  const emailPlatforms = [
    'Gmail for Healthcare', 'Outlook for Healthcare', 'Microsoft Exchange',
    'Office 365', 'HIPAA-Compliant Email', 'ProtonMail', 'Zoho Mail',
    'Titan', 'Fastmail', 'GMX'
  ];

  const storagePlatforms = [
    'Google Drive Healthcare', 'OneDrive Enterprise', 'Dropbox Business',
    'Box Healthcare', 'AWS Healthcare', 'Azure Health Data', 'iCloud',
    'IBM Cloud', 'Salesforce Health Cloud'
  ];

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      
      <div className="grid gap-6 mb-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow text-left"
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
      </div>

      <div className="mt-6">
        <p className="font-semibold text-[#143151] mb-3">Email Platforms:</p>
        <div className="w-full overflow-hidden">
          <Marquee
            gradient={true}
            gradientColor={"rgb(255, 255, 255)"}
            gradientWidth={50}
            speed={40}
            pauseOnHover={true}
            className="py-2"
          >
            {emailPlatforms.map((platform, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm mx-2"
              >
                <Mail size={16} />
                {platform}
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold text-[#143151] mb-3">Storage Solutions:</p>
        <div className="w-full overflow-hidden">
          <Marquee
            gradient={true}
            gradientColor={"rgb(255, 255, 255)"}
            gradientWidth={50}
            speed={40}
            pauseOnHover={true}
            className="py-2"
          >
            {storagePlatforms.map((platform, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm mx-2"
              >
                <Cloud size={16} />
                {platform}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default EmailTab;
