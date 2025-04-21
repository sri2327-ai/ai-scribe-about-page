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
        <Typography variant={isMobile ? "h4" : "h3"}>
          <VideoCallIcon style={{ marginRight: 8, color: '#143151' }}/>SIP & Telehealth Integration
        </Typography>
        <p><strong>AI-Enhanced Call Management</strong>: Integrates seamlessly with any SIP/VoIP system.</p>
        <p><strong>Instant Telehealth Integrations</strong>: Works with Zoom, Teams, Meet, WebEx, and more.</p>
        <div className={`${styles.featureItem} justify-center`}>
          <div className={styles.icon}>
            <PhoneInTalkIcon style={{ color: '#143151' }} className="group-hover:text-[#387E89] transition-colors" />
          </div>
          <div>
            <strong>AI-Enhanced Call Management</strong>
            <p>Integrates seamlessly with any SIP/VoIP system for flawless connectivity.</p>
          </div>
        </div>

        <div className={`${styles.featureItem} justify-center`}>
          <div className={styles.icon}>
            <VideoCallIcon style={{ color: '#143151' }} className="group-hover:text-[#387E89] transition-colors" />
          </div>
          <div>
            <strong>Instant Telehealth Integrations</strong>
            <p>Works effortlessly with Zoom, Microsoft Teams, Google Meet, WebEx, and more.</p>
          </div>
        </div>

        <p><strong>Supported platforms:</strong></p>
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
