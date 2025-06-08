
import React, { useState, useEffect } from 'react';
import { LocalHospitalRounded, VideoCall, CalendarToday, Email } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";
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

      {/* Accordion View for all screen sizes */}
      <div className="w-full max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {tabs.map((tab) => (
            <AccordionTabItem key={tab.value} tab={tab} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
