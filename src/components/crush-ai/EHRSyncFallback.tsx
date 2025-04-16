
import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { crushAIColors } from '@/theme/crush-ai-theme';

export const EHRSyncFallback = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
        opacity: 0.6
      }}
    >
      <CircularProgress sx={{ color: crushAIColors.primary }} />
    </Box>
  );
};
