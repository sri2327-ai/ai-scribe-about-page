
import React, { useState } from 'react';
import styles from '@/styles/integration.module.scss';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import { Typography } from '@mui/material';
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
        <Typography variant={isMobile ? "h3" : "h2"} className={styles.healthcareTitle}>
          Deep, Intelligent Integrations <br />
          Across Healthcare Tech
        </Typography>
        <p>
          Our Platform Seamlessly connects with your existing tools, enhancing productivity <br />
          without disrupting your workflow
        </p>
      </div>
      <div className={styles.tabHeader}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`${styles.tabCard} ${activeTab === tab.key ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <div className={styles.icon}>{tab.icon}</div>
            <div>
              <Typography variant={isMobile ? "h6" : "h5"}>{tab.title}</Typography>
              <p>{tab.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs.find((tab) => tab.key === activeTab)?.content}
      </div>
    </div>
  );
}
