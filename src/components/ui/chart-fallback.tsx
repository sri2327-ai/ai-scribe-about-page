
import React from 'react';

export const ChartFallback = React.memo(({ 
  width = 300, 
  height = 200, 
  message = "Chart visualization loading..." 
}: { 
  width?: number | string;
  height?: number | string;
  message?: string;
}) => {
  return (
    <div 
      style={{ 
        width, 
        height, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
        borderRadius: '8px',
        color: '#666',
        contain: 'strict' // Optimize rendering
      }}
    >
      {message}
    </div>
  );
});

ChartFallback.displayName = 'ChartFallback';
