
import React from 'react';
import { Mail, Clock, Workflow, Users, Network, Server } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

const EmailTab = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <Mail />,
      title: 'Clinical Communication Hub',
      description: 'Secure messaging platform for patient communication, team collaboration, and referral management.'
    },
    {
      icon: <Network />,
      title: 'Automated Workflows',
      description: 'Smart routing of clinical documents, test results, and patient inquiries to the right team members.'
    }
  ];

  const emailPlatforms = [
    'Gmail HIPAA', 'Outlook Healthcare', 'ProtonMail Medical',
    'Microsoft Exchange', 'Yahoo Business', 'Zoho Mail',
    'Hushmail Healthcare', 'MDOfficeMail', 'NeoCertified',
    'Paubox', 'Virtru', 'Protected Trust'
  ];

  const workflowPlatforms = [
    'Zapier', 'Microsoft Flow', 'Workflow Engine',
    'Kissflow', 'ProcessMaker', 'Integrify',
    'Monday.com', 'Asana', 'ClickUp'
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
          <p className="font-semibold text-[#143151] mb-3">Email Platform Integrations:</p>
          <div className="flex flex-wrap gap-3">
            {emailPlatforms.map((platform, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm"
              >
                <Mail size={16} />
                {platform}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold text-[#143151] mb-3">Workflow Automation Tools:</p>
          <div className="flex flex-wrap gap-3">
            {workflowPlatforms.map((platform, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm"
              >
                <Server size={16} />
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTab;
