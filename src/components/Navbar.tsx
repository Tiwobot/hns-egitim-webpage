import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/* Transparent over the hero, frosted glass once the page is scrolled. */
const StyledAppBar = styled(AppBar)<{ $scrolled: boolean }>`
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(16px)' : 'none')};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 4px 30px rgba(0, 0, 0, 0.08)' : 'none'};
  transition: all 0.35s ease;
`;

const NavButton = styled(Button)<{ $scrolled: boolean }>`
  margin: 0 4px;
  padding: 8px 18px;
  border-radius: 999px;
  font-weight: 500;
  color: ${({ $scrolled, theme }) =>
    $scrolled ? theme.palette.text.primary : 'rgba(255, 255, 255, 0.95)'};
  transition: all 0.25s ease;

  &:hover {
    background: ${({ $scrolled }) =>
      $scrolled ? 'rgba(14, 165, 233, 0.1)' : 'rgba(255, 255, 255, 0.15)'};
    color: ${({ $scrolled, theme }) =>
      $scrolled ? theme.palette.primary.main : '#ffffff'};
  }
`;

const Logo = styled(Typography)<{ $scrolled: boolean }>`
  font-weight: 700;
  cursor: pointer;
  letter-spacing: -0.01em;
  background: ${({ $scrolled, theme }) =>
    $scrolled
      ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
      : 'linear-gradient(135deg, #ffffff, #e0f2fe)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  const menuItems = ['About', 'Experience', 'Education', 'References', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ width: 240, pt: 4 }}>
      {menuItems.map((item) => (
        <StyledLink
          key={item}
          to={item.toLowerCase()}
          smooth={true}
          duration={600}
          offset={-70}
          onClick={handleDrawerToggle}
        >
          <ListItem>
            <ListItemText
              primary={item}
              primaryTypographyProps={{ fontWeight: 500 }}
            />
          </ListItem>
        </StyledLink>
      ))}
    </List>
  );

  return (
    <StyledAppBar position="fixed" $scrolled={scrolled} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flexGrow: 1 }}
          >
            <Logo variant="h6" $scrolled={scrolled}>
              HNS Education
            </Logo>
          </motion.div>
          {isMobile ? (
            <>
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: scrolled ? 'text.primary' : '#ffffff' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box component={motion.div}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {menuItems.map((item) => (
                <StyledLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={600}
                  offset={-70}
                >
                  <NavButton $scrolled={scrolled}>{item}</NavButton>
                </StyledLink>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
