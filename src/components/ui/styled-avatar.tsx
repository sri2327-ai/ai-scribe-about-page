
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage, AvatarProps } from '@/components/ui/avatar';

/**
 * Extended versions of Avatar components that accept className prop
 */

export interface StyledAvatarProps extends React.ComponentPropsWithoutRef<typeof Avatar> {
  className?: string;
}

export const StyledAvatar = React.forwardRef<HTMLSpanElement, StyledAvatarProps>(
  ({ className, ...props }, ref) => <Avatar ref={ref} {...props} />
);
StyledAvatar.displayName = 'StyledAvatar';

export interface StyledAvatarImageProps extends React.ComponentPropsWithoutRef<typeof AvatarImage> {
  className?: string;
}

export const StyledAvatarImage = React.forwardRef<HTMLImageElement, StyledAvatarImageProps>(
  ({ className, ...props }, ref) => <AvatarImage ref={ref} {...props} />
);
StyledAvatarImage.displayName = 'StyledAvatarImage';

export interface StyledAvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarFallback> {
  className?: string;
  children?: React.ReactNode;
}

export const StyledAvatarFallback = React.forwardRef<HTMLSpanElement, StyledAvatarFallbackProps>(
  ({ className, children, ...props }, ref) => (
    <AvatarFallback ref={ref} {...props}>
      {children}
    </AvatarFallback>
  )
);
StyledAvatarFallback.displayName = 'StyledAvatarFallback';
