
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Database, Server, CloudUpload, CloudDownload, RefreshCw } from 'lucide-react';
import { crushAIColors } from '@/theme/crush-ai-theme';

// Simpler EHR sync visualization with icons and animations
export default function EHRSyncScene() {
  return (
    <Box 
      sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        opacity: 0.6,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box 
        sx={{ 
          position: 'relative', 
          width: '80%', 
          maxWidth: 800,
          height: '100%', 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: 5,
          px: { xs: 2, md: 5 }
        }}
      >
        {/* Left EHR system */}
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0.3, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <Database 
              size={50} 
              color={crushAIColors.secondary} 
              style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.2))' }} 
            />
          </motion.div>
          <Box sx={{ mt: 2, color: crushAIColors.text.secondary, fontWeight: 500, fontSize: '0.8rem' }}>
            EHR System A
          </Box>
        </Box>

        {/* Central Sync Animation */}
        <Box sx={{ position: 'relative', mx: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <RefreshCw 
              size={34} 
              color={crushAIColors.primary} 
              style={{ filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.15))' }} 
            />
          </motion.div>
          
          {/* Data flow animations */}
          <Box sx={{ position: 'relative', width: '100%', height: 60, my: 2 }}>
            {/* Left to right data flow */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 50, opacity: [0, 1, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut" 
              }}
              style={{ position: 'absolute', top: 0 }}
            >
              <CloudUpload 
                size={24} 
                color={crushAIColors.tertiary}
              />
            </motion.div>
            
            {/* Right to left data flow */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: -50, opacity: [0, 1, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut" 
              }}
              style={{ position: 'absolute', bottom: 0 }}
            >
              <CloudDownload 
                size={24} 
                color={crushAIColors.primary}
              />
            </motion.div>
          </Box>
        </Box>

        {/* Right EHR system */}
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0.3, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', delay: 0.7 }}
          >
            <Server 
              size={50} 
              color={crushAIColors.secondary} 
              style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.2))' }} 
            />
          </motion.div>
          <Box sx={{ mt: 2, color: crushAIColors.text.secondary, fontWeight: 500, fontSize: '0.8rem' }}>
            EHR System B
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
