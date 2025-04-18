
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Slack, FileText, Calendar, CheckCircle, MessageSquare } from 'lucide-react';
import { bravoColors } from '@/theme/bravo-theme';
import MatrixRain from '@/components/ui/matrix-rain';
import { GradientTracing } from '@/components/ui/gradient-tracing';

export const CompatibilitySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [visibleConnections, setVisibleConnections] = useState<number[]>([]);

  // EHR and other healthcare systems that BRAVO integrates with
  const systems = [
    { name: 'Epic', icon: <FileText size={28} />, color: '#e51c23' },
    { name: 'Cerner', icon: <Calendar size={28} />, color: '#2196f3' },
    { name: 'athenahealth', icon: <CheckCircle size={28} />, color: '#43a047' },
    { name: 'eClinicalWorks', icon: <MessageSquare size={28} />, color: '#ff9800' },
    { name: 'Allscripts', icon: <Slack size={28} />, color: '#9c27b0' },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 0, to: 4 },
    { from: 3, to: 4 },
  ];

  // Fix: Use refs to get positions for connection lines
  const systemRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animation sequence for connections
    const timeout = setTimeout(() => {
      let delay = 0;
      connections.forEach((_, index) => {
        setTimeout(() => {
          setVisibleConnections(prev => [...prev, index]);
        }, delay);
        delay += 500; // Stagger the connections
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const getConnectionPath = (from: number, to: number) => {
    // Fix: Get positions from refs instead of hard-coded values
    const fromEl = systemRefs.current[from];
    const toEl = systemRefs.current[to];

    if (!fromEl || !toEl) return '';
    
    // Fix: Use getBoundingClientRect for accurate positioning
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();
    
    // Find container position to make coordinates relative
    const containerEl = document.querySelector('.compatibility-container');
    const containerRect = containerEl?.getBoundingClientRect() || { top: 0, left: 0 };
    
    const x1 = fromRect.left + fromRect.width/2 - containerRect.left;
    const y1 = fromRect.top + fromRect.height/2 - containerRect.top;
    const x2 = toRect.left + toRect.width/2 - containerRect.left;
    const y2 = toRect.top + toRect.height/2 - containerRect.top;
    
    return `M${x1},${y1} C${x1},${(y1+y2)/2} ${x2},${(y1+y2)/2} ${x2},${y2}`;
  };

  return (
    <Box 
      component="section" 
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: 'black',
              mb: 2,
            }}
          >
            Seamless EHR Integration
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: 'rgba(0,0,0,0.7)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            BRAVO syncs in real-time with all major EHR and practice management systems
          </Typography>
        </Box>

        <Box 
          className="compatibility-container"
          sx={{ 
            position: 'relative',
            height: { xs: '400px', md: '300px' },
            width: '100%',
            maxWidth: '1000px',
            mx: 'auto'
          }}
        >
          {/* Background effect */}
          <Box sx={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
            <MatrixRain 
              fontSize={14}
              color={bravoColors.primary}
              characters="10"
              fadeOpacity={0.05}
              speed={0.6}
            />
          </Box>

          {/* System icons with pulse effect */}
          <Box 
            sx={{ 
              position: 'relative', 
              width: '100%', 
              height: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
              zIndex: 2,
            }}
          >
            {systems.map((system, index) => (
              <motion.div
                key={system.name}
                ref={el => systemRefs.current[index] = el}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ 
                  position: isSmallScreen ? 'relative' : 'absolute',
                  top: isSmallScreen ? 'auto' : `${20 + Math.random() * 60}%`,
                  left: isSmallScreen ? 'auto' : `${20 + Math.random() * 60}%`,
                  margin: isSmallScreen ? '20px' : 0,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 70, md: 80 },
                    height: { xs: 70, md: 80 },
                    borderRadius: '50%',
                    bgcolor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    position: 'relative',
                    zIndex: 2,
                    border: '1px solid rgba(0,0,0,0.06)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: '-8px',
                      borderRadius: '50%',
                      background: `${system.color}20`,
                      zIndex: -1,
                      animation: 'pulse 2s infinite',
                    },
                  }}
                >
                  <Box sx={{ color: system.color, mb: 0.5 }}>
                    {system.icon}
                  </Box>
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>
                    {system.name}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Connection lines - Fixed with dynamic paths */}
          <svg 
            width="100%" 
            height="100%" 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              zIndex: 1, 
              pointerEvents: 'none',
            }}
          >
            {!isSmallScreen && visibleConnections.map((connectionIndex, i) => {
              const connection = connections[connectionIndex];
              const path = getConnectionPath(connection.from, connection.to);
              
              return (
                <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <GradientTracing
                    width={1000}
                    height={300}
                    baseColor="rgba(0,0,0,0.1)"
                    gradientColors={[bravoColors.accent.blue, bravoColors.accent.blue, bravoColors.accent.purple]}
                    animationDuration={3}
                    strokeWidth={2}
                    path={path}
                  />
                </motion.g>
              );
            })}
          </svg>
        </Box>
      </Container>

      {/* Add global animation */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(0.95);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
            100% {
              transform: scale(0.95);
              opacity: 0.5;
            }
          }
        `}
      </style>
    </Box>
  );
};
