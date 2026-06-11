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
import { NAV_ITEMS } from '../utils/constants';
import cloverLogo from '../assets/clover_dp.jpg';

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
            className="navbar-brand"
            component={NavLink}
            to="/"
            variant="h6"
          >
            <Avatar alt="CloveR logo" src={cloverLogo} />
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box className="navbar-links">
              {NAV_ITEMS.map(item => (
                <Button
                  className={navLinkClass(isActive(item.path))}
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  disableRipple
                  disabled={item.label == 'Projects'}
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
          <Typography className="navbar-drawer-title" variant="h6">
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
                className={isActive(item.path) ? 'navbar-drawer-button active' : 'navbar-drawer-button'}
                component={NavLink}
                to={item.path}
                disabled={item.label == 'Projects'}
                onClick={() => setDrawerOpen(false)}
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