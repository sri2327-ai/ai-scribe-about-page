
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  background: '#1c1c3b',
  color: '#00e6ff',
  borderRadius: '8px',
  fontFamily: "'Orbitron', sans-serif",
  fontSize: '16px',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(0, 230, 255, 0.3)',
    background: '#1c1c3b',
  },
}));

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    animation: 'glow 2s infinite alternate',
    transformOrigin: 'center',
  },
  '@keyframes glow': {
    '0%': {
      textShadow: '0 0 5px #00e6ff, 0 0 10px #00e6ff',
    },
    '100%': {
      textShadow: '0 0 10px #00e6ff, 0 0 20px #00e6ff',
    },
  },
}));

export default function CustomTooltip({ title, children }) {
  return (
    <StyledTooltip title={title} arrow placement="top">
      {children || <StyledButton>Hover me!</StyledButton>}
    </StyledTooltip>
  );
}
