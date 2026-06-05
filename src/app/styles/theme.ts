import { createTheme, type Theme } from '@mui/material/styles';

const baseTypography = {
  fontFamily: '"DM Sans", sans-serif',
  h1: {
    fontFamily: '"DM Serif Display", serif',
    fontWeight: 400,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: '"DM Serif Display", serif',
    fontWeight: 400,
    letterSpacing: '-0.015em',
  },
  h3: {
    fontFamily: '"DM Serif Display", serif',
    fontWeight: 400,
    letterSpacing: '-0.01em',
  },
  h4: { fontWeight: 600, letterSpacing: '-0.01em' },
  h5: { fontWeight: 600 },
  h6: { fontWeight: 600 },
  body1: { lineHeight: 1.75 },
  body2: { lineHeight: 1.65 },
  button: {
    textTransform: 'none' as const,
    fontWeight: 600,
    letterSpacing: '0.01em',
  },
};

const baseComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 2,
        padding: '10px 28px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        boxShadow: 'none',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { borderRadius: 4, fontWeight: 500 },
    },
  },
};

export const lightTheme: Theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary:   { main: '#1A1A2E' },
    secondary: { main: '#4A6FA5' },
    background: {
      default: '#FAFAF8',
      paper:   '#FFFFFF',
    },
    text: {
      primary:   '#111111',
      secondary: '#555555',
    },
    divider: '#E8E8E4',
  },
  typography: baseTypography,
  components: {
    ...baseComponents,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(250,250,248,0.85)',
          backdropFilter: 'blur(12px)',
          boxShadow: 'none',
          borderBottom: '1px solid #E8E8E4',
        },
      },
    },
  },
  spacing: 8,
});

export const darkTheme: Theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary:   { main: '#E8E6DF' },
    secondary: { main: '#7BAFD4' },
    background: {
      default: '#0D0D0D',
      paper:   '#161616',
    },
    text: {
      primary:   '#F0EEE8',
      secondary: '#9A9890',
    },
    divider: '#2A2A2A',
  },
  typography: baseTypography,
  components: {
    ...baseComponents,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(13,13,13,0.85)',
          backdropFilter: 'blur(12px)',
          boxShadow: 'none',
          borderBottom: '1px solid #2A2A2A',
        },
      },
    },
  },
  spacing: 8,
});