
import React, { useState } from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Server, CloudUpload, CloudDownload, 
  RefreshCw, Code, FileText, CheckCircle, 
  ExternalLink, Lock, Upload, Download
} from 'lucide-react';
import { crushAIColors } from '@/theme/crush-ai-theme';

// Interactive EHR sync visualization with icons and hover effects
export default function EHRSyncScene() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const icons = [
    { 
      id: 'ehr-a', 
      icon: <Database size={48} color={crushAIColors.secondary} />, 
      position: { left: '15%', top: '50%' }, 
      tooltip: 'Electronic Health Record System A',
      description: 'Legacy EHR database with patient records'
    },
    { 
      id: 'ehr-b', 
      icon: <Server size={48} color={crushAIColors.secondary} />, 
      position: { right: '15%', top: '50%' }, 
      tooltip: 'Electronic Health Record System B',
      description: 'Cloud-based EHR platform'
    },
    { 
      id: 'sync', 
      icon: <RefreshCw size={40} color={crushAIColors.primary} />, 
      position: { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }, 
      tooltip: 'Real-time Synchronization',
      description: 'Bidirectional sync across platforms'
    },
    { 
      id: 'upload', 
      icon: <Upload size={26} color={crushAIColors.tertiary} />, 
      position: { left: '30%', top: '38%' }, 
      tooltip: 'Secure Data Transfer',
      description: 'Encrypted data upload'
    },
    { 
      id: 'download', 
      icon: <Download size={26} color={crushAIColors.tertiary} />, 
      position: { right: '30%', top: '62%' }, 
      tooltip: 'Instant Record Access',
      description: 'Fast data retrieval'
    },
    { 
      id: 'doc', 
      icon: <FileText size={26} color={crushAIColors.primary} />, 
      position: { left: '40%', top: '30%' }, 
      tooltip: 'Clinical Documentation',
      description: 'Unified medical records'
    },
    { 
      id: 'security', 
      icon: <Lock size={26} color={crushAIColors.primary} />, 
      position: { right: '40%', top: '30%' }, 
      tooltip: 'HIPAA-Compliant Security',
      description: 'End-to-end encryption'
    },
    { 
      id: 'check', 
      icon: <CheckCircle size={26} color={crushAIColors.secondary} />, 
      position: { left: '60%', top: '62%' }, 
      tooltip: 'Validation & Verification',
      description: 'Data integrity checks'
    },
    { 
      id: 'api', 
      icon: <Code size={26} color={crushAIColors.secondary} />, 
      position: { right: '25%', top: '35%' }, 
      tooltip: 'API Integration',
      description: 'Flexible REST API connections'
    }
  ];

  // Connection lines between icons
  const connections = [
    { from: 'ehr-a', to: 'sync', color: crushAIColors.tertiary, width: 2 },
    { from: 'sync', to: 'ehr-b', color: crushAIColors.primary, width: 2 },
    { from: 'ehr-a', to: 'doc', color: crushAIColors.tertiary, width: 1 },
    { from: 'ehr-b', to: 'security', color: crushAIColors.tertiary, width: 1 },
    { from: 'sync', to: 'upload', color: crushAIColors.primary, width: 1 },
    { from: 'sync', to: 'download', color: crushAIColors.primary, width: 1 },
    { from: 'ehr-b', to: 'api', color: crushAIColors.secondary, width: 1 },
    { from: 'ehr-a', to: 'check', color: crushAIColors.tertiary, width: 1 }
  ];

  // Helper function to find icon's position
  const getIconPosition = (id: string) => {
    const icon = icons.find(i => i.id === id);
    if (!icon) return { left: '0%', top: '0%' };
    
    const position = { ...icon.position };
    
    // Handle the special case for the center icon
    if (position.transform) return position;
    
    // Convert percentage strings to numbers
    const left = parseInt(position.left as string);
    const top = parseInt(position.top as string);
    
    return { left: `${left}%`, top: `${top}%` };
  };

  return (
    <Box 
      sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        opacity: 0.8,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          height: '100%', 
          maxWidth: 900,
          margin: '0 auto'
        }}
      >
        {/* Draw connection lines first (underneath the icons) */}
        {connections.map((connection, index) => {
          const fromPos = getIconPosition(connection.from);
          const toPos = getIconPosition(connection.to);
          
          // Calculate line length and angle
          // We'll use simple percentages for positioning
          const fromLeft = parseInt(fromPos.left as string);
          const fromTop = parseInt(fromPos.top as string);
          const toLeft = parseInt(toPos.left as string);
          const toTop = parseInt(toPos.top as string);
          
          // Calculate the mid-point for the animated data packet
          const midLeft = (fromLeft + toLeft) / 2;
          const midTop = (fromTop + toTop) / 2;
          
          // Calculate angle in degrees
          const angle = Math.atan2(toTop - fromTop, toLeft - fromLeft) * (180 / Math.PI);
          
          // Calculate length using distance formula (approximated for percentage-based values)
          const length = Math.sqrt(Math.pow(toLeft - fromLeft, 2) + Math.pow(toTop - fromTop, 2));
          
          return (
            <Box key={`connection-${index}`}>
              {/* Static line */}
              <Box 
                sx={{
                  position: 'absolute',
                  left: `${fromLeft}%`,
                  top: `${fromTop}%`,
                  width: `${length}%`,
                  height: `${connection.width}px`,
                  backgroundColor: connection.color,
                  opacity: hoveredIcon === connection.from || hoveredIcon === connection.to ? 0.9 : 0.4,
                  transition: 'opacity 0.3s ease',
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: 'left center',
                  zIndex: 1,
                }}
              />
              
              {/* Animated data packet moving along the line */}
              <motion.div
                initial={{ 
                  left: `${fromLeft}%`,
                  top: `${fromTop}%`,
                  opacity: 0 
                }}
                animate={{ 
                  left: `${toLeft}%`,
                  top: `${toTop}%`,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3 + Math.random() * 2,
                  delay: index * 0.8,
                  ease: "linear"
                }}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: connection.color,
                  zIndex: 2,
                  boxShadow: `0 0 10px ${connection.color}`
                }}
              />
            </Box>
          );
        })}
        
        {/* Place interactive icons */}
        {icons.map((item, index) => (
          <Box 
            key={`icon-${index}`}
            sx={{
              position: 'absolute',
              ...item.position,
              zIndex: 5,
              cursor: 'pointer',
              transform: item.position.transform || 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => setHoveredIcon(item.id)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{ 
                opacity: hoveredIcon === item.id ? 1 : 0.8, 
                scale: hoveredIcon === item.id ? 1.1 : 1
              }}
              transition={{ 
                opacity: { duration: 0.2 },
                scale: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
            >
              <Box sx={{ 
                filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.2))',
                background: hoveredIcon === item.id ? 'rgba(255,255,255,0.2)' : 'transparent',
                borderRadius: '50%',
                p: 1
              }}>
                {item.icon}
              </Box>
            </motion.div>
            
            {/* Tooltip that appears when hovering */}
            <AnimatePresence>
              {hoveredIcon === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    zIndex: 10,
                    width: 'max-content',
                    maxWidth: '180px',
                    marginTop: '10px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      mb: 0.5
                    }}
                  >
                    {item.tooltip}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.7rem',
                    }}
                  >
                    {item.description}
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
