import React from 'react';
import styles from '@/styles/integration.module.scss';
import { Typography,Button } from '@mui/material';

export default function Healthcare(){
  return (
    <section className={styles.healthcareSection}>
    <h2 className={styles.healthcareTitle}>
      Deep, Intelligent Integrations <br />
      Across Healthcare Tech
    </h2>
    <p className={styles.healthcareSubtitle}>
      EHR & PMS | Smarter Clinical Workflows
    </p>

    <div className={styles.cardSection}>
  <div className={styles.cardContainer}>
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Bidirectional Syncing</h3>
      <p className={styles.cardText}>
        Auto-populate medical records with AI-generated notes, patient history, and structured data.
      </p>
    </div>
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>No More Copy-Paste</h3>
      <p className={styles.cardText}>
        Instant documentation with real-time conversation context.
      </p>
    </div>
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Complete Charting in Under 2 Minutes</h3>
      <p className={styles.cardText}>
        Custom-tailored notes, automated ICD-10/HCC coding, and AI-driven accuracy.
      </p>
    </div>
  </div>

  {/* Button right below the cards */}
  <div className={styles.buttonWrapper}>
    <Button variant='outlined'>See Demo</Button>
  </div>
</div>

    
  </section>
  );
};
