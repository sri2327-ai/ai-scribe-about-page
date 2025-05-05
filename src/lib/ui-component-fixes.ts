
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { DialogTitle } from '@/components/ui/dialog';
import { DialogClose } from '@/components/ui/dialog';
import { SelectTrigger } from '@/components/ui/select';
import { SelectContent } from '@/components/ui/select';
import { SelectItem } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { TooltipTrigger } from '@/components/ui/tooltip';

/**
 * This utility provides wrapped versions of UI components
 * that don't accept className prop out of the box
 */

// Avatar components with className support
export const StyledAvatar = React.forwardRef<
  HTMLSpanElement, 
  React.ComponentPropsWithoutRef<typeof Avatar> & { className?: string }
>((props, ref) => {
  const { className, ...rest } = props;
  return <Avatar ref={ref} className={cn(className)} {...rest} />;
});
StyledAvatar.displayName = 'StyledAvatar';

export const StyledAvatarImage = React.forwardRef<
  HTMLImageElement, 
  React.ComponentPropsWithoutRef<typeof AvatarImage> & { className?: string }
>((props, ref) => {
  const { className, ...rest } = props;
  return <AvatarImage ref={ref} className={cn(className)} {...rest} />;
});
StyledAvatarImage.displayName = 'StyledAvatarImage';

export const StyledAvatarFallback = React.forwardRef<
  HTMLSpanElement, 
  React.ComponentPropsWithoutRef<typeof AvatarFallback> & { className?: string }
>((props, ref) => {
  const { className, ...rest } = props;
  return <AvatarFallback ref={ref} className={cn(className)} {...rest} />;
});
StyledAvatarFallback.displayName = 'StyledAvatarFallback';

// Dialog components with className support
export const StyledDialogTitle = React.forwardRef<
  HTMLHeadingElement, 
  React.ComponentPropsWithoutRef<typeof DialogTitle> & { className?: string, children?: React.ReactNode }
>((props, ref) => {
  const { className, children, ...rest } = props;
  return <DialogTitle ref={ref} className={cn(className)} {...rest}>{children}</DialogTitle>;
});
StyledDialogTitle.displayName = 'StyledDialogTitle';

export const StyledDialogClose = React.forwardRef<
  HTMLButtonElement, 
  React.ComponentPropsWithoutRef<typeof DialogClose> & { className?: string, children?: React.ReactNode }
>((props, ref) => {
  const { className, children, ...rest } = props;
  return <DialogClose ref={ref} className={cn(className)} {...rest}>{children}</DialogClose>;
});
StyledDialogClose.displayName = 'StyledDialogClose';

// Select components with className support
export const StyledSelectTrigger = React.forwardRef<
  HTMLButtonElement, 
  React.ComponentPropsWithoutRef<typeof SelectTrigger> & { className?: string, children?: React.ReactNode, id?: string }
>((props, ref) => {
  const { className, children, id, ...rest } = props;
  return <SelectTrigger ref={ref} className={cn(className)} id={id} {...rest}>{children}</SelectTrigger>;
});
StyledSelectTrigger.displayName = 'StyledSelectTrigger';

export const StyledSelectContent = React.forwardRef<
  HTMLDivElement, 
  React.ComponentPropsWithoutRef<typeof SelectContent> & { className?: string, children?: React.ReactNode, position?: string, sideOffset?: number }
>((props, ref) => {
  const { className, children, position, sideOffset, ...rest } = props;
  return <SelectContent ref={ref} className={cn(className)} position={position as any} sideOffset={sideOffset} {...rest}>{children}</SelectContent>;
});
StyledSelectContent.displayName = 'StyledSelectContent';

export const StyledSelectItem = React.forwardRef<
  HTMLDivElement, 
  React.ComponentPropsWithoutRef<typeof SelectItem> & { className?: string, children?: React.ReactNode }
>((props, ref) => {
  const { className, children, ...rest } = props;
  return <SelectItem ref={ref} className={cn(className)} {...rest}>{children}</SelectItem>;
});
StyledSelectItem.displayName = 'StyledSelectItem';

// Separator with className support
export const StyledSeparator = React.forwardRef<
  HTMLDivElement, 
  React.ComponentPropsWithoutRef<typeof Separator> & { className?: string }
>((props, ref) => {
  const { className, ...rest } = props;
  return <Separator ref={ref} className={cn(className)} {...rest} />;
});
StyledSeparator.displayName = 'StyledSeparator';

// Tooltip with children support
export const StyledTooltipTrigger = React.forwardRef<
  HTMLButtonElement, 
  React.ComponentPropsWithoutRef<typeof TooltipTrigger> & { children?: React.ReactNode }
>((props, ref) => {
  const { children, ...rest } = props;
  return <TooltipTrigger ref={ref} {...rest}>{children}</TooltipTrigger>;
});
StyledTooltipTrigger.displayName = 'StyledTooltipTrigger';
