
// Since we're not allowed to modify ThirdSection.tsx directly (it's in read-only files),
// let's create a wrapper or helper component that can be used to fix the issues

import React from 'react';

// This is a wrapper component for Box from MUI that properly handles the className and component props
export const EnhancedBox = ({ component, className, children, ...props }) => {
  // If using 'component' prop, we'll use sx instead of className
  if (component) {
    return (
      <Box component={component} sx={{ ...props.sx }} {...props}>
        {children}
      </Box>
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
