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
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const NavButton = styled(Button)`
  margin: 0 8px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
    background: transparent;
  }
`;

const Logo = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const menuItems = ['About', 'Experience', 'Education', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <StyledLink
          key={item}
          to={item.toLowerCase()}
          smooth={true}
          duration={500}
          onClick={handleDrawerToggle}
        >
          <ListItem>
            <ListItemText primary={item} />
          </ListItem>
        </StyledLink>
      ))}
    </List>
  );

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Logo variant="h6" sx={{ flexGrow: 1 }}>
            HNS Education
          </Logo>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
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
            <div>
              {menuItems.map((item) => (
                <StyledLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                >
                  <NavButton>
                    {item}
                  </NavButton>
                </StyledLink>
              ))}
            </div>
          )}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar; 