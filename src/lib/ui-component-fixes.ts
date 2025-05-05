
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage, 
  DialogTitle, 
  DialogClose, 
  SelectTrigger, 
  SelectContent,
  SelectItem,
  Separator,
  TooltipTrigger
} from '@/components/ui/';

/**
 * This utility provides wrapped versions of UI components
 * that don't accept className prop out of the box
 */

// Avatar components with className support
export const StyledAvatar = React.forwardRef<HTMLSpanElement, React.ComponentProps<typeof Avatar> & { className?: string }>(
  ({ className, ...props }, ref) => (
    <Avatar ref={ref} {...props} />
  )
);
StyledAvatar.displayName = 'StyledAvatar';

export const StyledAvatarImage = React.forwardRef<HTMLImageElement, React.ComponentProps<typeof AvatarImage> & { className?: string }>(
  ({ className, ...props }, ref) => (
    <AvatarImage ref={ref} {...props} />
  )
);
StyledAvatarImage.displayName = 'StyledAvatarImage';

export const StyledAvatarFallback = React.forwardRef<HTMLSpanElement, React.ComponentProps<typeof AvatarFallback> & { className?: string }>(
  ({ className, ...props }, ref) => (
    <AvatarFallback ref={ref} {...props} />
  )
);
StyledAvatarFallback.displayName = 'StyledAvatarFallback';

// Dialog components with className support
export const StyledDialogTitle = React.forwardRef<HTMLHeadingElement, React.ComponentProps<typeof DialogTitle> & { className?: string, children?: React.ReactNode }>(
  ({ className, children, ...props }, ref) => (
    <DialogTitle ref={ref} {...props}>{children}</DialogTitle>
  )
);
StyledDialogTitle.displayName = 'StyledDialogTitle';

export const StyledDialogClose = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof DialogClose> & { className?: string, children?: React.ReactNode }>(
  ({ className, children, ...props }, ref) => (
    <DialogClose ref={ref} className={cn(className)} {...props}>{children}</DialogClose>
  )
);
StyledDialogClose.displayName = 'StyledDialogClose';

// Select components with className support
export const StyledSelectTrigger = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof SelectTrigger> & { className?: string, children?: React.ReactNode, id?: string }>(
  ({ className, children, id, ...props }, ref) => (
    <SelectTrigger ref={ref} className={cn(className)} {...props}>{children}</SelectTrigger>
  )
);
StyledSelectTrigger.displayName = 'StyledSelectTrigger';

export const StyledSelectContent = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof SelectContent> & { className?: string, children?: React.ReactNode, position?: string, sideOffset?: number }>(
  ({ className, children, ...props }, ref) => (
    <SelectContent ref={ref} className={cn(className)} {...props}>{children}</SelectContent>
  )
);
StyledSelectContent.displayName = 'StyledSelectContent';

export const StyledSelectItem = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof SelectItem> & { className?: string, children?: React.ReactNode }>(
  ({ className, children, ...props }, ref) => (
    <SelectItem ref={ref} className={cn(className)} {...props}>{children}</SelectItem>
  )
);
StyledSelectItem.displayName = 'StyledSelectItem';

// Separator with className support
export const StyledSeparator = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Separator> & { className?: string }>(
  ({ className, ...props }, ref) => (
    <Separator ref={ref} {...props} />
  )
);
StyledSeparator.displayName = 'StyledSeparator';

// Tooltip with children support
export const StyledTooltipTrigger = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof TooltipTrigger> & { children?: React.ReactNode }>(
  ({ children, ...props }, ref) => (
    <TooltipTrigger ref={ref} {...props}>{children}</TooltipTrigger>
  )
);
StyledTooltipTrigger.displayName = 'StyledTooltipTrigger';
