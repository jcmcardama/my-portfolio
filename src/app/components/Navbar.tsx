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
// import carloLogo from '../assets/carlo_logo.png';

interface NavItem {
  label: string;
  path:  string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home',     path: '/'         },
  { label: 'About',    path: '/about'    },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills',   path: '/skills'   },
  { label: 'Contact',  path: '/contact'  },
];

export default function Navbar() {
  const theme   = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const navLinkSx = (active: boolean) => ({
    color: active ? 'primary.main' : 'text.secondary',
    fontWeight: active ? 700 : 500,
    fontSize: '0.875rem',
    letterSpacing: '0.02em',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      right: 0,
      height: '1px',
      bgcolor: 'primary.main',
      transform: active ? 'scaleX(1)' : 'scaleX(0)',
      transition: 'transform 0.2s ease',
    },
    '&:hover::after': { transform: 'scaleX(1)' },
    '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
  });

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ maxWidth: 1100, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
          {/* Logo / Name */}
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontFamily: '"DM Serif Display", serif',
              fontWeight: 400,
              fontSize: '1.25rem',
              flexGrow: 1,
            }}
          >
            <Avatar sx={{ bgcolor: 'text.primary', color: 'background.default' }}>JC</Avatar>
            {/* <Avatar alt="JCMC logo" src={carloLogo} /> */}
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {NAV_ITEMS.map(item => (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  disableRipple
                  sx={navLinkSx(isActive(item.path))}
                >
                  {item.label}
                </Button>
              ))}
              <ThemeToggle />
            </Box>
          )}

          {/* Mobile: Toggle + Burger */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThemeToggle />
              <IconButton
                onClick={() => setDrawerOpen(true)}
                color="inherit"
                edge="end"
                sx={{ ml: 0.5 }}
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
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontFamily: '"DM Serif Display", serif', fontWeight: 400 }}>
            Menu
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ pt: 2 }}>
          {NAV_ITEMS.map(item => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  '&.active': { bgcolor: 'action.selected' },
                }}
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