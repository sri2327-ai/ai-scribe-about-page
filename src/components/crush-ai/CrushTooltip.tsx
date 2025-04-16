
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <Box 
      sx={{ 
        display: 'inline-flex',
        gap: '4px',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.1)'
            },
            fontWeight: 800,
            fontSize: 'inherit',
            color: 'inherit'
          }}
          onClick={() => handleToggle(index)}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
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
              opacity: activeIndex === index ? 1 : 0,
              pointerEvents: activeIndex === index ? 'auto' : 'none',
              transition: 'opacity 0.3s ease',
              zIndex: 10
            }}
          >
            {item.content}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
