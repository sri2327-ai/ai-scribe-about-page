
import React from 'react';
import styles from '@/styles/integration.module.scss';
import SyncIcon from '@mui/icons-material/Sync';
import TimerIcon from '@mui/icons-material/Timer';
import DoNotDisturbRoundedIcon from '@mui/icons-material/DoNotDisturbRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";

const EHRTab = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={styles.tabContentWrapper}>
      <div className={styles.tabLeft}>
        <div className={`${styles.featureItem} justify-center`}>
          <div className={styles.icon}>
            <SyncIcon style={{ color: '#ffffff' }} />
          </div>
          <div>
            <strong>Bidirectional Syncing</strong>
            <p>Auto-populate medical records with AI-generated notes, patient history, and structured data.</p>
          </div>
        </div>

        <div className={`${styles.featureItem} justify-center`}>
          <div className={styles.icon}>
            <DoNotDisturbRoundedIcon style={{ color: '#ffffff' }} />
          </div>
          <div>
            <strong>No More Copy-Paste</strong>
            <p>Instant documentation with real-time conversation context.</p>
          </div>
        </div>

        <div className={`${styles.featureItem} justify-center`}>
          <div className={styles.icon}>
            <TimerIcon style={{ color: '#ffffff' }} />
          </div>
          <div>
            <strong>Complete Charting in Under 2 Minutes</strong>
            <p>Custom-tailored notes, automated ICD-10/HCC coding, and AI-driven accuracy.</p>
          </div>
        </div>

        <p><strong>Compatible with leading EHR systems:</strong></p>
        <div className={styles.ehrTags}>
          <span><NoteAddRoundedIcon /> Epic</span>
          <span><NoteAddRoundedIcon /> Cerner</span>
          <span><NoteAddRoundedIcon /> Allscripts</span>
          <span><NoteAddRoundedIcon /> Athenahealth</span>
        </div>
      </div>
    </div>
  );
};

export default EHRTab;
