
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { landingPageStyles } from '@/styles/landing-page-utils';

interface LandingCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outline';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const LandingCard: React.FC<LandingCardProps> = ({
  title,
  description,
  icon,
  footer,
  variant = 'default',
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) => {
  // Card variant styles
  const variantStyles = {
    default: {
      background: 'white',
      border: '1px solid #E5E7EB',
      boxShadow: landingPageStyles.card.boxShadow,
    },
    elevated: {
      background: 'white',
      border: 'none',
      boxShadow: landingPageStyles.card.hoverShadow,
    },
    outline: {
      background: 'transparent',
      border: `1px solid ${landingPageStyles.colors.secondary}`,
      boxShadow: 'none',
    }
  };

  // Selected style
  const selectedStyle = variantStyles[variant];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card
        sx={{
          height: '100%',
          background: selectedStyle.background,
          border: selectedStyle.border,
          boxShadow: selectedStyle.boxShadow,
          borderRadius: landingPageStyles.card.borderRadius,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: landingPageStyles.card.hoverShadow,
          }
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {icon && (
            <Box className="mb-4" sx={{ display: 'flex', alignItems: 'flex-start' }}>
              {typeof icon === 'string' ? (
                <img 
                  src={icon} 
                  alt={`${title} icon`} 
                  style={{ height: '40px', width: '40px', objectFit: 'contain' }}
                  loading="lazy"
                />
              ) : (
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  backgroundColor: '#F3F4F6',
                }}>
                  {icon}
                </Box>
              )}
            </Box>
          )}

          <Typography 
            variant="h6"
            className={titleClassName}
            sx={{
              fontWeight: landingPageStyles.typography.h2.fontWeight,
              fontSize: '1.25rem',
              lineHeight: 1.4,
              color: landingPageStyles.colors.primary,
              mb: 2
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            className={descriptionClassName}
            sx={{
              fontWeight: landingPageStyles.typography.body1.fontWeight,
              fontSize: '1rem',
              lineHeight: 1.6,
              color: landingPageStyles.colors.gray[600],
              mb: 'auto'
            }}
          >
            {description}
          </Typography>

          {footer && (
            <Box className="mt-4">
              {footer}
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LandingCard;
