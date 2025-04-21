
import React from 'react';
import styles from '@/styles/integration.module.scss';
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
    <div className={styles.integrationWrapper}>
      <div className={styles.headerText}>
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          className={styles.healthcareTitle}
          sx={{ 
            fontSize: isMobile ? '1.5rem' : '2rem',
            mb: 2,
            px: isMobile ? 1 : 3,
            textAlign: 'center'
          }}
        >
          Deep, Intelligent Integrations <br />
          Across Healthcare Tech
        </Typography>
        <Typography
          variant="body1"
          sx={{ 
            fontSize: isMobile ? '0.9rem' : '1rem',
            mb: 8,
            px: isMobile ? 2 : 0,
            textAlign: 'center'
          }}
        >
          Our Platform Seamlessly connects with your existing tools, enhancing productivity <br />
          without disrupting your workflow
        </Typography>
      </div>

      <Tabs defaultValue="ehr" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full bg-transparent gap-2">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#143151] data-[state=active]:to-[#387E89] data-[state=active]:text-white hover:bg-gradient-to-r hover:from-[#143151] hover:to-[#387E89] hover:text-white transition-all duration-300"
            >
              <div className="icon-wrapper w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
                {tab.icon}
              </div>
              <div className="text-center">
                <p className="font-semibold">{tab.label}</p>
                <p className="text-sm opacity-80">{tab.description}</p>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-8">
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
