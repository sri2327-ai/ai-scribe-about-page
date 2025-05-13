
// Define standardized styles for landing page components
export const landingPageStyles = {
  // Typography
  typography: {
    h1: {
      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' }, // 24px-48px
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
      color: '#143151',
    },
    h2: {
      fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' }, // 20px-32px
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
      color: '#143151',
    },
    body1: {
      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }, // 14px-18px
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '-0.01em',
      color: '#4B5563',
    },
    caption: {
      fontSize: { xs: '0.75rem', sm: '0.8125rem', md: '0.875rem' }, // 12px-14px
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#6B7280',
    },
    button: {
      fontSize: { xs: '0.875rem', sm: '1rem' },
      fontWeight: 500,
      lineHeight: 1.5,
    }
  },
  
  // Spacing
  spacing: {
    section: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' }, // 40px-80px
    element: { xs: '0.75rem', sm: '1rem', md: '1.5rem', lg: '2rem' }, // 12px-32px
    cardPadding: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // 16px-24px
  },
  
  // Card styles
  card: {
    borderRadius: '0.75rem', // 12px
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    hoverShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
    width: { xs: '90vw', sm: '20rem', md: '22rem', lg: '25rem' }, // Mobile: 90% viewport, Desktop: 300-400px
    height: 'auto', // Height adjusts automatically
    padding: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // 16px-24px
  },
  
  // Button styles
  button: {
    primary: {
      backgroundColor: 'linear-gradient(135deg, #143151, #387E89)',
      hoverBackgroundColor: 'linear-gradient(135deg, #0a1c2e, #2c6069)',
      color: 'white',
      borderRadius: '50px',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
      hoverBoxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
      minHeight: '48px',
      padding: { x: { xs: '1rem', md: '1.5rem' }, y: { xs: '0.75rem', md: '1rem' } },
      transition: 'all 0.3s ease',
    },
    secondary: {
      backgroundColor: 'white',
      hoverBackgroundColor: '#F5F9FF',
      color: '#143151',
      borderRadius: '50px',
      border: '1px solid #143151',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
      hoverBoxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
      minHeight: '48px',
      padding: { x: { xs: '1rem', md: '1.5rem' }, y: { xs: '0.75rem', md: '1rem' } },
      transition: 'all 0.3s ease',
    }
  },
  
  // Animation durations
  animation: {
    fast: '0.2s',
    medium: '0.3s',
    slow: '0.5s',
  },

  // Main colors (preserving existing palette)
  colors: {
    primary: '#143151',
    secondary: '#387E89',
    tertiary: '#5192AE',
    light: '#F5F9FF',
    white: '#FFFFFF',
    gray: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    }
  }
};
