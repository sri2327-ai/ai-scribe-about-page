
import React from 'react';
import { TooltipTrigger } from '@/components/ui/tooltip';

/**
 * Extended versions of Tooltip components that accept children and other props
 */

export interface StyledTooltipTriggerProps extends React.ComponentPropsWithoutRef<typeof TooltipTrigger> {
  children?: React.ReactNode;
}

export const StyledTooltipTrigger = React.forwardRef<HTMLButtonElement, StyledTooltipTriggerProps>(
  ({ children, ...props }, ref) => (
    <TooltipTrigger ref={ref} {...props}>{children}</TooltipTrigger>
  )
);
StyledTooltipTrigger.displayName = 'StyledTooltipTrigger';
