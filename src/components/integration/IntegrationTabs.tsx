
import React from 'react';
import { LocalHospitalRounded, VideoCall, CalendarToday, Email } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EHRTab from './tabs/EHRTab';
import SIPTab from './tabs/SIPTab';
import CalendarTab from './tabs/CalendarTab';
import EmailTab from './tabs/EmailTab';

const tabs = [
  {
    value: 'ehr',
    label: 'EHR & PMS',
    description: 'Smarter Clinical Workflows',
    icon: <LocalHospitalRounded />,
    content: <EHRTab />
  },
  {
    value: 'telehealth',
    label: 'SIP & Telehealth',
    description: 'Frictionless Communication',
    icon: <VideoCall />,
    content: <SIPTab />
  },
  {
    value: 'calendar',
    label: 'Calendars & Cloud Storage',
    description: 'Stay Organized, Always',
    icon: <CalendarToday />,
    content: <CalendarTab />
  },
  {
    value: 'email',
    label: 'Email & Workflow',
    description: 'AI That Works for You',
    icon: <Email />,
    content: <EmailTab />
  }
];

export default function IntegrationTabs() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          sx={{ 
            fontSize: isMobile ? '1.5rem' : '2rem',
            mb: 2,
            color: '#143151',
            lineHeight: 1.2
          }}
        >
          Deep, Intelligent Integrations <br />
          Across Healthcare Tech
        </Typography>
        <Typography
          variant="body1"
          sx={{ 
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: '#4a5568',
            lineHeight: 1.6
          }}
        >
          Our Platform Seamlessly connects with your existing tools, enhancing productivity
          without disrupting your workflow
        </Typography>
      </div>

      <Tabs defaultValue="ehr" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full bg-transparent gap-4 mb-8">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex flex-col items-center gap-2 p-4 border-b-2 border-transparent data-[state=active]:border-[#387E89] bg-transparent hover:bg-transparent transition-all duration-300"
            >
              <div className="icon-wrapper w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
                {tab.icon}
              </div>
              <div className="text-center">
                <p className="font-semibold text-[#143151]">{tab.label}</p>
                <p className="text-sm text-gray-600">{tab.description}</p>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-10 pt-6">
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-0">
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
