
import React from 'react';
import { Box as MuiBox } from "@mui/material";
import { Box } from "./ThirdSectionUtils"; // Import our custom Box component

// This is a wrapper component for Box from MUI that properly handles the className and component props
export const EnhancedBox = ({ component, className, children, ...props }) => {
  // If using 'component' prop, we'll use sx instead of className
  if (component) {
    return (
      <MuiBox component={component} sx={{ ...props.sx }} {...props}>
        {children}
      </MuiBox>
    );
  }
  
  // If using className, use regular Box without component prop
  return (
    <Box className={className} {...props}>
      {children}
    </Box>
  );
};

export default EnhancedBox;
