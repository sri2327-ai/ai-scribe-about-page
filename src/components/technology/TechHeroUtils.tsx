
import React from 'react';
import { Box as MuiBox } from '@mui/material';

// This is a utility component to help fix TechHero.tsx Box component issues
export const TechHeroBox = ({ 
  component, 
  children, 
  sx, 
  onMouseEnter, 
  onMouseLeave,
  ...rest 
}) => {
  // Return a div with event handlers and styling applied
  const style = {
    position: sx?.position || 'relative',
    width: sx?.width || '100%',
    overflow: sx?.overflow || 'hidden',
    backgroundColor: sx?.bgcolor || 'black',
    ...(sx?.height ? { height: typeof sx.height === 'object' ? undefined : sx.height } : {}),
    ...(sx?.minHeight ? { minHeight: typeof sx.minHeight === 'object' ? undefined : sx.minHeight } : {}),
    ...sx
  };
  
  // Handle responsive properties manually
  if (sx?.height && typeof sx.height === 'object') {
    if (sx.height.xs) style.height = sx.height.xs;
    // Additional responsive sizes would be handled in CSS
  }
  
  if (sx?.minHeight && typeof sx.minHeight === 'object') {
    if (sx.minHeight.xs) style.minHeight = sx.minHeight.xs;
    // Additional responsive sizes would be handled in CSS
  }

  return (
    <div 
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TechHeroBox;
