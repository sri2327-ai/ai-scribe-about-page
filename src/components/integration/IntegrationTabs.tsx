
import React, { useState, useEffect } from 'react';
import { LocalHospitalRounded, VideoCall, CalendarToday, Email, ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  const [activeTab, setActiveTab] = useState('ehr');
  const [visibleTabsIndex, setVisibleTabsIndex] = useState(0);
  const tabsToShow = isMobile ? 2 : 4;
  
  // Handle viewport changes
  useEffect(() => {
    setVisibleTabsIndex(0);
  }, [isMobile]);
  
  const handlePrevTab = () => {
    if (visibleTabsIndex > 0) {
      const newIndex = Math.max(0, visibleTabsIndex - 1);
      setVisibleTabsIndex(newIndex);
      setActiveTab(tabs[newIndex].value);
    }
  };
  
  const handleNextTab = () => {
    if (visibleTabsIndex < tabs.length - tabsToShow) {
      const newIndex = Math.min(tabs.length - tabsToShow, visibleTabsIndex + 1);
      setVisibleTabsIndex(newIndex);
      setActiveTab(tabs[newIndex].value);
    }
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const tabIndex = tabs.findIndex(tab => tab.value === value);
    
    if (tabIndex < visibleTabsIndex || tabIndex >= visibleTabsIndex + tabsToShow) {
      const newVisibleTabsIndex = Math.max(0, Math.min(tabIndex, tabs.length - tabsToShow));
      setVisibleTabsIndex(newVisibleTabsIndex);
    }
  };

  const AccordionTabItem = ({ tab }) => (
    <AccordionItem value={tab.value}>
      <AccordionTrigger className="hover:no-underline py-4">
        <div className="flex items-center gap-3">
          <div className="icon-wrapper w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
            {tab.icon}
          </div>
          <div className="text-left">
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: '1rem',
                fontWeight: 600,
                color: '#143151',
                mb: 0.5
              }}
            >
              {tab.label}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                fontSize: '0.875rem',
                color: '#4a5568'
              }}
            >
              {tab.description}
            </Typography>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="pt-4">
          {tab.content}
        </div>
      </AccordionContent>
    </AccordionItem>
  );

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

      {/* Mobile Accordion View */}
      {isMobile ? (
        <div className="w-full max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {tabs.map((tab) => (
              <AccordionTabItem key={tab.value} tab={tab} />
            ))}
          </Accordion>
        </div>
      ) : (
        /* Desktop/Tablet Tab View */
        <Tabs 
          defaultValue="ehr" 
          value={activeTab} 
          onValueChange={handleTabChange} 
          className="w-full max-w-4xl mx-auto"
        >
          <div className="relative flex items-center mb-6">
            <button 
              onClick={handlePrevTab}
              className={`absolute left-0 z-10 flex items-center justify-center h-8 w-8 rounded-full shadow-md transition-all duration-200 ${
                visibleTabsIndex > 0 
                  ? "bg-white hover:bg-gray-100 opacity-100 pointer-events-auto" 
                  : "bg-gray-100 opacity-50 pointer-events-none"
              }`}
              aria-label="Previous tabs"
              type="button"
              disabled={visibleTabsIndex === 0}
            >
              <ArrowLeft fontSize="small" />
            </button>
            
            <TabsList className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm scrollbar-hide overflow-x-auto w-full flex flex-nowrap justify-start sm:justify-center gap-2 px-10">
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
            
            <button 
              onClick={handleNextTab}
              className={`absolute right-0 z-10 flex items-center justify-center h-8 w-8 rounded-full shadow-md transition-all duration-200 ${
                visibleTabsIndex < tabs.length - tabsToShow 
                  ? "bg-white hover:bg-gray-100 opacity-100 pointer-events-auto" 
                  : "bg-gray-100 opacity-50 pointer-events-none"
              }`}
              aria-label="Next tabs"
              type="button"
              disabled={visibleTabsIndex >= tabs.length - tabsToShow}
            >
              <ArrowRight fontSize="small" />
            </button>
          </div>

          <div className="mt-6">
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0 animate-in fade-in-50 duration-300">
                {tab.content}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      )}
    </div>
  );
}
