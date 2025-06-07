
import React from 'react';
import { Box, Container } from '@mui/material';

export const PEGHeader = () => {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid #e0e0e0',
        py: 2,
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/favicon.ico"
            alt="S10.ai"
            style={{
              height: '32px',
              width: 'auto',
            }}
          />
          <Box
            component="span"
            sx={{
              ml: 1,
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#143151',
            }}
          >
            S10.ai
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
