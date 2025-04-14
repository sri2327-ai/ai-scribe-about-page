import React from 'react';
import styles from '@/styles/integration.module.scss';

export default function EmailWorkflow (){
  return (
    <div className={styles.emailWorkflowSection}>
      <h2 className={styles.sectionHeading}>
        Email & Workflow Automation | AI That Works for You
      </h2>

      <div className={styles.contentRow}>
        <div className={styles.leftCard}>
          <h3>Seamless Email Integration</h3>
          <p>
            Works with Gmail, Outlook, Yahoo Mail, Apple Mail, and others.
          </p>
        </div>

        <div className={styles.rightText}>
          <h3>Effortless Workflows</h3>
          <p>
            AI-driven automation across documentation, chat, and call agent workflows—
            <br />
            reducing manual input to nearly zero.
          </p>
        </div>
      </div>
    </div>
  );
};
