
import React, { useState } from 'react';
import styles from '@/styles/integration.module.scss';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import { Typography, Box } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";
import EHRTab from './tabs/EHRTab';
import SIPTab from './tabs/SIPTab';
import CalendarTab from './tabs/CalendarTab';
import EmailTab from './tabs/EmailTab';

const tabs = [
  {
    key: 'ehr',
    title: 'EHR & PMS',
    description: 'Smarter Clinical Workflows',
    icon: <LocalHospitalRoundedIcon />,
    content: <EHRTab />,
  },
  {
    key: 'telehealth',
    title: 'SIP & Telehealth',
    description: 'Frictionless Communication',
    icon: <VideoCallIcon />,
    content: <SIPTab />,
  },
  {
    key: 'calendar',
    title: 'Calendars & Cloud Storage',
    description: 'Stay Organized, Always',
    icon: <CalendarTodayIcon />,
    content: <CalendarTab />,
  },
  {
    key: 'email',
    title: 'Email & Workflow',
    description: 'AI That Works for You',
    icon: <EmailIcon />,
    content: <EmailTab />,
  },
];

export default function IntegrationTabs() {
  const [activeTab, setActiveTab] = useState('ehr');
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
            px: isMobile ? 1 : 3
          }}
        >
          Deep, Intelligent Integrations <br />
          Across Healthcare Tech
        </Typography>
        <Typography
          variant="body1"
          sx={{ 
            fontSize: isMobile ? '0.9rem' : '1rem',
            mb: 4,
            px: isMobile ? 2 : 0
          }}
        >
          Our Platform Seamlessly connects with your existing tools, enhancing productivity <br />
          without disrupting your workflow
        </Typography>
      </div>
      <Box className={styles.tabHeader} sx={{ gap: isMobile ? '0.5rem' : '1rem' }}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`${styles.tabCard} ${activeTab === tab.key ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <div className={styles.icon}>{tab.icon}</div>
            <div>
              <Typography 
                variant={isMobile ? "subtitle1" : "h6"}
                sx={{ fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: 'bold' }}
              >
                {tab.title}
              </Typography>
              <Typography 
                variant="body2"
                sx={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}
              >
                {tab.description}
              </Typography>
            </div>
          </div>
        ))}
      </Box>
      <div className={styles.tabContent}>
        {tabs.find((tab) => tab.key === activeTab)?.content}
      </div>
    </div>
  );
}
