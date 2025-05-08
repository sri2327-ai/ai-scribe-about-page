
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
        component={component as any}
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

export default Box;
