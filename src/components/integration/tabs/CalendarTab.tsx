
import React from 'react';
import styles from '@/styles/integration.module.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloudIcon from '@mui/icons-material/Cloud';
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
            mb: 1.5,
            color: '#143151'
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
        
        <Box className={`${styles.featureItem} justify-center mb-6`}>
          <div className={styles.icon}>
            <CloudIcon style={{ color: 'white' }} className="group-hover:text-white transition-colors" />
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
        
        <Box className={`${styles.featureItem} justify-center mb-6`}>
          <div className={styles.icon}>
            <CalendarMonthIcon style={{ color: 'white' }} className="group-hover:text-white transition-colors" />
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
        
        <p className="text-sm md:text-base mt-6 mb-3"><strong>Supported platforms:</strong></p>
        <div className={styles.ehrTags}>
          <span><CloudIcon fontSize="small"/>Google Drive</span>
          <span><CloudIcon fontSize="small"/>Dropbox</span>
          <span><CloudIcon fontSize="small"/>OneDrive</span>
          <span><CalendarMonthIcon fontSize="small"/>Google Calendar</span>
          <span><CalendarMonthIcon fontSize="small"/>Outlook Calendar</span>
          <span><CalendarMonthIcon fontSize="small"/>Apple Calendar</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarTab;
