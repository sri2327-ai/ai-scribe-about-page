
import React from 'react';
import { motion } from 'framer-motion';
import { Button as MuiButton } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import { landingPageStyles } from '@/styles/landing-page-utils';

interface LandingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const LandingButton: React.FC<LandingButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon = true,
  className = '',
  ariaLabel,
}) => {
  // Define size-based styles
  const sizeStyles = {
    small: {
      px: { xs: 2, md: 3 },
      py: { xs: 1, md: 1.25 },
      fontSize: { xs: '0.875rem', md: '0.9375rem' },
      iconSize: 18,
      boxSize: { xs: 22, md: 24 }
    },
    medium: {
      px: { xs: 3, md: 4 },
      py: { xs: 1.5, md: 1.75 },
      fontSize: { xs: '1rem', md: '1.0625rem' },
      iconSize: 20,
      boxSize: { xs: 26, md: 28 }
    },
    large: {
      px: { xs: 4, md: 5 },
      py: { xs: 2, md: 2.25 },
      fontSize: { xs: '1.125rem', md: '1.25rem' },
      iconSize: 24,
      boxSize: { xs: 30, md: 32 }
    },
  };
  
  // Selected size style
  const selectedSize = sizeStyles[size];

  // Variant styles
  const variantStyles = {
    primary: {
      background: `linear-gradient(135deg, ${landingPageStyles.colors.primary}, ${landingPageStyles.colors.secondary})`,
      hoverBackground: `linear-gradient(135deg, ${landingPageStyles.colors.primary}, ${landingPageStyles.colors.secondary})`,
      color: 'white',
      borderColor: 'transparent',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
      hoverBoxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    },
    secondary: {
      background: 'white',
      hoverBackground: '#F5F9FF',
      color: landingPageStyles.colors.primary,
      borderColor: landingPageStyles.colors.primary,
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.08)',
      hoverBoxShadow: '0px 4px 10px rgba(0, 0, 0, 0.12)',
    },
  };
  
  // Selected variant style
  const selectedVariant = variantStyles[variant];

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      <MuiButton
        variant={variant === 'primary' ? 'contained' : 'outlined'}
        onClick={onClick}
        aria-label={ariaLabel || typeof children === 'string' ? children : undefined}
        sx={{
          background: selectedVariant.background,
          color: selectedVariant.color,
          border: variant === 'secondary' ? `1px solid ${selectedVariant.borderColor}` : 'none',
          px: selectedSize.px,
          py: selectedSize.py,
          borderRadius: '50px',
          fontSize: selectedSize.fontSize,
          fontWeight: 600,
          boxShadow: selectedVariant.boxShadow,
          textTransform: 'none',
          minHeight: '48px', // Ensure touch-friendly size
          transition: 'all 0.3s ease',
          "&:hover": {
            background: selectedVariant.hoverBackground,
            boxShadow: selectedVariant.hoverBoxShadow,
            ".icon-box": {
              transform: "rotate(-45deg)",
            },
          },
          "&:focus": {
            boxShadow: '0px 0px 0px 3px rgba(56, 126, 137, 0.3)',
            outline: 'none',
          },
        }}
        startIcon={icon && (
          <div
            className="icon-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: selectedSize.boxSize.xs,
              height: selectedSize.boxSize.xs,
              borderRadius: "50%",
              border: `2px solid ${selectedVariant.color}`,
              transition: "transform 0.3s ease",
              marginRight: 8
            }}
          >
            <ArrowRight
              size={selectedSize.iconSize}
              className="transition-transform duration-300"
            />
          </div>
        )}
      >
        {children}
      </MuiButton>
    </motion.div>
  );
};

export default LandingButton;
