'use client';
import { createTheme } from '@mui/material/styles';

const defaultEmptyFont = { fontSize: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 } }

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-wix-madefor-text)',
    fontWeightThin: 100,
    fontWeightExtraLight:	200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    fontWeightBlack: 900,
    // Value set in global style for responsive size changes
    h1: defaultEmptyFont,
    h2: defaultEmptyFont,
    h3: defaultEmptyFont,
    h4: defaultEmptyFont,
    h5: defaultEmptyFont,
    h6: defaultEmptyFont,
    subtitle1: {
      fontSize: '12px',
      [`@media (min-width:600px)`]: { fontSize: '12px' },
      [`@media (min-width:900px)`]: { fontSize: '14px' },
      [`@media (min-width:1280px)`]: { fontSize: '14px' },
      [`@media (min-width:1536px)`]: { fontSize: "16px" }
    },
    subtitle2: {
      fontSize: '10px',
      [`@media (min-width:600px)`]: { fontSize: '10px' },
      [`@media (min-width:900px)`]: { fontSize: '12px' },
      [`@media (min-width:1280px)`]: { fontSize: '12px' },
      [`@media (min-width:1536px)`]: { fontSize: '14px' }
    },
    body1: {
      fontSize: '12px',
      [`@media (min-width:600px)`]: { fontSize: '12px' },
      [`@media (min-width:900px)`]: { fontSize: '14px' },
      [`@media (min-width:1280px)`]: { fontSize: '14px' },
      [`@media (min-width:1536px)`]: { fontSize: "16px" }
    },
    body2: {
      fontSize: '10px',
      [`@media (min-width:600px)`]: { fontSize: '10px' },
      [`@media (min-width:900px)`]: { fontSize: '12px' },
      [`@media (min-width:1280px)`]: { fontSize: '12px' },
      [`@media (min-width:1536px)`]: { fontSize: '14px' }
    },
    button: {
      fontSize: '10px',
      [`@media (min-width:600px)`]: { fontSize: '10px' },
      [`@media (min-width:900px)`]: { fontSize: '12px' },
      [`@media (min-width:1280px)`]: { fontSize: '12px' },
      [`@media (min-width:1536px)`]: { fontSize: '14px' }
    },
    caption: {
      fontSize: '8px',
      [`@media (min-width:600px)`]: { fontSize: '8px' },
      [`@media (min-width:900px)`]: { fontSize: '10px' },
      [`@media (min-width:1280px)`]: { fontSize: '10px' },
      [`@media (min-width:1536px)`]: { fontSize: '12px' }
    },
    overline: {
      fontSize: '8px',
      [`@media (min-width:600px)`]: { fontSize: '8px' },
      [`@media (min-width:900px)`]: { fontSize: '10px' },
      [`@media (min-width:1280px)`]: { fontSize: '10px' },
      [`@media (min-width:1536px)`]: { fontSize: '12px' }
    },
  },
  colorSchemes: { light: true, dark: false },
  cssVariables: true,
  palette: {
    mode: "light",
    common: {
      black: '#000000',
      white: '#FFFFFF'
    },
    primary: {
      main: "#143151",
      light: "#387E89"
    },
    secondary: {
      main: "#5192AE",
      light: "#A5CCF3"
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
      disabled: "#808080"
    },
    background: {
      default: "#FFFFFF"
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50"
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350"
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800"
    },
    grey: {
      A100:" #f5f5f5",
      A200:" #eeeeee",
      A400:" #bdbdbd",
      A700:" #616161",
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px", // Rounded corners
          textTransform: "none", // Prevents uppercase text
          padding: "10px 20px", // Custom padding
          fontWeight: "bold",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)", // Subtle hover animation
          },
        },
        containedPrimary: {
          backgroundColor: "#143151",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#fff", // Slightly darker white for hover
            color: "#143151",
          },
        },
        outlinedPrimary: {
          borderColor: "#143151",
          color: "#143151",
          "&:hover": {
            backgroundColor: "#143151", // Subtle white overlay
            color: "#fff",
          },
        },
      },
    },
  },
});

export default theme;