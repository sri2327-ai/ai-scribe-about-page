
import React from 'react';
import { Button as MuiButton } from "@mui/material";
import { Button } from '@/components/ui/button';
import { ArrowRight } from "lucide-react";

interface LandingButtonProps {
  variant?: 'contained' | 'outlined';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  useMuiButton?: boolean;
}

export const LandingButton = ({
  variant = 'contained',
  children,
  onClick,
  href,
  startIcon,
  endIcon,
  ariaLabel,
  className = '',
  useMuiButton = false
}: LandingButtonProps) => {
  const isPrimary = variant === 'contained';
  const buttonStyles = {
    background: isPrimary ? 'linear-gradient(135deg, #143151, #387E89)' : 'transparent',
    color: isPrimary ? 'white' : '#143151',
    border: isPrimary ? 'none' : '1px solid #143151',
    borderRadius: '50px',
    fontWeight: 500,
    padding: '10px 24px',
    fontSize: '1rem',
    boxShadow: isPrimary ? '0px 4px 12px rgba(20, 49, 81, 0.2)' : 'none',
    textTransform: 'none',
    transition: 'all 0.3s ease',
    "&:hover": {
      background: isPrimary ? 'linear-gradient(135deg, #0f243d, #2c6069)' : 'rgba(20, 49, 81, 0.05)',
      boxShadow: isPrimary ? '0px 6px 15px rgba(20, 49, 81, 0.25)' : 'none',
      transform: 'translateY(-2px)',
    },
    "&:focus": {
      boxShadow: `0px 0px 0px 3px ${isPrimary ? 'rgba(56, 126, 137, 0.3)' : 'rgba(20, 49, 81, 0.2)'}`,
    }
  };
  
  if (useMuiButton) {
    return (
      <MuiButton
        variant={variant}
        onClick={onClick}
        href={href}
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
        sx={buttonStyles}
        startIcon={startIcon}
        endIcon={endIcon || (isPrimary ? <ArrowRight className="h-4 w-4" /> : null)}
      >
        {children}
      </MuiButton>
    );
  }

  // ShadCN Button
  return (
    <Button
      variant={isPrimary ? "default" : "outline"}
      onClick={onClick}
      asChild={!!href}
      className={`rounded-full ${isPrimary ? 'bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0f243d] hover:to-[#2c6069]' : 'border-[#143151] text-[#143151]'} ${className}`}
    >
      {href ? (
        <a href={href} aria-label={ariaLabel}>
          {startIcon && <span className="mr-2">{startIcon}</span>}
          {children}
          {endIcon && <span className="ml-2">{endIcon}</span>}
          {!endIcon && isPrimary && <ArrowRight className="ml-2 h-4 w-4" />}
        </a>
      ) : (
        <>
          {startIcon && <span className="mr-2">{startIcon}</span>}
          {children}
          {endIcon && <span className="ml-2">{endIcon}</span>}
          {!endIcon && isPrimary && <ArrowRight className="ml-2 h-4 w-4" />}
        </>
      )}
    </Button>
  );
};
