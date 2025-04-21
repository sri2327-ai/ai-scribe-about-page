import React from 'react';
import styles from '@/styles/integration.module.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { Typography, Box } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";

const CalendarTab = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={styles.tabContentWrapper}>
      <div className={`${styles.tabLeft} w-full text-center`}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          sx={{ 
            fontSize: isMobile ? '1.25rem' : '1.75rem',
            mb: 1.5
          }}
        >
          Calendars & Cloud Storage
        </Typography>
        <Typography 
          variant="body1"
          sx={{ fontSize: isMobile ? '0.9rem' : '1rem', mb: 2 }}
        >
          Sync your appointments and files for smoother day-to-day practice management.
        </Typography>
        
        <Box className={`${styles.featureItem} justify-center`}>
          <div className={styles.icon}>
            <MailOutlineIcon style={{ color: '#143151' }} className="group-hover:text-[#387E89] transition-colors" />
          </div>
          <div>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              Secure Cloud Storage
            </Typography>
            <Typography variant="body2" sx={{ fontSize: isMobile ? '0.85rem' : '0.95rem' }}>
              Save, Access and manage documents in Google Drive, Dropbox, OneDrive, iCloud and More.
            </Typography>
          </div>
        </Box>
        
        <Box className={`${styles.featureItem} justify-center`}>
          <div className={styles.icon}>
            <AutoModeIcon style={{ color: '#143151' }} className="group-hover:text-[#387E89] transition-colors" />
          </div>
          <div>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              Smart Scheduling
            </Typography>
            <Typography variant="body2" sx={{ fontSize: isMobile ? '0.85rem' : '0.95rem' }}>
              Sync with Outlook, Apple Calendar, Google Calendar, Trello, Slack and More
            </Typography>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default CalendarTab;
