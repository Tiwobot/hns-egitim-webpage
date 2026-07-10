import React, { useState } from 'react';
import { Box, Typography, Container, Tooltip, ClickAwayListener } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FooterSection = styled(Box)`
  padding: 48px 0 40px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`;

const InfinityMark = styled(motion.span)`
  display: inline-block;
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: rgba(255, 255, 255, 0.45);
  transition: color 0.4s ease, text-shadow 0.4s ease;

  &:hover {
    color: #a5b4fc;
    text-shadow: 0 0 16px rgba(165, 180, 252, 0.6);
  }
`;

const MESSAGE =
  "Some things are constant — like π, and the people who stay in your corner. I will always love you, even when I can't be your love. 09.07.2027";

const Footer = () => {
  // Controlled tooltip so it opens on hover (desktop) and on tap (mobile).
  const [open, setOpen] = useState(false);

  return (
    <FooterSection as="footer">
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 1 }}>
          Havva Nur Serin
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
          IB Certified Elementary Math Teacher
        </Typography>

        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Tooltip
            title={MESSAGE}
            placement="top"
            arrow
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            disableTouchListener
            slotProps={{
              popper: {
                disablePortal: true,
              },
            }}
          >
            <InfinityMark
              onClick={() => setOpen((prev) => !prev)}
              animate={{ opacity: [0.45, 0.8, 0.45] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              H∞T
            </InfinityMark>
          </Tooltip>
        </ClickAwayListener>

        <Typography variant="body2" sx={{ mt: 3, opacity: 0.5, fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} HNS Education. All rights reserved.
        </Typography>
      </Container>
    </FooterSection>
  );
};

export default Footer;
