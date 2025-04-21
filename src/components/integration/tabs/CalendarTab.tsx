
import React from 'react';
import styles from '@/styles/integration.module.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { Typography } from '@mui/material';

const CalendarTab = () => (
  <div className={styles.tabContentWrapper}>
    <div className={styles.tabLeft}>
      <Typography variant='h3'>Calendars & Cloud Storage</Typography>
      <p>Sync your appointments and files for smoother day-to-day practice management.</p>
      <div className={styles.featureItem}>
        <div className={styles.icon}><MailOutlineIcon /></div>
        <div>
          <strong>Secure Cloud Storage</strong>
          <p>Save, Access and manage documents in Google Drive, Dropbox, OneDrive, iCloud and More.</p>
        </div>
      </div>
      <div className={styles.featureItem}>
        <div className={styles.icon}><AutoModeIcon /></div>
        <div>
          <strong>Smart Scheduling</strong>
          <p>Sync with Outlook, Apple Calendar, Google Calendar, Trello, Slack and More</p>
        </div>
      </div>
    </div>
    <div className={styles.tabRight}>
      <img
        src="/images/email-ui.png"
        alt="Email & Workflow Automation"
        width={400}
        height={300}
        style={{ borderRadius: 12 }}
      />
    </div>
  </div>
);

export default CalendarTab;
