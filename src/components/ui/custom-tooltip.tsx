
import * as React from 'react';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { crushAIColors } from '@/theme/crush-ai-theme';

// Create a type that extends TooltipProps
interface StyledTooltipProps extends Omit<TooltipProps, 'classes'> {
  className?: string;
}

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  background: crushAIColors.primary,
  color: crushAIColors.text.white,
  borderRadius: '8px',
  fontFamily: "'Orbitron', sans-serif",
  fontSize: '16px',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `0 8px 20px rgba(${parseInt(crushAIColors.secondary.slice(1, 3), 16)}, ${parseInt(crushAIColors.secondary.slice(3, 5), 16)}, ${parseInt(crushAIColors.secondary.slice(5, 7), 16)}, 0.3)`,
    background: crushAIColors.primary,
  },
}));

// Properly type the styled component
const StyledTooltip = styled(
  ({ className, ...props }: StyledTooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    animation: 'glow 2s infinite alternate',
    transformOrigin: 'center',
  },
  '@keyframes glow': {
    '0%': {
      textShadow: `0 0 5px ${crushAIColors.secondary}, 0 0 10px ${crushAIColors.secondary}`,
    },
    '100%': {
      textShadow: `0 0 10px ${crushAIColors.secondary}, 0 0 20px ${crushAIColors.secondary}`,
    },
  },
}));

// Add proper typing for the component props
interface CustomTooltipProps {
  title: React.ReactNode;
  children?: React.ReactNode;
}

export default function CustomTooltip({ title, children }: CustomTooltipProps) {
  // Fix: Wrap children in a fragment to ensure it's always a valid React element
  return (
    <StyledTooltip title={title} arrow placement="top">
      {children ? <>{children}</> : <StyledButton>Hover me!</StyledButton>}
    </StyledTooltip>
  );
}
