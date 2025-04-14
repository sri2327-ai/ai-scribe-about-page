import React from 'react';
import styles from '@/styles/integration.module.scss';

export default function CloudAndCalendar (){
  return (
    <div className={styles.telehealth}>
       <div className={styles.contentWrapper}>
        <div className={styles.cloudSection}>
          <h4 className={styles.title}>Secure Cloud Storage</h4>
          <p className={styles.text}>
            Save, access, and manage documents in Google Drive, Dropbox, OneDrive, iCloud, and more.
          </p>
        </div>

        <div className={styles.middleBox}>
          <h4 className={styles.title}>Smart Scheduling</h4>
          <p className={styles.text}>
            Sync with Outlook, Apple Calendar, Google Calendar, Trello, Slack, and more.
          </p>
        </div>

        <div className={styles.rightSection}>
  <div className={styles.headingAboveBox}>
    <h2>Calendars & Cloud Storage</h2>
    <p>Stay Organized, Always</p>
  </div>

  <div className={styles.logoBox}>
    <p className={styles.logoText}>DISPLAY CALENDARS AND CLOUD STORAGE LOGOS</p>
  </div>
</div>

      </div>
    </div>
  );
};


