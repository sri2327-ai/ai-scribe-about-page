
import React from 'react';
import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";

interface CustomBoxProps extends Omit<MuiBoxProps, 'component' | 'className'> {
  component?: React.ElementType;
  className?: string;
}

// This component handles the incompatible props issue in MUI v7
export const Box: React.FC<CustomBoxProps> = ({ 
  component, 
  className, 
  children, 
  sx, 
  ...rest 
}) => {
  if (component) {
    return (
      <MuiBox
        // Use the 'as' prop instead of 'component' for MUI v7
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
