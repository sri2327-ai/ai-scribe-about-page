
import React from 'react';

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
  return (
    <div 
      style={{
        position: sx?.position || 'relative',
        width: sx?.width || '100%',
        overflow: sx?.overflow || 'hidden',
        backgroundColor: sx?.bgcolor || 'black',
        height: sx?.height?.md || '100vh',
        minHeight: sx?.minHeight?.md || '600px',
        ...sx
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TechHeroBox;
