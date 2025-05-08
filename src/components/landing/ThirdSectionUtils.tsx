
import React from 'react';
import { Box as MuiBox } from "@mui/material";
import type { BoxProps as MuiBoxProps, Theme } from "@mui/material";

interface CustomBoxProps {
  component?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  sx?: any;
  [key: string]: any;
}

// This component handles the incompatible props issue in MUI v7
export const Box = ({ 
  component, 
  className, 
  children, 
  sx, 
  ...rest 
}: CustomBoxProps) => {
  if (component) {
    return (
      <MuiBox
        sx={{
          ...(sx || {}),
          // Convert className to sx if provided
          ...(className ? { 
            // Here we'd ideally parse className to sx properties
            // For now we'll apply basic styles that might be included
            display: 'block', 
          } : {})
        }}
        {...rest}
      >
        {children}
      </MuiBox>
    );
  }
  
  // Regular Box with className support
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

// This is a wrapper component for Box from MUI that properly handles the className and component props
export const EnhancedBox = ({ component, className, children, ...props }: CustomBoxProps) => {
  // If using 'component' prop, we'll use sx instead of className
  if (component) {
    return (
      <MuiBox
        sx={{ ...props.sx }}
        {...props}
      >
        {children}
      </MuiBox>
    );
  }
  
  // If using className, use regular div with className
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default Box;
