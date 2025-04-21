
import React from 'react';
import styles from '@/styles/integration.module.scss';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";

const SIPTab = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={styles.tabContentWrapper}>
      <div className={`${styles.tabLeft} w-full text-center`}>
        <Typography variant={isMobile ? "h5" : "h4"} sx={{ 
          fontSize: isMobile ? '1.15rem' : '1.5rem',
          color: '#143151',
          marginBottom: '1rem'
        }}>
          <VideoCallIcon style={{ marginRight: 8, color: '#143151' }}/> SIP & Telehealth Integration
        </Typography>
        
        <p className="text-sm md:text-base mb-4"><strong>AI-Enhanced Call Management</strong>: Integrates seamlessly with any SIP/VoIP system.</p>
        <p className="text-sm md:text-base mb-4"><strong>Instant Telehealth Integrations</strong>: Works with Zoom, Teams, Meet, WebEx, and more.</p>
        
        <div className={`${styles.featureItem} justify-center`}>
          <div className={styles.icon}>
            <PhoneInTalkIcon style={{ color: 'white' }} className="group-hover:text-white transition-colors" />
          </div>
          <div>
            <strong className="text-sm md:text-base">AI-Enhanced Call Management</strong>
            <p className="text-xs md:text-sm">Integrates seamlessly with any SIP/VoIP system for flawless connectivity.</p>
          </div>
        </div>

        <div className={`${styles.featureItem} justify-center`}>
          <div className={styles.icon}>
            <VideoCallIcon style={{ color: 'white' }} className="group-hover:text-white transition-colors" />
          </div>
          <div>
            <strong className="text-sm md:text-base">Instant Telehealth Integrations</strong>
            <p className="text-xs md:text-sm">Works effortlessly with Zoom, Microsoft Teams, Google Meet, WebEx, and more.</p>
          </div>
        </div>

        <p className="text-sm md:text-base mt-6 mb-3"><strong>Supported platforms:</strong></p>
        <div className={styles.ehrTags}>
          <span><VideocamRoundedIcon/>Zoom</span>
          <span><GroupsRoundedIcon/>Microsoft Teams</span>
          <span><VideocamRoundedIcon/>Google Meet</span>
          <span><VideocamRoundedIcon/>WebEx</span>
          <span><CallRoundedIcon/>VoIP Systems</span>
          <span><PhoneEnabledRoundedIcon/>SIP Providers</span>
        </div>
      </div>
    </div>
  );
};

export default SIPTab;
