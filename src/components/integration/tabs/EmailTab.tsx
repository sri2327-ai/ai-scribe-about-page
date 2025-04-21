
import React from 'react';
import styles from '@/styles/integration.module.scss';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AutoModeRoundedIcon from '@mui/icons-material/AutoModeRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import { Typography } from '@mui/material';

const EmailTab = () => (
  <div className={styles.tabContentWrapper}>
    <div className={styles.tabLeft}>
      <Typography variant='h3'><EmailRoundedIcon style={{ marginRight: 8, color: '#5192AE' }} /> Email & Workflow Automation</Typography>
      <p>Smart routing and automation for all your communication and tasks.</p>
      <div className={styles.featureItem}>
        <div className={styles.icon}><DraftsRoundedIcon  style={{ color: '#5192AE' }}/></div>
        <div>
          <strong>Seamless Email Integration</strong>
          <p>Works with Gmail, Outlook, Yahoo Mail, Apple Mail, and others.</p>
        </div>
      </div>
      <div className={styles.featureItem}>
        <div className={styles.icon}><AutoModeRoundedIcon style={{ color: "#5192AE" }}/></div>
        <div>
          <strong>Effortless Workflows</strong>
          <p>
            AI-driven automation across documentation, chat, and call agent workflows—
            reducing manual input to nearly zero.
          </p>
        </div>
      </div>
      <p><strong>Compatible email platforms:</strong></p>
      <div className={styles.ehrTags}>
        <span><strong>G </strong> Gmail</span>
        <span><EmailRoundedIcon/>Outlook</span>
        <span><strong>Y! </strong> Yahoo Mail</span>
        <span><EmailRoundedIcon/>Apple Mail</span>
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

export default EmailTab;
