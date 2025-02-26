import React from 'react';
import { Box, Typography, Container, Paper, useTheme, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';

const ContactSection = styled(Box)`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
    pointer-events: none;
  }
`;

const ContactCard = styled(Paper)`
  padding: 48px;
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
  }
`;

const EmailContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  cursor: pointer;
  padding: 32px;
  border-radius: 16px;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.palette.primary.light}10, ${theme.palette.secondary.light}10)`};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `linear-gradient(135deg, ${theme.palette.primary.light}20, ${theme.palette.secondary.light}20)`};
  }
`;

const IconWrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
  color: white;
  margin-bottom: 16px;
`;

const CopyMessage = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px 24px;
  background: ${({ theme }) => theme.palette.primary.main};
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ProfileSection = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
  position: relative;
`;

const ProfileImage = styled(motion(Avatar))`
  width: 180px;
  height: 180px;
  border: 2px solid white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`};
  filter: blur(20px);
  z-index: 0;
`;

const Contact = () => {
  const theme = useTheme();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('havvanurseriin@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <ContactSection id="contact">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ 
              mb: 6,
              background: theme => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            Contact Me
          </Typography>

          <ContactCard elevation={3}>
            <ProfileSection>
              <GlowEffect
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <ProfileImage
                src="/teacher-profile.jpg"
                alt="Havva Nur Serin"
                whileHover={{ scale: 3.15 }}
                whileInView={{ scale: 2.95 }}
                transition={{ duration: 0.7 }}
              />
            </ProfileSection>

            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ 
                mb: 4,
                color: theme.palette.text.primary,
                fontWeight: 600
              }}
            >
              Let's Connect and Discuss Educational Opportunities
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ 
                mb: 6,
                color: theme.palette.text.secondary,
                maxWidth: '600px',
                margin: '0 auto 48px'
              }}
            >
              I'm always excited to discuss new teaching opportunities and ways to enhance mathematics education. 
              Feel free to reach out via email, and I'll get back to you as soon as possible.
            </Typography>

            <EmailContainer
              onClick={handleCopy}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconWrapper
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <EmailIcon sx={{ fontSize: 40 }} />
              </IconWrapper>
              <Typography
                variant="h6"
                sx={{ 
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  mb: 1
                }}
              >
                Email Address
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  color: theme.palette.primary.main,
                  fontWeight: 500
                }}
              >
                havvanurseriin@gmail.com
              </Typography>
              <Typography
                variant="body2"
                sx={{ 
                  color: theme.palette.text.secondary,
                  mt: 2
                }}
              >
                Click to copy email address
              </Typography>
            </EmailContainer>
          </ContactCard>
        </motion.div>
      </Container>

      {copied && (
        <CopyMessage
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          Email address copied to clipboard!
        </CopyMessage>
      )}
    </ContactSection>
  );
};

export default Contact; 