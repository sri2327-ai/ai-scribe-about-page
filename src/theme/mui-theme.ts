
import { createTheme } from '@mui/material/styles';

// Create a theme instance with the CRUSH AI brand colors
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#387E89', // Teal
      light: '#5192AE', // Turquoise
      dark: '#143151', // Deep Navy
    },
    secondary: {
      main: '#5192AE', // Turquoise
      light: '#A5CCF3', // Light Blue
      dark: '#143151', // Deep Navy
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8FAFB',
    },
    text: {
      primary: '#143151', // Deep Navy for primary text
      secondary: 'rgba(20, 49, 81, 0.7)', // Deep Navy with transparency for secondary text
    },
    error: {
      main: '#FF5252',
    },
    warning: {
      main: '#FFC107',
    },
    info: {
      main: '#A5CCF3', // Light Blue
    },
    success: {
      main: '#4CAF50',
    },
    divider: 'rgba(56, 126, 137, 0.12)', // Teal with transparency
  },
  typography: {
    fontFamily: '"Wix Madefor Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      color: '#143151', // Deep Navy
    },
    h2: {
      fontWeight: 700,
      color: '#143151', // Deep Navy
    },
    h3: {
      fontWeight: 600,
      color: '#143151', // Deep Navy
    },
    h4: {
      fontWeight: 600,
      color: '#143151', // Deep Navy
    },
    h5: {
      fontWeight: 500,
      color: '#143151', // Deep Navy
    },
    h6: {
      fontWeight: 500,
      color: '#143151', // Deep Navy
    },
    subtitle1: {
      color: '#387E89', // Teal
    },
    subtitle2: {
      color: '#387E89', // Teal
    },
    body1: {
      color: '#143151', // Deep Navy
    },
    body2: {
      color: 'rgba(20, 49, 81, 0.8)', // Deep Navy with transparency
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
        containedPrimary: {
          backgroundColor: '#387E89', // Teal
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#2A6068', // Darker Teal
          },
        },
        outlinedPrimary: {
          borderColor: '#387E89', // Teal
          color: '#387E89', // Teal
          '&:hover': {
            backgroundColor: 'rgba(56, 126, 137, 0.08)', // Teal with transparency
          },
        },
        textPrimary: {
          color: '#387E89', // Teal
          '&:hover': {
            backgroundColor: 'rgba(56, 126, 137, 0.08)', // Teal with transparency
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#143151', // Deep Navy
        },
      },
    },
  },
});

export default theme;
