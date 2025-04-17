
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { crushAIColors } from '@/theme/crush-ai-theme';

interface TooltipData {
  letter: string;
  content: string;
}

interface CrushTooltipProps {
  data: TooltipData[];
}

export const CrushTooltip: React.FC<CrushTooltipProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Initialize with first letter (C) active

  const handleToggle = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box 
      sx={{ 
        display: 'inline-flex',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: index === activeIndex 
              ? `2px solid ${crushAIColors.primaryFlat}` 
              : '2px solid transparent',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              border: `2px solid ${crushAIColors.primaryFlat}`
            },
            fontWeight: 800,
            fontSize: 'inherit',
            color: 'inherit',
            mx: '2px'
          }}
          onClick={() => handleToggle(index)}
          onMouseEnter={() => handleToggle(index)}
          tabIndex={0}
        >
          {item.letter}
          <Box
            sx={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginBottom: '10px',
              background: `rgba(20, 49, 81, 0.7)`,
              backdropFilter: 'blur(10px)',
              color: '#fff',
              fontSize: '12px',
              padding: '10px 15px',
              borderRadius: '12px',
              whiteSpace: 'nowrap',
              opacity: 1, // Always visible
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease',
              zIndex: 10,
              display: activeIndex === index ? 'block' : 'none'
            }}
          >
            {item.content}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
