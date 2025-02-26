import React from 'react';
import { Box, Typography, Container, Button} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    125deg,
    #0ea5e9 0%,
    #8b5cf6 50%,
    #ec4899 100%
  );
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
  padding: 40px 0;
  margin: 0;
  width: 100vw;
  max-width: 100%;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
    pointer-events: none;
    mix-blend-mode: soft-light;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    pointer-events: none;
  }
`;

const ContentWrapper = styled(Container)`
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;

const GlowingText = styled(motion.div)`
  position: relative;
  display: inline-block;
  color: white;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.05)
  );
  border-radius: 50%;
  filter: blur(10px);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-transform: none;
  font-weight: 600;
  padding: 12px 32px;
  font-size: 1.1rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const AnimatedButton = motion(StyledButton);

const StyledScrollLink = styled(ScrollLink)`
  text-decoration: none;
  color: inherit;
`;

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <HeroSection>
      {[...Array(8)].map((_, i) => (
        <FloatingShape
          key={i}
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.5 + Math.random() * 0.3,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, Math.random() * 0.4 + 0.8],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
      <ContentWrapper maxWidth={false} disableGutters>
        <motion.div style={{ y }}>
          <GlowingText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                marginBottom: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Havva Nur Serin
            </Typography>
          </GlowingText>
          <GlowingText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontWeight: 600,
                marginBottom: 4,
                opacity: 0.9,
              }}
            >
              IB Certified Elementary Math Teacher
            </Typography>
          </GlowingText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              sx={{
                marginBottom: 6,
                opacity: 0.8,
                maxWidth: '800px',
                margin: '0 auto 48px',
              }}
            >
              Inspiring young minds through innovative mathematics education
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <StyledScrollLink
                to="experience"
                smooth={true}
                duration={800}
                offset={-20}
              >
                <AnimatedButton
                  variant="outlined"
                  color="inherit"
                  size="large"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Experience
                </AnimatedButton>
              </StyledScrollLink>
              <StyledScrollLink
                to="contact"
                smooth={true}
                duration={800}
                offset={-20}
              >
                <AnimatedButton
                  variant="contained"
                  color="secondary"
                  size="large"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </AnimatedButton>
              </StyledScrollLink>
            </Box>
          </motion.div>
        </motion.div>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero; 