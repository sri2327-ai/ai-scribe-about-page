
import React from 'react';
import styles from '@/styles/integration.module.scss';
import SyncIcon from '@mui/icons-material/Sync';
import TimerIcon from '@mui/icons-material/Timer';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import DoNotDisturbRoundedIcon from '@mui/icons-material/DoNotDisturbRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";

const EHRTab = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={styles.tabContentWrapper}>
      <div className={styles.tabLeft}>
        <Typography variant={isMobile ? "h4" : "h3"}>
          <LocalHospitalRoundedIcon style={{ marginRight: 8, color:'#5192AE' }} /> EHR & PMS Integration
        </Typography>
        <p>Seamless integration with your EHR for smarter, more efficient workflows.</p>
        <div className={styles.featureItem}>
          <div className={styles.icon}><SyncIcon /></div>
          <div>
            <strong>Bidirectional Syncing</strong>
            <p>Auto-populate medical records with AI-generated notes, patient history, and structured data.</p>
          </div>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.icon}><DoNotDisturbRoundedIcon /></div>
          <div>
            <strong>No More Copy-Paste</strong>
            <p>Instant documentation with real-time conversation context.</p>
          </div>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.icon}><TimerIcon /></div>
          <div>
            <strong>Complete Charting in Under 2 Minutes</strong>
            <p>Custom-tailored notes, automated ICD-10/HCC coding, and AI-driven accuracy.</p>
          </div>
        </div>

        <p><strong>Compatible with leading EHR systems:</strong></p>
        <div className={styles.scrollWrapper}>
          <div className={styles.ehrscroll}>
            <span><NoteAddRoundedIcon /> Epic</span>
            <span><NoteAddRoundedIcon /> Cerner</span>
            <span><NoteAddRoundedIcon /> Allscripts</span>
            <span><NoteAddRoundedIcon /> Athenahealth</span>
            <span><NoteAddRoundedIcon /> Epic</span>
            <span><NoteAddRoundedIcon /> Cerner</span>
            <span><NoteAddRoundedIcon /> Allscripts</span>
            <span><NoteAddRoundedIcon /> Athenahealth</span>
          </div>
        </div>
      </div>
      <div className={styles.tabRight}>
        <img
          src="/images/ehr-ui.png"
          alt="EHR Integration UI"
          width={400}
          height={300}
          style={{ borderRadius: 12 }}
        />
      </div>
    </div>
  );
};

export default EHRTab;
