
import React from 'react';
import { Mail, RotateCw, Workflow, Database, Link, Download } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import Marquee from "react-fast-marquee";

const EmailTab = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <Mail />,
      title: 'Seamless Email Integration',
      description: 'Works with Gmail, Outlook, Yahoo Mail, Apple Mail, and others.'
    },
    {
      icon: <Workflow />,
      title: 'Effortless Workflows',
      description: 'AI-driven automation across documentation, chat, and call agent workflows—reducing manual input to nearly zero.'
    }
  ];

  const emailPlatforms = [
    'Gmail', 'Outlook', 'Yahoo Mail', 'Apple Mail', 'Microsoft Exchange',
    'Office 365', 'HIPAA-Compliant Email', 'ProtonMail', 'Zoho Mail',
    'Titan', 'Fastmail', 'GMX'
  ];

  const workflowPlatforms = [
    'Microsoft Power Automate', 'Zapier', 'Integromat', 'IFTTT',
    'Notion', 'Airtable', 'Monday.com', 'ClickUp', 'Asana',
    'Trello', 'Slack', 'Teams'
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      
      <div className="grid gap-5 sm:gap-6 mb-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white mx-auto sm:mx-0 mb-3 sm:mb-0">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#143151] text-center sm:text-left">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base text-center sm:text-left">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="font-semibold text-[#143151] mb-3 text-center sm:text-left">Email Platforms:</p>
        <div className="w-full overflow-hidden rounded-lg">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm mx-2 transform hover:scale-105 transition-transform duration-200"
              >
                <Mail size={16} />
                {platform}
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold text-[#143151] mb-3 text-center sm:text-left">Workflow Solutions:</p>
        <div className="w-full overflow-hidden rounded-lg">
          <Marquee
            gradient={true}
            gradientColor={"rgb(255, 255, 255)"}
            gradientWidth={50}
            speed={40}
            pauseOnHover={true}
            className="py-2"
          >
            {workflowPlatforms.map((platform, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm mx-2 transform hover:scale-105 transition-transform duration-200"
              >
                <Workflow size={16} />
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
