
import React from 'react';
import styles from '@/styles/integration.module.scss';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AutoModeRoundedIcon from '@mui/icons-material/AutoModeRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";

const EmailTab = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={styles.tabContentWrapper}>
      <div className={`${styles.tabLeft} w-full text-center`}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          sx={{ 
            fontSize: isMobile ? '1.1rem' : '1.5rem', 
            mb: 2,
            color: '#143151'
          }}
        >
          <EmailRoundedIcon style={{ marginRight: 8, color: '#143151', fontSize: '1.5rem' }} /> 
          Email & Workflow Automation
        </Typography>
        <p className="text-sm md:text-base mb-4">Smart routing and automation for all your communication and tasks.</p>
        
        <div className={`${styles.featureItem} justify-center mb-6`}>
          <div className={styles.icon}>
            <DraftsRoundedIcon style={{ color: 'white' }} className="group-hover:text-white transition-colors" />
          </div>
          <div>
            <strong className="text-sm md:text-base">Seamless Email Integration</strong>
            <p className="text-xs md:text-sm">Works with Gmail, Outlook, Yahoo Mail, Apple Mail, and others.</p>
          </div>
        </div>

        <div className={`${styles.featureItem} justify-center mb-6`}>
          <div className={styles.icon}>
            <AutoModeRoundedIcon style={{ color: 'white' }} className="group-hover:text-white transition-colors" />
          </div>
          <div>
            <strong className="text-sm md:text-base">Effortless Workflows</strong>
            <p className="text-xs md:text-sm">
              AI-driven automation across documentation, chat, and call agent workflows—
              reducing manual input to nearly zero.
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base mt-6 mb-3"><strong>Compatible email platforms:</strong></p>
        <div className={styles.ehrTags}>
          <span className="text-xs"><strong>G </strong> Gmail</span>
          <span className="text-xs"><EmailRoundedIcon fontSize="small"/>Outlook</span>
          <span className="text-xs"><strong>Y! </strong> Yahoo Mail</span>
          <span className="text-xs"><EmailRoundedIcon fontSize="small"/>Apple Mail</span>
        </div>
      </div>
    </div>
  );
};

export default EmailTab;
