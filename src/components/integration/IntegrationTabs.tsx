
import React, { useState } from 'react';
import { LocalHospitalRounded, VideoCall, CalendarToday, Email, ArrowLeft, ArrowRight } from '@mui/icons-material';
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
  const [visibleTabsIndex, setVisibleTabsIndex] = useState(0);
  const tabsToShow = isMobile ? 2 : 4;
  
  const handlePrevTab = () => {
    setVisibleTabsIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNextTab = () => {
    setVisibleTabsIndex(prev => Math.min(tabs.length - tabsToShow, prev + 1));
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-10">
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
        <div className="relative flex items-center mb-6">
          {visibleTabsIndex > 0 && (
            <button 
              onClick={handlePrevTab}
              className="absolute left-0 z-10 flex items-center justify-center h-8 w-8 bg-white rounded-full shadow-md"
              aria-label="Previous tabs"
            >
              <ArrowLeft fontSize="small" />
            </button>
          )}
          
          <TabsList className="scrollbar-hide overflow-x-auto w-full flex flex-nowrap justify-start sm:justify-center bg-transparent gap-2 pl-6 pr-6">
            {tabs.slice(visibleTabsIndex, visibleTabsIndex + tabsToShow).map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-none flex flex-col items-center gap-1 p-2 border-b-2 border-transparent data-[state=active]:border-[#387E89] bg-transparent hover:bg-transparent transition-all duration-300 min-w-[120px]"
              >
                <div className="icon-wrapper w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
                  {tab.icon}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-[#143151] text-sm">
                    {tab.label}
                  </p>
                  <p className="text-xs text-gray-600">
                    {tab.description}
                  </p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {visibleTabsIndex < tabs.length - tabsToShow && (
            <button 
              onClick={handleNextTab}
              className="absolute right-0 z-10 flex items-center justify-center h-8 w-8 bg-white rounded-full shadow-md"
              aria-label="Next tabs"
            >
              <ArrowRight fontSize="small" />
            </button>
          )}
        </div>

        <div className="mt-6">
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-0 animate-in fade-in-50 duration-300">
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
