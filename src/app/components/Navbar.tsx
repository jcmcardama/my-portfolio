import { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  Box, useTheme, useMediaQuery, Divider,
  Avatar,
} from '@mui/material';
import MenuIcon  from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/components/Navbar.scss';
import { NAV_ITEMS } from '../utils/constants';
// import carloLogo from '../assets/carlo_logo.png';

export default function Navbar() {
  const theme   = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const navLinkClass = (active: boolean) =>
    active ? 'navbar-link active' : 'navbar-link';

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar className="navbar-toolbar">
          {/* Logo / Name */}
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            className="navbar-brand"
          >
            <Avatar className="navbar-avatar">JC</Avatar>
            {/* <Avatar alt="JCMC logo" src={carloLogo} /> */}
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box className="navbar-links">
              {NAV_ITEMS.map(item => (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  disableRipple
                  className={navLinkClass(isActive(item.path))}
                >
                  {item.label}
                </Button>
              ))}
              <ThemeToggle />
            </Box>
          )}

          {/* Mobile: Toggle + Burger */}
          {isMobile && (
            <Box className="navbar-mobile-actions">
              <ThemeToggle />
              <IconButton
                onClick={() => setDrawerOpen(true)}
                color="inherit"
                edge="end"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box className="navbar-drawer-header">
          <Typography variant="h6" className="navbar-drawer-title">
            Menu
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List className="navbar-list">
          {NAV_ITEMS.map(item => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
                className={isActive(item.path) ? 'navbar-drawer-button active' : 'navbar-drawer-button'}
              >
                <ListItemText
                  primary={item.label}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}