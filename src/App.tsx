import React from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoSlider = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  overflow: hidden;
  z-index: 1000;
  display: flex;
  align-items: center;
`;

const LogoTrack = styled(motion.div)`
  display: flex;
  gap: 24px;
  padding: 0 12px;
  white-space: nowrap;
`;

const Logo = styled.img`
  height: 25px;
  object-fit: contain;
  filter: brightness(0) invert(1);
`;

const Watermark = styled.img`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  opacity: 0.2;
  z-index: 1000;
  pointer-events: none;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ea5e9', // Modern sky blue
      light: '#38bdf8',
      dark: '#0284c7',
    },
    secondary: {
      main: '#8b5cf6', // Modern purple
      light: '#a78bfa',
      dark: '#7c3aed',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a', // Slate 900
      secondary: '#475569', // Slate 600
    },
    error: {
      main: '#ef4444', // Modern red
      light: '#f87171',
      dark: '#dc2626',
    },
    warning: {
      main: '#f59e0b', // Modern amber
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#06b6d4', // Modern cyan
      light: '#22d3ee',
      dark: '#0891b2',
    },
    success: {
      main: '#10b981', // Modern emerald
      light: '#34d399',
      dark: '#059669',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.9rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.05)',
    '0px 8px 16px rgba(0,0,0,0.05)',
    '0px 12px 24px rgba(0,0,0,0.05)',
    '0px 16px 32px rgba(0,0,0,0.05)',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.05)',
    '0px 8px 16px rgba(0,0,0,0.05)',
    '0px 12px 24px rgba(0,0,0,0.05)',
    '0px 16px 32px rgba(0,0,0,0.05)',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.05)',
    '0px 8px 16px rgba(0,0,0,0.05)',
    '0px 12px 24px rgba(0,0,0,0.05)',
    '0px 16px 32px rgba(0,0,0,0.05)',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.05)',
    '0px 8px 16px rgba(0,0,0,0.05)',
    '0px 12px 24px rgba(0,0,0,0.05)',
    '0px 16px 32px rgba(0,0,0,0.05)',
    '0px 20px 40px rgba(0,0,0,0.05)',
    '0px 24px 48px rgba(0,0,0,0.05)',
    '0px 28px 56px rgba(0,0,0,0.05)',
    '0px 32px 64px rgba(0,0,0,0.05)'
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  const logos = [...Array(16)].map((_, index) => (
    <Logo key={index} src="/hns-white.png" alt="HNS Logo" />
  ));

  return (
    <MUIThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Box 
          sx={{ 
            p: 0,
            m: 0,
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            minHeight: '100vh',
            width: '100vw',
            maxWidth: '100%',
            overflowX: 'hidden',
            position: 'relative'
          }}
        >
          <LogoSlider>
            <LogoTrack
              animate={{
                x: [0, '-50%']
              }}
              transition={{
                x: {
                  duration: 70,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
            >
              {logos}
              {logos}
            </LogoTrack>
          </LogoSlider>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Contact />
          <Watermark src="/hns mini.png" alt="HNS Watermark" />
        </Box>
      </StyledThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
