import React from 'react';
import styles from '@/styles/integration.module.scss';

export default function Telehealth (){
  return (
    <div className={styles.telehealthWrapper}>
      <div className={styles.circleSection}>
        <p className={styles.circleText}>
          SIP & Telehealth | Frictionless Communication
        </p>
      </div>

      <div className={styles.featureColumn}>
        <div className={styles.featureBox}>
          <h3 className={styles.featureTitle}>AI-Enhanced Call Management</h3>
          <p className={styles.featureText}>
            Integrates seamlessly with any SIP/VoIP system for flawless connectivity.
          </p>
        </div>
        <div className={styles.featureBox}>
          <h3 className={styles.featureTitle}>Instant Telehealth Integrations</h3>
          <p className={styles.featureText}>
            Works effortlessly with Zoom, Microsoft Teams, Google Meet, WebEx, and more.
          </p>
        </div>
      </div>
    </div>
  );
};
