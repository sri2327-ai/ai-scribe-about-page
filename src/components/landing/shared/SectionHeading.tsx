
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { landingPageStyles } from '@/styles/landing-page-utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Box sx={{ textAlign: align, mb: subtitle ? 3 : 0 }}>
        <Typography
          variant="h2"
          component="h2"
          className={titleClassName}
          sx={{
            color: landingPageStyles.colors.primary,
            fontWeight: landingPageStyles.typography.h2.fontWeight,
            fontSize: landingPageStyles.typography.h2.fontSize,
            lineHeight: landingPageStyles.typography.h2.lineHeight,
            letterSpacing: landingPageStyles.typography.h2.letterSpacing,
            mb: subtitle ? 2 : 0,
            maxWidth: align === 'center' ? '90%' : '100%',
            mx: align === 'center' ? 'auto' : 'initial'
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="body1"
            className={subtitleClassName}
            sx={{
              color: landingPageStyles.colors.gray[600],
              fontWeight: landingPageStyles.typography.body1.fontWeight,
              fontSize: landingPageStyles.typography.body1.fontSize,
              lineHeight: landingPageStyles.typography.body1.lineHeight,
              letterSpacing: landingPageStyles.typography.body1.letterSpacing,
              maxWidth: align === 'center' ? '800px' : '100%',
              mx: align === 'center' ? 'auto' : 'initial'
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
};

export default SectionHeading;
